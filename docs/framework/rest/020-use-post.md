---
id: use-post
title: usePost
sidebar_label: usePost
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
const [post, loading] = usePost(url, options);
const [post, loading] = useSecurePost(url, options);
```
The goal of ***usePost*** is to send an ajax POST request and returns back the payload sent by the server.<br/>
By default, the body of the request is a JSON string.
> ***useSecurePost*** is similar to ***usePost*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store

> ***Note***: The data are stored in the state of the component and **not** in the redux store.

### Parameters
#### Inputs
```javascript
// the URL the Ajax request is sent to [mandatory]
url: string,

// all options below are [optional]
options: {
  // if onSuccess is a function, this function is called after a sucessful call
  // if onSuccess is a string, the value must be a URL. The hook does a redirect to this URL after a sucessful call
  onSuccess: string | function(data, context), 

  // if onError is a function, this function is called in case of failure (Promise / async allowed)
  // if onError is a string, the value must be a URL then the hook does a redirect to this URL after a failure
  // if onError is not present, the error message is sent directly to the notificationService
  onError: string | function(error, context),

  // parameters below are passed directly to fetch()
  // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
  // for more details
  headers,
  credentials,
  cache,
  redirect,
  referrer,
  referrerPolicy,
  integrity,
  keepalive,
  signal
} 
```
#### Outputs
```javascript
// post is a function that sends the ajax POST request
// the signature is: post(data, options) where:
// - "data" is the body of the POST request
// - "options" is the same object as the one used for usePost. Use this object to override an option passed to usePost
post: function(data, options),

// a flag to indicate if the ajax request is pending
// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending
loading: boolean
```
## Examples
### Minimal example
This example shows how to display a form with two input fields: **name** and **firstname** and submit the data to a server via a ajax POST request.
* If the call is successful, one is redirected to ***/users***
* If the call fails, the error is sent to the ***notificationService***

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-get-notification-t7sfi?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor"
    style={{width:'100%', height:'1000px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-get-notification-t7sfi?fontsize=14&initialpath=%2Fusers%2Fcreate&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview"
    style={{width:'100%', height:'1000px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

### onSuccess example
This example show how to display a success message on top of the form if the POST call is successful.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-post-8z56k?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor"
    style={{width:'100%', height:'1200px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-post-8z56k?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview"
    style={{width:'100%', height:'1200px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

### onError with notification example
This is an example showing how to handle onError using the notification service<br/>
Actually this is exactly what it's done if no "onError" is specified in useGet

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-post-ustdh?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor"
    style={{width:'100%', height:'1300px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-post-ustdh?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview"
    style={{width:'100%', height:'1300px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>