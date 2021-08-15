---
id: "NotificationService"
title: "Class: NotificationService"
sidebar_label: "NotificationService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳ **`NotificationService`**

## Constructors

### constructor

• **new NotificationService**()

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

### add

▸ **add**(`notification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`Notification`](../interfaces/Notification.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:18

___

### clearTopic

▸ **clearTopic**(`topic`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:32

___

### debug

▸ **debug**(`payload`): `Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:39

___

### error

▸ **error**(`payload`): `Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:46

___

### formatLevelNotification

▸ **formatLevelNotification**(`level`, `notification`): [`NotificationContent`](../interfaces/NotificationContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`NotificationLevel`](../enums/NotificationLevel.md) |
| `notification` | `string` \| [`NotificationContent`](../interfaces/NotificationContent.md) |

#### Returns

[`NotificationContent`](../interfaces/NotificationContent.md)

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:89

___

### formatNotification

▸ **formatNotification**(`notificationContent`, `settings`, `notificationService`): [`Notification`](../interfaces/Notification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationContent` | `string` \| [`NotificationContent`](../interfaces/NotificationContent.md) |
| `settings` | [`AppSettings`](../interfaces/AppSettings.md) |
| `notificationService` | [`NotificationService`](NotificationService.md) |

#### Returns

[`Notification`](../interfaces/Notification.md)

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:50

___

### info

▸ **info**(`payload`): `Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:109

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:13

___

### onRouteChange

▸ **onRouteChange**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:114

___

### remove

▸ **remove**(`notificationId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationId` | `string` \| `number` \| `symbol` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:125

___

### send

▸ **send**(`notificationContent`): `Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationContent` | `string` \| [`NotificationContent`](../interfaces/NotificationContent.md) |

#### Returns

`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:138

___

### success

▸ **success**(`payload`): `Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:168

___

### warning

▸ **warning**(`payload`): `Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`Generator`<`Generator`<`void` \| `CallEffect`<``true``\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/notification/NotificationService.ts:175
