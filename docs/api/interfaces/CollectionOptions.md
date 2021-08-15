---
id: "CollectionOptions"
title: "Interface: CollectionOptions<T, M>"
sidebar_label: "CollectionOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md) |

## Hierarchy

- **`CollectionOptions`**

  ↳ [`UseCollectionOptions`](UseCollectionOptions.md)

## Properties

### adapter

• `Optional` **adapter**: [`CollectionItemAdapter`](../types/CollectionItemAdapter.md)<`T`, `M`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:80

___

### autoload

• `Optional` **autoload**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:81

___

### comparator

• `Optional` **comparator**: [`QuerySortComparator`](../types/QuerySortComparator.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:82

___

### comparators

• `Optional` **comparators**: [`AnonymousObject`](AnonymousObject.md)<[`QuerySortComparator`](../types/QuerySortComparator.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:83

___

### dataKey

• `Optional` **dataKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:84

___

### fetchOnce

• `Optional` **fetchOnce**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:86

___

### fetcher

• `Optional` **fetcher**: [`CollectionFetcher`](../types/CollectionFetcher.md)<`T`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:85

___

### hasMoreKey

• `Optional` **hasMoreKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:87

___

### initialFields

• `Optional` **initialFields**: `string`[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:88

___

### initialFilter

• `Optional` **initialFilter**: [`QueryFilter`](QueryFilter.md) \| [`QueryFilterCriteria`](QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:89

___

### initialLimit

• `Optional` **initialLimit**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:90

___

### initialOffset

• `Optional` **initialOffset**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:91

___

### initialParams

• `Optional` **initialParams**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:92

___

### initialSearch

• `Optional` **initialSearch**: [`Primitive`](../types/Primitive.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:93

___

### initialSort

• `Optional` **initialSort**: [`QuerySortDir`](../types/QuerySortDir.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:94

___

### initialSortBy

• `Optional` **initialSortBy**: `string` \| [`QuerySortBy`](../types/QuerySortBy.md) \| [`QuerySortBy`](../types/QuerySortBy.md)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:95

___

### method

• `Optional` **method**: [`HttpMethod`](../enums/HttpMethod.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:96

___

### mutateUrl

• `Optional` **mutateUrl**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:97

___

### queryEngine

• `Optional` **queryEngine**: [`QueryEngine`](../types/QueryEngine.md)<`T`, `M`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:98

___

### searcher

• `Optional` **searcher**: [`QuerySearcher`](../types/QuerySearcher.md)<`T`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:99

___

### serializer

• `Optional` **serializer**: [`QuerySerializer`](../types/QuerySerializer.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:100

___

### throttle

• `Optional` **throttle**: `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:101

___

### totalKey

• `Optional` **totalKey**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:102
