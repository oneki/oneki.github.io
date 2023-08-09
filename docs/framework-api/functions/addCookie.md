---
id: addCookie
title: addCookie
sidebar_label: addCookie
---

import Details from "@theme/Details"


```tsx
addCookie(name: string,value: string,crypt: boolean,ttl: number,path: string): Promise<void>
```
<br/>

Add a browser cookie (created on the browser side)

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| name | string | : name of the cookie |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| crypt | boolean | : encrypt the cookie (not usable by the server) |
| path | string | : scope of the cookie |
| ttl | number | : time to live of the cookie (in seconds) |
| value | string | : value of the cookie |


</div></Details>