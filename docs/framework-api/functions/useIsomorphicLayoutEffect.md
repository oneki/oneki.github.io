---
id: useIsomorphicLayoutEffect
title: useIsomorphicLayoutEffect
sidebar_label: useIsomorphicLayoutEffect
---

```tsx
useIsomorphicLayoutEffect(effect: EffectCallback,deps: DependencyList): void
```
<br/>

Accepts a function that contains imperative, possibly effectful code.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| deps | DependencyList | If present, effect will only activate if the values in the list change. |
| effect | EffectCallback | Imperative function that can return a cleanup function |
