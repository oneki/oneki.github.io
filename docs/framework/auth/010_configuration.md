---
id: configuration
title: Configuration
sidebar_label: Configuration
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

The goal of the authentication library is to provide the same service / methods for any kind of authentication. Everything specific to a type of authentication is configured in **[settings.js](../configuration/introduction)**

There are 4 types of configuration which all have their specific format: 

| Use case | Type | Description |
| -------- | ----- | -----------
| Form based | form | Authentication via a standard username / password React form | 
| External authentication | external | Authentication is handled by an external system redirecting to the application once the authenticiation is done |
| Open ID Connect | oidc_server<br/>oidc_client | Authentication via Open ID Connect authorization code flow.<br/><br/>**oidc_server** means that the exchange of the authorization code for a token is done backend side<br/><br/>**oidc_client** means that everything is done client side (less secure) |
| Oauth2| oauth2 | Authentication via Oauth2 authorization code flow. |

## Structure
The authentication services provided by **Oneki.js** retrieve their configuration from the key ***idp/:idpName*** in **settings.js** where ***idpName*** is an ID that is used when the service is instantied.

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
useLoginService('myId');

// As no id is indicated below, the id 'default' is used
useLoginService();
```

## String vs Function
For many attributes, the value can be a **String** or a **Function**. The function can be **async** and receives a ***[context](#context)***

#### Context
The context contains the following attributes:

```javascript
const context = {
  idp // the configuration of the currently used IDP from settings.js
  router
  store // the Redux store
  settings // the full settings.js
  i18n // to know which locale is active
}
```

#### login/logout endpoint
Some of the attributes of the configuration are the login and logout endpoints to interact with the backend.<br/>
For example, in a Form based authentication, you must indicate the URL used to send the username / password to do the authentication.

You can provide the value in two ways:

| Way | Description | Example
| --- | ----------- | -------
| String | If a String is provided, this is the URL to call the backend. <br/>If the URL is relative (e.g: ***/api/login***), it's prefixed with the ***server.baseUrl*** from settings.js | /api/login
| Function | Instead of a String, a function with the format **(context) => URL** can be specified. **Oneki.js** executes it to retrieve the URL<br/><br/>This function can be **async** | (context) => https://oneki.org/api/login

##### Examples

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

#### userinfo endpoint
The userinfo endpoint is used to retrieve the security context of the logged user. The security context often contains attributes like name, firstname, email, roles, ...

One of the attributes of the configuration is the userinfo endpoint to interact with the backend.

You can provide the value in three ways:

| Way | Description | Example
| --- | ----------- | -------
| String (token://...) | **Oneki.js** extracts the JWT token from the response and uses it as the security context.<br/>Must be one of these values:<ul><li>**token://id_token**</li><li>**token://access_token**</li><li>**token://token**</li></ul>[see token extraction](#token-extraction) | token://id_token
| String (URL) | If a String is provided, this is the URL to call the backend. <br/>If the URL is relative (e.g: ***/api/userinfo***), it's prefixed with the ***server.baseUrl*** from settings.js | /api/userinfo
| Function | Instead of a String, a function with the format **(context) => URL** can be specified. **Oneki.js** executes it to retrieve the URL<br/><br/>This function can be **async** | (context) => https://oneki.org/api/userinfo

When the value starts with **token://**, the response from **userinfoEndpoint** should be a JSON string like this one

```json
{
  "id_token": "JWT_ID_TOKEN_IN_BASE64",
  "access_token": "JWT_ACCESS_TOKEN_IN_BASE64",
  ...
}
```
##### Token extraction

if the value is 
- **token://id_token**, then the token JWT_ID_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token://access_token**, then the token JWT_ACCESS_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token://token**, then the whole response becomes the security context (there is no parsing)


## Configuration parameters

### Form based authentication
The configuration parameters are the following:

#### Mandatory attributes

| Key           |      Type     | Description |
| ------------- | ------------- | ------------|
| **type** | string | must be "**form**" |
| **loginEndpoint** | string \|<br/>function(context) | Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul> |
| **logoutEndpoint** | string \|<br/>function(context) | Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>|
| **userinfoEndpoint** | string \|<br/> function (context) | Can be:<ul><li>A relative or absolute URL</li><li>A function that returns an object representing the userInfo. <br/>For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul> |

#### Optional attributes

| Key           |      Type     | Default | Description |
| ------------- | ------------- | --------| ----------- |
| **loginMethod** | string | POST | if **loginEndpoint** is an URL, the method used to send username and password to the server |
| **loginContentType** | string | application/json | can be<ul><li>application/x-www-form-urlencoded</li><li>application/json</li></ul> |
| **usernameKey** | string | username | the field expected by the server for the username |
| **passwordKey** | string | password | the field expected by the server for the password |
| **rememberMeKey** | string | rememberMe | the field expected by the server for the rememberMe feature |
| **logoutMethod** | string | GET | if **logoutEndpoint** is an URL, the method used to call the logout URL|
| **callback** | function(response, context): [token,securityContext] | null | a callback function to parse the result of the authentication.<br/>The fonction returns optionally a token and/or a securityContext  (if not set, it's assumed that the session is done via a cookie and the security context is retrieved via the **userinfoEndpoint** defined above) |

#### Example
```javascript
export default {
  idp: {
    default: {
      // MANDATORY parameters
      type: 'form',
      loginEndpoint: '/api/login',
      logoutEndpoint: '/api/logout',
      userinfoEndpoint: '/api/whoami',

      // OPTIONAL parameters
      loginMethod: 'POST',
      loginContentType: 'application/json',
      usernameKey: 'username',
      passwordKey: 'password',
      rememberMeKey: 'rememberMe',
      logoutMethod: 'GET',
      callback: (result, context) => [null, result]  
    }
  }
}
```

### External authentication
The configuration parameters are the following:

#### Mandatory attributes

| Key           |      Type     | Description |
| ------------- | ------------- | ------------|
| **type** | string | must be "**external**" |
| **loginEndpoint** | string \|<br/>function(context) | Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>A redirect is done to this URL |
| **logoutEndpoint** | string \|<br/>function(context) | Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>|
| **userinfoEndpoint** | string \|<br/> function (context) | Can be:<ul><li>A relative or absolute URL</li><li>A function that returns an object representing the userInfo. <br/>For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul> |

#### Optional attributes

| Key           |      Type     | Default | Description |
| ------------- | ------------- | --------| ----------- |
| **loginMethod** | string | POST | if **loginEndpoint** is an URL, the method used to send username and password to the server |
| **loginContentType** | string | application/json | can be<ul><li>application/x-www-form-urlencoded</li><li>application/json</li></ul> |
 