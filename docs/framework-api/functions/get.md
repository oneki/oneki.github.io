---
id: get
title: get
sidebar_label: get
---

```tsx
get<T>(content: T,property: undefined,defaultValue: T): T
get<T,K>(content: undefined | null | T,property: K,defaultValue: Exclude<PathType<T, K>, undefined | null>): Exclude<PathType<T, K>, undefined | null>
get<T,K>(content: undefined | null | T,property: K,defaultValue: PathType<T, K>): PathType<T, K>
get<T,K>(content: null | T,property: K,defaultValue: PathType<T, K>): PathType<T, K> | undefined
get<T,K>(content: null | T,property: K,defaultValue: null | PathType<T, K>): PathType<T, K> | null
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **content** | T |  |
| defaultValue | T |  |
| property | undefined |  |
