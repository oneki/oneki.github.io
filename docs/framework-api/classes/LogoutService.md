---
id: LogoutService
title: LogoutService
sidebar_label: LogoutService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **authService** | [default](/framework-api/classes/AuthService.md) |  |
| **context** | [default](/framework-api/classes/BasicAppContext.md) |  |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **state** | [LogoutState](/framework-api/interfaces/LogoutState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **logout** | logout(onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Logout the user or redirect to an external logout page |
| **onError** | onError(error: default): void | Inform the user if there is an error |
| **onSuccess** | onSuccess(): void | Reset the loading and error message after a successful operation |
| **setLoading** | setLoading(loading: boolean): void | Inform the user if there is a loading task |
| **successLogout** | successLogout(onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void |  |
