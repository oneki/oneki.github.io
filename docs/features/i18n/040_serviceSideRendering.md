---
id: serverSideRendering
title: Server side rendering
sidebar_label: Server side rendering
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **Note**: This page is specific to application built on top of **Next.js**

**Oneki.js** proposes several helpers to generate pages in different languages on server side. These helpers assume that the path starts with the local and the dynamic attribute is named ***[lang]***<br/>

The following structure is expected:

```javascript
My-App
├─ src
│  ├─ pages // folder containing all pages. Pages are the entry points (see nextjs doc)
│  │  ├─ [lang] // a folder is created for each top route
│  │  │  └─ ...
│  │  ├─ _app.js // the wrapper component common to all pages that bootstraps the App (<NextApp />)
│  │  └─ index.js // redirect the user to the correct locale
```

Therefore if the application is available in english and french, the URLs look like this:
- https://example.com/en/...
- https://example.com/fr/...

and https://example.com redirects the user to https://example.com/en or https://example.com/fr (based on the locale auto detected)

## Static pages

### getI18nStaticProps
For pages that can be generated at build time, **Next.js** retrieves the data by calling the method **getStaticProps**

**Oneki.js** proposes the helper ***getI18nStaticProps*** to retrieve the translations needed by the page, so they can be added in the output of **getStaticProps**

```javascript
import { getI18nStaticProps } from 'onekijs';
import fs from 'fs';
import path from 'path';

const i18nNamespaces = ['users', 'common'];

export async function getStaticProps(context) {
  // retrieve the translatons associated to namespaces users and common
  // the output has the following format:
  // {
  //   props: {
  //    "translations": {
  //       "users": {translations...}
  //       "common": {translations...} 
  //     },
  //     "locale": "en"
  //   }
  //   
  // }
  const result = getI18nStaticProps(fs, path, context.params.lang, i18nNamespaces);
  return result;
}
```

### withI18nPaths
As all routes starts with [lang], **Next.js** expects that a method **getStaticPaths** to define a list of paths that have to be rendered to HTML at build time

**Oneki.js** proposes the helper **withI18nPaths** to handle the [lang] attribute

```javascript
import { withI18nPaths } from 'onekijs';
import fs from 'fs';
import path from 'path';

// Simple example where [lang] is the only dynamic attribute
export async function getStaticPaths() {
  return {
    paths: withI18nPaths(fs, path),
    fallback: false
  }
}
```

