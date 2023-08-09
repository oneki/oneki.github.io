---
id: DefaultBasicError
title: DefaultBasicError
sidebar_label: DefaultBasicError
---

import Details from "@theme/Details"


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
| **constructor** | new DefaultBasicError(message: string,code: string \| number,payload: AnonymousObject<any\>) |  |
| **message** | string |  |
| **name** | string |  |
| **of** | of(error: unknown): BasicError |  |
| **payload** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **stackTraceLimit** | number |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| cause | unknown |  |
| prepareStackTrace |  |  |
| stack | string |  |


</div></Details>