---
id: "useCollectionService"
title: "Function: useCollectionService"
sidebar_label: "useCollectionService"
sidebar_position: 0
custom_edit_url: null
---

▸ `Const` **useCollectionService**<`T`, `M`, `S`, `C`\>(`dataSource`, `ctor`, `initialState`): [`S`, `C`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends [`ItemMeta`](../types/ItemMeta.md)[`ItemMeta`](../types/ItemMeta.md) |
| `S` | extends [`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`, `S`\>[`CollectionState`](../interfaces/CollectionState.md)<`T`, `M`\> |
| `C` | extends [`CollectionService`](../classes/CollectionService.md)<`T`, `M`, `S`, `C`\>[`CollectionService`](../classes/CollectionService.md)<`T`, `M`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataSource` | `string` \| [`Collection`](../types/Collection.md)<`T`, `M`\> \| `T`[] |
| `ctor` | [`Class`](../types/Class.md)<`C`\> |
| `initialState` | `S` |

#### Returns

[`S`, `C`]

#### Defined in

onekijs/packages/onekijs-framework/src/collection/useCollectionService.ts:10
