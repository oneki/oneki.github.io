---
id: use-setting
title: useSetting
sidebar_label: useSetting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet } from '@site/src/components/GithubSnippet';

```javascript
const setting: T = useSetting<T>(key: string);
```

**_useSetting_** returns a specific entry from Settings idenfified by **key**

:::info
The setting object is frozen and can't be updated.
:::

### useSettings Parameters

#### Inputs

| Variable | Type   | Description                                            |
| -------- | ------ | ------------------------------------------------------ |
| **key**      | string | The identifier of a field in the configuration object. |

#### Outputs

| Variable | Type | Description                                          |
| -------- | ---- | ---------------------------------------------------- |
| **setting**  | T    | a specific entry from Settings idenfified by **key** |

## Examples

### Minimal example

<ExampleSnippet path="settings/UseSettingPage.tsx" />
