---
id: "LocalStateService"
title: "Class: LocalStateService<S>"
sidebar_label: "LocalStateService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

## Hierarchy

- [`DefaultLocalService`](DefaultLocalService.md)<`S`\>

  ↳ **`LocalStateService`**

## Constructors

### constructor

• **new LocalStateService**<`S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[constructor](DefaultLocalService.md#constructor)

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

[DefaultLocalService](DefaultLocalService.md).[[combinedReducers]](DefaultLocalService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[dispatch]](DefaultLocalService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[inReducer]](DefaultLocalService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[reducers]](DefaultLocalService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[sagas]](DefaultLocalService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[types]](DefaultLocalService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### context

• **context**: [`BasicAppContext`](BasicAppContext.md)

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[context](DefaultLocalService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/LocalService.ts:9

___

### state

• **state**: `S`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[state](DefaultLocalService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

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

[DefaultLocalService](DefaultLocalService.md).[[create]](DefaultLocalService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[run]](DefaultLocalService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[stop]](DefaultLocalService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226

___

### setState

▸ **setState**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/LocalStateService.ts:9
