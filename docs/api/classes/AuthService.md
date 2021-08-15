---
id: "AuthService"
title: "Class: AuthService"
sidebar_label: "AuthService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳ **`AuthService`**

## Constructors

### constructor

• **new AuthService**()

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

### clear

▸ **clear**(`onError?`, `onSuccess?`): `Generator`<`void`, `void`, `unknown`\>

Clear all authentication data from the redux store
and the persistence storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`void`, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:155

___

### fetchSecurityContext

▸ **fetchSecurityContext**(`onError?`, `onSuccess?`): `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

Get the security context from the server and save it

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:185

___

### loadToken

▸ **loadToken**(`onError?`, `onSuccess?`): `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

Load the token from the persistence storage to the redux store

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:268

___

### refreshToken

▸ **refreshToken**(`token`, `idp`, `force?`, `onError?`): `undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

Refresh the token against an IDP

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> | `undefined` |
| `idp` | [`Idp`](../interfaces/Idp.md) | `undefined` |
| `force` | `boolean` | `false` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> | `undefined` |

#### Returns

`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:349

___

### saveToken

▸ **saveToken**(`token`, `idp`, `onError?`): `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\>

Validate the token and save it in the store and persistence storage and
trigger the refreshing of the token if applicable

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `idp` | [`Idp`](../interfaces/Idp.md) |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |

#### Returns

`Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:455

___

### setIdp

▸ **setIdp**(`idp?`): `void`

Save the idp name in the redux store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idp?` | [`Idp`](../interfaces/Idp.md) | : the IDP to save (full object). Can be null for removal |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:104

___

### setSecurityContext

▸ **setSecurityContext**(`securityContext?`): `void`

Save the security context in the redux store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityContext?` | ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> | : the security context to save |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:25

___

### setToken

▸ **setToken**(`token`): `void`

Save the token in the redux store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> | : the token to save |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/AuthService.ts:35
