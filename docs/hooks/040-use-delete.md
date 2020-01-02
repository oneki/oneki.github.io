---
id: use-delete
title: useDelete
sidebar_label: useDelete
---
```javascript
const [del, loading] = useDelete(url, options);
const [del, loading] = useSecureDelete(url, options);
```
The goal of ***useDelete*** is to send an ajax DELETE request to the server<br/>
> ***useSecureDelete*** is similar to ***useDelete*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store

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
// del is a function that sends the ajax DELETE request
// the signature is: post(options) where:
// - "options" is the same object as the one used for useDelete. Use this object to override an option passed to useDelete
del: function(options),

// a flag to indicate if the ajax request is pending
// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending
loading: boolean
```
## Examples
### Minimal example
This example shows how to display a form with two input fields: **name** and **firstname** to edit a user.<br/>
First, the component retrieves a user via a ***useGet***<br/>
Then, the component displays the form with fields pre-filled in with the data returned by ***useGet***<br/>
Finally, a click on the button *Submit* send the data to the server via an ajax PUT request
* If the call is successful, one is redirected to ***/users***
* If the call fails, the error is sent to the ***notificationService***
```jsx
import { useDelete, useSetting } from "onekijs";
import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  // userId is present in the URL: /users/:userId
  // useParams is a hook coming from react-router-dom
  const { userId } = useParams();

  // baseUrl is defined in settings.js
  const baseUrl = useSetting("server.baseUrl");

  const [del, loading] = useDelete(`${baseUrl}/users/${userId}`, { 
    onSuccess: '/users'
  });

  return (
    <button onClick={() => del()}>
      [{loading ? "loading ..." : "delete"}]
    </button>
  );
};
```
### onSuccess example
The logic is the same as for ***usePost***. Please refer to [the documentation of usePost](use-post) for an example

### onError with notification example
The logic is the same as for ***usePost***. Please refer to [the documentation of usePost](use-post) for an example
