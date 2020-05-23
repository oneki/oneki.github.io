---
id: useTranslation
title: useTranslation
sidebar_label: useTranslation
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To make a component available in multiple languages, you can use the hook ***useTranslation*** which has the following signature

```javascript
const [T, t, locale, loading] = useTranslation([namespaces]);
```

***useTranslation*** loads the translations from the server if there are not yet available locally

## Parameters
### Inputs
```javascript
// The translations can be split in multiple files to only load what is needed
// By convention, the namespace "common" contains translations common to any pages
// and you don't need to specify it
namespace: [string]
```

### Outputs
```javascript
// A component to translate JSX content
T: Component,

// A helper function to translate a string
t: func(text: string),

// the current selected language
locale: string

// a flag to indicate that the retrieval of translation files is in progress
loading: boolean
```

## Example

```jsx
import React from 'react'
import { useTranslation } from 'onekijs';

const IndexPage = () => {
  const [T, t, locale, loading] = useTranslation(['users', 'common']);
  const lastname = "Franki";
  const firstname = "Bruno";
  return (
    <div>
      {/*Basic example*/}
      <div title={t("Welcome")}><T>Welcome</T></div>

      {/*Example with variable*/}
      <div><T>Welcome {{lastname}} on Oneki.js</T></div>

      {/*Plural example*/}
      <div><T count={2}>user</T></div>

      {/*Force translation from a specific namespace*/}
      <div><T alias="common:user">user</T></div>

      {/*Complex example*/}
      <div><T alias="complex">Hello <b><i>mister</i> {{firstname}} {{lastname}} <i>male</i></b> <u>address</u> <span title={t("Welcome")}>Welcome</span></T></div>
    </div>
  );
}

export default IndexPage;

```

The content of public/locales/fr/common.json looks like this:

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
