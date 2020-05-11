---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


***Oneki.js*** provides an Internationalization (i18n) library to make an app available in multiple languages. This library works with both Create React app and Next.js

## Configuration
As usual, the configuration is done via ***settings.js***

```javascript
export default {
  i18n: {
    locales: ["en", "fr", "nl"], // supported locales
    defaultLocale: "en",
    url: "/locales" // the URL to retrieves the JSON files with the translations
  }
}
```

## Translations
The translations are stored in JSON files in the folders ***public/locales/{locale}/{namespace}.json***

```javascript
My-App
├─ public // see nextjs documentation
│  ├─ locales
│  │  └─ en
│  │  │  └─ common.json // locales in english
│  │  └─ fr
│  │  │  └─ common.json // locales in french
│  ├─ logo.svg 
│  ├─ robots.txt 
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
const [t, locale, loading] = useTranslation([namespaces]);
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
// A helper function to display a text in the current selected language
t: func(text: string),

// the current selected language
locale: string

// a flag to indicate that the retrieval of translation files is in progress
loading: boolean
```

#### Example
Here is a very basic example of a component available in multiple languages

```javascript
import React from 'react'
import { useTranslation } from 'onekijs';

const I18Component = () => {
  const [t, locale, loading] = useTranslation();
  const firstname = "Joe";
  return (
    <div>{t("Welcome")} {firstname} !</div>
  );
}
```