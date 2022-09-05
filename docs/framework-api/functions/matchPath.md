---
id: matchPath
title: matchPath
sidebar_label: matchPath
---

```tsx
matchPath<ParamKey,Path>(pattern: Path | PathPattern<Path>,pathname: string): PathMatch<ParamKey> | null
```
<br/>

Performs pattern matching on a URL pathname and returns information about  
the match.

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **pathname** | string |  |
| **pattern** | Path \| PathPattern<Path\> |  |


### Return



The return is of type <code>[PathMatch](/framework-api/interfaces/PathMatch.md)<ParamKey\> | null</code>