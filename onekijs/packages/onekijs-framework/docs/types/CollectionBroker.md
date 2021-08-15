---
id: "CollectionBroker"
title: "Type alias: CollectionBroker<T, M>"
sidebar_label: "CollectionBroker"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **CollectionBroker**<`T`, `M`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](ItemMeta.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addFilter` | (`filterOrCriteria`: [`QueryFilterOrCriteria`](QueryFilterOrCriteria.md), `parentFilterId?`: [`QueryFilterId`](QueryFilterId.md)) => `void` |
| `addFilterCriteria` | (`field`: `string`, `operator`: [`QueryFilterCriteriaOperator`](QueryFilterCriteriaOperator.md), `value`: [`QueryFilterCriteriaValue`](QueryFilterCriteriaValue.md) \| [`QueryFilterCriteriaValue`](QueryFilterCriteriaValue.md)[], `not?`: `boolean`, `id?`: [`QueryFilterId`](QueryFilterId.md), `parentFilterId?`: [`QueryFilterId`](QueryFilterId.md)) => `void` |
| `addSortBy` | (`sortBy`: [`QuerySortBy`](QuerySortBy.md), `prepend?`: `boolean`) => `void` |
| `addSubscriber` | (`collection`: [`Collection`](Collection.md)<`T`, `M`\>) => `void` |
| `clearFields` | () => `void` |
| `clearFilter` | () => `void` |
| `clearParam` | (`key`: `string`) => `void` |
| `clearParams` | () => `void` |
| `clearSearch` | () => `void` |
| `clearSort` | () => `void` |
| `clearSortBy` | () => `void` |
| `filter` | (`filter`: ``null`` \| [`QueryFilter`](../interfaces/QueryFilter.md) \| [`QueryFilterCriteria`](../interfaces/QueryFilterCriteria.md) \| [`QueryFilterOrCriteria`](QueryFilterOrCriteria.md)[]) => `void` |
| `removeFilter` | (`filterId`: [`QueryFilterId`](QueryFilterId.md)) => `void` |
| `removeSortBy` | (`id`: `string`) => `void` |
| `removeSubscriber` | (`collection`: [`Collection`](Collection.md)<`T`, `M`\>) => `void` |
| `search` | (`search`: [`Primitive`](Primitive.md)) => `void` |
| `setData` | (`data`: `T`[]) => `void` |
| `setFields` | (`fields`: `string`[]) => `void` |
| `setParam` | (`key`: `string`, `value`: `any`) => `void` |
| `setParams` | (`params`: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>) => `void` |
| `sort` | (`dir`: [`QuerySortDir`](QuerySortDir.md)) => `void` |
| `sortBy` | (`sortBy`: `string` \| [`QuerySortBy`](QuerySortBy.md) \| [`QuerySortBy`](QuerySortBy.md)[]) => `void` |

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:37
