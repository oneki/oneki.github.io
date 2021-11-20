---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';


***Oneki.js*** recommends placing the configuration settings in a central location. In general, the configuration is placed in the **src/settings.ts** file.

<img alt="Notification architecture" src={useBaseUrl('img/configuration/onekijs-Configuration.svg')} />;

The file name "**settings.ts**" is a convention and could be anything else. In fact, ***Oneki.js*** expects to receive a "Settings" object when it starts and this object can come from anywhere.

<Tabs>
  <TabItem value="cra">

```tsx
import { App } from 'onekijs';
import settings from '../settings';

<App settings={settings} />
```

<p/>

```javascript
My-App
│  ├─ src  
|  |  ├─ pages
|  |  |  └─ index.tsx
|  |  |  
|  |  └─ settings.ts
│
├─ .gitignore
├─ package.json
├─ README.md
├─ yarn.lock
```

  </TabItem>
  <TabItem value="next">

```tsx
import { AppProps } from 'next/app';
import { NextApp } from 'onekijs-next';
import settings from '../settings';

const MyApp: FC<AppProps> = (props) => {
  return <NextApp settings={settings} />;
};
```

<p/>

```javascript
My-App
│  ├─ src  
|  |  ├─ pages
|  |  |  ├─ _app.js
|  |  |  └─ index.tsx
|  |  |  
|  |  └─ settings.ts
│
├─ .gitignore
├─ package.json
├─ README.md
├─ yarn.lock
```  

  </TabItem>
</Tabs>

The contents of **settings.ts** are available throughout the application via the [useSettings](../configuration/use-settings) hook and are also automatically injected into all **reducers** and **saga**

Some framework components use the contents of ***settings.ts*** to configure themselves. For example, the notification service is configured like this:

```javascript
// content of settings.ts
export default {
  notification: {
    default: {
      ttl: 1000, // the number of milliseconds the notification is visible
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

For more information about booting an ***Oneki.js application***, see the [App component documentation page](../application/app).

<!-- ## Examples

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

Click on the icon <img width="20px" height="20px" alt="Notification architecture" src={useBaseUrl('img/hamburger_icon.svg')} /> to access the other files or [open the project in Code Sandbox](https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark) -->

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