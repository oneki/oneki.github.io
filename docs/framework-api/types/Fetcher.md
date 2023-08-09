---
id: Fetcher
title: Fetcher
sidebar_label: Fetcher
---

import Details from "@theme/Details"


```tsx
__type(url: string,method: FetchMethod,body: unknown,options: FetchOptions<R>): Promise<R>
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **method** | [FetchMethod](/framework-api/types/FetchMethod.md) |  |
| **url** | string |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| body | unknown |  |
| options | [FetchOptions](/framework-api/interfaces/FetchOptions.md)<R\> |  |


</div></Details>