---
id: basic-app
title: Basic Application
sidebar_label: Basic Application
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The basic app consists of a simple website with the following assets:
- A homepage displaying the message "This is the main page".
- A users page displaying the message "This is the user page".
- A menu to navigate between these two pages.

After creating the project as described ***[on the installation page](installation)***, replace the content of ***index.js*** with the following code:
<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-basic-app-pqyr9?fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-basic-app-pqyr9?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

Via a command line enter:
```
yarn start
```
to start a livereload webserver. The website is available on http://localhost:3000<br/>
Any modification done on the source code will refresh the page to take into account the change.

Please note that the ***App*** component automatically configures:
- a ***BrowserRouter***: if a BrowserRouter is not what you expect, you can configure it via props passed to ***App***
- a ***Redux store***: if you want to provide your own redux store, you can pass it as a prop to ***App***
