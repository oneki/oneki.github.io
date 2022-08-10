---
id: validations
title: Validations
sidebar_label: Validations
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

There are different ways to validate the content of the form

- For simple validations,  you can add one or more validators to the field.
- For more complex validations (i.e. validations between fields), you can use the **`rule`** method or the **`useRule`** hook.

## Simple validations

The **[field](./field#field)** method and the **[useField](./field#usefield)** hook both accept a list of validators as a second argument.

A validator is a function or an asynchronous function that receives a value and returns a boolean (is valid or not) and an error message.

```javascript
const { valid, message } = (value: any) => { ... };
const { valid, message } = async (value: any) => { ... };
```

A validator often expects input parameters so it can be reused in different contexts.  
To do that, just wrap the validator in a closure.

```ts
const maxlength = (maxlength: number) => {
  return (value: any) => {
    return {
      valid: value.length <= maxlength
      message: `Cannot exceed ${maxlength} characters`
    }
  };
};
```

### Validation object

For each field, the form collects all the results from the validator and compiles them into a validation object.   
This object is accessible via the **`getValidation`** method provided by useForm or the **`useValidation`** hook in a custom component.

```javascript
const { message, status, statusCode } = getValidation(fieldName);
const { message, status, statusCode } = useValidation(fieldName);
```

| Name        | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| **status**  | can be **`null`** (not yet validated), **`loading`** , **`error`**, **`warning`** or **`ok`** |
| **statusCode**  | can be **`null`** (not yet validated), **`0`** (for loading), **`1`** (for error), **`2`** (for warning) or **`3`** (for ok) |
| **message** | only defined if status is **`warning`** or **`error`**                                       |

:::info Info
During compilation, validator results are ordered by their statusCode.  
The compiler first checks if a validator returns a **`loading`** result and then checks if a validator returns an **`error`** result and so on. When it finds a match, the compilation stops and the validation object is returned.  
If nothing is found, it returns `{ status: null, message: null }`.
:::

:::note Note
By default, the compilation is done only when the field has been touched. To control when the field is touched, check options of **[useForm](./use-form#inputs)** and **[field](./field#inputs)**
:::

:::tip Tip
`Oneki.js` provides a constant for each statusCode. See **[ValidationCode]("../../../../api/enums/ValidationCode)**
:::

### Asynchronous validator

Once an asynchronous validator is attached to a field, there are two renderings each time the value is changed:

- the first rendering handles a loading validation object `{ status : 'loading', statusCode : LOADING, message : null }`
- once the validator is resolved, the second rendering handles the final validation object `{ status : 'error|warning|ok', statusCode : ERROR|WARNING|OK, message : 'error_msg|warning_msg|null' }`

### Built-in validators

| Name        | Signature             | Description|
| ----------- | --------------------- |---------------------|
| **required**  | `required(message)` | Checks that the field is not empty<br /> - **`message`**: override the default error message|
| **regex** | `regex(expression, message)`| Checks that the value of the field matchs a regular expression<br /> - **`expression`**: a regular expression (object or string)<br /> - **`message`**: override the default error message |

### Simple validation Example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/validator.tsx
```

## Complex validations

Sometimes a validation involves more than one field. For example, the password confirmation validator checks that the contents of two different fields are similar.  
The **[useForm](./use-form)** hook provides some methods to externally check the validation status of a field.

```javascript
const { setError, setWarning, setOK, setPendingValidation } = useForm();
```

<br/>

| Name                 | Signature                                                 | Description                                                                                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[setPendingValidation](../../api/interfaces/UseForm#setpendingvalidation)** | `setPendingValidation(fieldName, validatorId, matcher)` | Mark the field as pending a validation<br/> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                                |
| **[setError](../../api/interfaces/UseForm#seterror)**           | `setError(fieldName, validatorId, message, matcher)`    | Set the field in error<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the error<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)   |
| **[setWarning](../../api/interfaces/UseForm#setwarning)**           | `setWarning(fieldName, validatorId, message, matcher)`  | Set the field in warning<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the warning<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation) |
| **[setOK](../../api/interfaces/UseForm#setok)**                | `setOK(fieldName, validatorId, matcher)`           | Mark the field as valid <br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                                |

:::info Note
Generally, these methods are used in conjunction with the **[rule](./rules#rule)** method or the **[useRule](./rules#userule)** hook.
:::

### Complex validation Example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/complex_validator.tsx
```
