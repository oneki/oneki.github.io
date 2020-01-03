---
id: use-local-service
title: useLocalService
sidebar_label: useLocalService
---
import useBaseUrl from '@docusaurus/useBaseUrl';

```javascript
const [state, service] = useLocalService(serviceDefinition, initialState);
```
The goal of ***useLocalService*** is to create a singleton with two kinds of methods:
* ***Reducer* methods**: the role of these methods is to update the local state. These methods are generally very simple.
* ***Saga* methods**: 
  * These methods are generally asynchronous and more complex. 
  * A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render
  * A saga method never updates the local state by itself. It always calls a *Reducer* method to do that.

> Check the **advanced** section to have an in depth view of a service.

### Parameters
#### Inputs
```javascript
serviceDefinition: {

  reducers: Reducer, // The Reducer methods
  sagas: Sagas, // The Saga methods
  inject: { // Inject other services into this service so it can use them.
    myService1, // myService1 is a service imported via import myService1 from '...'
    myService2,
    ...
  },
  init: function(context) // method called just after the creation of the service.

}
```
##### Reducer
Reducer is an object where each entry represents a ***Reducer* method**
```javascript
Reducer: {
  method1: function (state,    // the local state
                     payload,  // the payload of the action that was dispatched
                     context),
  method2: function (state, 
                     payload),
  ...
}
```
##### Saga
Saga is an object where each entry represents a ***Saga* method**
> Be sure to read the [documentation of Redux Saga](https://redux-saga.js.org/) to understand exactly how it works. Oneki.js tries to hide most of the complexity, but it's important to understand how it works underneath.

```javascript
Saga: {
  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.
              function* (payload, // the payload of the action that was dispatched
                        context)), 
  method4: every (
              function* (payload,
                        context)), 
  ...
}
```
#### Outputs
```javascript
// A singleton service that has all reducer and saga methods defined in the serviceDefinition
// The signature of these methods is the same whether they are Reducer or Saga.
service: {

  method1: function(payload),
  method2: function(payload),
  method3: function(payload),
  method4: function(payload),
  ...

}
```

## Examples
### Minimal example
```jsx
import { asyncPost, latest, useLocalService } from "onekijs";
import React from "react";
import { call } from "redux-saga/effects";

// Define the reducer and saga methods
// The serviceDefinition could be imported from another file for more clarity
const serviceDefinition = {
  reducers: {
    setUser: function(state, payload) {
      state.user = payload;
      state.loading = false;
    },
    setLoading: function(state, payload) {
      state.loading = payload;
    }
  },
  sagas: {
    // createUser is a flow with several steps:
    // - A first step to update the loading state, so the LoadingButton can display a "Loading ..." label
    // - A second step that simulate an AJAX request
    // - A third step that updates the state to set the result of the AJAX request
    // Between each step, a re-render can occurs
    createUser: latest(function*(user, { settings }) {
      
      // Call a reducer method to update the state
      yield call(this.setLoading, true);

      // create the user on the back end
      const savedUser = yield call(asyncPost, `${settings.server.baseUrl}/users`, user);

      // Call a reducer method to update the state
      yield call(this.setUser, savedUser);
      
    })
  }
};

export default () => {
  const [state, service] = useLocalService(serviceDefinition, {
    loading: false
  });
  const user = state.user;
  console.log(state);
  return (
    <div>
      <LoadingButton
        label="create user"
        loading={state.loading}
        onClick={() => service.createUser({ name: "Foo", firstname: "Bar" })}
      />
      {user && (
        <ul>
          <li>{user.name}</li>
          <li>{user.firstname}</li>
        </ul>
      )}
    </div>
  );
};

// A simple "loading" button
const LoadingButton = ({ loading, label, onClick }) => {
  const buttonLabel = loading ? "Loading ..." : label;
  return <button onClick={onClick}>{buttonLabel}</button>;
};
```