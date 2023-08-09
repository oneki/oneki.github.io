---
id: ContainerValidation
title: ContainerValidation
sidebar_label: ContainerValidation
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **code** | [ValidationCode](/framework-api/enum/ValidationCode.md) |  |
| **constructor** | new ContainerValidation(message: string,status: ValidationStatus,code: ValidationCode,fields: AnonymousObject<string\>) |  |
| **equals** | equals(otherValidation: default): boolean |  |
| **fields** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\> |  |
| **isError** | isError(): boolean |  |
| **isLoading** | isLoading(): boolean |  |
| **isNotLoading** | isNotLoading(): boolean |  |
| **isNotOK** | isNotOK(): boolean |  |
| **isNotValidated** | isNotValidated(): boolean |  |
| **isOK** | isOK(): boolean |  |
| **isValidated** | isValidated(): boolean |  |
| **isWarning** | isWarning(): boolean |  |
| **message** | string |  |
| **status** | [ValidationStatus](/framework-api/enum/ValidationStatus.md) |  |


