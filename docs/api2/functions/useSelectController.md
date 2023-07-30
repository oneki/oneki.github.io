---
id: useSelectController
title: useSelectController
sidebar_label: useSelectController
---

```tsx
useSelectController<T,I>(dataSource: undefined | string |  | ,options: UseListOptions<T, I>): CollectionProxy<T, I, SelectState<T, I>, SelectService<T, I, SelectState<T, I>>>
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **dataSource** | undefined \| string \|  \|  |  |
| options | [UseListOptions](/api2/types/UseListOptions.md)<T, I\> | **Defaults to:** {} |


### Return



The return is of type <code>CollectionProxy<T, I, [SelectState](/api2/types/SelectState.md)<T, I\>, [SelectService](/api2/classes/SelectService.md)<T, I, [SelectState](/api2/types/SelectState.md)<T, I\>\>\></code>