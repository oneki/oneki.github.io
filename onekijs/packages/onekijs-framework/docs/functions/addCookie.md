---
id: "addCookie"
title: "Function: addCookie"
sidebar_label: "addCookie"
sidebar_position: 0
custom_edit_url: null
---

▸ **addCookie**(`name`, `value?`, `crypt?`, `ttl?`, `path?`): `Promise`<`void`\>

Add a browser cookie (created on the browser side)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | : name of the cookie |
| `value?` | `string` | `undefined` | : value of the cookie |
| `crypt` | `boolean` | `true` | : encrypt the cookie (not usable by the server) |
| `ttl?` | `number` | `undefined` | : time to live of the cookie (in seconds) |
| `path` | `string` | `'/'` | : scope of the cookie |

#### Returns

`Promise`<`void`\>

#### Defined in

onekijs/packages/onekijs-framework/src/utils/storage.ts:13
