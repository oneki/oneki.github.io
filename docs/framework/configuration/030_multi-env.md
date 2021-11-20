---
id: multi-env
title: Environment variables
sidebar_label: Environment variables
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

The file ***src/settings.tsx*** is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables.

To avoid inserting unexpected environment variables in the final bundle, the name of the variables **must be** prefixed like this:

| Application type | Prefix | Example
| ---------------- | ------ | -------
| Create React App | **REACT\_APP_** | REACT_APP_API_URL=https://api.oneki.net
| Next.js APP      | **NEXT_** | NEXT_API_URL=https://api.oneki.net

The environment variables can be defined in one of these files:

```java
My-App
│  ├─ src 
│  │  ├─ settings.js
│  │  └─ ...
│
├─ .env.development
├─ .env.development.local
├─ .env.production
├─ .env.production.local
├─ package.json
└─ ...
```

<p/>

:::caution
These files should only contain environment variables. <br/>The entire configuration should be stored in ***src/settings.tx*** and environment variables **must** be referenced using `process.env.<env_variable>`
:::

| Filename | Description |
| -------- | -----------
| .env.development | Environment variables specific to the development environment. The development environment is started with **yarn dev** or **next** |
| .env.development.local | same as ***.env.development*** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: Since a **create react app** is executed on the browser side, it should not contain sensitive data |
| .env.production | Environment variables specific to a production environment. A production environment is any environment built with ** yarn build**. This file is generally not committed on GIT but created by a CI during the construction of the application (the file is therefore different between staging and production) |
| .env.production.local | same as ***.env.production*** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: Since a **create react app** is executed on the browser side, it should not contain sensitive data |


### Example

<Tabs>
  <TabItem value="cra">

Content of ***.env.development***

```javascript
REACT_APP_API_URL=https://dev.oneki.net/api
```

<p/>

Content of ***src/settings.ts***

```javascript
export default {
  baseUrl: process.env.REACT_APP_API_URL,
  notification: { // variables below common to all environments
    default: {
      ttl: 1000, 
      max: 5
    }
  }     
}
```

</TabItem>
<TabItem value="next">

Content of ***.env.development***

```javascript
NEXT_API_URL=https://dev.oneki.net/api
```

<p/>

Content of ***src/settings.ts***

```javascript
export default {
  baseUrl: process.env.NEXT_API_URL,
  notification: { // variables below common to all environments
    default: {
      ttl: 1000, 
      max: 5
    }
  }     
}
```

</TabItem>

</Tabs>