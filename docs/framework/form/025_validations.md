---
id: validations
title: Validations
sidebar_label: Validations
---

import Sandbox from '@site/src/components/Sandbox';

There are different ways to validate the content of the form

- For simple validations, it's possible to add some validators to the field during its registration
- For more complex validations (i.e inter field validations), it's possible to use the **`rule`** method or the **`useRule`** hook.

## Simple validations

The **[field](./field#field)** method and the **[useField](./field#usefield)** hook accept both a list of validators a their second argument.

A validator is a function or a async function receiving a value and returning a boolean (for the validity) and an error message

```javascript
const { valid, message } = (value) => {};
const { valid, message } = async (value) => {};
```

A validator often expects a configuration to be reusable in different contexts.  
To do that, just wrap the validator in a closure.

```javascript
const maxlengthValidator = maxlength => {
  return value => {
    return {
      valid: value.length <= maxlength
      message: `Cannot exceed ${maxlength} characters`
    }
  }
}
```

### Validation object

For each field, the form collects all validator results and compiles them in a validation object  
This object can be accessed via the **`getValidation`** method provided by useForm or the **`useValidation`** hook inside a custom component

```javascript
const { message, status, statusCode } = getValidation(fieldName);
const { message, status, statusCode } = useValidation(fieldName);
```

| Name        | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| **status**  | can be **`null`** (not yet validated), **`loading`** , **`error`**, **`warning`** or **`ok`** |
| **statusCode**  | can be **`null`** (not yet validated), **`0`** (for loading), **`1`** (for error), **`2`** (for warning) or **`3`** (for ok) |
| **message** | only defined if status is **`warning`** or **`error`**                                       |

:::note Note
During the compilation, the validator results are ordered by their statusCode  
The compilator checks first if a validator returns a **`loading`** result then checks if a validator an **`error`** result and so on. Once it finds a match, the compilation stops and the validation object is returned  
If nothing is found, it returns `{ status: null, message: null }`
:::

:::note Note
By default, the compilation is done only when the field has been touched. To control when the field is touched, check options of **[useForm](./use-form#inputs)** and **[field](./field#inputs)**
:::

:::note Note
`Oneki.js` provides a constant for each statusCode  

```javascript
import { OK, WARNING, ERROR, LOADING } from 'onekijs-cra'; // or from 'onekijs-next'
```

:::

### Async validator

Once a async validator is attached to a field, there are two renders each time the value is changed

- the first render get a loading validation object `{ status: 'loading', statusCode: LOADING, message: null }`
- once the validator resolves, the second render get the final validation object `{ status: 'error|warning|ok', statusCode: ERROR|WARNING|OK, message: 'error_msg|warning_msg|null' }`

### Built-in validators

| Name        | Signature             | Description|
| ----------- | --------------------- |---------------------|
| **required**  | `required(message)` | Checks that the field is not empty<br /> - **`message`**: override the default error message|
| **regex** | `regex(expression, message)`| Checks that the value of the field matchs a regular expression<br /> - **`expression`**: a regular expression (object or string)<br /> - **`message`**: override the default error message |
| **email** | `email(message)`| Checks that the value of the field is an email<br /> - **`message`**: override the default error message |

### Simple validation Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/validator.js']}
branch="master"
/>

## Complex validations

Sometimes, a validation implies more than one field. For example, the confirm password validator checks that the content of two different fields are similar.  
**[useForm](./use-form)** provides some methods to control externally the validation status of a field.

```javascript
const { setError, setWarning, setOK, setPendingValidation } = useForm();
```

| Name                 | Signature                                                 | Description                                                                                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **setPendingValidation** | `setPendingValidation(fieldName, validatorId, matcher)` | Mark the field as pending a validation<br/> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                                |
| **setError**             | `setError(fieldName, validatorId, message, matcher)`    | Set the field in error<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the error<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)   |
| **setWarning**           | `setWarning(fieldName, validatorId, message, matcher)`  | Set the field in warning<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the warning<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation) |
| **setOK**                | `setOK(fieldName, validatorId, matcher)`           | Mark the field as valid <br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                                |

:::note Note
Generally, these methods are used in conjunction with the **[rule](./rules#rule)** method or the **[useRule](./rules#userule)** hook.
:::

### Complex validation Example

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/complex_validator.js']}
branch="master"
/>
