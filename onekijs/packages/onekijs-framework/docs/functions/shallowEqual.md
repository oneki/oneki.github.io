---
id: "shallowEqual"
title: "Function: shallowEqual"
sidebar_label: "shallowEqual"
sidebar_position: 0
custom_edit_url: null
---

▸ **shallowEqual**(`objA`, `objB`): `boolean`

Copyright (c) 2013-present, Facebook, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

Performs equality by iterating through keys on an object and returning false
when any key has values which are not strictly equal between the arguments.
Returns true when the values of all keys are strictly equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objA` | [`AnonymousObject`](../interfaces/AnonymousObject.md) \| ``null`` |
| `objB` | [`AnonymousObject`](../interfaces/AnonymousObject.md) \| ``null`` |

#### Returns

`boolean`

#### Defined in

onekijs/packages/onekijs-framework/src/utils/object.ts:262
