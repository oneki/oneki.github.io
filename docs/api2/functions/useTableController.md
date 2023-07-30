---
id: useTableController
title: useTableController
sidebar_label: useTableController
---

```tsx
useTableController<T>(dataSource: undefined | string | ,initialColumns: undefined | ,options: UseTableOptions<T, TableItem<T>>): CollectionProxy<T, TableItem<T>, TableState<T, TableItem<T>>, TableService<T, TableItem<T>, TableState<T, TableItem<T>>>>
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **dataSource** | undefined \| string \|  |  |
| **initialColumns** | undefined \|  |  |
| options | [UseTableOptions](/api2/types/UseTableOptions.md)<T, [TableItem](/api2/types/TableItem.md)<T\>\> | **Defaults to:** {} |


### Return



The return is of type <code>CollectionProxy<T, [TableItem](/api2/types/TableItem.md)<T\>, [TableState](/api2/types/TableState.md)<T, [TableItem](/api2/types/TableItem.md)<T\>\>, TableService<T, [TableItem](/api2/types/TableItem.md)<T\>, [TableState](/api2/types/TableState.md)<T, [TableItem](/api2/types/TableItem.md)<T\>\>\>\></code>