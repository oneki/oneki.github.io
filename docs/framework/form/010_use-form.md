---
id: use-form
title: useForm
sidebar_label: useForm
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

The **useForm hook** is the starting point for creating a new form. This hook provides

- a `<Form/>` component to encapsulate all controlled fields
- several helpers methods to control the form

The `<Form/>` component has two main roles

- it handles the submit action
- it provides a context to sub components

```jsx
import { Form } from "onekijs"; // or from onekijs-next

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
  field,
  Form,
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

| Parameter | | Type | Description |
| --------- | -- |---- | ----------- |
| **submit**\* || [FormSubmitCallback](../../api/types/FormSubmitCallback) | A function called when the user clicks on the submit button. The function receives the content of the form (= values) as parameter.<br/>**Example**: a function that performs a AJAX POST request |
| **options** || [FormOptions](../../api/interfaces/FormOptions) | An object that contains optional options
||**initialValues**| object | Initial value of the form.<br/>**Example**: if the form is used to edit a user, `initialValues` would be a JSON object that represents the user before editing.<br/><br/>**Defaults to:** `{}`
||**touchOn**       | [TouchOnType](../../api/types/TouchOnType) | Indicates which event marks the field as touched.<br />The validations of a field are performed as soon as it has been touched.<br /><br />Valid values are<br /> - **`blur`**: when the field is exited<br />- **`change`**: when the content of the field is changed<br /> - **`focus`**: when the field is entered<br /> - **`load`**: when the field is loaded<br /> - **`submit`**: when the form is submitted.<br/><br/>**Defaults to**: `blur`
|| **onError**  | [FormErrorCallback](../../api/types/FormErrorCallback) | A function called when the submit button is pressed and there are still fields in error <br/><br/> **Signature**: `onError(fields, values)`<br/> - **`fields`**: fields in error (key = fieldName, value = validation object)<br/> - **`values`**: the full value of the form<br/><br/>**Defaults to:** No error callback called |
|| **onWarning**     | [FormWarningCallback](../../api/types/FormWarningCallback) | A function called when the submit button is pressed and there are still fields in warning <br/><br/> **Signature**: `onWarning(fields, formValue)`<br/> - **`fields`**: fields in warning (key = fieldName, value = validation object)<br/> - **`formValue`**: the full value of the form<br/><br/>**Defaults to:** No warning callback called |

### Outputs

**useForm** returns an object of type [UseForm](../../api/interfaces/UseForm) that contains the following attributes:


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **field** | (name: String, validators?: [Validator](../../api/types/Validator)[], options?: [FieldOptions](../../api/interfaces/FieldOptions)): [FieldProps](../../api/interfaces/FieldProps) | Register a field as a controlled element. Check the **[Field](./field)** section for more details<br/>**Example:** `field('lastname', [required()])`                                                                                                      |
| **Form** | FC<[FormProps](../../api/types/FormProps)> | Component that wraps all the controlled fields. It handles the submit action.<br/>**Example**: `<Form><Input name="lastname" /></Form>`                                                                                               |
| **getValue**  | <T\>(fieldName: string): T \| undefined | A helper to get the value of a field. Returns undefined if the value is not initialized. Check the **[Field](./field)** section for more details<br/>**Example**: `getValue('address.street')`                                                                                                           |
| **getValidation** | (fieldName?: string, touchedOnly?: boolean): [ContainerValidation](../../api/classes/ContainerValidation) \| [FieldValidation](../../api/classes/FieldValidation)       | A helper to get the validation of a field. Returns `{ status: null, message: null }` if the validation is not initialized. Check the **[Field](./field)** section for more details<br/>**Example**: `getValidation('address.street').status`                                                                                               |
| **setError** | (fieldName: string, validatorName: string, message?: string, match?: boolean): boolean            | Mark a field in error. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details.<br/>**Example**: `setError('password', 'complexity', 'Password is too weak', password.length < 6)`                                                      |
| **setOK**  | (fieldName: string, validatorName: string): boolean | Mark a field as OK. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details<br/>**Example**: `setOK('password', 'complexity')`                                                                                                      |
| **setWarning**   | (fieldName: string, validatorName: string, message?: string, match?: boolean): boolean        | Mark a field in warning. Generally used with `rule`. Check the **[Validations](./validations)** section for more details.<br/>**Example**: `setWarning('password', 'complexity', 'Password is weak', password.length < 8)` |
| **setPendingValidation** | (fieldName: string, validatorName: string, pending?: any): boolean | Mark a field as pending validations. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details<br/>**Example**: `setPendingValidation('password', 'complexity')`                                                                                       |
| **setValue** | (fieldName: string, value: any): void | Set the value of a field. Generally used within a `rule`<br/>**Example**: `setValue('lastname', 'Doe')`                                                                                                      |

The following attributes are also part of [UseForm](../../api/interfaces/UseForm), but are considered as low-level APIs


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **clearValidation** | (fieldName: string, validatorName: string, code: [ValidationCode](../../api/enums/ValidationCode)): void | Remove a validation from a field. Check the **[Validations](./validations)** section for more details<br/>**Example**: clearValidation('lastname', 'required', ERROR)`                           |
| **setValidation** | (fieldName: string, validatorName: string, code: [ValidationCode](../../api/enums/ValidationCode), message?: string): void   | Add a validation to a field. Check the **[Validations](./validations)** section for more details<br/>**Example**: `setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')` |
| **submit**   | (e?: SyntheticEvent<Element, Event>): void       | The submit method used to execute all validations, gather the content of the form and call the user-submit method <br/> Low level API, generally hidden by the `Form` component<br/>**Example**: `submit()`                                                                 |
| **values**  |   any     | The full content of the form <br/> It's preferable to use `getValue` instead of `values` to avoid having to handle undefined values<br/>**Example**: `values.address.street`                                                    |
| **validations** | [AnonymousObject](../../api/interfaces/AnonymousObject)<[FieldValidation](../../api/classes/FieldValidation)\>    | All field validations of the form (even of non-touched fields) <br/> It's preferable to use `getValidation` instead of `validations` because it takes care of the `touch` status and return `{ message:null, status:null }` if the validation has not been yet initialized<br/>**Example**: `validations['address.street'].status`

## Example

### Minimal example

```jsx
export const MyForm = () => {
  // useForm expects a "submit" method called when the
  // user clicks on the submit button
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

### Example with validations

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/wrapper.tsx
```
