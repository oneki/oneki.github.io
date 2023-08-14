---
id: use-setting
title: useSetting
sidebar_label: useSetting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

```javascript
const setting: T = useSetting<T>(key: string);
```

**_useSetting_** returns a specific entry from Settings idenfified by **key**

# Example

<Details summary={<summary>Get a property of settings.ts</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Use Setting', path: 'settings/UseSettingPage.tsx' },
      { label: 'settings.ts', path: 'settings.ts' },
    ]}
    preview={{
      path: 'settings/use-setting'
    }}
  />
</Details>

# Documentation

#### Inputs

| Variable | Type   | Description                                            |
| -------- | ------ | ------------------------------------------------------ |
| **key**      | string | The identifier of a field in the configuration object. |

#### Outputs

| Variable | Type | Description                                          |
| -------- | ---- | ---------------------------------------------------- |
| **setting**  | T    | a specific entry from Settings idenfified by **key** |


