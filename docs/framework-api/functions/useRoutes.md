---
id: useRoutes
title: useRoutes
sidebar_label: useRoutes
---

```tsx
useRoutes(routes: ,locationArg: string | Partial<Location>): React.ReactElement | null
```
<br/>

Returns the element of the route that matched the current location, prepared  
with the correct context to render the remainder of the route tree. Route  
elements in the tree must render an <Outlet\> to render their child route's  
element.

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **routes** |  |  |
| locationArg | string \| Partial<Location\> |  |


### Return



The return is of type <code>React.ReactElement | null</code>