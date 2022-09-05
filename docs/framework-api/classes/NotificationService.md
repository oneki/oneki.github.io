---
id: NotificationService
title: NotificationService
sidebar_label: NotificationService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **add** | add(notification: Notification): void |  |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **clearTopic** | clearTopic(topic: string): void |  |
| **debug** | debug(payload: any): void |  |
| **error** | error(payload: any): void |  |
| **formatLevelNotification** | formatLevelNotification(level: NotificationLevel,notification: string \| NotificationContent): NotificationContent |  |
| **formatNotification** | formatNotification(notificationContent: string \| NotificationContent,settings: AppSettings,notificationService: default): Notification |  |
| **info** | info(payload: any): void |  |
| **init** | init(): void |  |
| **onRouteChange** | onRouteChange(): void |  |
| **remove** | remove(notificationId: string \| number \| symbol): void |  |
| **send** | send(notificationContent: string \| NotificationContent): void |  |
| **success** | success(payload: any): void |  |
| **warning** | warning(payload: any): void |  |
