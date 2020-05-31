---
id: secure-page
title: Secure page
sidebar_label: Secure page
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

**Oneki.js** provides an ***[HOC](https://reactjs.org/docs/higher-order-components.html)*** to secure a component:

```javascript
const SecureComponent = secure(Component, validator, options);
```
If the user is not yet logged in, this HOC redirects him to the login page<br/>
If the logged user doesn't have the right to display the page, it displays an error

### Parameters
#### Inputs
```javascript
// [Mandatory] the component to protect. Only authorized users will see it
Component: Component,

// [Optional] By default, a user is authorized if he's logged in.
// validator is a function to apply a more complex logic like 
// authorizing the user based on a attribute in the security context
validator: (securityContext) => boolean

// all options below are [optional]
options: {
  // The component to display if the user is not authorized or
  // not yet logged in.
  // By default:
  //  - if he user is not yet logged in, he's redirected to the login page
  //  - if he's not authorized, a dummy component is displayed
  ErrorComponent: Component
} 
```
#### Outputs
```javascript
// The component secured. This is the one that should be exported
SecureComponent: Component
```

## Example
This example shows two protected pages

| Page | Description |
| ---- | ----------- |
| profile | This page is accessible to any logged-in users |
| admin | This page is only accessible to logged-in users with the role **ADMIN** |

<NextSandbox 
  name="auth/form" 
  height="700" 
  modules={['/src/pages/profile.js', '/src/pages/admin.js','/src/pages/login.js','/src/pages/logout.js', 'src/settings.js']} 
/>

