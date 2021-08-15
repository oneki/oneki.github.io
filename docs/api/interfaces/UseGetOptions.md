---
id: "UseGetOptions"
title: "Interface: UseGetOptions<T>"
sidebar_label: "UseGetOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Omit`<[`AppFetchOptions`](AppFetchOptions.md)<`T`\>, ``"onSuccess"``\>

  ↳ **`UseGetOptions`**

## Properties

### auth

• `Optional` **auth**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Inherited from

Omit.auth

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:36

___

### body

• `Optional` **body**: ``null`` \| `BodyInit`

A BodyInit object or null to set request's body.

#### Inherited from

Omit.body

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1595

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

Omit.cache

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1599

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

Omit.credentials

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1603

___

### defaultValue

• `Optional` **defaultValue**: `T`

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:15

___

### delayLoading

• `Optional` **delayLoading**: `number`

#### Inherited from

Omit.delayLoading

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:35

___

### fetcher

• `Optional` **fetcher**: [`Fetcher`](../types/Fetcher.md)<`T`, `any`\>

#### Inherited from

Omit.fetcher

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:40

___

### headers

• `Optional` **headers**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

Omit.headers

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:37

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

Omit.integrity

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1611

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Inherited from

Omit.keepalive

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1615

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

Omit.mode

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1623

___

### onError

• `Optional` **onError**: [`AppErrorCallback`](../types/AppErrorCallback.md)<[`DefaultBasicError`](../classes/DefaultBasicError.md)\>

#### Inherited from

Omit.onError

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:5

___

### params

• `Optional` **params**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

Omit.params

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:38

___

### pollingMs

• `Optional` **pollingMs**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/fetch/typings.ts:16

___

### query

• `Optional` **query**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

Omit.query

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:39

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

Omit.redirect

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1627

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

Omit.referrer

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1631

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Inherited from

Omit.referrerPolicy

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1635

___

### signal

• `Optional` **signal**: ``null`` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Inherited from

Omit.signal

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1639

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

#### Inherited from

Omit.window

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1643
