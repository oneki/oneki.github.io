---
id: global-service
title: Global service
sidebar_label: Global service
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is **Redux**

When the application starts, **Oneki.js** creates automatically a Redux store (or you can provide your own) and provides the following hooks to manipulate the global state:
- **[useGlobalState](./use-redux-selector)**: instantiate a global service provided by **Oneki.js** to get and set data from/to the global state using a selector
- **[useGlobalProp](./use-global-prop)**: instantiate a global service provided by **Oneki.js** equivalent to the standard **useState** from React, but for the global state
- **[useGlobalService](./global-state)**: instantiate a custom global service handling complex logic.

A **[Global service](./global-state)** is a singleton and each component shares the same instance. It's created only the first time a component instantiates it.

## useGlobalState
**Oneki.js** provide the hook ***useGlobalState*** to retrieve and set data from/to the global state. Each time the data matching the selector is updated in the global state, the component is re-rendered.

***useGlobalState*** is similar to ***useSelector*** from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js<br/>
The difference between ***useSelector*** and ***useGlobalState*** are the following:

| useSelector (Redux)         |      useGlobalState (Oneki.js)   |
| ------------- | ------------- |
| A equality function can be passed as a second argument | There is no need for a equality function as the Redux state built by Oneki.js is fully immutable |
| There is no possibility to pass a default value | A default value can be passed as a second argument. This value is returned if the selector returns *undefined* |
| It doesn't return a function to update the global state | Along with the data returned by the selector, it also returns a function to update an entry in the global state

> Be sure to read the documentation of [Redux](https://redux.js.org/) to understand exactly how it works.

```javascript
const [globalState, setGlobalState] = useGlobalState(selector, defaultValue);
```


### Parameters
#### Inputs
```javascript
// [Optional] selector is a function returning a subset of the state
// default: (state) => state
selector: function(state): any

// [Optional] This value is returned if the selector returns *undefined*
defautValue: any 
```
#### Outputs
```javascript
// A subset of the global state
globalState: any

// function to update a specific entry in the global state
setGlobalState: function(key, value)
```

## useGlobalProp
**Oneki.js** provide the hook ***useGlobalState*** to retrieve data from the global state. Each time the data is updated in the global state, the component is re-rendered.

***useGlobalState*** is similar to ***useSelector*** from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js<br/>
The difference between ***useSelector*** and ***useGlobalState*** are the following:

| useSelector (Redux)         |      useGlobalState (Oneki.js)   |
| ------------- | ------------- |
| Selector is a function | Selector is a function or a string which represent a key in the Redux state. |
| A equality function can be passed as a second argument | There is no need for a equality function as the Redux state built by Oneki.js is fully immutable |
| There is no possibility to pass a default value | A default value can be passed as a second argument. This value is returned if the selector returns *undefined* |

> Be sure to read the documentation of [Redux](https://redux.js.org/) to understand exactly how it works.

```javascript
const result = useGlobalState(selector, defaultValue);
```


### Parameters
#### Inputs
```javascript
// [Mandatory] selector is a function or a string.
// If selector is a function, it returns a subset of the state
// If selector is a string, then the string represents a key in the state
selector: function(state): any | string

// [Optional] This value is returned if the selector returns *undefined*
defautValue: any 
```
#### Outputs
```javascript
// The result is a subset of the Redux state
result: any
```

## useGlobalService
A redux service is instancied via the hook **useGlobalService**:

```javascript
const service = useGlobalService(serviceDefinition);
```
The goal of ***useGlobalService*** is to create a singleton with two kinds of methods:
* ***Reducer* methods**: the role of these methods is to update the redux state. These methods are generally very simple.
* ***Saga* methods**: 
  * These methods are generally asynchronous and more complex. 
  * A saga method is more like a flow or a scenario. Each step of the flow can be asynchronous and can trigger a re-render
  * A saga method never updates the Redux state by itself. It always calls a ***Reducer*** method to do that.

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
A redux service is not created inside a component as it's a singleton available across the whole app.
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