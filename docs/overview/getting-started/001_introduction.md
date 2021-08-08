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
Thus, the developer can more easily build webapps by respecting the best practices (e.g: immutability)<br/><br/>

## Prerequisite
It is **strongly recommended** to read these documentations before using **Oneki.js**

| Library | Description
| ------- | -----------
| React | Oneki.js is a framework built on top of React. It uses React to render the view<br/>It's recommended to read **[the official tutorial](https://reactjs.org/tutorial/tutorial.html)** available on their website
| React Router | Oneki.js uses React Router to offer the navigation between the pages composing the web application. <br />It's recommended to read **[their quick start](https://reactrouter.com/web/guides/quick-start)**

#### Optional reading
Under the hood, Oneki.js uses **Redux** to manage global state, **Immer** for immutability and **Redux Saga** for asynchronous streams.<br/>
These libraries are completely hidden, but if you want to master Oneki.js, it can be interesting to read their docs.

## Next step
The objective of Oneki.js is to offer a complete React framework comparable to that offered by Angular.<br/>
**[In the next step](creating-project)**, we will build an application strongly based on the **[basic Angular application](https://angular.io/start)** that you can find on the official Angular webiste.<br/>