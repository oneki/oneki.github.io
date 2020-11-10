---
id: introduction
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Oneki.js** introduces the concept of ***services*** handling a ***local*** (local services) or ***global*** state (global services) very easily and following the best practices (immutability, action, reducers, ...).

The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the service.

## Architecture
<img alt="Service architecture" src={useBaseUrl('img/onekijs-State Management.svg')} />

## Built in services

***Oneki.js*** provides several services to handle tasks commonly found in React applications:

| Service          |      Description|
| ------------- | ------------- |
| [Notification](../framework/notification/introduction) | Services to centralize notifications in a global state and display them  |
| [REST](../framework/data/use-get) | Services to easily interact with a backend service via REST calls  |

## Build your own

***Oneki.js*** provides also a library to build **your own services**. These services can be complex and asynchronous