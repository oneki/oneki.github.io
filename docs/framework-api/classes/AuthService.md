---
id: AuthService
title: AuthService
sidebar_label: AuthService
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **clear** | clear(onError: ErrorCallback,onSuccess: SuccessCallback,identity: string): void | Clear all authentication data from the redux store  
and the persistence storage |
| **clearIdp** | clearIdp(idp: Idp): void | Save the idp name in the redux store |
| **constructor** | new AuthService() |  |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **fetchSecurityContext** | fetchSecurityContext(onError: ErrorCallback,onSuccess: SuccessCallback,identity: string): void | Get the security context from the server and save it |
| **loadToken** | loadToken(onError: ErrorCallback,onSuccess: SuccessCallback,identity: string): void | Load the token from the persistence storage to the redux store |
| **refreshToken** | refreshToken(token: AnonymousObject<any\>,idp: Idp,force: boolean,onError: ErrorCallback): undefined \| AnonymousObject<any\> | Refresh the token against an IDP |
| **saveToken** | saveToken(token: string \| AnonymousObject<any\>,idp: Idp,onError: ErrorCallback): void | Validate the token and save it in the store and persistence storage and  
trigger the refreshing of the token if applicable |
| **setIdp** | setIdp(idp: Idp): void | Save the idp name in the redux store |
| **setSecurityContext** | setSecurityContext(securityContext: null \| AnonymousObject<any\>,identity: string): void | Save the security context in the redux store |
| **setToken** | setToken(token: null \| string \| AnonymousObject<any\>,identity: string): void | Save the token in the redux store |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |


