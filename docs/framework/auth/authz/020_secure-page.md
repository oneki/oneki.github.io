---
id: secure-page
title: Secure component
sidebar_label: Secure component
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

**Oneki.js** provides an ***[HOC](https://reactjs.org/docs/higher-order-components.html)*** to secure any component:

```javascript
const SecureComponent = secure(Component, validator, options);
```
If the user is not yet logged in, this HOC redirects him to the login page<br/>
If the connected user doesn't have the right to display the page, it displays an error

### Parameters
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

## Example
This example shows two protected pages and one public page

| Page | Description |
| ---- | ----------- |
| index | This page is accessible to anyone |
| restricted | This page is accessible to any logged-in users |
| admin | This page is only accessible to logged-in users with the role **admin** |

<Tabs>
  <TabItem value="cra">
  <Sandbox
    name="cra-auth-form"
    height="600"
    modules={['/src/modules/core/layouts/AppLayout.tsx', '/src/pages/restricted.tsx', '/src/pages/admin.tsx', '/src/pages/login.tsx']}
  />
  </TabItem>
  <TabItem value="next">
  <Sandbox
    name="next-auth-form"
    height="600"
    modules={['/src/pages/index.tsx', '/src/settings.ts', '/src/pages/_app.tsx']}
  />  
  </TabItem>
</Tabs>

