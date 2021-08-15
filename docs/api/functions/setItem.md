---
id: "setItem"
title: "Function: setItem"
sidebar_label: "setItem"
sidebar_position: 0
custom_edit_url: null
---

▸ **setItem**(`key`, `value`, `storage`, `crypt?`, `ttl?`, `path?`): `Promise`<`void`\>

Add a key/value in the specified storage

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | : key of the item |
| `value` | `string` | `undefined` | : value of the item |
| `storage` | `string` \| ``null`` \| `undefined` | `undefined` | : localStorage, sessionStorage or cookie |
| `crypt` | `boolean` | `true` | : encrypt the value (only if cookie). Defaults to true |
| `ttl?` | `number` | `undefined` | : time to live of the cookie (in seconds). If null, the cookie is removed when the browser is closed |
| `path` | `string` | `'/'` | : scope of the cookie. Defaults to / |

#### Returns

`Promise`<`void`\>

#### Defined in

onekijs/packages/onekijs-framework/src/utils/storage.ts:147
