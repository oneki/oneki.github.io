---
id: "AppProps"
title: "Interface: AppProps"
sidebar_label: "AppProps"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`AppProps`**

  ↳ [`AppStateProps`](AppStateProps.md)

## Properties

### ErrorBoundaryComponent

• `Optional` **ErrorBoundaryComponent**: `ComponentType`<[`ErrorBoundaryComponentProps`](../types/ErrorBoundaryComponentProps.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:23

___

### LoadingComponent

• `Optional` **LoadingComponent**: `ElementType`<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:19

___

### i18nNs

• `Optional` **i18nNs**: `string`[]

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:22

___

### initialLocale

• `Optional` **initialLocale**: `string`

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:20

___

### initialState

• `Optional` **initialState**: [`AnyState`](AnyState.md) \| `Promise`<[`AnyState`](AnyState.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:17

___

### services

• `Optional` **services**: [`Class`](../types/Class.md)<[`DefaultService`](../classes/DefaultService.md)<[`AnyState`](AnyState.md)\>\>[]

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:18

___

### settings

• `Optional` **settings**: [`AppSettings`](AppSettings.md) \| `Promise`<[`AppSettings`](AppSettings.md)\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:15

___

### store

• `Optional` **store**: [`AppStore`](AppStore.md)<`any`, `AnyAction`\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:16

___

### translations

• `Optional` **translations**: [`AnonymousObject`](AnonymousObject.md)<[`AnonymousObject`](AnonymousObject.md)<`string`\>\>

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:21
