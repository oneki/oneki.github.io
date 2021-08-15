---
id: "Container"
title: "Class: Container"
sidebar_label: "Container"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ServiceFactory`](../interfaces/ServiceFactory.md)

## Constructors

### constructor

• **new Container**()

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:20

## Properties

### classRegistry

• `Private` **classRegistry**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:12

___

### instanceRegistry

• `Private` **instanceRegistry**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:16

## Methods

### addServiceClass

▸ **addServiceClass**<`S`, `T`\>(`ctor`, `force?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md) |
| `T` | extends [`Service`](../interfaces/Service.md)<`S`, `T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ctor` | [`Class`](../types/Class.md)<`T`\> | `undefined` |
| `force` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:25

___

### createService

▸ **createService**<`S`, `T`\>(`ctor`, `context`, `initialState`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md) |
| `T` | extends [`AppService`](../interfaces/AppService.md)<`S`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | [`Class`](../types/Class.md)<`T`\> |
| `context` | [`BasicAppContext`](BasicAppContext.md) |
| `initialState` | `S` |

#### Returns

`T`

#### Implementation of

[ServiceFactory](../interfaces/ServiceFactory.md).[createService](../interfaces/ServiceFactory.md#createservice)

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:36

___

### getServiceClass

▸ **getServiceClass**<`S`, `T`\>(`ctor`): [`Class`](../types/Class.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md) |
| `T` | extends [`Service`](../interfaces/Service.md)<`S`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctor` | [`Class`](../types/Class.md)<`T`\> |

#### Returns

[`Class`](../types/Class.md)<`T`\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/Container.ts:32
