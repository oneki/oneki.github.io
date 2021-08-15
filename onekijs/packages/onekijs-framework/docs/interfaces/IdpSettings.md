---
id: "IdpSettings"
title: "Interface: IdpSettings"
sidebar_label: "IdpSettings"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`AnonymousObject`](AnonymousObject.md)

  ↳ **`IdpSettings`**

  ↳↳ [`Idp`](Idp.md)

## Properties

### authorizeEndpoint

• `Optional` **authorizeEndpoint**: `string` \| (`params`: [`AnonymousObject`](AnonymousObject.md)<`any`\>, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string` \| `Promise`<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:58

___

### callback

• `Optional` **callback**: ``"token"`` \| ``"securityContext"`` \| (`response`: `any`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => [any?, AnonymousObject<any\>?]

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:59

___

### clientAuth

• `Optional` **clientAuth**: [`IdpClientAuth`](../enums/IdpClientAuth.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:60

___

### clientId

• `Optional` **clientId**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:61

___

### clientSecret

• `Optional` **clientSecret**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:62

___

### clockSkew

• `Optional` **clockSkew**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:63

___

### codeChallengeMethod

• `Optional` **codeChallengeMethod**: [`S256`](../enums/IdpCodeChallengeMethod.md#s256)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:64

___

### cookieCrypt

• `Optional` **cookieCrypt**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:65

___

### cookiePath

• `Optional` **cookiePath**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:66

___

### cookieSecure

• `Optional` **cookieSecure**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:67

___

### cookieTTL

• `Optional` **cookieTTL**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:68

___

### external

• `Optional` **external**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:69

___

### externalLoginEndpoint

• `Optional` **externalLoginEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:70

___

### externalLogoutEndpoint

• `Optional` **externalLogoutEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:71

___

### jwksEndpoint

• `Optional` **jwksEndpoint**: `string` \| (`token`: `any`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:72

___

### loginCallbackRoute

• `Optional` **loginCallbackRoute**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:73

___

### loginContentType

• `Optional` **loginContentType**: [`IdpContentType`](../enums/IdpContentType.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:74

___

### loginEndpoint

• `Optional` **loginEndpoint**: `string` \| (`data`: [`AnonymousObject`](AnonymousObject.md)<`any`\>, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `unknown`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:75

___

### loginMethod

• `Optional` **loginMethod**: [`IdpMethod`](../enums/IdpMethod.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:76

___

### logoutCallbackRoute

• `Optional` **logoutCallbackRoute**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:78

___

### logoutEndpoint

• `Optional` **logoutEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:79

___

### logoutMethod

• `Optional` **logoutMethod**: [`IdpMethod`](../enums/IdpMethod.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:77

___

### name

• `Optional` **name**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:80

___

### nonce

• `Optional` **nonce**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:81

___

### oauth2

• `Optional` **oauth2**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:82

___

### oidc

• `Optional` **oidc**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:83

___

### passwordKey

• `Optional` **passwordKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:84

___

### persist

• `Optional` **persist**: ``"localStorage"`` \| ``"sessionStorage"`` \| ``"cookie"`` \| ``"memory"``

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:87

___

### pkce

• `Optional` **pkce**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:88

___

### postLoginRedirectKey

• `Optional` **postLoginRedirectKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:89

___

### postLogoutRedirectKey

• `Optional` **postLogoutRedirectKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:90

___

### pubKeyAlgorithm

• `Optional` **pubKeyAlgorithm**: [`RS256`](../enums/IdpPubKeyAlgorithm.md#rs256)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:91

___

### rememberMeKey

• `Optional` **rememberMeKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:85

___

### responseType

• `Optional` **responseType**: [`Code`](../enums/IdpResponseType.md#code)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:92

___

### scope

• `Optional` **scope**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:93

___

### state

• `Optional` **state**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:94

___

### tokenEndpoint

• `Optional` **tokenEndpoint**: `string` \| (`grant_type`: `string`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:96

___

### type

• `Optional` **type**: ``"form"`` \| ``"oidc_browser"`` \| ``"oidc_server"`` \| ``"external"`` \| ``"oauth2_browser"`` \| ``"oauth2_server"``

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:95

___

### userinfoEndpoint

• `Optional` **userinfoEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:97

___

### usernameKey

• `Optional` **usernameKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:86

___

### validate

• `Optional` **validate**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:98
