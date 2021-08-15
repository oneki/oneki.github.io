---
id: "DefaultAppService"
title: "Class: DefaultAppService<S>"
sidebar_label: "DefaultAppService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

## Hierarchy

- [`DefaultService`](DefaultService.md)<`S`\>

  ↳ **`DefaultAppService`**

  ↳↳ [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳↳ [`DefaultLocalService`](DefaultLocalService.md)

## Implements

- [`AppService`](../interfaces/AppService.md)<`S`\>

## Constructors

### constructor

• **new DefaultAppService**<`S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

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

#### Implementation of

[AppService](../interfaces/AppService.md).[[combinedReducers]](../interfaces/AppService.md#[combinedreducers])

#### Inherited from

[DefaultService](DefaultService.md).[[combinedReducers]](DefaultService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Implementation of

[AppService](../interfaces/AppService.md).[[dispatch]](../interfaces/AppService.md#[dispatch])

#### Inherited from

[DefaultService](DefaultService.md).[[dispatch]](DefaultService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Implementation of

[AppService](../interfaces/AppService.md).[[inReducer]](../interfaces/AppService.md#[inreducer])

#### Inherited from

[DefaultService](DefaultService.md).[[inReducer]](DefaultService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Implementation of

[AppService](../interfaces/AppService.md).[[reducers]](../interfaces/AppService.md#[reducers])

#### Inherited from

[DefaultService](DefaultService.md).[[reducers]](DefaultService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Implementation of

[AppService](../interfaces/AppService.md).[[sagas]](../interfaces/AppService.md#[sagas])

#### Inherited from

[DefaultService](DefaultService.md).[[sagas]](DefaultService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Implementation of

[AppService](../interfaces/AppService.md).[[types]](../interfaces/AppService.md#[types])

#### Inherited from

[DefaultService](DefaultService.md).[[types]](DefaultService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### context

• **context**: [`AppContext`](../interfaces/AppContext.md)

#### Implementation of

[AppService](../interfaces/AppService.md).[context](../interfaces/AppService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/AppService.ts:8

___

### state

• **state**: `S`

#### Implementation of

[AppService](../interfaces/AppService.md).[state](../interfaces/AppService.md#state)

#### Inherited from

[DefaultService](DefaultService.md).[state](DefaultService.md#state)

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

#### Implementation of

[AppService](../interfaces/AppService.md).[[create]](../interfaces/AppService.md#[create])

#### Inherited from

[DefaultService](DefaultService.md).[[create]](DefaultService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Implementation of

[AppService](../interfaces/AppService.md).[[run]](../interfaces/AppService.md#[run])

#### Inherited from

[DefaultService](DefaultService.md).[[run]](DefaultService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Implementation of

[AppService](../interfaces/AppService.md).[[stop]](../interfaces/AppService.md#[stop])

#### Inherited from

[DefaultService](DefaultService.md).[[stop]](DefaultService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226
