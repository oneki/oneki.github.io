---
id: "LocalRouter"
title: "Class: LocalRouter"
sidebar_label: "LocalRouter"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`BaseRouter`](BaseRouter.md)

  ↳ **`LocalRouter`**

## Constructors

### constructor

• **new LocalRouter**()

#### Overrides

[BaseRouter](BaseRouter.md).[constructor](BaseRouter.md#constructor)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:10

## Properties

### history

• **history**: [`Location`](../interfaces/Location.md)[]

#### Inherited from

[BaseRouter](BaseRouter.md).[history](BaseRouter.md#history)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:22

___

### i18n

• **i18n**: [`I18n`](../interfaces/I18n.md) = `{}`

#### Inherited from

[BaseRouter](BaseRouter.md).[i18n](BaseRouter.md#i18n)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:21

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [x: `string`]: [`LocationChangeCallback`](../types/LocationChangeCallback.md)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:7

___

### params

• **params**: [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\> = `{}`

#### Inherited from

[BaseRouter](BaseRouter.md).[params](BaseRouter.md#params)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:23

___

### route

• `Optional` **route**: `string`

#### Inherited from

[BaseRouter](BaseRouter.md).[route](BaseRouter.md#route)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:24

___

### settings

• **settings**: [`AppSettings`](../interfaces/AppSettings.md) = `{}`

#### Inherited from

[BaseRouter](BaseRouter.md).[settings](BaseRouter.md#settings)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:20

## Accessors

### hash

• `get` **hash**(): `undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Returns

`undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:38

___

### href

• `get` **href**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:46

___

### location

• `get` **location**(): [`Location`](../interfaces/Location.md)

#### Returns

[`Location`](../interfaces/Location.md)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:30

___

### pathname

• `get` **pathname**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:50

___

### previousLocation

• `get` **previousLocation**(): [`Location`](../interfaces/Location.md)

#### Returns

[`Location`](../interfaces/Location.md)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:34

___

### query

• `get` **query**(): `undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Returns

`undefined` \| ``null`` \| [`ParsedQuery`](../interfaces/ParsedQuery.md)<`string`\>

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:42

___

### state

• `get` **state**(): `undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

#### Returns

`undefined` \| ``null`` \| [`AnonymousObject`](../interfaces/AnonymousObject.md)<`any`\>

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

#### Inherited from

[BaseRouter](BaseRouter.md).[_pushLocation](BaseRouter.md#_pushlocation)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:130

___

### \_pushOrReplace

▸ **_pushOrReplace**(`urlOrLocation`, `replace`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](../interfaces/Location.md) |
| `replace` | `boolean` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:41

___

### back

▸ **back**(): `void`

#### Returns

`void`

#### Overrides

[BaseRouter](BaseRouter.md).[back](BaseRouter.md#back)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:16

___

### deleteOrigin

▸ **deleteOrigin**(): `void`

#### Returns

`void`

#### Inherited from

[BaseRouter](BaseRouter.md).[deleteOrigin](BaseRouter.md#deleteorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:60

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Overrides

[BaseRouter](BaseRouter.md).[forward](BaseRouter.md#forward)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:19

___

### getLinkComponent

▸ **getLinkComponent**(): `Element`

#### Returns

`Element`

#### Overrides

[BaseRouter](BaseRouter.md).[getLinkComponent](BaseRouter.md#getlinkcomponent)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:23

___

### getOrigin

▸ **getOrigin**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `from` | `string` |

#### Inherited from

[BaseRouter](BaseRouter.md).[getOrigin](BaseRouter.md#getorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:75

___

### getReactContext

▸ **getReactContext**(): `Context`<`any`\>

#### Returns

`Context`<`any`\>

#### Inherited from

[BaseRouter](BaseRouter.md).[getReactContext](BaseRouter.md#getreactcontext)

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

#### Inherited from

[BaseRouter](BaseRouter.md).[init](BaseRouter.md#init)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:80

___

### listen

▸ **listen**(`callback`): [`UnregisterCallback`](../types/UnregisterCallback.md)

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

#### Overrides

[BaseRouter](BaseRouter.md).[listen](BaseRouter.md#listen)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:35

___

### push

▸ **push**(`urlOrLocation`): `void`

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

#### Returns

`void`

#### Overrides

[BaseRouter](BaseRouter.md).[push](BaseRouter.md#push)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:27

___

### replace

▸ **replace**(`urlOrLocation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrLocation` | `string` \| [`Location`](../interfaces/Location.md) |

#### Returns

`void`

#### Overrides

[BaseRouter](BaseRouter.md).[replace](BaseRouter.md#replace)

#### Defined in

onekijs/packages/onekijs-framework/src/router/LocalRouter.ts:31

___

### saveOrigin

▸ **saveOrigin**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[BaseRouter](BaseRouter.md).[saveOrigin](BaseRouter.md#saveorigin)

#### Defined in

onekijs/packages/onekijs-framework/src/router/Router.ts:113
