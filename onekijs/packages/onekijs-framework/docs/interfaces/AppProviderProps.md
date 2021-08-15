---
id: "AppProviderProps"
title: "Interface: AppProviderProps"
sidebar_label: "AppProviderProps"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Omit`<[`AppProps`](AppProps.md), ``"initialState"`` \| ``"LoadingComponent"``\>

  ↳ **`AppProviderProps`**

## Properties

### ErrorBoundaryComponent

• `Optional` **ErrorBoundaryComponent**: `ComponentType`<[`ErrorBoundaryComponentProps`](../types/ErrorBoundaryComponentProps.md)\>

#### Inherited from

Omit.ErrorBoundaryComponent

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:23

___

### i18nNs

• `Optional` **i18nNs**: `string`[]

#### Inherited from

Omit.i18nNs

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:22

___

### initialLocale

• `Optional` **initialLocale**: `string`

#### Inherited from

Omit.initialLocale

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:20

___

### router

• **router**: [`Router`](Router.md)

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:28

___

### services

• `Optional` **services**: [`Class`](../types/Class.md)<[`DefaultService`](../classes/DefaultService.md)<[`AnyState`](AnyState.md)\>\>[]

#### Inherited from

Omit.services

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:18

___

### settings

• **settings**: [`AppSettings`](AppSettings.md)

#### Overrides

Omit.settings

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:26

___

### store

• **store**: [`AppStore`](AppStore.md)<`any`, `AnyAction`\>

#### Overrides

Omit.store

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:27

___

### translations

• `Optional` **translations**: [`AnonymousObject`](AnonymousObject.md)<[`AnonymousObject`](AnonymousObject.md)<`string`\>\>

#### Inherited from

Omit.translations

#### Defined in

onekijs/packages/onekijs-framework/src/app/typings.ts:21
