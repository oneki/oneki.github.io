---
id: local-state
title: Local state
sidebar_label: Local state
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.  
For a simple use case, it's often sufficient to use the standard **useState** from React and we recommend it.

For more complexe use cases, **Oneki.js** introduces the concept of **[Local services](./local-state#local-service)**.  
Generally, you only need to create a **[Local service](./local-state#local-service)** when you need either

- a scenario / orchestration
- or an immutable state

An example of scenario is retrieving data via an AJAX GET request. The scenario consists of the following steps:

- Set the "loading" variable in the local state to **true**
- Execute the AJAX GET request and store the result in the local state
- Set the "loading" variable in the local state to **false**

You can instanciate a **[Local service](./local-state#local-service)** multiple times in multiple components to reuse the same logic.<br/>
E.g: the above scenario is exactly what the **useGet** hook does and you can reuse it in multiple components.

## Local service

```javascript
const [state, service] = useLocalService(ServiceClass, initialState);
```

<p/>

The goal of **_useLocalService_** is to create a service local to the component with two types of methods:

- **_Reducer_ methods**: the role of these methods is to update the local state of the component. These methods are generally very simple.
- **_Saga_ methods**:
  - These methods are generally asynchronous and more complex.
  - A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render
  - A saga method never updates the local state by itself. It always calls a `Reducer` method to do that.

:::caution
Be sure to read the documentation of [Redux](https://redux.js.org/) and [Redux Saga](https://redux-saga.js.org/) to understand exactly how it works.<br/>
**Oneki.js** has an opinionated approach on how to use these librairies and tries to remove most of the complexity, but it's important to understand how it works underneath.
:::

> See the **[service section](../service/introduction)** to have an in-depth explanation of a service.

### Parameters

#### Inputs

| Variable         | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| **ServiceClass** | Class  | A class that extends [DefaultLocalService](../../api/classes/DefaultLocalService) |
| **initialState** | Object | The initial state of the service                                                  |

#### Outputs

| Variable    | Type | Description                                          |
| ----------- | ---- | ---------------------------------------------------- |
| **state** | Object | The immutable state managed by the service (can be upated only by the service)
| **service** | Class | The service to manage the state

### Example

The code below shows how to create a `LocalService`

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/services/AvailabilityService.ts
```

The code below uses the local service to manage a `state`

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/components/ProductDetails.tsx
```

