---
id: defaultQueryEngine
title: defaultQueryEngine
sidebar_label: defaultQueryEngine
---

import Details from "@theme/Details"


```tsx
defaultQueryEngine<T,I>(items: I[],query: LocalQuery,comparator: QuerySortComparator<T>,comparators: AnonymousObject<QuerySortComparator<T>>,searcher: QuerySearcher<T>): I[]
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **comparator** | [QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\> |  |
| **comparators** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\>\> |  |
| **items** | I[] |  |
| **query** | [LocalQuery](/framework-api/types/LocalQuery.md) |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| searcher | [QuerySearcher](/framework-api/types/QuerySearcher.md)<T\> |  |


</div></Details>