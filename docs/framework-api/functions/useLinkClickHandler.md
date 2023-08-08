---
id: useLinkClickHandler
title: useLinkClickHandler
sidebar_label: useLinkClickHandler
---

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
| preventScrollReset | boolean |  |
| relative | RelativeRoutingType |  |
| replace | boolean |  |
| state | any |  |
| target | HTMLAttributeAnchorTarget |  |
