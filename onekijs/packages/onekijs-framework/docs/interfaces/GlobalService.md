---
id: "GlobalService"
title: "Interface: GlobalService<S>"
sidebar_label: "GlobalService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](State.md)[`AnyState`](AnyState.md) |

## Hierarchy

- [`AppService`](AppService.md)<`S`\>

  ↳ **`GlobalService`**

## Implemented by

- [`DefaultGlobalService`](../classes/DefaultGlobalService.md)

## Properties

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[AppService](AppService.md).[[dispatch]](AppService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:27

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[AppService](AppService.md).[[inReducer]](AppService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:29

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[AppService](AppService.md).[[reducers]](AppService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:24

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[AppService](AppService.md).[[sagas]](AppService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:26

___

### [types]

• **[types]**: `any`

#### Inherited from

[AppService](AppService.md).[[types]](AppService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:25

___

### context

• **context**: [`AppContext`](AppContext.md)

#### Inherited from

[AppService](AppService.md).[context](AppService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:38

___

### state

• **state**: `S`

#### Inherited from

[AppService](AppService.md).[state](AppService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:30

## Methods

### [combinedReducers]

▸ **[combinedReducers]**(`state`, `action`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `action` | `any` |

#### Returns

`any`

#### Inherited from

[AppService](AppService.md).[[combinedReducers]](AppService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:28

___

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |

#### Returns

`void`

#### Inherited from

[AppService](AppService.md).[[create]](AppService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:32

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[AppService](AppService.md).[[run]](AppService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:33

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[AppService](AppService.md).[[stop]](AppService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:34
