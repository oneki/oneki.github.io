---
id: "AppService"
title: "Interface: AppService<S>"
sidebar_label: "AppService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `S` |

## Hierarchy

- [`Service`](Service.md)<`S`\>

  ↳ **`AppService`**

  ↳↳ [`GlobalService`](GlobalService.md)

  ↳↳ [`LocalService`](LocalService.md)

## Implemented by

- [`DefaultAppService`](../classes/DefaultAppService.md)

## Properties

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[Service](Service.md).[[dispatch]](Service.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:27

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[Service](Service.md).[[inReducer]](Service.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:29

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[Service](Service.md).[[reducers]](Service.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:24

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[Service](Service.md).[[sagas]](Service.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:26

___

### [types]

• **[types]**: `any`

#### Inherited from

[Service](Service.md).[[types]](Service.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:25

___

### context

• **context**: [`AppContext`](AppContext.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:38

___

### state

• **state**: `S`

#### Inherited from

[Service](Service.md).[state](Service.md#state)

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

[Service](Service.md).[[combinedReducers]](Service.md#[combinedreducers])

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

[Service](Service.md).[[create]](Service.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:32

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[Service](Service.md).[[run]](Service.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:33

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[Service](Service.md).[[stop]](Service.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/types/service.ts:34
