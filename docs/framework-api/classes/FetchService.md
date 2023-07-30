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
| **delete** | delete<R\>(url: string,options: FetchOptions<R\>): void |  |
| **fetch** | fetch<R\>(url: string,method: FetchMethod,body: unknown,options: FetchOptions<R\>): void |  |
| **fetchError** | fetchError(e: any): void |  |
| **fetchSuccess** | fetchSuccess(result: any): void |  |
| **get** | get<R\>(url: string,options: FetchOptions<R\>): any |  |
| **patch** | patch<R\>(url: string,body: unknown,options: FetchOptions<R\>): void |  |
| **poll** | poll(url: string,fixedRateInMs: number,options: FetchOptions<any\>): any |  |
| **pollFetch** | pollFetch(url: string,fixedRateInMs: number,options: FetchOptions<any\>): any |  |
| **post** | post<R\>(url: string,body: unknown,options: FetchOptions<R\>): void |  |
| **put** | put<R\>(url: string,body: unknown,options: FetchOptions<R\>): void |  |
| **setLoading** | setLoading(loading: boolean,fetching: boolean): void |  |
