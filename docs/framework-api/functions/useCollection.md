---
id: useCollection
title: useCollection
sidebar_label: useCollection
---

import Details from "@theme/Details"


```tsx
useCollection<T>(dataSource: undefined | string | CollectionProxy<T> | T[],options: UseCollectionOptions<T, Item<T>>): CollectionProxy<T>
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **dataSource** | undefined \| string \| [CollectionProxy](/framework-api/types/CollectionProxy.md)<T\> \| T[] |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| options | [UseCollectionOptions](/framework-api/interfaces/UseCollectionOptions.md)<T, [Item](/framework-api/types/Item.md)<T\>\> |  |


</div></Details>