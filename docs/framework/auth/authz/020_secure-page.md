---
id: secure-page
title: Secure component
sidebar_label: Secure component
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

**Oneki.js** provides an ***[HOC](https://reactjs.org/docs/higher-order-components.html)*** to secure any component:

```javascript
const SecureComponent = secure(Component, validator, options);
```
If the user is not yet logged in, this HOC redirects him to the login page<br/>
If the connected user doesn't have the right to display the page, it displays an error

# Example

<Details summary={<summary>Page accessible only to authenticated users</summary>}>
  The <code>secure HOC</code> is generally used to secure a page.<br/>
  The example below shows how to secure a page so that only authenticated users can view it.

  <ExampleMultipleSnippet 
    values={[
      { label: 'Login', path: 'auth/SecurePage.tsx' },
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>

<Details summary={<summary>Page accessible only to admin users</summary>}>
  The example below shows how the <code>secure HOC</code> can verify it the authenticated user has the required role

  The profile of the user returned by the server looks like this:

  ```json
  {
    "username": "John",
    "roles": ["admin"]
  }
  ```

  <ExampleMultipleSnippet 
    values={[
      { label: 'Login', path: 'auth/UltraSecurePage.tsx' },
      { label: 'Backend API', path: 'https://github.com/brunofranki/onekijs-example-backend/blob/master/app/api/auth/login/route.ts'},
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>

# Parameters
#### Inputs
Mandatory parameters are marked with a \*

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **Component**\* | ElementType | the component to protect. Only authorized users will see it |
| **validator** | (securityContext) => boolean | By default, a user is authorized if he's connected.<br/><br/> `validator` is a function to apply more complex logic like authorizing the user based on an attribute in the security context |
| **options** | Object | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| **options.<br/>ErrorComponent** | React Component | The component to display if the user is not authorized or not yet logged in.<br/><br/>By default<ul><li>if he user is not yet logged in, he's redirected to the login page</li><li>if he's not authorized, a dummy component is displayed</li></ul> |

#### Outputs

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **SecureComponent**\* | React Component | The component secured
