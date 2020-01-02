---
id: use-post
title: usePost
sidebar_label: usePost
---
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
```jsx
import { usePost, useSetting } from "onekijs";
import React from "react";
import { useForm } from "react-hook-form";

export default () => {
  // baseUrl is defined in settings.js
  const baseUrl = useSetting("server.baseUrl");

  // use react-hook-from to build the form
  const { register, handleSubmit } = useForm(); 
  
  const [post, loading] = usePost(`${baseUrl}/users`, {
    onSuccess: "/users" // if the post request is successful, redirect to the /users page
  });

  return (
    <div>
      <form>
        {/* register your input into the hook by invoking the "register" function */}
        <div><b>Name: </b><input name="name" ref={register}/></div>
        <div><b>Firstname: </b><input name="firstname" ref={register} /></div>
        <LoadingButton label="Submit" loading={loading} onClick={handleSubmit(post)} />
      </form>
    </div>
  );
};

// A simple "loading" button
const LoadingButton = ({ loading, label, onClick }) => {
  const buttonLabel = loading ? 'Loading ...' : label;
  return (
    <button onClick={onClick}>{buttonLabel}</button>
  )
};
```
### onSuccess example
This example show how to display a success message on top of the form if the POST call is successful.
```jsx
import { usePost, useSetting } from "onekijs";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export default () => {
  // baseUrl is defined in settings.js
  const baseUrl = useSetting("server.baseUrl");

  const [successMsg, setSuccessMsg] = useState(null);

  // use react-hook-from to build the form
  const { register, handleSubmit } = useForm();

  // onError must be encapsulated in a useCallback
  const onSuccess = useCallback((data, context) => {
    setSuccessMsg(`User ${data.firstname} ${data.name} created successfully`);
  }, [setSuccessMsg]);
  
  const [post, loading] = usePost(`${baseUrl}/users`, { onSuccess });

  return (
    <div>
      {successMsg && <span style={{color: 'green'}}>{successMsg}</span>}
      <form>
        {/* register your input into the hook by invoking the "register" function */}
        <div><b>Name: </b><input name="name" ref={register}/></div>
        <div><b>Firstname: </b><input name="firstname" ref={register} /></div>
        <LoadingButton label="Submit" loading={loading} onClick={handleSubmit(post)} />
      </form>
    </div>
  );
};

// A simple "loading" button
const LoadingButton = ({ loading, label, onClick }) => {
  const buttonLabel = loading ? 'Loading ...' : label;
  return (
    <button onClick={onClick}>{buttonLabel}</button>
  )
};
```

### onError with notification example
This is an example showing how to handle onError using the notification service<br/>
Actually this is exactly what it's done if no "onError" is specified in useGet
```jsx
import { usePost, useNotificationService } from "onekijs";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

export default () => {
  // use react-hook-from to build the form
  const { register, handleSubmit } = useForm();
  
  const notificationService = useNotificationService();

  // onError must be encapsulated in a useCallback
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
  
  const [post, loading] = usePost("WRONG_URL", { onError });

  return (
    <div>
      <form>
        {/* register your input into the hook by invoking the "register" function */}
        <div><b>Name: </b><input name="name" ref={register}/></div>
        <div><b>Firstname: </b><input name="firstname" ref={register} /></div>
        <LoadingButton label="Submit" loading={loading} onClick={handleSubmit(post)} />
      </form>
    </div>
  );
};

// A simple "loading" button
const LoadingButton = ({ loading, label, onClick }) => {
  const buttonLabel = loading ? 'Loading ...' : label;
  return (
    <button onClick={onClick}>{buttonLabel}</button>
  )
};
```