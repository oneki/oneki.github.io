---
id: "ContainerValidation"
title: "Class: ContainerValidation"
sidebar_label: "ContainerValidation"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`FieldValidation`](FieldValidation.md)

  ↳ **`ContainerValidation`**

## Constructors

### constructor

• **new ContainerValidation**(`message`, `status`, `code`, `fields`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `status` | [`ValidationStatus`](../enums/ValidationStatus.md) |
| `code` | [`ValidationCode`](../enums/ValidationCode.md) |
| `fields` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`string`\> |

#### Overrides

[FieldValidation](FieldValidation.md).[constructor](FieldValidation.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/form/ContainerValidation.ts:8

## Properties

### code

• **code**: [`ValidationCode`](../enums/ValidationCode.md)

#### Inherited from

[FieldValidation](FieldValidation.md).[code](FieldValidation.md#code)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:7

___

### fields

• **fields**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/form/ContainerValidation.ts:7

___

### message

• **message**: `string`

#### Inherited from

[FieldValidation](FieldValidation.md).[message](FieldValidation.md#message)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:5

___

### status

• **status**: [`ValidationStatus`](../enums/ValidationStatus.md)

#### Inherited from

[FieldValidation](FieldValidation.md).[status](FieldValidation.md#status)

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

#### Inherited from

[FieldValidation](FieldValidation.md).[equals](FieldValidation.md#equals)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:47

___

### isError

▸ **isError**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isError](FieldValidation.md#iserror)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:23

___

### isLoading

▸ **isLoading**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isLoading](FieldValidation.md#isloading)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:15

___

### isNotLoading

▸ **isNotLoading**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isNotLoading](FieldValidation.md#isnotloading)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:19

___

### isNotOK

▸ **isNotOK**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isNotOK](FieldValidation.md#isnotok)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:35

___

### isNotValidated

▸ **isNotValidated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isNotValidated](FieldValidation.md#isnotvalidated)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:43

___

### isOK

▸ **isOK**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isOK](FieldValidation.md#isok)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:31

___

### isValidated

▸ **isValidated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isValidated](FieldValidation.md#isvalidated)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:39

___

### isWarning

▸ **isWarning**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FieldValidation](FieldValidation.md).[isWarning](FieldValidation.md#iswarning)

#### Defined in

onekijs/packages/onekijs-framework/src/form/FieldValidation.ts:27
