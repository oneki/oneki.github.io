---
id: custom-wrapper
title: Custom Wrappers
sidebar_label: Custom wrappers
---

import Sandbox from '@site/src/components/Sandbox';

OnekJS provides some hooks for creating a custom wrapper.

| Name              | Signature                                                                                                                                                                               | Description                                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **useValue**      | `const formValue = useValue()`<br />`const fieldValue = useValue(fieldName)`<br />`const [fielValue1, fieldValue2] = useValue([fieldName1, fieldName2])`                                | Get the form value, the value of a field or the values of multiple fields<br /> - **`fieldName`**: the name of a field or an array of field names. If not set, return the full content of the form         |
| **useValidation** | `const formValidation = useValidation()`<br />`const fieldValidation = useValidation(fieldName)`<br />`const [fieldValidation1, fieldValidation2] = useValidation([fieldName1, fieldName2])` | Get the validation of the form, the validation of a field or the validations of multiple fields<br /> - **`fieldName`**: the name of a field or an array of field names. If not set, return the status of the form | 
| **useField** | `const { name, value, onChange, onBlur } = useField(fieldName)`<br /> | Register a field with a form and track value change<br /> - **`fieldName`**: the name of a field | 

The **`useValue`** and **`useField`** hooks force a rerender of the field each time its value is changed  
The **`useValidation`** hook forces a rerender of the field each time its validation is changed

:::note Note
**`useValue`** , **`useValidation`** and **`useField`** use internally **[useFormContext](./use-form-context)**, meaning that it only works if the component is rendered as a child of a **`<Form>`** component
:::

A custom wrapper can just add some functionalities to a core wrapper

```jsx
/**
 * This example creates a custom wrapper based on a core wrapper.
 * It adds the validation status
 **/
import React from 'react';
import { useValidation, Input } from 'onekijs-cra'; // or from onekijs-next

const InputWithValidation = React.memo(props => {
  const validation = useValidation(props.name);
  return (
    <>
      <Input {...props} />
      {validation.status}: {validation.message}
    </>
  )
});
```

The same custom wrapper could be rewritten to work with core react components directly (but loses the functionalities provided by **`<Input>`**)

```jsx
/**
 * This example creates a custom wrapper wrapping a core react component.
 * It registers the field and add the validation status
 **/
import React from 'react';
import { useField, useValidation } from 'onekijs-cra'; // or from onekijs-next

const InputWithValidation = React.memo(props => {
  const field = useField(props.name);
  const validation = useValidation(props.name);
  return (
    <>
      <input {...props} />
      {validation.status}: {validation.message}
    </>
  )
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

const antdValidationStatus = status => {
  switch (status) {
    case 'loading': return 'validating',
    case 'ok': return 'success'
    default: return status
  }
}

const InputWithValidation = React.memo(props => {
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

<Sandbox
name="cra-form-basic"
height="1000"
modules={['/src/pages/custom_component.js']}
branch="master"
/>
