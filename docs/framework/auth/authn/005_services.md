---
id: services
title: Authentication services
sidebar_label: Services
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

**Oneki.js** provides 4 services you can use to implement the authentication process:

| Service | Description |
| ------- | ----------- |
| **[login service](#login-service)** | Service handling the login request. e.g: a AJAX POST, a redirect to an OIDC IDP, ...
| **[login callback service](#login-callback-service)** | When the authentication is done by an external party (e.g an OIDC IDP), this service handles the callback following a login
| **[logout service ](#logout-service)** | Service handling the logout request
| **[logout callback service ](#logout-callback-service)** | When the logout is done by an external party (e.g an OIDC IDP), this service handles the callback following a logout

## Login service

Based on the configuration found in settings.js, the **login service**:
- redirects the user to an external identity provider  (`External authentication`, `Open ID Connect`, `Oauth2`)
- provides a submit function to send the credentials to the server (`Form based authentication`)

It's instantied via the hook **useLoginService**.

```javascript
const [error, loading, submit] = useLoginService(idpName, options);
```

### Parameters

#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description
| --------- | ---- | -----------
| idpName   | string | **idpName** is used to retrieve the configuration with the key ***idp/:idpName*** in **settings.js**.<br/>Check the page **[Configuration](./authentication-type/introduction)** for more detail<br/><br/>**Defaults**: "default" |
| options | Object | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| options.<br/>onSuccess | onSuccess function | Called if the login request was successful.<br/>Mainly used for Form based authentication<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError | onError function | Called if the login request failed.<br/>Mainly used for Form based authentication<br/><br/>**Defaults**: a function **[sending a notification](../notification/introduction)** on the topic `login-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | SimpleError | Set if an error occurs during the login phase. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |
| submit | (data) => void | A function to submit the credentials to the server<br/>Mainly used for Form based authentication |

#### Example
- **[Form based authentication](./authentication-type/form-based#example)**
- **[Open ID Connect (server)](./authentication-type/oidc-server#example)**

## Login callback service

The login callback service handles a redirect following a login. This service is useful when the authentication implies a redirect following the login (**external login**, **open id connect**, ...)

Based on the configuration found in settings.js, the **login callback service** can (non exhaustive list): 
- Extract the token from the query parameters and potentialy store it
- Extract an authorization code from the query parameters and exchange it for a token

It's instantied via the hook **useLoginCallbackService**.

```javascript
const [error, loading] = useLoginCallbackService(idpName, options);
```

### Parameters

#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description
| --------- | ---- | -----------
| idpName   | string | **idpName** is used to retrieve the configuration with the key ***idp/:idpName*** in **settings.js**.<br/>Check the page **[Configuration](./authentication-type/introduction)** for more detail<br/><br/>**Defaults**: "default" |
| options | Object | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| options.<br/>onSuccess | onSuccess function | Called if the login callback was successful.<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError | onError function | Called if the login callback returned an error.<br/><br/>**Defaults**: a function **[sending a notification](../notification/introduction)** on the topic `login-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | SimpleError | Set if the callback request contains an error. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

## Logout service

Based on the configuration found in settings.js, the **logout service**:
- redirects the user to an external identity provider (`External authentication`, `Open ID Connect`, `Oauth2`)
- sends a AJAX request to the backend (`Form based authentication`)

It's instantied via the hook **useLogoutService**.

```javascript
const [error, loading] = useLogoutService(options);
```
**Note**: idpName is not needed as it's stored in the localStorage during the login process.

### Parameters

#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description
| --------- | ---- | -----------
| options | Object | Object with non mandatory attributes<br/><br/>**Defaults**: \{\} |
| options.<br/>onSuccess | onSuccess function | Called if the logout was successful.<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError | onError function | Called if the logout returned an error.<br/><br/>**Defaults**: a function **[sending a notification](../notification/introduction)** on the topic `logout-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | SimpleError | Set if an error occurs during the logout phase. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

## Logout callback service

The logout callback service handles a redirect following a logout. This service is useful when the authentication implies a redirect following the logout (**external login**, **open id connect**, ...)

It's instantied via the hook **useLogoutCallbackService**.

```javascript
const [error, loading] = useLogoutCallbackService(options);
```

### Parameters

#### Inputs
*Mandatory parameters are in bold*

| Parameter | Type | Description
| --------- | ---- | -----------
| options.<br/>onSuccess | onSuccess function | Called if the logout callback was successful.<br/><br/>**Defaults**: a function that redirects the user to the original requested page or the homepage |
| options.<br/>onError | onError function | Called if the logout callback returned an error.<br/><br/>**Defaults**: a function **[sending a notification](../notification/introduction)** on the topic `logout-error` |

#### Outputs
| Parameter | Type | Description
| --------- | ---- | -----------
| error | SimpleError | Set if the callback request contains an error. The error object contains three properties:<ul><li>**code**</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |

## Example

<Tabs
  defaultValue="login"
  values={[
    { label: 'Login', value: 'login', },      
    { label: 'Login Callback', value: 'loginCallback', },
    { label: 'Logout', value: 'logout', },
    { label: 'Logout Callback', value: 'logoutCallback', },
  ]
}>
<TabItem value="login">

```javascript
import React from "react";
import { useLoginService } from "onekijs";

export default React.memo(() => {
  const idpName = 'google';
  const options = {};
  const [error] = useLoginService(idpName, options);
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```

</TabItem>
<TabItem value="loginCallback">

```javascript
import React from "react";
import { useLoginCallbackService } from "onekijs";

export default React.memo(() => {
  const idpName = 'google';
  const options = {};
  const [error] = useLoginCallbackService(idpName,options);
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```

</TabItem>
<TabItem value="logout">

```javascript
import React from "react";
import { useLogoutService } from "onekijs";

export default React.memo(() => {
  const options = {};
  const [error] = useLogoutService(options);
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```

</TabItem>
<TabItem value="logoutCallback">

```javascript
import React from "react";
import { useLoginCallbackService } from "onekijs";

export default React.memo(() => {
  const options = {};
  const [error] = useLogoutCallbackService(options);
  if (error) {
    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>
  }
  return null;
}
```

</TabItem>
</Tabs>