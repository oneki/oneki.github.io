---
id: "CollectionService"
title: "Class: CollectionService<T, M, S>"
sidebar_label: "CollectionService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md)[`ItemMeta`](../types/ItemMeta.md) |
| `S` | extends [`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\>[`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\> |

## Hierarchy

- [`DefaultService`](DefaultService.md)<`S`\>

  ↳ **`CollectionService`**

## Implements

- [`Collection`](../types/Collection.md)<`T`, `M`\>

## Constructors

### constructor

• **new CollectionService**<`T`, `M`, `S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md)[`ItemMeta`](../types/ItemMeta.md) |
| `S` | extends [`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`, `S`\>[`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\> |

#### Inherited from

[DefaultService](DefaultService.md).[constructor](DefaultService.md#constructor)

## Properties

### [combinedReducers]

• **[combinedReducers]**: (`state`: `any`, `action`: `any`) => `any`

#### Type declaration

▸ (`state`, `action`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `action` | `any` |

##### Returns

`any`

#### Inherited from

[DefaultService](DefaultService.md).[[combinedReducers]](DefaultService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[dispatch]](DefaultService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[DefaultService](DefaultService.md).[[inReducer]](DefaultService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[reducers]](DefaultService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[sagas]](DefaultService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[types]](DefaultService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### cache

• `Protected` **cache**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> = `{}`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:71

___

### initialState

• `Protected` **initialState**: `S`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:68

___

### itemMeta

• `Protected` **itemMeta**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`undefined` \| `M`\> = `{}`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:72

___

### state

• **state**: `S`

#### Inherited from

[DefaultService](DefaultService.md).[state](DefaultService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

## Accessors

### data

• `get` **data**(): `undefined` \| (`undefined` \| `T`)[]

#### Returns

`undefined` \| (`undefined` \| `T`)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:217

___

### hasMore

• `get` **hasMore**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:225

___

### items

• `get` **items**(): `undefined` \| (`undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\>)[]

#### Returns

`undefined` \| (`undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\>)[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:229

___

### status

• `get` **status**(): [`CollectionStatus`](../types/CollectionStatus.md)

#### Returns

[`CollectionStatus`](../types/CollectionStatus.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:233

___

### total

• `get` **total**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:238

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:242

## Methods

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[create]](DefaultService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[run]](DefaultService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[stop]](DefaultService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226

___

### \_adapt

▸ `Protected` **_adapt**(`data`): [`Item`](../interfaces/Item.md)<`T`, `M`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| `T` |

#### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:513

___

### \_addFilter

▸ `Protected` **_addFilter**(`query`, `filterOrCriteria`, `parentFilterId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `filterOrCriteria` | [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md) |
| `parentFilterId` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:517

___

### \_addSortBy

▸ `Protected` **_addSortBy**(`query`, `sortBy`, `prepend?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) | `undefined` |
| `sortBy` | [`QuerySortBy`](../types/QuerySortBy.md) | `undefined` |
| `prepend` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:541

___

### \_applyCriteria

▸ `Protected` **_applyCriteria**(`item`, `criteria`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](../interfaces/Item.md)<`T`, `M`\> |
| `criteria` | [`QueryFilterCriteria`](../interfaces/QueryFilterCriteria.md) |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:552

___

### \_applyFields

▸ `Protected` **_applyFields**(`items`, `fields?`): [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)<`T`, `M`\>[] |
| `fields?` | `string`[] |

#### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:561

___

### \_applyFilter

▸ `Protected` **_applyFilter**(`item`, `filter?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](../interfaces/Item.md)<`T`, `M`\> |
| `filter?` | [`QueryFilter`](../interfaces/QueryFilter.md) |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:578

___

### \_applyOperator

▸ `Protected` **_applyOperator**(`operator`, `left`, `right?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`QueryFilterCriteriaOperator`](../types/QueryFilterCriteriaOperator.md) |
| `left` | `any` |
| `right?` | [`QueryFilterCriteriaValue`](../types/QueryFilterCriteriaValue.md) \| [`QueryFilterCriteriaValue`](../types/QueryFilterCriteriaValue.md)[] |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:597

___

### \_applySearch

▸ `Protected` **_applySearch**(`item`, `search?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](../interfaces/Item.md)<`T`, `M`\> |
| `search?` | [`QueryFilterCriteriaValue`](../types/QueryFilterCriteriaValue.md) |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:629

___

### \_applySort

▸ `Protected` **_applySort**(`items`, `dir`, `comparator`): [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)<`T`, `M`\>[] |
| `dir` | [`QuerySortDir`](../types/QuerySortDir.md) |
| `comparator` | [`QuerySortComparator`](../types/QuerySortComparator.md) |

#### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:640

___

### \_applySortBy

▸ `Protected` **_applySortBy**(`items`, `sortBy`, `comparators`): [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)<`T`, `M`\>[] |
| `sortBy` | [`QuerySortBy`](../types/QuerySortBy.md)[] |
| `comparators` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`QuerySortComparator`](../types/QuerySortComparator.md)\> |

#### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:652

___

### \_clearFields

▸ `Protected` **_clearFields**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:700

___

### \_clearFilter

▸ `Protected` **_clearFilter**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:704

___

### \_clearLimit

▸ `Protected` **_clearLimit**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:727

___

### \_clearOffset

▸ `Protected` **_clearOffset**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:708

___

### \_clearParam

▸ `Protected` **_clearParam**(`query`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `key` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:712

___

### \_clearParams

▸ `Protected` **_clearParams**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:718

___

### \_clearSearch

▸ `Protected` **_clearSearch**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:722

___

### \_clearSort

▸ `Protected` **_clearSort**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:737

___

### \_clearSortBy

▸ `Protected` **_clearSortBy**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:732

___

### \_delayLoading

▸ `Protected` **_delayLoading**(`delay_ms`, `limit?`, `offset?`, `resetData?`): `Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay_ms` | `number` |
| `limit?` | `string` \| `number` |
| `offset?` | `string` \| `number` |
| `resetData?` | `boolean` |

#### Returns

`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:742

___

### \_execute

▸ `Protected` **_execute**(`items`, `query`, `comparator`, `comparators`): [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)<`T`, `M`\>[] |
| `query` | [`LocalQuery`](../types/LocalQuery.md) |
| `comparator` | [`QuerySortComparator`](../types/QuerySortComparator.md) |
| `comparators` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`QuerySortComparator`](../types/QuerySortComparator.md)\> |

#### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:759

___

### \_fetch

▸ `Protected` **_fetch**(`query`, `resetData`): `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `CancelEffect` \| `Promise`<[`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\>\>, `void`, `Task` & `T`[] & `Task` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `resetData` | `boolean` |

#### Returns

`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `CancelEffect` \| `Promise`<[`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\>\>, `void`, `Task` & `T`[] & `Task` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:792

___

### \_fetchError

▸ `Protected` **_fetchError**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:849

___

### \_fetchSuccess

▸ `Protected` **_fetchSuccess**(`result`, `resetData`, `query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`CollectionFetcherResult`](../types/CollectionFetcherResult.md)<`T`\> |
| `resetData` | `boolean` |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:855

___

### \_getId

▸ `Protected` **_getId**(`data`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`undefined` \| `string`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:949

___

### \_onLocationChange

▸ `Protected` **_onLocationChange**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`Location`](../interfaces/Location.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:954

___

### \_parseLocation

▸ `Protected` **_parseLocation**(`location`): [`Query`](../interfaces/Query.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`Location`](../interfaces/Location.md) |

#### Returns

[`Query`](../interfaces/Query.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:987

___

### \_removeFilter

▸ `Protected` **_removeFilter**(`query`, `filterId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `filterId` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:991

___

### \_removeSortBy

▸ `Protected` **_removeSortBy**(`query`, `sort`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `sort` | [`QuerySortBy`](../types/QuerySortBy.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1007

___

### \_removeSortById

▸ `Protected` **_removeSortById**(`query`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `id` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1014

___

### \_setFields

▸ `Protected` **_setFields**(`query`, `fields`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `fields` | `string`[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1021

___

### \_setFilter

▸ `Protected` **_setFilter**(`query`, `filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `filter` | [`QueryFilter`](../interfaces/QueryFilter.md) \| [`QueryFilterCriteria`](../interfaces/QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1025

___

### \_setItems

▸ `Protected` **_setItems**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | (`undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\>)[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1029

___

### \_setLimit

▸ `Protected` **_setLimit**(`query`, `limit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `limit` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1033

___

### \_setLimitOffset

▸ `Protected` **_setLimitOffset**(`query`, `limit?`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `limit?` | `number` |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1037

___

### \_setLoading

▸ `Protected` **_setLoading**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.limit?` | `number` |
| `options.offset?` | `number` |
| `options.resetData?` | `boolean` |
| `options.resetLimit?` | `boolean` |
| `options.status?` | [`LoadingItemStatus`](../types/LoadingItemStatus.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1043

___

### \_setOffset

▸ `Protected` **_setOffset**(`query`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1136

___

### \_setParams

▸ `Protected` **_setParams**(`query`, `params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `params` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1140

___

### \_setQuery

▸ `Protected` **_setQuery**(`query`, `force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) | `undefined` |
| `force` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1123

___

### \_setSearch

▸ `Protected` **_setSearch**(`query`, `search`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `search` | [`Primitive`](../types/Primitive.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1144

___

### \_setSort

▸ `Protected` **_setSort**(`query`, `dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `dir` | [`QuerySortDir`](../types/QuerySortDir.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1148

___

### \_setSortBy

▸ `Protected` **_setSortBy**(`query`, `sortBy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |
| `sortBy` | `string` \| [`QuerySortBy`](../types/QuerySortBy.md) \| [`QuerySortBy`](../types/QuerySortBy.md)[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:1152

___

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

Collection.addFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:97

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

Collection.addFilterCriteria

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:105

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

Collection.addSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:126

___

### asService

▸ **asService**(): [`CollectionService`](CollectionService.md)<`T`, `M`, [`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\>\>

#### Returns

[`CollectionService`](CollectionService.md)<`T`, `M`, [`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\>\>

#### Implementation of

Collection.asService

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:133

___

### clearFields

▸ **clearFields**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearFields

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:138

___

### clearFilter

▸ **clearFilter**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:146

___

### clearLimit

▸ **clearLimit**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:154

___

### clearOffset

▸ **clearOffset**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:162

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

Collection.clearParam

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:170

___

### clearParams

▸ **clearParams**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearParams

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:178

___

### clearSearch

▸ **clearSearch**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearSearch

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:186

___

### clearSort

▸ **clearSort**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearSort

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:194

___

### clearSortBy

▸ **clearSortBy**(): `void`

#### Returns

`void`

#### Implementation of

Collection.clearSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:202

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

Collection.filter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:210

___

### getAdapter

▸ **getAdapter**(): `undefined` \| [`CollectionItemAdapter`](../types/CollectionItemAdapter.md)<`T`, `M`\>

#### Returns

`undefined` \| [`CollectionItemAdapter`](../types/CollectionItemAdapter.md)<`T`, `M`\>

#### Implementation of

Collection.getAdapter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:249

___

### getFields

▸ **getFields**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

Collection.getFields

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:253

___

### getFilter

▸ **getFilter**(): `undefined` \| [`QueryFilter`](../interfaces/QueryFilter.md)

#### Returns

`undefined` \| [`QueryFilter`](../interfaces/QueryFilter.md)

#### Implementation of

Collection.getFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:257

___

### getFilterById

▸ **getFilterById**(`id`): `undefined` \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`undefined` \| [`QueryFilterOrCriteria`](../types/QueryFilterOrCriteria.md)

#### Implementation of

Collection.getFilterById

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:261

___

### getItem

▸ **getItem**(`id`): `undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\>

#### Implementation of

Collection.getItem

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:282

___

### getLimit

▸ **getLimit**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

Collection.getLimit

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:330

___

### getMeta

▸ **getMeta**(`id`): `undefined` \| `M`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`undefined` \| `M`

#### Implementation of

Collection.getMeta

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:289

___

### getOffset

▸ **getOffset**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

Collection.getOffset

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:301

___

### getParam

▸ **getParam**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Implementation of

Collection.getParam

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:305

___

### getParams

▸ **getParams**(): `undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Returns

`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Implementation of

Collection.getParams

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:309

___

### getQuery

▸ **getQuery**(): [`Query`](../interfaces/Query.md)

#### Returns

[`Query`](../interfaces/Query.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:313

___

### getSearch

▸ **getSearch**(): `undefined` \| [`Primitive`](../types/Primitive.md)

#### Returns

`undefined` \| [`Primitive`](../types/Primitive.md)

#### Implementation of

Collection.getSearch

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:326

___

### getSort

▸ **getSort**(): `undefined` \| [`QuerySortDir`](../types/QuerySortDir.md)

#### Returns

`undefined` \| [`QuerySortDir`](../types/QuerySortDir.md)

#### Implementation of

Collection.getSort

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:334

___

### getSortBy

▸ **getSortBy**(): `undefined` \| [`QuerySortBy`](../types/QuerySortBy.md)[]

#### Returns

`undefined` \| [`QuerySortBy`](../types/QuerySortBy.md)[]

#### Implementation of

Collection.getSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:338

___

### getSortByField

▸ **getSortByField**(`field`): `undefined` \| [`QuerySortByField`](../types/QuerySortByField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |

#### Returns

`undefined` \| [`QuerySortByField`](../types/QuerySortByField.md)

#### Implementation of

Collection.getSortByField

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:342

___

### getSortById

▸ **getSortById**(`id`): `undefined` \| [`QuerySortBy`](../types/QuerySortBy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`QuerySortBy`](../types/QuerySortBy.md)

#### Implementation of

Collection.getSortById

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:364

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:74

___

### load

▸ **load**(`limit?`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit?` | `number` |
| `offset?` | `number` |

#### Returns

`void`

#### Implementation of

Collection.load

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:373

___

### query

▸ **query**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Implementation of

Collection.query

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:380

___

### refresh

▸ **refresh**(`query?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`Query`](../interfaces/Query.md) |

#### Returns

`void`

#### Implementation of

Collection.refresh

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:393

___

### removeFilter

▸ **removeFilter**(`filterId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterId` | [`QueryFilterId`](../types/QueryFilterId.md) |

#### Returns

`void`

#### Implementation of

Collection.removeFilter

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:399

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

Collection.removeSortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:407

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Collection.reset

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:415

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

Collection.search

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:422

___

### serializeQuery

▸ **serializeQuery**(`query`): [`QuerySerializerResult`](../types/QuerySerializerResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../interfaces/Query.md) |

#### Returns

[`QuerySerializerResult`](../types/QuerySerializerResult.md)

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:429

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

Collection.setData

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:435

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

Collection.setFields

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:447

___

### setMeta

▸ **setMeta**(`item`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](../interfaces/Item.md)<`T`, `M`\> |
| `key` | keyof `M` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

Collection.setMeta

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:456

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

Collection.setParam

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:477

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

Collection.setParams

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:485

___

### setStatus

▸ **setStatus**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`LoadingStatus`](../enums/LoadingStatus.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:493

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

Collection.sort

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:498

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

Collection.sortBy

#### Defined in

onekijs/packages/onekijs-framework/src/collection/CollectionService.ts:506
