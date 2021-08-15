---
id: "Router"
title: "Interface: Router"
sidebar_label: "Router"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`BaseRouter`](../classes/BaseRouter.md)

## Properties

### hash

• `Readonly` **hash**: `undefined` \| ``null`` \| [`ParsedQuery`](ParsedQuery.md)<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:68

___

### history

• **history**: [`Location`](Location.md)[]

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:75

___

### href

• `Readonly` **href**: `undefined` \| ``null`` \| `string`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:70

___

### i18n

• **i18n**: [`I18n`](I18n.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:74

___

### location

• `Readonly` **location**: [`Location`](Location.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:66

___

### params

• **params**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:76

___

### pathname

• `Readonly` **pathname**: ``null`` \| `string`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:71

___

### previousLocation

• `Readonly` **previousLocation**: [`Location`](Location.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:67

___

### query

• `Readonly` **query**: `undefined` \| ``null`` \| [`ParsedQuery`](ParsedQuery.md)<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:69

___

### route

• `Optional` **route**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:77

___

### settings

• **settings**: [`AppSettings`](AppSettings.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:73

___

### state

• `Readonly` **state**: `undefined` \| ``null`` \| [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:72

## Methods

### back

▸ **back**(`delta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:78

___

### deleteOrigin

▸ **deleteOrigin**(): `void`

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:79

___

### forward

▸ **forward**(`delta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:80

___

### getLinkComponent

▸ **getLinkComponent**(`props`, `ref`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LinkProps`](../types/LinkProps.md) |
| `ref` | ``null`` \| `MutableRefObject`<``null`` \| `HTMLAnchorElement`\> \| (`instance`: ``null`` \| `HTMLAnchorElement`) => `void` |

#### Returns

`Element`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:82

___

### getOrigin

▸ **getOrigin**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `from` | `string` |

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:86

___

### getReactContext

▸ **getReactContext**(): `Context`<`any`\>

#### Returns

`Context`<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:81

___

### init

▸ **init**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`AppSettings`](AppSettings.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:87

___

### listen

▸ **listen**(`callback`): [`UnregisterCallback`](../types/UnregisterCallback.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`LocationChangeCallback`](../types/LocationChangeCallback.md) |

#### Returns

[`UnregisterCallback`](../types/UnregisterCallback.md)

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:88

___

### push

▸ **push**(`urlOrLocation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](Location.md) |
| `options?` | [`RouterPushOptions`](RouterPushOptions.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:89

___

### replace

▸ **replace**(`urlOrLocation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](Location.md) |
| `options?` | [`RouterPushOptions`](RouterPushOptions.md) |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:90

___

### saveOrigin

▸ **saveOrigin**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/router.ts:91
