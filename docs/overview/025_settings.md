---
id: settings
title: Settings
sidebar_label: Settings
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

***Oneki.js*** recommends to put the configuration parameters in a central place. Generally, the configuration is placed in the files **settings.*.js** next to the entry point **index.js**.

```javascript
My-App
│  ├─ index.js // The bootstrap of the app (entry point)
│  └─ settings.js  // This file that centralizes all the configurations
│
├─ .gitignore
├─ package.json
├─ README.md
├─ yarn.lock
```
The content of **settings.js** is available across the application via the hook [useSettings](../hooks/use-settings).

The filename "**settings.js**" is a convention and could be anything else. Actually, ***Oneki.js*** expects to receive a "Settings" object during its bootstrap and this object could come from anywhere.

For more information concerning the bootstrap of an ***Oneki.js application***, check the [App component documentation page](../components/app).

## Examples
### Minimal example
The minimal example consists of a simple settings file that is common to any environement.<br/>
The settings object is a simple object (not an array) that is passed to ***App*** as a prop.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-settings-minimal-rq4c5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fsettings.js&theme=dark&view=editor"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-settings-minimal-rq4c5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fsettings.js&theme=dark&view=preview"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

### Multi environments example
This example shows how to manage settings in a multi environment setup.
<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-settings-5sc1k?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fsettings.js&theme=dark&view=editor"
    style={{width:'100%', height:'1150px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-settings-5sc1k?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fsettings.js&theme=dark&view=preview"
    style={{width:'100%', height:'1150px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>