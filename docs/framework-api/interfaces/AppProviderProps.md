---
id: AppProviderProps
title: AppProviderProps
sidebar_label: AppProviderProps
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **router** | [Router](/framework-api/interfaces/Router.md) |  |
| **settings** | [AppSettings](/framework-api/interfaces/AppSettings.md) |  |
| **store** | [AppStore](/framework-api/interfaces/AppStore.md)<any, AnyAction\> |  |
| ErrorBoundaryComponent | ComponentType<[ErrorBoundaryComponentProps](/framework-api/types/ErrorBoundaryComponentProps.md)\> | The component displayed when an error occurs during the rendering phase<br/><br/>**Defaults to:** no error boundary component |
| i18nNs |  | **[More info here](/framework/i18n/001_introduction.md)**<br/><br/>**Defaults to:** <code>undefined</code> |
| initialLocale | string | Property to indicate the language to be used by default<br/><br/>**Defaults to:** <code>undefined</code> |
| services |  | A list of services that will be available globally in the application.<br/>**[More info here](/framework/service/001_introduction.md)** |
| translations | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\>\> | An object containing the translations<br/>**[More info here](/framework/i18n/001_introduction.md)**<br/><br/>**Defaults to:** <code>undefined</code> |
