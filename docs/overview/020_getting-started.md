---
id: getting-started
title: Getting started
sidebar_label: Getting started
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

**Oneki.js** is a React framework based of the following components: 
* [React](https://reactjs.org/)
* [Next.js](https://reacttraining.com/react-router/) or [Create React App](https://create-react-app.dev/)
* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/) 
* [Immer](https://immerjs.github.io/immer/docs/introduction) 

<img alt="Onekijs architecture" src={useBaseUrl('img/onekijs-Application.svg')} />;

<br/><br/>

The goal of **Oneki.js** is to propose a framework on top of these librairies that hides most of their complexities.<br/>
Therefore, the developer can build more quickly powerful webapps respecting the best practices (e.g: immutability)<br/><br/>
It is **strongly advised** to have a good knowledge of these libraries to use Oneki.js correctly



### First app
To get started, we are going to build a minimal application consisting of a simple website with two pages:
- A homepage displaying the message "This is the main page".
- A users page displaying the message "This is the users page".
- A menu to navigate between these two pages.

:::tip Note
the documentation often contains two tabs: 
- one for apps built on top of Next.js
- one for apps built on top of create react app
:::

<Tabs
  defaultValue="next"
  values={[
    { label: 'Nextjs App', value: 'next', },      
    { label: 'Create React App', value: 'cra', },
  ]
}>
<TabItem value="next">

Create a new React application with <b>Create Next App</b> and add <b>onekijs</b> as a dependency:

```javascript
// npm install -g yarn
yarn create next-app my-app
cd my-app
yarn add onekijs
```
and then create the following files:

| File | Description |
| ---  | ----------- |
| src/pages/index.js | The **/** page |
| src/pages/users.js | The **/users** page |
| src/pages/_app.js | A **common wrapper** for all pages. This wrapper creates the Oneki.js Application |


:::note Code Editor
The code below is hosted on **[Code Sandbox](http://codesandbox.io/)**. <br/>
Click on the button "Open Sandbox" to view/edit the code with an online IDE.
:::

<Sandbox 
  name="next-app-basic" 
  height="600" 
  modules={['/src/pages/index.js','/src/pages/users.js','/src/pages/_app.js']} 
/>


Via a command line enter:
```
yarn dev
```
to start a livereload webserver. <br/>
The website is available on http://localhost:3000<br/>
Any modification done on the source code will refresh the page to take into account the change.

### Build
To build the application, enter:
```
yarn build
```
The result of the build is available in the folder **.next**. 

Check the documentation of [Next.js](https://nextjs.org/) for more information concerning the build / deploy possiblities

</TabItem>
<TabItem value="cra">
Create a new React application with <b><a href="https://create-react-app.dev/">Create React App</a></b> and add <b>onekijs</b> as a dependency:

```javascript
// npm install -g yarn
yarn create react-app my-app
cd my-app
yarn add onekijs
```

and then replace the content of ***index.js*** with the following code: 

:::note Code Editor
The code below is hosted on **[Code Sandbox](http://codesandbox.io/)**. <br/>
Click on the button "Open Sandbox" to view/edit the code with an online IDE.
:::
<Sandbox 
  name="cra-app-basic" 
  height="600" 
  modules={['/src/index.js']} 
/>

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
</Tabs>