---
id: translations
title: Translation files
sidebar_label: Translation files
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> The translations are stored in JSON files under ***public/locales/{locale}/{namespace}.json***

## Namespaces

***Oneki.js*** supports the separation of translations into multiple files which are called **namespaces**

The separation of translations into multiple files provide the following benefits:
- Only the required translation files are loaded
- The size of the translation files stays under control

### Common namespace
By convention, the default namespace is named **common** and is automatically loaded.<br/>
It's a good practice to put anything common to the whole application in this file (i.e: the text in the navbar). <br/>
For small applications, it's common to put every translations only in this file.

### Example
Suppose the translation files are splitted into 3 namespaces:
- common.json
- users.json
- admin.json

and the admin page only need translations from "admin" and "common" namespaces. This is specified via the hook **useTranslation**:

```javascript
// if common is not specified, it's automatically added to the list of required namespaces
const [T, t, locale, loading] = useTranslation(['admin', 'common']); 
```

Therefore when the page "admin" is displayed, only the files "common.json" and "admin.json" are loaded

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
***useTranslation*** hook will lazy load these files from the server when needed

### Embedded in javascript bundle
The translations can be embedded directly in the javascript bundle by adding them directly in the initial state of the redux store

TODO: example

## Content
The content of a translation file is a simple key/value JSON file like this

```json
{
  "Welcome": "Bienvenue"
}
```

A key can be prefixed to support plurals:
```json
{
  "User": "Utilisateur",
  "plural::User": "Utilisateurs"
}
```

The key and value can be more complex and looks like the content of a JSX component<br/>
Check TODO for all possibilities
```json
{
  // Basic example
  "Welcome": "Welcome", // <T>Welcome<T>

  // example of a translation containing a variable
  "Welcome": "Bienvenue {{name}} !", 

  // Same example as above but when the key is not specified by the developer. The key is therefore equal to the content of the default language
  "Welcome {{name}} !": "Bienvenue {{name}}!", 

  // translation of a more complex JSX component
  "user.connected": "Utilisateur <1>{{name}}</1> est connecté", 

  // Same example as above but when the key is not specified
  "User <1>{{name}}</1> is connected": "Utilisateur <1>{{name}}</1> est connecté"
}
```
