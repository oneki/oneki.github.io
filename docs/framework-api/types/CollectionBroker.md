---
id: CollectionBroker
title: CollectionBroker
sidebar_label: CollectionBroker
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId,subscriberId: string): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: QueryFilterCriteriaValue \| QueryFilterCriteriaValue[],not: boolean,id: QueryFilterId,parentFilterId: QueryFilterId,subscriberId: string): void |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean): void |  |
| **addSubscriber** | addSubscriber(id: string,subscriber: C): void |  |
| **clearFields** | clearFields(subscriberId: string): void |  |
| **clearFilter** | clearFilter(subscriberId: string): void |  |
| **clearParam** | clearParam(key: string,subscriberId: string): void |  |
| **clearParams** | clearParams(subscriberId: string): void |  |
| **clearSearch** | clearSearch(subscriberId: string): void |  |
| **clearSort** | clearSort(subscriberId: string): void |  |
| **clearSortBy** | clearSortBy(subscriberId: string): void |  |
| **filter** | filter(filter: null \| QueryFilter \| QueryFilterCriteria \| QueryFilterOrCriteria[],subscriberId: string): void |  |
| **getInitialDataSource** | getInitialDataSource(subscriberId: string): undefined \| string \| T[] |  |
| **getInitialQuery** | getInitialQuery(subscriberId: string): Query |  |
| **removeFilter** | removeFilter(filterId: QueryFilterId,subscriberId: string): void |  |
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
