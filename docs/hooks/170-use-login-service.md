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
  // i.e: in case of an external identify provider, a redirect is done in the useEffect 
  // and there is no need to render something
  doNotRender: boolean
}

// a function that should be used to send the authentication data to the server
submit: function(data)
```

TODO: add more details