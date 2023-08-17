---
id: introduction
title: Introduction
sidebar_label: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

**_Oneki.js_** provides an authentication / authorization library to implement the following use cases:

### Authentication (AuthN)

:::info
The goal of the authentication library is to provide the same service / methods for any type of authentication. Everything specific to an authentication type is configured in **[src/settings.ts](../configuration/introduction)**
:::

| Use case                                        | Description                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **[Form based](./authn/form-based)**            | Authentication with a username and password provided via a standard web form                                                           |
| **[External authentication](./authn/external)** | Authentication is handled by an external system that redirects to the application once authenticiation is complete                     |
| **[Open ID Connect](./authn/oidc-server)**      | Authentication via the Open ID Connect authorization code flow. **Oneki.js** fully implements the standard (including state and nonce) |
| **Oauth2 **                                     | Authentication via Oauth2 authorization code flow.                                                                                     |

### Authorization (AuthZ)

| Use case                                         | Description                                                                                                                                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[Secure component](./authz/secure-page)**      | HOC (High-Order Component) to secure any component.<br/>**E.g**: Give access to an admin page to authorized users only                                                                                                                     |
| **[Security context](./authz/security-context)** | The security context represents the logged-in user's profile and is available anywhere in the application<br/><br/>A common use case is to retrieve the logged-in user's roles from the security context to display or not certains fields |

## Architecture

**Oneki.js** implements the same logic for all types of authentication

```plantuml
@startuml
!includeurl https://brunofranki.github.io/static/asciidoc-plantuml-skin.iuml
start
:navigate to page;
  note right
    The page can be secured with
    the HOC <b>secure(Page)</b>
  end note
if (secure page / component?) then (yes)
  if (security context?) then (null)
    :redirect to
    login page;
    note left
      Security context is stored
      in the global state

      If not present, redirect the
      user to the login page
    end note
    -[dashed]-> Logic specific to
  the type of authentication;
    if (auth successful?) then (yes)
      :set security context;
      :redirect to page;
    else (no)
      :display error;
      end
    endif
  else (not null)
  endif
  if (authorized?) then (yes)
    :display page;
    stop;
  else (no)
    :display error;
    end
  endif
else (no)
  :display page;
  stop;
endif
@enduml
```

In the schema above, _the logic specific to the type of authentication_ is entirely based on configuration variables found in **[src/settings.ts](../configuration/introduction)**

**Example**: Here is the logic specific to a **[form based authentication](./authn/form-based)**

```plantuml
@startuml
!includeurl https://brunofranki.github.io/static/asciidoc-plantuml-skin.iuml
actor User
box "App (Browser)"
    participant "/restricted" as restricted
    participant "/login" as login
end box
box "App (backend)"
    participant "/api/auth" as auth
    participant "/api/whoami" as whoami
end box
User -> restricted: navigate
  activate restricted
  restricted -> login: redirect
    deactivate restricted
    activate login
    login -> login: read settings
    login -> login: save original route (/restricted)
    login -> User: display form
    deactivate login
User -> login: Submit credentials
  activate login
  login -> auth: POST username/password
    activate auth
    auth -> auth: validate credentials
  return set cookie (if success)
alt auth failed
  login -> User: display ErrorComponent
else auth successful
  login -> restricted: redirect to /restricted
    deactivate login
    activate restricted
    restricted -> whoami: GET securityContext
      activate whoami
    return
    restricted -> User: display page
    deactivate restricted
  end

@enduml
```

## Configuration

As usual, the configuration is done via **[src/settings.ts](../configuration/introduction)**

Here is a example of a Form based authentication configuration:

```javascript
export default {
  idp: {
    default: {
      type: "form",
      loginEndpoint: "/api/auth",
      logoutEndpoint: "/api/logout",
      userinfoEndpoint: "/api/whoami",
    },
  },
};
```

The various configuration are described in detail on **[this page](./authn/introduction)**

## Secure page / component

**Oneki.js** provides an **_[HOC](https://reactjs.org/docs/higher-order-components.html)_** to secure a component:

```javascript
const SecureComponent = secure(Component, validator, options);
```

If the user is not yet logged in, this HOC redirects him to the login page<br/>
If the logged user doesn't have the right to display the page, it displays an error

##### Examples

```javascript
// Only verify that the user is logged in
const SecuredPage = secure(Page);

// verify that the user is logged in and has the role ADMIN
const SecuredPage2 = secure(Page2, (securityContext) => {
  return securityContext &&
         securityContext.roles &&
         securityContext.roles.includes('ADMIN'));
}
```

Secure HOC is described in detail on **[this page](./authz/secure-page)**

## Security context

The security context is stored in the global state of Redux under the `auth.securityContext` key and is accessible everywhere with the `useSecurityContext` hook

```javascript
const [securityContext, loading] = useSecurityContext(selector, defaultValue);
```

The content of the security context is usually the attributes of the connected user such as email, name, firstname, roles, ...  
**Example**: The claims present in an `JWT ID Token`

**Oneki.js** doesn't expect a specific format for the security context. You can put whatever you want.

##### Examples

```javascript
// get the whole securityContext
// securityContext is undefined if user is not logged in
const [securityContext, loading] = useSecurityContext();

// retrieve a specific attribute of the securityContext
// email is undefined if user is not logged in
const [email, loading] = useSecurityContext("email");
```

The security context is described in detail on **[this page](./authz/security-context)**

## Services

**Oneki.js** provides 4 services that you can use to implement the authentication process:

| Service         | Description                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| **login**           | Service that processes the login request. e.g: a AJAX POST request, a redirect to an OIDC IDP, ...          |
| **login callback**  | When authentication is peformed by an external party (e.g., an OIDC Identity Provider), this service handles the callback |
| **logout**          | Service that processes the logout request                                                                    |
| **logout callback** | When the logout is peformed by an external party (e.g., an OIDC Identity Provider), this service handles the callback         |

## Example
<Details summary={<summary>Login with Google</summary>}>
  <ExampleMultipleSnippet 
    values={[
      { label: 'Login', path: 'auth/login/google/IndexPage.tsx' },
      { label: 'Login callback', path: 'auth/login/google/LoginCallbackPage.tsx' },
      { label: 'Logout', path: 'auth/logout/IndexPage.tsx' },
      { label: 'Logout Callback', path: 'auth/logout/CallbackPage.tsx' },      
      { label: 'settings.ts', path: 'settings.ts' },
      { label: 'Backend API', path: 'https://github.com/brunofranki/onekijs-example-backend/blob/master/app/utils/token.ts'},
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>
