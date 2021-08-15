---
id: "LoginService"
title: "Class: LoginService"
sidebar_label: "LoginService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultLocalService`](DefaultLocalService.md)<[`LoginState`](../interfaces/LoginState.md)\>

  ↳ **`LoginService`**

## Constructors

### constructor

• **new LoginService**(`notificationService`, `authService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationService` | [`NotificationService`](NotificationService.md) |
| `authService` | [`AuthService`](AuthService.md) |

#### Overrides

[DefaultLocalService](DefaultLocalService.md).[constructor](DefaultLocalService.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:35

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

[DefaultLocalService](DefaultLocalService.md).[[combinedReducers]](DefaultLocalService.md#[combinedreducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:63

___

### [dispatch]

• **[dispatch]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[dispatch]](DefaultLocalService.md#[dispatch])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:62

___

### [inReducer]

• **[inReducer]**: `boolean`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[inReducer]](DefaultLocalService.md#[inreducer])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:64

___

### [reducers]

• **[reducers]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[reducers]](DefaultLocalService.md#[reducers])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:59

___

### [sagas]

• **[sagas]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[sagas]](DefaultLocalService.md#[sagas])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:61

___

### [types]

• **[types]**: `any`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[types]](DefaultLocalService.md#[types])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:60

___

### authService

• **authService**: [`AuthService`](AuthService.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:33

___

### context

• **context**: [`BasicAppContext`](BasicAppContext.md)

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[context](DefaultLocalService.md#context)

#### Defined in

onekijs/packages/onekijs-framework/src/app/LocalService.ts:9

___

### notificationService

• **notificationService**: [`NotificationService`](NotificationService.md)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:32

___

### state

• **state**: [`LoginState`](../interfaces/LoginState.md)

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[state](DefaultLocalService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

## Methods

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | [`LoginState`](../interfaces/LoginState.md) |

#### Returns

`void`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[create]](DefaultLocalService.md#[create])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:69

___

### [run]

▸ **[run]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[run]](DefaultLocalService.md#[run])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:208

___

### [stop]

▸ **[stop]**(): `void`

#### Returns

`void`

#### Inherited from

[DefaultLocalService](DefaultLocalService.md).[[stop]](DefaultLocalService.md#[stop])

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:226

___

### externalLogin

▸ **externalLogin**(`idpName?`, `onError?`): `Generator`<`string` \| `void` \| `Promise`<`string`\>, `void`, `unknown`\>

Redirect the user to an external login page

#### Parameters

| Name | Type |
| :------ | :------ |
| `idpName?` | `string` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |

#### Returns

`Generator`<`string` \| `void` \| `Promise`<`string`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:181

___

### externalLoginCallback

▸ **externalLoginCallback**(`idpName?`, `onError?`, `onSuccess?`): `Generator`<`string` \| `void` \| `Promise`<`any`\> \| [any?, AnonymousObject<any\>?] \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\>, `void`, `string` & [`unknown`, `any`]\>

Parse the token and the security context from the response of the
external login

#### Parameters

| Name | Type |
| :------ | :------ |
| `idpName?` | `string` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`string` \| `void` \| `Promise`<`any`\> \| [any?, AnonymousObject<any\>?] \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\>, `void`, `string` & [`unknown`, `any`]\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:299

___

### formLogin

▸ **formLogin**(`data`, `idpName?`, `onError?`, `onSuccess?`): `Generator`<`unknown`, `void`, [`any`, `any`]\>

Submit the login form

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `idpName?` | `string` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`unknown`, `void`, [`any`, `any`]\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:90

___

### login

▸ **login**(`idpName?`, `onError?`, `onSuccess?`): `Generator`<`void` \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\> \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\> \| `Generator`<`string` \| `void` \| `Promise`<`string`\>, `void`, `unknown`\>, `void`, [`OidcToken`](../interfaces/OidcToken.md) & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

Check if a login is necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `idpName?` | `string` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`void` \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\> \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\> \| `Generator`<`string` \| `void` \| `Promise`<`string`\>, `void`, `unknown`\>, `void`, [`OidcToken`](../interfaces/OidcToken.md) & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:517

___

### onError

▸ **onError**(`error`): `void`

Inform the user if there is an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`DefaultBasicError`](DefaultBasicError.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:59

___

### onSuccess

▸ **onSuccess**(): `void`

Reset the loading and error message after a successful operation

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:70

___

### setLoading

▸ **setLoading**(`loading`): `void`

Inform the user if there is a loading task

#### Parameters

| Name | Type |
| :------ | :------ |
| `loading` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:48

___

### successLogin

▸ **successLogin**(`token?`, `securityContext?`, `idpName?`, `onError?`, `onSuccess?`): `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\>

Save the token and the security context

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `securityContext?` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `idpName?` | `string` |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void` \| `Promise`<`boolean`\> \| `ForkEffect`<`undefined` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `boolean`\> \| `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `undefined` \| ``null`` \| `string` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, `string` & `string` & [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>, ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LoginService.ts:447
