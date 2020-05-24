---
id: use-redux-selector
title: useReduxSelector
sidebar_label: useReduxSelector
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
const result = useReduxSelector(selector, defaultValue);
```
***useReduxSelector*** is similar to ***useSelector*** from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js<br/>
The difference between ***useSelector*** and ***useReduxSelector*** are the following:

| useSelector (Redux)         |      useReduxSelector (Oneki.js)   |
| ------------- | ------------- |
| Selector is a function | Selector is a function or a string which represent a key in the Redux state. |
| A equality function can be passed as a second argument | There is no need for a equality function as the Redux state built by Oneki.js is fully immutable |
| There is no possibility to pass a default value | A default value can be passed as a second argument. This value is returned if the selector returns *undefined* |

> Be sure to read the documentation of [Redux](https://redux.js.org/) to understand exactly how it works.

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

## Examples
### Minimal example
This example shows how to use the selector as a string to retrieve directly a value from the Redux store by key.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'1100px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'1100px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>