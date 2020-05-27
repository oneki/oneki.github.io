---
id: i18nService
title: useI18nService
sidebar_label: useI18nService
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Oneki.js provides a service that provide some helper methods related to i18n like switching between locales.

### Hook

The service can be instancied via the hook **useI18nService**

```javascript
const i18nService = useI18nService();
```

The service exposes these methods:

| method                                          | Description            |
| ----------------------------------------------- | ---------------------- |
| changeLocale(locale[, context])                 | Switch between locales |
| fetchTranslations(locale, namespaces[,options]) | load translations      |

### Example

```javascript
import React from "react";
import {
  layout,
  useI18nService,
  I18nLink,
  useSetting,
  useLocale,
} from "onekijs";

const Example = ({ children }) => {
  const i18nService = useI18nService();
  const locales = useSetting("i18n.locales");
  const currentLocale = useLocale();
  return (
    <>
      <div>
        <h4>
          Change locale via buttons:
          <button onClick={() => i18nService.changeLocale("en")}>
            en
          </button> | <button onClick={() => i18nService.changeLocale("fr")}>fr</button>
        </h4>
        <h4>
          Change locale via dropdown:
          <select
            value={currentLocale}
            onChange={(e) => i18nService.changeLocale(e.target.value)}
          >
            {locales.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </h4>
      </div>
    </>
  );
};
```
