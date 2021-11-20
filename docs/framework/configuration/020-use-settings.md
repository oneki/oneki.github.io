---
id: use-settings
title: useSettings
sidebar_label: useSettings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

```javascript
const settings: AppSettings = useSettings();
```
<p/>

`useSettings` returns the configuration object that is passed as a prop to **<App/\>** (generally defined in src/settings.ts)

:::info
The settings object is frozen and can't be updated.
:::

### useSettings Parameters

#### Inputs

No input.

#### Outputs

| Variable | Type                                            | Description                                                                                                                            |
| -------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| settings | [AppSettings](../../api/interfaces/AppSettings) | the whole configuration object that generally defined in src/settings.ts<br/><br/>**Note**: This object is frozen and can't be updated |


## Examples

### Minimal example

<Tabs>
  <TabItem value="cra">
  <Sandbox
    name="cra-app-settings"
    height="600"
    modules={['/src/Main.tsx', '/src/settings.ts', '/src/index.tsx']}
  />
  </TabItem>
  <TabItem value="next">
  <Sandbox
    name="next-app-settings"
    height="600"
    modules={['/src/pages/index.tsx', '/src/settings.ts', '/src/pages/_app.tsx']}
  />  
  </TabItem>
</Tabs>
