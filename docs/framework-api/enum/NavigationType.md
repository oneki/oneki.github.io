---
id: NavigationType
title: NavigationType
sidebar_label: NavigationType
---

import Details from "@theme/Details"


Actions represent the type of change to a location value.

### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Value | Description |
| --------- | ---- | ----------- |
| Pop | POP | A POP indicates a change to an arbitrary index in the history stack, such<br/>as a back or forward navigation. It does not describe the direction of the<br/>navigation, only that the current index changed.<br/><br/>Note: This is the default action for newly created history objects. |
| Push | PUSH | A PUSH indicates a new entry being added to the history stack, such as when<br/>a link is clicked and a new page loads. When this happens, all subsequent<br/>entries in the stack are lost. |
| Replace | REPLACE | A REPLACE indicates the entry at the current index in the history stack<br/>being replaced by a new one. |


