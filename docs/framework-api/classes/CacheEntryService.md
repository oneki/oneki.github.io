---
id: CacheEntryService
title: CacheEntryService
sidebar_label: CacheEntryService
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **constructor** | new CacheEntryService<T\>() |  |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **delayLoading** | delayLoading(key: string,delay_ms: number): void |  |
| **fetch** | fetch(url: string,options: CacheOptions<T\>,force: boolean): void | Get the object from the server and save it in the cache (= redux store) |
| **setCache** | setCache(key: string,cacheEntry: CacheEntry<T\>): void | Save the object to cache in the redux store  
Several metadata are atttached to the object (expireAt, loading, fetching) |
| **setError** | setError(key: string,error: BasicError): void |  |
| **setLoading** | setLoading(key: string,loading: boolean,fetching: boolean): void |  |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |


