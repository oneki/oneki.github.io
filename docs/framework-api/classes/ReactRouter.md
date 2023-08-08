---
id: ReactRouter
title: ReactRouter
sidebar_label: ReactRouter
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **back** | back(delta: number): void |  |
| **constructor** | new ReactRouter() |  |
| **deleteOrigin** | deleteOrigin(): void |  |
| **forward** | forward(delta: number): void |  |
| **getLinkComponent** | getLinkComponent(props: LinkProps,ref: null \| MutableRefObject<null \| HTMLAnchorElement\> \| ): Element |  |
| **getOrigin** | getOrigin():  |  |
| **hash** |  |  |
| **history** | [Location](/framework-api/interfaces/Location.md)[] |  |
| **href** |  |  |
| **i18n** | [I18n](/framework-api/interfaces/I18n.md) |  |
| **init** | init(settings: AppSettings): void |  |
| **listen** | listen(callback: LocationChangeCallback): UnregisterCallback | callback(url) where url is:  
{  
  url: string, // example: /users/1?test=1&test2#h=3&h2  
  route: string, // example: /users/[id]  
  pathname: string, // example: /users/1  
  query: obj, // example: {test:1,test2:null}  
  hash: obj // example: {h:3, h2:null}  
  state: obj // example: {key1: 'value1'}  
} |
| **location** |  |  |
| **onLocationChange** | onLocationChange(): void |  |
| **params** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **pathname** |  |  |
| **previousLocation** |  |  |
| **push** | push(urlOrLocation: string \| Location,options: RouterPushOptions): void | url can be a string or an object.  
If object, the format is the following  
{  
  url: string, // example: /users/1?test=1&test2#h=3&h2  
  route: string, // example: /users/[id]  
  pathname: string, // example: /users/1  
  query: obj, // example: {test:1,test2:null}  
  hash: obj // example: {h:3, h2:null}  
  state: obj // example: {key1: 'value1'}  
} |
| **query** |  |  |
| **replace** | replace(urlOrLocation: string \| Location,options: RouterPushOptions): void |  |
| **saveOrigin** | saveOrigin(force: boolean): void |  |
| **settings** | [AppSettings](/framework-api/interfaces/AppSettings.md) |  |
| **state** |  |  |
| **sync** | sync(location: Location,navigate: NavigateFunction,i18n: I18n,settings: AppSettings): void |  |
| listeners | [LocationChangeCallback](/framework-api/types/LocationChangeCallback.md)[] | **Defaults to:** [] |
| navigate | [NavigateFunction](/framework-api/interfaces/NavigateFunction.md) |  |
| route | string |  |
