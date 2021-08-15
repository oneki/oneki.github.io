---
id: "Service"
title: "Interface: Service<S>"
sidebar_label: "Service"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](State.md)[`AnyState`](AnyState.md) |

## Hierarchy

- **`Service`**

  ↳ [`AppService`](AppService.md)

## Implemented by

- [`DefaultService`](../classes/DefaultService.md)

## Indexable

▪ [k: `string`]: `any`

## Properties

### [dispatch]

• **[dispatch]**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:27

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:29

___

### [reducers]

• **[reducers]**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:24

___

### [sagas]

• **[sagas]**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:26

___

### [types]

• **[types]**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:25

___

### state

• **state**: `S`

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

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:32

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:33

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:34
