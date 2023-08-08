---
id: LoginService
title: LoginService
sidebar_label: LoginService
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **authService** | [default](/framework-api/classes/AuthService.md) |  |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **constructor** | new LoginService(notificationService: default,authService: default) |  |
| **context** | [default](/framework-api/classes/BasicAppContext.md) |  |
| **externalLogin** | externalLogin(idpName: string,onError: ErrorCallback): void | Redirect the user to an external login page |
| **externalLoginCallback** | externalLoginCallback(idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void | Parse the token and the security context from the response of the  
external login |
| **formLogin** | formLogin(data: AnonymousObject<any\>,idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void | Submit the login form |
| **login** | login(idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void | Check if a login is necessary. |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **onError** | onError(error: default): void | Inform the user if there is an error |
| **onSuccess** | onSuccess(): void | Reset the loading and error message after a successful operation |
| **setLoading** | setLoading(loading: boolean): void | Inform the user if there is a loading task |
| **state** | [LoginState](/framework-api/interfaces/LoginState.md) |  |
| **successLogin** | successLogin(token: string \| AnonymousObject<any\>,securityContext: AnonymousObject<any\>,idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void | Save the token and the security context |
