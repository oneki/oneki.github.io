---
id: creating-project
title: Creating the project
sidebar_label: Creating the project
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';
import Sandbox, { GettingStartedSandbox} from '@site/src/components/Sandbox';
import { GettingStartedSnippet } from '@site/src/components/GithubSnippet';

This step consists in creating a standard React application **without involving `onekijs`**.<br/>
This application looks exactly like the one proposed on the **[Angular site](https://angular.io/start)** so you can compare the Angular and React versions.

## Step Final result
The result of this step is as follows:

:::note Code Editor
The code below is hosted on **[Code Sandbox](http://codesandbox.io/)**. <br/>
Click the "Open Sandbox" button to view/edit the code with an online IDE.
:::

<GettingStartedSandbox 
  craName="step01-react-app"
  nextName="step01-next-app"
  craModules={['/src/index.tsx','/src/pages/products/index.tsx']} 
  nextModules={['/src/pages/index.tsx','/src/pages/_app.tsx']} 
/>


## Creating the project

:::tip Typescript
We recommend to use **[Typescript](https://www.typescriptlang.org/)** instead of javascript. Therefore, all examples are in Typescript.
:::

A **`onekijs`** application is built with one of this build tool:

| Type | Build tool | Librairies
| ---- | ---------- | ----------
| Standard React app | **[Vite](https://vitejs.dev/)** | OnekiJs, React, Redux, Immer, Saga, **React Router Dom**
| Next.js app | **[Create Next App](https://nextjs.org/)** | OnekiJs, React, Redux, Immer, Saga, **Next**, **Next Router**

From then on, you benefit from all the advantages brought by this tool.

:::caution Tabs
The code is slightly different depending on the framework used. Click on the corresponding tab to display the code corresponding to the type of application you want to build.
:::

<Tabs>
  <TabItem value="cra">

**Vite** is the most popular tool to boostrap a React project. <br/>
To create a projet named **mystore-app**, enter the following command:

```javascript
// npm install -g yarn
yarn create vite mystore-app --template react-ts
```  
  </TabItem>
  <TabItem value="next">

**Create next app** is the tool to boostrap a Next.js project. <br/>
To create a projet named **mystore-app**, enter the following command:

```javascript
// npm install -g yarn
yarn create next-app --typescript
```
  </TabItem>

</Tabs>

### Structure
Even if the project is very simple at this stage, we already structure the project as recommended **[in this chapter](../advanced/file-structure)**.<br/>

<Tabs>
  <TabItem value="cra">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/index.tsx#L7-L15
```
<p></p>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/pages/products/index.tsx#L4-L43
```  

Via a command line enter:
```
cd mystore-app
yarn start
```
  </TabItem>
  <TabItem value="next">

```jsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/_app.tsx#L7-L18
```
<p></p>

```tsx reference
https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/index.tsx#L7-L40
``` 

Via a command line enter:
```
cd mystore-app
yarn dev
```
  </TabItem>  
</Tabs>

to start a livereload webserver. The website is available at http://localhost:3000<br/>
Any change to the source code will refresh the page to reflect the change.

## Next step
**[In the next step](navigation)**, we will transform this standard React application into an **`onekijs`** application and add the ability to navigate between pages.