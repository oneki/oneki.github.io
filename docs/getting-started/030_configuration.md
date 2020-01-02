---
id: configuration
title: Configuration
sidebar_label: Configuration
---
Several functions of ***Oneki.js*** can be configured via a central file called ***settings.js***

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