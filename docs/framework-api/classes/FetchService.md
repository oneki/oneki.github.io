---
id: FetchService
title: FetchService
sidebar_label: FetchService
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **cancelPull** | cancelPull(): void |  |
| **constructor** | new FetchService<S\>() |  |
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
| **state** | S |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| pullTask | Task<any\> |  |


</div></Details>