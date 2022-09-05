---
id: CollectionOptions
title: CollectionOptions
sidebar_label: CollectionOptions
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| active |  |  |
| adapter | [ItemAdapter](/framework-api/types/ItemAdapter.md)<T\> |  |
| autoload | boolean |  |
| comparator | [QuerySortComparator](/framework-api/types/QuerySortComparator.md) |  |
| comparators | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[QuerySortComparator](/framework-api/types/QuerySortComparator.md)\> |  |
| dataKey | string |  |
| disabled |  |  |
| fetcher | [CollectionFetcher](/framework-api/types/CollectionFetcher.md)<T\> |  |
| fetchOnce | boolean |  |
| hasMoreKey | string |  |
| highlighted |  |  |
| initialFields |  |  |
| initialFilter | [QueryFilter](/framework-api/interfaces/QueryFilter.md) \| [QueryFilterCriteria](/framework-api/interfaces/QueryFilterCriteria.md) \|  |  |
| initialLimit | number |  |
| initialOffset | number |  |
| initialParams | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| initialSearch | [Primitive](/framework-api/types/Primitive.md) |  |
| initialSort | [QuerySortDir](/framework-api/types/QuerySortDir.md) |  |
| initialSortBy | string \| [QuerySortBy](/framework-api/types/QuerySortBy.md) \|  |  |
| method | [HttpMethod](/framework-api/enum/HttpMethod.md) |  |
| mutateUrl | boolean |  |
| queryEngine | [QueryEngine](/framework-api/types/QueryEngine.md)<T, I\> |  |
| searcher | [QuerySearcher](/framework-api/types/QuerySearcher.md)<T\> |  |
| selected |  |  |
| serializer | [QuerySerializer](/framework-api/types/QuerySerializer.md) |  |
| throttle | number |  |
| totalKey | string |  |
