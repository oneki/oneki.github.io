---
id: LocalRouter
title: LocalRouter
sidebar_label: LocalRouter
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **history** |  |  |
| **i18n** | [I18n](/framework-api/interfaces/I18n.md) |  |
| **listeners** |  |  |
| **params** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **settings** | [AppSettings](/framework-api/interfaces/AppSettings.md) |  |
| route | string |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **back** | back(): void |  |
| **deleteOrigin** | deleteOrigin(): void |  |
| **forward** | forward(): void |  |
| **getLinkComponent** | getLinkComponent(): Element |  |
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
| **push** | push(urlOrLocation: string \| Location): void | url can be a string or a location.  
If location, the format is the following  
{  
  url: string, // example: /users/1?test=1&test2#h=3&h2  
  route: string, // example: /users/[id]  
  pathname: string, // example: /users/1  
  query: obj, // example: {test:1,test2:null}  
  hash: obj // example: {h:3, h2:null}  
  state: obj // example: {key1: 'value1'}  
} |
| **replace** | replace(urlOrLocation: string \| Location): void |  |
| **saveOrigin** | saveOrigin(force: boolean): void |  |