---
id: use-settings
title: useSettings
sidebar_label: useSettings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

```javascript
const settings: AppSettings = useSettings();
```

**_useSettings_** returns the whole object that is passed as a prop to the **_Application_** (generally defined in settings.js)

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
    modules={['/src/index.tsx', '/src/settings.ts']}
  />
  </TabItem>
  <TabItem value="next">
  <Sandbox
    name="next-app-settings"
    height="600"
    modules={['/src/page/index.tsx', '/src/settings.ts', '/src/page/_app.tsx']}
  />  
  </TabItem>
</Tabs>
