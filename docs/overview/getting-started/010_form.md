---
id: form
title: Using form for user input
sidebar_label: Using form for user input
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in introducing how to build form with Oneki.js

Building forms with React require a lot of code and can be hard to maintain.<br/>
Oneki.js proposes a library to control a form and reduce drastically the code.

## Final result

The result of this step is as follows:

:::info New in this step
The login page now validates that the username and password are filled in

A new page is added to sign up. The form on the sign up page verifies asynchronously if the username is available or not<br/>
Certain elements of the form are displayed or not depending on the value of a field
:::

<Sandbox
name="step09-form"
type="getting-started/cra"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Adding validation
Let's update the login page to verify that the username and password are filled in and that the username contains only alphanumeric charaters (max size 20)<br/>
The value of the form is updated every time the user enters a caracter. At the bottom of the form, We add a "debug" component to display in real time the value of the form<br/>
This real-time update also allows to have a real time validation:

:::tip
We use the component `<Input />` from Oneki.js. This component is a wrapper of `<input>` that can interact with a `FormContext` created by `useForm`
:::

```tsx {4,13,18-21,27,29,34} title="src/pages/auth/index.tsx"
const LoginPage: FC = () => {
  const [error, , submit] = useLogin();
  const [T, t] = useTranslation();
  const { Form, values, getValidation } = useForm(submit);

  return (
    <div className="login-container">
      <Form className="login-form">
        {error && <div className="error">Error: {error.message}</div>}
        <div>
          <label>
            <T>Username</T>
            <span className="error">{getValidation('username').message}</span>
          </label>
          <Input
            name="username"
            type="text"
            required={true}
            requiredMessage={t('Username is mandatory')}
            regex="^[a-zA-Z0-9.]{1,20}$"
            regexMessage={t('Username must contain only alphanumeric chars (max 20)')}
          />
        </div>
        <div>
          <label>
            <T>Password</T>
            <span className="error">{getValidation('password').message}</span>
          </label>
          <Input name="password" type="password" required={true} requiredMessage={t('Password is mandatory')} />
        </div>
        <SubmitButton>
          <T>Submit</T>
        </SubmitButton>
        <pre className="debug">{JSON.stringify(values, null, 2)}</pre>
      </Form>
    </div>
  );
};

export default LoginPage;
```

## Adding a signup page
To introduce other features provided by the form library, let's build a sign up page.<br/>
The signup page looks like the login page, except we don't use `useLogin` but a `usePost` to build the submit function

:::note
Two new hooks are introduced in the code below:
- `useAuthService`: service used internally by `useLogin` that offers a method to set the security context.
- `useOnekiRouter`: a simple hook to give access to the router. This is useful to redirect the user to another page
:::

```tsx title="src/pages/signup.tsx"
const SignupPage: FC = () => {
  const [T, t] = useTranslation();
  const authService = useAuthService();
  const router = useOnekiRouter();
  const [submit] = usePost('/auth/signup', {
    onSuccess: (user) => {
      // the API returns the user in the response
      // we set the securityContext to log in the user
      authService.setSecurityContext(user);
      router.push('/');
    },
  });
  const { Form, getValidation } = useForm(submit);

  return (
    <div className="signup-container">
      <Form className="signup-form">
        <div>
          <label>
            <T>Username</T>
            <span className="error">{getValidation('username').message}</span>
          </label>
          <Input
            name="username"
            type="text"
            required={true}
            requiredMessage={t('Username is mandatory')}
            regex="^[a-zA-Z0-9.]{1,20}$"
            regexMessage={t('Username must contain only alphanumeric chars (max 20)')}
          />
        </div>
        <div>
          <label>
            <T>Password</T>
            <span className="error">{getValidation('password').message}</span>
          </label>
          <Input name="password" type="password" required={true} requiredMessage={t('Password is mandatory')} />
        </div>
        <SubmitButton>
          <T>Submit</T>
        </SubmitButton>
      </Form>
    </div>
  );
};

export default SignupPage;
```

The router is updated to add a route for this page

```tsx {13-15} title="src/pages/_router.tsx"
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
            <Route path="/signup">
              <SignupPage />
            </Route>
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

## Adding a rule
If you signup two times with the same username, the server returns an error.<br/>
We want to improve the user experience and let the user know that the username already exists as soon as he fills it in.

Oneki.js provides a hook to add some logic reacting on a value change: `useRule`.<br/>
Let's add a rule to verify if the username already exists or not by sending an AJAX request to the server

```tsx {15-32} title="src/pages/signup.tsx"
const SignupPage: FC = () => {
  const [T, t] = useTranslation();
  const authService = useAuthService();
  const router = useOnekiRouter();
  const [submit] = usePost('/auth/signup', {
    onSuccess: (user) => {
      // the API returns the user in the response
      // we set the securityContext to log in the user
      authService.setSecurityContext(user);
      router.push('/');
    },
  });
  const { Form, getValidation, getValue, setError } = useForm(submit);

  useRule(
    async (username) => {
      // username is coming from getValue('username') 
      // (second parameter of useRule)
      let isError = false;
      try {
        await asyncGet(`/users/${username}`);
        isError = true; // user already exists on the server
      } catch {} // server returned a 404 response
      setError(
        'username', // the field to put in error
        'usernameAlreadyExists', // validator name - must be unique per field
        t('Username already exists'), // error message
        isError, // flag indicating if there is an error or not
      );
    },
    [getValue('username')], // a list of fields on which the rule reacts
  );

  return (
    <div className="signup-container">
      <Form className="signup-form">
        <div>
          <label>
            <T>Username</T>
            <span className="error">{getValidation('username').message}</span>
          </label>
          <Input
            name="username"
            type="text"
            required={true}
            requiredMessage={t('Username is mandatory')}
            regex="^[a-zA-Z0-9.]{1,20}$"
            regexMessage={t('Username must contain only alphanumeric chars (max 20)')}
          />
        </div>
        <div>
          <label>
            <T>Password</T>
            <span className="error">{getValidation('password').message}</span>
          </label>
          <Input name="password" type="password" required={true} requiredMessage={t('Password is mandatory')} />
        </div>
        <SubmitButton>
          <T>Submit</T>
        </SubmitButton>
      </Form>
    </div>
  );
};

export default SignupPage;
```

## Next step
**[In the next step](service)**, we introduce the concept of services which allow adding complex logic to the application.