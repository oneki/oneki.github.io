---
id: useLogin
title: useLogin
sidebar_label: useLogin
---

import Details from "@theme/Details"


```tsx
useLogin(idpName: string,options: LoginOptions): 
```
<br/>

The **useLogin** hooks instanciates a login service

```ts
const [error, loading, submit] = useLogin(idpName, options);
```

### Properties

This element is often used without passing props

<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| idpName | string | **idpName** is used to retrieve the configuration identified by the key ***idp/:idpName*** in <code>src/settings.ts</code>. |
| options | [LoginOptions](/framework-api/interfaces/LoginOptions.md) |  |


</div></Details>