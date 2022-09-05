---
id: CacheEntryService
title: CacheEntryService
sidebar_label: CacheEntryService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **delayLoading** | delayLoading(key: string,delay_ms: number): void |  |
| **fetch** | fetch(url: string,options: CacheOptions<T\>,force: boolean): void | Get the object from the server and save it in the cache (= redux store) |
| **setCache** | setCache(key: string,cacheEntry: CacheEntry<T\>): void | Save the object to cache in the redux store  
Several metadata are atttached to the object (expireAt, loading, fetching) |
| **setError** | setError(key: string,error: BasicError): void |  |
| **setLoading** | setLoading(key: string,loading: boolean,fetching: boolean): void |  |
