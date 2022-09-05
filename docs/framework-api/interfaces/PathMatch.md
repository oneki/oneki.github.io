---
id: PathMatch
title: PathMatch
sidebar_label: PathMatch
---

A PathMatch contains info about how a PathPattern matched on a URL pathname.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| params | [Params](/framework-api/types/Params.md)<ParamKey\> | The names and values of dynamic parameters in the URL. |
| pathname | string | The portion of the URL pathname that was matched. |
| pathnameBase | string | The portion of the URL pathname that was matched before child routes. |
| pattern | PathPattern<string\> | The pattern that was used to match. |
