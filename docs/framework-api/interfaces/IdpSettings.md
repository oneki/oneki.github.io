---
id: IdpSettings
title: IdpSettings
sidebar_label: IdpSettings
---

import Details from "@theme/Details"


```tsx
__type(idp: Idp,context: AppContext): string
```
<br/>



### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| authorizeEndpoint | string \|  |  |
| callback | token \| securityContext \|  |  |
| clientAuth | [IdpClientAuth](/framework-api/enum/IdpClientAuth.md) |  |
| clientId | string |  |
| clientSecret | string |  |
| clockSkew | number |  |
| codeChallengeMethod | S256 |  |
| cookieCrypt | boolean |  |
| cookiePath | string |  |
| cookieSecure | boolean |  |
| cookieTTL | number |  |
| external | boolean |  |
| externalLoginEndpoint | string \|  |  |
| externalLogoutEndpoint | string \|  |  |
| identity | string |  |
| jwksEndpoint | string \|  |  |
| loginCallbackRoute | string |  |
| loginContentType | [IdpContentType](/framework-api/enum/IdpContentType.md) |  |
| loginEndpoint | string \|  |  |
| loginMethod | [IdpMethod](/framework-api/enum/IdpMethod.md) |  |
| logoutCallbackRoute | string |  |
| logoutEndpoint | string \|  |  |
| logoutMethod | [IdpMethod](/framework-api/enum/IdpMethod.md) |  |
| logoutRoute | string |  |
| name | string |  |
| nonce | boolean |  |
| oauth2 | boolean |  |
| oidc | boolean |  |
| passwordKey | string |  |
| persist | localStorage \| sessionStorage \| memory \| cookie |  |
| pkce | boolean |  |
| postLoginRedirectKey | string |  |
| postLogoutRedirectKey | string |  |
| pubKeyAlgorithm | RS256 |  |
| rememberMeKey | string |  |
| responseType | Code |  |
| scope | string |  |
| state | boolean |  |
| tokenEndpoint | string \|  |  |
| type | form \| external \| oidc_browser \| oidc_server \| oauth2_browser \| oauth2_server |  |
| userinfoEndpoint | string \|  |  |
| usernameKey | string |  |
| validate | boolean |  |


</div></Details>