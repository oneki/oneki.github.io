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
| login callback service | When the authentication is done by an external party (e.g an OIDC IDP), this service handles the callback
| logout service | Service handling the logout request
| logout callback service | When the logout is done by an external party (e.g an OIDC IDP), this service handles the callback

## Login service

Based on the configuration found in settings.js, the **login service**:
- redirects the user to an external authentication website (`External authentication`, `Open ID Connect`, `Oauth2`)
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
| error | HTTPError | Set if an error occurs during the login phase. The error object contains three properties:<ul><li>**code**: an HTTP status code (400, 401, 500, ...)</li><li>**message**: the error message</li><li>**payload**: any additionnal data specific to the error</li></ul>|
| loading | boolean | Flag to indicate that an AJAX request is in progress |
| submit | (data) => void | A function to submit the credentials to the server<br/>Mainly used for Form based authentication |

#### Example
- **[Form based authentication](./authentication-type/form-based#example)**
- **[Open ID Connect (server)](./authentication-type/oidc-server#example)**