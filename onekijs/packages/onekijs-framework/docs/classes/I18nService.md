---
id: "I18nService"
title: "Class: I18nService"
sidebar_label: "I18nService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultGlobalService`](DefaultGlobalService.md)

  ↳ **`I18nService`**

## Constructors

### constructor

• **new I18nService**(`notificationService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notificationService` | [`NotificationService`](NotificationService.md) |

#### Overrides

[DefaultGlobalService](DefaultGlobalService.md).[constructor](DefaultGlobalService.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:19

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

### modifiers

• **modifiers**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:17

___

### notificationService

• **notificationService**: [`NotificationService`](NotificationService.md)

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:16

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

### changeLocale

▸ **changeLocale**(`locale`): `Generator`<`void`, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

`Generator`<`void`, `void`, `unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:40

___

### fetchTranslations

▸ **fetchTranslations**(`locale`, `namespaces`, `options?`): `Generator`<`any`, `void`, [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `namespaces` | `string`[] |
| `options` | `Object` |
| `options.onError?` | `any` |

#### Returns

`Generator`<`any`, `void`, [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>[]\>

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:52

___

### getLocaleUrl

▸ **getLocaleUrl**(`locale`, `ns`, `settings`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `ns` | `string` |
| `settings` | [`AppSettings`](../interfaces/AppSettings.md) |

#### Returns

`string`

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:78

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:26

___

### setFetchingTranslations

▸ **setFetchingTranslations**(`fetching`, `locale`, `namespaces`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetching` | `boolean` |
| `locale` | `string` |
| `namespaces` | `string`[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:86

___

### setLocale

▸ **setLocale**(`locale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:91

___

### setTranslations

▸ **setTranslations**(`translations`, `locale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translations` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `locale` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/i18n/I18nService.ts:96
