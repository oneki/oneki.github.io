---
id: use-get
title: Data retrieval
sidebar_label: Data retrieval
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

**Oneki.js** provides several hooks to retrieve data from a server via an AJAX GET request

## Hooks

```javascript
const [data, loading, refresh] = useGet(url, options);
const [data, loading, refresh] = useSecureGet(url, options);
const [data, loading, refresh] = useCache(url, options);
```
<br/>

***useGet*** hook executes an ajax GET request and returns back the data.<br/>
The ajax request is made during the mount of the component and each time the URL is updated.<br/>
The data is stored in the component state and **not** in the redux store

***useSecureGet*** is similar to ***useGet*** but adds a authorization header *Bearer* which contains the token received and stored by ***useLoginService*** in the redux store

***useCache*** hook is similar to ***useGet*** except that the data is cached in the redux store (one entry in the store per URL)<br/>
Therefore, the ajax request is only executed if the cache is not yet present in the store or if the cache is no longer valid.



### Parameters
#### Inputs
Mandatory parameters are marked with a \*

| Parameter | | Type | Description |
| --------- | -- |---- | ----------- |
| **url**\* | | string | the URL to which the Ajax request is sent |
| **options** |||An optional object to specify additional options |
| |**onSuccess**| [AppSuccessCallback](../../api/types/AppSuccessCallback) | <ul><li>if onSuccess is a function, this function is called on a successful GET (Promise / async allowed)</li><li>if onError is a string then the value must be an URL. The hook does a redirect to this URL on a successful GET</li></ul>**Defaults to**: Nothing is done on a successful GET |
|| **onError** | [AppErrorCallback](../../api/types/AppErrorCallback) | <ul><li>if onError is a function, this function is called if the HTTP response is a 4xx or 5xx (Promise / async allowed)</li><li>if onError is a string then the value must be an URL. The hook does a redirect to this URL</li></ul>**Defaults to**: the hook sends a notification to the `error` topic |
|| **delayLoading** | number | The number of milliseconds to wait before setting the loading flag to true. This value is useful to not display a loading indicator if the request is executed rapidly.<br/><br/> **Defaults to**: 0 |
|| **defaultValue** | T | (only supported by useGet). The value returned while the AJAX request is pending.<br/><br/> **Defaults to**: undefined |
|| **auth** | object | see auth |
|| **headers** | object | the HTTP headers to add in the request<br/><br/> **Defaults to**: no headers added in the request |
|| **params** | object | Params in the url.<br/>**Example**: if the user is /user/:userId, options.params could be \{userId: '1'\} |
|| **query** | object | Query params to add the URL.<br/>**Example**: If the final url is /users?name=Doe, options.query will be \{name: 'Doe'\} |


:::note
The options object also accept these additionnal parameters supported by the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
```
headers,
credentials,
cache,
redirect,
referrer,
referrerPolicy,
integrity,
keepalive,
signal
```
:::

#### Outputs

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **data** | T | the data returned by the server.<br/>The value is null while the ajax request is pending |
| **loading** | boolean | A flag to indicate if the ajax request is pending |
| **refresh** | () => void | a function that can be called to force a re-execution of useGet |

## Examples

### Minimal example

The minimal example shows how to retrieve data from a backend server.<br/>
A loading indicator (Loading ...) is displayed while the AJAX request is pending.

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users.tsx
```

### Cache example

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-cache.tsx
```

### Pooling example

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-polling.tsx
```


### loading delay example
Show a loading indicator only if the data is not retrieved in less than 100 ms.<br/>

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-delay.tsx
```

### onError example
This is an example showing how to use the onError handler

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-on-error.tsx
```

### onError with notification example
This example shows how to handle onError using the notification service

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-error-notification.tsx
```