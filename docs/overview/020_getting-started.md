---
id: getting-started
title: Getting started
sidebar_label: Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Oneki JS can be used on top of one of these popular tools / frameworks:
- [Create React App](https://create-react-app.dev/): The most popular tool to build React app 
- [Next JS](https://nextjs.org/): offers additional features like server side rendering and static website

To get started, we are going to build a minimal application consisting of a simple website with two pages:
- A homepage displaying the message "This is the main page".
- A users page displaying the message "This is the user page".
- A menu to navigate between these two pages.

<Tabs
  defaultValue="cra"
  values={[   
    { label: 'Create React App', value: 'cra', },
    { label: 'Nextjs App', value: 'next', },
  ]
}>
<TabItem value="cra">
Create a new React application with <b><a href="https://create-react-app.dev/">Create React App</a></b> and add <b>onekijs</b> as a dependency:

```javascript
// npm install -g yarn
yarn create react-app my-app
cd my-app
yarn add onekijs
yarn install
```

and then replace the content of ***index.js*** with the following code:
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
<ul>
  <li>a <b>BrowserRouter</b>: if a BrowserRouter is not what you expect, you can configure it via props passed to <b>App</b></li>
  <li>a <b>Redux store</b>: if you want to provide your own redux store, you can pass it as a prop to <b>App</b></li>
</ul>
</TabItem>


<TabItem value="next">
Create a new React application with <b>Create Next App</b> and add <b>onekijs</b> as a dependency:

```javascript
// npm install -g yarn
yarn create next-app my-app
cd my-app
yarn add onekijs
yarn install
```
and then create the following files:

| File | Description |
| ---  | ----------- |
| src/pages/index.js | The **/** page |
| src/pages/users.js | The **/users** page |
| src/pages/_app.js | A **common wrapper** for all pages. This wrapper creates the Oneki JS Application |
| src/layout/SiteLayout | A Layout common to several pages. This layout is applied thanks to the HOC "withLayout" |

<!-- Copy and Paste Me -->
<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-next-hello-world-l4743?fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-next-hello-world-l4743?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'600px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>
</TabItem>
</Tabs>