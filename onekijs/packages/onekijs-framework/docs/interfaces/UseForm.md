---
id: "UseForm"
title: "Interface: UseForm"
sidebar_label: "UseForm"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### Form

• **Form**: `FC`<[`FormProps`](../types/FormProps.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:151

___

### submitting

• **submitting**: `boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:168

___

### validations

• **validations**: [`AnonymousObject`](AnonymousObject.md)<[`FieldValidation`](../classes/FieldValidation.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:169

___

### values

• **values**: `any`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:170

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

onekijs/packages/onekijs-framework/src/form/typings.ts:148

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

onekijs/packages/onekijs-framework/src/form/typings.ts:149

___

### field

▸ **field**(`name`, `validators?`, `options?`): [`FieldProps`](FieldProps.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validators?` | [`Validator`](../types/Validator.md)[] |
| `options?` | [`FieldOptions`](FieldOptions.md) |

#### Returns

[`FieldProps`](FieldProps.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:150

___

### getValidation

▸ **getValidation**(`fieldName?`, `touchedOnly?`): [`ContainerValidation`](../classes/ContainerValidation.md) \| [`FieldValidation`](../classes/FieldValidation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName?` | `string` |
| `touchedOnly?` | `boolean` |

#### Returns

[`ContainerValidation`](../classes/ContainerValidation.md) \| [`FieldValidation`](../classes/FieldValidation.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:157

___

### getValue

▸ **getValue**<`T`\>(`fieldName`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:152

▸ **getValue**<`T`\>(`fieldName`, `defaultValue`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `defaultValue` | `undefined` |

#### Returns

`undefined` \| `T`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:153

▸ **getValue**<`T`\>(`fieldName`, `defaultValue`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `defaultValue` | ``null`` |

#### Returns

``null`` \| `T`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:154

▸ **getValue**<`T`\>(`fieldName`, `defaultValue`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `defaultValue` | `T` |

#### Returns

`T`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:155

▸ **getValue**(`fieldName?`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName?` | `string` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:156

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

onekijs/packages/onekijs-framework/src/form/typings.ts:158

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/form/typings.ts:159

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

onekijs/packages/onekijs-framework/src/form/typings.ts:160

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

onekijs/packages/onekijs-framework/src/form/typings.ts:164

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

onekijs/packages/onekijs-framework/src/form/typings.ts:166

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

onekijs/packages/onekijs-framework/src/form/typings.ts:161

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

onekijs/packages/onekijs-framework/src/form/typings.ts:162

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

onekijs/packages/onekijs-framework/src/form/typings.ts:163

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

onekijs/packages/onekijs-framework/src/form/typings.ts:165

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

onekijs/packages/onekijs-framework/src/form/typings.ts:167
