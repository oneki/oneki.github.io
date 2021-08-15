---
id: "DefaultLocalService"
title: "Class: DefaultLocalService<S>"
sidebar_label: "DefaultLocalService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

## Hierarchy

- [`DefaultAppService`](DefaultAppService.md)<`S`\>

  ↳ **`DefaultLocalService`**

  ↳↳ [`LocalStateService`](LocalStateService.md)

  ↳↳ [`LoginService`](LoginService.md)

  ↳↳ [`LogoutService`](LogoutService.md)

## Implements

- [`LocalService`](../interfaces/LocalService.md)

## Constructors

### constructor

• **new DefaultLocalService**<`S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

#### Inherited from

[DefaultAppService](DefaultAppService.md).[constructor](DefaultAppService.md#constructor)

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

[LocalService](../interfaces/LocalService.md).[[combinedReducers]](../interfaces/LocalService.md#[combinedreducers])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[combinedReducers]](DefaultAppService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[dispatch]](../interfaces/LocalService.md#[dispatch])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[dispatch]](DefaultAppService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[inReducer]](../interfaces/LocalService.md#[inreducer])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[inReducer]](DefaultAppService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[reducers]](../interfaces/LocalService.md#[reducers])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[reducers]](DefaultAppService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[sagas]](../interfaces/LocalService.md#[sagas])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[sagas]](DefaultAppService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[types]](../interfaces/LocalService.md#[types])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[types]](DefaultAppService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### context

• **context**: [`BasicAppContext`](BasicAppContext.md)

#### Implementation of

[LocalService](../interfaces/LocalService.md).[context](../interfaces/LocalService.md#context)

#### Overrides

[DefaultAppService](DefaultAppService.md).[context](DefaultAppService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/LocalService.ts:9

___

### state

• **state**: `S`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[state](../interfaces/LocalService.md#state)

#### Inherited from

[DefaultAppService](DefaultAppService.md).[state](DefaultAppService.md#state)

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

[LocalService](../interfaces/LocalService.md).[[create]](../interfaces/LocalService.md#[create])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[create]](DefaultAppService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[run]](../interfaces/LocalService.md#[run])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[run]](DefaultAppService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Implementation of

[LocalService](../interfaces/LocalService.md).[[stop]](../interfaces/LocalService.md#[stop])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[stop]](DefaultAppService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226
