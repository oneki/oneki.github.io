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

