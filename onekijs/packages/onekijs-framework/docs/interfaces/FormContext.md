---
id: "FormContext"
title: "Interface: FormContext"
sidebar_label: "FormContext"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### fields

• **fields**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:95

___

### labelWidth

• `Optional` **labelWidth**: [`FormLabelWidth`](../types/FormLabelWidth.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:103

___

### layout

• `Optional` **layout**: [`FormLayout`](../types/FormLayout.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:104

___

### submittingRef

• **submittingRef**: `MutableRefObject`<`boolean`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:121

___

### validationsRef

• **validationsRef**: `MutableRefObject`<[`AnonymousObject`](AnonymousObject.md)<[`FieldValidation`](../classes/FieldValidation.md)\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:123

___

### valuesRef

• **valuesRef**: `MutableRefObject`<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:122

## Methods

### add

▸ **add**(`fieldArrayName`, `initialValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldArrayName` | `string` |
| `initialValue?` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:93

___

### clearValidation

▸ **clearValidation**(`fieldName`, `validatorName`, `code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:94

___

### getContainerFieldValidation

▸ **getContainerFieldValidation**(`validations`, `fields`, `prefix?`, `touchedOnly?`): [`ContainerValidation`](../classes/ContainerValidation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validations` | [`AnonymousObject`](AnonymousObject.md)<[`FieldValidation`](../classes/FieldValidation.md)\> |
| `fields` | [`AnonymousObject`](AnonymousObject.md)<[`Field`](Field.md)\> |
| `prefix?` | `string` |
| `touchedOnly?` | `boolean` |

#### Returns

[`ContainerValidation`](../classes/ContainerValidation.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:97

___

### init

▸ **init**(`name`, `validators?`, `fieldOptions?`): [`FieldProps`](FieldProps.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validators?` | [`Validator`](../types/Validator.md)[] |
| `fieldOptions?` | [`FieldOptions`](FieldOptions.md) |

#### Returns

[`FieldProps`](FieldProps.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:96

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

onekijs/packages/onekijs-framework/src/form/typings.ts:105

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

onekijs/packages/onekijs-framework/src/form/typings.ts:106

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

onekijs/packages/onekijs-framework/src/form/typings.ts:107

___

### onSubmittingChange

▸ **onSubmittingChange**(`listener`, `once?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `once?` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:108

___

### onValidationChange

▸ **onValidationChange**(`listener`, `watchs`, `once?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |
| `once?` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:109

___

### onValueChange

▸ **onValueChange**(`listener`, `watchs`, `once?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`FormListener`](../types/FormListener.md) |
| `watchs` | `string` \| `string`[] |
| `once?` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:110

___

### remove

▸ **remove**(`fieldArrayName`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldArrayName` | `string` |
| `index` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:111

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:112

___

### setError

▸ **setError**(`fieldName`, `validatorName`, `message?`, `match?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `message?` | `string` |
| `match?` | `boolean` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:113

___

### setOK

▸ **setOK**(`fieldName`, `validatorName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:114

___

### setPendingValidation

▸ **setPendingValidation**(`fieldName`, `validatorName`, `pending?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `pending?` | `any` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:115

___

### setValidation

▸ **setValidation**(`fieldName`, `validatorName`, `code`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:116

___

### setValue

▸ **setValue**(`fieldName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:117

___

### setValues

▸ **setValues**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AnonymousObject`](AnonymousObject.md)<`any`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:118

___

### setWarning

▸ **setWarning**(`fieldName`, `validatorName`, `message?`, `match?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `validatorName` | `string` |
| `message?` | `string` |
| `match?` | `boolean` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:119

___

### submit

▸ **submit**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `SyntheticEvent`<`Element`, `Event`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:120
