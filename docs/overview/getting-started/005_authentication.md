---
id: authentication
title: Adding authentication
sidebar_label: Adding authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of adding an authentication system to the application

Oneki.js provides an authentication library offering:

- several authentication method (form based, oauth2, external login, ...)
- access restriction of pages to authenticated users only (can be based on roles).
- providing a security context accessible anywhere in the application. The security context contains data identifying the logged user (username, roles, ...)

## Final result

The result of this step is the following:

:::info New in this step
The cart page (acessible via the checkout button) is now restricted to authenticated user only<br/>
If you are not authenticated yet, you are redirected to the login page when you can sign in.
:::

<Sandbox
name="step04-authentication"
type="getting-started/cra"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Securing the cart page

:::note
Oneki.js provides several hooks to handle authentication<br/>
In this tutorial, we are going to use these hooks:

- **useLogin** returns a service handling the login phase. In our case sending a POST request to /auth/login containing username / password
- **useLogout** returns a service handling the logout phase. In our case, sending a GET request to /auth/logout
- **useSecurityContext** returns an object identifying the logged user
:::

To prevent non authenticated user to access the cart page, use the HOC **secure** (to learn more about HOC, [click here](https://reactjs.org/docs/higher-order-components.html))

```tsx {6} title="src/pages/cart.tsx"
const CartPage: FC = () => {
  const cart: ProductType[] = useGlobalSelector('cart', []); // TODO change to useGlobalProp
  return <Cart cart={cart} />;
};

export default secure(CartPage);
```

By default, a non authenticated user is redirect to /login. <br/>However, in our case, we want to redirect the user to /auth. This can be configured via a global configuration introduced hereafter

## Adding a global configuration
Oneki.js recommends to put the configuration parameters in a central place. Generally, the configuration is placed in the file **src/settings.ts**.

Some components of the framework use the content of this file to configure themself. This is the case of the HOC **secure**<br/>
To redirect the user to /auth instead of /login, add the file src/settings.ts with the following content:

```tsx title="src/settings.ts"
export default {
  routes: {
    // redirect to /auth if a non authenticated user
    // tries to access a secured page
    login: '/auth',
  },
} as AppSettings;
```

and pass the configuration to `App`
```tsx {4} title="src/index.ts"
import settings from './settings';

ReactDOM.render(
  <App settings={settings}>
    <RootRouter />
  </App>,
  document.getElementById('root'),
);
```

## Adding the login page
The login page displays a very basic form containing two fields: **username** and **password**<br/>
The page uses the hook **useLogin** to handle the login phase which consists of:
- sending a POST ajax request containing the username / password to a server
- handling the response by creating a security context and storing it in the global state. The content of the security context is the content of the response.

**useLogin** also uses the global configuration to know:
- the type of authentication (form based, external, Oauth2, ...)
- the URL to use to send the POST request

Let's first update the content of src/settings.ts

```tsx {5-17} title="src/settings.ts"
export default {
  routes: {
    login: '/auth',
  },
  idp: {
    default: {
      // We want to use a form based authentication
      type: 'form',
      // The URL to send the POST request containing
      // username / password 
      loginEndpoint: '/auth/login',
      // URL to retrieve the security context
      // This URL is called to verify if the user
      // is already authenticated or not
      userinfoEndpoint: '/userinfo', 
    },
  },
} as AppSettings;
```

:::note
The endpoints /auth/login, /auth/logout and /userinfo are mocked to simulate a backend server.<br/>
The mocked server is defined in src/\__server__

You can check the documentation of the library **[msw](https://mswjs.io/)** to learn more about mocking a server inside a browser
:::

Then create the auth page:

:::info
The auth page is using the hook **useForm** which is explained later in the step **[Adding form](./form)**
:::

```tsx title="src/pages/login.tsx"
const LoginPage: FC = () => {
  const [error, submitting , submit] = useLogin();

  const { Form } = useForm(submit);

  return (
    <Form className="w-full">
      {error && <div className="error">Error: {error.message}</div>}
      <div>
        <label>Username</label>
        <Input name="username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <Input name="password" type="password" />
      </div>
      <SubmitButton type="submit">
        {!submitting && 'Submit'}
        {submitting && 'Submitting...'}
      </SubmitButton>
    </Form>
  );
};

export default LoginPage;
```

Create a route to associate the LoginPage to /auth

```tsx {4-6} title="src/pages/_router.tsx"
const RootRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route>
        <AppLayout>
          <Switch>
            <Route path="/products">
              <ProductsRouter />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route>
              <Redirect to="/products" />
            </Route>
          </Switch>
        </AppLayout>
      </Route>
    </Switch>
  );
};

export default RootRouter;
```

### Updating Navbar to display the logged user
Now we want to display the username of the logged user in the top bar.<br/>
We can retrieve the username anywhere in the application via the hook **useSecurityContext**

The content of the security context is the response sent by the backend when calling the userinfo endpoint.<br/>In our case, the backend returns a very simple object containing only the username:

```json
{
  "username": "john.doe"
}
```

To display the username in the Navbar, update src/modules/core/components/Navbar.tsx:

```tsx {5,11-13} title="src/modules/core/components/Navbar.tsx"
const Navbar: FC = () => {
  // retrieve the field username from the security context
  // if the user is not logged, loggedUser is undefined
  const [loggedUser] = useSecurityContext('username');
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <div className="app-top-bar-right">
        {loggedUser && (
          <div className="user">{loggedUser}</div>
        )}
        <Link to="/cart" className="button fancy-button">
          <i className="material-icons">shopping_cart</i>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
```

## Adding the logout page
We want to provide the user a link to logout.<br/>
The logout action calls the backend server to remove the cookie and clean the security context from the global state.

This action is handled by the hook **useLogout**. This hook retrieves the logout endpoint from settings.ts:

```tsx {9} title="src/settings.ts"
export default {
  routes: {
    login: '/auth',
  },
  idp: {
    default: {
      type: 'form', 
      loginEndpoint: '/auth/login',
      logoutEndpoint: '/auth/logout',
      userinfoEndpoint: '/userinfo', 
    },
  },
} as AppSettings;
```

Create a logout page to handle the logout process.<br/>
By default, the hook **useLogout** sends a GET request to the backend server

```tsx title="src/pages/logout.tsx"
const LogoutPage: FC = () => {
  const [error, loading] = useLogout();

  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (loading) return <div>Logging out ...</div>;
  return null;
};

export default LogoutPage;
```

Update the router to take into account this new page

```tsx {7-9} title="src/pages/_router.tsx"
const RootRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/logout">
        <LogoutPage />
      </Route>
      <Route>
        <AppLayout>
          <Switch>
            <Route path="/products">
              <ProductsRouter />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route>
              <Redirect to="/products" />
            </Route>
          </Switch>
        </AppLayout>
      </Route>
    </Switch>
  );
};

export default RootRouter;
```

### Updating Navbar to display a logout link

```tsx {12-14} title="src/modules/core/components/Navbar.tsx"
const Navbar: FC = () => {
  const [loggedUser] = useSecurityContext('username');
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <div className="app-top-bar-right">
        {loggedUser && (
          <div className="user">
            {loggedUser}{' '}
            <Link className="logout" to="/logout">
              [Log out]
            </Link>
          </div>
        )}
        <Link to="/cart" className="button fancy-button">
          <i className="material-icons">shopping_cart</i>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
```

## Next step
Now that we can identify the logged user, we can save the content of the cart in the cloud so we don't loose its content after a refresh<br/>
**[In the next step](data)**, we introduce the services offered by Oneki.js to retrieve and send data via AJAX requests. 
