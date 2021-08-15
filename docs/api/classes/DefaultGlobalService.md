---
id: "DefaultGlobalService"
title: "Class: DefaultGlobalService<S>"
sidebar_label: "DefaultGlobalService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

## Hierarchy

- [`DefaultAppService`](DefaultAppService.md)<`S`\>

  ↳ **`DefaultGlobalService`**

  ↳↳ [`CacheEntryService`](CacheEntryService.md)

  ↳↳ [`GlobalStateService`](GlobalStateService.md)

  ↳↳ [`AuthService`](AuthService.md)

  ↳↳ [`I18nService`](I18nService.md)

  ↳↳ [`NotificationService`](NotificationService.md)

## Implements

- [`GlobalService`](../interfaces/GlobalService.md)

## Constructors

### constructor

• **new DefaultGlobalService**<`S`\>()

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

[GlobalService](../interfaces/GlobalService.md).[[combinedReducers]](../interfaces/GlobalService.md#[combinedreducers])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[combinedReducers]](DefaultAppService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[dispatch]](../interfaces/GlobalService.md#[dispatch])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[dispatch]](DefaultAppService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[inReducer]](../interfaces/GlobalService.md#[inreducer])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[inReducer]](DefaultAppService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[reducers]](../interfaces/GlobalService.md#[reducers])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[reducers]](DefaultAppService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[sagas]](../interfaces/GlobalService.md#[sagas])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[sagas]](DefaultAppService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[types]](../interfaces/GlobalService.md#[types])

#### Inherited from

[DefaultAppService](DefaultAppService.md).[[types]](DefaultAppService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### context

• **context**: [`AppContext`](../interfaces/AppContext.md)

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[context](../interfaces/GlobalService.md#context)

#### Inherited from

[DefaultAppService](DefaultAppService.md).[context](DefaultAppService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/AppService.ts:8

___

### state

• **state**: `S`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[state](../interfaces/GlobalService.md#state)

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

[GlobalService](../interfaces/GlobalService.md).[[create]](../interfaces/GlobalService.md#[create])

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

[GlobalService](../interfaces/GlobalService.md).[[run]](../interfaces/GlobalService.md#[run])

#### Overrides

[DefaultAppService](DefaultAppService.md).[[run]](DefaultAppService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/app/GlobalService.ts:7

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Implementation of

[GlobalService](../interfaces/GlobalService.md).[[stop]](../interfaces/GlobalService.md#[stop])

#### Overrides

[DefaultAppService](DefaultAppService.md).[[stop]](DefaultAppService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/app/GlobalService.ts:15
