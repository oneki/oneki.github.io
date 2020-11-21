---
id: creating-project
title: Creating the project
sidebar_label: Creating the project
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists of creating a standard React application **without involving Oneki.js**.<br/>
This application looks exactly the same as the one proposed on the [Angular website](https://angular.io/start) so you can compare the Angular and React versions.

## Step Final result
The result of this step is the following:

:::note Code Editor
The code below is hosted on **[Code Sandbox](http://codesandbox.io/)**. <br/>
Click on the button "Open Sandbox" to view/edit the code with an online IDE.
:::

<Sandbox 
  name="step01-react-app"
  type="getting-started/cra"
  view="preview"
  height="600" 
  modules={['/src/index.tsx','/src/pages/products/index.tsx']} 
/>


## Creating the project

:::tip Typescript
We recommend to use **[Typescript](https://www.typescriptlang.org/)** instead of javascript. Therefore, all examples are in Typescript.
:::

A Oneki.js application is built with the <b><a href="https://create-react-app.dev/">Create React App</a></b> tool. From then on, you benefit from all the advantages brought by this tool

 **Create react app** is the most popular tool to boostrap a React project. To create a projet named **mystore-app**, enter the following command:

```javascript
// npm install -g yarn
yarn create react-app mystore-app --template typescript
```

### Structure
Even if the project is very simple at this stage, we already structure the project as recommended in this chapter. (TODO link)<br/>
The complete code is available on Github (TODO Link)

```tsx title="src/index.tsx"
ReactDOM.render(
  <div>
    <Navbar />
    <div className="container">
      <ProductsPage />
    </div>
  </div>,
  document.getElementById('root'),
);
```

```tsx title="src/pages/products/index.tsx"
const ProductsPage: FC = () => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          onClick={() => window.alert('The product has been shared!')}
          onNotify={() => window.alert('You will be notified when the product goes on sale')}
        />
      ))}
    </div>
  );
};

export interface ProductType {
  name: string;
  price: number;
  description?: string;
}

export const products: ProductType[] = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    name: 'Phone Standard',
    price: 299,
  },
];

export default ProductsPage;
```

```tsx title="src/modules/products/components/Product.tsx"
type ProductOptions = {
  product: ProductType;
  onClick: () => void;
  onNotify: () => void;
};

const Product: FC<ProductOptions> = ({ product, onClick, onNotify }) => {
  return (
    <div>
      <h3>
        <a href="/">{product.name}</a>
      </h3>
      {product.description && <p>Description: {product.description}</p>}
      <button onClick={onClick}>Share</button>
      {product.price > 700 && (
        <p>
          <button onClick={onNotify}>Notify me</button>
        </p>
      )}
    </div>
  );
};

export default Product;
```

Via a command line enter:
```
cd mystore-app
yarn start
```
to start a livereload webserver. The website is available on http://localhost:3000<br/>
Any modification done on the source code will refresh the page to take into account the change.

## Next step
**[In the next step](navigation)**, we will transform this standard React app into a Oneki.js app and add the possibility to navigate between pages.

<!-- Please note that the ***App*** component automatically configures:
<ul>
  <li>a <b>BrowserRouter</b>: if a BrowserRouter is not what you expect, you can configure it via props passed to <b>App</b></li>
  <li>a <b>Redux store</b>: if you want to provide your own redux store, you can pass it as a prop to <b>App</b></li>
</ul> -->