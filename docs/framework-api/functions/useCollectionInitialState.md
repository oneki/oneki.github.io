---
id: useCollectionInitialState
title: useCollectionInitialState
sidebar_label: useCollectionInitialState
---

import Details from "@theme/Details"


```tsx
useCollectionInitialState<T,I>(dataSource: undefined | string | CollectionProxy<T, I, CollectionState<T, I>, Collection<T, I, CollectionState<T, I>>> | T[],options: UseCollectionOptions<T, I>): CollectionState<T, I>
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **dataSource** | undefined \| string \| [CollectionProxy](/framework-api/types/CollectionProxy.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>, [Collection](/framework-api/types/Collection.md)<T, I, [CollectionState](/framework-api/interfaces/CollectionState.md)<T, I\>\>\> \| T[] |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| options | [UseCollectionOptions](/framework-api/interfaces/UseCollectionOptions.md)<T, I\> |  |


</div></Details>