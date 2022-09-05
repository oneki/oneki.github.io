---
id: createSearchParams
title: createSearchParams
sidebar_label: createSearchParams
---

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

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| init | [URLSearchParamsInit](/framework-api/types/URLSearchParamsInit.md) |  |


### Return



The return is of type <code>URLSearchParams</code>