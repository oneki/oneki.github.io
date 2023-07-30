---
id: TableController
title: TableController
sidebar_label: TableController
---

```tsx
__type(): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **addColumn** | addColumn(column: TableColumn<T, I\>,position: number): void |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| ):  |  |
| **columns** |  |  |
| **initCell** | initCell(rowIndex: number \| footer \| header-title \| header-filter,colId: string,ref: RefObject<HTMLDivElement\>): void |  |
| **removeColumn** | removeColumn(id: string): void |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| ):  |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| ):  |  |
| **startAutoRefresh** |  |  |
| **stopAutoRefresh** |  |  |
| **toggle** | toggle(item: I): void |  |
| config | [TableConfig](/api2/types/TableConfig.md)<T, I\> |  |
