---
id: introduction
title: "Authentication types"
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

The goal of the authentication library is to provide the same service / methods for any type of authentication. Everything specific to a type of authentication is configured in **[src/settings.ts](../../configuration/introduction)**

There are 4 types of authentication, each having their specific configuration format: 

| Use case                                        | Description                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **[Form based](./form-based)**            | Authentication with a username and password provided via a standard web form                                                           |
| **[External authentication](./external)** | Authentication is handled by an external system that redirects to the application once authenticiation is complete                     |
| **[Open ID Connect](./oidc-server)**      | Authentication via the Open ID Connect authorization code flow. **Oneki.js** fully implements the standard (including state and nonce)<br/><br/>**oidc_server** means that the exchange of the authorization code for a token is done on backend side<br/>**oidc_client** means that everything is done on client side (less secure but doesn't require a server) |
| **Oauth2 **                                     | Authentication via Oauth2 authorization code flow.                                                                                     |

## Configuration
The authentication services provided by **Oneki.js** retrieve their configuration from the key `idp/:idpName` in **src/settings.ts** where `idpName` is an ID used when the service is instantied.

##### Examples
Content of **src/settings.ts**

:::info
Each type of authentication has its own parameters, but some are common, such as
* **type**: the type of authentication
* **userinfoEndpoint**: represents the URL to retrieve the profile of the connected user
:::

```javascript
export default {
  idp: {
    default: {
      type: "form",
      loginEndpoint: "/api/lgoin",
      logoutEndpoint: "/api/logout",
      userinfoEndpoint: "/api/userinfo",
      ...
    },
    myOidc: {
      type: "oidc_server",
      authorizeEndpoint: process.env.REACT_APP_AUTHORIZE_ENDPOINT,
      userinfoEndpoint: "/api/userinfo",
      ...
    },
    myOidcClient: {
      type: "oidc_client",
      ...
    },
    myExternal: {
      type: "external",
      ...
    },
    myOauth2: {
      type: "oauth2",
      ...
    }
  }
}
```

<p/>
Instantiation of the service:

```javascript
// Login service will use the configuration idp.myId
useLoginService('myId');

// As no id is indicated below, login service will use idp.default
useLoginService();
```

### Configuration parameter value
For many attributes in **src/settings.ts**, the value can be a `string`, a `Function` or an `async Function`

Example:
```javascript
loginEndpoint: '/en/auth'
// or
loginEndpoint: (context) => {
  return `https://example.com/${context.i18n.locale}/auth`
}
// or
loginEndpoint: async (context) => {
  return await myAsyncFunction("foo");
}
```

### Context
The context contains the following attributes:

```javascript
const context = {
  idp // the configuration of the active IDP from settings.ts
  router
  store // the Redux store
  settings // the full settings.ts
  i18n // to know which locale is active
}
```

**[See API for more details](../../../api/interfaces/AppContext)**

## Callback
Via **src/settings.ts** you can specific an (optional) callback executed at the end of the authentication process<br/>

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


# Example

<Details summary={<summary>Example of settings.ts</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Settings', path: 'settings.ts' },
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>
