---
id: LogoutService
title: LogoutService
sidebar_label: LogoutService
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **authService** | [default](/framework-api/classes/AuthService.md) |  |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **constructor** | new LogoutService(notificationService: default,authService: default) |  |
| **context** | [default](/framework-api/classes/BasicAppContext.md) |  |
| **logout** | logout(onError: ErrorCallback,onSuccess: SuccessCallback,identity: string): void | Logout the user or redirect to an external logout page |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **onError** | onError(error: default): void | Inform the user if there is an error |
| **onSuccess** | onSuccess(): void | Reset the loading and error message after a successful operation |
| **setLoading** | setLoading(loading: boolean): void | Inform the user if there is a loading task |
| **state** | [LogoutState](/framework-api/interfaces/LogoutState.md) |  |
| **successLogout** | successLogout(onError: ErrorCallback,onSuccess: SuccessCallback,identity: string): void |  |


