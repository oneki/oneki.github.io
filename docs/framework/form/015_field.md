---
id: field
title: Field
sidebar_label: Field
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

A field must be registered with a form to be controlled.
There are different ways to register a field with a form

- The `field`method provided by **[useForm](./use-form)**
- The `useField` hook. Check the **[Write your own wrapper component](./custom-wrapper)** page for more details
- The `init` method provided by **[useFormContext](./use-form-context)**. Low level API.

## field method

The simplest way to register a field with a form is to use the `field` method provided by useForm

```javascript
const { field } = useForm();
const { name, value, onChange, onFocus, onBlur } = field(
  name,
  validators,
  options
);
```

### Inputs

| Parameter      |                  | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ---------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**\*     |                  | string                                           | Name of the field. Must match the path in the values object<br /> A sub property is accessed via a dot --> `"address.street"`<br/>A item of an array is accessed via its index --> `"item.2"`<br/>**Example**: <ul><li>`"lastname"`</li><li>`"address.street"`</li><li>`"children.1.firstname"` </li></ul>                                                                                                                                                                                               |
| **validators** |                  | [Validator](../../api/types/Validator)[]         | An array of validators. Check the **[Validations](./validations)** section for more details.<br/>**Example**: `[required(), maxlength(5)]`                                                                                                                                                                                                                                                                                                                                                               |
| **options**    |                  | [FormOptions](../../api/interfaces/FieldOptions) | An object that contains optional options                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                | **defaultValue** | any                                              | Default value of the field <br/>**Example**: `'open'`                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                | **touchOn**      | [TouchOnType](../../api/types/TouchOnType)       | _Overrides the setting defined at the **[form](./use-form#inputs)** level_ <br/><br/>Indicates which event marks the field as touched.<br />The validations of a field are compiled as soon as it has been touched.<br /><br />Valid values are<br /> - **`blur`**: when the field is exited<br /> - **`change`**: when the content of the field is changed<br /> - **`focus`**: when the field is entered<br /> - **`load`**: when the field is loaded<br /> - **`submit`**: when the form is submitted |

### Outputs

| Parameter    | Type          | Description                                                                 |
| ------------ | ------------- | --------------------------------------------------------------------------- |
| **name**     | string        | Name of the field (same as input, given for convenience, see example below) |
| **value**    | any           | Value of the field                                                          |
| **onChange** | (value): void | listener called anytime the value is changed                                |
| **onFocus**  | (): void      | listener called when the field is entered                                   |
| **onBlur**   | (): void      | listener called when the field is exited                                    |

### Example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/field.tsx
```

## useField

The `field()` method is the simplest way to register a field in a form, but it is also the least efficient. Every time any value in the form is updated, the field is re-rendered. <br/>
For best performance, it is best to wrap a form component and register it with the **``useField`` hook because this hook only renders the wrapped component when its value is changed.

The signature of the **`useField`** hook is the same as the **[field](#field-method)** method

```javascript
import { useField } from "onkeijs";
const { name, value, onChange, onFocus, onBlur } = useField(
  name,
  validators,
  options
);
```

**Oneki.js** comes with some components wrapping core form react component (see the **[Core component wrappers](./wrapper)** section).  
To create a custom one, check the **[Custom wrappers](./custom-wrapper)** section

:::info Note
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

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **getValue**  | <T\>(fieldName: string): T \| undefined | A helper to get the value of a field. Returns undefined if the value is not initialized.<br/>**Example**: `getValue('address.street')`                                                                                                           |
| **getValidation** | (fieldName?: string, touchedOnly?: boolean): [ContainerValidation](../../api/classes/ContainerValidation) \| [FieldValidation](../../api/classes/FieldValidation)       | A helper to get the validation of a field. Returns `{ status: null, message: null }` if the validation is not initialized.<br/>**touchedOnly** defaults to `true`<br/>**Example**: `getValidation('address.street').status`                                                                                               |

:::info Note
**`getValue`** and **`getValidation`** can be used to get a composite value or a composite validation.  
For example, if there are two fields **`address.street`** and **`address.city`**

- **`getValue('address')`** will return `{ street: 'xxx', city: 'xxx' }`
- **`getValidation('address')`** will compile the validation of the two fields and returns the lower statusCode and the list of field messages
:::
