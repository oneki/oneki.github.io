---
id: wrapper
title: Core wrappers
sidebar_label: Core wrappers
---

import Sandbox from '@site/src/components/Sandbox';

The **[field](./field#field)** method provided by **[useForm](./use-form)** is the simplest way to register a field with a form because it's not necessary to modify the component as soon as it accepts the common props **`name`**, **`value`**, **`onChange`**, **`onFocus`** and **`onBlur`**  
The downside of this method is that it's not very performant as it rerenders the field anytime any value is changed.

### Field wrappers

**Oneki.js** comes with a wrapper for each React core form component. These wrappers will register automatically the field and provide additional props to specify some validators in a more "React way". Internally, they leverage the **[useField](./field#usefield)** hook

| Core component | Wrapper      |
| -------------- | ------------ |
| `<input>`      | `<Input>`    |
| `<select>`     | `<Select>`   |
| `<textarea>`   | `<Textarea>` |

Each wrapper requires at least the **`name`** prop. The name prop must match the path of the value in the values object. Check the **[field](./field)** for more detail  
Each wrapper accepts the same props as the wrapped component but also accepts additional props for validators

| Prop                | Required | Description                                                                                                                                                   | Example                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **name**            | yes      | The name of the field.<br />The name prop must match the path of the value in the values object<br />Check the **[field](./field)** for more detail `<Input>` | `name="status"`                                            |
| **defaultValue**    | no       | Default value of the field if not defined in the values object or the initialValues provided to **[useForm](./use-form)**                                     | `defaultValue="closed"`                                    |
| **email**           | no       | Check if the value of the field is an email                                                                                                                   | `email`                                                    |
| **emailMessage**    | no       | Override the default message provided to the user if the validator `email` is not valid.                                                                      | `emailMessage="Invalid email"`                             |
| **required**        | no       | Indicates that the field is required                                                                                                                          | `required`                                                 |
| **requiredMessage** | no       | Override the default message provided to the user if the validator `required` is not valid.                                                                   | `requiredMesage="This field is required"`                  |
| **regex**           | no       | Specify a regular expression evaluated against the value of the field                                                                                         | `regex="^[a-zA-Z]*$"`                                      |
| **regexMessage**    | no       | Override the default message provided to the user if the validator `regex` is not valid.                                                                      | `regexMessage="Can only contains alphabetical characters"` |

### Submit wrapper

There is also a wrapper for the submit button. This wrapper listens on the form status and disables the submit button if the form status is not OK

| Core component          | Wrapper    |
| ----------------------- | ---------- |
| `<buton type="submit">` | `<Submit>` |

## Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/wrapper.js']}
branch="master"
/>