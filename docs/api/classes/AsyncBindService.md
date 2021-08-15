---
id: "AsyncBindService"
title: "Class: AsyncBindService<T>"
sidebar_label: "AsyncBindService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DefaultService`](DefaultService.md)<[`AsyncBindState`](../interfaces/AsyncBindState.md)\>

  ↳ **`AsyncBindService`**

## Constructors

### constructor

• **new AsyncBindService**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

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

#### Inherited from

[DefaultService](DefaultService.md).[[combinedReducers]](DefaultService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[dispatch]](DefaultService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[DefaultService](DefaultService.md).[[inReducer]](DefaultService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[reducers]](DefaultService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[sagas]](DefaultService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Inherited from

[DefaultService](DefaultService.md).[[types]](DefaultService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### state

• **state**: [`AsyncBindState`](../interfaces/AsyncBindState.md)

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
| `initialState` | [`AsyncBindState`](../interfaces/AsyncBindState.md) |

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[create]](DefaultService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[run]](DefaultService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultService](DefaultService.md).[[stop]](DefaultService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226

___

### error

▸ **error**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/AsyncBindService.ts:24

___

### execute

▸ **execute**(`asyncMethod`, `dependencies`): `Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`SagaReturnType`<[`AnyFunction`](../types/AnyFunction.md)<`T`\>\>\>, `Task`, `Task`\>, `void`, `Task`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asyncMethod` | [`AnyFunction`](../types/AnyFunction.md)<`T`\> |
| `dependencies` | `any`[] |

#### Returns

`Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`SagaReturnType`<[`AnyFunction`](../types/AnyFunction.md)<`T`\>\>\>, `Task`, `Task`\>, `void`, `Task`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/AsyncBindService.ts:31

___

### forkAsyncBind

▸ **forkAsyncBind**(`asyncMethod`, `dependencies`): `Generator`<`void` \| `ForkEffect`<`SagaReturnType`<[`AnyFunction`](../types/AnyFunction.md)<`T`\>\>\>, `Task`, `Task`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asyncMethod` | [`AnyFunction`](../types/AnyFunction.md)<`T`\> |
| `dependencies` | `any`[] |

#### Returns

`Generator`<`void` \| `ForkEffect`<`SagaReturnType`<[`AnyFunction`](../types/AnyFunction.md)<`T`\>\>\>, `Task`, `Task`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/AsyncBindService.ts:46

___

### setLoading

▸ **setLoading**(`isLoading`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLoading` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/AsyncBindService.ts:12

___

### success

▸ **success**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `T` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/AsyncBindService.ts:17
