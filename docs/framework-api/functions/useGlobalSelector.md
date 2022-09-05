---
id: useGlobalSelector
title: useGlobalSelector
sidebar_label: useGlobalSelector
---

```tsx
useGlobalSelector<T>(selector: GlobalSelectorFunction): T | undefined
useGlobalSelector<T>(selector: GlobalSelectorFunction,defaultValue: undefined): T | undefined
useGlobalSelector<T>(selector: GlobalSelectorFunction,defaultValue: null): T | null
useGlobalSelector<T>(selector: GlobalSelectorFunction,defaultValue: T): T
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **selector** | [GlobalSelectorFunction](/framework-api/types/GlobalSelectorFunction.md) |  |


### Return



The return is of type <code>T | undefined</code>