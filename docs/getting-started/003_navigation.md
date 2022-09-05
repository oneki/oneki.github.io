---
id: navigation
title: Adding navigation
sidebar_label: Adding navigation
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox, { GettingStartedSandbox} from '@site/src/components/Sandbox';
import { GettingStartedSnippet } from '@site/src/components/GithubSnippet';

This step consists in transforming a standard React application into a **`onekijs`** application and adding the possibility to navigate between pages

## Final result
The result of this step is as follows:

:::info New in this step
You can now click on a product (e.g the "Phone XL" link) to view the product details<br/>.
Please note that the URL changes when you click on the link.
:::

<GettingStartedSandbox 
  name="step02-navigation"
  craModules={['/src/index.tsx','/src/pages/products/index.tsx']} 
  nextModules={['/src/pages/index.tsx','/src/pages/_app.tsx']} 
/>


## Upgrading to an **`onekijs`** application

In order to be able to navigate between pages, we first need to transform the basic react application created in the previous step into an **`onekijs`** application.

First add **`onekijs`** to your project

```
yarn add onekijs
```

<Tabs>
  <TabItem value="cra">
Update the entry point (src/index.tsx) to wrap the entire application with the **`onekijs`** <code>&lt;App/&gt;</code> component.
<p/>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/index.tsx#
```  

`<App />` is the main component that primes the **`onekijs`** framework<br/>
This component is usually the most external component of an application and is responsible of booting the following components:
<p/>

| Component | Description
| --------- | -----------
| **Router**    | By default, it starts a **[BrowserRouter](https://reactrouter.com/web/api/BrowserRouter)**, but this can be configured.<br/>The router is responsible for managing the navigation between pages<br/>*The router is used in this step.***
| **Global state management** | It starts a **[Redux store](https://redux.js.org/)** to manage global state.<br/>*The redux store will be used in the next step.*
| **Others** | It starts other components described later on

## Adding the routes
We need to declare the routes so React router can link a `Page component` to a URL.<br/>
The routes are declared in their own file named `_router.tsx` and can be nested.<br/>For example:

- Top level routes like `/`, `/users`, `/products`, ... are defined in **src/pages/_router.tsx**
- Sub routes like `/products/new`, `/products/:id`, `/products/:id/edit`, ... are defined in **src/pages/products/_router.tsx**

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/_router.tsx
```

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/products/_router.tsx
``` 

:::tip Hooks
**useRouteMatch** is a *Hook*. *Hooks* are a new addition in React 16.8. They let you use state and other React features without writing a class<br/>
**`onekijs`** is heavily based on hooks. Therefore, it's important to understand **[this concept](https://reactjs.org/docs/hooks-intro.html)**
:::

  </TabItem>
  <TabItem value="next">
Update the entry point (src/pages/_app.tsx) to wrap the entire application with the **`onekijs`** <code>&lt;NextApp/&gt;</code> component.
<p/>

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step02-navigation/src/pages/_app.tsx
```

`<NextApp />` is the main component that primes the **`onekijs`** framework<br/>
This component is usually the most external component of an application and is responsible of booting the following components:
<p/>

| Component | Description
| --------- | -----------
| **Router**    | Standard Next.js router.<br/>The router is responsible for managing the navigation between pages<br/>*The router is used in this step.*
| **Global state management** | It starts a **[Redux store](https://redux.js.org/)** to manage global state.<br/>*The redux store will be used in the next step.*
| **Others** | It starts other components described later on
  </TabItem>
</Tabs>

## Adding navigation
To navigate between pages, **`onekijs`** provides the component `<Link/>` which replaces the standard HTML tag `<a/>`

The `<Product />` component that displays a product in the product list is updated to use `<Link />`

```tsx {5}
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
<p/>
From now on, a click on the title of a product gives access to the detailed page of this product.
<p/>

:::note
The navigation between pages is done entirely on the browser side. There is no call to a web server
:::

## Next step
**[In the next step](global-state)**, we will add a "shopping cart" page that displays the list of products that the user wants to buy. This feature will allow to introduce the global state of an application.


