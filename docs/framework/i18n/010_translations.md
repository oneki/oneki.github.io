---
id: translations
title: Translation files
sidebar_label: Translation files
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Translations are stored in JSON files in the folder ***public/locales/{locale}/{namespace}.json***

## Namespaces

***Oneki.js*** supports splitting translations into multiple files, called **namespaces**.

Separating translations into multiple files offers the following advantages:
- Only the necessary translation files are loaded
- The size of the translation files remains under control

### Common namespace
By convention, the default namespace is named **common** and is automatically loaded.<br/>
It's a good practice to put everything that is common to the whole application in this file (for example: the text of the navigation bar). <br/>
For small applications, it's common to put all translations only in this file.

### Example
Let's assume that the translation files are divided into 3 namespaces:
- common.json
- users.json
- admin.json

and that the "admin" page only needs the translations of the namespaces "admin" and "common". This is specified via the **useTranslation** hook:

```tsx
// if common is not specified, it's automatically added to the list of required namespaces
const [T, t, locale, loading] = useTranslation(['admin', 'common']); 
```

Therefore when the page "admin" is displayed, only the files "common.json" and "admin.json" are loaded.

## JSON files
### Not embedded in javascript bundle
The JSON files **must be** stored in the folder ***public/locales/{locale}/{namespace}.json*** where:
- **locale** is one of the language supported by the app (en, fr, es, ...)
- **namespace** is the name of the namespace (see above)

```javascript
My-App
├─ public
│  ├─ locales
│  │  └─ en // locales in english
│  │  │  ├─ admin.json
│  │  │  └─ common.json 
│  │  │
│  │  └─ fr // locales in french
│  │  │  ├─ admin.json
│  │  │  └─ common.json 
│  └─ ...
```
***useTranslation*** hook will lazy load these files from the server when needed.

### Embedded in javascript bundle
The translations can be embedded directly in the javascript bundle by adding them directly in the initial state of the redux store

TODO: example

## Content
The content of a translation file is a simple  JSON key/value file like this:

```json
{
  "Welcome": "Bienvenue"
}
```

### Plural key
A key can be prefixed to support plurals:
```json
{
  "User": "Utilisateur",
  "plural::User": "Utilisateurs"
}
```

### Complex key / value
The key and value can be more complex and look like the content of a JSX component:
```json
{
  // Basic example
  "Welcome": "Welcome", // <T>Welcome<T>

  // example of a translation containing a variable. The key is not equal to the value (the key is therefore an alias)
  // Example: <T alias="Welcome">Welcome {{name}} !</T>
  "Welcome": "Bienvenue {{name}} !", 

  // Same example as above but the key is not an alias. The key is therefore equal to the content of the default language
  // Example: <T>Welcome {{name}} !</T>
  "Welcome {{name}} !": "Bienvenue {{name}}!", 

  // The value is more complex
  // Example:
  // <T alias="complex">
  //   Hello{' '}
  //   <b>
  //     <i>mister</i> {{ firstname }} {{ lastname }} <i>male</i>
  //   </b>{' '}
  //   <u>address</u>
  // </T>
  //
  // Please note that lastname and firstname are reversed
  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4>", 

  // Same example as above but when the alias is not specified
  // Example: <T>User <b>{{name}}</b> is connected</T>
  "User <1>{{name}}</1> is connected": "Utilisateur <1>{{name}}</1> est connecté"
}
```

### Modifiers
For advanced use cases, you can add one or several modifiers to a variable like this:

```json
{
  // Basic example: first name will be in uppercase
  // Example: <T>Welcome {{firstname}}</T>
  "Welcome {{firstname}}": "Welcome {{firstname | uppercase}}", // <T>Welcome {{firstname}}<T>
}
```

A modifier is a function with at least two parameters:
- **value**: the value of the variable to which the modifier is applied
- **locale**: the current locale

The modifiers must be defined in `src/settings.ts` with the key **i18n.modifiers**. 

```javascript
export default {
  i18n: {
    ...
    modifiers: {
      uppercase: (value, locale) => value ? value.toUpperCase() : value
    }
  }
}
```

#### Modifiers with parameters
You can even pass one or more parameters to a modifier like this
```json
{
  // display only the 5 first characters of the firstname
  // example: <T>Welcome {{firstname}}<T>
  "Welcome {{firstname}}": "Welcome {{firstname | maxlength(5)}}", 
}
```
<p/>

The modifier defined in `src/settings.ts` looks like this:

```javascript
export default {
  i18n: {
    ...
    modifiers: {
      maxlength: (value, locale, length) => value ? value.substring(length) : value
    }
  }
}
```
