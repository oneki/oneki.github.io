---
id: App
title: App
sidebar_label: App
---

`<App/>` is the main component that bootstraps the **_Oneki.js framework_** on top of **_Create React App_**

This component is generally the external component of an application and is responsible for:  
- creating a Redux store:  
  - If the `store` property is present, **_App_** doesn't create a Redux store but uses the one referenced by the property.  
  - Otherwise, **&lt;App/&gt;** creates the Redux store. The initial state of the store is the object referenced by the property `initialState`.  
- creating a React Router. By default, it creates a **BrowserRouter** that can be changed / configured via the **settings.ts** file  
- creating and injecting global **services** in the Redux store  
- creating a context that contains three elements:  
  - **router**: accessible via useRouter()  
  - **settings**: accessible via useSettings()  
  - **redux store**: accessible via useStore()

#### Custom redux store

A custom Redux store can be created by calling the helper `createReduxStore` from Oneki.js

```ts
const store = createReduxStore((initialState = {}), (middlewares = []));
```  
This helper expects an initial state and an array of Redux middlewares.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| ErrorBoundaryComponent | ComponentType<[ErrorBoundaryComponentProps](/framework-api/types/ErrorBoundaryComponentProps.md)\> | The component displayed when an error occurs during the rendering phase<br/><br/>**Defaults to:** no error boundary component |
| i18nNs |  | **[More info here](/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
| initialLocale | string | Property to indicate the language to be used by default<br/><br/>**Defaults to:** <code>undefined</code> |
| initialState | [AnyState](/framework-api/interfaces/AnyState.md) \| Promise<[AnyState](/framework-api/interfaces/AnyState.md)\> | The initial state passed to the Redux store when it is created<br/><br/>**Defaults to:** <code>undefined</code> |
| LoadingComponent | ElementType<any\> | A component expected by <code><Suspense\></code> (used to display a loading indicator)<br/><br/>**Defaults to:** <code><DefaultLoadingComponent /\></code> that displays "Loading..." |
| services |  | A list of services that will be available globally in the application.<br/>**[More info here](/framework/service/introduction)** |
| settings | [AppSettings](/framework-api/interfaces/AppSettings.md) \| Promise<[AppSettings](/framework-api/interfaces/AppSettings.md)\> | Settings is a object usually defined in the file <code>src/settings.ts</code><br/>Data defined in settings.ts is available throughout the application and contains configuration data.<br/>**[More info here](/framework/configuration/introduction)** |
| store | [AppStore](/framework-api/interfaces/AppStore.md)<any, AnyAction\> | A standard Redux store, **but created via the helper** <code>createReduxStore</code> from onekijs<br/>The store must be created via this helper so onekijs can control it<br/><br/>**Defaults to:** A store created by <code><App/\></code> (recommended) |
| translations | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<string\>\> | An object containing the translations<br/>**[More info here](/framework/i18n/introduction)**<br/><br/>**Defaults to:** <code>undefined</code> |
