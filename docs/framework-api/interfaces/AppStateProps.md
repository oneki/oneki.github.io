---
id: AppStateProps
title: AppStateProps
sidebar_label: AppStateProps
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **router** | [Router](/framework-api/interfaces/Router.md) |  |
| ErrorBoundaryComponent | ComponentType<[ErrorBoundaryComponentProps](/framework-api/types/ErrorBoundaryComponentProps.md)\> | The component displayed when an error occurs during the rendering phase<br/><br/>**Defaults to:** no error boundary component |
| i18nNs |  | **[More info here](/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
| initialLocale | string | Property to indicate the language to be used by default<br/><br/>**Defaults to:** <code>undefined</code> |
| initialState | [AnyState](/framework-api/interfaces/AnyState.md) \| Promise<[AnyState](/framework-api/interfaces/AnyState.md)\> | The initial state passed to the Redux store when it is created<br/><br/>**Defaults to:** <code>undefined</code> |
| LoadingComponent | ElementType<any\> | A component expected by <code><Suspense\></code> (used to display a loading indicator)<br/><br/>**Defaults to:** <code><DefaultLoadingComponent /\></code> that displays "Loading..." |
| services |  | A list of services that will be available globally in the application.<br/>**[More info here](/framework/service/introduction)** |
| settings | [AppSettings](/framework-api/interfaces/AppSettings.md) \| Promise<[AppSettings](/framework-api/interfaces/AppSettings.md)\> | Settings is a object usually defined in the file <code>src/settings.ts</code><br/>Data defined in settings.ts is available throughout the application and contains configuration data.<br/>**[More info here](/framework/configuration/introduction)** |
| store | [AppStore](/framework-api/interfaces/AppStore.md)<any, AnyAction\> | A standard Redux store, **but created via the helper** <code>createReduxStore</code> from onekijs<br/>The store must be created via this helper so onekijs can control it<br/><br/>**Defaults to:** A store created by <code><App/\></code> (recommended) |
| translations | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\>\> | An object containing the translations<br/>**[More info here](/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
