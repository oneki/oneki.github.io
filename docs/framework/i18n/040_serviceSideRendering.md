---
id: serverSideRendering
title: Server side rendering
sidebar_label: Server side rendering
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

> **Note**: This page is specific to application built on top of **Next.js**

**Oneki.js** proposes a help function to use the translation files on server side

| Name                | Type                                                                        | Description |
| ------------------- | --------------------------------------------------------------------------- | ----------- |
| **withI18nStaticProps** | (locale: string, staticProps?: StaticProps, namespaces: string[] = []): any | Inject the content of the translation files in the props that will be received by the page component<br/><br/>**Note**: if no namespace are specified, only the `common` file is injected

**Example**

If the translation file `public/locales/fr/common.json` is: 
```json
{
  "Welcome": "Bienvenue"
}
```

<p/>
then

```javascript
withI18nStaticProps('fr', {
    props: {
      name: 'Doe',
      firstname: 'John'
    },
});
```

<p/>
returns

```javascript
{
  props: {
    name: 'Doe',
    firstname: 'John',
    translations: {
      common: {
        "Welcome": "Bienvenue"
      }
    }
  }
}
```

The **<App /\>** component can automatically retrieve the translations of this structure

## Example

<Sandbox
name="step08-i18n"
type="getting-started/next"
height="600"
modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
/>
