---
id: service
title: Adding a service
sidebar_label: Adding a service
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in creating its own service.

:::info
The topic on this page is intended for advanced use cases.<br/>
You will rarely need to develop a service by yourself
:::

Almost all things provided by Oneki.js are based on services.<br/>
The role of a service is to mutate a state. This state can be 
- a component state. In this case, the service is called a "local services"<br/>
Example of hooks exposing a local service: `useGet`, `usePost`, ...
- the global redux state. In this case, the service is called a global service.<br/>
Example of hooks exposing global services: `useNotificationService`, `useSecurityContext`

The service mutates the state following the best practices (immutability, action, reducers, ...)<br/>
To mutate the state, it exposes two types of methods:
- `Reducer methods` (annoted with @reducer). Only these methods can mutate the state.
- `Saga methods` (annotate with @saga). These methods can orchestrate calls to reducer methods and are used to handle complex scenario like:
  - Calling a reducer to update a loading variable
  - Let React rendering the component to display the loading indicator
  - Perform a AJAX request asynchronously
  - Store the result in the state (by calling another reducer method)
  - Calling the first reducer to update the loading variable


## Final result

The result of this step is the following:

:::info New in this step
The login page now validates that the username and password are filled in

A new page is added to sign up. The form on the sign up page verifies asynchronously if the username is available or not<br/>
Certain elements of the form are displayed or not depending on the value of a field
:::

<Sandbox
name="step09-form"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Creating a service
To illustrate how to create a service, we are going to rebuild the equivalent of `useGet`
