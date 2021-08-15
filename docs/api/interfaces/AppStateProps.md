---
id: "AppStateProps"
title: "Interface: AppStateProps"
sidebar_label: "AppStateProps"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`AppProps`](AppProps.md)

  ↳ **`AppStateProps`**

## Properties

### ErrorBoundaryComponent

• `Optional` **ErrorBoundaryComponent**: `ComponentType`<[`ErrorBoundaryComponentProps`](../types/ErrorBoundaryComponentProps.md)\>

#### Inherited from

[AppProps](AppProps.md).[ErrorBoundaryComponent](AppProps.md#errorboundarycomponent)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:23

___

### LoadingComponent

• `Optional` **LoadingComponent**: `ElementType`<`any`\>

#### Inherited from

[AppProps](AppProps.md).[LoadingComponent](AppProps.md#loadingcomponent)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:19

___

### i18nNs

• `Optional` **i18nNs**: `string`[]

#### Inherited from

[AppProps](AppProps.md).[i18nNs](AppProps.md#i18nns)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:22

___

### initialLocale

• `Optional` **initialLocale**: `string`

#### Inherited from

[AppProps](AppProps.md).[initialLocale](AppProps.md#initiallocale)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:20

___

### initialState

• `Optional` **initialState**: [`AnyState`](AnyState.md) \| `Promise`<[`AnyState`](AnyState.md)\>

#### Inherited from

[AppProps](AppProps.md).[initialState](AppProps.md#initialstate)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:17

___

### router

• **router**: [`Router`](Router.md)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:32

___

### services

• `Optional` **services**: [`Class`](../types/Class.md)<[`DefaultService`](../classes/DefaultService.md)<[`AnyState`](AnyState.md)\>\>[]

#### Inherited from

[AppProps](AppProps.md).[services](AppProps.md#services)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:18

___

### settings

• `Optional` **settings**: [`AppSettings`](AppSettings.md) \| `Promise`<[`AppSettings`](AppSettings.md)\>

#### Inherited from

[AppProps](AppProps.md).[settings](AppProps.md#settings)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:15

___

### store

• `Optional` **store**: [`AppStore`](AppStore.md)<`any`, `AnyAction`\>

#### Inherited from

[AppProps](AppProps.md).[store](AppProps.md#store)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:16

___

### translations

• `Optional` **translations**: [`AnonymousObject`](AnonymousObject.md)<[`AnonymousObject`](AnonymousObject.md)<`string`\>\>

#### Inherited from

[AppProps](AppProps.md).[translations](AppProps.md#translations)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:21
