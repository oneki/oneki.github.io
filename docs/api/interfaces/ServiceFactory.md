---
id: "ServiceFactory"
title: "Interface: ServiceFactory"
sidebar_label: "ServiceFactory"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Container`](../classes/Container.md)

## Methods

### createService

▸ **createService**<`S`, `T`\>(`ctor`, `context`, `initialState`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](State.md) |
| `T` | extends [`AppService`](AppService.md)<`S`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | [`Class`](../types/Class.md)<`T`\> |
| `context` | [`AppContext`](AppContext.md) |
| `initialState` | `S` |

#### Returns

`T`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:48
