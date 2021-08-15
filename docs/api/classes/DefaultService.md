---
id: "DefaultService"
title: "Class: DefaultService<S>"
sidebar_label: "DefaultService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

## Hierarchy

- **`DefaultService`**

  ↳ [`DefaultAppService`](DefaultAppService.md)

  ↳ [`CollectionService`](CollectionService.md)

  ↳ [`FetchService`](FetchService.md)

  ↳ [`AsyncBindService`](AsyncBindService.md)

  ↳ [`FormService`](FormService.md)

## Implements

- [`Service`](../interfaces/Service.md)

## Indexable

▪ [k: `string`]: `any`

## Constructors

### constructor

• **new DefaultService**<`S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/State.md)[`AnyState`](../interfaces/AnyState.md) |

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

[Service](../interfaces/Service.md).[[combinedReducers]](../interfaces/Service.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Implementation of

[Service](../interfaces/Service.md).[[dispatch]](../interfaces/Service.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Implementation of

[Service](../interfaces/Service.md).[[inReducer]](../interfaces/Service.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Implementation of

[Service](../interfaces/Service.md).[[reducers]](../interfaces/Service.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Implementation of

[Service](../interfaces/Service.md).[[sagas]](../interfaces/Service.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Implementation of

[Service](../interfaces/Service.md).[[types]](../interfaces/Service.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### state

• **state**: `S`

#### Implementation of

[Service](../interfaces/Service.md).[state](../interfaces/Service.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

## Methods

### [createReducer]

▸ `Private` **[createReducer]**(`type`, `reducer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `reducer` | [`AnyFunction`](../types/AnyFunction.md)<`void`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:109

___

### [createSaga]

▸ `Private` **[createSaga]**(`type`, `saga`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `saga` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:140

___

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `S` |

#### Returns

`void`

#### Implementation of

[Service](../interfaces/Service.md).[[create]](../interfaces/Service.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Implementation of

[Service](../interfaces/Service.md).[[run]](../interfaces/Service.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Implementation of

[Service](../interfaces/Service.md).[[stop]](../interfaces/Service.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226
