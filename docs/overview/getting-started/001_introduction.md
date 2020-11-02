---
id: introduction
title: Introduction
sidebar_label: Introduction
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

The goal of **Oneki.js** is to propose a framework built on top of these librairies that hides most of their complexities.<br/>
Therefore, the developer can build more easily webapps respecting the best practices (e.g: immutability)<br/><br/>

## Prerequisite
It is **strongly advised** to read these documentations before using **Oneki.js**

| Library | Description
| ------- | -----------
| React | Oneki.js is a framework built on top of React. It uses React to render the view<br/>It's recommended to read **[the official tutorial](https://reactjs.org/tutorial/tutorial.html)** available on their website
| React Router | Oneki.js uses React Router to offer the navigation between the pages composing the web application. <br />It's recommended to read **[their quick start](https://reactrouter.com/web/guides/quick-start)**

#### Optional reading
Under the hook, Oneki.js uses **Redux** to handle global state management, **Immer** for the immutability and **Redux Saga** for asynchronous flows.<br/>
These libraries are completely hidden, but if you want to master Oneki.js, it could be interesting to read their docs.

## Next step
The goal of OnekiJs is to offer a complete React framework comparable to the one offered by Angular.<br/>
**[In the next step](creating-project)**, we are going to build an application heavly based on the **[basic Angular app](https://angular.io/start)** you can find on the official Angular webiste.<br/>