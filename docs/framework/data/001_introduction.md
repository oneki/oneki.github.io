---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';


***Oneki.js*** provides several hooks to call an API. The goal of these hooks is to help the developer implement the following logic:
- Displaying a loading indicator
- Sending the AJAX request
- Stop displaying the loading indicator
- Handling the response (success or error) with a default behavior or with a custom handler

## Fetching data
**Oneki.js** provides the hook **useGet** to fetch data from a server via an `HTTP AJAX GET request`. The request is sent every time the URL changes.


```javascript
const [data, loading, refresh] = useGet(url, options);
```

The hook **useGet** is described in detail on **[this page](./use-get)**

## Creating data
**Oneki.js** provides the hook **usePost** to create a new resource on a server via an `HTTP AJAX POST request`. The request is sent every time the submit function is called.

```javascript
const [submit, loading] = usePost(url, options);
```

The hook **usePost** is described in detail on **[this page](./use-post)**

## Updating data
**Oneki.js** provides the hooks **usePut** and **usePatch** to update an existing resource on a server via an `HTTP AJAX PUT request` or `HTTP AJAX PATCH request`. The request is sent every time the submit function is called.

A PUT request fully updates a resource and a PATCH request only updates some attributes of a resource.

```javascript
const [submit, loading] = usePut(url, options);
const [submit, loading] = usePatch(url, options);
```

The hook **usePut** is described in detail on **[this page](./use-put)**

## Deleting data
**Oneki.js** provides the hook **useDelete** to delete a resource on a server via an `HTTP AJAX DELETE request`. The request is sent every time the submit function is called.

```javascript
const [submit, loading] = useDelete(url, options);
```

The hook **useDelete** is described in detail on **[this page](./use-delete)**
