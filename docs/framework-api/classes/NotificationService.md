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
| **formatLevelNotification** | formatLevelNotification(level: NotificationLevel,payload: any): NotificationContent |  |
| **formatNotification** | formatNotification(notificationContent: ReactNode \| NotificationContent,settings: AppSettings,notificationService: default): Notification |  |
| **getNotification** | getNotification(notificationId: string \| number \| symbol): void \| Notification |  |
| **info** | info(payload: any): void |  |
| **init** | init(): void |  |
| **onRouteChange** | onRouteChange(): void |  |
| **remove** | remove(notificationId: string \| number \| symbol): void |  |
| **send** | send(notificationContent: ReactNode \| NotificationContent): void |  |
| **success** | success(payload: any): void |  |
| **touch** | touch(notificationId: string \| number \| symbol,permanent: boolean): void | This method is called whenever the auto-removal of the notification should be suspended |
| **untouch** | untouch(notificationId: string \| number \| symbol): void | This method is called whenever the auto-removal of the notification should be reactivated |
| **warning** | warning(payload: any): void |  |
