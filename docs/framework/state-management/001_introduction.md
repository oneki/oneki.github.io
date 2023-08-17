---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

> One of the main features of **Oneki.js** is a powerful state management library based on these popular libraries
- Redux (global state) or useReducer (local state)
- Saga
- Immer

**Oneki.js** tries to hide all the complexity and boiler plate code needed to properly manage a state with these libraries.

**Oneki.js** offers several hooks to manage easily an immutable ***local*** or  ***global*** state. These states are immutable thanks to [Immer](https://immerjs.github.io/immer/docs/introduction)<br/>
The global state is managed by [Redux](https://redux.js.org/introduction/getting-started).

The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the framework

## Global state
If several components react on the same data, it is good to use a global state to store it. The most popular library to manage this kind of state is **Redux**

When the application starts, **Oneki.js** automatically creates a Redux store (or you can provide your own) and provides generic hooks to manage it:
- **[useGlobalState](./global-state#useglobalstate)** is a hook equivalent to the standard **useState** from React, but for the global state. It retrieves a specific entry from the global state and provides a setter to upate it.
- **[useGlobalProp](./global-state#useglobalprop)** to react on a data from the global state using a selector (read only, no setter provided)

> ***Note***: For advanced use cases involving asynchronous flows, **Oneki.js** provides also a hook to create a **globalService**.<br/>This part is more complex and described in [another section of the documentation](../service/global-service)


<Details summary={<summary>Simple example of useGlobalState</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Use Global State', path: 'state-management/UseGlobalStatePage.tsx' },
    ]}
    preview={{
      path: 'state-management/use-global-state'
    }}
  />
</Details>

<Details summary={<summary>Simple example of useGlobalProp</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Use Global State', path: 'state-management/UseGlobalPropPage.tsx' },
    ]}
    preview={{
      path: 'state-management/use-global-prop'
    }}
  />
</Details>


## Local state
If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.  
For a simple use case, it's often sufficient to use the standard **useState** from React and we recommend it.

For more complexe use cases, **Oneki.js** introduces the concept of **[Local services](./local-state#local-service)**.  
Generally, you only need to create a **[Local service](./local-state#local-service)** when a scenario/orchestration is needed (or sometimes when the local state is a complex object)

An example of scenario is retrieving data via an AJAX GET request. The scenario consists of the following steps:
- Set the "loading" variable in the local state to **true**
- Execute the AJAX GET request and store the result in the local state
- Set the "loading" variable in the local state to **false**

You can instanciate a **[Local service](./local-state#local-service)** multiple times in multiple components to reuse the same logic.<br/>
E.g: the above scenario is exactly what the **useGet** hook does and you can reuse it in multiple components.

<Details summary={<summary>Simple example of useLocalService</summary>}>

This very basic example is for demonstration only as a simple **useState** would be normally enough.

:::info

You don't need to understand how to build services yet. This **[page](../service/introduction)** explains how to build services

:::

<ExampleMultipleSnippet 
    values={[
      { label: 'Use Global State', path: 'state-management/UseLocalServicePage.tsx' },
      { label: 'My Local Service', path: 'state-management/@service/MyLocalService.ts' },
    ]}
    preview={{
      path: 'state-management/use-local-service'
    }}
  />
</Details>


