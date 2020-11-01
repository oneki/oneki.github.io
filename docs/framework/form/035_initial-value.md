---
id: initial-value
title: Initial values
sidebar_label: Initial values
---

import Sandbox from '@site/src/components/Sandbox';

Sometimes, it's useful to use the same form for creating an object or editing an object. For a edit-type form, the fields must be initialized with a initial value.
There are three ways to set a value to a field

- By setting explicitly the value, either following an **`onChange`** event or by using the **`setValue`** method provided by **[useForm](./use-form)**
- By passing a initialValues object to **[useForm](./use-form)**
- By specifying a default value when registering the **[field](./use-form)**

The form controller checks first if a value has been explicitely set, then checks if a initial value has been provided an finally check the default value  
If nothing has been provided, the value is a empty string (because core react components assume that an **`undefined`** or **`null`** value is for uncontrolled fields)

## Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/initial_value.js']}
branch="master"
/>
