---
id: UseCollectionOptions
title: UseCollectionOptions
sidebar_label: UseCollectionOptions
---

import Details from "@theme/Details"


```tsx
__type(result: CollectionFetcherResult<T>): void | CollectionFetcherResult<T> | Promise<undefined | CollectionFetcherResult<T>>
```
<br/>



### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| active | T[] |  |
| adapter | [ItemAdapter](/framework-api/types/ItemAdapter.md)<T\> |  |
| auth | boolean \| [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| autoload | boolean |  |
| body | null \| BodyInit | A BodyInit object or null to set request's body. |
| brokerable | boolean |  |
| cache | RequestCache | A string indicating how the request will interact with the browser's cache to set request's cache. |
| comparator | [QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\> |  |
| comparators | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[QuerySortComparator](/framework-api/types/QuerySortComparator.md)<T\>\> |  |
| credentials | RequestCredentials | A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. |
| dataKey | string |  |
| delayLoading | number |  |
| disabled | T[] |  |
| fetcher | [CollectionFetcher](/framework-api/types/CollectionFetcher.md)<T\> |  |
| fetchOnce | boolean |  |
| hasMoreKey | string |  |
| headers | HeadersInit | A Headers object, an object literal, or an array of two-item arrays to set request's headers. |
| highlighted | T[] |  |
| initialFields | string[] |  |
| initialFilter | [QueryFilter](/framework-api/interfaces/QueryFilter.md) \| [QueryFilterCriteria](/framework-api/interfaces/QueryFilterCriteria.md) \| [QueryFilterOrCriteria](/framework-api/types/QueryFilterOrCriteria.md)[] |  |
| initialLimit | number |  |
| initialOffset | number |  |
| initialParams | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| initialSearch | [Primitive](/framework-api/types/Primitive.md) |  |
| initialSort | [QuerySortDir](/framework-api/types/QuerySortDir.md) |  |
| initialSortBy | string \| [QuerySortBy](/framework-api/types/QuerySortBy.md) \| [QuerySortBy](/framework-api/types/QuerySortBy.md)[] |  |
| integrity | string | A cryptographic hash of the resource to be fetched by request. Sets request's integrity. |
| keepalive | boolean | A boolean to set request's keepalive. |
| method | [HttpMethod](/framework-api/enum/HttpMethod.md) |  |
| mode | RequestMode | A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. |
| mutateUrl | boolean |  |
| onFetchError | [ErrorCallback](/framework-api/types/ErrorCallback.md) |  |
| onFetchSuccess |  |  |
| params | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| query | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| queryEngine | [QueryEngine](/framework-api/types/QueryEngine.md)<T, I\> |  |
| redirect | RequestRedirect | A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. |
| referrer | string | A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. |
| referrerPolicy | ReferrerPolicy | A referrer policy to set request's referrerPolicy. |
| searcher | [QuerySearcher](/framework-api/types/QuerySearcher.md)<T\> |  |
| selected | T[] |  |
| serializer | [QuerySerializer](/framework-api/types/QuerySerializer.md) |  |
| signal | null \| AbortSignal | An AbortSignal to set request's signal. |
| throttle | number |  |
| totalKey | string |  |
| window | null | Can only be null. Used to disassociate request from any Window. |


</div></Details>