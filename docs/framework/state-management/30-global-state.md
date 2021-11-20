---
id: global-state
title: Global state
sidebar_label: Global state
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

If several components react on the same data, it is good to use a global state to store it. The most popular library to manage this kind of state is **Redux**

When the application starts, **Oneki.js** automatically creates a Redux store (or you can provide your own) and provides generic hooks to manage it:

- **[useGlobalState](#useglobalstate)** is a hook equivalent to the standard **useState** from React, but for the global state. It retrieves a specific entry from the global state and provides a setter to upate it.
- **[useGlobalProp](#useglobalprop)** to react on a data from the global state using a selector (read only, no setter provided)

## useGlobalState

**Oneki.js** provide the hook **_useGlobalState_** to retrieve a specific data from the global state. Each time the data is updated in the global state, the component is re-rendered.

**_useGlobalState_** is similar to the standard **useState** from React, but for the global state. It retrieves a specific data from the global state and provides a setter to upate it.

```typescript
const [state, setState] = useGlobalState<T>(key: string, defaultValue?: T);
```

### Parameters

#### Inputs

| Variable | Type   | Description                                    |
| -------- | ------ | ---------------------------------------------- |
| **key**  | string | The identifier of a property in the global state. |
| **defaultValue**  | T | The value returned if the entry referenced by the key doesn't exist in the state |

:::info
The key identifies an entry in the global state. if the global state is the following

```javascript
{
  key1: "value1",
  key2: {
    "key 3": "value3"
  },
 key4: [{
   key5: "value5"
  }]
}
```

<p/>

then these keys are valid: 
- "key1"
- "key2"
- "key2.key 3"
- "key4.0.key5"

:::

#### Outputs

| Variable    | Type | Description                                          |
| ----------- | ---- | ---------------------------------------------------- |
| **prop** | T    | The result is the value of the property in the global state identified by the key |
| **setProp** | [SetGlobalStateFunction<T\>](../../api/types/SetGlobalStateFunction)   | A function to update the value in the global state identified by the key |

### Example

<Tabs>
  <TabItem value="cra">

```tsx
import { useGlobalState } from 'onekijs';
import React from 'react';

const Example: FC = () => {
    const [foo, setFoo] = useGlobalState<string>('foo', 'defaultFooValue');
    return (
        <div>
            <p>value: {foo}</p>
            <div><button onClick={() => setFoo('newValue')}>Update foo</button></div>
        </div>
    )
}
```

  </TabItem>
  <TabItem value="next">

```tsx
import { useGlobalState } from 'onekijs-next';
import React from 'react';

const Example: FC = () => {
    const [foo, setFoo] = useGlobalState<string>('foo', 'defaultFooValue');
    return (
        <div>
            <p>value: {foo}</p>
            <div><button onClick={() => setFoo('newValue')}>Update foo</button></div>
        </div>
    )
}
``` 

  </TabItem>
</Tabs>

## useGlobalProp

**Oneki.js** provides the `useGlobalProp` hook to retrieve data from the global state. Each time the data matching the selector is updated in the global state, the component is re-rendered.

`useGlobalProp` is similar to `useSelector` from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js<br/>

> Be sure to read the documentation of [Redux](https://redux.js.org/) to understand exactly how it works.

```typescript
const prop = useGlobalProp<T>(key: string, defaultValue?: T);
```

### Parameters

#### Inputs

| Variable | Type   | Description                                    |
| -------- | ------ | ---------------------------------------------- |
| **key**  | string | The identifier of a property in the global state. |
| **defaultValue**  | T | The value returned if the property referenced by the key doesn't exist in the state |

:::info
The key identifies an entry in the global state. if the global state is the following

```javascript
{
  key1: "value1",
  key2: {
    "key 3": "value3"
  },
 key4: [{
   key5: "value5"
  }]
}
```

<p/>

then these keys are valid: 
- "key1"
- "key2"
- "key2.key 3"
- "key4.0.key5"

:::

### Example

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/cart.tsx
```

#### Outputs

| Variable    | Type | Description                                          |
| ----------- | ---- | ---------------------------------------------------- |
| **prop** | T    | The result is the value of the entry in the global state identified by the key |
