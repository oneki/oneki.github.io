---
id: introduction
title: "Authentication types"
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

The goal of the authentication library is to provide the same service / methods for any kind of authentication. Everything specific to a type of authentication is configured in **[settings.js](../../configuration/introduction)**

There are 4 types of authentication, each having their specific configuration format: 

| Use case | Type | Description |
| -------- | ----- | -----------
| Form based | form | Authentication via a standard username / password React form | 
| External authentication | external | Authentication is handled by an external system redirecting to the application once the authenticiation is done |
| Open ID Connect | oidc_server<br/>oidc_client | Authentication via Open ID Connect authorization code flow.<br/><br/>**oidc_server** means that the exchange of the authorization code for a token is done on backend side<br/>**oidc_client** means that everything is done on client side (less secure but doesn't require a server) |
| Oauth2| oauth2 | Authentication via Oauth2 authorization code flow. |

## Structure
The authentication services provided by **Oneki.js** retrieve their configuration from the key ***idp/:idpName*** in **settings.js** where ***idpName*** is an ID used when the service is instantied.

##### Examples
Content of settings.js

```javascript
export default {
  idp: {
    default: {
      type: "oauth2",
      ...
    },
    myId: {
      type: "form",
      ...
    },
    myOtherId: {
      type: "external",
      ...
    }
  }
}
```

Instantiation of the service

```javascript
// Login service will use the configuration idp.myId
useLoginService('myId');

// As no id is indicated below, login service will use idp.default
useLoginService();
```

## String vs Function
For many attributes, the value can be a **String** or a **Function** (can be **async**) receiving a ***[context](#context)***

Example:
```javascript
loginEndpoint: '/en/auth'
// or
loginEndpoint: (context) => {
  return `https://example.com/${context.i18n.locale}/auth`
}
```

### Context
The context contains the following attributes:

```javascript
const context = {
  idp // the configuration of the active IDP from settings.js
  router
  store // the Redux store
  settings // the full settings.js
  i18n // to know which locale is active
}
```

## Endpoint
Endpoints specify how to interact with the backend.<br/>
For example, in a Form based authentication, you must indicate the URL used to send the username / password to do the authentication.

You can provide the value in two ways:

| Way | Description | Example
| --- | ----------- | -------
| String | If a String is provided, this is the URL to call the backend. <br/>If the URL is relative (e.g: ***/api/login***), it's prefixed with the ***server.baseUrl*** from settings.js | /api/login
| Function | Instead of a String, a function with the format **(context) => URL** can be specified. **Oneki.js** executes it to retrieve the URL<br/><br/>This function can be **async** | (context) => https://oneki.org/api/login

###### Examples

```javascript
export default {
  idp: {
    default: {
      type: 'form',

      // Configuration via a function
      loginEndpoint: ({ idp, router, store, settings, i18n }) => {
        return `https://example.com/${i18n.locale}/auth`
      },

      // Configuration via a String
      logoutEndpoint: '/logout'
    }
  }
}
```

### userinfo endpoint
The userinfo endpoint is used to retrieve the security context of the logged-in user. The security context often contains attributes like name, firstname, email, roles, ...



The userinfo endpoint is a little bit different because one can provide the value in three ways:

| Way | Description | Example
| --- | ----------- | -------
| String (URL) | a URL String. <br/>If the URL is relative (e.g: ***/api/userinfo***), it's prefixed with the ***server.baseUrl*** from settings.js | /api/userinfo
| Function | Instead of a String, a function with the format **(context) => URL** can be specified. **Oneki.js** executes it to retrieve the URL<br/><br/>This function can be **async** | (context) => https://oneki.org/api/userinfo
| String (token...) | A string starting with ***token***.<br/>**Oneki.js** extracts the JWT token from the global state and uses it as the security context.<br/>The global state is populated with the token during the authentication<br/><br/>Must be one of these values:<ul><li>**token://id_token**</li><li>**token://access_token**</li><li>**token**</li></ul>[see token extraction](#token-extraction) | token://id_token

##### Token
When the value starts with **token**, it means that the backend doesn't expose a userinfo endpoint, but the security context can be retrieved from a token existing in the global state (under the key **auth.token**) with the following format:

```json
{
  "id_token": "JWT_ID_TOKEN_IN_BASE64",
  "access_token": "JWT_ACCESS_TOKEN_IN_BASE64",
  ...
}
```
The token is stored in the global state via a **[callback function](#callback)**

##### Token extraction

if the value is 
- **token://id_token**, then the token JWT_ID_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token://access_token**, then the token JWT_ACCESS_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token**, then the whole response becomes the security context (there is no parsing)

###### Example
```javascript
userinfoEndpoint: '/api/whoami'
// or
userInfoEndpoint: (context) => '/api/whoami'
// or
userInfoEndpoint: 'token://id_token' //will not call the backend, but expects that the token is in the global state
```

## Callback
Via **settings.js** you can specific a callback executed at the end of the authentication process<br/>

```javascript
callback: (result, context) => [token, securityContext]
```

The callback receives the **[context](#context)** but also a **result** object. The **result** object is specific to the type of authentication<br/>
***Example***: For a Form based authentication, the **result** object is the response from the backend

The callback returns optionally a token and/or a securityContext:
- The **token** must have a specific format **[described here](#token)**. **Oneki.js** stores the token in one of the following location (based on the configuration attribute **persist**):
  - **no storage** (if persist = null)
  - **global state** with the key **auth.token** (if persist = "memory")
  - **cookie** (if persist = "cookie")
  - **sessionStorage** (if persist = "sessionStorage")
  - **localStorage** (if persist = "localStorage")
- The **securityContext** is stored in the global state with the key **auth.securityContext**
