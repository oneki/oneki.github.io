---
id: "validateToken"
title: "Function: validateToken"
sidebar_label: "validateToken"
sidebar_position: 0
custom_edit_url: null
---

▸ **validateToken**(`token`, `jwksEndpoint`, `idp`, `context`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `jwksEndpoint` | `string` \| (`token`: `string`, `idp`: [`Idp`](../interfaces/Idp.md), `context`: [`AppContext`](../interfaces/AppContext.md)) => `string` |
| `idp` | [`Idp`](../interfaces/Idp.md) |
| `context` | [`AppContext`](../interfaces/AppContext.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

onekijs/packages/onekijs-framework/src/auth/utils.ts:89
