---
id: LoginService
title: LoginService
sidebar_label: LoginService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **authService** | [default](/framework-api/classes/AuthService.md) |  |
| **context** | [default](/framework-api/classes/BasicAppContext.md) |  |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **state** | [LoginState](/framework-api/interfaces/LoginState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **externalLogin** | externalLogin(idpName: string,onError: ErrorCallback<BasicError\>): void | Redirect the user to an external login page |
| **externalLoginCallback** | externalLoginCallback(idpName: string,onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Parse the token and the security context from the response of the  
external login |
| **formLogin** | formLogin(data: AnonymousObject<any\>,idpName: string,onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Submit the login form |
| **login** | login(idpName: string,onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Check if a login is necessary. |
| **onError** | onError(error: default): void | Inform the user if there is an error |
| **onSuccess** | onSuccess(): void | Reset the loading and error message after a successful operation |
| **setLoading** | setLoading(loading: boolean): void | Inform the user if there is a loading task |
| **successLogin** | successLogin(token: string \| AnonymousObject<any\>,securityContext: AnonymousObject<any\>,idpName: string,onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Save the token and the security context |
