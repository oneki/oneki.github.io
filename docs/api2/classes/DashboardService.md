---
id: DashboardService
title: DashboardService
sidebar_label: DashboardService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **state** | [DashboardState](/api2/types/DashboardState.md) |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **collapse** | collapse(area: all \| DashboardArea,collapse: boolean): void |  |
| **collapseFloating** | collapseFloating(): void |  |
| **float** | float(area: all \| DashboardArea,float: boolean): void |  |
| **getBodyPanel** | getBodyPanel(): undefined \| DashboardBodyPanel |  |
| **getHorizontalPanel** | getHorizontalPanel(area: footer \| header): undefined \| DashboardHorizontalPanel |  |
| **getVerticalPanel** | getVerticalPanel(area: left \| right): undefined \| DashboardVerticalPanel |  |
| **initBodyPanel** | initBodyPanel(_props: DashboardBodyPanelProps,ref: RefObject<HTMLDivElement\>): void |  |
| **initContainer** | initContainer(ref: RefObject<HTMLDivElement\>): void |  |
| **initHorizontalPanel** | initHorizontalPanel(area: footer \| header,props: DashboardHorizontalPanelProps,ref: RefObject<HTMLDivElement\>): void |  |
| **initVerticalPanel** | initVerticalPanel(area: left \| right,props: DashboardVerticalPanelProps,ref: RefObject<HTMLDivElement\>): void |  |
| **resizeHeight** | resizeHeight(area: DashboardHorizontalArea,nextHeight: number,step: ResizeStep): void |  |
| **resizeWidth** | resizeWidth(area: DashboardVerticalArea,nextWidth: number,step: ResizeStep): void |  |
| **showOverlay** | showOverlay(): boolean |  |
| **toggle** | toggle(area: all \| DashboardArea): void |  |
