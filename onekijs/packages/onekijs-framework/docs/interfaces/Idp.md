---
id: "Idp"
title: "Interface: Idp"
sidebar_label: "Idp"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`IdpSettings`](IdpSettings.md)

  ↳ **`Idp`**

## Properties

### authorizeEndpoint

• `Optional` **authorizeEndpoint**: `string` \| (`params`: [`AnonymousObject`](AnonymousObject.md)<`any`\>, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string` \| `Promise`<`string`\>

#### Inherited from

[IdpSettings](IdpSettings.md).[authorizeEndpoint](IdpSettings.md#authorizeendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:58

___

### callback

• `Optional` **callback**: ``"token"`` \| ``"securityContext"`` \| (`response`: `any`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => [any?, AnonymousObject<any\>?]

#### Inherited from

[IdpSettings](IdpSettings.md).[callback](IdpSettings.md#callback)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:59

___

### clientAuth

• `Optional` **clientAuth**: [`IdpClientAuth`](../enums/IdpClientAuth.md)

#### Inherited from

[IdpSettings](IdpSettings.md).[clientAuth](IdpSettings.md#clientauth)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:60

___

### clientId

• `Optional` **clientId**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[clientId](IdpSettings.md#clientid)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:61

___

### clientSecret

• `Optional` **clientSecret**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[clientSecret](IdpSettings.md#clientsecret)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:62

___

### clockSkew

• `Optional` **clockSkew**: `number`

#### Inherited from

[IdpSettings](IdpSettings.md).[clockSkew](IdpSettings.md#clockskew)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:63

___

### codeChallengeMethod

• `Optional` **codeChallengeMethod**: [`S256`](../enums/IdpCodeChallengeMethod.md#s256)

#### Inherited from

[IdpSettings](IdpSettings.md).[codeChallengeMethod](IdpSettings.md#codechallengemethod)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:64

___

### cookieCrypt

• `Optional` **cookieCrypt**: `boolean`

#### Inherited from

[IdpSettings](IdpSettings.md).[cookieCrypt](IdpSettings.md#cookiecrypt)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:65

___

### cookiePath

• `Optional` **cookiePath**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[cookiePath](IdpSettings.md#cookiepath)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:66

___

### cookieSecure

• `Optional` **cookieSecure**: `boolean`

#### Inherited from

[IdpSettings](IdpSettings.md).[cookieSecure](IdpSettings.md#cookiesecure)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:67

___

### cookieTTL

• `Optional` **cookieTTL**: `number`

#### Inherited from

[IdpSettings](IdpSettings.md).[cookieTTL](IdpSettings.md#cookiettl)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:68

___

### external

• **external**: `boolean`

#### Overrides

[IdpSettings](IdpSettings.md).[external](IdpSettings.md#external)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:102

___

### externalLoginEndpoint

• `Optional` **externalLoginEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[externalLoginEndpoint](IdpSettings.md#externalloginendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:70

___

### externalLogoutEndpoint

• `Optional` **externalLogoutEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[externalLogoutEndpoint](IdpSettings.md#externallogoutendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:71

___

### jwksEndpoint

• `Optional` **jwksEndpoint**: `string` \| (`token`: `any`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[jwksEndpoint](IdpSettings.md#jwksendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:72

___

### loginCallbackRoute

• `Optional` **loginCallbackRoute**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[loginCallbackRoute](IdpSettings.md#logincallbackroute)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:73

___

### loginContentType

• `Optional` **loginContentType**: [`IdpContentType`](../enums/IdpContentType.md)

#### Inherited from

[IdpSettings](IdpSettings.md).[loginContentType](IdpSettings.md#logincontenttype)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:74

___

### loginEndpoint

• `Optional` **loginEndpoint**: `string` \| (`data`: [`AnonymousObject`](AnonymousObject.md)<`any`\>, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `unknown`

#### Inherited from

[IdpSettings](IdpSettings.md).[loginEndpoint](IdpSettings.md#loginendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:75

___

### loginMethod

• `Optional` **loginMethod**: [`IdpMethod`](../enums/IdpMethod.md)

#### Inherited from

[IdpSettings](IdpSettings.md).[loginMethod](IdpSettings.md#loginmethod)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:76

___

### logoutCallbackRoute

• `Optional` **logoutCallbackRoute**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[logoutCallbackRoute](IdpSettings.md#logoutcallbackroute)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:78

___

### logoutEndpoint

• `Optional` **logoutEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[logoutEndpoint](IdpSettings.md#logoutendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:79

___

### logoutMethod

• `Optional` **logoutMethod**: [`IdpMethod`](../enums/IdpMethod.md)

#### Inherited from

[IdpSettings](IdpSettings.md).[logoutMethod](IdpSettings.md#logoutmethod)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:77

___

### name

• **name**: `string`

#### Overrides

[IdpSettings](IdpSettings.md).[name](IdpSettings.md#name)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:103

___

### nonce

• `Optional` **nonce**: `boolean`

#### Inherited from

[IdpSettings](IdpSettings.md).[nonce](IdpSettings.md#nonce)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:81

___

### oauth2

• **oauth2**: `boolean`

#### Overrides

[IdpSettings](IdpSettings.md).[oauth2](IdpSettings.md#oauth2)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:104

___

### oidc

• **oidc**: `boolean`

#### Overrides

[IdpSettings](IdpSettings.md).[oidc](IdpSettings.md#oidc)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:105

___

### passwordKey

• `Optional` **passwordKey**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[passwordKey](IdpSettings.md#passwordkey)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:84

___

### persist

• `Optional` **persist**: ``"localStorage"`` \| ``"sessionStorage"`` \| ``"cookie"`` \| ``"memory"``

#### Inherited from

[IdpSettings](IdpSettings.md).[persist](IdpSettings.md#persist)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:87

___

### pkce

• `Optional` **pkce**: `boolean`

#### Inherited from

[IdpSettings](IdpSettings.md).[pkce](IdpSettings.md#pkce)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:88

___

### postLoginRedirectKey

• `Optional` **postLoginRedirectKey**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[postLoginRedirectKey](IdpSettings.md#postloginredirectkey)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:89

___

### postLogoutRedirectKey

• `Optional` **postLogoutRedirectKey**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[postLogoutRedirectKey](IdpSettings.md#postlogoutredirectkey)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:90

___

### pubKeyAlgorithm

• `Optional` **pubKeyAlgorithm**: [`RS256`](../enums/IdpPubKeyAlgorithm.md#rs256)

#### Inherited from

[IdpSettings](IdpSettings.md).[pubKeyAlgorithm](IdpSettings.md#pubkeyalgorithm)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:91

___

### rememberMeKey

• `Optional` **rememberMeKey**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[rememberMeKey](IdpSettings.md#remembermekey)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:85

___

### responseType

• `Optional` **responseType**: [`Code`](../enums/IdpResponseType.md#code)

#### Inherited from

[IdpSettings](IdpSettings.md).[responseType](IdpSettings.md#responsetype)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:92

___

### scope

• `Optional` **scope**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[scope](IdpSettings.md#scope)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:93

___

### state

• `Optional` **state**: `boolean`

#### Inherited from

[IdpSettings](IdpSettings.md).[state](IdpSettings.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:94

___

### tokenEndpoint

• `Optional` **tokenEndpoint**: `string` \| (`grant_type`: `string`, `idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Overrides

[IdpSettings](IdpSettings.md).[tokenEndpoint](IdpSettings.md#tokenendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:107

___

### type

• **type**: [`IdpType`](../enums/IdpType.md)

#### Overrides

[IdpSettings](IdpSettings.md).[type](IdpSettings.md#type)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:106

___

### userinfoEndpoint

• `Optional` **userinfoEndpoint**: `string` \| (`idp`: [`Idp`](Idp.md), `context`: [`AppContext`](AppContext.md)) => `string`

#### Overrides

[IdpSettings](IdpSettings.md).[userinfoEndpoint](IdpSettings.md#userinfoendpoint)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:108

___

### usernameKey

• `Optional` **usernameKey**: `string`

#### Inherited from

[IdpSettings](IdpSettings.md).[usernameKey](IdpSettings.md#usernamekey)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:86

___

### validate

• `Optional` **validate**: `boolean`

#### Overrides

[IdpSettings](IdpSettings.md).[validate](IdpSettings.md#validate)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/typings.ts:109
