---
id: AppProviderProps
title: AppProviderProps
sidebar_label: AppProviderProps
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **router** | [Router](/docs/framework-api/interfaces/Router.md) |  |
| **settings** | [AppSettings](/docs/framework-api/interfaces/AppSettings.md) |  |
| **store** | [AppStore](/docs/framework-api/interfaces/AppStore.md)<any, AnyAction\> |  |
| ErrorBoundaryComponent | ComponentType<[ErrorBoundaryComponentProps](/docs/framework-api/types/ErrorBoundaryComponentProps.md)\> | The component displayed when an error occurs during the rendering phase<br/><br/>**Defaults to:** no error boundary component |
| i18nNs |  | **[More info here](/docs/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
| initialLocale | string | Property to indicate the language to be used by default<br/><br/>**Defaults to:** <code>undefined</code> |
| services |  | A list of services that will be available globally in the application.<br/>**[More info here](/docs/framework/service/introduction)** |
| translations | [AnonymousObject](/docs/framework-api/interfaces/AnonymousObject.md)<[AnonymousObject](/docs/framework-api/interfaces/AnonymousObject.md)<string\>\> | An object containing the translations<br/>**[More info here](/docs/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
