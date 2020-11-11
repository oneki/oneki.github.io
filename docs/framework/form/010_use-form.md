---
id: use-form
title: useForm
sidebar_label: useForm
---

import Sandbox from '@site/src/components/Sandbox';

The **useForm hook** is the starting point for creating a new form. This hook provides a **Form** component to encapsulate all controlled fields

This component has two main roles

- it handles the submit action
- it provides a context to sub components

```jsx
import { Form } from "onekijs-cra"; // or from onekijs-next

export const MyForm = () => {
  const { Form } = useForm((values) => console.log(values));

  return (
    <Form>
      <div>
        <b>Name: </b>
        <Input name="lastname" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};
```

## Signature

```javascript
const {
  // High level API
  asyncBind,
  bind,
  field,
  Form,
  rule,
  setError,
  setValue,
  setOK,
  setWarning,
  setPendingValidation,
  validation,
  value,

  // Low level API
  clearValidation,
  setValidation,
  submit,
  validations,
  values,
} = useForm(submit, options);
```

### Inputs

| Name                      | Description                                                                                                                                                                                                                                                                                                                                                            | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **submit**                | A function receiving the content of the form after a successful submit                                                                                                                                                                                                                                                                                                 |
| **options.initialValues** | Initial value of the form                                                                                                                                                                                                                                                                                                                                              | **`{}`**   |
| **options.touchOn**       | Indicates which event marks the field as touched.<br />The validations of a field are compiled as soon as it has been touched.<br /><br />Valid values are<br /> - **`blur`**: when the field is exited<br />- **`change`**: when the content of the field is changed<br /> - **`focus`**: when the field is entered<br />   - **`load`**: when the field is loaded<br /> - **`submit`**: when the form is submitted | **`blur`** |
| **options.onError**       | A function called when the submit button is pressed and there are still fields in warning <br/><br/> **Signature**: `onError(fields, formValue)`<br/> - **`fields`**: fields in error (key = fieldName, value = validation object)<br/> - **`formValue`**: the full value of the form                                                                                  | **`null`** |
| **options.onWarning**     | A function called when the submit button is pressed and there are still fields in warning <br/><br/> **Signature**: `onWarning(fields, formValue)`<br/> - **`fields`**: fields in warning (key = fieldName, value = validation object)<br/> - **`formValue`**: the full value of the form                                                                              | **`null`** |

### High Level Outputs

| Name                     | Description                                                                                                                                                                             | Example                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **asyncBind**            | A function to bind asynchronously one or more values of the form to a new prop. <br /> Check the **[Bind](./bind)** section for more details                                            | `const repos = asyncBind(env => asyncGet('/repo/'+env), ['environment'])`                                                              |
| **bind**                 | A function to bind one or more values of the form to a new prop. <br /> Check the **[Bind](./bind)** section for more details                                                           | `const showState = bind(country => country === 'usa', ['country'])`                                                                    |
| **field**                | Register a field as a controlled element. <br /> Check the **[Field](./field)** section for more details                                                                                | `field('lastname', [required()])`                                                                                                      |
| **Form**                 | Component handling the submit action. It must encapsulate all controlled fields                                                                                                         | `<Form><Input name="lastname" /></Form>`                                                                                               |
| **getValue**             | A helper to get the value of a field. Returns undefined if the value is not initialized <br/> Check the **[Field](./field)** section for more details                                   | `getValue('address.street')`                                                                                                           |
| **getValidation**        | A helper to get the validation of a field. Returns `{ status: null, message: null }` if the validation is not initialized <br/> Check the **[Field](./field)** section for more details | `getValidation('address.street').status`                                                                                               |
| **rule**                 | Add a rule to change the state of the form following a value change. <br /> Check the **[Rules](./rules)** section for more details                                                     | `rule((status, assignee) => { setError('assignee', 'required', 'Assignee is required', !assignee && status)}, ['status', 'assignee'])` |
| **setError**             | Mark a field in error. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                            | `setError('password', 'complexity', 'Password is too weak', password.length < 6)`                                                      |
| **setOK**                | Mark a field as OK. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                               | `setOK('password', 'complexity')`                                                                                                      |
| **setWarning**           | Mark a field in warning. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                          | `setWarning('password', 'complexity', 'Password is quite weak', password.length < 8)`                                                  |
| **setPendingValidation** | Mark a field as pending validations. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                              | `setPendingValidation('password', 'complexity')`                                                                                       |
| **setValue**             | Set the value of a field. Generally used with `rule` <br /> **Signature:** `setValue(fieldName, value)`                                                                                 | `setValue('lastname', 'Franki')`                                                                                                       |

### Low Level Outputs

| Name                | Description                                                                                                                                                                     | Example                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **clearValidation** | Remove a validation from a field. <br /> Check the **[Validations](./validations)** section for more details                                                                    | `clearValidation('lastname', 'required', ERROR)`                           |
| **setValidation**   | Add a validation to a field. <br /> Check the **[Validations](./validations)** section for more details                                                                         | `setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')` |
| **submit**          | The submit method used to execute all validations, gather the content of the form and call the user-submit method <br/> Low level API, generally hidden by the `Form` component | `submit()`                                                                 |
| **values**          | The full content of the form <br/> It's preferable to use `getValue` instead of `values` to avoid having to handle undefined values                                             | `values.address.street`                                                    |
| **validations**     | All field validations of the form (even of non-touched fields) <br/> It's preferable to use `getValidation` instead of `validations` because it takes care of the `touch` status and return `{ message:null, status:null }` if the validation has not been yet initialized                        | `validations['address.street'].status`                                     |

## Example

<Sandbox
name="cra-form-basic"
height="700"
modules={['/src/pages/basic.js']}
branch="master"
/>