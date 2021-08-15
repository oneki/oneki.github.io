---
id: "HTTPError"
title: "Class: HTTPError"
sidebar_label: "HTTPError"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`DefaultBasicError`](DefaultBasicError.md)

  ↳ **`HTTPError`**

## Implements

- [`BasicError`](../interfaces/BasicError.md)

## Constructors

### constructor

• **new HTTPError**(`code`, `message?`, `payload?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| `number` |
| `message?` | `string` |
| `payload` | [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> |

#### Overrides

[DefaultBasicError](DefaultBasicError.md).[constructor](DefaultBasicError.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/core/HTTPError.ts:73

## Properties

### code

• **code**: `string` \| `number`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[code](../interfaces/BasicError.md#code)

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[code](DefaultBasicError.md#code)

#### Defined in

onekijs/packages/onekijs-framework/src/core/BasicError.ts:5

___

### message

• **message**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[message](../interfaces/BasicError.md#message)

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[message](DefaultBasicError.md#message)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[name](../interfaces/BasicError.md#name)

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[name](DefaultBasicError.md#name)

#### Defined in

oneki.github.io/node_modules/typescript/lib/lib.es5.d.ts:973

___

### payload

• **payload**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Implementation of

[BasicError](../interfaces/BasicError.md).[payload](../interfaces/BasicError.md#payload)

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[payload](DefaultBasicError.md#payload)

#### Defined in

onekijs/packages/onekijs-framework/src/core/BasicError.ts:6

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

[BasicError](../interfaces/BasicError.md).[stack](../interfaces/BasicError.md#stack)

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[stack](DefaultBasicError.md#stack)

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

[DefaultBasicError](DefaultBasicError.md).[prepareStackTrace](DefaultBasicError.md#preparestacktrace)

#### Defined in

onekijs/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[DefaultBasicError](DefaultBasicError.md).[stackTraceLimit](DefaultBasicError.md#stacktracelimit)

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

[DefaultBasicError](DefaultBasicError.md).[captureStackTrace](DefaultBasicError.md#capturestacktrace)

#### Defined in

onekijs/node_modules/@types/node/globals.d.ts:4
