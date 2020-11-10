---
id: field
title: Field
sidebar_label: Field
---

import Sandbox from '@site/src/components/Sandbox';

A field must be registered with a form to be controlled.
There are different ways to register a field with a form

- The `field`method provided by **[useForm](./use-form)**
- The `useField` hook. Check the **[Write your own wrapper component](./custom-wrapper)** page for more details
- The `init` method provided by **[useFormContext](./use-form-context)**. Low level API.

## field method

The simplest way to register a field with a form is to use the `field` method provided by useForm

```javascript
const { field } = useForm();
const { name, value, onChange, onFocus, onBlur } = field(name, validators, options);
```

### Inputs

| Name                     | Description                                                                                                                                                                               | Example                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **name**                 | Name of the field. Must match the path in the values object<br /> A sub property is accessed via a dot --> `"address.street"`<br/>A item of an array is accessed via its index --> `"item.2"` | `"lastname"`<br />`"address.street"`<br />`"children.1.firstname"`                                    |
| **validators**           | An array of validators. Check the **[Validations](./validations)** section for more details                                                                                                | `[required(), maxlength(5)]` |
| **options.defaultValue** | Default value of the field                                                                                                                                                                | `defaultValue: 'open'`                                                                                                |
| **options.touchOn** | *Overrides the setting defined at the **[form](./use-form#inputs)** level* <br/><br/>Indicates which event marks the field as touched.<br />The validations of a field are compiled as soon as it has been touched.<br /><br />Valid values are<br /> - **`blur`**: when the field is exited<br /> - **`change`**: when the content of the field is changed<br />  - **`focus`**: when the field is entered<br /> - **`load`**: when the field is loaded<br /> - **`submit`**: when the form is submitted                                         | `touchOn: 'focus'`|

### Outputs

| Name         | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| **name**     | Name of the field (same as input, given for convenience, see example below) |
| **value**    | Value of the field                                                          |
| **onChange** | listener called anytime the value is changed                                |
| **onFocus**   | listener called when the field is entered                                    |
| **onBlur**   | listener called when the field is exited                                    |

### Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/field.js']}
branch="master"
/>

## useField

The `field` method is the simplest way to register a field with a form but it's also the less performant. Anytime any value of the form is changed, the field is rerendered  
For better performance, it's better to wrap a form component and register it via the **`useField`** hook since this hook only rerenders the wrapped component when its value is changed.

The signature of the **`useField`** hook is the same as the **[field](#field-method)** method

```javascript
import { useField } from "onkeijs-cra"; //  or import { useField } from 'onkeijs-next'
const { name, value, onChange, onFocus, onBlur } = useField(name, validators, options);
```

**Oneki.js** comes with some components wrapping core form react component (see the **[Core component wrappers](./wrapper)** section).  
To create a custom one, check the **[Custom wrappers](./custom-wrapper)** section

:::note Note
**`useField`** uses internally **[useFormContext](./use-form-context)**, meaning that it only works if the component is rendered as a child of a **`<Form>`** component
:::

## Helpers

the `useForm` hook provides some helper to access the value or the validation of a field

```javascript
const { getValue, getValidation } = useForm();

const formValue = getValue();
const lastname = getValue("address.street"); // will not throw an error if address is undefined
const validationStatus = getValue("address.street").status; // will not throw an error if the validation is undefined
const validationMessage = getValidation("address.street").message; // will not throw an error if the validation is undefined
```

| Name              | Signature                                                                                                                                                                               | Description                                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **getValue**      | `const fieldValue = getValue(fieldName)`                               | Get the form value or the value of a field<br /> - **`fieldName`**: (null \| string) the name of a field. Returns the full content of the form if `fieldName` is undefined, null or empty       |
| **getValidation** | `const fieldValidation = getValidation(fieldName, touchedOnly)` | Get the validation of the form or the validation of a field<br /> - **`fieldName`**: (null \| string) the name of a field. Returns all validations if `fieldName` is undefined, null or empty.<br /> - **`touchedOnly`**: (bool) only returns validations of touched fields -- defaults to true.| 

:::note Note
**`getValue`** and **`getValidation`** can be used to get a composite value or a composite validation.  
For example, if there are two fields **`address.street`** and **`address.city`**

- **`getValue('address')`** will return `{ street: 'xxx', city: 'xxx' }`
- **`getValidation('address')`** will compile the validation of the two fields and returns the lower statusCode and the list of field messages
:::
