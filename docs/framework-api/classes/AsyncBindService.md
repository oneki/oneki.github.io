---
id: AsyncBindService
title: AsyncBindService
sidebar_label: AsyncBindService
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **constructor** | new AsyncBindService<T\>() |  |
| **error** | error(error: Error): void |  |
| **execute** | execute(asyncMethod: AnyFunction<T\>,dependencies: any[]): void |  |
| **forkAsyncBind** | forkAsyncBind(asyncMethod: AnyFunction<T\>,dependencies: any[]): void |  |
| **setLoading** | setLoading(isLoading: boolean): void |  |
| **state** | [AsyncBindState](/framework-api/interfaces/AsyncBindState.md) |  |
| **success** | success(result: T): void |  |


