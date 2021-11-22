---
id: services
title: Authentication services
sidebar_label: Services
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

**Oneki.js** provides 4 services you can use to implement the authentication process  
The use of these services is the same regardless of the type of authentication

| Service | Description |
| ------- | ----------- |
| **[login service](#login-service)** | Service processing the connection request. e.g: an AJAX POST, a redirect to an OIDC IDP, ...
| **[login callback service](#login-callback-service)** | When authentication is performed by an external party (e.g an OIDC Identity Provider), this service handles the callback after a connection
| **[logout service ](#logout-service)** | Service processing the disconnection request
| **[logout callback service ](#logout-callback-service)** | When the disconnection is performed by an external party (e.g an OIDC Identity Provider), this service handles the callback after a disconnection

## Login service

Based on the configuration found in `src/settings.ts`, the **login service**:
- redirects the user to an external identity provider  (`External authentication`, `Open ID Connect`, `Oauth2`)
- provides a submit function to send the credentials to the server (`Form based authentication`)

It's instantied via the hook **useLogin**.

```javascript
const [error, loading, submit] = useLogin(idpName, options);
```

### Parameters
_Mandatory parameters are marked with a \*_

#### Inputs

| Parameter | Type | Description
| --------- | ---- | -----------
| **idpName**   | string | **idpName** is used to retrieve the configuration with the key ***idp/:idpName*** in `src/settings.ts`.<br/>See the page **[Configuration](./introduction#configuration)** for more details<br/><br/>**Defaults to**: "default" |
| **options** | [LoginOptions](../../../api/interfaces/LoginOptions) | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| **options.<br/>onSuccess** | [AppSuccessCallback](../../../api/types/AppSuccessCallback) | Called if the login request was successful.<br/>Mainly used for Form based authentication<br/><br/>**Defaults to**: a function that redirects the user to the original requested page or the homepage |
| **options.<br/>onError** | [AppErrorCallback](../../../api/types/AppErrorCallback) | Called if the login request failed.<br/>Mainly used for Form based authentication<br/><br/>**Defaults to**: a function **[that sends a notification](../../notification/introduction)** on the topic `login-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | [BasicError](../../../api/interfaces/BasicError) | Set if an error occurs during the login phase. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |
| submit | (data) => void | A function to submit the credentials to the server<br/>Mainly used for Form based authentication |

#### Example

**Form based authentication**

<Tabs>
  <TabItem value="cra">
  <Sandbox
    name="cra-auth-form"
    height="600"
    modules={['/src/pages/login.tsx']}
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

**OIDC authentication**

```tsx
import React from "react";
import { useLogin } from "onekijs";

export default React.memo(() => {
  const idpName = 'google';
  const [error] = useLogin(idpName); // redirects the user to Google's signin page
  if (error) {
    return <div>{error.payload.message}</div>
  }
  return null;
}
```

## Login callback service

The login callback service manages a redirection following a connection. This service is useful when the authentication is done by an external entity (**external login**, **open id connect**, ...)

Based on the configuration found in `src/settings.ts`, the **login callback service** can (non exhaustive list): 
- Extracts the token from the query parameters and potentialy store it
- Extracts an authorization code from the query parameters and exchange it for a token

It's instantied via the **useLoginCallback** hook.

```javascript
const [error, loading] = useLoginCallback(idpName, options);
```

### Parameters

_Mandatory parameters are marked with a \*_

#### Inputs

| Parameter | Type | Description
| --------- | ---- | -----------
| idpName   | string | **idpName** is used to retrieve the configuration with the key ***idp/:idpName*** in `src/settings.ts`.<br/>See the page **[Configuration](./introduction#configuration)** for more details<br/><br/>**Defaults to**: "default" |
| options | [LoginOptions](../../../api/interfaces/LoginOptions) | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| **options.<br/>onSuccess** | [AppSuccessCallback](../../../api/types/AppSuccessCallback) | Called if the login request was successful.<br/><br/>**Defaults to**: a function that redirects the user to the original requested page or the homepage |
| **options.<br/>onError** | [AppErrorCallback](../../../api/types/AppErrorCallback) | Called if the login request failed.<br/><br/>**Defaults to**: a function **[that sends a notification](../../notification/introduction)** on the topic `login-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | [BasicError](../../../api/interfaces/BasicError) | Set if an error occurs during the login phase. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

#### Example

**OIDC authentication**  
The user is redirected to this page by the external entity

```tsx
import React from "react";
import { useLoginCallback} from "onekijs";

export default React.memo(() => {
  const idpName = 'google';
  const [error] = useLoginCallback(idpName);
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```

## Logout service

Based on the configuration found in `src/settings.ts`, the **logout service**:
- redirects the user to an external identity provider (`External authentication`, `Open ID Connect`, `Oauth2`)
- sends a AJAX request to the backend (`Form based authentication`)

It's instantied via the **useLogout** hook.

```javascript
const [error, loading] = useLogout(options);
```

<p/>

:::note
**idpName** is not needed as it's stored in the localStorage during the login process.
:::

### Parameters

_Mandatory parameters are marked with a \*_

#### Inputs

| Parameter | Type | Description
| --------- | ---- | -----------
| options | [LogoutOptions](../../../api/interfaces/LogoutOptions) | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| options.<br/>onSuccess | [AppSuccessCallback](../../../api/types/AppSuccessCallback) | Called if the logout was successful.<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError |  [AppErrorCallback](../../../api/types/AppErrorCallback) | Called if the logout returned an error.<br/><br/>**Defaults**: a function **[sending a notification](../../notification/introduction)** on the topic `logout-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | [BasicError](../../../api/interfaces/BasicError) | Set if an error occurs during the logout phase. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

#### Example

<Tabs>
  <TabItem value="cra">
  <Sandbox
    name="cra-auth-form"
    height="600"
    modules={['/src/pages/logout.tsx']}
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

## Logout callback service

The logout callback service manages a redirect following a logout. This service is useful when the authentication is done by an external entity (**external login**, **open id connect**, ...)

It's instantied via the hook **useLogoutCallback**.

```javascript
const [error, loading] = useLogoutCallback(options);
```

### Parameters

#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description
| --------- | ---- | -----------
| options | [LogoutOptions](../../../api/interfaces/LogoutOptions) | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| options.<br/>onSuccess | [AppSuccessCallback](../../../api/types/AppSuccessCallback) | Called if the logout callback was successful.<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError |  [AppErrorCallback](../../../api/types/AppErrorCallback) | Called if the logout callback returned an error.<br/><br/>**Defaults**: a function **[sending a notification](../../notification/introduction)** on the topic `logout-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | [BasicError](../../../api/interfaces/BasicError) | Set if the callback request contains an error. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

#### Example

**OIDC authentication**  
The user is redirected to this page by the external entity following a logout

```tsx
import React from "react";
import { useLoginCallbackService } from "onekijs";

export default React.memo(() => {
  const [error] = useLogoutCallbackService();
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```