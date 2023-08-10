---
id: multi-env
title: Environment variables
sidebar_label: Environment variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@site/src/components/DocTabs';
import TabItem from '@theme/TabItem';

The file **_src/settings.ts_** is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables.

To avoid inserting unexpected environment variables in the final bundle, the name of the variables **must be** prefixed like this:

| Application type | Prefix     | Example                            |
| ---------------- | ---------- | ---------------------------------- |
| Vite App         | **VITE\_** | VITE_API_URL=https://api.oneki.net |
| Next.js APP      | **NEXT\_** | NEXT_API_URL=https://api.oneki.net |

The environment variables can be defined in one of these files:

```java
My-App
│  ├─ src
│  │  ├─ settings.ts
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
These files should only contain environment variables. <br/>The entire configuration should be stored in **_src/settings.ts_** and environment variables **must** be referenced using `import.meta.env.<env_variable>` (Vite) or `process.env.<env_variable>` (Next.js)
:::

| Filename               | Description                                                                                                                                                                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .env.development       | Environment variables specific to the development environment. The development environment is started with **yarn dev** or **next**                                                                                                                                                                             |
| .env.development.local | same as **_.env.development_** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: Since a **Vite app** is executed exclusively on the browser side, it should not contain sensitive data like passwords                                               |
| .env.production        | Environment variables specific to a production environment. A production environment is any environment built with ** yarn build**. This file is generally not committed on GIT but created by a CI during the construction of the application (the file is therefore different between staging and production) |
| .env.production.local  | same as **_.env.production_** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: Since a **Vite app** is executed exclusively on the browser side, it should not contain sensitive data like passwords                                                  |

### Example

<Tabs>
  <TabItem value="cra">

Content of **_.env.development_**

```javascript
VITE_API_URL=https://dev.oneki.net/api
```

<p/>

Content of **_src/settings.ts_**

```javascript
export default {
  baseUrl: import.meta.env.VITE_API_URL,
  notification: {
    // variables below common to all environments
    default: {
      ttl: 1000,
      max: 5,
    },
  },
};
```

</TabItem>
<TabItem value="next">

Content of **_.env.development_**

```javascript
NEXT_API_URL=https://dev.oneki.net/api
```

<p/>

Content of **_src/settings.ts_**

```javascript
export default {
  baseUrl: process.env.NEXT_API_URL,
  notification: {
    // variables below common to all environments
    default: {
      ttl: 1000,
      max: 5,
    },
  },
};
```

</TabItem>

</Tabs>
