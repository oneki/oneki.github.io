---
id: useRoutes
title: useRoutes
sidebar_label: useRoutes
---

import Details from "@theme/Details"


```tsx
useRoutes(routes: RouteObject[],locationArg: string | Partial<Location>): React.ReactElement | null
```
<br/>

Returns the element of the route that matched the current location, prepared  
with the correct context to render the remainder of the route tree. Route  
elements in the tree must render an <Outlet\> to render their child route's  
element.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **routes** | [RouteObject](/framework-api/types/RouteObject.md)[] |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| locationArg | string \| Partial<Location\> |  |


</div></Details>