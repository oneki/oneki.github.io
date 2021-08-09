---
id: error-handling
title: Handling errors
sidebar_label: Handling errors
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

Two types of errors can occur:
- Those thrown when rendering a component. To handle this type of error, React recommends implementing **[Error Boundaries](https://reactjs.org/docs/error-boundaries.html)**.
- Standard errors launched by your javascript code (try/catch) or returned by the server.

This step consists in handling this kind of errors.

## Final result

The result of this step is as follows:

:::info New in this step
The third product is now named "Invalid product". Clicking on this product simulates an error when the page is rendered.<br/>
The "Buy" button now calls an API that returns an HTTP 400 error indicating that the product is not available at the moment
:::

<Tabs>
  <TabItem value="cra">
    <Sandbox
      name="step07-error-handling"
      type="getting-started/cra"
      view="preview"
      height="600"
      modules={['/src/index.tsx','/src/pages/products/index.tsx']}
    />
    <p>
    <i><b>Note</b>: Codesandbox runs the project in dev mode. Therefore, the <code>&lt;ErrorBoundary /&gt;</code> component is hidden by the stacktrace displayed by create react app<br/>
    Just press "ESC" to hide this stacktrace.</i>
    </p>

  </TabItem>
  <TabItem value="next">
    <Sandbox
      name="step07-error-handling"
      type="getting-started/next"
      view="preview"
      height="600"
      modules={['/src/pages/index.tsx','/src/pages/_app.tsx']}
      />
  </TabItem>

</Tabs>

## Error boundaries
You can pass a component to &lt;App /&gt; (via the prop ErrorBoundaryComponent). This component will be displayed when an error occurs during the rendering.


First, let's create this component
<Tabs>
  <TabItem value="cra">
You can pass a component to <code>&lt;App /&gt;</code> (via the prop <code>ErrorBoundaryComponent</code>). This component will be displayed when an error occurs during the rendering.
<p/>
First, let's create this component:

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx
```
:::tip
This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)
:::

Update the entry point to pass this component to `<App />`

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/index.tsx
```

## Error handling
When an error occurs (outside the rendering phase), we recommend displaying it via the `<NotificationCenter />`.<br/>
To simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:

```json
{
  "message": "The product ${req.body.name} is not available at this moment"
}
```
<p/>
Let's update the product details page to:

- simulate an error during the rendering phase when the product name is "Phone Invalid"
- display the error from the server via the NotificationCenter.

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx
```

  </TabItem>
  <TabItem value="next">

You can pass a component to <code>&lt;NextApp /&gt;</code> (via the prop <code>ErrorBoundaryComponent</code>). This component will be displayed when an error occurs during the rendering.
<p/>
First, let's create this component:

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx
```

:::tip
This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)
:::

Update the entry point to pass this component to `<NextApp />`

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/_app.tsx
```

## Error handling
When an error occurs (outside the rendering phase), we recommend displaying it via the `<NotificationCenter />`.<br/>
To simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:

```json
{
  "message": "The product ${req.body.name} is not available at this moment"
}
```
<p/>
Let's update the product details page to:

- simulate an error during the rendering phase when the product name is "Phone Invalid"
- display the error from the server via the NotificationCenter.

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx
```



  </TabItem>

</Tabs>

:::tip
When using an Oneki.js hook, if you don't specify a callback to handle errors, it will automatically send the following notification

```javascript
{
  topic: 'error',
  payload: {
    message: ${error.message}
  }
  ...
}
```

Therefore, the onError callback can be omitted
:::


## Next step
**[In the next step](i18n)**, we adapt the application to support different languages (internationalization and localization).
