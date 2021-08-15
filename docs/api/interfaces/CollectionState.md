---
id: "CollectionState"
title: "Interface: CollectionState<T, M>"
sidebar_label: "CollectionState"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md) |

## Hierarchy

- [`FetchState`](FetchState.md)

  ↳ **`CollectionState`**

## Properties

### adapter

• `Optional` **adapter**: [`CollectionItemAdapter`](../types/CollectionItemAdapter.md)<`T`, `M`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:106

___

### autoload

• `Optional` **autoload**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:107

___

### comparator

• `Optional` **comparator**: [`QuerySortComparator`](../types/QuerySortComparator.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:108

___

### comparators

• `Optional` **comparators**: [`AnonymousObject`](AnonymousObject.md)<[`QuerySortComparator`](../types/QuerySortComparator.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:109

___

### dataKey

• **dataKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:110

___

### db

• `Optional` **db**: [`Item`](Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:111

___

### error

• `Optional` **error**: [`BasicError`](BasicError.md)

#### Inherited from

[FetchState](FetchState.md).[error](FetchState.md#error)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:11

___

### fetchOnce

• `Optional` **fetchOnce**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:112

___

### fetchOptions

• `Optional` **fetchOptions**: [`FetchOptions`](FetchOptions.md)<[`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\>, `undefined` \| [`Query`](Query.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:113

___

### fetching

• `Optional` **fetching**: `boolean`

#### Inherited from

[FetchState](FetchState.md).[fetching](FetchState.md#fetching)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:9

___

### fields

• `Optional` **fields**: `string`[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:114

___

### filter

• `Optional` **filter**: [`QueryFilter`](QueryFilter.md) \| [`QueryFilterCriteria`](QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:115

___

### hasMore

• `Optional` **hasMore**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:116

___

### hasMoreKey

• **hasMoreKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:117

___

### items

• `Optional` **items**: (`undefined` \| [`Item`](Item.md)<`T`, `M`\>)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:118

___

### limit

• `Optional` **limit**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:121

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

[FetchState](FetchState.md).[loading](FetchState.md#loading)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:8

___

### local

• **local**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:120

___

### method

• `Optional` **method**: [`HttpMethod`](../enums/HttpMethod.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:119

___

### offset

• `Optional` **offset**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:122

___

### params

• `Optional` **params**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:123

___

### queryEngine

• `Optional` **queryEngine**: [`QueryEngine`](../types/QueryEngine.md)<`T`, `M`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:124

___

### result

• `Optional` **result**: `any`

#### Inherited from

[FetchState](FetchState.md).[result](FetchState.md#result)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:10

___

### router

• **router**: [`Router`](Router.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:125

___

### search

• `Optional` **search**: [`Primitive`](../types/Primitive.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:126

___

### searcher

• `Optional` **searcher**: [`QuerySearcher`](../types/QuerySearcher.md)<`T`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:127

___

### serializer

• `Optional` **serializer**: [`QuerySerializer`](../types/QuerySerializer.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:128

___

### sort

• `Optional` **sort**: [`QuerySortDir`](../types/QuerySortDir.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:129

___

### sortBy

• `Optional` **sortBy**: `string` \| [`QuerySortBy`](../types/QuerySortBy.md) \| [`QuerySortBy`](../types/QuerySortBy.md)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:130

___

### status

• `Optional` **status**: [`CollectionStatus`](../types/CollectionStatus.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:131

___

### task

• `Optional` **task**: `Task`

#### Inherited from

[FetchState](FetchState.md).[task](FetchState.md#task)

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:12

___

### throttle

• `Optional` **throttle**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:132

___

### total

• `Optional` **total**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:133

___

### totalKey

• **totalKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:134

___

### url

• `Optional` **url**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:135
