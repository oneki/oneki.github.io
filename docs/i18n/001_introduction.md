---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> ***Oneki.js*** provides an Internationalization (i18n) library to make an app available in multiple languages. This library works with **Create React app** and **Next.js**

## Configuration
As usual, the configuration is done via ***settings.js***

```javascript
export default {
  i18n: {
    locales: ["en", "fr"], // supported locales
    defaultLocale: "en",
    url: "/locales" // the URL to retrieves the JSON files with the translations
  }
}
```

## Translations
The translations are stored in JSON files in the folders ***public/locales/{locale}/{namespace}.json***

```javascript
My-App
├─ public
│  ├─ locales
│  │  └─ en
│  │  │  └─ common.json // locales in english
│  │  └─ fr
│  │  │  └─ common.json // locales in french 
│  └─ ... // You are free to create your own structure 
```

#### Example
Here is a very simple example of a translation file:

```json
// content of public/locales/en/common.json
{
  "Welcome": "Welcome"
}

// content of public/locales/fr/common.json
{
  "Welcome": "Bienvenue"
}
```

## I18n
To make a component available in multiple languages, you can use the hook ***useTranslation*** which has the following signature

```javascript
const [T, t, locale, loading] = useTranslation([namespaces]);
```

### Parameters
#### Inputs
```javascript
// The translations can be split in multiple files to only load what is needed
// By convention, the namespace "common" contains translations common to any pages
// and you don't need to specify it
namespace: [string]
```

#### Outputs
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
Here is a very basic example of a component available in multiple languages
<Tabs
  defaultValue="next"
  values={[
    { label: 'Next App', value: 'next', },
    { label: 'Create React App', value: 'cra', },
  ]
}>
<TabItem value="next">

#### Client side only
This example shows how to use the i18n feature where everything is handled only on the client side.

```javascript
import React from 'react'
import { useTranslation } from 'onekijs';
import SiteLayout from '../../layout/siteLayout';

const IndexPage = () => {
  const [T, t, locale, loading] = useTranslation();
  const firstname = "Joe";
  return (
    <div>{t("Welcome")} {firstname} !</div>
  );
}
export default withLayout(IndexPage, SiteLayout);

```
<br/>

#### Static HTML export (hosted on a CDN)
This example shows how to use the i18n feature with static HTML export (hosted on a CDN)

```javascript
import React from 'react'
import { useTranslation,  getI18nStaticProps, withI18nPaths, withLayout } from 'onekijs';
import SiteLayout from '../../layout/siteLayout';
import fs from 'fs';
import path from 'path';

export async function getStaticProps(context) {
  // read the content of common.json and add it to static props
  const result = getI18nStaticProps(fs, path, context.params.lang)
  return result;
}

export async function getStaticPaths() {
  // add the locales to the static paths
  const result = withI18nPaths(fs, path);
  return {
    paths: withI18nPaths(fs, path),
    fallback: false
  }
}

const IndexPage = (props) => {
  const [T, t, locale, loading] = useTranslation();
  const firstname = "Joe";
  return (
    <div>{t("Welcome")} {firstname} !</div>
  );
}

export default withLayout(IndexPage, SiteLayout);
```
<br/>

#### Server side rendering
TODO

</TabItem>
<TabItem value="cra">

```javascript
import React from 'react'
import { useTranslation } from 'onekijs';

const I18Component = () => {
  const [T, t, locale, loading] = useTranslation();
  const firstname = "Joe";
  return (
    <div>{t("Welcome")} {firstname} !</div>
  );
}
```

</TabItem>
</Tabs>