---
id: FormService
title: FormService
sidebar_label: FormService
---

```tsx
__type(fieldName: string,touchedOnly: boolean): default | default
```
<br/>



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **config** | [FormConfig](/framework-api/types/FormConfig.md) |  |
| **decorators** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormDecorator](/framework-api/types/FormDecorator.md)\> |  |
| **fields** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[Field](/framework-api/interfaces/Field.md)\> |  |
| **getValidation** |  |  |
| **initializing** | boolean |  |
| **listeners** |  |  |
| **metadataChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<\> |  |
| **pendingDispatch** |  |  |
| **state** | [FormState](/framework-api/interfaces/FormState.md) |  |
| **submittingChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<\> |  |
| **validationChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<\> |  |
| **valueChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<\> |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **add** | add(fieldArrayName: string,initialValue: ): void |  |
| **addField** | addField(field: Field): void |  |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **clearValidation** | clearValidation(fieldName: string,validatorName: string,code: ValidationCode,compile: boolean): void |  |
| **compileValidations** | compileValidations(fieldNames: string \| ,force: boolean): void |  |
| **delayLoading** | delayLoading(delay_ms: number): void |  |
| **disable** | disable(fieldName: string): void |  |
| **disableValidator** | disableValidator(fieldName: string,validatorName: string): void |  |
| **enable** | enable(fieldName: string): void |  |
| **enableValidator** | enableValidator(fieldName: string,validatorName: string): void |  |
| **field** | field(name: string,validators: AnonymousObject<Validator\>,options: FieldOptions): FieldProps | this method is an helper to quickly register a field from a component. It will return  
  - name  
  - value  
  - onChange  
  - onFocus  
  - onBlur |
| **getContainerFieldValidation** | getContainerFieldValidation(validations: AnonymousObject<default\>,fields: AnonymousObject<Field\>,prefix: string,touchedOnly: boolean): default |  |
| **getValue** | getValue(fieldName: string,defaultValue: any): any |  |
| **hasValidation** | hasValidation(fieldName: string,validatorName: string,code: ValidationCode,message: string): boolean |  |
| **hide** | hide(fieldName: string): void |  |
| **initDecorator** | initDecorator(name: string,options: FormMetadata): FormDecorator | Register a decorator. Unlike a field, a decorator has no value but can have metadata (like disabled / visible) |
| **initField** | initField(name: string,validators: AnonymousObject<Validator\>,options: FieldOptions): FieldProps | Register a field and return three listeners  
  - onChange  
  - onFocus  
  - onBlur |
| **loadInitialValues** | loadInitialValues(fetcher: string \| ): void |  |
| **offChange** | offChange(type: FormListenerType,id: string): void |  |
| **offMetadataChange** | offMetadataChange(id: string): void |  |
| **offSubmittingChange** | offSubmittingChange(id: string): void |  |
| **offValidationChange** | offValidationChange(id: string): void |  |
| **offValueChange** | offValueChange(id: string): void |  |
| **onChange** | onChange(type: FormListenerType,id: string,listener: FormValueListener<any\> \| FormValidationListener \| FormSubmitListener,watchs: string \| ,once: boolean): void |  |
| **onMetadataChange** | onMetadataChange(id: string,listener: FormMetadataListener,watchs: string \| ,once: boolean): void |  |
| **onMount** | onMount(): void |  |
| **onSubmittingChange** | onSubmittingChange(id: string,listener: FormSubmitListener,once: boolean): void |  |
| **onValidationChange** | onValidationChange(id: string,listener: FormValidationListener,watchs: string \| ,once: boolean): void |  |
| **onValueChange** | onValueChange(id: string,listener: FormValueListener<any\>,watchs: string \| ,once: boolean): void |  |
| **remove** | remove(fieldArrayName: string,index: number): void |  |
| **reset** | reset(): void |  |
| **serializeValidationCode** | serializeValidationCode(code: ValidationCode): ValidationStatus |  |
| **setError** | setError(fieldName: string,validatorName: string,message: string,match: boolean): boolean |  |
| **setInitialValues** | setInitialValues(values: AnonymousObject<any\>): void |  |
| **setLoading** | setLoading(loading: boolean,fetching: boolean): void |  |
| **setMetadata** | setMetadata<K\>(fieldName: string,key: K,value: ): void |  |
| **setMetadatas** | setMetadatas(metadatas: AnonymousObject<FormMetadata\>): void |  |
| **setOK** | setOK(fieldName: string,validatorName: string): boolean |  |
| **setOrClearValidation** | setOrClearValidation(code: ValidationCode,fieldName: string,validatorName: string,message: string,match: boolean): boolean |  |
| **setPendingValidation** | setPendingValidation(fieldName: string,validatorName: string,pending: boolean): boolean |  |
| **setSubmitting** | setSubmitting(submitting: boolean): void |  |
| **setValidation** | setValidation(fieldName: string,validatorName: string,code: ValidationCode,message: string,compile: boolean): void |  |
| **setValue** | setValue(fieldName: string,value: any): void |  |
| **setValues** | setValues(values: AnonymousObject<any\>): void |  |
| **setWarning** | setWarning(fieldName: string,validatorName: string,message: string,match: boolean): boolean |  |
| **show** | show(fieldName: string): void |  |
| **submit** | submit(): void |  |
| **touch** | touch(fieldName: string): void |  |
| **touchAll** | touchAll(): void |  |
| **validateAll** | validateAll(values: AnonymousObject<any\>): AnonymousObject<default\> |  |
| **validateAsync** | validateAsync(fieldName: string,validatorName: string,validator: ValidatorAsyncFunction,value: any): void |  |
| **validateSync** | validateSync(fieldName: string,validatorName: string,validator: ValidatorSyncFunction,value: any): void |  |