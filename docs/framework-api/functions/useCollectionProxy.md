---
id: useCollectionProxy
title: useCollectionProxy
sidebar_label: useCollectionProxy
---

```tsx
useCollectionProxy<T,I,S,C>(dataSource: undefined | string | CollectionProxy<T, I, CollectionState<T, I>, Collection<T, I, CollectionState<T, I>>> | ,ctor: Class<C>,initialState: S): CollectionProxy<T, I, S, C>
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **ctor** | [Class](/framework-api/types/Class.md)<C\> |  |
| **dataSource** | undefined \| string \| [CollectionProxy](/framework-api/types/CollectionProxy.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>, [Collection](/framework-api/types/Collection.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>\>\> \|  |  |
| **initialState** | S |  |


### Return



The return is of type <code>[CollectionProxy](/framework-api/types/CollectionProxy.md)<T, I, S, C\></code>