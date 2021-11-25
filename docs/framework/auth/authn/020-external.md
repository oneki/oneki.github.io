---
id: external
title: External authentication
sidebar_label: External auth
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

**External authentication** means that the authentication is handled by an external entity and once the authentication is done, the user is redirected back to the React application.

:::note
The external entity could be the backend of the React app or any other server.
:::

**Oneki.js** expects a function to parse the parameters returned by the external entity

## Architecture

The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for the logged-in user. This means that this page is secured via the **[secure HOC](../authz/secure-page)**<br/>
This flow can be customized via `src/settings.ts`

```plantuml
@startuml
!includeurl https://brunofranki.github.io/static/asciidoc-plantuml-skin.iuml
actor User
box "App (Browser)"
    participant "/restricted" as restricted
    participant "/login" as login
    participant "/login-callback" as loginCallback
end box
box "App (Backend)"
    participant "/auth" as idp
    participant "/whoami" as whoami
end box
User -> restricted: navigate
  activate restricted
  restricted -> login: redirect
    deactivate restricted
    activate login
    login -> login: read settings
    login -> login: save original route (/restricted)
    login -> idp: redirect
    deactivate login
User -> idp: Submit credentials
  activate idp
  idp -> idp: authenticate
  idp -> loginCallback: redirect
  deactivate idp
  activate loginCallback
alt auth failed
  loginCallback -> User: display ErrorComponent
else auth successful
  loginCallback -> restricted: redirect to /restricted
    deactivate loginCallback
    activate restricted
    restricted -> whoami: GET securityContext
      activate whoami
    return
    restricted -> User: display page
    deactivate restricted
  end

@enduml
```

:::info
In the above scenario, the **/login page** uses the `useLogin` to redirect the user to the external entity.
:::

## Configuration

The `useLogin`, `useLoginCallback`, `useLogout` and `useLogoutCallback` hooks are configured via several parameters in `src/settings.ts` (**[see configuration](./introduction#configuration)**)

**the following parameters are available:**

```javascript
export default {
  idp: {
    default: {
      // MANDATORY parameters
      type: "external",
      externalLoginEndpoint: "/api/auth",

      // OPTIONAL parameters
      externalLogoutEndpoint: "/api/logout",
      userinfoEndpoint: "/api/whoami",
      postLoginRedirectKey: "redirectUri",
      postLogoutRedirectKey: "redirectUri",
      callback: (result, context) => [token, securityContext],
    },
  },
};
```

<p/>
_Mandatory parameters are marked with a \*_

| Key                         | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**\*                  | string                                                                               | must be "**form**"                                                                                                                                                                                                                                                                                              |
| **externalLoginEndpoint**\* | [externalLoginEndpoint](../../../api/interfaces/IdpSettings#externalloginendpoint)   | The URL of an external webpage that allows the user to log in<br/><br/>Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>                                                                                                                                                  |
| **externalLogoutEndpoint**  | [externalLogoutEndpoint](../../../api/interfaces/IdpSettings#externallogoutendpoint) | The URL of an external webpage that allows the user to log out<br/><br/>Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>                                                                                                                                                 |
| **userinfoEndpoint**        | [userinfoEndpoint](../../../api/interfaces/IdpSettings#userinfoendpoint)             | The URL of an API called to retrieve the connected user's profile (via a HTTP GET request)<br/><br/>Can be:<ul><li>A relative or absolute URL</li><li>A function that returns an object representing the userInfo. <br/>For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul> |
| **loginCallbackRoute**      | string                                                                               | The URL to which the user is redirected after authentication<br/>**Example**: https://mysite.com/login-callback<br/><br/>**Defaults to**: <current_url>/callback (so if current URL is https://mysite.com/login -> defaults to https://mysite.com/login/callback)                                               |
| **postLoginRedirectKey** | string | **Oneki.js** adds a query param to the `externalLoginEndpoint` to indicate the callback URL to redirect to once the authentication is performed<br/><br/>**Example**:<br/>if <ul><li>`externalLoginEndpoint` = "https://idp.com/auth"</li><li>`postLoginRedictKey` = "redirectUri"</li><li>`loginCallbackRoute` = https://mysite.com/login-callback</li></ul> then the external authentication URL is <ul><li>https://idp.com/auth?redirectUri=https://mysite.com/login-callback</li></ul><br/>**Defaults to**: redirect_uri |
| **logoutCallbackRoute**      | string                                                                               | The URL to which the user is redirected after disconnection<br/>**Example**: https://mysite.com/logout-callback<br/><br/>**Defaults to**: <current_url>/callback (so if current URL is https://mysite.com/logout -> defaults to https://mysite.com/logout/callback)                                               |
| **postLogoutRedirectKey** | string | **Oneki.js** adds a query param to the `externalLogoutEndpoint` to indicate the callback URL to redirect to once the disconnection is performed<br/><br/>**Example**:<br/>if <ul><li>`externalLogoutEndpoint` = "https://idp.com/logout"</li><li>`postLoginRedictKey` = "redirectUri"</li><li>`loginCallbackRoute` = https://mysite.com/logout-callback</li></ul> then the external authentication URL is <ul><li>https://idp.com/logoutredirectUri=https://mysite.com/logout-callback</li></ul><br/>**Defaults to**: redirect_uri |
| **callback** | [callback](../../../api/interfaces/IdpSettings#callback) | a callback function to parse the query params received by the loginCallbackRoute.<br/><br/>The fonction returns optionally a token and/or a securityContext<br/>if callback is null, **Oneki.js** assumes that the session is done via a cookie and the security context is retrieved via the **userinfoEndpoint** defined above)<br/><br/>**Defaults to**: null |
| **persist** | string | How the token is persisted<br/>**Possible values**: <ul><li>`memory`: the token is stored only in the global state with the key `auth.token`</li><li>`localStorage`: the token is stored in the global state with the key `auth.token` and in the browser's local storage with the key `onekijs.token`</li><li>`sessionStorage`: the token is stored in the global state with the key `auth.token` and in the browser's session storage with the key `onekijs.token`</li><li>`cookie`: the token is stored in the global state with the key `auth.token` and in the browser's cookies with the key `onekijs.token`</li></ul><br/>**Defaults to**: memory |

## Example

The example below redirects the user to an external page (`/login.html`, not part of the React application) to handle the authentication. The redirect is done via `useLogin` in `/login` page

Once the authentication is done, he's redirected back to `/login-callback?token=XXXX` which is part the React application. Then:
* The token is extracted from the URL and put in the global state with the key `auth.token`.
* `secure() HOC` retrieves the user's profile of the user via an AJAX GET request to `/userinfo` with an HTTP Authorization header = `Bearer <TOKEN_VALUE_IN_GLOBAL_STATE>`

:::info
the page `login.html` could be hosted on another domain
:::

<Tabs>
  <TabItem value="cra">
  <Sandbox
    name="cra-auth-external"
    height="650"
    modules={['/src/settings.ts', , '/src/pages/admin.tsx', '/src/pages/login.tsx', '/src/pages/login-callback.tsx']}
  />
  </TabItem>
  <TabItem value="next">
  <Sandbox
    name="next-auth-external"
    height="1000"
    modules={['/src/pages/index.tsx', '/src/settings.ts', '/src/pages/_app.tsx']}
  />  
  </TabItem>
</Tabs>