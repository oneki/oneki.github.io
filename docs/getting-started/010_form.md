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

Building forms with React requires a lot of code and can be difficult to maintain.<br/>
Oneki.js offers a library to control a form and drastically reduce the code.

## Final result

The result of this step is as follows:

:::info New in this step
The login page now validates that the username and password are filled in.

A new page is added for registration. The form on the registration page asynchronously checks wether the username is available or not<br/>
Some elements of the form are displayed or not depending on the value of a field
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
    name="step09-form"
    type="getting-started/cra"
    view="preview"
    height="600"
    modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step09-form"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>

## Adding validation
Let's update the login page to verify that the username and password are filled in and that the username contains only alphanumeric charaters (max size 20)<br/>
The value of the form is updated every time the user enters a caracter. At the bottom of the form, We add a "debug" component to display the value of the form in real time<br/>
This real-time update also allows to have a real time validation.

:::tip
We use the component `<Input />` from Oneki.js. This component is a wrapper of `<input>` that can interact with a `FormContext` created by `useForm`
:::

<Tabs>
  <TabItem value="cra">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step09-form/src/pages/login.tsx
```
  </TabItem>
  <TabItem value="next">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step09-form/src/pages/login.tsx
```
  </TabItem>

</Tabs>

## Adding a signup page
To introduce more functionality provided by the form library, let's build the registration page.<br/>
The registration page is similar to the login page, except that we don't use `useLogin` but a `usePost` to build the submit function

:::info
Two new hooks are introduced in the code below:
- `useAuthService`: a service used internally by `useLogin` that provides a method to set the security context.
- `useRouter`: a simple hook to give access to the router. This is useful to redirect the user to another page
- `useRule`:  a hook that reacts to a value change and executes some logic
:::

If you register twice with the same username, the server returns an error.<br/>
We want to improve the user experience and let the user know that the username already exists as soon as they fill it in.

Let's add a rule (by adding a `useRule`) to verify if the username already exists or not by sending an AJAX request to the server

<Tabs>
  <TabItem value="cra">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step09-form/src/pages/signup.tsx
```

The router is updated to add a route for this page

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step09-form/src/pages/_router.tsx
```
  </TabItem>
  <TabItem value="next">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step09-form/src/pages/signup.tsx
```
  </TabItem>

</Tabs>

## Next step
**[In the next step](service)**, we introduce the concept of services which allow to add complex logic to the application.