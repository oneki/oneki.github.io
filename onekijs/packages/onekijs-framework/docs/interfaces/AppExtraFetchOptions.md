---
id: "AppExtraFetchOptions"
title: "Interface: AppExtraFetchOptions<T>"
sidebar_label: "AppExtraFetchOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`AppFetchOptions`](AppFetchOptions.md)<`T`\>

  ↳ **`AppExtraFetchOptions`**

## Properties

### auth

• `Optional` **auth**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[auth](AppFetchOptions.md#auth)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:36

___

### body

• `Optional` **body**: ``null`` \| `BodyInit`

A BodyInit object or null to set request's body.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[body](AppFetchOptions.md#body)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1595

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[cache](AppFetchOptions.md#cache)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1599

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[credentials](AppFetchOptions.md#credentials)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1603

___

### delayLoading

• `Optional` **delayLoading**: `number`

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[delayLoading](AppFetchOptions.md#delayloading)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:35

___

### fetcher

• `Optional` **fetcher**: [`Fetcher`](../types/Fetcher.md)<`T`, `any`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[fetcher](AppFetchOptions.md#fetcher)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:40

___

### headers

• `Optional` **headers**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[headers](AppFetchOptions.md#headers)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:37

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[integrity](AppFetchOptions.md#integrity)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1611

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[keepalive](AppFetchOptions.md#keepalive)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1615

___

### method

• `Optional` **method**: [`FetchMethod`](../types/FetchMethod.md)

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:11

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[mode](AppFetchOptions.md#mode)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1623

___

### onError

• `Optional` **onError**: [`AppErrorCallback`](../types/AppErrorCallback.md)<[`DefaultBasicError`](../classes/DefaultBasicError.md)\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[onError](AppFetchOptions.md#onerror)

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:5

___

### onSuccess

• `Optional` **onSuccess**: [`AppSuccessCallback`](../types/AppSuccessCallback.md)<`T`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[onSuccess](AppFetchOptions.md#onsuccess)

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:6

___

### params

• `Optional` **params**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[params](AppFetchOptions.md#params)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:38

___

### query

• `Optional` **query**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[query](AppFetchOptions.md#query)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:39

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[redirect](AppFetchOptions.md#redirect)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1627

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[referrer](AppFetchOptions.md#referrer)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1631

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[referrerPolicy](AppFetchOptions.md#referrerpolicy)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1635

___

### signal

• `Optional` **signal**: ``null`` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[signal](AppFetchOptions.md#signal)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1639

___

### url

• `Optional` **url**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:10

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

#### Inherited from

[AppFetchOptions](AppFetchOptions.md).[window](AppFetchOptions.md#window)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1643
