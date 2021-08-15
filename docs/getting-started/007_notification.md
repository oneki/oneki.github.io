---
id: notification
title: Centralizing notifications
sidebar_label: Centralizing notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in sending all notifications to a "notification center" in charge of displaying them.

## Final result

The result of this step is as follows:

:::info New in this step
Clicking the "Share" button displays a "success" notification and clicking the "Notify" button displays an "error" notification
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
    name="step06-notification"
    type="getting-started/cra"
    view="preview"
    height="600"
    modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step06-notification"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>

:::note
Oneki.js provides two hooks to centralize notifications:

- **useNotificationService** returns a service to send notifications on a topic (error topic, success topic, ...)
- **useNotifications** returns notifications for a specific topic. Each time a notification is added or removed from the topic, the component is refreshed.
:::

A notification is a javascript object containing at least these fields:

```javascript
const notification = {
  // the topic used for sending the notification (e.g: error)
  topic: 'error', 
  // Time to leave of the notification in milliseconds. Default value=0 (means no expiration)
  ttl: 0, 
  // you can put whatever you want in the notification. We recommend to create a payload object
  // containing a message property
  payload: { 
    message: "An error occured while adding the product"
  }
  ... 
}
```

## Notification center
Oneki.js provides a service to send notifications, but not a widget to display them.<br/>
First, let's create the "Notification Center" widget to display them. If the topic is `success`, the notification appears in green and if it's `error`, the notification appears in red.

<Tabs>
  <TabItem value="cra">

  ```tsx {4-5} title="src/modules/core/libs/constants.ts"
  export const STATE_CART = 'cart';
  export const URL_ADD_PRODUCT = '/cart/products';
  export const URL_CART = '/cart';
  export const NOTIF_TOPIC_ERROR = 'error';
  export const NOTIF_TOPIC_SUCCESS = 'success';
  ```
  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/components/NotificationCenter.tsx
  ```

  As we want to centralize all notifications, we attach this widget to <code>&lt;AppLayout /&gt;</code>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/layouts/AppLayout.tsx
  ```

  </TabItem>
  <TabItem value="next">

  ```tsx {4-5} title="src/modules/core/libs/constants.ts"
  export const STATE_CART = 'cart';
  export const URL_ADD_PRODUCT = '/api/cart/products';
  export const URL_CART = '/api/cart';
  export const NOTIF_TOPIC_ERROR = 'error';
  export const NOTIF_TOPIC_SUCCESS = 'success';
  ```
  <p/>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/components/NotificationCenter.tsx
  ```

  As we want to centralize all notifications, we attach this widget to <code>&lt;AppLayout /&gt;</code>

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/layouts/AppLayout.tsx
  ```

  </TabItem>

</Tabs>

## Sending the notifications

So far, the page listing the products uses the built-in function `window.alert()` to display a notification.<br/>
We want to:

- display a `Success` notification when the `Share` button is clicked.<br/>The notification disappears automatically after 5 seconds.
- display an `Error` notification when clicking on the `Notify` button.

Clicking on these buttons sends a notification to a specific topic and the `<NotificationCenter />` displays them.

<Tabs>
  <TabItem value="cra">

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/pages/products/index.tsx
  ```

  </TabItem>
  <TabItem value="next">

  ```tsx reference
  https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/pages/index.tsx
  ```

  </TabItem>

</Tabs>

## Next step
**[In the next step](error-handling)**, we introduce the services offered by Oneki.js to handle errors.
