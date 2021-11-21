---
id: form-based
title: Form based
sidebar_label: Form based
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

The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for logged-in user. This means that this page is secured thanks to the **[secure HOC](../secure-page)**<br/>
This flow can be customized via settings.js

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

#### Configuration example
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

## Example
<NextSandbox 
  name="auth/form" 
  height="600" 
  modules={['src/settings.js', '/src/pages/login.js', '/src/pages/logout.js', '/src/pages/profile.js', '/src/pages/admin.js']} 
/>