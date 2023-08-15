---
id: AppExtraFetchOptions
title: AppExtraFetchOptions
sidebar_label: AppExtraFetchOptions
---

import Details from "@theme/Details"




### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| auth | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| body | null \| BodyInit | A BodyInit object or null to set request's body. |
| cache | RequestCache | A string indicating how the request will interact with the browser's cache to set request's cache. |
| credentials | RequestCredentials | A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. |
| delayLoading | number |  |
| fetcher | [Fetcher](/framework-api/types/Fetcher.md)<T\> |  |
| headers | HeadersInit | A Headers object, an object literal, or an array of two-item arrays to set request's headers. |
| identity | string |  |
| integrity | string | A cryptographic hash of the resource to be fetched by request. Sets request's integrity. |
| keepalive | boolean | A boolean to set request's keepalive. |
| method | [FetchMethod](/framework-api/types/FetchMethod.md) |  |
| mode | RequestMode | A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. |
| onError | [AppErrorCallback](/framework-api/types/AppErrorCallback.md) |  |
| onSuccess | [AppSuccessCallback](/framework-api/types/AppSuccessCallback.md)<T\> |  |
| params | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| query | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| redirect | RequestRedirect | A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. |
| referrer | string | A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. |
| referrerPolicy | ReferrerPolicy | A referrer policy to set request's referrerPolicy. |
| signal | null \| AbortSignal | An AbortSignal to set request's signal. |
| url | string |  |
| window | null | Can only be null. Used to disassociate request from any Window. |


</div></Details>