---
id: DefaultCollectionBroker
title: DefaultCollectionBroker
sidebar_label: DefaultCollectionBroker
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **addFilter** | addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId): void |  |
| **addFilterCriteria** | addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: null \| string \| number \| boolean \| ,not: boolean,id: string \| number \| symbol,parentFilterId: string \| number \| symbol): void |  |
| **addSortBy** | addSortBy(sortBy: QuerySortBy,prepend: boolean): void |  |
| **addSubscriber** | addSubscriber(subscriber: Collection<T, I, S\>): void |  |
| **clearFields** | clearFields(): void |  |
| **clearFilter** | clearFilter(): void |  |
| **clearParam** | clearParam(key: string): void |  |
| **clearParams** | clearParams(): void |  |
| **clearSearch** | clearSearch(): void |  |
| **clearSort** | clearSort(): void |  |
| **clearSortBy** | clearSortBy(): void |  |
| **filter** | filter(filter: QueryFilter \| QueryFilterCriteria \| ): void |  |
| **getInitialQuery** | getInitialQuery(): Pick<CollectionOptions<T, I\>, initialFields \| initialFilter \| initialParams \| initialSearch \| initialSort \| initialSortBy\> |  |
| **removeFilter** | removeFilter(id: QueryFilterId): void |  |
| **removeSortBy** | removeSortBy(id: string): void |  |
| **removeSubscriber** | removeSubscriber(subscriber: Collection<T, I, CollectionState<T, I\>\>): void |  |
| **search** | search(search: Primitive): void |  |
| **setData** | setData(data: ): void |  |
| **setFields** | setFields(fields: ): void |  |
| **setParam** | setParam(key: string,value: any): void |  |
| **setParams** | setParams(params: AnonymousObject<any\>): void |  |
| **sort** | sort(dir: QuerySortDir): void |  |
| **sortBy** | sortBy(sortBy: string \| QuerySortBy \| ): void |  |
