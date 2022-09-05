---
id: AuthService
title: AuthService
sidebar_label: AuthService
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
| **clear** | clear(onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Clear all authentication data from the redux store  
and the persistence storage |
| **fetchSecurityContext** | fetchSecurityContext(onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Get the security context from the server and save it |
| **loadToken** | loadToken(onError: ErrorCallback<BasicError\>,onSuccess: SuccessCallback<any\>): void | Load the token from the persistence storage to the redux store |
| **refreshToken** | refreshToken(token: AnonymousObject<any\>,idp: Idp,force: boolean,onError: ErrorCallback<BasicError\>): undefined \| AnonymousObject<any\> | Refresh the token against an IDP |
| **saveToken** | saveToken(token: string \| AnonymousObject<any\>,idp: Idp,onError: ErrorCallback<BasicError\>): void | Validate the token and save it in the store and persistence storage and  
trigger the refreshing of the token if applicable |
| **setIdp** | setIdp(idp: Idp): void | Save the idp name in the redux store |
| **setSecurityContext** | setSecurityContext(securityContext: null \| AnonymousObject<any\>): void | Save the security context in the redux store |
| **setToken** | setToken(token: null \| string \| AnonymousObject<any\>): void | Save the token in the redux store |
