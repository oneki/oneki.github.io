---
id: getItem
title: getItem
sidebar_label: getItem
---

import Details from "@theme/Details"


```tsx
getItem(key: string,storage: string,secure: boolean): Promise<unknown>
```
<br/>

get a value of a key from the specified storage  
if the storage is set to any, try all storage

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| key | string | : name of the key to get the value from |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| secure | boolean | : decrypt the cookie (defaults to true) |
| storage | string | : localStorage, sessionStorage, cookie, any (defaults to any) |


</div></Details>