---
id: data
title: Managing data
sidebar_label: Managing data
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in adding some interaction with a backend system via AJAX requests.

## Final result

The result of this step is as follows:

:::info New in this step
The shopping cart is now saved on the server so that it doesn't lose its contents after a refresh<br/>.
A click on the "Buy" button sends an AJAX POST request to add the product to the cart on the server.<br/>
The contents of the cart are retrieved from the server with an AJAX GET request.

The list of products on the main page is retrieved once and cached locally in the global state.
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
    name="step05-data"
    type="getting-started/cra"
    view="preview"
    height="600"
    modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step05-data"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>

:::note
Oneki.js provides several hooks to handle interaction with a backend server.<br/>
In this tutorial, we will use these hooks:

- **useGet** makes an AJAX GET request. It returns a load indicator and the result. Each time the URL is updated, the request is executed.
- **usePost** returns a submit indicator and a "submit" function. The component can use it to send an AJAX POST request.
- **useDelete** returns a "delete" function. The component can use it to send an AJAX DELETE request.
- **useCache** makes an AJAX GET request and caches the response in the global state. The AJAX request is sent only if the cache does not exist or has expired.
:::

## Saving the cart on the server
To avoid losing the cart contents after a refresh, a click on the "Buy" button sends a POST request to add the product to a cart saved on the server.

Let's update the product details page to use the **usePost** hook instead of **useGlobalState**.<br/>
The hook accepts a success and error callback executed once it receives a response from the server:

<Tabs>
  <TabItem value="cra">
    
  ```tsx {2} title="src/modules/core/libs/constants.ts"
  export const STATE_CART = 'cart';
  export const URL_ADD_PRODUCT = '/cart/products';
  ```

  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/%5BproductId%5D/index.tsx
  ```

  </TabItem>
  <TabItem value="next">

  ```tsx {2} title="src/modules/core/libs/constants.ts"
  export const STATE_CART = 'cart';
  export const URL_ADD_PRODUCT = '/api/cart/products';
  ```
  
  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/products/%5BproductId%5D/index.tsx
  ```
  </TabItem>

</Tabs>

## Retrieving the cart from the server
We want to add the ability to retrieve the cart contents from the server.<br/>
Let's update the page to use the **useGet** hook to make an AJAX GET request every time the page is displayed
<p/>
We also want to add a button to empty the cart.<br/>
Let's update the page to use the <b>useDelete</b> hook to make an AJAX DELETE request. 

We want to refresh the page once the cart is emptied. We use the "refresh" function provided by **useGet** to do this.
<Tabs>
  <TabItem value="cra">

  ```tsx {3} title="src/modules/core/libs/constants.ts"
  export const STATE_CART = 'cart';
  export const URL_ADD_PRODUCT = '/cart/products';
  export const URL_CART = '/cart';
  ```
  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/cart.tsx
  ```

  </TabItem>
  <TabItem value="next">

```tsx {3} title="src/modules/core/libs/constants.ts"
export const STATE_CART = 'cart';
export const URL_ADD_PRODUCT = '/api/cart/products';
export const URL_CART = '/api/cart';
```
  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/cart.tsx
  ```
  </TabItem>

</Tabs>

:::note
**useGet** also accepts an error callback to display an error in case the GET request returns an error.
:::


## Retrieve the list of products only once and cache it
Up to now, the list of products is hardcoded in `src/pages/products/index.ts`<br/>
To retrieve the list of products from the server and cache it locally, update the page to use the hook **useCache**.

**useCache** can store the result of an AJAX GET request in the global state for a defined period, so the AJAX GET request is not performed again the next time the list of products is displayed.

<Tabs>
  <TabItem value="cra">

  ```tsx reference 
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/index.tsx
  ```

  </TabItem>
  <TabItem value="next">

  **useCache** is not relevant in this case because the products are provided via **getStaticProps**<br/>
  See the <b>Create React App</b> tab to see how <b>useCache</b> works.
  </TabItem>

</Tabs>

## Next step
Currently, notifications are displayed via `window.alert()` which is not very user-friendly and configurable.<br/>
**[In the next step](notification)**, we improve that and introduce how to centralize notifications.
