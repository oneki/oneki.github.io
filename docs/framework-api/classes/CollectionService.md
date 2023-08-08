---
id: CollectionService
title: CollectionService
sidebar_label: CollectionService
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
| **addActive** | addActive<B\>(by: B,target:  \| []): I[] |  |
| **addDisabled** | addDisabled<B\>(by: B,target:  \| []): I[] |  |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: null \| string \| number \| boolean \| QueryFilterCriteriaValue[],not: boolean,id: string \| number \| symbol,parentFilterId: string \| number \| symbol): void |  |
| **addHighlighted** | addHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| []): I[] |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean): void |  |
| **align** | auto \| center \| end \| start |  |
| **align** | auto \| center \| end \| start |  |
| **asService** | asService(): default<T, I, S\> |  |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **clearFields** | clearFields(): void |  |
| **clearFilter** | clearFilter(): void |  |
| **clearLimit** | clearLimit(): void |  |
| **clearOffset** | clearOffset(): void |  |
| **clearParam** | clearParam(key: string): void |  |
| **clearParams** | clearParams(): void |  |
| **clearSearch** | clearSearch(): void |  |
| **clearSort** | clearSort(): void |  |
| **clearSortBy** | clearSortBy(): void |  |
| **constructor** | new CollectionService<T,I,S\>() |  |
| **data** |  |  |
| **dataSource** |  |  |
| **destroy** | destroy(): void |  |
| **filter** | filter(filter: QueryFilter \| QueryFilterCriteria \| QueryFilterOrCriteria[]): void |  |
| **getDb** | getDb(): I[] |  |
| **getFields** | getFields(): undefined \| string[] |  |
| **getFilter** | getFilter(): undefined \| QueryFilter |  |
| **getFilterById** | getFilterById(id: QueryFilterId): undefined \| QueryFilterOrCriteria |  |
| **getItem** | getItem(uid: string): undefined \| I |  |
| **getLimit** | getLimit(): undefined \| number |  |
| **getOffset** | getOffset(): undefined \| number |  |
| **getParam** | getParam(key: string): any |  |
| **getParams** | getParams(): undefined \| AnonymousObject<any\> |  |
| **getQuery** | getQuery(): Query |  |
| **getSearch** | getSearch(): undefined \| Primitive |  |
| **getSort** | getSort(): undefined \| QuerySortDir |  |
| **getSortBy** | getSortBy(): QuerySortBy[] |  |
| **getSortByField** | getSortByField(field: string): undefined \| QuerySortByField |  |
| **getSortById** | getSortById(id: string): undefined \| QuerySortBy |  |
| **hasMore** |  |  |
| **index** |  |  |
| **init** | init(): void |  |
| **initDb** | initDb(dataSource: undefined \| string \| T[]): void |  |
| **isFiltered** | isFiltered(): boolean |  |
| **items** |  |  |
| **load** | load(limit: number,offset: number,replace: boolean): void |  |
| **onSubscribe** | onSubscribe(initialData: undefined \| T[],initialUrl: undefined \| string,initialQuery: Query): void |  |
| **query** | query(query: Query): void |  |
| **refresh** | refresh(query: Query,push: boolean,noCache: boolean): void |  |
| **removeActive** | removeActive<B\>(by: B,target:  \| []): I[] |  |
| **removeDisabled** | removeDisabled<B\>(by: B,target:  \| []): I[] |  |
| **removeFilter** | removeFilter(filterId: QueryFilterId): void |  |
| **removeHighlighted** | removeHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| []): I[] |  |
| **removeSortBy** | removeSortBy(id: string): void |  |
| **reset** | reset(): void |  |
| **search** | search(search: Primitive): void |  |
| **serializeQuery** | serializeQuery(query: Query): QuerySerializerResult |  |
| **setActive** | setActive<B\>(by: B,target:  \| []): I[] |  |
| **setData** | setData(data: T[],query: Query): void |  |
| **setDisabled** | setDisabled<B\>(by: B,target:  \| []): I[] |  |
| **setFields** | setFields(fields: string[]): void |  |
| **setHighlighted** | setHighlighted<B\>(by: B,target:  \| []): I[] |  |
| **setMeta** | setMeta<B,K\>(by: B,target:  \| [],key: K,value: ): I[] |  |
| **setParam** | setParam(key: string,value: any): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>): void |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| []): I[] |  |
| **setStatus** | setStatus(status: LoadingStatus): void |  |
| **setUrl** | setUrl(url: string,query: Query): void |  |
| **sort** | sort(dir: QuerySortDir): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| QuerySortBy[]): void |  |
| **startAutoRefresh** | startAutoRefresh(interval: number): void |  |
| **startFollow** | startFollow(interval: number): void |  |
| **state** | S |  |
| **status** |  |  |
| **stopAutoRefresh** | stopAutoRefresh(): void |  |
| **stopFollow** | stopFollow(): void |  |
| **total** |  |  |
| **url** |  |  |
| scrollToIndex |  |  |
| scrollToOffset |  |  |
