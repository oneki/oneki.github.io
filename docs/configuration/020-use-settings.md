---
id: use-settings
title: useSettings
sidebar_label: useSettings
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
const settings = useSettings();
const setting = useSetting(key);
```
***useSettings*** returns the whole object that is passed as a prop to the ***Application*** (generally defined in settings.js)<br/>
***useSetting*** returns a specific entry from Settings idenfified by **key**

> ***Note***: The settings object is frozen and can't be updated.

### useSettings Parameters
#### Inputs
useSettings has no input.

#### Outputs
```javascript
// the settings passed to <App /> or <NextApp /> via the "settings" props.
// We recommand to define this object in the file settings.js
settings: object
```

### useSetting Parameters
#### Inputs
```javascript
// key is the path of an element in the Settings object
key: string
```

#### Outputs
```javascript
// the value identified by the key in the Settings object
setting: any
```
## Examples
### Minimal example
The minimal example shows how to retrieve a setting inside a Component.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-settings-mqvi7?fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'900px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-settings-mqvi7?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'900px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>