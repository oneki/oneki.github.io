---
id: AppStore
title: AppStore
sidebar_label: AppStore
---

```tsx
__type(namespace: string,saga: Saga<>,name: string): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **cancelSaga** |  |  |
| **getState** | getState(): S | Reads the state tree managed by the store. |
| **injectReducers** |  |  |
| **removeReducers** |  |  |
| **replaceReducer** | replaceReducer(nextReducer: Reducer<S, A\>): void | Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to  
load some of the reducers dynamically. You might also need this if you  
implement a hot reloading mechanism for Redux. |
| **runSaga** |  |  |
| **subscribe** | subscribe(listener: ): Unsubscribe | Adds a change listener. It will be called any time an action is  
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
state by the time it exits. |
| dispatch | Dispatch<A\> | Dispatches an action. It is the only way to trigger a state change.<br/><br/>The <code>reducer</code> function, used to create the store, will be called with the<br/>current state tree and the given <code>action</code>. Its return value will be<br/>considered the **next** state of the tree, and the change listeners will<br/>be notified.<br/><br/>The base implementation only supports plain object actions. If you want<br/>to dispatch a Promise, an Observable, a thunk, or something else, you<br/>need to wrap your store creating function into the corresponding<br/>middleware. For example, see the documentation for the <code>redux-thunk</code><br/>package. Even the middleware will eventually dispatch plain object<br/>actions using this method. |
