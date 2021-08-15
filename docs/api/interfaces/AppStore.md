---
id: "AppStore"
title: "Interface: AppStore<S, A>"
sidebar_label: "AppStore"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `any` |
| `A` | extends `Action``AnyAction` |

## Hierarchy

- `Store`<`S`, `A`\>

  ↳ **`AppStore`**

## Properties

### [reducersSymbol]

• **[reducersSymbol]**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:17

___

### [sagasSymbol]

• **[sagasSymbol]**: [`AnonymousObject`](AnonymousObject.md)<`any`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:18

___

### dispatch

• **dispatch**: `Dispatch`<`A`\>

Dispatches an action. It is the only way to trigger a state change.

The `reducer` function, used to create the store, will be called with the
current state tree and the given `action`. Its return value will be
considered the **next** state of the tree, and the change listeners will
be notified.

The base implementation only supports plain object actions. If you want
to dispatch a Promise, an Observable, a thunk, or something else, you
need to wrap your store creating function into the corresponding
middleware. For example, see the documentation for the `redux-thunk`
package. Even the middleware will eventually dispatch plain object
actions using this method.

**`param`** A plain object representing “what changed”. It is a good
  idea to keep actions serializable so you can record and replay user
  sessions, or use the time travelling `redux-devtools`. An action must
  have a `type` property which may not be `undefined`. It is a good idea
  to use string constants for action types.

**`returns`** For convenience, the same action object you dispatched.

Note that, if you use a custom middleware, it may wrap `dispatch()` to
return something else (for example, a Promise you can await).

#### Inherited from

Store.dispatch

#### Defined in

onekijs/node_modules/redux/index.d.ts:292

## Methods

### [observable]

▸ **[observable]**(): `Observable`<`S`\>

Interoperability point for observable/reactive libraries.

#### Returns

`Observable`<`S`\>

A minimal observable of state changes.
For more information, see the observable proposal:
https://github.com/tc39/proposal-observable

#### Inherited from

Store.\_\_@observable@28283

#### Defined in

onekijs/node_modules/redux/index.d.ts:344

___

### cancelSaga

▸ **cancelSaga**(`namespace`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `name` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:20

___

### getState

▸ **getState**(): `S`

Reads the state tree managed by the store.

#### Returns

`S`

The current state tree of your application.

#### Inherited from

Store.getState

#### Defined in

onekijs/node_modules/redux/index.d.ts:299

___

### injectReducers

▸ **injectReducers**(`bind`, `namespace`, `reducers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bind` | [`Service`](Service.md)<[`AnyState`](AnyState.md)\> |
| `namespace` | `string` |
| `reducers` | [`AnonymousObject`](AnonymousObject.md)<`any`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:21

___

### removeReducers

▸ **removeReducers**(`namespace`, `reducers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `reducers` | [`AnonymousObject`](AnonymousObject.md)<`any`\> |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:22

___

### replaceReducer

▸ **replaceReducer**(`nextReducer`): `void`

Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to
load some of the reducers dynamically. You might also need this if you
implement a hot reloading mechanism for Redux.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextReducer` | `Reducer`<`S`, `A`\> | The reducer for the store to use instead. |

#### Returns

`void`

#### Inherited from

Store.replaceReducer

#### Defined in

onekijs/node_modules/redux/index.d.ts:336

___

### runSaga

▸ **runSaga**(`namespace`, `saga`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `saga` | [`Saga`](../types/Saga.md)<`any`[]\> |
| `name` | `string` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/types/app.ts:19

___

### subscribe

▸ **subscribe**(`listener`): `Unsubscribe`

Adds a change listener. It will be called any time an action is
dispatched, and some part of the state tree may potentially have changed.
You may then call `getState()` to read the current state tree inside the
callback.

You may call `dispatch()` from a change listener, with the following
caveats:

1. The subscriptions are snapshotted just before every `dispatch()` call.
If you subscribe or unsubscribe while the listeners are being invoked,
this will not have any effect on the `dispatch()` that is currently in
progress. However, the next `dispatch()` call, whether nested or not,
will use a more recent snapshot of the subscription list.

2. The listener should not expect to see all states changes, as the state
might have been updated multiple times during a nested `dispatch()` before
the listener is called. It is, however, guaranteed that all subscribers
registered before the `dispatch()` started will be called with the latest
state by the time it exits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | () => `void` | A callback to be invoked on every dispatch. |

#### Returns

`Unsubscribe`

A function to remove this change listener.

#### Inherited from

Store.subscribe

#### Defined in

onekijs/node_modules/redux/index.d.ts:325
