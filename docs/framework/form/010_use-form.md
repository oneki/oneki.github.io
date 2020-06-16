---
id: use-form
title: useForm
sidebar_label: useForm
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Sandbox from '@site/src/components/Sandbox';

The **useForm hook** is the starting point for creating a new form. This hook provides a **Form** component to encapsulate all controlled fields  

This component has two main roles

- it handles the submit action
- it provides a context to sub components

<Sandbox
name="cra-form-basic"
height="700"
modules={['/src/pages/basic.js']}
branch="features/form"
/>

## Signature

```javascript
const {
  asyncBind,
  bind,
  clearValidation,
  field,
  Form,
  offFieldChange,
  offValidationChange,
  offValueChange,
  onFieldChange,
  onValidationChange,
  onValueChange,
  rule,
  setError,
  setValidation,
  setValue,
  setOK,
  setWarning,
  setPendingValidation,
  submit,
  value,
  values,
  validation,
  validations,
} = useForm(submit, options);
```

### Inputs

| Name                      | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| **submit**                | A function receiving the content of the form after a successful submit |
| **options.initialValues** | Initial value of the form                                              |

### Outputs

| Name                     | Description                                                                                                                                                                     | Example                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **asyncBind**            | A function to bind asynchronously one or more values of the form to a new prop. <br /> Check the **[Bind](./bind)** section for more details                                    | `const repos = asyncBind(env => asyncGet('/repo/'+env), ['environment'])`                                                              |
| **bind**                 | A function to bind one or more values of the form to a new prop. <br /> Check the **[Bind](./bind)** section for more details                                                   | `const showState = bind(country => country === 'usa', ['country'])`                                                                    |
| **clearValidation**      | Remove a validation of a field. <br /> Check the **[Validations](./validations)** section for more details                                                                      | `clearValidation('lastname', 'required', ERROR)`                                                                                       |
| **field**                | Register a field as a controlled element. <br /> Check the **[Field](./field)** section for more details                                                                        | `field('lastname', [required()])`                                                                                                      |
| **Form**                 | Component handling the submit action. It must encapsulate all controlled fields                                                                                                 | `<Form><Input name="lastname" /></Form>`                                                                                               |
| **offFieldChange**       | Remove a listener listening on a field change. <br /> Field listeners are considered as low level API and are generally hidden behind the `useField` hook                       | `offFieldChange(listener, ['lastname', 'firstname])`                                                                                   |
| **offValidationChange**  | Remove a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook        | `offValidationChange(listener, ['lastname', 'firstname])`                                                                              |
| **offValueChange**       | Remove a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue` hook                       | `offValueChange(listener, ['lastname', 'firstname])`                                                                                   |
| **onFieldChange**        | Add a listener listening on a field change. <br /> Field listeners are considered as low level API and are generally hidden behind the `useField` hook                          | `onFieldChange(listener, ['lastname', 'firstname])`                                                                                    |
| **onValidationChange**   | Add a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook           | `onValidationChange(listener, ['lastname', 'firstname])`                                                                               |
| **onValueChange**        | Add a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue` hook                          | `onValueChange(listener, ['lastname', 'firstname])`                                                                                    |
| **rule**                 | Add a rule to change the state of the form following a value change. <br /> Check the **[Rules](./rules)** section for more details                                             | `rule((status, assignee) => { setError('assignee', 'required', 'Assignee is required', !assignee && status)}, ['status', 'assignee'])` |
| **setError**             | Mark a field in error. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                    | `setError('password', 'complexity', 'Password is too weak', password.length < 6)`                                                      |
| **setOK**                | Mark a field as OK. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                       | `setOK('password', 'complexity')`                                                                                                      |
| **setWarning**           | Mark a field in warning. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                                  | `setWarning('password', 'complexity', 'Password is quite weak', password.length < 8)`                                                  |
| **setPendingValidation** | Mark a field as pending validations. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                                      | `setPendingValidation('password', 'complexity')`                                                                                       |
| **submit**               | The submit method used to execute all validations, gather the content of the form and call the user-submit method <br/> Low level API, generally hidden by the `Form` component | `submit()`                                                                                                                             |
| **value**                | A helper to get the value of a field. Returns undefined if the value is not initialized <br/> Check the **[Field](./field)** section for more details                           | `value('address.street')`                                                                                                              |
| **values**               | The full content of the form <br/> It's preferable to use `value` instead of `values` to avoid having to handle undefined values                                                 | `values.address.street`                                                                                                                |
| **validation**                | A helper to get the validation of a field. Returns `{ status: null, message: null }` if the validation is not initialized <br/> Check the **[Field](./field)** section for more details                           | `validation('address.street').status`                                                                                                              |
| **validations**               | All field validations of the form <br/> It's preferable to use `validation` instead of `validations` to avoid having to handle undefined validations                                               | `validations.address.street.status`                                                                                                                |
