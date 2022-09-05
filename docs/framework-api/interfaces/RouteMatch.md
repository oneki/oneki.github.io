---
id: RouteMatch
title: RouteMatch
sidebar_label: RouteMatch
---

A RouteMatch contains info about how a route matched a URL.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| params | [Params](/framework-api/types/Params.md)<ParamKey\> | The names and values of dynamic parameters in the URL. |
| pathname | string | The portion of the URL pathname that was matched. |
| pathnameBase | string | The portion of the URL pathname that was matched before child routes. |
| route | [RouteObject](/framework-api/interfaces/RouteObject.md) | The route object that was used to match. |
