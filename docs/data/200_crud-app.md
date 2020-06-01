---
id: crud-app
title: CRUD application
sidebar_label: CRUD application
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The CRUD application consists of a simple website to create / read / update / delete a user.
The application respects the file structure we recommend and consists of the following pages:
- A ***/users*** page that list all the users
- A ***/users/new*** page to create a new user
- A ***/users/:id*** page to display a user. This page contains also a button to delete the user.
- A ***/users/:id/edit*** page to edit the user

<Tabs
  defaultValue="next"
  values={[
    { label: 'Next App', value: 'next', },
    { label: 'Create React App', value: 'cra', },
  ]
}>
<TabItem value="next">

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?module=%2Fsrc%2Fpages%2F_app.js&fontsize=14&hidenavigation=1&theme=dark&view=editor"
    style={{width:'100%', height:'400px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style={{width:'100%', height:'400px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>

Click on the icon <img width="20px" height="20px" alt="Notification architecture" src={useBaseUrl('img/hamburger_icon.svg')} /> to access the other files or [open the project in Code Sandbox](https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark)

</TabItem>
<TabItem value="cra">

<Tabs
  defaultValue="code"
  values={[
    { label: 'Code', value: 'code', },
    { label: 'Preview', value: 'preview', },
  ]
}>
<TabItem value="code">
  <iframe
    src="https://codesandbox.io/embed/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark&view=editor"
    style={{width:'100%', height:'650px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
<TabItem value="preview">
  <iframe
    src="https://codesandbox.io/embed/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark&view=preview"
    style={{width:'100%', height:'650px', border:0, bordeRadius: '4px', overflow:'hidden'}}
    title="onekijs-basic-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
</TabItem>
</Tabs>
Click on the icon <img width="20px" height="20px" alt="Notification architecture" src={useBaseUrl('img/hamburger_icon.svg')} /> to access the other files or [open the project in Code Sandbox](https://codesandbox.io/s/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark)

</TabItem>
</Tabs>