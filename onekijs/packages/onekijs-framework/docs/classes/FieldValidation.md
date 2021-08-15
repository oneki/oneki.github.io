---
id: "FieldValidation"
title: "Class: FieldValidation"
sidebar_label: "FieldValidation"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`FieldValidation`**

  ↳ [`ContainerValidation`](ContainerValidation.md)

## Constructors

### constructor

• **new FieldValidation**(`message`, `status`, `code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `status` | [`ValidationStatus`](../enums/ValidationStatus.md) |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:9

## Properties

### code

• **code**: [`ValidationCode`](../enums/ValidationCode.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:7

___

### message

• **message**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:5

___

### status

• **status**: [`ValidationStatus`](../enums/ValidationStatus.md)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:6

## Methods

### equals

▸ **equals**(`otherValidation?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherValidation?` | [`FieldValidation`](FieldValidation.md) |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:47

___

### isError

▸ **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:23

___

### isLoading

▸ **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:15

___

### isNotLoading

▸ **isNotLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:19

___

### isNotOK

▸ **isNotOK**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:35

___

### isNotValidated

▸ **isNotValidated**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:43

___

### isOK

▸ **isOK**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:31

___

### isValidated

▸ **isValidated**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:39

___

### isWarning

▸ **isWarning**(): `boolean`

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:27
