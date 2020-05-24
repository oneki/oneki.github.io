---
id: use-login-service
title: useLoginService
sidebar_label: useLoginService
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
const [state, submit] = useLoginService(configId);
```
***useLoginService*** reads a "login" configuration from settings.js and returns:
* **a local state** containing *a loading state*, *an error message*, ...
* **a submit function** used to submit the credentials to the server

***useLoginService*** is a very powerful hook that supports these kinds of authentication:

| Type        |      Description   |
| ------------- | ------------- |
| [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) | ***useLoginService*** supports "Authorization code with PKCE" and "Implicit Grant" authorization flows<br/>It can extract the id_token, access_token, refresh_token returns by an IDP and build a security context available across the whole application |
| [Oauth2](https://tools.ietf.org/html/rfc6749) | ***useLoginService*** supports the same type of flows as for Open ID Connect |
| Form | ***useLoginService*** provides a submit function to send the username, password and "remember me" data to the server<br/>It can build a security context from the data returned by the server |
| External | ***useLoginService*** can delegate to an external URL the authentication<br/>It can build a security context from the data from the URL the server redirects to  |


### Parameters
#### Inputs
```javascript
// [Optional] the ID of the configuration in settings.js
// If configId is undefined, useLoginService uses the configuration with id="default"
configId: function(state): any | string
```
#### Outputs
```javascript
state: {
  // a boolean that is true when a AJAX request is pending
  loading: boolean,

  // In case of a failure, errorMessage contains a description of the failure
  errorMessage: string,

  // doNotRender is flag to indicate if a form should be rendered or not
  // e.g: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
}

// a function that should be used to send the authentication data to the server
submit: function(data)
```

## Configuration
***useLoginService*** supports 4 types of configuration: **oidc**, **oauth2**, **form** and **external**<br/>
The configuration **must** be under the key "**idp/:configId**". For example, if **configId**=_my_login_config_, the config must look like this:
```javascript
const settings = {
  idp: {
    my_login_config: {
      type: "oidc", // oidc, oauth2, form or external
      ...
    }
  }
}
```
### OIDC (OpenID Connect) configuration
The configuration of "oidc" type of authentication is the following: <br/>(mandatory attributes are in **bold**)

| Key           |      Type     | Description |
| ------------- | ------------- | ------------|
| **type** | string | must be "**oidc**" |
| responseType | string | can be: <ul><li>"_code_" (for authorization code)</li><li>"_id_token token_"</li><li>"_token_"</li></ul>**Defaults** to _code_ |
| **authorizeUrl** | string \|<br/>function(idp,context) | The _authorization endpoint_*_ identified by:<ul><li>a string (relative or absolute URL)</li><li>or a function returning the URL</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| **logoutUrl** | string \|<br/>function(idp,context) | The _logout endpoint_ identified by:<ul><li>a string (relative or absolute URL)</li><li>or a function returning the URL</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| **clientId** | string | the _client_id_ created on the IDP (identity provider) |
| tokenFetch | string \|<br/>function(grant_type, idp, context) | tokenFetch is **mandatory** if _responseType_ = "code".<br/>tokenFetch is:<ul><li>a string (relative or absolute URL) that identifies the _token end point_</li><li>or a function that does an AJAX POST request to the token endpoint and returns a object of type "Token"</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| validate | boolean | flag to indicate if the id_token and the access_token are validated.<br/>**Defaults** to *true* |
| pubKeyFetch | string \|<br/>function(token, idp, context)  | pubKeyFetch is **mandatory** if _validate_ = true.<br/>pubKeyFetch is:<ul><li>a string (relative or absolute URL) that identifies the _JWKS endpoint_</li><li>or a function that returns a public key</li></ul>if it's a relative URL, it's prefixed by the server.baseUrl from settings.js |
| clientSecret | string | the client_secret expected by the IDP.<br/>This is normally not used in a javascript application |
| clientAuth | string | can be:<ul><li>basic</li><li>or body</li></ul>If _clientSecret_ is specified, it can be send via a basic authorization header or in the body of the request.<br/>**Defaults** to basic
| clockSkew | number | clockSkew represents the number of seconds between the real expiration time of the access token and the time at which the token will be refreshed<br/>**Defaults** to _60_ (seconds)
| postLoginRedirectKey | string | When calling the _authorize_ endpoint, _postLoginRedirectKey_ represents the name of the parameter to indicate the redirect URI.<br/>**Defaults** to *redirect_uri* which is the oidc standard)
| postLogoutRedirectKey | string | When calling the _logout_ endpoint, _postLoginRedirectKey_ represents the name of the parameter to indicate the redirect URI.<br/>**Defaults** to *post_logout_redirect_uri* which is the oidc standard)
| securityContextFetch | string \|<br/> function (idp, context) | securityContextFetch can be:<ul><li>A string with the following format:<br/>*token://<token_prop>* where <token_prop> is one of: id_token, access_token</li><li>or a function that returns an object that represents the securityContext. For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul>**Defaults** to *token://id_token* if *responseType* contains id_token or *token://access_token* if *responseType* contains only token |
| scope | string | the value of the parameter "scope" sent to the *authorize* endpoint.<br/>**Defaults** to *"openid"* |
| pkce | boolean | flag to indicate if the PKCE extension is applied. This flag is only used if *responseType* = "code"<br/>**Defaults** to true |
| nonce | boolean | flag to indicate if the nonce in the id_token is validated.<br/>**Defaults** to true |
| state | boolean | flag to indicate if the javascript client send a state to the IDP. Recommended for mitigating attacks.<br/>**Defaults** to true |
| callback | function(result, idp, context) | Depending on the value of responseType, the tokens are passed differently:<ul><li>responseType = "code": tokens are passed via the JSON response of an AJAX POST request.</li><li>reponseType = "id_token token" or "token": tokens are passed via the parameters of the callback URL</li></ul>callback is a function that extracts the tokens from the URL or the JSON response<br/>**Defaults** to the standard callback function provided by Oneki.js that follows that OIDC standard |
| persist | string | How the tokens are stored locally in the browser. Possible values are:<ul><li>_localStorage_: user stays logged in as long as the refresh token is valid even if the browser is closed</li><li>_sessionStorage_: user is logged out if the tab is closed</li><li>_cookie_: TTL is defined in _cookieTTL_</li></ul>**Defaults** to _localStorage_ |
| cookieTTL | number | Time to leave (in seconds) before the cookie expires. If null or 0, the cookie is erased when the browser is closed<br/>**Defaults** to null

TODO describe other configurations and add examples