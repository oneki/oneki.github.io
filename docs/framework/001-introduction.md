---
id: introduction
title: Introduction
sidebar_label: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**_Oneki.js_** is a framework offering several libraries providing features commonly found in most React applications.  
The main goal is to provide a framework with fully integrated libraries.

**_Example_**: the `usePost` hook of the **[Data](./data/introduction)** library knows the connected user provided by the **[Auth](./auth/introduction)** library

| Feature                                                 | Description                                                                                                                                          |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Application](./application/app)**                    | provides a `<App/>` component that allows you to start an application including a router andredux                                                    |
| **[Layout](./layout/layout)**                           | A library to avoid unmount / mount of a layout when transitioning between pages                                                                      |
| **[Configuration](./configuration/introduction)**       | A central place to put all confguration variables (compatible with multiple environments)                                                            |
| **[State Management](./state-management/introduction)** | A powerful state management library based on Redux, Immer and Saga                                                                                   |
| **[Authentication](./auth/introduction)**               | A comprehensive authentication library that supports form-based authentication, but also implements the Open ID connect standard.                    |
| **[Internationalization](./i18n/introduction)**         | An internationalization library (i18n) to make an application available in multiple languages. This library works with Create React app and Next.js. |
| **[Data](./data/introduction)**                         | A library to easily interact with a backend service via REST calls                                                                                   |
| **[Notification](./notification/introduction)**         | A library to provide a notification center to centralize notifications in the global state and display them                                          |
| **[Service](./service/introduction)**                   | A library to create complex services                                                                                                                 |
