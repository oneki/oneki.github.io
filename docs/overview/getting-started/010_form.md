---
id: form
title: Using form for user input
sidebar_label: Using form for user input
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

This step consists in introducing how to build form with Oneki.js

Building forms with React require a lot of code and can be hard to maintain.<br/>
Oneki.js proposes a library to control a form and reduce drastically the code.

## Final result

The result of this step is the following:

:::info New in this step
The login page now validates that the username and password are filled in

A new page is added to sign up. The form on the sign up page verifies asynchronously if the username is available or not<br/>
Certain elements of the form are displayed or not depending on the value of a field
:::

<Sandbox
name="step08-i18n"
type="getting-started"
view="preview"
height="600"
modules={['/src/index.tsx','/src/pages/products/index.tsx']}
/>

## Adding validation
Let's update the login page to verify that the username and password are filled in and that the username contains only alphanumeric charaters (max size 20)<br/>
The value of the form is updated every time the user enters a caracter. At the bottom of the form, We add a "debug" component to display in real time the value of the form<br/>
This real-time update also allows to have a real time validation:

```tsx {4,13,18-21,27,29,34} title="src/pages/auth/index.tsx"
const AuthPage: FC = () => {
  const [error, , submit] = useLogin();
  const [T, t] = useTranslation();
  const { Form, values, getValidation } = useForm(submit);

  return (
    <div className="login-container">
      <Form className="login-form">
        {error && <div className="error">Error: {error.message}</div>}
        <div>
          <label>
            <T>Username</T>
            <span className="error">{getValidation('username').message}</span>
          </label>
          <Input
            name="username"
            type="text"
            required={true}
            requiredMessage={t('Username is mandatory')}
            regex="^[a-zA-Z0-9.]{1,20}$"
            regexMessage={t('Username must contain only alphanumeric chars (max 20)')}
          />
        </div>
        <div>
          <label>
            <T>Password</T>
            <span className="error">{getValidation('password').message}</span>
          </label>
          <Input name="password" type="password" required={true} requiredMessage={t('Password is mandatory')} />
        </div>
        <SubmitButton>
          <T>Submit</T>
        </SubmitButton>
        <pre className="debug">{JSON.stringify(values, null, 2)}</pre>
      </Form>
    </div>
  );
};

export default AuthPage;

```

## Translations
The translations are stored in the folders ***public/locales/{locale}/{namespace}.json*** (in JSON format)

:::note
Oneki.js supports the separation of translations into multiple files which are called namespaces

By convention, the default namespace is named **common** and is automatically loaded.<br/>
It's a good practice to put anything common to the whole application in this file (e.g: the text in the navbar).<br/>
For small applications, it's common to put every translations only in this file.
:::

```javascript
My-App
├─ public
│  ├─ locales
│  │  └─ en
│  │  │  └─ common.json // locales in english
│  │  └─ fr
│  │  │  └─ common.json // locales in french 
```

### Translation files
Let's create these translation files for our application

#### English

```json title="public/locales/en/common.json"
{
  "Phone XL": "Phone XL",
  "Phone Mini": "Phone Mini",
  "Phone Invalid": "Phone Invalid",
  "A large phone with one of the best screens": "A large phone with one of the best screens",
  "A great phone with one of the best cameras": "A great phone with one of the best cameras",
  "The product has been shared!": "The product has been shared!",
  "You will be notified when the product goes on sale": "You will be notified when the product goes on sale",
  "Product added succesfully to the cart!": "Product added succesfully to the cart!",
  "Notify me": "Notify me",
  "Share": "Share",
  "Description": "Description",
  "Product Details": "Product Details",
  "Buy": "Buy",
  "Loading": "Loading",
  "Empty the cart": "Empty the cart",
  "An error occured while cleaning the cart": "An error occured while cleaning the cart",
  "There is no item in the shopping cart !": "There is no item in the shopping cart !",
  "Buy another products": "Buy another products",
  "Use any username / password (no check performed)": "Use any username / password (no check performed)",
  "Username": "Username",
  "Password": "Password",
  "Submit": "Submit",
  "Submitting": "Submitting",
  "Error": "Error",
  "Logging out": "Logging out",
  "An error occured": "An error occured",
  "stacktrace": "stacktrace",
  "My Store": "My Store",
  "Log out": "Log out",
  "Checkout": "Checkout"
}
```

