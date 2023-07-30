---
id: TableBodyRowProps
title: TableBodyRowProps
sidebar_label: TableBodyRowProps
---

```tsx
__type(item: I | undefined,index: number): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **columns** |  |  |
| **data** | T |  |
| **index** | number |  |
| **item** | I |  |
| CellComponent | React.FC<Omit<[TableBodyCellProps](/api2/types/TableBodyCellProps.md)<T, I\>, data\>\> |  |
| className | string |  |
| className | string |  |
| ItemContentComponent | FC<[ListItemProps](/api2/interfaces/ListItemProps.md)<T, I\>\> |  |
| multiple | boolean |  |
| onClick |  |  |
| onCollapse |  |  |
| onCollapsed |  |  |
| onCollapsing |  |  |
| onExpand |  |  |
| onExpanded |  |  |
| onExpanding |  |  |
| onMouseEnter | [ListItemHandler](/api2/types/ListItemHandler.md)<T, I\> |  |
| onMouseLeave | [ListItemHandler](/api2/types/ListItemHandler.md)<T, I\> |  |
