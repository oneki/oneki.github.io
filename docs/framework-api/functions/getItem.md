---
id: getItem
title: getItem
sidebar_label: getItem
---

```tsx
getItem(key: string,storage: string,secure: boolean): Promise<unknown>
```
<br/>

get a value of a key from the specified storage  
if the storage is set to any, try all storage

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| key | string | : name of the key to get the value from |
| secure | boolean | : decrypt the cookie (defaults to true) |
| storage | string | : localStorage, sessionStorage, cookie, any (defaults to any) |


### Return



The return is of type <code>Promise<unknown\></code>