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

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **pathname** | string |  |
| **pattern** | Path \| PathPattern<Path\> |  |
