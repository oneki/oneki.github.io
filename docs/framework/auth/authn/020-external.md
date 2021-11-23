---
id: external
title: External authentication
sidebar_label: External auth
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

**Form based authentication** means that the login page presents a form, so the user can specifiy his username and password.

**Oneki.js** lets you build the form as you wish, but provide you a function to:
- submit the username / password to the backend server
- handle the response returned by the backend server

## Architecture

## Configuration
The configuration parameters are the following:

### Mandatory attributes

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
 