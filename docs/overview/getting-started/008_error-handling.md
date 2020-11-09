---
id: error-handling
title: Handling errors
sidebar_label: Handling errors
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

Two types of error can occur:
- The ones throwed during the rendering of a component. To handle this type of errors, React recommends to implement **[Error Boundaries](https://reactjs.org/docs/error-boundaries.html)**
- The standard ones throwed by your javascript code (try/catch) or returned by the server

This step consists of handling these type of errors.

## Final result

The result of this step is the following:

:::info New in this step
The third product is now named "Invalid product". A click on this product simulate an error during the rendering of the page.<br/>
The "Buy" button now calls an API that returns an HTTP 400 error indicating that the product is not available at the moment
:::

<Sandbox
name="step6-notification"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Error boundaries
You can pass a component to `<App />` (via the prop `ErrorBoundaryComponent`). This component will be called when an error occurs during the rendering.<br/>
First, let's create this component

```tsx title="src/pages/@components/ErrorBoundary.tsx"
const ErrorBoundary: FC<ErrorBoundaryComponentProps> = ({ error, errorInfo }) => {
  return (
    <div className="error-boundary-container">
      <div>
        <div className="error">An error occured: {error?.message}</div>
        <div>
          stacktrace: <pre>{errorInfo?.componentStack}</pre>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
```
:::note
This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)
:::

Update the entry point to pass this component to `<App />`

```tsx {2} title="src/index.tsx"
ReactDOM.render(
  <App settings={settings} ErrorBoundaryComponent={ErrorBoundary}>
    <RootRouter />
  </App>,
  document.getElementById('root'),
);
```

To simulate an error during the rendering phase, update the product details page to simulate an error when the product name is "Phone Invalid":

```tsx {13-16} title="src/pages/products/[id]/index.tsx"
const ProductDetailsPage: FC = () => {
  const { id } = useParams<ProductDetailsParams>();
  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT, {
    onSuccess: () => {
      window.alert('Product added succesfully to the cart!');
    },
    onError: (error) => {
      window.alert(`An error occured while adding the product to the cart: ${error.message}`);
    },
  });

  let product = products[+id];
  if (product.name === 'Phone Invalid') {
    // to simulate an error, we pickup a entry that doesn't exist
    product = products[9999];
  }
  return (
    <div>
      <ProductDetails product={product} onBuy={() => submit(product)} />
    </div>
  );
};

export default ProductDetailsPage;
```

Now when rendering the product named "Phone Invalid", the product is undefined and the component ErrorBoundary is displayed<br/>
If you display another product, everything is working as before.

## Error handling
When an error occurs, we recommend to display them via the `<NotificationCenter />`.<br/>
To simulate an error coming from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:

```json
{
  "message": "The product ${req.body.name} is not available at this moment"
}
```

Update the `Product details page` to call this new API and to use `NotificationService` instead of `window.alert`:

```tsx {2} title="src/pages/@libs/constants.ts"
export const STATE_CART = 'cart';
export const URL_ADD_PRODUCT = '/cart/products-not-available';
export const URL_CART = '/cart';
export const NOTIF_TOPIC_ERROR = 'error';
export const NOTIF_TOPIC_SUCCESS = 'success';
```

```tsx {5-11} title="src/pages/products/[id]/index.tsx"
const ProductDetailsPage: FC = () => {
  const { id } = useParams<ProductDetailsParams>();
  const notificationService = useNotificationService();
  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT, {
    onError: (error) => {
      notificationService.error({
        payload: {
          message: error.message,
        },
      });
    },
  });

  let product = products[+id];
  if (product.name === 'Phone Invalid') {
    // to simulate an error, we pickup a non entry in the array
    product = products[9999];
  }
  return (
    <div>
      <ProductDetails product={product} onBuy={() => submit(product)} />
    </div>
  );
};

export default ProductDetailsPage;
```

Now, when you click on the button "Buy", an error notification is shown.

### Uncaught errors
When using an Oneki.js hook, if you don't specify a callback to handle errors, it will automatically send the following notification:

```javascript
{
  topic: 'error',
  payload: {
    message: ${error.message}
  }
  ...
}
```

Therefore, we can update the `Product details page` and remove the onError callback:

```tsx title="src/pages/products/[id]/index.tsx"
const ProductDetailsPage: FC = () => {
  const { id } = useParams<ProductDetailsParams>();
  const notificationService = useNotificationService();
  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT);

  let product = products[+id];
  if (product.name === 'Phone Invalid') {
    // to simulate an error, we pickup a non entry in the array
    product = products[9999];
  }
  return (
    <div>
      <ProductDetails product={product} onBuy={() => submit(product)} />
    </div>
  );
};

export default ProductDetailsPage;
```


## Next step
In the next step, we adapt the application to different languages (internationalization and localization).
