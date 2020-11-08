---
id: navigation
title: Adding navigation
sidebar_label: Adding navigation
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of transforming a standard React application into an **Oneki.js app** and add the possibility to navigate between pages


## Final result
The result of this step is the following:

:::info New in this step
You can now click on a product (i.e: the link "Phone XL") to display the details of the product<br/>
Please note that the URL changes when you click on the link.
:::

<Sandbox 
  name="step2-navigation"
  type="getting-started"
  view="preview"
  height="600" 
  modules={['/src/index.tsx','/src/products/index.tsx']} 
/>


## Upgrading to an Oneki.js app

To be able to navigate between pages, we first transform the basic react app created during the previous step into an Oneki.js app

Update the entry point (src/index.tsx) to wrap the whole application with the Oneki.js `<App/>` component

```tsx title="src/index.tsx"
ReactDOM.render(
  <App>
    {/* AppLayout is a layout common to all pages. It contains the Navbar */}
    <AppLayout>
      {/* The routes are defined in the file src/@router.tsx */}
      <MainRouter />
    </AppLayout>
  </App>,
  document.getElementById('root'),
);
```

`<App>` is the main component that bootstraps the **_Oneki.js framework_**<br/>
This component is generally the outermost component of an application and is responsible of bootstrapping the following components

| Component | Description
| --------- | -----------
| Router    | By default, it bootstraps a **[BrowserRouter](https://reactrouter.com/web/api/BrowserRouter)**, but this can be configured.<br/>The router is responsible of handling navigation between pages<br/>*The router is used in this step.*
| Global state management | It bootstraps a **[Redux store](https://redux.js.org/)** to handle global state management.<br/>*The redux store will be used in the next step.*
| Others | It bootstraps other components described in details here (TODO LINK)

## Adding the routes
We need to declare the routes so React router can link a `Page component` to a URL.<br/>
The routes are declared in their own file named `@router.tsx` and can be nested.<br/>For example:

- Top level routes like `/`, `/users`, `/products`, ... are defined in src/@router.tsx
- Sub routes like `/products/new`, `/products/:id`, `/products/:id/edit`, ... are defined in src/products/@router.tsx

```tsx title="src/@router.tsx"
const MainRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/products">
        {/* all routes starting with /products are defined in src/products/@router.tsx */}
        <ProductsRouter />
      </Route>
      <Route>
        {/* redirect by default to /products as we don't have any homepage in this example */}
        <Redirect to="/products" />
      </Route>
    </Switch>
  );
};

export default MainRouter;
```

```tsx title="src/products/@router.tsx"
const ProductsRouter = (): JSX.Element => {
  const match = useRouteMatch();
  return (
    <Switch>
      {/* match.path represents the base path, in our case /products */}
      <Route path={`${match.path}/:id`}>
        <ProductDetailsPage />
      </Route>
      <Route path={match.path}>
        <ProductsPage />
      </Route>
    </Switch>
  );
};

export default ProductsRouter;
```

:::tip Hooks
**useRouteMatch** is a *Hook*. *Hooks* are a new addition in React 16.8. They let you use state and other React features without writing a class<br/>
**Oneki.js** is heavily based on hooks. Therefore, it's important to understand **[this concept](https://reactjs.org/docs/hooks-intro.html)**
:::

## Adding navigation
To navigate between pages, React Router offers the component `<Link/>` that replaces the standard HTML tag `<a/>`

The `<Product />` component that displays a product in the product list is updated to use `<Link />`

```tsx {5} title="src/products/@components/Product.tsx"
const Product: FC<ProductOptions> = ({ product, id, onClick, onNotify }) => {
  return (
    <div>
      <h3>
        <Link to={`/products/${id}`}>{product.name}</Link>
      </h3>
      {product.description && <p>Description: {product.description}</p>}
      <button onClick={onClick}>Share</button>
      {product.price > 700 && (
        <p>
          <button onClick={onNotify}>Notify me</button>
        </p>
      )}
    </div>
  );
};
```

Now a click on the title of a product gives access to the detailed page of this product.

:::note
The navigation between pages is done entirely at the browser side. There is no call to a web server
:::

## Next step
**[In the next step](global-state)**, we will add a "cart" page that displays the list of products the user wants to buy. This feature will introduce the global state of an application.


