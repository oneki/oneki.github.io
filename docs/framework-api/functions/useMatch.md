---
id: useMatch
title: useMatch
sidebar_label: useMatch
---

```tsx
useMatch<ParamKey,Path>(pattern: Path | PathPattern<Path>): PathMatch<ParamKey> | null
```
<br/>

Returns a PathMatch object if the given pattern matches the current URL.  
This is useful for components that need to know "active" state, e.g.  
<NavLink\>.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **pattern** | Path \| PathPattern<Path\> |  |
