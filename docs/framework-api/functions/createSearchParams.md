---
id: createSearchParams
title: createSearchParams
sidebar_label: createSearchParams
---

import Details from "@theme/Details"


```tsx
createSearchParams(init: URLSearchParamsInit): URLSearchParams
```
<br/>

Creates a URLSearchParams object using the given initializer.

This is identical to `new URLSearchParams(init)` except it also  
supports arrays as values in the object form of the initializer  
instead of just strings. This is convenient when you need multiple  
values for a given key, but don't want to use an array initializer.

For example, instead of:

  let searchParams = new URLSearchParams([  
    ['sort', 'name'],  
    ['sort', 'price']  
  ]);

you can do:

  let searchParams = createSearchParams({  
    sort: ['name', 'price']  
  });

### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| init | [URLSearchParamsInit](/framework-api/types/URLSearchParamsInit.md) |  |


</div></Details>