---
id: ListBodyProps
title: ListBodyProps
sidebar_label: ListBodyProps
---

```tsx
__type(index: number,options: ): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **align** | start \| center \| end \| auto |  |
| **controller** | CollectionProxy<T, I, S, C\> |  |
| **items** |  |  |
| **service** | C |  |
| **state** | S |  |
| bodyRef | React.RefObject<HTMLDivElement\> |  |
| className | string |  |
| ItemComponent | FC<[ListItemProps](/api2/interfaces/ListItemProps.md)<T, I\>\> |  |
| ItemContentComponent | FC<[ListItemProps](/api2/interfaces/ListItemProps.md)<T, I\>\> |  |
| ItemLoadingComponent | FC |  |
| ListComponent | FC<StandardListProps<T, I\>\> |  |
| parentRef | React.RefObject<HTMLDivElement\> |  |
| scrollToIndex |  |  |
| style | React.CSSProperties |  |
| totalSize | number |  |
| virtualItems |  |  |
| VirtualListComponent | FC<VirtualListProps<T, I\>\> |  |
