---
id: useIsomorphicLayoutEffect
title: useIsomorphicLayoutEffect
sidebar_label: useIsomorphicLayoutEffect
---

import Details from "@theme/Details"


```tsx
useIsomorphicLayoutEffect(effect: EffectCallback,deps: DependencyList): void
```
<br/>

Accepts a function that contains imperative, possibly effectful code.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| effect | EffectCallback | Imperative function that can return a cleanup function |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| deps | DependencyList | If present, effect will only activate if the values in the list change. |


</div></Details>