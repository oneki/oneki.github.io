---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';


***Oneki.js*** provides several hooks to call an API. The purpose of these hooks is to help the developer implement the following logic:
- Display a loading indicator
- Send the AJAX request
- Stop the display of the loading indicator
- Handle the response (success or error) with a default behavior or with a custom handler.

## Data retrieval
**Oneki.js** provides the **useGet** and **useCache** hooks to fetch data from a server via an `HTTP AJAX GET request`. 

**useGet** stores the retrieved data in the local state of the component. Everytime the URL changes, the data is retrieved from the server and the component is refreshed.

**useCache** stores the retrieved data retrieved in the global state (one entry in the global state per URL) for a given period. During this period, the data is retrieved from the cache and not from the URL

```javascript
const [data, loading, refresh] = useGet(url, options);
const [data, loading, refresh] = useCache(url, options);
```

See **[Data retrieval](./use-get)**

## Data creation
**Oneki.js** provides the **usePost** hook to create a new resource on a server via an `HTTP AJAX POST request`. 

```javascript
const [submit, loading] = usePost(url, options);
```
The request is sent every time the submit function is called. See **[usePost](./use-post)**

## Data update
**Oneki.js** provides the **usePut** and **usePatch** hooks to update an existing resource on a server via an `HTTP AJAX PUT request` or `HTTP AJAX PATCH request`.

A PUT request fully updates a resource and a PATCH request only updates some attributes of a resource.

```javascript
const [submit, loading] = usePut(url, options);
const [submit, loading] = usePatch(url, options);
```

The request is sent every time the submit function is called. See **[usePut](./use-put)**

## Data deletion
**Oneki.js** provides the **useDelete** hook to delete a resource on a server via an `HTTP AJAX DELETE request`.

```javascript
const [submit, loading] = useDelete(url, options);
```

The request is sent every time the submit function is called. See **[useDelete](./use-delete)**
