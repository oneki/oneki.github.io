---
id: oidc-server
title: OpenID Connect (server side)
sidebar_label: OpenID Connect (server side)
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **Oneki.js** supports the Open ID Connect (OIDC) authorization code flow where the authorization code is exchanged for an access token via a server. This is the most common and secure way to retrieve the access token 

In ***settings.js***, when the type is **"oidc_server"**, ***Oneki.js*** implements the following scenario:

```plantuml
@startuml
!includeurl https://brunofranki.github.io/static/asciidoc-plantuml-skin.iuml
actor User
box "App (Browser)"
    participant "/restricted" as restricted
    participant "/login" as login
    participant "/login/callback" as callback
end box
box "IDP (Google)"
    participant "/authorize" as google_authorize
    participant "/token" as google_token
    participant "/userinfo" as google_userinfo
end box
box "App backend"
    participant "/oauth2/token" as token
    participant "/userinfo" as userinfo
end box
User -> restricted: navigate
  activate restricted
  restricted -> login: redirect
    activate login
    login -> login: read settings
    login -> google_authorize: redirect
      activate google_authorize
      google_authorize -> google_authorize: display form
    return
  return
return

User -> google_authorize: submit credentials
  activate google_authorize
  google_authorize -> callback: redirect
    deactivate google_authorize
    activate callback
    callback -> token: exchange code
      activate token
      token -> google_token: exchange code
        activate google_token
      return
    token -> callback: set token in cookie
  callback -> restricted: redirect
  deactivate callback
    activate restricted
    restricted -> User
    deactivate restricted
  


@enduml
```

To authenticate against an OpenID Connect Identity Provider (OIDC IDP), you have to create four pages/routes:
* **login**: this page is displayed following a click on a link or a redirect following a 401 HTTP Error
* **login callback**: this route is called by the OIDC IDP (i.e: Google) after a successfull authentication
* **logout**: this page is displayed following a click on a logout link or if there is no activity for x minutes (configurable via settings)
* **logout callback**: this route is called by the OIDC IDP after a successfull logout

The code is the same for a NextJS App or a Create React App

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
  const [state] = useLoginService(idpName, options);
  return null;
}
```

<br/><br/>

## Parameters
#### Inputs
```javascript
// [Optional] the name of the IDP used for the login -- defaults to "default"
idpName: string

// [Optional] options object -- defaults to {}
options: {

  // a callback function triggered when an error is thrown -- defaults to notificationService.error
  onError: func
}
```
#### Outputs
```javascript
state: {
  // a boolean that is true when a AJAX request is pending
  loading: boolean,

  // In case of a failure, errorMessage contains a description of the failure
  errorMessage: string,

  // doNotRender is flag to indicate if a form should be rendered or not
  // i.e: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
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
  const [state] = useLoginCallbackService(idpName,options);
  return null;
}
```

<br/><br/>

## Parameters
#### Inputs
```javascript
// [Optional] the name of the IDP used for the login -- defaults to "default"
idpName: string

// [Optional] options object -- defaults to {}
options: {
  // a callback function triggered when an the login is successfull -- The default redirects the user from the calling page
  onSuccess: func
  // a callback function triggered when an error is thrown -- defaults to notificationService.error
  onError: func
}
```
#### Outputs
```javascript
state: {
  // a boolean that is true when a AJAX request is pending
  loading: boolean,

  // In case of a failure, errorMessage contains a description of the failure
  errorMessage: string,

  // doNotRender is flag to indicate if a form should be rendered or not
  // i.e: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
}
```

</TabItem>
<TabItem value="logout">

```javascript
import React from "react";
import { useLogoutService } from "onekijs";

