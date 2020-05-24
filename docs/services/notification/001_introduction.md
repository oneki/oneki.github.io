---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **Oneki.js** provides a global service to centralize notifications in the global state

The notifications are sent using the global **[Notification service](./use-notification-service)** on a specific **topic** and consumed using the hook **[useNotifications](./use-notifications)**

<img alt="Service architecture" src={useBaseUrl('img/onekijs-Notification channel.svg')} />

The topics are created the first time a notification is sent if they don't exist

### Detailed architecture

The **Notification service** stores the notifications in the Redux global state. Each topic consists of a key in the global state under the key **notifications**:

```javascript
// global Redux state
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

**useNotifications** selects a specific topic in the global state and is generally used by a central component to display the notifications

<img alt="Notification architecture" src={useBaseUrl('img/notification_service.svg')} />