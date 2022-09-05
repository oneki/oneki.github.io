---
id: Navigator
title: Navigator
sidebar_label: Navigator
---

A Navigator is a "location changer"; it's how you get to different locations.

Every history instance conforms to the Navigator interface, but the  
distinction is useful primarily when it comes to the low-level <Router\> API  
where both the location and a navigator must be provided separately in order  
to avoid "tearing" that may occur in a suspense-enabled app if the action  
and/or location were to be read directly from the history instance.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
