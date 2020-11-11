---
id: use-form-context
title: useFormContext
sidebar_label: useFormContext
---
import Sandbox from '@site/src/components/Sandbox';

The **`useFormContext`** is used internally by **`useField`**, **`useValue`**, **`useValidation`**, **`useBind`** and **`useRule`**.  
This context is provided by the **`<Form>`** component and is only available to components rendered as children of **`<Form>`**  

**`useFormContext`** is generally used to get the methods for changing the state of the form (**`setValue`**, **`setError`**, **`setWarning`**, **`setOK`**, **`setPendingValidation`**)  
For specific cases, this hook provides some methods to register or unregister a listener executing an action on a value change or a validation change.

:::note Note
**`useFormContext`** never mutates and thus never forces a rerendering of a component
:::

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
  offValidationChange, // used internally by useValidation
  offValueChange, // used internally by useValue
  onValidationChange, // used internally by useValidation
  onValueChange, // used internally by useValue
  setValidation, // use preferably setError, setWarning, setOK, setPendingValidation with a "true" matcher
  submit, // used internally by <Form> to handle the submit action
  valuesRef, // Use internally by useField and useValue to initialize the value
  validationsRef, // Use internally and useValidation to initialize the validation
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
| **init**                | Same signature as **[field(name, validators, options)](./field)**.<br />Register a field as a controlled element. <br /> Do not return the value of the field but only { onChange, onFocus, onBlur, name }. Use `useValue` to get the value                                                          | `init('lastname', [required()])`                                                          |
| **offValidationChange** | Remove a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook                                                                                                                    | `offValidationChange(listener, ['lastname', 'firstname])`                                 |
| **offValueChange**      | Remove a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue` hook                                                                                                                                   | `offValueChange(listener, ['lastname', 'firstname])`                                      |
| **onValidationChange**  | Add a listener listening on a validation change. <br /> Validation listeners are considered as low level API and are generally hidden behind the `useValidation` hook **Signature:**`onValidationChange((validaton_field1, validation_field2, ...) => {}, [fieldName1, fieldName2, ...])`    | `onValidationChange(lastnameValidation => console.log(lastnameValidation), ['lastname'])` |
| **onValueChange**       | Add a listener listening on a value change. <br /> Value listeners are considered as low level API and are generally hidden behind the `useValue`, `useBind` and `useRule` hooks<br /> **Signature:**`onValueChange((value_field1, value_field2, ...) => {}, [fieldName21, fieldName2, ...])` | `onValueChange(lastnameValue => console.log(lastnameValue), ['lastname'])`                |
| **setValidation**     | Add a validation to a field. <br /> Check the **[Validations](./validations)** section for more details                                                                                                                                                                                  | `setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')`                                          |
| **submit**              | The submit method used to execute all validations, gather the content of the form and call the user-submit method <br/> Low level API, generally hidden by the `Form` component                                                                                                             | `submit()`                                                                                |
| **valuesRef**              | A **[ref object](https://reactjs.org/docs/hooks-reference.html#useref)** with the full content of the form <br/> Do not rerender the component when changed<br/> It's preferable to use `useValue` which rerender the component if changed                                                                                                                                | `valuesRef.current.address.street`                                                                   |
| **validationsRef**         | A **[ref object](https://reactjs.org/docs/hooks-reference.html#useref)** with all field validations (even of non-touched fields) <br/> Do not rerender the component when changed<br/> It's preferable to use `useValidation` which rerenders the component if changed and takes care of the `touch` status                                                                                                                           | `validationsRef.current['address.street'].status`                                                       |