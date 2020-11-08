---
id: global-state
title: Adding state management
sidebar_label: Adding state management
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of adding a global state management to the application<br/>

:::note
The core feature of React is to offer components that rerender when a state change.<br/>**[The state](https://reactjs.org/docs/state-and-lifecycle.html)** can be the internal state of the component or the state of a parent component (see [The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down))

Oneki.js provides a top level state for the application to store data on which any component can access and react. This global state is based on **[Redux](https://redux.js.org/)**.
:::

## Final result

The result of this step is the following:

:::info New in this step
You can now add a product to the cart by clicking on the button "Buy" available on the product details page.<br/>
The "checkout" button is now clickable and displays the cart page
:::

<Sandbox
name="step3-global-state"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/products/index.tsx']}
/>

## Adding global state management

Oneki.js provides out of the box a store to hold the global state. The store is a Redux store and is automatically bootstraped via the `<App />` component

:::note
Oneki.js provides several hooks to update and react on data of the global state.<br/>
In this tutorial, we are going to use the hooks:

- **useGlobalState** to react on a data of the global state, but also to update it
- **useGlobalProp** to only react on a data of the global state
:::

## Adding the cart page
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

:::note
By default, the global state is an empty object when the application starts. In our case, it means that the cart page displays an empty list of product.<br/>
If needed, it's possible to pass an initial state to the `<App />` component
:::

Add a new page to display the list of products the user wants to buy:

```tsx title="src/cart/cart.tsx"
const CartPage: FC = () => {
  // Reacts on the property 'cart' of the global state of the application
  // Each time the property 'cart' is updated, the component is refreshed
  const cart: ProductType[] = useGlobalSelector("cart", []); // TODO change to useGlobalProp
  return <Cart cart={cart} />;
};

export default CartPage;
```

:::info
It's a good practice to use a constant to identify a property in the global state. Indeed, if a refactoring is needed further on, it's easier to find which component uses which property.
:::

```tsx {3,6} title="src/@utils/constants.ts"
export const STATE_CART = 'cart';
```

We can then update the cart page to use this constant:

```tsx {2} title="src/cart/cart.tsx"
const CartPage: FC = () => {
  const cart: ProductType[] = useGlobalSelector(STATE_CART, []); // TODO change to useGlobalProp
  return <Cart cart={cart} />;
};
```


The Cart component displays the list of products:

```tsx title="src/cart/cart.tsx"
const Cart: FC<CartOptions> = ({ cart }) => {
  return (
    <div>
      <h3>Cart</h3>

      {cart.map((item, index) => (
        <div key={`item-${index}`} className="cart-item">
          <span>{item.name}</span>
          <span>{currency(item.price)}</span>
        </div>
      ))}
    </div>
  );
};

type CartOptions = {
  cart: ProductType[];
};

export default Cart;
```

## Adding the "Buy" button

Update the product details component to display a button to purchase the product.

```tsx {3,16} title="src/products/@components/ProductDetails.tsx"
type ProductDetailsOptions = {
  product: ProductType;
  onBuy: () => void;
};

const ProductDetails: FC<ProductDetailsOptions> = ({ product, onBuy }) => {
  return (
    <div>
      <h2>Product Details</h2>

      <div>
        <h3>{product.name}</h3>
        <h4>{currency(product.price)}</h4>
        <p>{product.description}</p>

        <button onClick={onBuy}>Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
```

Update the product details page to handle the click on the "Buy" button.<br/>
A click on the "Buy" button calls a function that adds the product to the "cart" property of the global state.<br/>As the cart page reacts on this property, the product will automatically appears on it.

```tsx {3,6} title="src/products/details.tsx"
const ProductDetailsPage: FC = () => {
  const { id } = useParams<ProductDetailsParams>();
  const [cart, setCart] = useGlobalProp<ProductType[]>(STATE_CART, []); // TODO update to useGlobalState

  const product = products[+id];
  return (
    <ProductDetails
      product={product}
      onBuy={() => {
        setCart(cart.concat(product));
        window.alert('Your product has been added to the cart!');
      }}
    />
  );
};

export default ProductDetailsPage;
```

:::caution Immutability
As mentioned above, the global state is immutable. Therefore, to update the cart, one must use cart.contcat() to build a new array and not cart.push().<br/>
Oneki.js handles transparently the immutability of the global state. The "cart" variable is a standard javascript object that you can manipulate like any other javascript object excepted it's frozen.

**Advanced tip**: As the "cart" variable is immutable, the "Cart" component could use React.memo to be more performant
:::

## Updating the navigation
Update the main router to add a route to display the cart page
```tsx {7-9} title="src/@router.tsx"
const MainRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/products">
        <ProductsRouter />
      </Route>
      <Route path="/cart">
        <CartRouter />
      </Route>
      <Route>
        <Redirect to="/products" />
      </Route>
    </Switch>
  );
};

export default MainRouter;
```

Create a router to handle the /cart** routes
```tsx {5-7} title="src/cart/@router.tsx"
const CartRouter = (): JSX.Element => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path}>
        <CartPage />
      </Route>
    </Switch>
  );
};

export default CartRouter;
```

and finally, update the "Checkout" button to navigate to the cart page

```tsx {7} title="src/@components/Navbar.tsx"
const Navbar: FC = () => {
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <Link to="/cart" className="button fancy-button">
        <i className="material-icons">shopping_cart</i>
        Checkout
      </Link>
    </div>
  );
};

export default Navbar;
```

## Next step
Currenty, the content of the cart is only stored in memory (in the global store) and if you refresh the page, the content is lost.<br/>
In the next steps, we will add the possibility to authenticate a user and then save the content of the cart in the cloud.