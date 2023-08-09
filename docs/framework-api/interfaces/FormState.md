---
id: FormState
title: FormState
sidebar_label: FormState
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **context** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **initialContext** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **metadata** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormMetadata](/framework-api/types/FormMetadata.md)\> |  |
| **validations** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[default](/framework-api/classes/FieldValidation.md)\> |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| delayLoading | number |  |
| fetching | boolean |  |
| initialValues | Partial<T\> |  |
| loading | boolean |  |
| submitting | boolean |  |
| values | T |  |


</div></Details>