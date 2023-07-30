---
id: AccordionProps
title: AccordionProps
sidebar_label: AccordionProps
---



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| animate | number | **Defaults to:** 150 |
| border | boolean | a flag to indicate if the border is visible or not<br/><br/>**Example:** <pre>false</pre><br/><br/>**Defaults to:** true |
| className | string |  |
| Component | FCC<Omit<[AccordionProps](/api2/accordion/types/AccordionProps.md), Component\>\> |  |
| mode | push \| pushToBottom | push means that the height of the accordion panel is derived from the height of its content<br/>pushToBottom means that the height of the accordion panel is the remaining space given by the accordion's container after removing the space taken by the other accordion panel titles (do not work if multiActive is true)<br/><br/>**Defaults to:** push |
| multiActive | boolean | **Defaults to:** false |
