---
id: layout
title: Layout
sidebar_label: Layout
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

<Tabs>
  <TabItem value="cra">
  Not implemented for Create React Application as this is not needed
  </TabItem>
  <TabItem value="next">
 
By default, <b>Next.js</b> is re-rendering the entire UI every time you click on a link.<br/>
This is very annonying when you want a common layout between several pages (e.g: a common navbar) because the state is lost when navigating between pages

This is very well explain in ***[this article](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)*** and **Oneki.js** implements the solution proposed.

To avoid an unmount / mount of the layout when transitioning between pages, **Oneki.js** proposes the following ***[HOC](https://reactjs.org/docs/higher-order-components.html)***:

```jsx
const PageWithLayout = withLayout(Page, Layout)
```

<p/>

## Examples

#### Minimal example

<Sandbox 
  name="next-app-layout" 
  height="500" 
  modules={['/src/pages/index.tsx','/src/layout/AppLayout.tsx']} 
/>

  </TabItem>
</Tabs>
