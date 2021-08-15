---
id: "GlobalStateService"
title: "Class: GlobalStateService"
sidebar_label: "GlobalStateService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳ **`GlobalStateService`**

## Constructors

### constructor

• **new GlobalStateService**()

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[constructor](DefaultGlobalService.md#constructor)

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

[DefaultGlobalService](DefaultGlobalService.md).[[combinedReducers]](DefaultGlobalService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[dispatch]](DefaultGlobalService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[inReducer]](DefaultGlobalService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[reducers]](DefaultGlobalService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[sagas]](DefaultGlobalService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[types]](DefaultGlobalService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### context

• **context**: [`AppContext`](../interfaces/AppContext.md)

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[context](DefaultGlobalService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/AppService.ts:8

___

### state

• **state**: [`AnyState`](../interfaces/AnyState.md)

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[state](DefaultGlobalService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

## Methods

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | [`AnyState`](../interfaces/AnyState.md) |

#### Returns

`void`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[create]](DefaultGlobalService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[run]](DefaultGlobalService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/app/GlobalService.ts:7

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultGlobalService](DefaultGlobalService.md).[[stop]](DefaultGlobalService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/app/GlobalService.ts:15

___

### setState

▸ **setState**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/GlobalStateService.ts:9
