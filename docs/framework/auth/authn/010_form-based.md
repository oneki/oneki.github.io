---
id: form-based
title: Form based authentication
sidebar_label: Form based auth
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"

**Form based authentication** means that the login page presents a form, so that the user can specifiy a username and password.

**Oneki.js** allows you to build the form as you wish, but provide a function to:

- submit the username / password to the backend server
- manage the response returned by the backend server

# Architecture

The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for the logged-in user. This means that this page is secured via the **[secure HOC](../authz/secure-page)**<br/>
This flow can be customized via `src/settings.ts`

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

:::info
In the above scenario, the **/login page** uses the `useLogin` hook to generate a submit function. This function executes the `AJAX POST` request that sends the credentials to the backend system.
:::

# Example

<Details summary={<summary>Basic form login</summary>}>

  <ExampleMultipleSnippet 
    values={[
      { label: 'Login', path: 'auth/login/form/IndexPage.tsx' },
      { label: 'Settings', path: 'settings.ts' },
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>

# Configuration

the `useLogin` and `useLogout` hooks are configured via several parameters in `src/settings.ts` (**[see configuration](./introduction#configuration)**)

**the following parameters are available:**

```javascript
export default {
  idp: {
    default: {
      // MANDATORY parameters
      type: "form",
      loginEndpoint: "/api/login",

      // OPTIONAL parameters
      logoutEndpoint: "/api/logout",
      userinfoEndpoint: "/api/whoami",
      loginMethod: "POST",
      loginContentType: "application/json",
      usernameKey: "username",
      passwordKey: "password",
      rememberMeKey: "rememberMe",
      logoutMethod: "GET",
      callback: (result, context) => [null, result],
    },
  },
};
```

<p/>
_Mandatory parameters are marked with a \*_

| Key                  | Type                                                 | Description                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**\*             | string                                               | must be "**form**"                                                                                                                                                                                                                                                                                                   |
| **loginEndpoint**\*    | [loginEndpoint](../../../api/interfaces/IdpSettings#loginendpoint)                      | The URL of the API that authenticate the user<br/><br/>Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>                                                                                                                                                                                                                              |
| **logoutEndpoint**   | [logoutEndpoint](../../../api/interfaces/IdpSettings#logoutendpoint)                       | The URL of the API that disconnect the user<br/><br/>Can be<ul><li>A relative or absolute URL</li><li>A function returning the URL</li></ul>                                                                                                                                                                                                                              |
| **userinfoEndpoint** | [userinfoEndpoint](../../../api/interfaces/IdpSettings#userinfoendpoint)                    | The URL of an API called to retrieve the connected user's profile (via a HTTP GET request)<br/><br/>Can be:<ul><li>A relative or absolute URL</li><li>A function that returns an object representing the userInfo. <br/>For example a object like this: {email: 'foo@example.com', roles: ['ADMIN']}}</li></ul>                                                                                                          |
| **loginMethod**      | string                                               | if **loginEndpoint** is a URL, the HTTP method used to send the username and password to the server<br/><br/>**Defaults to**: `POST`                                                                                                                                                                                           |
| **loginContentType** | string                                               | the HTTP Content-Type header value<br/><br/>can be<ul><li>application/x-www-form-urlencoded</li><li>application/json</li></ul><br/>**Defaults to**: `application/json`                                                                                                                                                                                             |
| **usernameKey**      | string                                               | the name of the parameter in the request sent to the server that contains the **username**<br/><br/>**Defaults to**: username                                                                                                                                                                                                                                 |
| **passwordKey**      | string                                               | the name of the parameter in the request sent to the server that contains the **password**<br/><br/>**Defaults to**: password                                                                                                                                                                                                                                 |
| **rememberMeKey**    | string                                               | the name of the parameter in the request sent to the server that contains the **rememberMe**<br/><br/>**Defaults to**: rememberMe                                                                                                                                                                                                                     |
| **logoutMethod**     | string                                               | if **logoutEndpoint** is a URL, the HTTP method used to call the logout URL<br/><br/>**Defaults to**: GET                                                                                                                                                                                                                |
| **callback**         | [callback](../../../api/interfaces/IdpSettings#callback) | a callback function to parse the `AJAX POST` response.<br/><br/>The fonction returns optionally a token and/or a securityContext<br/>if callback is null, **Oneki.js** assumes that the session is done via a cookie and the security context is retrieved via the **userinfoEndpoint** defined above)<br/><br/>**Defaults to**: null |

:::tip
Oneki.js provides out of the box two callback functions ready to be used. These functions can be referenced via their alias

| Alias | Description
| ----- | -----------
| **idp.<idpId\>.callback = 'token'** | Use this value if the response contains the token. This function: <ul><li>persists the token based on the value idp.<idpId\>.persist</li><li>validates the JWT token if idp.<idpId\>.validate = true</li><li>refreshes the token if the response contains a refresh_token</li></ul>
| **idp.<idpId\>.callback = 'securityContext'** | Use this value if the response contains a JSON that represents the user profile.<br/>Instead of calling the userinfoEndpoint to retrieve the profile, this function persists directly the response in the global state

:::




