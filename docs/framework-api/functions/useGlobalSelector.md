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



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **selector** | [GlobalSelectorFunction](/framework-api/types/GlobalSelectorFunction.md) |  |
