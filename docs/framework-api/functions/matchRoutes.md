---
id: matchRoutes
title: matchRoutes
sidebar_label: matchRoutes
---

import Details from "@theme/Details"


```tsx
matchRoutes<RouteObjectType>(routes: RouteObjectType[],locationArg: string | Partial<Location>,basename: string): AgnosticRouteMatch<string, RouteObjectType>[] | null
```
<br/>

Matches the given routes to a location and returns the match data.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **locationArg** | string \| Partial<Location\> |  |
| **routes** | RouteObjectType[] |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| basename | string |  |


</div></Details>