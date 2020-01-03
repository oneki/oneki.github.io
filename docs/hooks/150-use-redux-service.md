---
id: use-redux-service
title: useReduxService
sidebar_label: useReduxService
---
import useBaseUrl from '@docusaurus/useBaseUrl';

```javascript
const service = useReduxService(serviceDefinition);
```
The goal of ***useReduxService*** is to create a singleton with two kinds of methods:
* ***Reducer* methods**: the role of these methods is to update the redux state. These methods are generally very simple.
* ***Saga* methods**: 
  * These methods are generally asynchronous and more complex. 
  * A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render
  * A saga method never updates the Redux state by itself. It always calls a *Reducer* method to do that.

> A redux service is unique across the application (singleton) and can be reused in multiple components.

> Be sure to read the documentation of [Redux](https://redux.js.org/) and [Redux Saga](https://redux-saga.js.org/) to understand exactly how it works.<br/>
**Oneki.js** has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.

> Check the **advanced** section to have an in depth view of a service.

### Parameters
#### Inputs
```javascript
serviceDefinition: {

  init: function(context) // method called just after the creation of the service.
  name: string, // the name of the service. Must be unique
  reducers: Reducer, // The Reducer methods
  sagas: Sagas, // The Saga methods
  inject: { // Inject other services into this service so it can use them.
    myService1, // myService1 is a service imported via import myService1 from '...'
    myService2,
    ...
  }

}
```
##### Reducer
Reducer is an object where each entry represents a ***Reducer* method**
```javascript
Reducer: {
  method1: function (state,    // the full redux state
                     payload,  // the payload of the action that was dispatched
                     context),
  method2: function (state, 
                     payload,
                     context),
  ...
}
```
##### Saga
Saga is an object where each entry represents a ***Saga* method**

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

  method1: function (payload),
  method2: function (payload),
  method3: function (payload),
  method4: function (payload),
  ...

}
```

## Examples
### Minimal example
A redux service is not created inside a component as it's a singleton available across the whole app.
This example contains two files:
* One file to define the service
* A second file to show how a component can use this service
##### Definition of the service
```jsx
import { latest } from "onekijs";
import { call, delay } from "redux-saga/effects";

// NotificationService is a very simple Redux service
// It updates the entry "notification" in the redux state and removes based on the TTL of the notification
export const notificationService = {
  name: "simpleNotification",
  reducers: {
    add: function(state, notification) {
        state.simpleNotification = notification
    },
    remove: function(state) {
      state.simpleNotification = null;
    }
  },
  sagas: {
    send: latest(function* (notification) {
        // set the notification in the Redux state
        console.log("ici", notification);
        yield call(this.add, notification);
        
        // wait the number of ms indicated in TTL
        yield delay(notification.ttl);

        // remove the notification from the Redux state
        yield this.remove(notification.id);
    })
  }
};
```
##### Component that uses this service
```jsx
import { useReduxService, useStoreProp } from "onekijs";
import React from "react";
import { notificationService } from "./NotificationService";

let uid = 0;
export default () => {
  // inject the notificationService.
  const service = useReduxService(notificationService);

  // useStoreProp is a hook that selects a single entry in the Redux state
  const notification = useStoreProp("simpleNotification");

  return (
    <div>
      <button
        onClick={() => service.send({ 
          id: `notif-${++uid})`,
          message: `This is a notification ! with id ${uid}`,
          ttl: 3000
        })}
      >create notification</button>

      {notification && (
        <div>Notification: {notification.message} - TTL: {notification.ttl} ms</div>
      )}
    </div>
  );
};
```