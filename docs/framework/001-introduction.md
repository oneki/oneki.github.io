---
id: introduction
title: Introduction
sidebar_label: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**_Oneki.js_** is a framework offering several libraries providing features commonly found in a lot of React applications.

The main goal is to provide a framework with fully integrated libraries.

**_Example_**: the hook `usePost` from the **[Data](./data/introduction)** library is aware of the logged-in user provided by the **[Auth](./auth/introduction)** library

| Feature                                                  | Description                                                                                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Application](./application/app)**                     | offers a `<App/>` (top level) component that bootstraps an application including a router and redux store                                   |
| **[Layout](./layout/layout)**                            | A library to avoid unmount / mount of a layout when transitioning between pages                                                             |
| **[Configuration](./configuration/introduction)**        | A central place to put any confguration variables (multi environments aware)                                                                |
| **[State Management](./state-management/introduction) ** | A powerful state management library based on Redux, Immer and Saga                                                                          |
| **[Authentication](./auth/introduction)**                | A complete authentication library that supports Form based authentication, but also implements the Open ID connect standard                 |
| **[Internationalization](./i18n/introduction)**          | An Internationalization (i18n) library to make an app available in multiple languages. This library works with Create React app and Next.js |
| **[Data](./data/introduction)**                          | A library to easily interact with a backend service via REST calls                                                                          |
| **[Notification](./notification/introduction)**          | A library to provide a notification center to centralize notifications in the global state and display them                                 |
| **[Service](./service/introduction)**                    | A library to create complex services                                                                                                        |
