---
id: use-delete
title: Data deletion
sidebar_label: Data deletion
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Hooks

```javascript
const [del, loading] = useDelete(url, options);
const [del, loading] = useSecureDelete(url, options);
```
***usePut*** hook executes an ajax PUT request and returns back the payload sent by the server.<br/>
> ***useSecureDelete*** is similar to ***useDelete*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store

:::note
The data are stored in the state of the component and **not** in the redux store.
:::

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
|| **auth** | object | Contains the credentials to be sent in the request. See [Auth](../../api/interfaces/Auth).<br/><br/> **Defaults to**: no credentials sent |
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
| **del** | (options) => Promise | del is a function that executes the ajax DELETE request.<br/>>**options** is the same object as the one used for usePut. Use this object to override an option passed to useDelete  |
| **loading** | boolean | A flag to indicate if the ajax request is pending |

## Examples

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/index.tsx
```