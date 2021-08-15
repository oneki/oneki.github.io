---
id: "LogoutService"
title: "Class: LogoutService"
sidebar_label: "LogoutService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultLocalService`](DefaultLocalService.md)<[`LogoutState`](../interfaces/LogoutState.md)\>

  ↳ **`LogoutService`**

## Constructors

### constructor

• **new LogoutService**(`notificationService`, `authService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationService` | [`NotificationService`](NotificationService.md) |
| `authService` | [`AuthService`](AuthService.md) |

#### Overrides

[DefaultLocalService](DefaultLocalService.md).[constructor](DefaultLocalService.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:21

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

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:19

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

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:18

___

### state

• **state**: [`LogoutState`](../interfaces/LogoutState.md)

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
| `initialState` | [`LogoutState`](../interfaces/LogoutState.md) |

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

### logout

▸ **logout**(`onError?`, `onSuccess?`): `Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void`, `void`, `unknown`\>, `void`, `unknown`\>, `void`, `string`\>

Logout the user or redirect to an external logout page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> | callback for catching possible errors |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> | callback called after a success logout |

#### Returns

`Generator`<`string` \| `void` \| `Promise`<`any`\> \| `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void`, `void`, `unknown`\>, `void`, `unknown`\>, `void`, `string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:66

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

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:43

___

### onSuccess

▸ **onSuccess**(): `void`

Reset the loading and error message after a successful operation

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:53

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

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:33

___

### successLogout

▸ **successLogout**(`onError?`, `onSuccess?`): `Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void`, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | [`ErrorCallback`](../types/ErrorCallback.md)<[`BasicError`](../interfaces/BasicError.md)\> |
| `onSuccess?` | [`SuccessCallback`](../types/SuccessCallback.md)<`any`\> |

#### Returns

`Generator`<`void` \| `CallEffect`<`void`\> \| `Generator`<`void`, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/LogoutService.ts:137
