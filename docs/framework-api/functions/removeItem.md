---
id: removeItem
title: removeItem
sidebar_label: removeItem
---

```tsx
removeItem(key: string,storage: null | string): void
```
<br/>

remove a key from the specified storage  
if the storage is set to 'any', try all storage

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| key | string | : name of the key to get the value from |
| storage | null \| string | : localStorage, sessionStorage, cookie, any (defaults to any) |


### Return



The return is of type <code>void</code>