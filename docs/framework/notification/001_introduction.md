---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **Oneki.js** provides a global service to centralize notifications in the global state

Notifications are sent using the global **[Notification service](./use-notification-service)** on a specific **topic** and consumed using the **[useNotifications](./use-notifications)** hook

<img alt="Service architecture" src={useBaseUrl('img/onekijs-Notification channel.svg')} />

:::note
A topic is created the first time a notification is sent if it doesn't already exist.
:::

### Detailed architecture

The **Notification service** stores notifications in the global state. Each topic consists of an entry in the global state under the **notifications** key:

```javascript
// Redux state
{
  notifications: {
    error: [{
      id: '1',
      ttl: 0, // delay before expiration disappers in milliseconds. 0 = no expiration
      topic: 'error',
      timestamp: 1590326463,
      ... // you can put what you want in the notification. We recommend to create an object payload
    }],
    success: [],
    myTopic: [],
    ...: [],
  }
}
```

**useNotifications** selects a specific topic in the Redux state and is usually used by a central component to display notifications.

<img alt="Notification architecture" src={useBaseUrl('img/notification_service.svg')} />