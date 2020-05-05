---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


***Oneki.js*** recommends to put the configuration parameters in a central place. Generally, the configuration is placed in the file **settings.js**.

<img alt="Notification architecture" src={useBaseUrl('img/configuration/onekijs-Configuration.svg')} />;

The filename "**settings.js**" is a convention and could be anything else. Actually, ***Oneki.js*** expects to receive a "Settings" object during its bootstrap and this object could come from anywhere.

<Tabs
  defaultValue="next"
  values={[
    { label: 'Next App', value: 'next', },
    { label: 'Create React App', value: 'cra', },
  ]
}>
<TabItem value="next">

```
My-App
│  ├─ src
|  |  ├─ layout
|  |  |  └─ SiteLayout.js
|  |  |  
|  |  ├─ pages
|  |  |  ├─ _app.js
|  |  |  └─ index.js
|  |  |  
|  |  └─ settings.js
│
├─ .gitignore
├─ package.json
├─ README.md
├─ yarn.lock
```

</TabItem>
<TabItem value="cra">

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
</TabItem>
</Tabs>

The content of **settings.js** is available across the application via the hook [useSettings](../configuration/use-settings).

Some component of the framework uses the content ***settings.js*** to configure themself. For example, the notification service is configured like this:

```javascript
// content of settings.js
export default {
  notification: {
    default: {
      ttl: 1000, // the number of seconds the notification is visible
      max: 5
    },
    error: {
      ttl: 0, // if the notification is an error, it never disappears by itself
      max: 3,
      persist: true
    }
  }
};
```

For more information concerning the bootstrap of an ***Oneki.js application***, check the [App component documentation page](../overview/app).

## Examples

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/auth-oidc?module=%2Fsrc%2Fsettings.js&fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'800px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/auth-oidc?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

Click on the icon <img width="20px" height="20px" alt="Notification architecture" src={useBaseUrl('img/hamburger_icon.svg')} /> to access the other files or [open the project in Code Sandbox](https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark)

<!-- ### Minimal example
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
    style={{width:'100%', height:'470px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-settings-minimal-rq4c5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fsettings.js&theme=dark&view=preview"
    style={{width:'100%', height:'470px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

### Multi environments example
This example shows how to manage settings in a multi environments setup.
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
</Tabs> -->