---
id: use-put
title: Data update
sidebar_label: Data update
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

## Hooks

```javascript
const [submit, loading] = usePut(url, options);
const [submit, loading] = useSecurePut(url, options);
```
***usePut*** hook executes an ajax PUT request and returns back the payload sent by the server.<br/>
By default, the body of the request is a JSON string.
> ***useSecurePut*** is similar to ***usePut*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store

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
| **submit** | (data, options) => Promise | submit is a function that executes the ajax PUT request.<br/>**data** is the body of the PUT request<br/>**options** is the same object as the one used for usePut. Use this object to override an option passed to usePut  |
| **loading** | boolean | A flag to indicate if the ajax request is pending |

## Examples

:::note
usePut is similar to usePost. So you can check the examples on the usePost page for more examples
:::

The example below shows how to redirect to the user list page if the user has been successfully updated.

<SandboxExampleButton name="cra-data" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/edit-user-success-redirect.tsx
```