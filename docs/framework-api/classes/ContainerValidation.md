---
id: ContainerValidation
title: ContainerValidation
sidebar_label: ContainerValidation
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **code** | [ValidationCode](/framework-api/enum/ValidationCode.md) |  |
| **fields** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| **message** | string |  |
| **status** | [ValidationStatus](/framework-api/enum/ValidationStatus.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **equals** | equals(otherValidation: default): boolean |  |
| **isError** | isError(): boolean |  |
| **isLoading** | isLoading(): boolean |  |
| **isNotLoading** | isNotLoading(): boolean |  |
| **isNotOK** | isNotOK(): boolean |  |
| **isNotValidated** | isNotValidated(): boolean |  |
| **isOK** | isOK(): boolean |  |
| **isValidated** | isValidated(): boolean |  |
| **isWarning** | isWarning(): boolean |  |
