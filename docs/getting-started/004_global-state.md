---
id: global-state
title: Adding state management
sidebar_label: Adding state management
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox, { GettingStartedSandbox} from '@site/src/components/Sandbox';
import { GettingStartedSnippet } from '@site/src/components/GithubSnippet';

This step consists in adding a global state management to the application<br/>

:::note
The core feature of React is to offer components that rerender when a state change.<br/>**[The state](https://reactjs.org/docs/state-and-lifecycle.html)** can be the internal state of the component or the state of a parent component (see [The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down))

**`onekijs`** provides a global state for the application to store the data that any component can access and react to. This global state is based on **[Redux](https://redux.js.org/)**.
:::

## Final result

The result of this step is as follows:

:::info New in this step
You can now add a product to the cart by clicking on the "Buy" button available on the product details page.<br/>
The "checkout" button is now clickable and displays the cart page
:::

<GettingStartedSandbox 
  name="step03-global-state"
  craModules={['/src/index.tsx','/src/pages/products/index.tsx']} 
  nextModules={['/src/pages/index.tsx','/src/pages/_app.tsx']} 
/>



## Adding global state management

**`onekijs`** provides a store to hold the global state. The store is a Redux store and is automatically started by the `<App />` / `<NextApp />` component.

:::note
**`onekijs`** provides several hooks to update and react on the global state.<br/>
In this tutorial, we will use these hooks:

- **useGlobalState** to react on a data of the global state, but also to update it
- **useGlobalProp** to only react on a data of the global state
:::

## Adding the shopping cart page
This list of products is stored in the global state under the key "cart".<br/>
The global state is an **immutable** javascript object that looks like this:

```javascript
{
  cart: [
    {
      name: "Phone XL",
      price: 799,
      description: "A large phone with one of the best screens",
    },
    {
      name: "Phone Standard",
      price: 299,
    },
  ];
}
```
<p/>

:::note
By default, the global state is an empty object when the application starts. In our case, this means that the shopping cart page displays an empty list of products.<br/>
If necessary, it's possible to pass an initial state to the `<App />` / `<NextApp />` component.
:::

Add a new page to display the list of products the user wants to buy:

<Tabs>
  <TabItem value="cra">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/cart.tsx
```  
  </TabItem>
  <TabItem value="next">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/pages/cart.tsx
```  

:::note Layout
The function `withLayout` is a **[HOC](https://reactjs.org/docs/higher-order-components.html)** to provide a consistent layout between each pages of a Next.js application. **[More details here](../framework/layout/layout)**
:::

  </TabItem>
</Tabs>


:::info
It's a good practice to use a constant to identify a property in the global state. Indeed, if a refactoring is needed further on, it's easier to find which component uses which property.
:::

```tsx {3,6} title="src/modules/core/libs/constants.ts"
export const STATE_CART = 'cart';
```
<p/>
The Cart component displays the list of products:

<GettingStartedSnippet path="/step03-global-state/src/modules/core/components/Cart.tsx" />

## Adding the "Buy" button

Update the product details component to display a button to purchase the product.

<GettingStartedSnippet path="/step03-global-state/src/modules/products/components/ProductDetails.tsx" />

Update the product details page to handle the click on the "Buy" button.<br/>
A click on the "Buy" button calls a function that adds the product to the "cart" property of the global state.<br/>As the cart page reacts on this property, the product will automatically appears on it.

<Tabs>
  <TabItem value="cra">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/products/%5BproductId%5D/index.tsx
```  
  </TabItem>
  <TabItem value="next">

:::info
The page below uses **Static Generation** (*getStaticProps* and *getStaticPaths*) which is a feature provided by Next.js. That means in production, the page HTML is generated when you run <code>next build</code>
:::

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/pages/products/%5BproductId%5D/index.tsx
```
  </TabItem>
</Tabs>

:::caution Immutability
As mentioned above, the global state is immutable. Therefore, to update the cart, you need to use `cart.contcat()` to build a new array and not `cart.push()`.<br/>
**`onekijs`** transparently handles the immutability of the global state. The `cart` variable is a standard javascript object that you can manipulate like any other javascript object excepted that it is frozen.

**Advanced tip**: As the `cart` variable is immutable, the &lt;Cart/&gt; component could use React.memo to be more efficient
:::

## Updating the navigation
<Tabs>
  <TabItem value="cra">
Update the main router to add a route to display the cart page

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/_router.tsx
``` 

and finally, update the "Checkout" button to navigate to the cart page

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/modules/core/components/Navbar.tsx
```

  </TabItem>
  <TabItem value="next">
Update the "Checkout" button to navigate to the cart page

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/modules/core/components/Navbar.tsx
```
  </TabItem>
</Tabs>

## Next step
Currently, the contents of the cart are only stored in memory (in the global state) and if you refresh the page, the contents are lost.<br/>
**[In the next step](authentication)**, we will add the ability to authenticate a user and then save the cart contents in the cloud.