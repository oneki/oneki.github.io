---
id: Collection
title: Collection
sidebar_label: Collection
---

import Details from "@theme/Details"


```tsx
__type(offsetInPixels: number,options: ): void
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **adapt** | adapt(data: undefined \| null \| T): I |  |
| **addActive** | addActive<B\>(by: B,target:  \| []): I[] |  |
| **addDisabled** | addDisabled<B\>(by: B,target:  \| []): I[] |  |
| **addHighlighted** | addHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| []): I[] |  |
| **align** | start \| center \| end \| auto |  |
| **align** | start \| center \| end \| auto |  |
| **destroy** |  |  |
| **getFields** | getFields(): undefined \| string[] |  |
| **getFilter** | getFilter(): undefined \| QueryFilter |  |
| **getFilterById** | getFilterById(id: QueryFilterId): undefined \| QueryFilterOrCriteria |  |
| **getItem** | getItem(uid: string): undefined \| I |  |
| **getLimit** | getLimit(): undefined \| number |  |
| **getOffset** | getOffset(): undefined \| number |  |
| **getParam** | getParam(key: string): any |  |
| **getParams** | getParams(): undefined \| AnonymousObject<any\> |  |
| **getSearch** | getSearch(): undefined \| Primitive |  |
| **getSort** | getSort(): undefined \| QuerySortDir |  |
| **getSortBy** | getSortBy(): QuerySortBy[] |  |
| **getSortByField** | getSortByField(field: string): undefined \| QuerySortByField |  |
| **getSortById** | getSortById(id: string): undefined \| QuerySortBy |  |
| **hasMore** | boolean |  |
| **isFiltered** | isFiltered(): boolean |  |
| **items** | I \| undefined[] |  |
| **load** | load(limit: number,offset: number,replace: boolean): void |  |
| **onSubscribe** | onSubscribe(initialData: undefined \| T[],initialUrl: undefined \| string,initialQuery: Query): void |  |
| **query** | query(query: Query): void |  |
| **refresh** | refresh(query: Query): void |  |
| **removeActive** | removeActive<B\>(by: B,target:  \| []): I[] |  |
| **removeDisabled** | removeDisabled<B\>(by: B,target:  \| []): I[] |  |
| **removeHighlighted** | removeHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| []): I[] |  |
| **reset** | reset(): void |  |
| **setActive** | setActive<B\>(by: B,target:  \| []): I[] |  |
| **setDisabled** | setDisabled<B\>(by: B,target:  \| []): I[] |  |
| **setHighlighted** | setHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **setMeta** | setMeta<B,K\>(by: B,target: ,key: K,value: ): I[] |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| []): I[] |  |
| **startAutoRefresh** | startAutoRefresh(interval: number): void |  |
| **startFollow** | startFollow(interval: number): void |  |
| **state** | S |  |
| **status** | [CollectionStatus](/framework-api/types/CollectionStatus.md) |  |
| **stopAutoRefresh** | stopAutoRefresh(): void |  |
| **stopFollow** | stopFollow(): void |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| data | T[] |  |
| dataSource | T[] \| string |  |
| scrollToIndex |  |  |
| scrollToOffset |  |  |
| total | number |  |


</div></Details>