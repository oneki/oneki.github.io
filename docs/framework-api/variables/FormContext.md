---
id: FormContext
title: FormContext
sidebar_label: FormContext
---

import Details from "@theme/Details"




### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **add** | add<K\>(fieldArrayName: K,initialValue: Partial<ArrayElement<PathType<T, K\>\>\>): void |  |
| **addField** | addField(field: Field<T\>): void |  |
| **addValidator** | addValidator(fieldName: NestedKeyOf<T\>,validatorName: string,validator: Validator): void |  |
| **callSaga** | callSaga(sagaName: string,args: any[]): void |  |
| **clearError** | clearError(fieldName: NestedKeyOf<T\>,validatorName: string,compile: boolean): void |  |
| **clearValidation** | clearValidation(fieldName: NestedKeyOf<T\>,validatorName: undefined \| string,code: ValidationCode,compile: boolean): void |  |
| **clearWarning** | clearWarning(fieldName: NestedKeyOf<T\>,validatorName: string,compile: boolean): void |  |
| **compileValidations** | compileValidations(fieldNames: NestedKeyOf<T\> \| NestedKeyOf<T\>[],force: boolean): void |  |
| **config** | [FormConfig](/framework-api/types/FormConfig.md) |  |
| **constructor** | new FormService<T\>() |  |
| **decorator** | decorator(name: string,options: FormMetadata): FormDecorator |  |
| **decorators** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormDecorator](/framework-api/types/FormDecorator.md)\> |  |
| **delayLoading** | delayLoading(delay_ms: number): void |  |
| **disable** | disable(fieldOrDecoratorName: string,match: boolean): void |  |
| **disableValidator** | disableValidator(fieldName: NestedKeyOf<T\>,validatorName: string): void |  |
| **enable** | enable(fieldOrDecoratorName: string,match: boolean): void |  |
| **enableValidator** | enableValidator(fieldName: NestedKeyOf<T\>,validatorName: string): void |  |
| **field** | field(name: NestedKeyOf<T\>,validators: AnonymousObject<Validator\>,options: FieldOptions): FieldProps<any\> | this method is an helper to quickly register a field from a component. It will return  
  - name  
  - value  
  - onChange  
  - onFocus  
  - onBlur |
| **fields** | [AnonymousKeyObject](/framework-api/types/AnonymousKeyObject.md)<T, [Field](/framework-api/interfaces/Field.md)<T\>\> |  |
| **getContainerFieldValidation** | getContainerFieldValidation(validations: AnonymousObject<default\>,fields: AnonymousKeyObject<T, Field<any\>\>,prefix: string,touchedOnly: boolean): default |  |
| **getContext** | getContext(key: string,defaultValue: any): any |  |
| **getValidation** |  |  |
| **getValue** | getValue(fieldName: ,defaultValue: T): T |  |
| **hasValidation** | hasValidation(fieldName: NestedKeyOf<T\>,validatorName: string,code: ValidationCode,message: string): boolean |  |
| **hide** | hide(fieldOrDecoratorName: string,match: boolean): void |  |
| **initDecorator** | initDecorator(name: string,options: FormMetadata): FormDecorator | Register a decorator. Unlike a field, a decorator has no value but can have metadata (like disabled / visible) |
| **initField** | initField(name: NestedKeyOf<T\>,validators: AnonymousObject<Validator\>,options: FieldOptions): FieldProps<any\> | Register a field and return three listeners  
  - onChange  
  - onFocus  
  - onBlur |
