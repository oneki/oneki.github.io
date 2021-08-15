---
id: "DefaultCollectionBroker"
title: "Class: DefaultCollectionBroker<T, M>"
sidebar_label: "DefaultCollectionBroker"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md)[`ItemMeta`](../types/ItemMeta.md) |

## Implements

- [`CollectionBroker`](../types/CollectionBroker.md)<`T`, `M`\>

## Constructors

### constructor

• **new DefaultCollectionBroker**<`T`, `M`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md)[`ItemMeta`](../types/ItemMeta.md) |

## Properties

### currentSearch

• `Protected` **currentSearch**: `undefined` \| [`Primitive`](../types/Primitive.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:28

___

### currentSort

• `Protected` **currentSort**: `undefined` \| [`QuerySortDir`](../types/QuerySortDir.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:29

___

### data

• `Protected` **data**: `undefined` \| `T`[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:30

___

### fields

• `Protected` **fields**: `string`[] = `[]`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:26

___

### filters

• `Protected` **filters**: { `filter`: [`QueryFilter`](../interfaces/QueryFilter.md) ; `id?`: [`QueryFilterId`](../types/QueryFilterId.md) ; `parentFilterId`: [`QueryFilterId`](../types/QueryFilterId.md)  }[] = `[]`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:20

___

### params

• `Protected` **params**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> = `{}`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:27

___

### sortBys

• `Protected` **sortBys**: { `id?`: `string` ; `sortBy`: [`QuerySortBy`](../types/QuerySortBy.md)  }[] = `[]`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:25

___

### subscribers

• `Protected` **subscribers**: [`Collection`](../types/Collection.md)<`T`, `M`\>[] = `[]`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:19

## Methods

### addFilter

▸ **addFilter**(`filterOrCriteria`, `parentFilterId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterOrCriteria` | [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md) |
| `parentFilterId` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`void`

#### Implementation of

CollectionBroker.addFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:32

___

### addFilterCriteria

▸ **addFilterCriteria**(`field`, `operator`, `value`, `not?`, `id?`, `parentFilterId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `operator` | [`QueryFilterCriteriaOperator`](../types/QueryFilterCriteriaOperator.md) |
| `value` | ``null`` \| `string` \| `number` \| `boolean` \| [`QueryFilterCriteriaValue`](../types/QueryFilterCriteriaValue.md)[] |
| `not?` | `boolean` |
| `id?` | `string` \| `number` \| `symbol` |
| `parentFilterId?` | `string` \| `number` \| `symbol` |

#### Returns

`void`

#### Implementation of

CollectionBroker.addFilterCriteria

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:44

___

### addSortBy

▸ **addSortBy**(`sortBy`, `prepend?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortBy` | [`QuerySortBy`](../types/QuerySortBy.md) |
| `prepend?` | `boolean` |

#### Returns

`void`

#### Implementation of

CollectionBroker.addSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:64

___

### addSubscriber

▸ **addSubscriber**(`subscriber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | [`Collection`](../types/Collection.md)<`T`, `M`\> |

#### Returns

`void`

#### Implementation of

CollectionBroker.addSubscriber

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:80

___

### clearFields

▸ **clearFields**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearFields

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:88

___

### clearFilter

▸ **clearFilter**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:93

___

### clearParam

▸ **clearParam**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Implementation of

CollectionBroker.clearParam

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:98

___

### clearParams

▸ **clearParams**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearParams

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:103

___

### clearSearch

▸ **clearSearch**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearSearch

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:108

___

### clearSort

▸ **clearSort**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearSort

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:113

___

### clearSortBy

▸ **clearSortBy**(): `void`

#### Returns

`void`

#### Implementation of

CollectionBroker.clearSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:118

___

### filter

▸ **filter**(`filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`QueryFilter`](../interfaces/QueryFilter.md) \| [`QueryFilterCriteria`](../interfaces/QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)[] |

#### Returns

`void`

#### Implementation of

CollectionBroker.filter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:123

___

### removeFilter

▸ **removeFilter**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`void`

#### Implementation of

CollectionBroker.removeFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:140

___

### removeSortBy

▸ **removeSortBy**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

CollectionBroker.removeSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:145

___

### removeSubscriber

▸ **removeSubscriber**(`subscriber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | [`Collection`](../types/Collection.md)<`T`, `M`\> |

#### Returns

`void`

#### Implementation of

CollectionBroker.removeSubscriber

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:150

___

### search

▸ **search**(`search`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `search` | [`Primitive`](../types/Primitive.md) |

#### Returns

`void`

#### Implementation of

CollectionBroker.search

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:155

___

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |

#### Returns

`void`

#### Implementation of

CollectionBroker.setData

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:160

___

### setFields

▸ **setFields**(`fields`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |

#### Returns

`void`

#### Implementation of

CollectionBroker.setFields

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:165

___

### setParam

▸ **setParam**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

CollectionBroker.setParam

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:171

___

### setParams

▸ **setParams**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Returns

`void`

#### Implementation of

CollectionBroker.setParams

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:176

___

### sort

▸ **sort**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`QuerySortDir`](../types/QuerySortDir.md) |

#### Returns

`void`

#### Implementation of

CollectionBroker.sort

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:181

___

### sortBy

▸ **sortBy**(`sortBy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortBy` | `string` \| [`QuerySortBy`](../types/QuerySortBy.md) \| [`QuerySortBy`](../types/QuerySortBy.md)[] |

#### Returns

`void`

#### Implementation of

CollectionBroker.sortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionBroker.ts:186
