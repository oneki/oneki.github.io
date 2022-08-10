---
id: bind
title: Binding
sidebar_label: Binding
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

It is often useful to create a new computed property based on one or more field values and to automatically adapt this new property when these field values change.
**Oneki.js** provides two hoos to create a computed property:

- The **[useBind](#usebind-hook)** hook for synchronous bindings
- The **[useAsyncBind](#useasyncbind-hook)** hook for asynchronous bindings



## useBind hook

To create a computed property synchronously inside, you should use the **[useBind](../../api/functions/useBind)** hook.  

```javascript
const result = useBind(binder, observed);
```

### Input

| Parameter    | Type          | Description                                                                 |
| ------------ | ------------- | --------------------------------------------------------------------------- |
| **binder**\*   | [Binder](../../api/types/Binder) | Function receiving as arguments the values of the observed fields and returning the binding value.<br/>**Example:**: `` (firstname: string, lastname: string) => `${firstname} ${lastname}` ``
| **observed** | any[] | A array of fieldnames observed by the binder. You must use useValue to react of these fields<br/>**Example:**: `[useValue('firstname'), useValue('lastname')]`                               |

### Output
The output is the calculated property and the type is infered from the result of the function.

### Example

```jsx
import { useBind, useValue } from 'onekijs';

const fullname = useBind((firstname: string, lastname: string) => {
    return `${firstname} ${lastname}`
}, [useValue('firstname'), useValue('lastname')])
```

## useAsyncBind hook

To create a asynchronous computed property, you should use the **`useAyncBind`** hook.  
**`useAsyncBind`** accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true

```javascript
const [result, loading, error] = useAsyncBind(binder, observed);
```

### Input

| Parameter    | Type          | Description                                                                 |
| ------------ | ------------- | --------------------------------------------------------------------------- |
| **binder**\*   | [AsyncBinder](../../api/types/AsyncBinder) | A synchronous or asynchronous function receiving as arguments the values of the observed fields and returning the binding value.<br/>**Example:**: `` username => `asyncGet(`/userinfo/${username}`) ``
| **observed** | any[] | A array of fieldnames observed by the binder. You must use useValue to react of these fields<br/>**Example:**: `[useValue('username')]` 

```jsx
import { asyncGet, useAsyncBind, useValue } from 'onekijs'; // or from 'onekijs-next'

const [repositories, loading, error] = useAsyncBind((staging: string) => {
    return asyncGet(`/repositories/${staging}`)
}, [useValue('staging')])
```

<br/>

:::info
It's a two phase binding

- An observed value is changed ->  **`useAsyncBind`** is executed. It forces a rerendering of the component and returns **`[oldValue|undefined, true, null]`**
- The async function resolves, the asyncBind forces a second rerendering of the component and returns **`[newValue, false, null]`** if there is no error or **`[oldValue, false, Error(msg)]`** if there is an error
:::

### Output


| Parameter    | Type          | Description                                                                 |
| ------------ | ------------- | --------------------------------------------------------------------------- |
| **result**   | any? | The computed property. The type is infered from the result of the function. <br/>Returns the previous value (or undefined if it's the first execution) until the binder is resolved |
| **loading** | boolean | A boolean indicating whether the execution of the binder is pending or completed.                                                            |
| **error** | Error? | The error object if the binder resolves with an error |

### Example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/bind.tsx
```