#### French

```json title="public/locales/fr/common.json"
{
  "Phone XL": "Téléphone XL",
  "Phone Mini": "Téléphone Mini",
  "Phone Invalid": "Téléphone Invalide",
  "A large phone with one of the best screens": "Un grand téléphone avec l'un des meilleurs écran",
  "A great phone with one of the best cameras": "Un bon téléphone avec l'un des meilleurs appareil photo",
  "The product has been shared!": "Ce produit a été partagé!",
  "You will be notified when the product goes on sale": "Vous serez notifié quand le produit sera disponible à la vente",
  "Product added succesfully to the cart!": "Le produit a été ajouté au panier avec succès!",
  "Notify me": "Me notifier",
  "Share": "Partager",
  "Description": "Description",
  "Product Details": "Détails du produit",
  "Buy": "Acheter",
  "Loading": "Chargement",
  "Empty the cart": "Vider le panier",
  "An error occured while cleaning the cart": "Une erreur est survenue pendant le nettoyage du panier",
  "There is no item in the shopping cart !": "Il n'y a aucun éléments dans le panier !",
  "Buy another products": "Acheter d'autres produits",
  "Use any username / password (no check performed)": "Utilisez n'importe quel identifiant / mot de passe (pas de check effectué)",
  "Username": "Identifiant",
  "Password": "Mot de passe",
  "Submit": "Envoyer",
  "Submitting": "Envoi",
  "Error": "Erreur",
  "Logging out": "Déconnexion",
  "An error occured": "Une erreur est survenue",
  "stacktrace": "stacktrace",
  "My Store": "Mon Magasin",
  "Log out": "Déconnexion",
  "Checkout": "Panier"
}
```

## Updating the application

### useTranslation hook

:::info
To display a string (or even a component) in the correct locale, Oneki.js propose the hook `useTranslation`. This hook returns 
- a component `<T />` to translate something inside a JSX
- a function `t()` to translate a typescript string
:::

Let's update the Cart page to use this hook.

```tsx {2,9,16,21} title="src/settings.ts"
const CartPage: FC = () => {
  const [T, t] = useTranslation();
  const [cart, loading, refresh] = useGet<CartResponse>(URL_CART);
  const [deleleCart] = useDelete(URL_CART, {
    onSuccess: () => {
      refresh();
    },
    onError: (error) => {
      window.alert(`${t('An error occured while cleaning the cart')}: ${error.message}`);
    },
  });
  return (
    <div>
      {loading && (
        <p>
          <T>Loading</T> ...
        </p>
      )}
      <div>
        <button className="button" onClick={() => deleleCart()}>
          <T>Empty the cart</T>
        </button>
      </div>
      {cart && <Cart cart={cart} />}
    </div>
  );
};

export default secure(CartPage);
```

### useI18nService hook

:::info
Oneki.js provides a service providing some helper methods related to i18n like switching between locales.<br/>
The service can be instancied via the hook `useI18nService`

Please note also that the hook `useTranslation` returns the active locale as third parameter.
:::

Let's add a link to the `<Navbar />` component to select the appropriate locale (english or french) and to hightlight the active one.

```tsx {2,24-26,32-39} title="src/pages/@components/Navbar.tsx"
const Navbar: FC = () => {
  const [T, , locale] = useTranslation();
  const [loggedUser] = useSecurityContext('username');
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>
          <T>My Store</T>
        </h1>
      </Link>
      <div className="app-top-bar-right">
        {loggedUser && (
          <div className="user">
            {loggedUser}{' '}
            <Link className="logout" to="/auth/logout">
              [<T>Log out</T>]
            </Link>
          </div>
        )}
        <Link to="/cart" className="button fancy-button">
          <i className="material-icons">shopping_cart</i>
          <T>Checkout</T>
        </Link>
        <div className="lg">
          <LocaleLink locale="en" selected={locale === 'en'} />|<LocaleLink locale="fr" selected={locale === 'fr'} />
        </div>
      </div>
    </div>
  );
};

const LocaleLink: FC<LocaleLinkOptions> = ({ locale, selected }) => {
  const i18nService = useI18nService();
  return (
    <button className={`link ${selected ? 'selected' : ''}`} onClick={() => i18nService.changeLocale(locale)}>
      {locale}
    </button>
  );
};

type LocaleLinkOptions = {
  locale: string;
  selected: boolean;
};

export default Navbar;
```

