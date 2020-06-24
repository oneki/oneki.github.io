---
id: bind
title: Binding
sidebar_label: Binding
---

import Sandbox from '@site/src/components/Sandbox';

It's often useful to create a new variable based on one or multiple field values and adapt automatically this new variable when those field values change.
There are different ways to create a binding

- The **[bind](#bind-method)** method provided by **[useForm](./use-form)** for synchronous bindings
- The **[asyncBind](#asyncbind-method)** method provided by **[useForm](./use-form)** for asynchronous bindings
- The **[useBind](#usebind-hook)** hook (only usable in **[custom wrappers](./custom-wrapper)**) for synchronous bindings
- The **[useAsyncBind](#useasyncbind-hook)** hook (only usable in **[custom wrappers](./custom-wrapper)**) for asynchronous bindings

## bind method

This method is provided by **[useForm](./use-form)** for creating synchronous bindings and must be a sibling of **[useForm](./use-form)**.  

:::note Note
It must only be used as a sibling of **[useForm](./use-form)** because it assumes that the rerendering is triggered by **[useForm](./use-form)**
:::

```jsx
import { useForm } from 'onekijs-cra'; // or from 'onekijs-next'

const { bind } = useForm();

const fullname = bind((firstname, lastname) => {
    return `${firstname} ${lastname}`
}, ['firstname', 'lastname'])
```

### Signature of bind

```javascript
const result = bind(binder, observed);
```

| Argument     | Description                                                                                            | Example                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **binder**   | A synchronous function receiving as arguments the observed field values and returning the binding value | `` (firstname, lastname) => `${firstname} ${lastname}` `` |
| **observed** | A array of fieldnames observed by the binder                                                           | `['firstname', 'lastname']`                               |

## asyncBind method

This method is provided by **[useForm](./use-form)** for creating asynchronous bindings and must be a sibling of **[useForm](./use-form)**.  
**`asyncBind`** accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true

```jsx
import { useForm, asyncGet } from 'onekijs-cra'; // or from 'onekijs-next'

const { asyncBind } = useForm();

const [repositories, loading, error] = asyncBind(environment => {
    return asyncGet(`/repositories/${environment}`)
}, ['environment'])
```

:::note Note
It's a two phase binding

- An observed value is changed -> **`useForm`** forces a rerendering of the component
- The  **`asyncBind`** is executed. Since it's an async function, it first returns **`[oldValue|undefined, true, null]`**
- The async function resolves, the asyncBind forces a rerendering of the component and returns **`[newValue, false, null]`** if there is no error or **`[oldValue, false, Error(msg)]`** if there is an error
:::

### Signature of asyncBind

```javascript
const [result, loading, error] = asyncBind(binder, observed);
```

#### Input

| name     | Description                                                                                            | Example                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **binder**   | A synchronous or asynchronous function receiving as arguments the observed field values and returning the binding value | `` username => `asyncGet(`/userinfo/${username}`) `` |
| **observed** | A array of fieldnames observed by the binder                                                           | `['username']`                               |

#### Output

| Name     | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ | 
| **result**   | The binding value. Returns the previous value (or undefined if it's the first execution) until the binder is resolved |
| **loading** | A boolean indicating if the execution of the binder is pending or finished                                                           |
| **error** | The error object if the binder resolves with an error |

## useBind hook

To create a synchronous bind inside a wrapper component, you should use the **`useBind`** hook.  
This hook has the same signature as the **[bind](#bind-method)** method but forces a rerending of the component when one of the observed value is changed

```jsx
import { useBind } from 'onekijs-cra'; // or from 'onekijs-next'

const fullname = useBind((firstname, lastname) => {
    return `${firstname} ${lastname}`
}, ['firstname', 'lastname'])
```

### Signature of useBind

```javascript
const result = useBind(binder, observed);
```

| Argument     | Description                                                                               | Example                                                   |
| ------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **binder**   | Function receiving as arguments the observed field values and returning the binding value | `` (firstname, lastname) => `${firstname} ${lastname}` `` |
| **observed** | A array of fieldnames observed by the binder                                              | `['firstname', 'lastname']`                               |

:::note Note
**`useBind`** uses internally **[useFormContext](./use-form-context)**, meaning that it only works if the component is rendered as a child of a **`<Form>`** component
:::

## useAsyncBind hook

To create a asynchronous bind inside a wrapper component, you should use the **`useAyncBind`** hook.  
This hook has the same signature as the **[aysncBind](#asyncbind-method)** method but forces a rerending of the component when one of the observed value is changed  
**`useAsyncBind`** accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true

```jsx
import { asyncGet, useAsyncBind } from 'onekijs-cra'; // or from 'onekijs-next'

const [repositories, loading, error] = useAsyncBind(environment => {
    return asyncGet(`/repositories/${environment}`)
}, ['environment'])
```

:::note Note
It's a two phase binding

- An observed value is changed ->  **`useAsyncBind`** is executed. It forces a rerendering of the component and returns **`[oldValue|undefined, true, null]`**
- The async function resolves, the asyncBind forces a second rerendering of the component and returns **`[newValue, false, null]`** if there is no error or **`[oldValue, false, Error(msg)]`** if there is an error
:::

### Signature of useAsyncBind

```javascript
const [result, loading, error] = useAsyncBind(binder, observed);
```

#### Input

| name     | Description                                                                                            | Example                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **binder**   | A synchronous or asynchronous function receiving as arguments the observed field values and returning the binding value | `` username => `asyncGet(`/userinfo/${username}`) `` |
| **observed** | A array of fieldnames observed by the binder                                                           | `['username']`                               |

#### Output

| Name     | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ | 
| **result**   | The binding value. Returns the previous value (or undefined if it's the first execution) until the binder is resolved |
| **loading** | A boolean indicating if the execution of the binder is pending or finished                                                           |
| **error** | The error object if the binder resolves with an error |

### Example

<Sandbox
name="cra-form-basic"
height="700"
modules={['/src/pages/bind.js']}
branch="master"
/>
