---
id: "FormService"
title: "Class: FormService"
sidebar_label: "FormService"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultService`](DefaultService.md)<[`FormState`](../interfaces/FormState.md)\>

  ↳ **`FormService`**

## Constructors

### constructor

• **new FormService**()

#### Overrides

[DefaultService](DefaultService.md).[constructor](DefaultService.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:39

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

### fieldIndex

• `Protected` **fieldIndex**: `Object`

#### Index signature

▪ [fieldName: `string`]: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:32

___

### fields

• **fields**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`Field`](../interfaces/Field.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:27

___

### listeners

• **listeners**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `submittingChange` |  |
| `validationChange` |  |
| `valueChange` |  |

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:28

___

### pendingDispatch

• **pendingDispatch**: `Set`<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:31

___

### state

• **state**: [`FormState`](../interfaces/FormState.md)

#### Inherited from

[DefaultService](DefaultService.md).[state](DefaultService.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/core/Service.ts:66

___

### watchIndex

• `Protected` **watchIndex**: `Object`

#### Index signature

▪ [fieldName: `string`]: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:35

## Methods

### [create]

▸ **[create]**(`initialState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | [`FormState`](../interfaces/FormState.md) |

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

### \_getSubFieldNames

▸ `Protected` **_getSubFieldNames**(`fieldName`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`string`[]

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:116

___

### \_getSubWatchs

▸ `Protected` **_getSubWatchs**(`watch`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `watch` | `string` |

#### Returns

`string`[]

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:136

___

### \_setValues

▸ `Private` **_setValues**(`values?`, `validations?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `validations` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`FieldValidation`](FieldValidation.md)\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:281

___

### addField

▸ **addField**(`field`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../interfaces/Field.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:52

___

### clearValidation

▸ **clearValidation**(`fieldName`, `validatorName`, `code`, `compile?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldName` | `string` | `undefined` |
| `validatorName` | `string` | `undefined` |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) | `undefined` |
| `compile` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:60

___

### compileValidations

▸ **compileValidations**(`fieldNames`, `force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldNames` | `string` \| `string`[] | `undefined` |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:68

___

### getContainerFieldValidation

▸ **getContainerFieldValidation**(`validations`, `fields`, `prefix?`, `touchedOnly?`): [`ContainerValidation`](ContainerValidation.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `validations` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`FieldValidation`](FieldValidation.md)\> | `undefined` |
| `fields` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`Field`](../interfaces/Field.md)\> | `undefined` |
| `prefix` | `string` | `''` |
| `touchedOnly` | `boolean` | `true` |

#### Returns

[`ContainerValidation`](ContainerValidation.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:84

___

### getValidation

▸ **getValidation**(`fieldName`): [`FieldValidation`](FieldValidation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

[`FieldValidation`](FieldValidation.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:155

___

### hasValidation

▸ **hasValidation**(`fieldName`, `validatorName`, `code`, `message?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |
| `message?` | `string` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:169

___

### offChange

▸ **offChange**(`type`, `listener`, `watchs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FormListenerType`](../types/FormListenerType.md) |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:181

___

### offSubmittingChange

▸ **offSubmittingChange**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:201

___

### offValidationChange

▸ **offValidationChange**(`listener`, `watchs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:209

___

### offValueChange

▸ **offValueChange**(`listener`, `watchs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:217

___

### onChange

▸ **onChange**(`type`, `listener`, `watchs`, `once`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FormListenerType`](../types/FormListenerType.md) |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |
| `once` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:189

___

### onSubmittingChange

▸ **onSubmittingChange**(`listener`, `once?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) | `undefined` |
| `once` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:205

___

### onValidationChange

▸ **onValidationChange**(`listener`, `watchs`, `once?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) | `undefined` |
| `watchs` | `string` \| `string`[] | `undefined` |
| `once` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:213

___

### onValueChange

▸ **onValueChange**(`listener`, `watchs`, `once?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) | `undefined` |
| `watchs` | `string` \| `string`[] | `undefined` |
| `once` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:221

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:226

___

### serializeValidationCode

▸ **serializeValidationCode**(`code`): [`ValidationStatus`](../enums/ValidationStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |

#### Returns

[`ValidationStatus`](../enums/ValidationStatus.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:249

___

### setResetting

▸ **setResetting**(`resetting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resetting` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:245

___

### setSubmitting

▸ **setSubmitting**(`submitting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `submitting` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:265

___

### setValidation

▸ **setValidation**(`fieldName`, `validatorName`, `code`, `message?`, `compile?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldName` | `string` | `undefined` |
| `validatorName` | `string` | `undefined` |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) | `undefined` |
| `message` | `string` | `''` |
| `compile` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:271

___

### setValue

▸ **setValue**(`fieldName`, `value`): `Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>, `void`, `string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `any` |

#### Returns

`Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>, `void`, `string`[]\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:299

___

### setValues

▸ **setValues**(`values`): `Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>, `void`, `string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Returns

`Generator`<`void` \| `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>, `void`, `string`[]\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:310

___

### submit

▸ **submit**(`values`, `validations`, `resubmit`, `onSuccess`, `onError?`, `onWarning?`): `Generator`<`void` \| [`ContainerValidation`](ContainerValidation.md), `void`, `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |
| `validations` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<[`FieldValidation`](FieldValidation.md)\> |
| `resubmit` | () => `void` |
| `onSuccess` | [`FormSubmitCallback`](../types/FormSubmitCallback.md) |
| `onError?` | [`FormErrorCallback`](../types/FormErrorCallback.md) |
| `onWarning?` | [`FormWarningCallback`](../types/FormWarningCallback.md) |

#### Returns

`Generator`<`void` \| [`ContainerValidation`](ContainerValidation.md), `void`, `Object`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:319

___

### touch

▸ **touch**(`fieldName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:359

___

### touchAll

▸ **touchAll**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:367

___

### validate

▸ **validate**(`fieldName`, `validatorName`, `validator`, `value`): `Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `validator` | [`Validator`](../types/Validator.md) |
| `value` | `any` |

#### Returns

`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:374

___

### validateAll

▸ **validateAll**(`values`): `Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Returns

`Generator`<`void` \| `ForkEffect`<`Generator`<`void` \| [`ValidationResult`](../types/ValidationResult.md), `void`, [`ValidationResult`](../types/ValidationResult.md)\>\>, `string`[], `Task`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/FormService.ts:392
