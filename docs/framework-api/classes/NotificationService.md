---
id: NotificationService
title: NotificationService
sidebar_label: NotificationService
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **add** | add(notification: Notification): void |  |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **clearTopic** | clearTopic(topic: string): void |  |
| **constructor** | new NotificationService() |  |
| **context** | [AppContext](/framework-api/interfaces/AppContext.md) |  |
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
| **state** | [AnyState](/framework-api/interfaces/AnyState.md) |  |
| **success** | success(payload: any): void |  |
| **touch** | touch(notificationId: string \| number \| symbol,permanent: boolean): void | This method is called whenever the auto-removal of the notification should be suspended |
| **untouch** | untouch(notificationId: string \| number \| symbol): void | This method is called whenever the auto-removal of the notification should be reactivated |
| **warning** | warning(payload: any): void |  |
