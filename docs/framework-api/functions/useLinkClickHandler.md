---
id: useLinkClickHandler
title: useLinkClickHandler
sidebar_label: useLinkClickHandler
---

import Details from "@theme/Details"


```tsx
useLinkClickHandler<E>(to: To,__namedParameters: ): 
```
<br/>

Handles the click behavior for router `<Link>` components. This is useful if  
you need to create custom `<Link>` components with the same click behavior we  
use in our exported `<Link>`.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **to** | [To](/framework-api/types/To.md) |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| preventScrollReset | boolean |  |
| relative | RelativeRoutingType |  |
| replace | boolean |  |
| state | any |  |
| target | HTMLAttributeAnchorTarget |  |


</div></Details>