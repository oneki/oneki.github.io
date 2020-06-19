---
id: rules
title: Rules
sidebar_label: Rules
---

import Sandbox from '@site/src/components/Sandbox';

It's often useful to be able to externally change the value or the validation of one field of the form.  
**[useForm](./use-form)** provides several methods for that

```javascript
import { useForm } from "onekijs-cra"; // from 'onekijs-next'

const {
  setValue,
  setPendingValidation,
  setError,
  setWarning,
  setOK,
} = useForm();
```

| Name                     | Signature                                               | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **setValue**             | `setValue(fieldName, value)`                            | Set the value of a field<br/> - **`fieldName`**: name of the field<br /> - **`value`**: the new value of the field                                                                                                                                                                                                       |
| **setPendingValidation** | `setPendingValidation(fieldName, validatorId, matcher)` | Mark the field as pending a validation<br/> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                          |
| **setError**             | `setError(fieldName, validatorId, message, matcher)`    | Set the field in error<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the error<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)     |
| **setWarning**           | `setWarning(fieldName, validatorId, message, matcher)`  | Set the field in warning<br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`message`**: message describing the warning<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation) |
| **setOK**                | `setOK(fieldName, validatorId, matcher)`                | Mark the field as valid <br /> - **`fieldName`**: name of the field affected by the validation<br /> - **`validatorId`**: unique id of the validator doing the validation<br /> - **`matcher`**: boolean (true = add the validation, false = clear the validation)                                                       |

If often happens that a controller change of the form is the result of a field change (check the **[complex validation example](./validations#complex-validation-example)**)  
The framework offers two ways to achieve these kind of scenario

- The **[rule](#rule-method)** method provided by **[useForm](./use-form)**
- The **[useRule](#userule-hook)** hook (only usable in **[custom wrappers](./custom-wrapper)**)

## rule method

This method is provided by **[useForm](./use-form)** and you should only use it at the same level than **[useForm](./use-form)**.  
You should never pass it to a sub component because it does not force a rerendering when one of the observed value is modified.

:::note Note
Since it should only be used at the same level than **[useForm](./use-form)**, it assumes that the rerendering is triggered by **[useForm](./use-form)**
:::

```jsx
import { useForm } from "onekijs-cra"; // or from 'onekijs-next'

const { rule, setError } = useForm();

rule(
  (status, assignee) => {
    setError(
      "assignee",
      "status-assignee-validator",
      "Assignee is mandatory if status is not Waiting for approval",
      !assignee && status && status !== "waiting_approval"
    );
  },
  ["status", "assignee"]
);
```

### Signature of rule

```javascript
rule(executor, observed);
```

| Argument     | Description                                                                             | Example                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **executor** | A synchronous or asynchronous function receiving as arguments the observed field values | `(password, confirmPassword) => setError('confirmPassword', 'password-match-validator', "Passwords don't match", password !== confirmPassword)` |
| **observed** | A array of fieldnames observed by the binder                                            | `['password', 'confirmPassword']`                                                                                                               |

## useRule hook

To create a rule inside a wrapper component, you should use the **`useRule`** hook.  
This hook has the same signature than the **[rule](#rule-method)** method but forces a rerending of the component when one of the observed value is changed

```jsx
import { useRule } from "onekijs-cra"; // or from 'onekijs-next'

useRule(
  async (username) => {
    const user = await asyncGet("/users/username");
    setError(
      "username",
      "unique-validator",
      `Username ${username} is already taken`,
      user !== null
    );
  },
  ["username"]
);
```

### Signature of useRule

```javascript
userRule(executor, observed);
```

| Argument     | Description                                                                             | Example                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **executor** | A synchronous or asynchronous function receiving as arguments the observed field values | `(password, confirmPassword) => setError('confirmPassword', 'password-match-validator', "Passwords don't match", password !== confirmPassword)` |
| **observed** | A array of fieldnames observed by the binder                                            | `['password', 'confirmPassword']`                                                                                                               |

:::note Note
**`useRule`** uses internally **[useFormContext](./use-form-context)**, meaning that it only works if the component is rendered as a child of a **`<Form>`** component
:::

### Example

<Sandbox
name="cra-form-basic"
height="700"
modules={['/src/pages/rules.js']}
branch="master"
/>
