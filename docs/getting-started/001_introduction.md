---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox, { GettingStartedSandbox} from '@site/src/components/Sandbox';
import { GettingStartedSnippet } from '@site/src/components/GithubSnippet';

**`onekijs`** is a React framework based of the following components: 
* [React](https://reactjs.org/)
* [Next.js](https://reacttraining.com/react-router/) or [Create React App](https://create-react-app.dev/)
* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/) 
* [Immer](https://immerjs.github.io/immer/docs/introduction) 

<img alt="Onekijs architecture" src={useBaseUrl('img/onekijs-Application.svg')} />;

<br/><br/>

The goal of **`onekijs`** is to propose a framework built on top of these librairies that hides most of their complexities.<br/>
Thus, the developer can more easily build webapps by respecting the best practices (e.g: immutability)<br/><br/>

## Prerequisite
**`onekijs`** is a framework built on top of React. It uses React to render the view<br/>It's strongly recommended to read **[the official tutorial](https://reactjs.org/tutorial/tutorial.html)** available on their website


Depending on the build tool you prefer to use, you should also read these documentations:

| Build tool | Description | Documentation
| ------- | ----------- | ---------------------
| **[Vite](https://vitejs.dev/)** | The most popular React bundler | **[Vite](https://vitejs.dev/)** and **[React router](https://reactrouter.com/docs/en/v6)**
| **[Create Next App](https://nextjs.org/)** | The tool to build a Next.js app. Useful if you need server rendering | **[Next.js](https://nextjs.org/)**

#### Optional reading
Under the hood, **`onekijs`** uses **[Redux](https://redux.js.org)** to manage global state, **[Immer](https://immerjs.github.io/immer)** for immutability and **[Redux Saga](https://redux-saga.js.org)** for asynchronous streams.<br/>
These libraries are completely hidden, but if you want to master **`onekijs`**, it can be interesting to read their docs.

## Next step
The objective of **`onekijs`** is to offer a complete React framework comparable to that offered by Angular.<br/>
**[In the next step](creating-project)**, we will build an application strongly based on the **[basic Angular application](https://angular.io/start)** that you can find on the official Angular webiste.<br/>