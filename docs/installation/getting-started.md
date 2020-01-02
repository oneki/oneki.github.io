---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---
**Oneki.js** is a React framework based of the following components: 
* React
* React Router
* Redux
* Immer

The goal of **Oneki.js** is to propose a framework on top of these librairies that hides most of the complexity.
Therefore, the developer can built more quickly powerful webapps respecting the best practices.

## Installation

Create a new React application with **[Create React App](https://create-react-app.dev/)** and add **onekijs** as a dependency:
```
yarn create react-app my-app
cd my-app
yarn add onekijs
yarn install
```

## Creating a first App
The first app consists of a simple website with the following assets:
- A homepage displaying the message "This is the main page".
- A users page displaying the message "This is the user page".
- A menu to navigate between these two pages.

After creating the project as described above, replace the content of ***index.js*** with the following code:
```jsx
import { App } from "onekijs";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App>
    <div style={{backgroundColor:"#EEE"}}>
      <Link to="/">Home</Link> | <Link to="/users">Users</Link>
    </div>
    <Switch>
      <Route path="/users">
        <div>This is the user page</div>
      </Route>
      <Route>
        <div>This is the main page</div>
      </Route>
    </Switch>
  </App>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
Via a command line enter: ***yarn start*** to start a livereload webserver. The website is available on http://localhost:3000<br/>
Any modification done on the source code will refresh the page to take into account the change.

Please note that the ***App*** component automatically configures:
- a ***BrowserRouter***: if a BrowserRouter is not what you expect, you can configure it via props passed to ***App***
- a ***Redux store***: if you want to provide your own redux store, you can pass it as a prop to ***App***
