---
id: "QueryEngine"
title: "Type alias: QueryEngine<T, M>"
sidebar_label: "QueryEngine"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **QueryEngine**<`T`, `M`\>: (`items`: [`Item`](../interfaces/Item.md)<`T`, `M`\>[], `query`: [`LocalQuery`](LocalQuery.md), `comparator`: [`QuerySortComparator`](QuerySortComparator.md), `comparators`: [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`QuerySortComparator`](QuerySortComparator.md)\>) => [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](ItemMeta.md) |

#### Type declaration

▸ (`items`, `query`, `comparator`, `comparators`): [`Item`](../interfaces/Item.md)<`T`, `M`\>[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)<`T`, `M`\>[] |
| `query` | [`LocalQuery`](LocalQuery.md) |
| `comparator` | [`QuerySortComparator`](QuerySortComparator.md) |
| `comparators` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`QuerySortComparator`](QuerySortComparator.md)\> |

##### Returns

[`Item`](../interfaces/Item.md)<`T`, `M`\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:193
