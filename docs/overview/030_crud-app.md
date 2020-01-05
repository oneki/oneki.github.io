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
- A ***Users*** page that list all the users
- A ***UserCreate*** page to create a new user
- A ***UserDisplay*** page to display a user. This page contains also a button to delete the user.
- A ***UserEdit*** page to edit the user

Click on the icon <img width="20px" height="20px" alt="Notification architecture" src={useBaseUrl('img/hamburger_icon.svg')} /> to access the other files or [open the project in Code Sandbox](https://codesandbox.io/s/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark)
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