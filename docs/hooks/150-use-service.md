---
id: use-redux-service
title: useReduxService
sidebar_label: useReduxService
---
import useBaseUrl from '@docusaurus/useBaseUrl';

```javascript
const service = useService(serviceDefinition);
```
The goal of ***useService*** is to create a singleton with two kinds of methods:
* ***Reducer* methods**: the role of these methods is to update the redux state. These methods are generally very simple.
* ***Saga* methods**: 
  * These methods are generally asynchronous and more complex. 
  * A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render
  * A saga method never updates the Redux state by itself. It always calls a *Reducer* method to do that.

> Check the **advanced** section to have an in depth view of a service.

### Parameters
#### Inputs
```javascript
serviceDefinition: {

  name: string, // the name of the service. Must be unique
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
  method1: function (state,    // the full redux state
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
import { useNotifications, useNotificationService } from "onekijs";
import React, { useCallback } from "react";

export default () => {
  // inject the central notificationService
  const notificationService = useNotificationService();

  // Function to send a notification on the topic referenced by the attribute "type"
  const sendNotification = useCallback(
    (type, msg) => {
      notificationService.send({
        topic: type,
        payload: {
          message: msg
        }
      });
    },
    [notificationService]
  );

  return (
    <div>
      <button onClick={() => sendNotification("error", "This is an error message")}>
        Send an error notification
      </button>
      |
      <button onClick={() => sendNotification("success", "This is a sucess message")}>
        Send a success notification
      </button>
      <SimpleNotificationWidget />
    </div>
  );
};

// Very simple Notification Widget
// Normally, this widget is central to the application (i.e: directly under <App/>)
const SimpleNotificationWidget = () => {
  const errors = useNotifications("error");
  const successes = useNotifications("success");

  return (
    <>
      <div>
        {errors.map((notification, index) => (
          <div style={{ backgroundColor: "red" }}>
            {notification.payload.message}
          </div>
        ))}
        {successes.map((notification, index) => (
          <div style={{ backgroundColor: "green" }}>
            {notification.payload.message}
          </div>
        ))}
      </div>
    </>
  );
};
```