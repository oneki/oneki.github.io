---
id: introduction
title: Introduction
sidebar_label: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

**Oneki.js** framework comes with a form management system handling all boilerplate codes and providing some nice features for creating complex performant forms.

The main features are as follows:

- The form is fully data-driven and values can be updated from outside the form.
- Simulate bi-directional binding between values and form fields.
- Support for complex (asynchronous) validations involving more than one field.
- Support for complex (asynchronous) rules (e.g., update a specific field when you select a value from a drop-down list).

The following diagram shows a simplified architecture of the form system:

<img alt="Form architecture" src={useBaseUrl('img/form.svg')} />

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




## Learn more

The following pages describe in detail the form system:

| Page                                    | Description                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **[useForm](./use-form)**               | Starting point to create a new form                                                                                                   |
| **[field](./field)**                    | How to register a field within a form                                                                                                 |
| **[Core wrappers](./wrapper)**          | How to use Oneki.js components to wrap standard Form React components to gain performance and avoid having to write boilerplate code. |
| **[Validations](./validations)**        | How to attach validators to a field                                                                                                   |
| **[Custom wrappers](./custom-wrapper)** | How to create a custom wrapper around any third party form component                                                                  |
| **[Initial values](./initial-value)**   | How to create a form with initial values (create vs edit form)                                                                        |
| **[Binding](./bind)**                   | How to create a composite value based on the value of one or more field                                                               |
| **[Rules](./rules)**                    | How to create a rule for modifying the state of the form                                                                              |
| **[Context](./use-form-context)**       | How to get the form context from underlying components                                                                                |
