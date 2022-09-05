---
id: get
title: get
sidebar_label: get
---

```tsx
get<T>(content: any,property: string): T | undefined
get<T>(content: any,property: string,defaultValue: undefined): T | undefined
get<T>(content: any,property: string,defaultValue: null): T | null
get<T>(content: any,property: string,defaultValue: T): T
get<T>(content: any,property: string,defaultValue: T): T | undefined
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **content** | any |  |
| **property** | string |  |


### Return



The return is of type <code>T | undefined</code>