Now a user can display the application in english or in french

## Advanced use cases

### Complex string
It often happens that the element to translate is not a simple string. To illustrate that, let's update the Cart component like this:

```tsx {22} title="src/pages/cart/@components/Cart.tsx"
const Cart: FC<CartOptions> = ({ cart }) => {
  const [T] = useTranslation();
  return (
    <div>
      <h3>
        <T>Cart</T>
      </h3>

      {cart.products.map((item, index) => (
        <div key={`item-${index}`} className="cart-item">
          <span>
            <T>{item.name}</T>
          </span>
          <span>
            <T>{currency(item.price)}</T>
          </span>
        </div>
      ))}
      {cart.products.length === 0 && (
        <h4>
          <T>
            There is <u>no item</u> in the shopping cart !
          </T>
        </h4>
      )}
      <p>
        <Link to="/products">
          <T>Buy another products</T>
        </Link>
      </p>
    </div>
  );
};

export default Cart;
```

The key `There is no item in the shopping cart !` in locales/en/common.json is no more valid. To become valid, the key must be upated like this:

```json {3} title="locales/en/common.json"
{
  ...
  "There is <1>no item</1> in the shopping cart !": "There is <1>no item</1> in the shopping cart !",
  ...
}
```

```json {3} title="locales/fr/common.json"
{
  ...
  "There is <1>no item</1> in the shopping cart !": "Il n'y a <1>aucun éléments</1> dans le panier !",
  ...
}
```

### Plural and variables
Plurals are essential when dealing with internationalization.<br/>
Let's update the `Cart` component to add a plural and also a variable

```tsx {27-33} title="src/pages/cart/@components/Cart.tsx"
const Cart: FC<CartOptions> = ({ cart }) => {
  const nbItems = cart.products.length;
  const [T] = useTranslation();
  return (
    <div>
      <h3>
        <T>Cart</T>
      </h3>

      {cart.products.map((item, index) => (
        <div key={`item-${index}`} className="cart-item">
          <span>
            <T>{item.name}</T>
          </span>
          <span>
            <T>{currency(item.price)}</T>
          </span>
        </div>
      ))}
      {nbItems === 0 && (
        <h4>
          <T>
            There is <u>no item</u> in the shopping cart !
          </T>
        </h4>
      )}
      {nbItems > 0 && (
        <h4>
          <T count={nbItems}>
            There is <u>{{ nbItems }} item</u> in the shopping cart !
          </T>
        </h4>
      )}
      <p>
        <Link to="/products">
          <T>Buy another products</T>
        </Link>
      </p>
    </div>
  );
};

export default Cart;
```

Update the translation file to support plural:

```json title="locales/en/common.json"
{
  ...
  "There is <1>{{nbItems}} item</1> in the shopping cart !": "There is <1>{{nbItems}} item</1> in the shopping cart !",
  "plural::There is <1>{{nbItems}} item</1> in the shopping cart !": "There are <1>{{nbItems}} items</1> in the shopping cart !",
  ...
}
```

```json title="locales/fr/common.json"
{
  ...
  "There is <1>{{nbItems}} item</1> in the shopping cart !": "Il y a <1>{{nbItems}} élement</1> in the shopping cart !",
  "plural::There is <1>{{nbItems}} item</1> in the shopping cart !": "Il y a <1>{{nbItems}} éléments</1> in the shopping cart !",
  ...
}
```


The following text is displayed if there is one element in the cart:
-  `There is 1 item in the shopping cart !`

The following text is displayed if there are two or more elements in the cart:
-  `There are 2 items in the shopping cart!`


## Next step
In the next step, we adapt the application to different languages (internationalization and localization).
