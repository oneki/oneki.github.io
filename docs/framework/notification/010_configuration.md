---
id: configuration
title: Configuration
sidebar_label: Configuration
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A topic can be configured in **[settings.ts](../configuration/introduction)** via the key **notification.(topic)**
The configuration parameters of a topic are the following:

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| **ttl** | number | The number of milliseconds the notification will remain in the topic before being automatically deleted. Set the value to 0 for no expiration<br/>**Example:** Set the TTL to 5000 for the sucess topic, so that the notification is only displayed during 5 seconds.<br/><br/>**Defaults to:** 5000 (0 for error topic)
| **max** | number | The maximum number of notification stored in a topic. If a new notification is added when the topic is full, the oldest notification is deleted. Set the value to 0 for no limit<br/><br/>**Defaults to:** 5 (0 for error topic)
| **persist** | boolean | A flag to indicate if the notification should survive after a route change.<br/><br/>**Defaults to:** true

:::tip
The values in settings.ts becomes the default values for a topic.
These values can be overridden when sending a notification
:::

**Configuration example**

```javascript
// content of settings.ts
export default {
  notification: {
    error: { // 'error' is the name of the topic
      ttl: 0,
      max: 3,
      persist: true
    },
    success: {
      ttl: 2000,
      max: 3,
      persist: false
    },
    'login-error': {
      ttl: 0,
      max: 1,
    },
  }
};