---
id: "getItem"
title: "Function: getItem"
sidebar_label: "getItem"
sidebar_position: 0
custom_edit_url: null
---

▸ **getItem**(`key`, `storage?`, `secure?`): `Promise`<`unknown`\>

get a value of a key from the specified storage
if the storage is set to any, try all storage

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | : name of the key to get the value from |
| `storage` | `string` | `'any'` | : localStorage, sessionStorage, cookie, any (defaults to any) |
| `secure` | `boolean` | `true` | : decrypt the cookie (defaults to true) |

#### Returns

`Promise`<`unknown`\>

#### Defined in

onekijs/packages/onekijs-framework/src/utils/storage.ts:62
