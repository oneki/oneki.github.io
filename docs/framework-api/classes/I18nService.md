---
id: I18nService
title: I18nService
sidebar_label: I18nService
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **changeLocale** | changeLocale(locale: string): void |  |
| **constructor** | new I18nService(notificationService: default) |  |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **fetching** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **fetchTranslations** | fetchTranslations(locale: string,namespaces: string[],options: ): void |  |
| **getLocaleUrl** | getLocaleUrl(locale: string,ns: string,settings: AppSettings): string |  |
| **init** | init(): void |  |
| **modifiers** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **notificationService** | [default](/framework-api/classes/NotificationService.md) |  |
| **setFetchingTranslations** | setFetchingTranslations(fetching: boolean,locale: string,namespaces: string[]): void |  |
| **setLocale** | setLocale(locale: string): void |  |
| **setTranslations** | setTranslations(translations: AnonymousObject<any\>,locale: string): void |  |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |
