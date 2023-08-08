---
id: CollectionState
title: CollectionState
sidebar_label: CollectionState
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **dataKey** | string |  |
| **hasMoreKey** | string |  |
| **local** | boolean |  |
| **router** | [Router](/framework-api/interfaces/Router.md) |  |
| **totalKey** | string |  |
| active | string[] |  |
| adapter | [ItemAdapter](/framework-api/types/ItemAdapter.md)<T\> |  |
| autoload | boolean |  |
| brokerable | boolean |  |
| brokered | boolean |  |
| comparator | [QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\> |  |
| comparators | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\>\> |  |
| dataSource | string \| T[] |  |
| disabled | string[] |  |
| error | [BasicError](/framework-api/interfaces/BasicError.md) |  |
| fetching | boolean |  |
| fetchOnce | boolean |  |
| fetchOptions | [FetchOptions](/framework-api/interfaces/FetchOptions.md)<[CollectionFetcherResult](/framework-api/types/CollectionFetcherResult.md)<T\>\> |  |
| fields | string[] |  |
| filter | [QueryFilter](/framework-api/interfaces/QueryFilter.md) \| [QueryFilterCriteria](/framework-api/interfaces/QueryFilterCriteria.md) \| [QueryFilterOrCriteria](/framework-api/types/QueryFilterOrCriteria.md)[] |  |
| hasMore | boolean |  |
| highlighted | string[] |  |
| items | undefined \| I[] |  |
| limit | number |  |
| loading | boolean |  |
| method | [HttpMethod](/framework-api/enum/HttpMethod.md) |  |
| mutateUrl | boolean |  |
| offset | number |  |
| params | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| queryEngine | [QueryEngine](/framework-api/types/QueryEngine.md)<T, I\> |  |
| result | any |  |
| search | [Primitive](/framework-api/types/Primitive.md) |  |
| searcher | [QuerySearcher](/framework-api/types/QuerySearcher.md)<T\> |  |
| selected | string[] |  |
| serializer | [QuerySerializer](/framework-api/types/QuerySerializer.md) |  |
| sort | [QuerySortDir](/framework-api/types/QuerySortDir.md) |  |
| sortBy | string \| [QuerySortBy](/framework-api/types/QuerySortBy.md) \| [QuerySortBy](/framework-api/types/QuerySortBy.md)[] |  |
| status | [CollectionStatus](/framework-api/types/CollectionStatus.md) |  |
| task | Task<any\> |  |
| throttle | number |  |
| total | number |  |
| url | string |  |