| **initializing** | boolean |  |
| **insert** | insert(fieldArrayName: NestedKeyOf<T\>,index: number,initialValue: ): void |  |
| **isTouched** | isTouched(fieldName: NestedKeyOf<T\>): boolean |  |
| **listeners** |  |  |
| **loadInitialValues** | loadInitialValues(fetcher: string \| ): void |  |
| **metadataChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormListenerProps](/framework-api/interfaces/FormListenerProps.md)[]\> |  |
| **obfuscate** | obfuscate(value: any,fieldName: string): any |  |
| **offChange** | offChange(type: FormListenerType,id: string): void |  |
| **offMetadataChange** | offMetadataChange(id: string): void |  |
| **offSubmittingChange** | offSubmittingChange(id: string): void |  |
| **offValidationChange** | offValidationChange(id: string): void |  |
| **offValueChange** | offValueChange(id: string): void |  |
| **onChange** | onChange(type: FormListenerType,id: string,listener: FormValueListener \| FormValidationListener \| FormSubmitListener,watchs: string \| string[],once: boolean): void |  |
| **onMetadataChange** | onMetadataChange(id: string,listener: FormMetadataListener,watchs: string \| string[],once: boolean): void |  |
| **onMount** | onMount(): void |  |
| **onSubmittingChange** | onSubmittingChange(id: string,listener: FormSubmitListener,once: boolean): void |  |
| **onValidationChange** | onValidationChange(id: string,listener: FormValidationListener,watchs: string \| string[],once: boolean): void |  |
| **onValueChange** | onValueChange(id: string,listener: FormValueListener,watchs: string \| string[],once: boolean): void |  |
| **pendingDispatch** |  |  |
| **prevMetadata** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormMetadata](/framework-api/types/FormMetadata.md)\> |  |
| **prevSubmitting** | boolean |  |
| **prevValidations** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[default](/framework-api/classes/FieldValidation.md)\> |  |
| **prevValues** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<any\> |  |
| **remove** | remove(fieldArrayName: NestedKeyOf<T\>,index: number): void |  |
| **removeValidator** | removeValidator(fieldName: NestedKeyOf<T\>,validatorName: string): void |  |
| **reset** | reset(): void |  |
| **serializeValidationCode** | serializeValidationCode(code: ValidationCode): ValidationStatus |  |
| **setContext** | setContext(key: undefined \| string,value: any): any |  |
| **setError** | setError(fieldName: NestedKeyOf<T\>,validatorName: string,message: string,match: boolean): boolean |  |
| **setInitialValues** | setInitialValues(values: Partial<T\>): void |  |
| **setLoading** | setLoading(loading: boolean,fetching: boolean): void |  |
| **setMetadata** | setMetadata<K\>(fieldOrDecoratorName: string,key: K,value: ,force: boolean): void |  |
| **setMetadatas** | setMetadatas(metadatas: AnonymousObject<FormMetadata\>): void |  |
| **setOK** | setOK(fieldName: NestedKeyOf<T\>,validatorName: string): boolean |  |
| **setOrClearValidation** | setOrClearValidation(code: ValidationCode,fieldName: NestedKeyOf<T\>,validatorName: string,message: string,match: boolean): boolean |  |
| **setPendingValidation** | setPendingValidation(fieldName: NestedKeyOf<T\>,validatorName: string,pending: boolean): boolean |  |
| **setSubmitting** | setSubmitting(submitting: boolean): void |  |
| **setValidation** | setValidation(fieldName: NestedKeyOf<T\>,validatorName: string,code: ValidationCode,message: string,compile: boolean): void |  |
| **setValue** | setValue<K\>(fieldName: K,value: PathType<T, K\>): void |  |
| **setValues** | setValues(values: AnonymousPathObject<T\>): void |  |
| **setWarning** | setWarning(fieldName: NestedKeyOf<T\>,validatorName: string,message: string,match: boolean): boolean |  |
| **show** | show(fieldOrDecoratorName: string,match: boolean): void |  |
| **state** | [FormState](/framework-api/interfaces/FormState.md)<T\> |  |
| **submit** | submit(): void |  |
| **submittingChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormListenerProps](/framework-api/interfaces/FormListenerProps.md)[]\> |  |
| **touch** | touch(fieldName: NestedKeyOf<T\>): void |  |
| **touchAll** | touchAll(): void |  |
| **triggered** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<boolean\> |  |
| **validateAll** | validateAll(values: AnonymousPathObject<T\>): AnonymousKeyObject<T, default\> |  |
| **validateAsync** | validateAsync(fieldName: NestedKeyOf<T\>,validatorName: string,validator: ValidatorAsyncFunction,value: any): void |  |
| **validateSync** | validateSync(fieldName: NestedKeyOf<T\>,validatorName: string,validator: ValidatorSyncFunction,value: any): void |  |
| **validationChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormListenerProps](/framework-api/interfaces/FormListenerProps.md)[]\> |  |
| **valueChange** | [AnonymousObject](/framework-api/interfaces/AnonymousObject.md)<[FormListenerProps](/framework-api/interfaces/FormListenerProps.md)[]\> |  |


