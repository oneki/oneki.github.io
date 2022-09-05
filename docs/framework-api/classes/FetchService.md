---
id: FetchService
title: FetchService
sidebar_label: FetchService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **state** | S |  |
| pullTask | Task<any\> |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **cancelPull** | cancelPull(): void |  |
| **delayLoading** | delayLoading(delay_ms: number): void |  |
| **delete** | delete<R\>(url: string,options: FetchOptions<R, never\>): void |  |
| **fetch** | fetch<R,T\>(url: string,method: FetchMethod,body: T,options: FetchOptions<R, T\>): void |  |
| **fetchError** | fetchError(e: any): void |  |
| **fetchSuccess** | fetchSuccess(result: any): void |  |
| **get** | get<R\>(url: string,options: FetchOptions<R, never\>): any |  |
| **patch** | patch<R,T\>(url: string,body: T,options: FetchOptions<R, T\>): void |  |
| **poll** | poll(url: string,fixedRateInMs: number,options: FetchOptions<any, never\>): any |  |
| **pollFetch** | pollFetch(url: string,fixedRateInMs: number,options: FetchOptions<any, never\>): any |  |
| **post** | post<R,T\>(url: string,body: T,options: FetchOptions<R, T\>): void |  |
| **put** | put<R,T\>(url: string,body: T,options: FetchOptions<R, T\>): void |  |
| **setLoading** | setLoading(loading: boolean,fetching: boolean): void |  |
