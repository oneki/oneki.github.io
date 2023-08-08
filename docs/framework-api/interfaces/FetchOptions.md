---
id: FetchOptions
title: FetchOptions
sidebar_label: FetchOptions
---

```tsx
__type(result: R): void | R | Promise<undefined | R>
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| auth | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| auth | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> \| boolean |  |
| body | null \| BodyInit | A BodyInit object or null to set request's body. |
| cache | RequestCache | A string indicating how the request will interact with the browser's cache to set request's cache. |
| credentials | RequestCredentials | A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. |
| delayLoading | number |  |
| fetcher | [Fetcher](/framework-api/types/Fetcher.md)<R\> |  |
| headers | HeadersInit | A Headers object, an object literal, or an array of two-item arrays to set request's headers. |
| integrity | string | A cryptographic hash of the resource to be fetched by request. Sets request's integrity. |
| keepalive | boolean | A boolean to set request's keepalive. |
| mode | RequestMode | A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. |
| onFetchError | [ErrorCallback](/framework-api/types/ErrorCallback.md) |  |
| onFetchSuccess |  |  |
| params | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| query | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| redirect | RequestRedirect | A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. |
| referrer | string | A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. |
| referrerPolicy | ReferrerPolicy | A referrer policy to set request's referrerPolicy. |
| signal | null \| AbortSignal | An AbortSignal to set request's signal. |
| window | null | Can only be null. Used to disassociate request from any Window. |
