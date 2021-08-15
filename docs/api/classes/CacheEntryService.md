---
id: "CacheEntryService"
title: "Class: CacheEntryService<T>"
sidebar_label: "CacheEntryService"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳ **`CacheEntryService`**

## Constructors

### constructor

• **new CacheEntryService**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

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

### delayLoading

▸ **delayLoading**(`key`, `delay_ms?`): `Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `delay_ms?` | `number` |

#### Returns

`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/CacheEntryService.ts:48

___

### fetch

▸ **fetch**(`url`, `options?`, `force?`): `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response` & `T`\>

Get the object from the server and save it in the cache (= redux store)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `options` | `CacheOptions`<`T`\> | `{}` |
| `force` | `boolean` | `false` |

#### Returns

`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>\> \| `Promise`<`any`\> \| `CancelEffect` \| `CallEffect`<`unknown`\>, `void`, `Task` & `Response` & `T`\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/CacheEntryService.ts:92

___

### setCache

▸ **setCache**(`key`, `cacheEntry?`): `void`

Save the object to cache in the redux store
Several metadata are atttached to the object (expireAt, loading, fetching)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | - |
| `cacheEntry?` | `CacheEntry`<`T`\> | : the object with metadata |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/CacheEntryService.ts:63

___

### setError

▸ **setError**(`key`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `error?` | [`BasicError`](../interfaces/BasicError.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/CacheEntryService.ts:68

___

### setLoading

▸ **setLoading**(`key`, `loading`, `fetching`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `loading` | `boolean` |
| `fetching` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/app/CacheEntryService.ts:74
