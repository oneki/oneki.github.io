---
id: DefaultBasicError
title: DefaultBasicError
sidebar_label: DefaultBasicError
---

```tsx
__type(err: Error,stackTraces: ): any
```
<br/>



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **code** | string \| number |  |
| **message** | string |  |
| **name** | string |  |
| **payload** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **stackTraceLimit** | number |  |
| cause | Error |  |
| prepareStackTrace |  |  |
| stack | string |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **captureStackTrace** | captureStackTrace(targetObject: object,constructorOpt: Function): void | Create .stack property on a target object |
| **of** | of(error: unknown): BasicError |  |
