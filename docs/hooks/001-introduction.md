---
id: introduction
title: Oneki.js hooks
sidebar_label: Table of contents
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


***Oneki.js*** provides several hooks to speed up the developpement and to hide most of the complexity of Redux, Redux Saga and Immer.

#### Configuration hooks

| Hook          |      Description|
| ------------- | ------------- |
| [useSettings](use-settings)      | ***useSettings*** returns the whole object passed as a prop to ***App*** (generally defined in settings.js) |
| [useSetting](use-settings)      | ***useSetting*** returns a specific entry from Settings |

#### AJAX hooks
| Hook          |      Description|
| ------------- | ------------- |
| [useGet](use-get)      | ***useGet*** sends an ajax GET request and returns back the data. |
| [useSecureGet](use-get)      | ***useSecureGet*** is similar to ***useGet*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store |
| [usePost](use-post)      | ***usePost*** sends an ajax POST request and returns back the payload received from the server |
| [useSecurePost](use-post)      | ***useSecurePost*** is similar to ***usePost*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store |
| [usePut](use-put)      | ***usePut*** sends an ajax PUT request and returns back the payload received from the server |
| [useSecurePut](use-put)      | ***useSecurePut*** is similar to ***usePut*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store |
| [useDelete](use-delete)      | ***useDelete*** sends an ajax DELETE request |
| [useSecureDelete](use-delete)      | ***useSecureDelete*** is similar to ***useDelete*** but adds a *Bearer* authorization header that contains the token received and stored by ***useLoginService*** in the redux store |

#### Notification hooks
| Hook          |      Description|
| ------------- | ------------- |
| [useNotificationService](use-notification-service)      | ***useNotificationService*** provides a central service to send notification.|
| [useNotifications](use-notifications)      | ***useNotifications*** listens on a topic that contains notifications.<br/> As soon as the topic is updated, the component does a re-render|

#### Service hooks
| Hook          |      Description|
| ------------- | ------------- |
| [useLocalService](use-local-service)      | The goal of ***useLocalService*** is to create a service local to the component with two kinds of methods: <ul><li>***Reducer methods***: the role of these methods is to update the local state of the component. These methods are generally very simple.</li><li>***Saga methods***:<ul><li>These methods are generally asynchronous and more complex</li><li>A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render</li><li>A saga method never updates the local state by itself. It always calls a *Reducer* method to do that.</li></ul></li></ul> |
| [useReduxService](use-redux-service)      | The goal of ***useReduxService*** is to create a singleton with two kinds of methods:<ul><li>***Reducer methods***: the role of these methods is to update the redux state. These methods are generally very simple.</li><li>***Saga methods***<ul><li>These methods are generally asynchronous and more complex.</li><li>A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render</li><li>A saga method never updates the Redux state by itself. It always calls a *Reducer* method to do that.</li></ul></li></ul> |
| [useReduxSelector](use-redux-selector)      | ***useReduxSelector*** is similar to ***useSelector*** from **React Redux** but is tailored to be used with a Redux Store built by Oneki.js
