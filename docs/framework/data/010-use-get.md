---
id: use-get
title: useGet
sidebar_label: useGet
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```javascript
const [data, loading, refresh] = useGet(url, options);
const [data, loading, refresh] = useSecureGet(url, options);
```
The goal of ***useGet*** is to send an ajax GET request and returns back the data.<br/>
> ***useSecureGet*** is similar to ***useGet*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store

> ***Note***: The data are stored in the state of the component and **not** in the redux store.

### Parameters
#### Inputs
```javascript
// the URL the Ajax request is sent to [mandatory]
url: string,

// all options below are [optional]
options: {
  // function called on a sucessfull GET (Promise / async allowed)
  onSuccess: function(data, context), 

  // if onError is a function, this function is called in case of failure (Promise / async allowed)
  // if onError is a string, the value must be a URL then the hook does a redirect to this URL
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
// the data returned by the server.
// "data" is null while the Ajax request is pending.
data: object,

// a flag to indicate if the ajax request is pending
// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending
loading: boolean

// a function that can be called to force a re-execution of useGet
refresh: function()
```
## Examples
### Minimal example
The minimal example shows how to retrieve data from a backend server.<br/>
A loading indicator (Loading ...) is displayed while the AJAX request is pending.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-get-yhj30?fontsize=14&hidenavigation=1&initialpath=%2Fusers&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=editor"
    style={{width:'100%', height:'700px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-get-yhj30?fontsize=14&hidenavigation=1&initialpath=%2Fusers&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=preview"
    style={{width:'100%', height:'700px', border:0, bordeRadius: '4px', overflow:'hidden'}}
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
    src="https://codesandbox.io/embed/onekijs-use-get-notification-kqtmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=editor"
    style={{width:'100%', height:'1050px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-use-get-notification-kqtmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=preview"
    style={{width:'100%', height:'1050px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>