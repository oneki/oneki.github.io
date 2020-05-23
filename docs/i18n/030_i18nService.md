---
id: i18nService
title: useI18nService
sidebar_label: useI18nService
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Oneki.js provides a service 
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
