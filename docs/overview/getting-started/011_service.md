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

:::caution
The topic on this page is intended for advanced use cases.<br/>
You will implement a service when you need to add some advanced logic to your application
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
The product detail page now displays a new button "Check Availability"<br/>
When you click on this button, the application calls the server to verify if the product is available or not
:::

<Sandbox
name="step10-service"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Creating a service
We want to add a button on the product page to check its availability. A click on the button triggers the following scenario:
1. Add a loading indicator on the button
2. Disable the button
3. Perform a request to the server to check the availability
4. Display the result on the product page next to the button:
5. Remove the loading indicator
6. Enable the button

Therefore, the state contains the following elements:
```ts title="src/pages/products/@services/AvailabilityService.ts"
export interface AvailabilityState {
  // a flag to indicate if a request is in flight
  loading: boolean;

  // the result of the request
  // initial value is undefined
  available?: boolean; // number of products available
}

// Reponse returned by the server
interface AvailabilityResponse {
  available: boolean; // number of products available
}
```

Let's create a service to manipulate this state.<br/>
A service is a class that extends `LocalService` or `GlobalService`. In our case, the state is local to a component and therefore the class extends `LocalService`

:::note
The class must be annotated with @service. This is something specific to Typescript that allows Oneki.js to create a proxy of this class at runtime.

If you don't use Typescript, please check this page
:::

```ts title="src/pages/products/@services/AvailabilityService.ts"
@service
export default class AvailabilityService extends LocalService<AvailabilityState> {
  //TODO implementation
}
```
### Adding reducers
As explained above, the service contains two types of method: `reducer` and `saga`

For our service, we need two reducers:
- A reducer method to mutate the field `loading`
- A reducer method to mutate the field `available`

:::note
Reducer methods must be annotated with @reducer
:::

Let's add these two methods:

```ts {3-14} title="src/pages/products/@services/AvailabilityService.ts"
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
For our service, we need one saga that will implement the following scenario:
1. Update loading to `true`
3. Perform a request to the server to check the availability
5. Set the result of the request in the state
6. Update loading to `false`

Let's add this method:

```ts {18-23} title="src/pages/products/@services/AvailabilityService.ts"
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
To instantiate this service, Oneki.js proposes the hooks `useLocalService` and `useGlobalService`<br/>
As we created a local service, we must use `useLocalService`:

Let's upadte the `ProductDetails` component to add a button `Check Availability` that uses the service:


```tsx {1-3,7,30-50} title="src/pages/products/@components/ProductDetails.ts"
const initialAvailabilityState: AvailabilityState = {
  loading: false,
};

const ProductDetails: FC<ProductDetailsProps> = ({ product, onBuy }) => {
  const [T] = useTranslation();
  const [availability, availabilityService] = useLocalService(AvailabilityService, initialAvailabilityState);
  return (
    <div>
      <h2>
        <T>Product Details</T>
      </h2>

      <div>
        <h3>
          <T>{product.name}</T>
        </h3>
        <h4>
          <T>{currency(product.price)}</T>
        </h4>
        <p>
          <T>{product.description}</T>
        </p>
        <p>
          <button onClick={onBuy}>
            <T>Buy</T>
          </button>
        </p>
        <p>
          <button onClick={() => availabilityService.checkAvailability(product.id)} disabled={availability.loading}>
            <T>Check availability</T>
          </button>
          <span className="availability">
            {availability.loading && (
              <span>
                <T>Loading</T> ...
              </span>
            )}
            {!availability.loading && availability.available === true && (
              <span className="available">
                <T>The product is available</T>
              </span>
            )}
            {!availability.loading && availability.available === false && (
              <span className="not-available">
                <T>The product is not available</T>
              </span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
```

## Handling error
We can improve the service to handle correctly the errors returned by the server.<br/>
One common approch is to send a notification on the topic `error` so the `<NotificationCenter />` automatically displays it

To be able to use the NotificationService inside the AvailabilityService, one must inject it.

```ts {3,22,26-28} title="src/pages/products/@services/AvailabilityService.ts"
@service
export default class AvailabilityService extends LocalService<AvailabilityState> {
  notificationService = inject(NotificationService);

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
    try {
      yield this.setLoading(true);
      const data: AvailabilityResponse = yield asyncGet(`/products/${productId}/availability`);
      yield this.setData(data);
    } catch (error) {
      this.notificationService.error(error);
    }
  }
}
```

## Next step
The getting started tutorial is over. You should have now a good understanding on what Oneki.js can do to help you building enterprise application.
