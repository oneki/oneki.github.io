---
id: Collection
title: Collection
sidebar_label: Collection
---

```tsx
__type(offsetInPixels: number,options: ): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **adapt** | adapt(data: undefined \| null \| T): I |  |
| **addActive** | addActive<B\>(by: B,target:  \| ):  |  |
| **addDisabled** | addDisabled<B\>(by: B,target:  \| ):  |  |
| **addHighlighted** | addHighlighted<B\>(by: B,target:  \| ):  |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| ):  |  |
| **align** | start \| center \| end \| auto |  |
| **align** | start \| center \| end \| auto |  |
| **destroy** |  |  |
| **getFields** | getFields(): undefined \|  |  |
| **getFilter** | getFilter(): undefined \| QueryFilter |  |
| **getFilterById** | getFilterById(id: QueryFilterId): undefined \| QueryFilterOrCriteria |  |
| **getItem** | getItem(uid: string): undefined \| I |  |
| **getLimit** | getLimit(): undefined \| number |  |
| **getOffset** | getOffset(): undefined \| number |  |
| **getParam** | getParam(key: string): any |  |
| **getParams** | getParams(): undefined \| AnonymousObject<any\> |  |
| **getSearch** | getSearch(): undefined \| Primitive |  |
| **getSort** | getSort(): undefined \| QuerySortDir |  |
| **getSortBy** | getSortBy(): undefined \|  |  |
| **getSortByField** | getSortByField(field: string): undefined \| QuerySortByField |  |
| **getSortById** | getSortById(id: string): undefined \| QuerySortBy |  |
| **hasMore** | boolean |  |
| **isFiltered** | isFiltered(): boolean |  |
| **items** |  |  |
| **load** | load(limit: number,offset: number,replace: boolean): void |  |
| **onSubscribe** | onSubscribe(initialData: undefined \| ,initialUrl: undefined \| string,initialQuery: Query): void |  |
| **query** | query(query: Query): void |  |
| **refresh** | refresh(query: Query): void |  |
| **removeActive** | removeActive<B\>(by: B,target:  \| ):  |  |
| **removeDisabled** | removeDisabled<B\>(by: B,target:  \| ):  |  |
| **removeHighlighted** | removeHighlighted<B\>(by: B,target:  \| ):  |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| ):  |  |
| **reset** | reset(): void |  |
| **setActive** | setActive<B\>(by: B,target:  \| ):  |  |
| **setDisabled** | setDisabled<B\>(by: B,target:  \| ):  |  |
| **setHighlighted** | setHighlighted<B\>(by: B,target:  \| ):  |  |
| **setMeta** | setMeta<B,K\>(by: B,target: ,key: K,value: ):  |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| ):  |  |
| **state** | S |  |
| **status** | [CollectionStatus](/framework-api/types/CollectionStatus.md) |  |
| data |  |  |
| dataSource |  \| string |  |
| scrollToIndex |  |  |
| scrollToOffset |  |  |
| total | number |  |
