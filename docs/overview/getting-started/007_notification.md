---
id: notification
title: Centralizing notifications
sidebar_label: Centralizing notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of sending all notifications to a "notification center" reponsible of displaying them.

## Final result

The result of this step is the following:

:::info New in this step
A click on the "Share" button displays a "success" notification and a click on the "Notify" button displays an "error" notification
:::

<Sandbox
name="step06-notification"
type="getting-started/cra"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

:::note
Oneki.js provides two hooks to centralize notifications:

- **useNotificationService** returns a service to send notifications on a topic (error topic, success topic, ...)
- **useNotifications** returns the notifications of a specific topic. Each time a notification is added or removed from the topic, the component is refreshed.
:::

A notification is a javascript object containing in particular these fields:

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
First, let's create the widget "Notification Center" to display them. If the topic is `success`, the notification appears in green and if it's `error`, the notification appears in red.

```tsx {4-5} title="src/modules/core/libs/constants.ts"
export const STATE_CART = 'cart';
export const URL_ADD_PRODUCT = '/cart/products';
export const URL_CART = '/cart';
export const NOTIF_TOPIC_ERROR = 'error';
export const NOTIF_TOPIC_SUCCESS = 'success';
```

```tsx title="src/modules/core/components/NotificationCenter.tsx"
const NotificationCenter: FC = () => {
  // useNotifications returns an arry of notification
  const errors = useNotifications(NOTIF_TOPIC_ERROR);
  const successes = useNotifications(NOTIF_TOPIC_SUCCESS);
  const notifications = mergeNotifications(errors, successes);

  return (
    <>
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`snackbar ${notification.topic}`}
          style={{ bottom: `${60 * index + 30}px` }}
        >
          <span>{notification.payload.message}</span>
          <span className="close" onClick={() => notification.remove()}>
            x
          </span>
        </div>
      ))}
    </>
  );
};

// Merge all notifications and order them by timestamp
const mergeNotifications = (a: Notification[], b: Notification[]): Notification[] => {
  return a.concat(b).sort((a, b) => a.timestamp - b.timestamp);
};

export default NotificationCenter;
```

As we want to centralize all notifications, we attach this widget to `<AppLayout />`:

```tsx {6} title="src/modules/core/layouts/AppLyout.tsx"
const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <NotificationCenter />
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default AppLayout;
```

## Sending the notifications

Up to now, the page listing the product uses the built-in `window.alert()` to display a notification.<br/>
Replace the code to:

- display a `Success` notification when cliking on the button `Share`.<br/>The notification disappears automatically after 5 seconds.
- display an `Error` notification when cliking on the button `Notify`

A click on these button sends a notification on a specific topic and the `<NotificationCenter />` displays them.

```tsx {2,12-28} title="src/pages/products/index.tsx"
const ProductsPage: FC = () => {
  const notificationService = useNotificationService();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => (
        <Product
          key={product.name}
          product={product}
          id={index}
          onClick={() =>
            notificationService.send({
              topic: NOTIF_TOPIC_SUCCESS,
              ttl: 5000,
              payload: {
                message: 'The product has been shared!',
              },
            })
          }
          onNotify={() =>
            notificationService.send({
              topic: NOTIF_TOPIC_ERROR,
              payload: {
                message: 'You will be notified when the product goes on sale',
              },
            })
          }
        />
      ))}
    </div>
  );
};

export default ProductsPage;
```

## Next step
Now that we can identify the logged user, we can save the content of the cart in the cloud so we don't loose its content after a refresh<br/>
**[In the next step](error-handling)**, we introduce the services offered by Oneki.js to retrieve and send data via AJAX requests. 
