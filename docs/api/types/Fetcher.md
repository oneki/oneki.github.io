---
id: "Fetcher"
title: "Type alias: Fetcher<R, T>"
sidebar_label: "Fetcher"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **Fetcher**<`R`, `T`\>: (`url`: `string`, `method`: [`FetchMethod`](FetchMethod.md), `body?`: `T`, `options?`: [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\>) => `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `T` | `any` |

#### Type declaration

▸ (`url`, `method`, `body?`, `options?`): `Promise`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | [`FetchMethod`](FetchMethod.md) |
| `body?` | `T` |
| `options?` | [`FetchOptions`](../interfaces/FetchOptions.md)<`R`, `T`\> |

##### Returns

`Promise`<`R`\>

#### Defined in

onekijs/packages/onekijs-framework/src/types/fetch.ts:25
