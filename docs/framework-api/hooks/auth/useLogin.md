---
id: useLogin
title: useLogin
sidebar_label: useLogin
---

```tsx
useLogin(idpName: string,options: LoginOptions): 
```
<br/>

The **useLogin** hooks instanciates a login service

```ts
const [error, loading, submit] = useLogin(idpName, options);
```

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| idpName | string | **idpName** is used to retrieve the configuration identified by the key ***idp/:idpName*** in <code>src/settings.ts</code>. |
| options | [LoginOptions](/framework-api/interfaces/LoginOptions.md) |  |
