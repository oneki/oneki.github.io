---
id: "UseCollectionOptions"
title: "Interface: UseCollectionOptions<T, M>"
sidebar_label: "UseCollectionOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md) |

## Hierarchy

- [`CollectionOptions`](CollectionOptions.md)<`T`, `M`\>

- [`CollectionFetchOptions`](../types/CollectionFetchOptions.md)<[`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\>, [`Query`](Query.md) \| `undefined`\>

  ↳ **`UseCollectionOptions`**

## Properties

### adapter

• `Optional` **adapter**: [`CollectionItemAdapter`](../types/CollectionItemAdapter.md)<`T`, `M`\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[adapter](CollectionOptions.md#adapter)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:80

___

### auth

• `Optional` **auth**: `boolean` \| [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Inherited from

CollectionFetchOptions.auth

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:74

___

### autoload

• `Optional` **autoload**: `boolean`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[autoload](CollectionOptions.md#autoload)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:81

___

### body

• `Optional` **body**: ``null`` \| `BodyInit`

A BodyInit object or null to set request's body.

#### Inherited from

CollectionFetchOptions.body

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1595

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

CollectionFetchOptions.cache

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1599

___

### comparator

• `Optional` **comparator**: [`QuerySortComparator`](../types/QuerySortComparator.md)

#### Inherited from

[CollectionOptions](CollectionOptions.md).[comparator](CollectionOptions.md#comparator)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:82

___

### comparators

• `Optional` **comparators**: [`AnonymousObject`](AnonymousObject.md)<[`QuerySortComparator`](../types/QuerySortComparator.md)\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[comparators](CollectionOptions.md#comparators)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:83

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

CollectionFetchOptions.credentials

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1603

___

### dataKey

• `Optional` **dataKey**: `string`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[dataKey](CollectionOptions.md#datakey)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:84

___

### delayLoading

• `Optional` **delayLoading**: `number`

#### Inherited from

CollectionFetchOptions.delayLoading

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:35

___

### fetchOnce

• `Optional` **fetchOnce**: `boolean`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[fetchOnce](CollectionOptions.md#fetchonce)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:86

___

### fetcher

• `Optional` **fetcher**: [`CollectionFetcher`](../types/CollectionFetcher.md)<`T`\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[fetcher](CollectionOptions.md#fetcher)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:85

___

### hasMoreKey

• `Optional` **hasMoreKey**: `string`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[hasMoreKey](CollectionOptions.md#hasmorekey)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:87

___

### headers

• `Optional` **headers**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

CollectionFetchOptions.headers

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:37

___

### initialFields

• `Optional` **initialFields**: `string`[]

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialFields](CollectionOptions.md#initialfields)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:88

___

### initialFilter

• `Optional` **initialFilter**: [`QueryFilter`](QueryFilter.md) \| [`QueryFilterCriteria`](QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)[]

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialFilter](CollectionOptions.md#initialfilter)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:89

___

### initialLimit

• `Optional` **initialLimit**: `number`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialLimit](CollectionOptions.md#initiallimit)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:90

___

### initialOffset

• `Optional` **initialOffset**: `number`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialOffset](CollectionOptions.md#initialoffset)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:91

___

### initialParams

• `Optional` **initialParams**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialParams](CollectionOptions.md#initialparams)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:92

___

### initialSearch

• `Optional` **initialSearch**: [`Primitive`](../types/Primitive.md)

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialSearch](CollectionOptions.md#initialsearch)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:93

___

### initialSort

• `Optional` **initialSort**: [`QuerySortDir`](../types/QuerySortDir.md)

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialSort](CollectionOptions.md#initialsort)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:94

___

### initialSortBy

• `Optional` **initialSortBy**: `string` \| [`QuerySortBy`](../types/QuerySortBy.md) \| [`QuerySortBy`](../types/QuerySortBy.md)[]

#### Inherited from

[CollectionOptions](CollectionOptions.md).[initialSortBy](CollectionOptions.md#initialsortby)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:95

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

CollectionFetchOptions.integrity

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1611

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Inherited from

CollectionFetchOptions.keepalive

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1615

___

### method

• `Optional` **method**: [`HttpMethod`](../enums/HttpMethod.md)

#### Inherited from

[CollectionOptions](CollectionOptions.md).[method](CollectionOptions.md#method)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:96

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

CollectionFetchOptions.mode

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1623

___

### mutateUrl

• `Optional` **mutateUrl**: `boolean`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[mutateUrl](CollectionOptions.md#mutateurl)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:97

___

### onError

• `Optional` **onError**: [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](BasicError.md)\>

#### Inherited from

CollectionFetchOptions.onError

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:33

___

### onSuccess

• `Optional` **onSuccess**: [`SuccessCallback`](../types/SuccessCallback.md)<[`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\>\>

#### Inherited from

CollectionFetchOptions.onSuccess

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:34

___

### params

• `Optional` **params**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

CollectionFetchOptions.params

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:38

___

### query

• `Optional` **query**: [`AnonymousObject`](AnonymousObject.md)<`string`\>

#### Inherited from

CollectionFetchOptions.query

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:39

___

### queryEngine

• `Optional` **queryEngine**: [`QueryEngine`](../types/QueryEngine.md)<`T`, `M`\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[queryEngine](CollectionOptions.md#queryengine)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:98

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

CollectionFetchOptions.redirect

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1627

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

CollectionFetchOptions.referrer

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1631

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Inherited from

CollectionFetchOptions.referrerPolicy

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1635

___

### searcher

• `Optional` **searcher**: [`QuerySearcher`](../types/QuerySearcher.md)<`T`\>

#### Inherited from

[CollectionOptions](CollectionOptions.md).[searcher](CollectionOptions.md#searcher)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:99

___

### serializer

• `Optional` **serializer**: [`QuerySerializer`](../types/QuerySerializer.md)

#### Inherited from

[CollectionOptions](CollectionOptions.md).[serializer](CollectionOptions.md#serializer)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:100

___

### signal

• `Optional` **signal**: ``null`` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Inherited from

CollectionFetchOptions.signal

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1639

___

### throttle

• `Optional` **throttle**: `number`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[throttle](CollectionOptions.md#throttle)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:101

___

### totalKey

• `Optional` **totalKey**: `string`

#### Inherited from

[CollectionOptions](CollectionOptions.md).[totalKey](CollectionOptions.md#totalkey)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:102

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

#### Inherited from

CollectionFetchOptions.window

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.dom.d.ts:1643
