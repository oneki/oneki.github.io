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

**Oneki.js** tries to hide all the complexity and boiler plate code needed to handle correctly a state with these libraries.

**Oneki.js** proposes several hooks to handle easily an immutable ***local*** or  ***global*** state. These states are immutable thanks to [Immer](https://immerjs.github.io/immer/docs/introduction)<br/>
The global state is managed by [Redux](https://redux.js.org/introduction/getting-started).

The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the framework

## Global state
If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is **Redux**

When the application starts, **Oneki.js** creates automatically a Redux store (or you can provide your own) and provides generic hooks to handle it:
- **[useGlobalProp](./global-state)** is a generic global service equivalent to the standard **useState** from React, but for the global state. It retrieves a specific data from the global state and provide a setter to upate it.
- **[useGlobalState](./global-state)** to retrieve and react on data from the global state using a selector
- **[useGlobalStateService](./global-state)** is a generic global service to update any data in the global state

> ***Note***: For advanced use cases involving asynchronous flows, **Oneki.js** provides also a hook to create a **globalService**.<br/>This part is more complex and described in [another section of the documentation](../service/global-service)

### Basic Example

```javascript
import { useGlobalProp } from "onekijs";
import React from "react";
import { myGlobalService } from "./MyGlobalService";

let uid = 0;
export default () => {
  // useGlobalProp is a hook that selects a single entry in the Redux state
  const [foo, setFoo] = useGlobalProp("foo");

  return (
    <div>
      <button onClick={() => setFoo(`foo-${++uid})`)}>Update</button>
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

### Basic Example
This very basic example is for demonstration only as a simple **useState** would be normally enough.
```javascript
import { useLocalService } from "onekijs";
import React from "react";
import { myLocalService } from "./MyLocalService";

let uid = 0;
export default () => {
  // instanciate a local service
  const [state, service] = useLocalService(myLocalService);

  return (
    <div>
      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>
      {foo && <div>Value in global state: {foo}</div>}
    </div>
  );
};
```

The **myLocalService** looks like this:

```javascript
export default const myLocalService = {
  reducers: {
    updateFoo: function(state, fooValue) {
      // state is the local state
      // Immer is used under the hood to handle correctly immutability
      state.foo = fooValue;
    }
  }
};
```