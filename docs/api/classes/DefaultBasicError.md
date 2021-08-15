---
id: "DefaultBasicError"
title: "Class: DefaultBasicError"
sidebar_label: "DefaultBasicError"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Error`

  ↳ **`DefaultBasicError`**

  ↳↳ [`HTTPError`](HTTPError.md)

## Implements

- [`BasicError`](../interfaces/BasicError.md)

## Constructors

### constructor

• **new DefaultBasicError**(`message`, `code?`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code?` | `string` \| `number` |
| `payload` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Overrides

Error.constructor

#### Defined in

onekijs/packages/onekijs-framework/src/core/BasicError.ts:7

## Properties

### code

• **code**: `string` \| `number`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[code](../interfaces/BasicError.md#code)

#### Defined in

onekijs/packages/onekijs-framework/src/core/BasicError.ts:5

___

### message

• **message**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[message](../interfaces/BasicError.md#message)

#### Inherited from

Error.message

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[name](../interfaces/BasicError.md#name)

#### Inherited from

Error.name

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.es5.d.ts:973

___

### payload

• **payload**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Implementation of

[BasicError](../interfaces/BasicError.md).[payload](../interfaces/BasicError.md#payload)

#### Defined in

onekijs/packages/onekijs-framework/src/core/BasicError.ts:6

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[stack](../interfaces/BasicError.md#stack)

#### Inherited from

Error.stack

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

onekijs/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

onekijs/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

onekijs/node_modules/@types/node/globals.d.ts:4
