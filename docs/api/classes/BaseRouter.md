---
id: "BaseRouter"
title: "Class: BaseRouter"
sidebar_label: "BaseRouter"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`BaseRouter`**

  ↳ [`LocalRouter`](LocalRouter.md)

## Implements

- [`Router`](../interfaces/Router.md)

## Constructors

### constructor

• **new BaseRouter**()

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:26

## Properties

### history

• **history**: [`Location`](../interfaces/Location.md)[]

#### Implementation of

[Router](../interfaces/Router.md).[history](../interfaces/Router.md#history)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:22

___

### i18n

• **i18n**: [`I18n`](../interfaces/I18n.md) = `{}`

#### Implementation of

[Router](../interfaces/Router.md).[i18n](../interfaces/Router.md#i18n)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:21

___

### params

• **params**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> = `{}`

#### Implementation of

[Router](../interfaces/Router.md).[params](../interfaces/Router.md#params)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:23

___

### route

• `Optional` **route**: `string`

#### Implementation of

[Router](../interfaces/Router.md).[route](../interfaces/Router.md#route)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:24

___

### settings

• **settings**: [`AppSettings`](../interfaces/AppSettings.md) = `{}`

#### Implementation of

[Router](../interfaces/Router.md).[settings](../interfaces/Router.md#settings)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:20

## Accessors

### hash

• `get` **hash**(): `undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Returns

`undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Implementation of

[Router](../interfaces/Router.md).[hash](../interfaces/Router.md#hash)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:38

___

### href

• `get` **href**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Implementation of

[Router](../interfaces/Router.md).[href](../interfaces/Router.md#href)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:46

___

### location

• `get` **location**(): [`Location`](../interfaces/Location.md)

#### Returns

[`Location`](../interfaces/Location.md)

#### Implementation of

[Router](../interfaces/Router.md).[location](../interfaces/Router.md#location)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:30

___

### pathname

• `get` **pathname**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[Router](../interfaces/Router.md).[pathname](../interfaces/Router.md#pathname)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:50

___

### previousLocation

• `get` **previousLocation**(): [`Location`](../interfaces/Location.md)

#### Returns

[`Location`](../interfaces/Location.md)

#### Implementation of

[Router](../interfaces/Router.md).[previousLocation](../interfaces/Router.md#previouslocation)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:34

___

### query

• `get` **query**(): `undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Returns

`undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Implementation of

[Router](../interfaces/Router.md).[query](../interfaces/Router.md#query)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:42

___

### state

• `get` **state**(): `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Returns

`undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Implementation of

[Router](../interfaces/Router.md).[state](../interfaces/Router.md#state)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:54

## Methods

### \_pushLocation

▸ **_pushLocation**(`location`, `replace?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `location` | [`Location`](../interfaces/Location.md) | `undefined` |
| `replace` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:130

___

### back

▸ `Abstract` **back**(`delta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[back](../interfaces/Router.md#back)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:58

___

### deleteOrigin

▸ **deleteOrigin**(): `void`

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[deleteOrigin](../interfaces/Router.md#deleteorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:60

___

### forward

▸ `Abstract` **forward**(`delta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[forward](../interfaces/Router.md#forward)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:64

___

### getLinkComponent

▸ `Abstract` **getLinkComponent**(`props`, `ref`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LinkProps`](../types/LinkProps.md) |
| `ref` | ``null`` \| `MutableRefObject`<``null`` \| `HTMLAnchorElement`\> \| (`instance`: ``null`` \| `HTMLAnchorElement`) => `void` |

#### Returns

`Element`

#### Implementation of

[Router](../interfaces/Router.md).[getLinkComponent](../interfaces/Router.md#getlinkcomponent)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:66

___

### getOrigin

▸ **getOrigin**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `from` | `string` |

#### Implementation of

[Router](../interfaces/Router.md).[getOrigin](../interfaces/Router.md#getorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:75

___

### getReactContext

▸ **getReactContext**(): `Context`<`any`\>

#### Returns

`Context`<`any`\>

#### Implementation of

[Router](../interfaces/Router.md).[getReactContext](../interfaces/Router.md#getreactcontext)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:71

___

### init

▸ **init**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`AppSettings`](../interfaces/AppSettings.md) |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[init](../interfaces/Router.md#init)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:80

___

### listen

▸ `Abstract` **listen**(`callback`): [`UnregisterCallback`](../types/UnregisterCallback.md)

callback(url) where url is:
{
  url: string, // example: /users/1?test=1&test2#h=3&h2
  route: string, // example: /users/[id]
  pathname: string, // example: /users/1
  query: obj, // example: {test:1,test2:null}
  hash: obj // example: {h:3, h2:null}
  state: obj // example: {key1: 'value1'}
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`LocationChangeCallback`](../types/LocationChangeCallback.md) |

#### Returns

[`UnregisterCallback`](../types/UnregisterCallback.md)

#### Implementation of

[Router](../interfaces/Router.md).[listen](../interfaces/Router.md#listen)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:95

___

### push

▸ `Abstract` **push**(`urlOrLocation`, `options?`): `void`

url can be a string or a location.
If location, the format is the following
{
  url: string, // example: /users/1?test=1&test2#h=3&h2
  route: string, // example: /users/[id]
  pathname: string, // example: /users/1
  query: obj, // example: {test:1,test2:null}
  hash: obj // example: {h:3, h2:null}
  state: obj // example: {key1: 'value1'}
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](../interfaces/Location.md) |
| `options?` | [`RouterPushOptions`](../interfaces/RouterPushOptions.md) |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[push](../interfaces/Router.md#push)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:109

___

### replace

▸ `Abstract` **replace**(`urlOrLocation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](../interfaces/Location.md) |
| `options?` | [`RouterPushOptions`](../interfaces/RouterPushOptions.md) |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[replace](../interfaces/Router.md#replace)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:111

___

### saveOrigin

▸ **saveOrigin**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `true` |

#### Returns

`void`

#### Implementation of

[Router](../interfaces/Router.md).[saveOrigin](../interfaces/Router.md#saveorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:113
