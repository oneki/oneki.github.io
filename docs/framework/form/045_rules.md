---
id: rules
title: Rules
sidebar_label: Rules
---

import Sandbox from '@site/src/components/Sandbox';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SandboxExampleButton } from '@site/src/components/Sandbox';

When a form becomes complex, it often happens that we want to apply a business logic when the value of a field changes \
To achieve that, **Oneki.js** provides:
- several methods to interact with a field
  - to update its value. 
  - to set its status (error, warning, ok, pendingValidation)
- a hook to implement the business logic (= rule)

## Methods to interact with a field

**[useForm](./use-form)** (or useFormContext() if inside a custom form component) provides several methods to interact with a field:

```javascript
import { useForm } from "onekijs";

const {
  setValue,
  setPendingValidation,
  setError,
  setWarning,
  setOK,
} = useForm();
```

<br/>

| Parameter | Type | Description |
| --------- | ---- | ----------- |  
| **setValue** | (fieldName: string, value: any): void | Set the value of a field. Generally used within a `rule`<br/>**Example**: `setValue('lastname', 'Doe')`  
| **setPendingValidation** | (fieldName: string, validatorName: string, pending?: any): boolean | Mark a field as pending validations. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details<br/>**Example**: `setPendingValidation('password', 'complexity')`                                         |
| **setError** | (fieldName: string, validatorName: string, message?: string, match?: boolean): boolean            | Mark a field in error. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details.<br/>**Example**: `setError('password', 'complexity', 'Password is too weak', password.length < 6)`   
| **setWarning**   | (fieldName: string, validatorName: string, message?: string, match?: boolean): boolean        | Mark a field in warning. Generally used with `rule`. Check the **[Validations](./validations)** section for more details.<br/>**Example**: `setWarning('password', 'complexity', 'Password is weak', password.length < 8)` |                                                   |
| **setOK**  | (fieldName: string, validatorName: string): boolean | Mark a field as OK. Generally used within a `rule`. Check the **[Validations](./validations)** section for more details<br/>**Example**: `setOK('password', 'complexity')`                                                                                                      |

## Rule

If often happens that a change of a field triggers an update of another field (check the **[complex validation example](./validations#complex-validation-example)**)  
The framework provides the **[useRule](../../api/functions/useRule)**  to achieve this.

```ts
useRule(rule, observed);
```

### Input

| Parameter | Type | Description |
| --------- | ---- | ----------- | 
| **rule**\* | [Rule](../../api/types/Ruler) | A synchronous or asynchronous function that receive as arguments the observed field values. **Example**: `(password: string, confirmPassword: string) => setError('confirmPassword', 'password-match-validator', "Passwords don't match", password !== confirmPassword)` |
| **observed** | any[] | A array of fieldnames observed by the binder. You must use useValue to react of these fields<br/>**Example:**: `[useValue('password'), useValue('confirmPassword')]` 

### Output
No output

## Example

### Minimal rule example

```jsx
import { useRule, useValue } from "onekijs";

const { setError } = useForm();

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
  [useValue("username")]
);
```

### Full example

<SandboxExampleButton name="cra-form-basic" />

```tsx reference
https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/rules.tsx
```