---
id: Field
title: Field
sidebar_label: Field
---

import Details from "@theme/Details"


```tsx
__type(value: any): boolean
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **context** | [FieldProps](/framework-api/interfaces/FieldProps.md)<T\> |  |
| **name** | string |  |
| **touched** | boolean |  |
| **touchOn** | [TouchOnType](/framework-api/types/TouchOnType.md) |  |
| **validations** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\>[] |  |
| **validators** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[Validator](/framework-api/types/Validator.md)\> |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| defaultValue | T |  |
| disabled | boolean |  |
| editable | boolean |  |
| isUndefined |  |  |
| protected | boolean |  |
| visible | boolean |  |


</div></Details>