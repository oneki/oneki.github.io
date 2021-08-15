---
id: "useEventListener"
title: "Function: useEventListener"
sidebar_label: "useEventListener"
sidebar_position: 0
custom_edit_url: null
---

▸ `Const` **useEventListener**<`K`\>(`eventName`, `handler`, `capture?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventName` | `K` | `undefined` |
| `handler` | (`e`: `DocumentEventMap`[`K`]) => `void` | `undefined` |
| `capture` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

onekijs/packages/onekijs-framework/src/core/useEventListener.ts:3
