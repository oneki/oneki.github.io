---
id: getCookie
title: getCookie
sidebar_label: getCookie
---

import Details from "@theme/Details"


```tsx
getCookie(name: string,secure: boolean): Promise<any>
```
<br/>

Get a cookie by name. Decrypt it if necessary  
check https://stackoverflow.com/questions/10730362/get-cookie-by-name

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| name | string | : name of the cookie |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| secure | boolean | : decrypt the cookie |


</div></Details>