---
id: use-form-context
title: useFormContext
sidebar_label: useFormContext
---

import Sandbox from '@site/src/components/Sandbox';

## Signature

```javascript
const {
  // High level API
  setError,
  setOK,
  setWarning,
  setPendingValidation,
  setValue,

  // low level API
  clearValidation, // use preferably setError, setWarning, setOK, setPendingValidation with a "false" matcher
  init, // used internally by useField
  offFieldChange, // used internally by useField
  offValidationChange, // used internally by useValidation
  offValueChange, // used internally by useValue
  onFieldChange, // used internally by useField
  onValidationChange, // used internally by useValidation
  onValueChange, // used internally by useValue
  setValidation, // use preferably setError, setWarning, setOK, setPendingValidation with a "true" matcher
  submit, // used internally by <Form> to handle the submit action
  values, // Use internally by useField and useValue to initialize the value
  validations, // Use internally by useField and useValidation to initialize the value
} = useFormContext();
```

### Inputs

None

### High level Outputs

| Name                     | Description                                                                                                                                | Example                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **setError**             | Mark a field in error. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details               | `setError('password', 'complexity', 'Password is too weak', password.length < 6)`     |
| **setOK**                | Mark a field as OK. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details                  | `setOK('password', 'complexity')`                                                     |
| **setWarning**           | Mark a field in warning. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details             | `setWarning('password', 'complexity', 'Password is quite weak', password.length < 8)` |
| **setPendingValidation** | Mark a field as pending validations. Generally used with `rule` <br /> Check the **[Validations](./validations)** section for more details | `setPendingValidation('password', 'complexity')`                                      |
| **setValue**             | Set the value of a field. Generally used with `rule` <br /> **Signature:** `setValue(fieldName, value)`                                     | `setValue('lastname', 'Franki')`                                                      |

### Low level Outputs

| Name                    | Description                                                                                                                                                                                                                                                                                 | Example                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **clearValidation**     | Remove a validation from a field. <br /> Check the **[Validations](./validations)** section for more details                                                                                                                                                                                  | `clearValidation('lastname', 'required', ERROR)`                                          |
| **init**                | Same signature as **[field(name, validators, options)](./field)**.<br />Register a field as a controlled element. <br /> Do not return the value of the field but only { onChange, onBlur, name }. Use `useValue` to get the value                                                          | `init('lastname', [required()])`                                                          |
| **offFieldChange**      | Remove a listener listening on a field change. <br /> Field listeners are considered as low level API and are generally hidden behind the `useField` hook                                                                                                                                   | `offFieldChange(listener, ['lastname', 'firstname])`                                      |
| **offValidationChange** | Remove a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook                                                                                                                    | `offValidationChange(listener, ['lastname', 'firstname])`                                 |
| **offValueChange**      | Remove a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue` hook                                                                                                                                   | `offValueChange(listener, ['lastname', 'firstname])`                                      |
| **onFieldChange**       | Add a listener listening on a field change. <br /> Field listeners are considered as low level API and are generally hidden behind the `useField` hook **Signature:**`onFieldChange((field1, field2, ...) => {}, [fieldName1, fieldName2, ...])`                                 | `onFieldChange((lastnameField => console.log(lastnameField), ['lastname'])`               |
| **onValidationChange**  | Add a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook **Signature:**`onValidationChange((validaton_field1, validation_field2, ...) => {}, [fieldName1, fieldName2, ...])`    | `onValidationChange(lastnameValidation => console.log(lastnameValidation), ['lastname'])` |
| **onValueChange**       | Add a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue`, `useBind` and `useRule` hooks<br /> **Signature:**`onValueChange((value_field1, value_field2, ...) => {}, [fieldName21, fieldName2, ...])` | `onValueChange(lastnameValue => console.log(lastnameValue), ['lastname'])`                |
| **setValidation**     | Add a validation to a field. <br /> Check the **[Validations](./validations)** section for more details                                                                                                                                                                                  | `setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')`                                          |
| **submit**              | The submit method used to execute all validations, gather the content of the form and call the user-submit method <br/> Low level API, generally hidden by the `Form` component                                                                                                             | `submit()`                                                                                |
| **values**              | The full content of the form <br/> Do not rerender the component when changed<br/> It's preferable to use `useValue` which rerender the component if changed                                                                                                                                | `values.address.street`                                                                   |
| **validations**         | All validations of the form <br/> Do not rerender the component when changed<br/> It's preferable to use `useValidation` which rerender the component if changed                                                                                                                            | `validations.address.street.status`                                                       |
