---
id: i18nService
title: I18n Service
sidebar_label: I18n Service
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Oneki.js offers a service that provides some help methods related to internationalization, such as switching from one language to another.

The service can be instancied with the **useI18nService** hook

```javascript
const i18nService = useI18nService();
```

<p/>
The service exposes these methods:

| Name                                            | Type                                                      | Description            |
| ----------------------------------------------- | --------------------------------------------------------- | ---------------------- |
| changeLocale                                    | [changeLocale](../../api/classes/I18nService#changelocale) | This method allows you to switch from one language to another |
| fetchTranslations | [fetchTranslations](../../api/classes/I18nService#fetchtranslations) | load translations                                         |

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
