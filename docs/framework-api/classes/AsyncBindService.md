---
id: AsyncBindService
title: AsyncBindService
sidebar_label: AsyncBindService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **state** | [AsyncBindState](/framework-api/interfaces/AsyncBindState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **error** | error(error: Error): void |  |
| **execute** | execute(asyncMethod: AnyFunction<T\>,dependencies: ): void |  |
| **forkAsyncBind** | forkAsyncBind(asyncMethod: AnyFunction<T\>,dependencies: ): void |  |
| **setLoading** | setLoading(isLoading: boolean): void |  |
| **success** | success(result: T): void |  |
