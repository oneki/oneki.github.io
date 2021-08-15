---
id: authentication
title: Adding authentication
sidebar_label: Adding authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in adding an authentication system to the application

Oneki.js provides an authentication library offering:

- several authentication methods (form based, oauth2, external login, ...)
- the restriction of access to pages to authenticated users only (can be based on roles).
- the provision of a security context accessible everywhere in the application. The security context contains data identifying the connected user (username, roles, ...).

## Final result

The result of this step is as follows:

:::info New in this step
The shopping cart page (accessible via the checkout button) is now only for authenticated users.<br/>
If you are not yet authenticated, you are redirected to the login page where you can log in.
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
    name="step04-authentication"
    type="getting-started/cra"
    view="preview"
    height="600"
    modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step04-authentication"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>

## Securing the cart page

:::note
Oneki.js provides several hooks to handle authentication<br/>
In this tutorial, we will use these hooks:

- **useLogin** returns a service handling the login phase. In our case, this is sending a POST request to /auth/login containing the username and password.
- **useLogout** returns a service managing the disconnection phase. In our case, sending a GET request to /auth/logout
- **useSecurityContext** returns an object identifying the disconnected user.
:::

To prevent an unauthenticated user from accessing the shopping cart page, you can use the HOC **secure** (to learn more about the HOC, [click here](https://reactjs.org/docs/higher-order-components.html)).

<Tabs>
  <TabItem value="cra">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/cart.tsx
```  
  </TabItem>
  <TabItem value="next">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/cart.tsx
```  

  </TabItem>
</Tabs>

By default, an unauthenticated user is redirected to /login. <br/>However, this path can be configured via a global configuration introduced below.

## Adding a global configuration
Oneki.js recommends to place the configuration settings in a central location. Usually the configuration is placed in the file **src/settings.ts**.

Some components of the framework use the content of this file to configure themselves. This is the case for the **secure** HOC.<br/>
To redirect the user to **/auth** instead of **/login**, create the file `src/settings.ts` with the following content:

<Tabs>
  <TabItem value="cra">

```tsx title="src/settings.ts"
export default {
  routes: {
    // redirect to /auth if a non authenticated user
    // tries to access a secured page
    login: '/auth',
  },
} as AppSettings;
```
<p/>
and pass the configuration to <code>&lt;App/&gt;</code>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/index.tsx
```  
  </TabItem>
  <TabItem value="next">

```tsx title="src/settings.ts"
export default {
  routes: {
    // redirect to /auth if a non authenticated user
    // tries to access a secured page
    login: '/auth',
  },
} as AppSettings;
```
<p/>
and pass the configuration to <code>&lt;NextApp/&gt;</code>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/_app.tsx
```  

  </TabItem>
</Tabs>


## Adding the login page
The login page displays a very basic form containing two fields: **username** and **password**<br/>
The page uses the **useLogin** hook to handle the login phase which consists of:
- sending a POST ajax request containing the username / password to a server
- process the response by creating a security context and storing it in the global state. The content of the security context is the content of the response.

**useLogin** also uses the global configuration `src/settings.ts` to know:
- the type of authentication (form based, external, Oauth2, ...)
- the URL to use to send the POST request

Let's first update the content of `src/settings.ts`

<Tabs>
  <TabItem value="cra">

```tsx {5-17} title="src/settings.ts"
export default {
  routes: {
    login: '/login',
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
<p/>

:::note
The endpoints /auth/login, /auth/logout and /userinfo are mocked to simulate a backend server.<br/>
The mocked server is defined in src/\__server__

You can check the documentation of the library **[msw](https://mswjs.io/)** to learn more about mocking a server inside a browser
:::
<p/>
Then create the auth page:

:::info
The auth page uses the hook **useForm** which is explained later in the step **[Adding form](./form)**
:::

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/login.tsx
```
<p/>
Create a route to associate the <code>&lt;LoginPage/&gt;</code> to <b>/login</b>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/_router.tsx
```

  </TabItem>
  <TabItem value="next">

```tsx {5-17} title="src/settings.ts"
export default {
  routes: {
    login: '/login',
  },
  idp: {
    default: {
      // We want to use a form based authentication
      type: 'form',
      // The URL to send the POST request containing
      // username / password 
      loginEndpoint: '/api/auth/login',
      // URL to retrieve the security context
      // This URL is called to verify if the user
      // is already authenticated or not
      userinfoEndpoint: '/api/userinfo', 
    },
  },
} as AppSettings;
```
<p/>
Then create the auth page:

:::info
The auth page uses the **useForm** hook which is explained later in the step **[Adding form](./form)**
:::

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/login.tsx
```
  </TabItem>
</Tabs>

### Updating the Navbar to show the logged in user
Now we want to show the username of the logged in user in the navigation bar.<br/>
We can retrieve the username anywhere in the application via the **useSecurityContext** hook

The content of the security context is the response sent by the backend when the userinfo endpoint is called.<br/>In our case, the backend returns a very simple object containing only the username:

```json
{
  "username": "john.doe"
}
```
<p/>
To display the username in the Navbar, update the <code>&lt;Navbar/&gt;</code> component:

<Tabs>
  <TabItem value="cra">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/modules/core/components/Navbar.tsx
```
  </TabItem>
  <TabItem value="next">

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/modules/core/components/Navbar.tsx
```
  </TabItem>
</Tabs>

## Adding the logout page
We want to provide the user with a link to log out.<br/>
The logout action calls the backend server to delete the cookie and clean up the security context from the global state.

This action is handled by the **useLogout** hook. This hook gets the logout endpoint from `src/settings.ts`

<Tabs>
  <TabItem value="cra">

```tsx {9} title="src/settings.ts"
export default {
  routes: {
    login: '/login',
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
By default, the **useLogout** hook sends a GET request to the backend server

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/logout.tsx
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
              <Redirect href="/products" />
            </Route>
          </Switch>
        </AppLayout>
      </Route>
    </Switch>
  );
};

export default RootRouter;
```

  </TabItem>
  <TabItem value="next">

```tsx {9} title="src/settings.ts"
export default {
  routes: {
    login: '/login',
  },
  idp: {
    default: {
      type: 'form', 
      loginEndpoint: '/api/auth/login',
      logoutEndpoint: '/api/auth/logout',
      userinfoEndpoint: '/api/userinfo', 
    },
  },
} as AppSettings;
```  

Create a logout page to handle the logout process.<br/>
By default, the **useLogout** hook sends a GET request to the backend server

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/logout.tsx
```
  </TabItem>
</Tabs>

### Updating Navbar to display a logout link

```tsx {12-14} title="src/modules/core/components/Navbar.tsx"
const Navbar: FC = () => {
  const [loggedUser] = useSecurityContext('username');
  return (
    <div className="app-top-bar">
      <Link href="/">
        <h1>My Store</h1>
      </Link>
      <div className="app-top-bar-right">
        {loggedUser && (
          <div className="user">
            {loggedUser}{' '}
            <Link className="logout" href="/logout">
              [Log out]
            </Link>
          </div>
        )}
        <Link href="/cart" className="button fancy-button">
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
Now that we can identify the logged-in user, we can save the cart contents in the cloud so we don't lose its contents after a refresh<br/>
**[In the next step](data)**, we introduce the services offered by Oneki.js to retrieve and send data via AJAX requests. 
