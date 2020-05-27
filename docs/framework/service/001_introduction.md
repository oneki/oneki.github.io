---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Oneki.js** introduces the concept of ***services*** handling a ***local*** or ***global*** state  very easily and following the best practices (immutability, action, reducers, ...).

The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the service.

| Type | Description |
| ---- | ----------- |
| Local service | A service handling a state local to a component. This service is instantied every time the component is instantied |
| Global service | A service handling the global state of the application. This service is a singleton and is shared between all components |

## Architecture
<img alt="Service architecture" src={useBaseUrl('img/onekijs-State Management.svg')} />

<br/><br/>

**Oneki.js** provides a library to built your own **local** or **global** services to handle complex asynchronous flows like:
- Updating the "loading" variable in the local state to **true**
- Performing a AJAX GET requests and store the result in the local state
- Updating the "loading" variable in the local state to **false**