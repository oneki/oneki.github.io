---
id: ControllerTableProps
title: ControllerTableProps
sidebar_label: ControllerTableProps
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **controller** | CollectionProxy<T, I, S, C\> |  |
| adapter | [TableItemAdapter](/api2/types/TableItemAdapter.md)<T\> |  |
| autoRefresh | number |  |
| bodyClassName | string |  |
| BodyComponent | React.FC<[TableBodyProps](/api2/types/TableBodyProps.md)<T, I\>\> |  |
| className | string |  |
| columns |  |  |
| dataSource | string \|  |  |
| ExpandedComponent | React.FC<[TableExpandedProps](/api2/types/TableExpandedProps.md)<T, I\>\> |  |
| fetchOnce | boolean |  |
| filterable | boolean |  |
| fit | boolean |  |
| fixHeader | boolean |  |
| footer | boolean |  |
| footerClassName | string |  |
| FooterComponent | React.FC<[TableFooterProps](/api2/types/TableFooterProps.md)<T, I\>\> |  |
| grow | string |  |
| header | boolean |  |
| headerClassName | string |  |
| HeaderComponent | React.FC<[TableHeaderProps](/api2/types/TableHeaderProps.md)<T, I\>\> |  |
| height | string \| number |  |
| highlightRow | boolean |  |
| increment | number |  |
| LoadingComponent | React.FC |  |
| LoadingRowComponent | React.FC |  |
| NotFoundComponent | React.FC<[TableNotFoundProps](/api2/types/TableNotFoundProps.md)\> \| null |  |
| onRowClick | [TableRowHandler](/api2/types/TableRowHandler.md)<T, I\> |  |
| onRowEnter | [TableRowHandler](/api2/types/TableRowHandler.md)<T, I\> |  |
| onRowLeave | [TableRowHandler](/api2/types/TableRowHandler.md)<T, I\> |  |
| onRowOut | [TableRowHandler](/api2/types/TableRowHandler.md)<T, I\> |  |
| onRowOver | [TableRowHandler](/api2/types/TableRowHandler.md)<T, I\> |  |
| paddingEnd | number |  |
| paddingStart | number |  |
| parentRef | React.MutableRefObject<HTMLDivElement \| null\> |  |
| preload | number |  |
| rowClassName | string \|  |  |
| RowComponent | React.FC<[TableBodyRowProps](/api2/types/TableBodyRowProps.md)<T, I\>\> |  |
| selected |  |  |
| sortable | boolean |  |
| stripRows | boolean |  |
