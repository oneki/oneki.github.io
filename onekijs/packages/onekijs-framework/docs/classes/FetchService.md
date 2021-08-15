---
id: "FetchService"
title: "Class: FetchService<S>"
sidebar_label: "FetchService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`FetchState`](../interfaces/FetchState.md)[`FetchState`](../interfaces/FetchState.md) |

## Hierarchy

- [`DefaultService`](DefaultService.md)<`S`\>

  ↳ **`FetchService`**

## Constructors

### constructor

• **new FetchService**<`S`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`FetchState`](../interfaces/FetchState.md)[`FetchState`](../interfaces/FetchState.md) |

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

### pullTask

• `Optional` **pullTask**: `Task`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:10

___

### state

• **state**: `S`

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

### cancelPull

▸ **cancelPull**(): `Generator`<`undefined` \| `void`, `void`, `unknown`\>

#### Returns

`Generator`<`undefined` \| `void`, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:97

___

### delayLoading

▸ **delayLoading**(`delay_ms?`): `Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay_ms?` | `number` |

#### Returns

`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:13

___

### delete

▸ **delete**<`R`\>(`url`, `options?`): `Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `never`\> |

#### Returns

`Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:23

___

### fetch

▸ **fetch**<`R`, `T`\>(`url`, `method`, `body?`, `options?`): `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | [`FetchMethod`](../types/FetchMethod.md) |
| `body?` | `T` |
| `options` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\> |

#### Returns

`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:44

___

### fetchError

▸ **fetchError**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:29

___

### fetchSuccess

▸ **fetchSuccess**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:36

___

### get

▸ **get**<`R`\>(`url`, `options?`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `never`\> |

#### Returns

`any`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:75

___

### patch

▸ **patch**<`R`, `T`\>(`url`, `body`, `options?`): `Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body` | `T` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\> |

#### Returns

`Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:103

___

### poll

▸ **poll**(`url`, `fixedRateInMs`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `fixedRateInMs` | `number` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`any`, `never`\> |

#### Returns

`any`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:90

___

### pollFetch

▸ **pollFetch**(`url`, `fixedRateInMs`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `fixedRateInMs` | `number` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`any`, `never`\> |

#### Returns

`any`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:80

___

### post

▸ **post**<`R`, `T`\>(`url`, `body`, `options?`): `Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body` | `T` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\> |

#### Returns

`Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:109

___

### put

▸ **put**<`R`, `T`\>(`url`, `body`, `options?`): `Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `body` | `T` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\> |

#### Returns

`Generator`<`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:115

___

### setLoading

▸ **setLoading**(`loading`, `fetching`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loading` | `boolean` |
| `fetching` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/FetchService.ts:120