export default React.memo(() => {
  const options = {};
  const [state] = useLogoutService(options);
  return null;
}
```

<br/><br/>

## Parameters
#### Inputs
```javascript
// [Optional] options object -- defaults to {}
options: {
  // a callback function triggered when an error is thrown -- defaults to notificationService.error
  onError: func
}
```
#### Outputs
```javascript
state: {
  // a boolean that is true when a AJAX request is pending
  loading: boolean,

  // In case of a failure, errorMessage contains a description of the failure
  errorMessage: string,

  // doNotRender is flag to indicate if a form should be rendered or not
  // i.e: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
}
```

</TabItem>
<TabItem value="logoutCallback">

```javascript
import React from "react";
import { useLoginCallbackService } from "onekijs";

export default React.memo(() => {
  const options = {};
  const [state] = useLogoutCallbackService(options);
  return null;
}
```

<br/><br/>

## Parameters
#### Inputs
```javascript
// [Optional] options object -- defaults to {}
options: {
  // a callback function triggered when an the logout is successfull -- The default redirects the user to the home page
  onSuccess: func
  // a callback function triggered when an error is thrown -- defaults to notificationService.error
  onError: func
}
```
#### Outputs
```javascript
state: {
  // a boolean that is true when a AJAX request is pending
  loading: boolean,

  // In case of a failure, errorMessage contains a description of the failure
  errorMessage: string,

  // doNotRender is flag to indicate if a form should be rendered or not
  // i.e: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
}
```
</TabItem>
</Tabs>

## Configuration
***useLoginService***, ***useLoginCallbackService***, ***useLogoutService***, ***useLogoutCallbackService*** are fully configured in settings.js<br/>
The configuration **must** be defined under the key "**idp/:idpName**". For example, if **idpName**=_google_, the config must look like this:
```javascript
const settings = {
  id: {
    google: {
      type: "oidc_server",
      ...
    }
  }
}
```

<br/><br/>

#### Mandatory attributes

| Key           |      Type     | Description |
| ------------- | ------------- | ------------|
| **authorizeEndpoint** | string \|<br/>function(idp,context) | Can be<ul><li>a string (relative or absolute URL)</li><li>or a function returning the URL</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| **clientId** | string | the _client_id_ created on the IDP (identity provider) |
| **logoutEndpoint** | string \|<br/>function(idp,context) | Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| **tokenEndpoint** | string \|<br/>function(grant_type, idp, context) | Can be<ul><li>a relative or absolute URL</li><li>A function that does an AJAX POST request to the token endpoint and returns a object of type "Token"</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| **type** | string | must be "**oidc_server**" |
| **userinfoEndpoint** | string \|<br/> function (idp, context) | Can be:<ul><li>A relative or absolute URL</li><li>A function that returns an object that represents the userInfo. For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |

<br/><br/>

#### Optional attributes

| Key           |      Type     | Description | Default |
| ------------- | ------------- | ------------| ------- |
| **callback** | function(response, idp, context): [token,userInfo] | Callback called at the end of the authentication for extracting the token and the userInfo from the response. <br/><br/>**Inputs**<ul><li>response: the response from the authentication server</li><li>idp: the configuration of the IDP used</li><li>context: an object containing the redux store, the router and the settings</li></ul>**Outputs**<ul><li>token: the oauth2 token</li><li>userInfo: the securityContext of the user</li></ul> | null |
| **codeChallengeMethod** | string | Method that was used to derive an authorization code challenge | S256 |
| **jwksEndpoint** | string \|<br/>function(token, idp, context)  | jwksEndpoint is **mandatory** if _validate_ = true.<br/><br/>Can be<ul><li>A relative or absolute URL</li><li>A function that returns a public key</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js | null |
| **logoutCallbackRoute** | string | a relative or absolute URL called by the OIDC server after a successfull logout. Should be used to remove the cookie on the server side | null |
| **pkce** | boolean | flag to indicate if the PKCE extension is applied. Recommended |true|
| **nonce** | boolean | flag to indicate if the nonce in the id_token is validated on the client side. Should be done on the server side  | false |
| **postLoginRedirectKey** | string | When calling the _authorize_ endpoint, _postLoginRedirectKey_ represents the name of the parameter to indicate the redirect URI | redirect_uri |
| **postLogoutRedirectKey** | string | When calling the _logout_ endpoint, _postLoginRedirectKey_ represents the name of the parameter to indicate the redirect URI | post_logout_redirect_uri |
| **responseType** | string | only _code_ is supported right now | code |
| **scope** | string | the value of the parameter "scope" sent to the *authorize* endpoint. Should generally be redefined | openid |
| **state** | boolean | flag to indicate if the javascript client send a state to the IDP. Recommended for mitigating attacks | true |
| **validate** | boolean | flag to indicate if the id_token and the access_token are validated. Should generally be done on the server side | false |

<br/><br/>

## Configuration example
```javascript
const settings = {
  idp: {
    google: {
      type: 'oidc_server', 
      clientId: '1eb5cq6p7d8dm8g4q9jk6qdve5', // id given by Google              
      authorizeEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth', // URL given by Google. Will be called by the client
      tokenEndpoint: '/api/oauth2/token',   // URL of a service exposed by your server that exchanges the authorization code for an access token by calling the Google /token endpoint
      userinfoEndpoint: '/api/oauth2/userinfo', // URL of a service exposed by your server that returns the details about the logged-in user
      logoutEndpoint: '/api/oauth2/logout', // should ideally be an IDP URL. Unfortunately Google does not support logout, so it's a URL from the server which only removes the cookie
      scope: 'openid email profile', // ask to Google the profile and the email of the user
    }
  }
}
```
