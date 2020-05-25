---
id: global-state
title: Global state
sidebar_label: Global state
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is **Redux**

When the application starts, **Oneki.js** creates automatically a Redux store (or you can provide your own) and provides the following hooks to manipulate the global state:
- **[useGlobalProp](#useglobalprop)** is a generic global service equivalent to the standard **useState** from React, but for the global state. It retrieves a specific data from the global state and provide a setter to upate it.
- **[useGlobalState](#useglobalstate)** to retrieve and react on data from the global state using a selector
- **[useGlobalStateService](#useglobalstateservice)** is a generic global service to update any data in the global state

## useGlobalProp
**Oneki.js** provide the hook ***useGlobalProp*** to retrieve a specific data from the global state. Each time the data is updated in the global state, the component is re-rendered.

***useGlobalState*** is similar to the standard **useState** from React, but for the global state. It retrieves a specific data from the global state and provide a setter to upate it.

```javascript
const [prop, setProp] = useGlobalProp(key, defaultValue);
```

### Parameters
#### Inputs
```javascript
// [Mandatory] The key identifies an entry in the global state
// if the global state is the following
// {
//   key1: "value1",
//   key2: {
//     "key 3": "value3"
//   },
//   "key4": [{
//     key5: "value5
//   }] 
// }
// These keys are valid: "key1", "key2", "key2.key 3", "key4.0.key5"
key: string

// [Optional] This value is returned if the entry is not found in the state
defautValue: any 
```
#### Outputs
```javascript
// The result is the value of the entry identified by the key
prop: any

// A function to update the value in the global state identified by the key
setProp: function(newValue)
```

## useGlobalState
**Oneki.js** provide the hook ***useGlobalState*** to retrieve data from the global state. Each time the data matching the selector is updated in the global state, the component is re-rendered.

***useGlobalState*** is similar to ***useSelector*** from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js<br/>

> Be sure to read the documentation of [Redux](https://redux.js.org/) to understand exactly how it works.

```javascript
const globalState = useGlobalState(selector, equalityFn);
```

### Parameters
#### Inputs
```javascript
// [Optional] selector is a function returning a subset of the state
// default: (state) => state
selector: function(state): any

// [Optional] a function to compare the previous and next value
// If the function returns true, it means the two values are equals
// By default, Oneki.js compare the two values like this:
// - If item and previousItem are immer object, it does a '==='
// - otherwise, it does a shallow compare
equalifyFn: function(item, previousItem): boolean
```
#### Outputs
```javascript
// A subset of the global state
globalState: any
```

## useGlobalStateService
**Oneki.js** provides a generic global service to update any data in the global state. This service is a singleton and each invocation of the hook returns the same instance.

```javascript
const service = useGlobalStateService();
```

The service returned has the following methods:

```javascript
// Method to update a specific entry in the global state
setProp: function(key, value)

// Delete a specific entry in the global state
deleteProp: function(key)
```


## Examples
TODO