---
id: DefaultSelectBroker
title: DefaultSelectBroker
sidebar_label: DefaultSelectBroker
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId,subscriberId: string): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: null \| string \| number \| boolean \| ,not: boolean,id: string \| number \| symbol,parentFilterId: string \| number \| symbol,subscriberId: string): void |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean,subscriberId: string): void |  |
| **addSubscriber** | addSubscriber(subscriberId: string,subscriber: C): void |  |
| **clearFields** | clearFields(subscriberId: string): void |  |
| **clearFilter** | clearFilter(subscriberId: string): void |  |
| **clearParam** | clearParam(key: string,subscriberId: string): void |  |
| **clearParams** | clearParams(subscriberId: string): void |  |
| **clearSearch** | clearSearch(subscriberId: string): void |  |
| **clearSort** | clearSort(subscriberId: string): void |  |
| **clearSortBy** | clearSortBy(subscriberId: string): void |  |
| **filter** | filter(filter: QueryFilter \| QueryFilterCriteria \| ,subscriberId: string): void |  |
| **getData** | getData(subscriberId: string): undefined \|  |  |
| **getFields** | getFields(subscriberId: string): undefined \|  |  |
| **getFilter** | getFilter(subscriberId: string): undefined \| QueryFilter \| QueryFilterCriteria \|  |  |
| **getInitialDataSource** | getInitialDataSource(subscriberId: string): undefined \| string \|  |  |
| **getInitialQuery** | getInitialQuery(subscriberId: string): Query |  |
| **getParams** | getParams(subscriberId: string): undefined \| AnonymousObject<any\> |  |
| **getSearch** | getSearch(subscriberId: string): undefined \| Primitive |  |
| **getSort** | getSort(subscriberId: string): undefined \| QuerySortDir |  |
| **getSortBy** | getSortBy(subscriberId: string): undefined \| string \| QuerySortBy \|  |  |
| **getUrl** | getUrl(subscriberId: string): undefined \| string |  |
| **removeFilter** | removeFilter(id: QueryFilterId,subscriberId: string): void |  |
| **removeSortBy** | removeSortBy(id: string,subscriberId: string): void |  |
| **removeSubscriber** | removeSubscriber(id: string): void |  |
| **search** | search(search: Primitive,subscriberId: string): void |  |
| **setData** | setData(data: ,query: Query,subscriberId: string): void |  |
| **setDefaultValue** | setDefaultValue(defaultValue: undefined \| null \| T \| ,subscriberId: string): void |  |
| **setFields** | setFields(fields: ,subscriberId: string): void |  |
| **setParam** | setParam(key: string,value: any,subscriberId: string): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>,subscriberId: string): void |  |
| **setUrl** | setUrl(url: string,query: Query,subscriberId: string): void |  |
| **sort** | sort(dir: QuerySortDir,subscriberId: string): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| ,subscriberId: string): void |  |
