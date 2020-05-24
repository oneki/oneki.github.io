---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> One of the main feature of **Oneki.js** is a powerful state management library based on these popular libraries
- Redux (global state) or useReducer (local state)
- Saga
- Immer

**Oneki.js** introduces the concept of ***services*** that handle a ***local*** (local service) or ***global*** state (redux service) very easily and following the best practices (immutability, action, reducers, ...).

The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the service.

## Architecture
<img alt="Service architecture" src={useBaseUrl('img/onekijs-State Management.svg')} />

## Global state
If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is **Redux**

When the application starts, **Oneki.js** creates automatically a Redux store (or you can provide your own) and introduces the concept of:
- **[Redux services](./global-state)** to update the global (Redux) state.
- **[useReduxSelector](./use-redux-selector)** to retrieve data from the global state.

A **Redux service** is a singleton and each component uses the same instance.

### Basic Example

```javascript
import { useReduxService, useReduxSelector } from "onekijs";
import React from "react";
import { myGlobalService } from "./MyGlobalService";

let uid = 0;
export default () => {
  // inject the global service that has a method "updateFoo" to update
  // the field "foo" of the global state
  // myGlobalService is a singleton shared by several components
  const service = useReduxService(myGlobalService);

  // useReduxSelector is a hook that selects a single entry in the Redux state
  const foo = useReduxSelector("foo");

  return (
    <div>
      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>
      {foo && <div>Value in global state: {foo}</div>}
    </div>
  );
};
```

## Local state
If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.<br/>
For simple use case, it's often enough to use the standard **useState** from React and we recommend that.

For more complexe use cases, **Oneki.js** introduce the concept of **[Local services](./local-state)**. <br/>
Generally, you only need to create a **[Local services](./local-state)** when a scenario is needed (or sometimes when the local state is a complex object)

An example of scenario is the retrieval of data via an AJAX GET request. The scenario consists of the following steps:
- Update the "loading" variable in the local state to **true**
- Perform the AJAX GET requests and store the result in the local state
- Update the "loading" variable in the local state to **false**

You can instanciate a **[Local services](./local-state)** multiple times in several components to reuse the same logic.<br/>
E.g: the scenario above is exactly what the hook **useGet** is doing and you can reuse it in several components

