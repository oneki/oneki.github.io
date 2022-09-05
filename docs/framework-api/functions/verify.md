---
id: verify
title: verify
sidebar_label: verify
---

```tsx
verify(token: string,jwKey: JsonWebKey,alg: AesKeyAlgorithm | EcKeyImportParams | AlgorithmIdentifier | HmacImportParams | RsaHashedImportParams): Promise<boolean>
```
<br/>



### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **alg** | AesKeyAlgorithm \| EcKeyImportParams \| AlgorithmIdentifier \| HmacImportParams \| RsaHashedImportParams |  |
| **jwKey** | JsonWebKey |  |
| **token** | string |  |


### Return



The return is of type <code>Promise<boolean\></code>