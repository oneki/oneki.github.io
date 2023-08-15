---
id: global-service
title: Global service
sidebar_label: Global service
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is **Redux**

When the application starts, **Oneki.js** creates automatically a Redux store (or you can provide your own) and provides the following hooks to manipulate easily the global state **[useGlobalProp](../state-management/global-state#useglobalprop)**, **[useGlobalState](../state-management/global-state#useglobalstate)**, **[useGlobalStateService](../state-management/global-state#useglobalstateservice)**

**Oneki.js** offers the possiblity to create **Global services** to handle more complex use cases like this one:
- Add a notification in the global state
- Remove the notification after 5 seconds

## useGlobalService
A global service is instancied via the hook **useGlobalService**:

```javascript
const service = useGlobalService(serviceDefinition);
```
The goal of ***useGlobalService*** is to create a singleton with two kinds of methods:
* ***Reducer* methods**: the role of these methods is to update the redux state. These methods are generally very simple.
* ***Saga* methods**: 
  * These methods are generally asynchronous and more complex. 
  * A saga method is more like a flow or a scenario. Each step of the flow can be asynchronous and can trigger a re-render
  * A saga method never updates the Redux state by itself. It always calls a ***Reducer*** method to do that.

> A global service is unique across the application (singleton) and can be reused in multiple components.

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
                     context), // context contains {store, router, settings, i18n}
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
                        context)), // context contains {store, router, settings, i18n}
  method4: every (
              function* (payload,
                        context)), 
  ...
}
```
#### Outputs
```javascript
// A singleton service that has all reducers and saga methods defined in the serviceDefinition
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
A global service is not created inside a component as it's a singleton available across the whole app.
This example contains two files:
* One file to define the service
* A second file to show how a component can use this service

##### Definition of the service
<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=editor"
    style={{width:'100%', height:'700px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=preview"
    style={{width:'100%', height:'700px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

##### Component that uses the service

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=editor"
    style={{width:'100%', height:'800px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=preview"
    style={{width:'100%', height:'800px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>