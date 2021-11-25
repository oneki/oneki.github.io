---
id: useTranslation
title: useTranslation
sidebar_label: useTranslation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

To make a component available in multiple languages, you can use the **_useTranslation_** hook which has the following signature:

```javascript
const [T, t, locale, loading] = useTranslation([namespaces]);
```

<p/>

:::info
**_useTranslation_** loads the translations from the server if there are not yet available locally
:::

## Parameters

_Mandatory parameters are marked with a \*_

### Inputs

| Key        | Type   | Description        |
| ---------- | ------ | ------------------ |
| **namespace** | string[] | The translations can be split in several files to load only what is needed<br/>By convention, the "common" namespace contains translations common to all pages and it is not necessary to specify it<br/><br/>**Defaults to**: [] *(equivalent to ['common'])*|


### Outputs

| Key        | Type   | Description        |
| ---------- | ------ | ------------------ |
| **T** | FC<[TranslationProps](../../api/interfaces/TranslationProps)> | A component to translate JSX content<br/><br/>**Example**: <T alias="Welcome"\>Welcome {{name}} !</T\> |
| **t** | (content, alias?, count?) => string | A helper function to translate a string or a JSX element<br/><br/>**Example**: t(<b\>Welcome {{name}}</b\>, 'Welcome') |
| **locale** | string | The active language<br/><br/>**Example**: fr |
| **loading** | boolean | A flag to indicate that the download of the translation files is in progress

## Example

```jsx
import React from "react";
import { useTranslation } from "onekijs";

const IndexPage = () => {
  const [T, t, locale, loading] = useTranslation(["users", "common"]);
  const lastname = "Doe";
  const firstname = "John";
  return (
    <div>
      {/*Basic example*/}
      <div title={t("Welcome")}>
        <T>Welcome</T>
      </div>

      {/*Example with variable*/}
      <div>
        <T>Welcome {{ lastname }} on Oneki.js</T>
      </div>

      {/*Plural example*/}
      <div>
        <T count={2}>user</T>
      </div>

      {/*Pick up the translation in the file common*/}
      <div>
        <T alias="common:user">user</T>
      </div>

      {/*Complex example. Note the usage of t() to translate an attribute*/}
      <div>
        <T alias="complex">
          Hello{" "}
          <b>
            <i>mister</i> {{ firstname }} {{ lastname }} <i>male</i>
          </b>{" "}
          <u>address</u> <span title={t("Welcome")}>Welcome</span>
        </T>
      </div>
    </div>
  );
};

export default IndexPage;
```

<p/>

The content of `public/locales/fr/common.json` looks like this:

```json
// content of public/locales/fr/users.json
{
  "user": "utilisateur",
  "plural::user": "utilisateurs"
}

// content of public/locales/fr/common.json
{
  "Welcome": "Bienvenue",
  "Welcome {{lastname}} on Oneki.js": "Bievenue {{lastname}} sur Oneki.js",
  "Welcome <1>{{lastname}}</1> {{firstname}": "Bienvenue {{firstname}} <1>{{lastname}}</1>",
  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4> <5>Bienvenue</5>",
  "user": "utilisateur commun"
}
```
