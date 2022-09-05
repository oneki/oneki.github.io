---
id: shallowEqual
title: shallowEqual
sidebar_label: shallowEqual
---

```tsx
shallowEqual(objA: null | AnonymousObject<any>,objB: null | AnonymousObject<any>): boolean
```
<br/>

Copyright (c) 2013-present, Facebook, Inc.

This source code is licensed under the MIT license found in the  
LICENSE file in the root directory of this source tree.

Performs equality by iterating through keys on an object and returning false  
when any key has values which are not strictly equal between the arguments.  
Returns true when the values of all keys are strictly equal.

### Parameters

<font size="2"><i>(Mandatory parameters are in bold)</i></font>

| Parameters | Type | Description |
| --------- | ---- | ----------- |
| **objA** | null \| [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **objB** | null \| [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |


### Return



The return is of type <code>boolean</code>