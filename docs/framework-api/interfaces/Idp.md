---
id: Idp
title: Idp
sidebar_label: Idp
---

```tsx
__type(idp: Idp,context: AppContext): string
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **external** | boolean |  |
| **name** | string |  |
| **oauth2** | boolean |  |
| **oidc** | boolean |  |
| **type** | [IdpType](/framework-api/enum/IdpType.md) |  |
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
| nonce | boolean |  |
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
| userinfoEndpoint | string \|  |  |
| usernameKey | string |  |
| validate | boolean |  |
