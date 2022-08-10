---
id: wrapper
title: Core wrappers
sidebar_label: Core wrappers
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

The **[field](./field#field)** method provided by **[useForm](./use-form)** is the simplest way to register a field with a form because it's not necessary to modify the component as soon as it accepts the common props **`name`**, **`value`**, **`onChange`**, **`onFocus`** and **`onBlur`**  
The downside of this method is that it's not very performant as it rerenders the field anytime any value is changed.

### Field wrappers

**Oneki.js** comes with a wrapper for each React core form component. These wrappers will register automatically the field and provide additional props to specify some validators in a more "React way". Internally, they leverage the **[useField](./field#usefield)** hook

| Core component | Wrapper      |
| -------------- | ------------ |
| `<input>`      | `<Input>`    |
| `<select>`     | `<Select>`   |
| `<textarea>`   | `<Textarea>` |

Each wrapper requires at least the **`name`** prop. The name prop must match the path of the value in the values object (e.g: `lastname` or `address.street`). Check the **[field](./field)** for more detail  
Each wrapper accepts the same props as the wrapped component but also accepts additional props for validators

| Parameter    | Type          | Description                                                                 |
| ------------ | ------------- | --------------------------------------------------------------------------- |
| **name**\* | string | The name of the field.<br />The name prop must match the path of the value in the values object<br />Check the **[field](./field)** for more detail<br/>**Example**: `name="status"` 
| **defaultValue**    | any       | Default value of the field if not defined in the values object or the initialValues provided to **[useForm](./use-form)**<br/>**Example**: `defaultValue="closed"`                                    |
| **required**        | boolean       | Indicates that the field is required<br/>**Example**: `required`                                                 |
| **requiredMessage** | string       | Override the default message provided to the user if the validator `required` is not valid.<br/>**Example**: `requiredMesage="This field is required"`                  |
| **regex**           | string       | Specify a regular expression evaluated against the value of the field<br/>**Example**: `regex="^[a-zA-Z]*$"`                                      |
| **regexMessage**    | string       | Override the default message provided to the user if the validator `regex` is not valid.<br/>**Example**: `regexMessage="Can only contains alphabetical characters"` |

### Submit wrapper

There is also a wrapper for the submit button. This wrapper listens on the form status and disables the submit button if the form status is not OK

| Core component          | Wrapper    |
| ----------------------- | ---------- |
| `<buton type="submit">` | `<Submit>` |

## Example

### Simple custom wrapper

```jsx
const Lastname: FC<{name: string}> = React.memo(props => {
  // useField register the field in the form object. It returns an object containing
  //   - name: the name of the field
  //   - value: the value of th field
  //   - onChange: the onChange method to call when the value is changed
  //   - onBlur: the onBlur method to call when the field is blurred
  const field = useField(props.name);

  return (
    <div>
      <b>Lastname: </b>
      <input {...props} {...field} />
    </div>
  );
})

// You can now use this component insde a form
// <Form><Lastname name="lastname" /></Form>
```

### Wrappers from Oneki.js

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/wrapper.tsx
```


### Custom wrappers

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/custom_component.tsx
```

