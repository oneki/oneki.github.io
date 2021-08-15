---
id: "Collection"
title: "Type alias: Collection<T, M>"
sidebar_label: "Collection"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **Collection**<`T`, `M`\>: `Omit`<[`CollectionBroker`](CollectionBroker.md)<`T`, `M`\>, ``"addSubscriber"`` \| ``"removeSubscriber"``\> & { `data?`: (`T` \| `undefined`)[] ; `hasMore`: `boolean` ; `items?`: ([`Item`](../interfaces/Item.md)<`T`, `M`\> \| `undefined`)[] ; `status`: [`CollectionStatus`](CollectionStatus.md) ; `total?`: `number` ; `asService`: () => [`Collection`](Collection.md)<`T`, `M`\> ; `getAdapter`: () => `undefined` \| [`CollectionItemAdapter`](CollectionItemAdapter.md)<`T`, `M`\> ; `getFields`: () => `undefined` \| `string`[] ; `getFilter`: () => `undefined` \| [`QueryFilter`](../interfaces/QueryFilter.md) ; `getFilterById`: (`id`: [`QueryFilterId`](QueryFilterId.md)) => `undefined` \| [`QueryFilterOrCriteria`](QueryFilterOrCriteria.md) ; `getItem`: (`id`: `string` \| `number`) => `undefined` \| [`Item`](../interfaces/Item.md)<`T`, `M`\> ; `getLimit`: () => `undefined` \| `number` ; `getMeta`: (`id`: `string` \| `number`) => `undefined` \| `M` ; `getOffset`: () => `undefined` \| `number` ; `getParam`: (`key`: `string`) => `any` ; `getParams`: () => `undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> ; `getSearch`: () => `undefined` \| [`Primitive`](Primitive.md) ; `getSort`: () => `undefined` \| [`QuerySortDir`](QuerySortDir.md) ; `getSortBy`: () => `undefined` \| [`QuerySortBy`](QuerySortBy.md)[] ; `getSortByField`: (`field`: `string`) => `undefined` \| [`QuerySortByField`](QuerySortByField.md) ; `getSortById`: (`id`: `string`) => `undefined` \| [`QuerySortBy`](QuerySortBy.md) ; `load`: (`limit?`: `number`, `offset?`: `number`) => `void` ; `query`: (`query`: [`Query`](../interfaces/Query.md)) => `void` ; `refresh`: (`query?`: [`Query`](../interfaces/Query.md)) => `void` ; `reset`: () => `void` ; `setMeta`: (`item`: [`Item`](../interfaces/Item.md)<`T`, `M`\>, `key`: keyof `M`, `value`: `any`) => `void`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](ItemMeta.md) |

#### Defined in

onekijs/packages/onekijs-framework/src/collection/typings.ts:8
