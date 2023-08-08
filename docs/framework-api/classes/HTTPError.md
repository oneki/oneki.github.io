---
id: HTTPError
title: HTTPError
sidebar_label: HTTPError
---

```tsx
__type(err: Error,stackTraces: CallSite[]): any
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **captureStackTrace** | captureStackTrace(targetObject: object,constructorOpt: Function): void | Create .stack property on a target object |
| **code** | string \| number |  |
| **constructor** | new HTTPError(code: string \| number,message: string,payload: AnonymousObject<any\>) |  |
| **message** | string |  |
| **name** | string |  |
| **of** | of(error: unknown): BasicError |  |
| **payload** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **stackTraceLimit** | number |  |
| cause | unknown |  |
| prepareStackTrace |  |  |
| stack | string |  |
