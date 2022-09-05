---
id: ReactRouter
title: ReactRouter
sidebar_label: ReactRouter
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **history** |  |  |
| **i18n** | [I18n](/framework-api/interfaces/I18n.md) |  |
| **params** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **settings** | [AppSettings](/framework-api/interfaces/AppSettings.md) |  |
| listeners |  | **Defaults to:** [] |
| navigate | [NavigateFunction](/framework-api/interfaces/NavigateFunction.md) |  |
| route | string |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **back** | back(delta: number): void |  |
| **deleteOrigin** | deleteOrigin(): void |  |
| **forward** | forward(delta: number): void |  |
| **getLinkComponent** | getLinkComponent(props: LinkProps,ref: null \| MutableRefObject<null \| HTMLAnchorElement\> \| ): Element |  |
| **getOrigin** | getOrigin():  |  |
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
| **onLocationChange** | onLocationChange(): void |  |
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
| **replace** | replace(urlOrLocation: string \| Location,options: RouterPushOptions): void |  |
| **saveOrigin** | saveOrigin(force: boolean): void |  |
| **sync** | sync(location: Location,navigate: NavigateFunction,i18n: I18n,settings: AppSettings): void |  |
