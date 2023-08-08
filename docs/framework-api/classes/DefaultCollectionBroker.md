---
id: DefaultCollectionBroker
title: DefaultCollectionBroker
sidebar_label: DefaultCollectionBroker
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId,subscriberId: string): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: null \| string \| number \| boolean \| QueryFilterCriteriaValue[],not: boolean,id: string \| number \| symbol,parentFilterId: string \| number \| symbol,subscriberId: string): void |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean,subscriberId: string): void |  |
| **addSubscriber** | addSubscriber(subscriberId: string,subscriber: C): void |  |
| **clearFields** | clearFields(subscriberId: string): void |  |
| **clearFilter** | clearFilter(subscriberId: string): void |  |
| **clearParam** | clearParam(key: string,subscriberId: string): void |  |
| **clearParams** | clearParams(subscriberId: string): void |  |
| **clearSearch** | clearSearch(subscriberId: string): void |  |
| **clearSort** | clearSort(subscriberId: string): void |  |
| **clearSortBy** | clearSortBy(subscriberId: string): void |  |
| **constructor** | new DefaultCollectionBroker<T,I,S,C\>(dataSource: undefined \| string \| T[],options: UseCollectionOptions<T, I\>) |  |
| **filter** | filter(filter: QueryFilter \| QueryFilterCriteria \| QueryFilterOrCriteria[],subscriberId: string): void |  |
| **getData** | getData(subscriberId: string): undefined \| T[] |  |
| **getFields** | getFields(subscriberId: string): undefined \| string[] |  |
| **getFilter** | getFilter(subscriberId: string): undefined \| QueryFilter \| QueryFilterCriteria \| QueryFilterOrCriteria[] |  |
| **getInitialDataSource** | getInitialDataSource(subscriberId: string): undefined \| string \| T[] |  |
| **getInitialQuery** | getInitialQuery(subscriberId: string): Query |  |
| **getParams** | getParams(subscriberId: string): undefined \| AnonymousObject<any\> |  |
| **getSearch** | getSearch(subscriberId: string): undefined \| Primitive |  |
| **getSort** | getSort(subscriberId: string): undefined \| QuerySortDir |  |
| **getSortBy** | getSortBy(subscriberId: string): undefined \| string \| QuerySortBy \| QuerySortBy[] |  |
| **getUrl** | getUrl(subscriberId: string): undefined \| string |  |
| **removeFilter** | removeFilter(id: QueryFilterId,subscriberId: string): void |  |
| **removeSortBy** | removeSortBy(id: string,subscriberId: string): void |  |
| **removeSubscriber** | removeSubscriber(id: string): void |  |
| **search** | search(search: Primitive,subscriberId: string): void |  |
| **setData** | setData(data: T[],query: Query,subscriberId: string): void |  |
| **setFields** | setFields(fields: string[],subscriberId: string): void |  |
| **setParam** | setParam(key: string,value: any,subscriberId: string): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>,subscriberId: string): void |  |
| **setUrl** | setUrl(url: string,query: Query,subscriberId: string): void |  |
| **sort** | sort(dir: QuerySortDir,subscriberId: string): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| QuerySortBy[],subscriberId: string): void |  |
