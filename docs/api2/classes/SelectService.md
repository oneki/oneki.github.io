---
id: SelectService
title: SelectService
sidebar_label: SelectService
---

```tsx
__type(offsetInPixels: number,options: ): void
```
<br/>



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **align** | auto \| center \| end \| start |  |
| **align** | auto \| center \| end \| start |  |
| **config** | undefined \| [SelectConfig](/api2/types/SelectConfig.md)<T, I\> |  |
| **state** | S |  |
| scrollToIndex |  |  |
| scrollToOffset |  |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **adapt** | adapt(data: undefined \| null \| T): I |  |
| **addActive** | addActive<B\>(by: B,target:  \| ):  |  |
| **addDisabled** | addDisabled<B\>(by: B,target:  \| ):  |  |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: null \| string \| number \| boolean \| ,not: boolean,id: string \| number \| symbol,parentFilterId: string \| number \| symbol): void |  |
| **addHighlighted** | addHighlighted<B\>(by: B,target:  \| ):  |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| ):  |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean): void |  |
| **asService** | asService(): SelectService<T, I, S\> |  |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **check** | check(): void |  |
| **clearFields** | clearFields(): void |  |
| **clearFilter** | clearFilter(): void |  |
| **clearLimit** | clearLimit(): void |  |
| **clearOffset** | clearOffset(): void |  |
| **clearParam** | clearParam(key: string): void |  |
| **clearParams** | clearParams(): void |  |
| **clearSearch** | clearSearch(): void |  |
| **clearSort** | clearSort(): void |  |
| **clearSortBy** | clearSortBy(): void |  |
| **destroy** | destroy(): void |  |
| **filter** | filter(filter: QueryFilter \| QueryFilterCriteria \| ): void |  |
| **getDb** | getDb():  |  |
| **getFields** | getFields(): undefined \|  |  |
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
| **getSortBy** | getSortBy(): undefined \|  |  |
| **getSortByField** | getSortByField(field: string): undefined \| QuerySortByField |  |
| **getSortById** | getSortById(id: string): undefined \| QuerySortBy |  |
| **init** | init(): void |  |
| **initDb** | initDb(dataSource: undefined \| string \| ): void |  |
| **isFiltered** | isFiltered(): boolean |  |
| **load** | load(limit: number,offset: number,replace: boolean): void |  |
| **onSubscribe** | onSubscribe(initialData: undefined \| ,initialUrl: undefined \| string,initialQuery: Query): void |  |
| **query** | query(query: Query): void |  |
| **refresh** | refresh(query: Query,push: boolean,noCache: boolean): void |  |
| **removeActive** | removeActive<B\>(by: B,target:  \| ):  |  |
| **removeDisabled** | removeDisabled<B\>(by: B,target:  \| ):  |  |
| **removeFilter** | removeFilter(filterId: QueryFilterId): void |  |
| **removeHighlighted** | removeHighlighted<B\>(by: B,target:  \| ):  |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| ):  |  |
| **removeSortBy** | removeSortBy(id: string): void |  |
| **reset** | reset(): void |  |
| **search** | search(search: Primitive): void |  |
| **serializeQuery** | serializeQuery(query: Query): QuerySerializerResult |  |
| **setActive** | setActive<B\>(by: B,target:  \| ):  |  |
| **setData** | setData(data: ,query: Query): void |  |
| **setDefaultValue** | setDefaultValue(value: undefined \| null \| T \| ): void |  |
| **setDisabled** | setDisabled<B\>(by: B,target:  \| ):  |  |
| **setFields** | setFields(fields: ): void |  |
| **setHighlighted** | setHighlighted<B\>(by: B,target:  \| ):  |  |
| **setMeta** | setMeta<B,K\>(by: B,target:  \| ,key: K,value: ):  |  |
| **setParam** | setParam(key: string,value: any): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>): void |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| ):  |  |
| **setStatus** | setStatus(status: LoadingStatus): void |  |
| **setUrl** | setUrl(url: string,query: Query): void |  |
| **setValue** | setValue(value: null \| T \| ): void |  |
| **sort** | sort(dir: QuerySortDir): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| ): void |  |
