---
id: data
title: Managing data
sidebar_label: Managing data
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of adding some interaction with a backend system via AJAX requests.

## Final result

The result of this step is the following:

:::info New in this step
The shopping cart is now saved on the server to not loose its content after a refresh<br/>
A click on the "Buy" button send an AJAX POST request to add the product to the cart on the server.<br/>
The content of the cart is retrieve from the server with an AJAX GET request.
:::

<Sandbox
name="step05-data"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

:::note
Oneki.js provides several hooks to handle interaction with a backend server.<br/>
In this tutorial, we are going to use these hooks:

- **useGet** performs an AJAX GET request. It returns a loading flag and the result. Each time the URL is updated, the request is performed.
- **usePost** returns a submitting flag and a "submit" function. The component can use it to send an AJAX POST request
- **useDelete** returns a "delete" function. The component can use it to send an AJAX DELETE request
:::

## Saving the cart on the server
To prevent loosing the content of the shopping cart after a refresh, the "Buy" button to send a POST request to add the product to a cart saved on the server.

Update the product details page to use the hook **usePost** instead of **useGlobalState**.<br/>
The hook accepts a success and error callbacks executed once it receives a response from the server:

```tsx {2} title="src/pages/@libs/constants.ts"
export const STATE_CART = 'cart';
export const URL_ADD_PRODUCT = '/cart/products';
```

```tsx {3-10} title="src/product/details.tsx"
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

  const product = products[+id];
  return (
    <div>
      <ProductDetails product={product} onBuy={() => submit(product)} />
    </div>
  );
};
```

## Retrieving the cart from the server
The cart page is updated to retrieve the content of the cart from the server.<br/>
Update the page to use the hook **useGet** to perform an AJAX GET request each time the page is displayed

```tsx {3} title="src/pages/@libs/constants.ts"
export const STATE_CART = 'cart';
export const URL_ADD_PRODUCT = '/cart/products';
export const URL_CART = '/cart';
```

```tsx {2} title="src/pages/cart.tsx"
const CartPage: FC = () => {
  const [cart, loading] = useGet<CartResponse>(URL_CART);
  return (
    <div>
      {loading && <p>Loading ...</p>}
      {cart && <Cart cart={cart} />}
    </div>
  );
};

export default secure(CartPage);
```

:::note
**useGet** accepts also an error callback to display an error in case the GET request returns an error
:::

## Deleting the content of the cart on the server
The cart page is updated to add a button to empty the cart.<br/>
Update the page to use the hook **useDelete** to perform an AJAX DELETE request. 

We want to refresh the page once the cart is emptied. We use the "refresh" function provided by **useGet** to perform that.

```tsx {2-10,14-18} title="src/pages/cart.tsx"
const CartPage: FC = () => {
  const [cart, loading, refresh] = useGet<CartResponse>(URL_CART);
  const [deleleCart] = useDelete(URL_CART, {
    onSuccess: () => {
      refresh();
    },
    onError: (error) => {
      window.alert(`An error occured while cleaning the cart: ${error.message}`);
    },
  });
  return (
    <div>
      {loading && <p>Loading ...</p>}
      <div>
        <button className="button" onClick={() => deleleCart()}>
          Empty the cart
        </button>
      </div>
      {cart && <Cart cart={cart} />}
    </div>
  );
};

export default secure(CartPage);
```

## Next step
Currently, the notifications are displayed via `window.alert()` which is not very user friendly and configurable.<br/>
In the next step, we improve that and introduce how to centralize notifications.
