---
id: CollectionOptions
title: CollectionOptions
sidebar_label: CollectionOptions
---

import Details from "@theme/Details"




### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| active | T[] |  |
| adapter | [ItemAdapter](/framework-api/types/ItemAdapter.md)<T\> |  |
| autoload | boolean |  |
| brokerable | boolean |  |
| comparator | [QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\> |  |
| comparators | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\>\> |  |
| dataKey | string |  |
| disabled | T[] |  |
| fetcher | [CollectionFetcher](/framework-api/types/CollectionFetcher.md)<T\> |  |
| fetchOnce | boolean |  |
| hasMoreKey | string |  |
| highlighted | T[] |  |
| initialFields | string[] |  |
| initialFilter | [QueryFilter](/framework-api/interfaces/QueryFilter.md) \| [QueryFilterCriteria](/framework-api/interfaces/QueryFilterCriteria.md) \| [QueryFilterOrCriteria](/framework-api/types/QueryFilterOrCriteria.md)[] |  |
| initialLimit | number |  |
| initialOffset | number |  |
| initialParams | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| initialSearch | [Primitive](/framework-api/types/Primitive.md) |  |
| initialSort | [QuerySortDir](/framework-api/types/QuerySortDir.md) |  |
| initialSortBy | string \| [QuerySortBy](/framework-api/types/QuerySortBy.md) \| [QuerySortBy](/framework-api/types/QuerySortBy.md)[] |  |
| method | [HttpMethod](/framework-api/enum/HttpMethod.md) |  |
| mutateUrl | boolean |  |
| queryEngine | [QueryEngine](/framework-api/types/QueryEngine.md)<T, I\> |  |
| searcher | [QuerySearcher](/framework-api/types/QuerySearcher.md)<T\> |  |
| selected | T[] |  |
| serializer | [QuerySerializer](/framework-api/types/QuerySerializer.md) |  |
| throttle | number |  |
| totalKey | string |  |


</div></Details>