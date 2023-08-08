---
id: use-notification-service
title: Create notifications
sidebar_label: Create notifications
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

**Oneki.js** provides the ***useNotificationService*** hook to give access to a central notification service.<br/>
The notificationService is a singleton and is created the first time ***useNotificationService*** is called.

```javascript
const notificationService = useNotificationService();
```
<br/><br/>

:::tip
Oneki.js provides a default notificationService. You can redefine it by injecting your own notificationService (see advanced topics)
:::

### Parameters
#### Inputs
There is no input.
#### Outputs
The output is a **[NotificationService](../../api/classes/NotificationService)** providing the following methods: 

| Method | Type | Description |
| ------ | --- |----------- | 
| **send** | (notification: [Notification](../../api/interfaces/Notification)) => void | the main method to send a notification |
| **remove** | (id: string) => void | method to remove a notification for the Redux state |
| **error** | (notification: [Notification](../../api/interfaces/Notification)) => void | alias of method 'send' with hardcoded topic=error |
| **success** | (notification: [Notification](../../api/interfaces/Notification)) => void | alias of method 'send' with hardcoded topic=success |
| **warning** | (notification: [Notification](../../api/interfaces/Notification)) => void | alias of method 'send' with hardcoded topic=warning |
| **info** | (notification: [Notification](../../api/interfaces/Notification)) => void | alias of method 'send' with hardcoded topic=info |
| **debug** | (notification: [Notification](../../api/interfaces/Notification)) => void | alias of method 'send' with hardcoded topic=debug |


**[Notification](../../api/interfaces/Notification)** is an object with the following attributes:

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| **topic** | string | The topic to be used to send the notification.<br/><br/>**Defaults to:** default |
| **id** | string | Unique ID of the notification. This id is used later to remove the notification from the Redux state.<br/><br/>**Defaults to:** Autogenerated ID |
| **ttl** | number | Time to leave of the notification in milliseconds. Set the value to 0 for no expiration<br/><br/>**Defaults to:** ttl in settings.ts. If not defined in settings.ts, then defaults to 5000 (0 for error topic) |
| **persist** | boolean | A flag to indicate if the notification should survive after a route change.<br/><br/>**Defaults to:** persist in settings.ts. If not defined in settings.ts, then defaults to true |
| **payload** | object | You can put whatever you want in the payload. We recommand an object with at least the field *message*<br/>**Example**: { message: "test" }<br/><br/>**Defaults to:** undefined |

## Examples
### Minimal example
<SandboxExampleButton name="cra-notifications" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-notifications/src/pages/NotificationPage.tsx
```