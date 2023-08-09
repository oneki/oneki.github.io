---
id: Link
title: Link
sidebar_label: Link
---

import Details from "@theme/Details"


```tsx
Link(props: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, href>RouterPushOptions): ReactNode
```
<br/>

**NOTE**: Exotic components are not callable.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **href** | string \| [Location](/framework-api/interfaces/Location.md) |  |
| **href** | string \| Location |  |
| **props** | Omit<AnchorHTMLAttributes<HTMLAnchorElement\>, href\>[RouterPushOptions](/framework-api/interfaces/RouterPushOptions.md) |  |


<Details summary={<summary><b>Additional properties for advanced use cases</b></summary>}><div>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| activeClassName | string |  |
| activeClassName | string |  |
| activeStyle | CSSProperties |  |
| activeStyle | CSSProperties |  |
| Component | ForwardRefRenderFunction<HTMLAnchorElement, [LinkComponentProps](/framework-api/types/LinkComponentProps.md)\> |  |
| Component | ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps\> |  |
| exact | boolean |  |
| exact | boolean |  |
| isActive |  |  |
| isActive |  |  |
| prefetch | boolean |  |
| prefetch | boolean |  |
| replace | boolean |  |
| replace | boolean |  |
| scroll | boolean |  |
| scroll | boolean |  |
| strict | booleanRefAttributes<HTMLAnchorElement\> |  |
| strict | booleanRefAttributes<HTMLAnchorElement\> |  |


</div></Details>