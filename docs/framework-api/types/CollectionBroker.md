---
id: CollectionBroker
title: CollectionBroker
sidebar_label: CollectionBroker
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **adapt** | adapt(data: undefined \| T): I |  |
| **addActive** | addActive<B\>(by: B,target:  \| ):  |  |
| **addDisabled** | addDisabled<B\>(by: B,target:  \| ):  |  |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: QueryFilterCriteriaValue \| ,not: boolean,id: QueryFilterId,parentFilterId: QueryFilterId): void |  |
| **addHighlighted** | addHighlighted<B\>(by: B,target:  \| ):  |  |
| **addSelected** | addSelected<B\>(by: B,target:  \| ):  |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean): void |  |
| **addSubscriber** | addSubscriber(collection: Collection<T, I, S\>): void |  |
| **clearFields** | clearFields(): void |  |
| **clearFilter** | clearFilter(): void |  |
| **clearParam** | clearParam(key: string): void |  |
| **clearParams** | clearParams(): void |  |
| **clearSearch** | clearSearch(): void |  |
| **clearSort** | clearSort(): void |  |
| **clearSortBy** | clearSortBy(): void |  |
| **destroy** |  |  |
| **filter** | filter(filter: null \| QueryFilter \| QueryFilterCriteria \| ): void |  |
| **getFields** | getFields(): undefined \|  |  |
| **getFilter** | getFilter(): undefined \| QueryFilter |  |
| **getFilterById** | getFilterById(id: QueryFilterId): undefined \| QueryFilterOrCriteria |  |
| **getInitialQuery** | getInitialQuery(): Pick<CollectionOptions<T, I\>, initialFields \| initialFilter \| initialParams \| initialSearch \| initialSort \| initialSortBy\> |  |
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
| **items** |  |  |
| **load** | load(limit: number,offset: number): void |  |
| **query** | query(query: Query): void |  |
| **refresh** | refresh(query: Query): void |  |
| **removeActive** | removeActive<B\>(by: B,target:  \| ):  |  |
| **removeDisabled** | removeDisabled<B\>(by: B,target:  \| ):  |  |
| **removeFilter** | removeFilter(filterId: QueryFilterId): void |  |
| **removeHighlighted** | removeHighlighted<B\>(by: B,target:  \| ):  |  |
| **removeSelected** | removeSelected<B\>(by: B,target:  \| ):  |  |
| **removeSortBy** | removeSortBy(id: string): void |  |
| **removeSubscriber** | removeSubscriber(collection: Collection<T, I, S\>): void |  |
| **reset** | reset(): void |  |
| **search** | search(search: Primitive): void |  |
| **setActive** | setActive<B\>(by: B,target:  \| ):  |  |
| **setData** | setData(data: ): void |  |
| **setDisabled** | setDisabled<B\>(by: B,target:  \| ):  |  |
| **setFields** | setFields(fields: ): void |  |
| **setHighlighted** | setHighlighted<B\>(by: B,target:  \| ):  |  |
| **setMeta** | setMeta<B,K\>(by: B,target: ,key: K,value: ):  |  |
| **setParam** | setParam(key: string,value: any): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>): void |  |
| **setSelected** | setSelected<B\>(by: B,target:  \| ):  |  |
| **sort** | sort(dir: QuerySortDir): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| ): void |  |
| **state** | S |  |
| **status** | [CollectionStatus](/framework-api/types/CollectionStatus.md) |  |
| data |  |  |
| dataSource |  \| string |  |
| total | number |  |
