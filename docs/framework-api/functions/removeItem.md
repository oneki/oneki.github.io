---
id: removeItem
title: removeItem
sidebar_label: removeItem
---

import Details from "@theme/Details"


```tsx
removeItem(key: string,storage: null | string): void
```
<br/>

remove a key from the specified storage  
if the storage is set to 'any', try all storage

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| key | string | : name of the key to get the value from |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| storage | null \| string | : localStorage, sessionStorage, cookie, any (defaults to any) |


</div></Details>