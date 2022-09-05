---
id: Router
title: Router
sidebar_label: Router
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **back** | back(delta: number): void |  |
| **deleteOrigin** | deleteOrigin(): void |  |
| **forward** | forward(delta: number): void |  |
| **getLinkComponent** | getLinkComponent(props: LinkProps,ref: null \| MutableRefObject<null \| HTMLAnchorElement\> \| ): Element |  |
| **getOrigin** | getOrigin():  |  |
| **hash** | undefined \| null \| [ParsedQuery](/framework-api/interfaces/ParsedQuery.md)<string\> |  |
| **history** |  |  |
| **href** | undefined \| null \| string |  |
| **i18n** | [I18n](/framework-api/interfaces/I18n.md) |  |
| **init** | init(settings: AppSettings): void |  |
| **listen** | listen(callback: LocationChangeCallback): UnregisterCallback |  |
| **location** | [Location](/framework-api/interfaces/Location.md) |  |
| **params** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **pathname** | null \| string |  |
| **previousLocation** | [Location](/framework-api/interfaces/Location.md) |  |
| **push** | push(urlOrLocation: string \| Location,options: RouterPushOptions): void |  |
| **query** | undefined \| null \| [ParsedQuery](/framework-api/interfaces/ParsedQuery.md)<string\> |  |
| **replace** | replace(urlOrLocation: string \| Location,options: RouterPushOptions): void |  |
| **saveOrigin** | saveOrigin(force: boolean): void |  |
| **settings** | [AppSettings](/framework-api/interfaces/AppSettings.md) |  |
| **state** | undefined \| null \| [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| route | string |  |
