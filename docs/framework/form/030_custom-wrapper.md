---
id: custom-wrapper
title: Custom Wrappers
sidebar_label: Custom wrappers
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

Sometimes, you will need to use a existing form component (example: Select2) inside an Oneki.js controlled form<br/>
For this purpose, **Oneki.js** provides several hooks to create a custom wrapper.

| Name              | Signature                                                                                                                                                                               | Description                                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[useValue](../../api/functions/useValue)**      | `const fieldValue = useValue(fieldName)`                               | Get the form value or the value of a field<br /> - **`fieldName`**: (null \| string) the name of a field. Returns the full content of the form if `fieldName` is undefined, null or empty      |
| **[useValidation](../../../../api/functions/useValidation)** | `const fieldValidation = useValidation(fieldName, touchedOnly)` | Get the validation of the form or the validation of a field<br /> - **`fieldName`**: (null \| string) the name of a field. Returns all validations if `fieldName` is undefined, null or empty.<br /> - **`touchedOnly`**: (bool) only returns validations of touched fields -- defaults to true.|
| **[useField](../../../../api/functions/useFiel)** | `const { name, value, onChange, onFocus, onBlur } = useField(fieldName)` | Register a field with a form and track value change<br /> - **`fieldName`**: the name of a field |
| **[useFormStatus](../../../../api/functions/useformStatus)** | `const { status, statusCode, fields, message } = useFormStatus()`| Get the status of the form and all fields with this status. Don't take care of the touch status and so give the actual status of the form |

:::info
The **`useValue`** and **`useField`** hooks force a rerender of the field each time its value is changed  
The **`useValidation`** hook forces a rerender of the field each time its validation is changed
:::

:::note Note
**`useValue`** , **`useValidation`** and **`useField`** use internally **[useFormContext](./use-form-context)**, meaning that it only works if the component is rendered as a child of a **`<Form>`** component
:::

:::tip
**`useValue`** and **`useValidation`** can be used to get a composite value or a composite validation.  
For example, if there are two fields **`address.street`** and **`address.city`**

- **`useValue('address')`** will return `{ street: 'xxx', city: 'xxx' }`
- **`useValidation('address')`** will compile the validation of the two fields and returns the lower statusCode and the list of field messages
:::

A custom wrapper can just add some functionalities to a core wrapper

```jsx
/**
 * This example creates a custom wrapper based on a core wrapper.
 * It adds the validation status
 **/
const FirstnameInputWithValidation: FC<InputProps> = React.memo(props => {
  // useValidation returns the validation object related to the field
  const validation = useValidation(props.name);
  return (
    <div>
      <b>Firstname: </b>
      <Input
        {...props}
        required
        regex="^[a-zA-Z0-9\-_]*$"
        regexMessage="Can only contains alphanumeric characters, dashes or underscores"
      />
      {validation.status} : {validation.message}
    </div>
  );
});
```

The same custom wrapper could be rewritten to work with core react components directly (but loses the functionalities provided by **`<Input>`**)

```jsx
/**
 * This example creates a custom wrapper based on a core wrapper.
 * It adds the validation status
 **/
const FirstnameInputWithValidation: FC<InputProps> = React.memo(props => {
  const field = useField(props.name);
  const validation = useValidation(props.name);
  return (
    <>
      <input {...props} />
      {validation.status}: {validation.message}
    </>
  );
});
```

A custom wrapper is also useful to register a third party component

```jsx
/**
 * This example creates a custom wrapper wrapping an Ant Design Input (https://ant.design/components/input/).
 * It registers the field and pass the validation status
 **/
import React from 'react';
import { useField, useValidation } from 'onekijs-cra'; // or from onekijs-next
import { Form, Input } from 'antd';

const InputWithValidation: FC<InputProps> = React.memo(props => {
  const field = useField(props.name);
  const validation = useValidation(props.name);
  return (
    <Form.Item
      hasFeedback
      validateStatus={antdValidationStatus(validation.status)}
      help={validation.message}
    >
      <Input {...props} {...field} />
    </Form.Item>
  )
});
```

## Example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/custom_component.tsx
```
