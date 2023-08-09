---
id: createRoutesFromChildren
title: createRoutesFromChildren
sidebar_label: createRoutesFromChildren
---

import Details from "@theme/Details"


```tsx
createRoutesFromChildren(children: ReactNode,parentPath: number[]): RouteObject[]
```
<br/>

Creates a route config from a React "children" object, which is usually  
either a `<Route>` element or an array of them. Used internally by  
`<Routes>` to create a route config from its children.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **children** | ReactNode |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| parentPath | number[] |  |


</div></Details>