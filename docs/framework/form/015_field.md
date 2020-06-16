---
id: field
title: Field
sidebar_label: Field
---
import Sandbox from '@site/src/components/Sandbox';

A field must be registered with a form to be controlled.
There are different ways to register a field with a form

- The `field`method provided by **[useForm](./use-form)**
- The `useField` hook. Check the **[Write your own wrapper component](./custom-component)** page for more details
- The `init` method provided by **[useFormContext](./use-form-context)**. Low level API.

## field method

The simplest way to register a field with a form is to use the `field` method provided by useForm

```javascript
const { field } = useForm();
const { name, value, onChange, onBlur } = field(name, validators, options);
```

### Inputs

| Name                 | Description                                                                                                                                                                       | Example                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **name**                 | Name of the field. Must match the path in the values object<br /> A sub property is accessed via a dot --> `address.street`<br/>A item of an array is accessed via its index  --> `item.2` | `lastname`<br />`address.street`<br />`children.1.firstname`                                   |
| **validators**           | An array of validators. Check the **[Validations](./validation)** section for more details                                                                                        | `[required(), maxlength(5), regex('/^[a-zA-Z]*$', 'Can only contains alphabetical characters)]` |
| **options.defaultValue** | Default value of the field                                                                                                                                                        |                                                                                                |

### Outputs

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| **name**     | Name of the field (same as input, given for convenience, see example below)                           |
| **value**    | Value of the field                           |
| **onChange** | listener called anytime the value is changed |
| **onBlur**   | listener called when the field is exited     |

### Caveat
The `field` method is the simplest way to register a field with a form but it's also the less performant. Anytime any value is changed, the field is rerendered  
Check the **[Core component wrappers](./wrapper)** for a better solution.

### Helpers
the `useForm` hook provides some helper to access the value or the validation of a field

```javascript
const { getValue, getValidation } = useForm();
const lastname = getValue('address.street')  // will not throw an error if address is undefined
const validationStatus = getValue('address.street').status  // will not throw an error if the validation is undefined
const validationMessage = getValidation('address.street').message  // will not throw an error if the validation is undefined
```

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| **getValue(fieldName)**     | retrieves the value of a field. <br />Returns **`undefined`** if the field has not been yet initialized.                           |
| **getValidation(fieldName)**    | retrieves the validation object of a field. <br />The validation object contains the **status** and the **message**<br />Returns **`{ message: null, status: null }`** if the field has not been yet validated |

### Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/field.js']}
branch="features/form"
/>