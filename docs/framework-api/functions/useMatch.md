---
id: useMatch
title: useMatch
sidebar_label: useMatch
---

```tsx
useMatch<ParamKey,Path>(pattern: Path | PathPattern<Path>): PathMatch<ParamKey> | null
```
<br/>

Returns true if the URL for the given "to" value matches the current URL.  
This is useful for components that need to know "active" state, e.g.  
<NavLink\>.

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **pattern** | Path \| PathPattern<Path\> |  |


### Return



The return is of type <code>[PathMatch](/framework-api/interfaces/PathMatch.md)<ParamKey\> | null</code>