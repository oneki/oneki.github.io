---
id: multi-env
title: Environment variables
sidebar_label: Environment variables
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The file ***settings.js*** is the central place to contain all configuration variables. However, some variables are different by environment (i.e: development, staging, acceptance, production). They are called environment variables.

To avoid inserting unexpected environment variables in the final bundle, the name of the variable **must be** prefixed like this:

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

| Filename | Description |
| -------- | -----------
| .env.development | Environment variables specific to the development environment. The development environment is the one started with **yarn dev** or **next** |
| .env.development.local | same as ***.env.development*** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: This file is generally not used with **create react app** as it should only contain data that will not be bundled in a file loaded by the browser |
| .env.production | Environment variables specific to a production environment. A production environment is any environment built with ** yarn build**. This file is generally not committed on GIT but created by a CI when building the app (so the file is different between staging and production) |
| .env.production.local | same as ***.env.production*** but this file **should not** be committed on GIT.<br/>Therefore this file can contain more sensitive data<br/><br/>**Note**: This file is generally not used with **create react app** as it should only contain data that will not be bundled in a file loaded by the browser |

These files should only contain environment variables. <br/>The whole configuration should be stored in ***settings.js*** and environment variables **must** be referenced using **process.env.**<env_variable>

### Example

<Tabs
  defaultValue="next"
  values={[
    { label: 'Next.js', value: 'next', },
    { label: 'Create react app', value: 'cra', },
  ]
}>
<TabItem value="next">

Content of ***.env.development***

```javascript
NEXT_API_URL=https://dev.oneki.net/api
```

Content of ***settings.js***

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
<TabItem value="cra">

Content of ***.env.development***

```javascript
REACT_APP_API_URL=https://dev.oneki.net/api
```

Content of ***settings.js***

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
</Tabs>