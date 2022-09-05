---
id: I18nService
title: I18nService
sidebar_label: I18nService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **fetching** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **modifiers** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **changeLocale** | changeLocale(locale: string): void |  |
| **fetchTranslations** | fetchTranslations(locale: string,namespaces: ,options: ): void |  |
| **getLocaleUrl** | getLocaleUrl(locale: string,ns: string,settings: AppSettings): string |  |
| **init** | init(): void |  |
| **setFetchingTranslations** | setFetchingTranslations(fetching: boolean,locale: string,namespaces: ): void |  |
| **setLocale** | setLocale(locale: string): void |  |
| **setTranslations** | setTranslations(translations: AnonymousObject<any\>,locale: string): void |  |
