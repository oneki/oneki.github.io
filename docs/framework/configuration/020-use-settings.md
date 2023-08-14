---
id: use-settings
title: useSettings
sidebar_label: useSettings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

```javascript
const settings: AppSettings = useSettings();
```
<p/>

`useSettings` returns the configuration object that is passed as a prop to **<App/\>** (generally defined in src/settings.ts)


# Example

<Details summary={<summary>Get the content of settings.ts inside a page</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Use Settings', path: 'settings/UseSettingsPage.tsx' },
      { label: 'settings.ts', path: 'settings.ts' },
    ]}
    preview={{
      path: 'settings/use-settings'
    }}
  />
</Details>

# Documentation

#### Inputs

No input.

#### Outputs

| Variable | Type                                            | Description                                                                                                                            |
| -------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| settings | [AppSettings](../../api/interfaces/AppSettings) | the whole configuration object that generally defined in src/settings.ts<br/><br/>**Note**: This object is frozen and can't be updated |


