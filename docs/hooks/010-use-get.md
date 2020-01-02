---
id: use-get
title: useGet
sidebar_label: useGet
---
```javascript
const [data, loading] = useGet(url, options);
const [data, loading] = useSecureGet(url, options);
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
```
## Examples
### Minimal example
```jsx
import { useGet, useSetting, isNull } from "onekijs";
import React from "react";
import { Link } from "react-router-dom";

export default () => {
  // baseUrl is defined in settings.js
  const baseUrl = useSetting("server.baseUrl"); 

  // call useGet to retrieve the list of users
  const [users, loading] = useGet(`${baseUrl}/users`);

  // Loading is activated only after 100ms (configurable via settings.js)
  // Before the 100ms, useGet returns loading=false and users=null
  // After 100ms and if the ajax request is still pending, useGet returns loading=true and users=null
  // Once the ajax request returns a response, useGet returns loading=false and users=[...]
  if (loading) return <div>Loading ...</div>;

  return (
  <>
    {users && (
    <ul>
      {users.map(user => (
      <li key={`key-${user.id}`}>
        {user.firstname} {user.name}
      </li>
      ))}
    </ul>
    )}
  </>
  );
};
```
### onError example
```jsx
import { useGet } from "onekijs";
import React, { useCallback, useState } from "react";

export default () => {
  const [errorMsg, setErrorMsg] = useState(null);

  // onError must be encapsulated in a useCallback
  const onError = useCallback((error, context) => {
    setErrorMsg(error.message);
  }, [setErrorMsg]
  );

  // call useGet to retrieve the list of users
  const [users, loading] = useGet('WRONG_URL', { onError });

  if (loading) return <div>Loading ...</div>;
  
  return (
  <>
    {errorMsg && <span style={{color:'red'}}>Error: {errorMsg}</span>}
    {users && (
    <ul>
      {users.map(user => (
      <li key={`key-${user.id}`}>
        {user.firstname} {user.name}
      </li>
      ))}
    </ul>
    )}
  </>
  );
};
```

### onError with notification example
This is an example showing how to handle onError using the notification service<br/>
Actually this is exactly what it's done if no "onError" is specified in useGet
```jsx
import { useGet, useNotificationService } from "onekijs";
import React, { useCallback } from "react";
export default () => {
  const notificationService = useNotificationService();
  const onError = useCallback(e => {
    notificationService.error(e);
    // the lifetime of the error is taken from settings.notification.lifetime.error
    // if you want a custom lifetime for this error, you have to use the send method 
    // notificationService.send({
    //   topic: 'error',
    //   lifeTime: 1000,
    //   payload: e
    // })
  }, [notificationService]);

  // call useGet to retrieve the list of users
  const [users, loading] = useGet('WRONG_URL', { onError });
  if (loading) return <div>Loading ...</div>;
  
  return (
  <>
    {users && (
    <ul>
      {users.map(user => (
      <li key={`key-${user.id}`}>
        {user.firstname} {user.name}
      </li>
      ))}
    </ul>
    )}
  </>
  );
};
```