---
id: service
title: Adding a service
sidebar_label: Adding a service
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in creating its own service.

:::caution
The topic on this page is for advanced use cases.<br/>
You will implement a service when you need to add advanced logic to your application
:::

Almost all the functionality provided by Oneki.js are based on services.<br/>
The role of a service is to mutate a state. This state can be

- **a component state**. In this case, the service is called a "local service"<br/>
Example of hooks exposing a local service: `useGet`, `usePost`, ...
- **the global redux state**. In this case, the service is called a global service.<br/>
Example of hooks exposing global services: `useNotificationService`, `useSecurityContext`

The service mutates the state following best practices (immutability, action, reducers, ...)<br/>
To mutate the state, the service exposes two types of methods:
- `Reducer methods` (annoted with @reducer). Only these methods can mutate the state.
- `Saga methods` (annotate with @saga). These methods can orchestrate calls to reducer methods and are used to handle complex scenarios such as:
  - Calling a reducer to update a "loading" variable to `true`
  - Letting React render the component to display the load indicator
  - Making an AJAX request asynchronously
  - Storing the result in the state (by calling another reducer method)
  - Calling a reducer to update the "loading" variable to `false`

## Final result

The result of this step is as follows:

:::info New in this step
The product detail page now displays a new "Check Availability" button<br/>
When you click on this button, the application will call the server to check if the product is available or not
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
    name="step10-service"
    type="getting-started/cra"
    view="preview"
    height="600"
    modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step10-service"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>



## Creating a service
We want to add a button on the product page to check its availability. Clicking on the button triggers the following scenario:

1. Add a loading indicator on the button
2. Disable the button
3. Make a request to the server to check availability
4. Display the result on the product page next to the button:
5. Remove the loading indicator
6. Activate the button

The state therefore contains the following elements:
```ts
export interface AvailabilityState {
  // a flag to indicate if a request is in flight
  loading: boolean;

  // the result of the request
  // initial value is undefined
  available?: boolean; // number of products available
}
```

Let's create a service to handle this state.<br/>
A service is a class that extends `LocalService` or `GlobalService`. In our case, the state is local to a component and so the class extends `LocalService`

:::caution
The class must be annotated with @service. This is something specific to Typescript that allows Oneki.js to create a proxy of this class at runtime.
:::

```ts
@service
export default class AvailabilityService extends LocalService<AvailabilityState> {
  ...
}
```
### Adding reducers
As mentioned before, the service contains two types of methods: `reducer` and `saga`

For our service, we need two reducers:
- A reducer method to mutate the `loading` field.
- A reducer method to mutate the `available` field.

:::caution
Reducer methods must be annotated with @reducer
:::

Let's add these two methods:

```ts {3-14}
@service
export default class AvailabilityService extends LocalService<AvailabilityState> {
  @reducer
  setLoading(loading: boolean): void {
    // the state is immutable
    // however, the @reducer annotation allows updating the state
    // like any other object (thanks to immer)
    this.state.loading = loading;
  }

  @reducer
  setData(data: AvailabilityResponse): void {
    this.state.available = data.available;
    this.setLoading(false); // A reducer can call another reducer
  }
}
```

### Adding sagas
For our service, we need a saga that will implement the following scenario:
1. Update the field `loading` to `true`
2. Make a request to the server to check availability
3. Put the result of the query in the state
4. Update the field `loading` to `false`

Let's add this method:

```ts {18-23}
@service
export default class AvailabilityService extends LocalService<AvailabilityState> {
  @reducer
  setLoading(loading: boolean): void {
    // the state is immutable
    // however, the @reducer annotation allows updating the state
    // like any other object (thanks to immer)
    this.state.loading = loading;
  }

  @reducer
  setData(data: AvailabilityResponse): void {
    this.state.available = data.available;
    this.setLoading(false); // A reducer can call another reducer
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @saga(SagaEffect.Latest)
  *checkAvailability(productId: number) {
    yield this.setLoading(true);
    const data: AvailabilityResponse = yield asyncGet(`/products/${productId}/availability`);
    yield this.setData(data);
  }
}
```

## Using the service
To instantiate this service, Oneki.js provides the `useLocalService` and `useGlobalService` hooks<br/>
since we have created a local service, we must use `useLocalService`:

Let's update the `ProductDetails` component to add a `Check Availability` button that uses the service:

<Tabs>
  <TabItem value="cra">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/components/ProductDetails.tsx
```
  </TabItem>
  <TabItem value="next">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step10-service/src/modules/products/components/ProductDetails.tsx
```
  </TabItem>

</Tabs>

## Handling error
We can improve the service to properly handle errors returned by the server.<br/>
A common approch is to send a notification on the `error` topic so the `<NotificationCenter />` automatically displays it

To be able to use the NotificationService inside the AvailabilityService, one must inject it.

<Tabs>
  <TabItem value="cra">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/services/AvailabilityService.ts
```
  </TabItem>
  <TabItem value="next">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step10-service/src/modules/products/services/AvailabilityService.ts
```
  </TabItem>

</Tabs>

## Next step
The getting started tutorial is over. You should now have a good understanding of what Oneki.js can do to help you build enterprise applications !
