---
id: useCollectionProxy
title: useCollectionProxy
sidebar_label: useCollectionProxy
---

import Details from "@theme/Details"


```tsx
useCollectionProxy<T,I,S,C>(dataSource: undefined | string | CollectionProxy<T, I, CollectionState<T, I>, Collection<T, I, CollectionState<T, I>>> | T[],ctor: Class<C>,initialState: S): CollectionProxy<T, I, S, C>
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **ctor** | [Class](/framework-api/types/Class.md)<C\> |  |
| **dataSource** | undefined \| string \| [CollectionProxy](/framework-api/types/CollectionProxy.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>, [Collection](/framework-api/types/Collection.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>\>\> \| T[] |  |
| **initialState** | S |  |


