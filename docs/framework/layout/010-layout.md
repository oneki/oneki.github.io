---
id: layout
title: Layout
sidebar_label: Layout
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NextSandbox from '@site/src/components/NextSandbox';

<Tabs
defaultValue="next"
values={[
{ label: 'Nextjs App', value: 'next', },
 { label: 'Create React App', value: 'cra', },
]
}>
<TabItem value="next">

By default, **Next.js** is re-rendering the entire UI every time you click on a link.<br/>
This is very annonying when you want a common layout between several pages (e.g: a common navbar) because the state is lost when navigating between pages

This is very well explain in ***[this article](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)*** and **Oneki.js** implements the solution proposed.

To avoid an unmount / mount of the layout when transitioning between pages, **Oneki.js** proposes the following ***[HOC](https://reactjs.org/docs/higher-order-components.html)***:

```jsx
const PageWithLayout = withLayout(Page, Layout)
```

## Examples

#### Minimal example

<NextSandbox 
  name="application/layout" 
  height="500" 
  modules={['/src/pages/index.js','/src/layout/siteLayout/SiteLayout.js']} 
/>

</TabItem>
<TabItem value="cra">
Not implemented for Create React Application
</TabItem>
</Tabs>
