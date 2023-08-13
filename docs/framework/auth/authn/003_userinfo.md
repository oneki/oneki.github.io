---
id: userinfo
title: "Userinfo endpoint"
sidebar_label: User info
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';
import { ExampleDetails } from '@site/src/components/Detail';
import { ExampleSnippet, ExampleMultipleSnippet } from '@site/src/components/GithubSnippet';
import Details from "@theme/Details"


The `userinfo endpoint` is used to retrieve the security context of the logged-in user.

:::info
**Oneki.js** doesn't expect a specific format for the security context. You can put in what you want. The content of the security context is usually made of profile attributes like email, name, firstname, roles, ... 
:::

<Details summary={<summary>Example of a security context</summary>}>

```javascript
{
  sub: "de1ff3d2-0710-4f7a-9dd1-4aadb7d94b57",
  email: "john.doe@example.com",
  given_name: "John",
  family_name: "Doe",
  picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  roles: ['admin', 'user']
}
```

</Details>

:::tip
The `userinfo endpoint` is the only configuration parameter that is common for all types of authentication

Excerpt from `settings.ts`

```ts
{
  ...
  idp: {
    default: {
      type: "form",
      userinfoEndpoint: 'https://backend.com/api/whoami',
    }
  }
}

```
:::


The value of `userinfo endpoint` parameter can have three formats:

| Format | Description | Example
| --- | ----------- | -------
| String (URL) | a URL String. <br/>If the URL is relative (e.g: ***/api/userinfo***), it's prefixed with the ***server.baseUrl*** from `src/settings.ts`<br/><br/>**Oneki.js** preforms an AJAX GET request on this URL to retrieve the profile of the connected user | /api/userinfo
| String (token...) | A string that starts with `token`.<br/><br/>**Oneki.js** retrieves the profile of the connected user from the (JWT) Token present in the global state.<br/>The global state is populated with the token during the authentication<br/><br/>Must be one of these values:<ul><li>**token://id_token**</li><li>**token://access_token**</li><li>**token**</li></ul>[see token](#token) | token://id_token
| Function | Instead of a String, a function with the format **(context) => URL** can be specified. **Oneki.js** executes it to retrieve the URL<br/><br/>This function can be **async** | (context) => https://oneki.org/api/userinfo

## Token
When the value starts with **token**, it means that the backend doesn't expose a userinfo endpoint, but the security context can be retrieved from a token existing in the global state (under the key **auth.token**) with the following format:

```json
{
  "id_token": "JWT_ID_TOKEN_IN_BASE64",
  "access_token": "JWT_ACCESS_TOKEN_IN_BASE64",
  ...
}
```
The token is stored in the global state via a **[callback function](#callback)**

## Token extraction

if the value is 
- **token://id_token**, then the token JWT_ID_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token://access_token**, then the token JWT_ACCESS_TOKEN_IN_BASE64 is parsed and the claims become the security context.
- **token**, then the whole response becomes the security context (there is no parsing)

###### Example
```javascript
userinfoEndpoint: '/api/whoami'
// or
userInfoEndpoint: (context) => '/api/whoami'
// or
userInfoEndpoint: 'token://id_token' //will not call the backend, but expects that the token is in the global state
```

## Example

<Details summary={<summary>Settings</summary>}>

  <ExampleMultipleSnippet 
    values={[
      { label: 'Settings', path: 'settings.ts' },
    ]}
    preview={{
      path: 'auth'
    }}
  />
</Details>