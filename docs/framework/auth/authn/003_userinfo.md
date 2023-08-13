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


The `userinfo endpoint` is used to retrieve the security context of the logged-in user. The security context often contains attributes like name, firstname, email, roles, ...

:::tip
This endpoint is the only configuration parameter that is common for all types of authentication
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