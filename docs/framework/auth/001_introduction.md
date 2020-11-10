---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';


***Oneki.js*** provides an authentication library to implement the following use cases:

| Use case | Description
| -------- | -----------
| Form based | Authentication via a standard username / password React form | 
| External authentication | Authentication is handled by an external system redirecting to the application once the authenticiation is done |
| Open ID Connect | Authentication via Open ID Connect authorization code flow. **Oneki.js** fully implements the standard (including state and nonce) |
| Oauth2| Authentication via Oauth2 authorization code flow. |

The goal of the authentication library is to provide the same service / methods for any kind of authentication. Everything specific to a type of authentication is configured in **[settings.js](../configuration/introduction)**

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

In the schema above, *the logic specific to the type of authentication* is entirely based on configuration variables found in **[settings.js](#Configuration)**

**Example**: Here is the logic specific to a **[form based authentication](./authentication-type/form-based)**

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
As usual, the configuration is done via **[settings.js](../configuration/introduction)**

Here is a example of Form based authentication configuration:

```javascript
export default {
  idp: {
    default: {
      type: 'form',
      loginEndpoint: '/api/auth',
      logoutEndpoint: '/api/logout',
      userinfoEndpoint: '/api/whoami',
    },    
  }
}
```

The various configuration are described in detail on **[this page](./authentication-type/introduction)**

## Secure page / component
**Oneki.js** provides an ***[HOC](https://reactjs.org/docs/higher-order-components.html)*** to secure a component:

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

Secure HOC is described in detail on **[this page](./secure-page)**

## Security context
The security context is stored in the global Redux state under the key **auth.securityContext** and accessible anywhere with the hook ***useSecurityContext***

```javascript
const [securityContext, loading] = useSecurityContext(selector, defaultValue);
```

The content of the security context is generally the attributes of the logged user like email, name, firstname, roles, ... 

**Oneki.js** doesn't expect a specific format for the security context. You can put in what you want.

##### Examples
```javascript
// retrieve the whole securityContext
const [securityContext, loading] = useSecurityContext(); // securityContext is undefined if user is not logged in

// retrieve a specific attribute of the securityContext
const [email, loading] = useSecurityContext("email"); // email is undefined if user is not logged in
```

The security context is described in detail on **[this page](./security-context)**

## Services
**Oneki.js** provide up to 4 services you can use to implement the authentication process:

| Service | Description |
| ------- | ----------- |
| login | Service that handles the login request. e.g: a AJAX POST, a redirect to an OIDC IDP, ...
| login callback | When the authentication is done by an external party (e.g an OIDC IDP), this service handles the callback
| logout | Service that handle the logout request
| logout callback | When the logout is done by an external party (e.g an OIDC IDP), this service handles the callback

## Example

<NextSandbox 
  name="auth/form" 
  height="600" 
  modules={['/src/pages/profile.js', '/src/pages/admin.js','/src/pages/login.js','/src/pages/logout.js', 'src/settings.js']} 
/>

