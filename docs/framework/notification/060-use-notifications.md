---
id: use-notifications
title: Display notifications
sidebar_label: Display notifications
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

**Oneki.js** provides the ***useNotifications*** hook to retrieve notifications for a specific topic.<br/>
As soon as the topic is updated, the component does a re-render.

```javascript
const notifications = useNotifications(topic)
```
<br/><br/>

:::note
Oneki.js provides a default service to send notifications, but not a default widget to handle them. You have to provide it
:::note




### Parameters
#### Inputs

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **topic**\* | string | topic is a entry in the Redux state, stored under "notifications.(topic)<br/><br/>**Example**: if topic=error, then the entry in Redux state is: ```notifications.error```<br/>The value of ```notifications.error``` is an array of notifications |

#### Outputs

The output is an array of **[Notification](../../api/interfaces/Notification)** which is an object with the following attributes:

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| **topic** | string | The topic to be used to send the notification |
| **id** | string | Unique ID of the notification. This id is used later to remove the notification from the Redux state |
| **ttl** | number | Time to leave of the notification in milliseconds. Set the value to 0 for no expiration<br/><br/>**Defaults to:** ttl in settings.ts. If not defined in settings.ts, then defaults to 5000 (0 for error topic) |
| **persist** | boolean | A flag to indicate if the notification should survive after a route change.<br/><br/>**Defaults to:** persist in settings.ts. If not defined in settings.ts, then defaults to true |
| **payload** | object | The payload of the notification. We recommand an object with at least the field *message*<br/>**Example**: { message: "test" } |

## Examples
### Minimal example

<SandboxExampleButton name="cra-notifications" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-notifications/src/components/NotificationCenter.tsx
```