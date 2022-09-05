---
id: setItem
title: setItem
sidebar_label: setItem
---

```tsx
setItem(key: string,value: string,storage: undefined | null | string,crypt: boolean,ttl: number,path: string): Promise<void>
```
<br/>

Add a key/value in the specified storage

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| crypt | boolean | : encrypt the value (only if cookie). Defaults to true |
| key | string | : key of the item |
| path | string | : scope of the cookie. Defaults to / |
| storage | undefined \| null \| string | : localStorage, sessionStorage or cookie |
| ttl | number | : time to live of the cookie (in seconds). If null, the cookie is removed when the browser is closed |
| value | string | : value of the item |


### Return



The return is of type <code>Promise<void\></code>