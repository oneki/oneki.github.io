"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[87950],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r().createContext({}),m=function(e){var t=r().useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r().createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},N=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(a),N=n,u=p["".concat(i,".").concat(N)]||p[N]||g[N]||o;return a?r().createElement(u,l(l({ref:t},s),{},{components:a})):r().createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=N;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r().createElement.apply(null,i)}return r().createElement.apply(null,a)}N.displayName="MDXCreateElement"},81074:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"FormContext",title:"FormContext",sidebar_label:"FormContext"},d=void 0,s={unversionedId:"framework-api/variables/FormContext",id:"framework-api/variables/FormContext",title:"FormContext",description:"Properties",source:"@site/docs/framework-api/variables/FormContext.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/FormContext",permalink:"/docs/framework-api/variables/FormContext",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/FormContext.md",tags:[],version:"current",frontMatter:{id:"FormContext",title:"FormContext",sidebar_label:"FormContext"},sidebar:"someSidebar",previous:{title:"DefaultAppContext",permalink:"/docs/framework-api/variables/DefaultAppContext"},next:{title:"ID",permalink:"/docs/framework-api/variables/ID"}},m={},p=[{value:"Properties",id:"properties",level:3}],g={toc:p};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"add")),(0,o.kt)("td",{parentName:"tr",align:null},"add<K",">","(fieldArrayName: K,initialValue: Partial<ArrayElement<PathType<T, K",">",">",">","): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"addField")),(0,o.kt)("td",{parentName:"tr",align:null},"addField(field: Field<T",">","): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"addValidator")),(0,o.kt)("td",{parentName:"tr",align:null},"addValidator(fieldName: NestedKeyOf<T",">",",validatorName: string,validator: Validator): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"callSaga")),(0,o.kt)("td",{parentName:"tr",align:null},"callSaga(sagaName: string,args: any[]): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"clearError")),(0,o.kt)("td",{parentName:"tr",align:null},"clearError(fieldName: NestedKeyOf<T",">",",validatorName: string,compile: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"clearValidation")),(0,o.kt)("td",{parentName:"tr",align:null},"clearValidation(fieldName: NestedKeyOf<T",">",",validatorName: undefined ","|"," string,code: ValidationCode,compile: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"clearWarning")),(0,o.kt)("td",{parentName:"tr",align:null},"clearWarning(fieldName: NestedKeyOf<T",">",",validatorName: string,compile: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"compileValidations")),(0,o.kt)("td",{parentName:"tr",align:null},"compileValidations(fieldNames: NestedKeyOf<T",">"," ","|"," NestedKeyOf<T",">","[],force: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"config")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormConfig"},"FormConfig")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"constructor")),(0,o.kt)("td",{parentName:"tr",align:null},"new FormService<T",">","()"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"decorator")),(0,o.kt)("td",{parentName:"tr",align:null},"decorator(name: string,options: FormMetadata): FormDecorator"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"decorators")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormDecorator"},"FormDecorator"),">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"delayLoading")),(0,o.kt)("td",{parentName:"tr",align:null},"delayLoading(delay_ms: number): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"disable")),(0,o.kt)("td",{parentName:"tr",align:null},"disable(fieldOrDecoratorName: string,match: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"disableValidator")),(0,o.kt)("td",{parentName:"tr",align:null},"disableValidator(fieldName: NestedKeyOf<T",">",",validatorName: string): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"enable")),(0,o.kt)("td",{parentName:"tr",align:null},"enable(fieldOrDecoratorName: string,match: boolean): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"enableValidator")),(0,o.kt)("td",{parentName:"tr",align:null},"enableValidator(fieldName: NestedKeyOf<T",">",",validatorName: string): void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"field")),(0,o.kt)("td",{parentName:"tr",align:null},"field(name: NestedKeyOf<T",">",",validators: AnonymousObject<Validator",">",",options: FieldOptions): FieldProps<any",">"),(0,o.kt)("td",{parentName:"tr",align:null},"this method is an helper to quickly register a field from a component. It will return")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name  "),(0,o.kt)("li",{parentName:"ul"},"value  "),(0,o.kt)("li",{parentName:"ul"},"onChange  "),(0,o.kt)("li",{parentName:"ul"},"onFocus  "),(0,o.kt)("li",{parentName:"ul"},"onBlur |\n| ",(0,o.kt)("strong",{parentName:"li"},"fields")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/types/AnonymousKeyObject"},"AnonymousKeyObject"),"<T, ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/Field"},"Field"),"<T",">",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"getContainerFieldValidation")," | getContainerFieldValidation(validations: AnonymousObject<default",">",",fields: AnonymousKeyObject<T, Field<any",">",">",",prefix: string,touchedOnly: boolean): default |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"getContext")," | getContext(key: string,defaultValue: any): any |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"getValidation")," |  |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"getValue")," | getValue(fieldName: ,defaultValue: T): T |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"hasValidation")," | hasValidation(fieldName: NestedKeyOf<T",">",",validatorName: string,code: ValidationCode,message: string): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"hide")," | hide(fieldOrDecoratorName: string,match: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"initDecorator")," | initDecorator(name: string,options: FormMetadata): FormDecorator | Register a decorator. Unlike a field, a decorator has no value but can have metadata (like disabled / visible) |\n| ",(0,o.kt)("strong",{parentName:"li"},"initField")," | initField(name: NestedKeyOf<T",">",",validators: AnonymousObject<Validator",">",",options: FieldOptions): FieldProps<any",">"," | Register a field and return three listeners  "),(0,o.kt)("li",{parentName:"ul"},"onChange  "),(0,o.kt)("li",{parentName:"ul"},"onFocus  "),(0,o.kt)("li",{parentName:"ul"},"onBlur |\n| ",(0,o.kt)("strong",{parentName:"li"},"initializing")," | boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"insert")," | insert(fieldArrayName: NestedKeyOf<T",">",",index: number,initialValue: ): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"isTouched")," | isTouched(fieldName: NestedKeyOf<T",">","): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"listeners")," |  |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"loadInitialValues")," | loadInitialValues(fetcher: string ","|"," ): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"metadataChange")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/FormListenerProps"},"FormListenerProps"),"[]",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"obfuscate")," | obfuscate(value: any,fieldName: string): any |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"offChange")," | offChange(type: FormListenerType,id: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"offMetadataChange")," | offMetadataChange(id: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"offSubmittingChange")," | offSubmittingChange(id: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"offValidationChange")," | offValidationChange(id: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"offValueChange")," | offValueChange(id: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onChange")," | onChange(type: FormListenerType,id: string,listener: FormValueListener ","|"," FormValidationListener ","|"," FormSubmitListener,watchs: string ","|"," string[],once: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onMetadataChange")," | onMetadataChange(id: string,listener: FormMetadataListener,watchs: string ","|"," string[],once: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onMount")," | onMount(): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onSubmittingChange")," | onSubmittingChange(id: string,listener: FormSubmitListener,once: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onValidationChange")," | onValidationChange(id: string,listener: FormValidationListener,watchs: string ","|"," string[],once: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"onValueChange")," | onValueChange(id: string,listener: FormValueListener,watchs: string ","|"," string[],once: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"pendingDispatch")," |  |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"prevMetadata")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/types/FormMetadata"},"FormMetadata"),">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"prevSubmitting")," | boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"prevValidations")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/classes/FieldValidation"},"default"),">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"prevValues")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"remove")," | remove(fieldArrayName: NestedKeyOf<T",">",",index: number): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"removeValidator")," | removeValidator(fieldName: NestedKeyOf<T",">",",validatorName: string): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"reset")," | reset(): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"serializeValidationCode")," | serializeValidationCode(code: ValidationCode): ValidationStatus |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setContext")," | setContext(key: undefined ","|"," string,value: any): any |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setError")," | setError(fieldName: NestedKeyOf<T",">",",validatorName: string,message: string,match: boolean): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setInitialValues")," | setInitialValues(values: Partial<T",">","): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setLoading")," | setLoading(loading: boolean,fetching: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setMetadata")," | setMetadata<K",">","(fieldOrDecoratorName: string,key: K,value: ,force: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setMetadatas")," | setMetadatas(metadatas: AnonymousObject<FormMetadata",">","): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setOK")," | setOK(fieldName: NestedKeyOf<T",">",",validatorName: string): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setOrClearValidation")," | setOrClearValidation(code: ValidationCode,fieldName: NestedKeyOf<T",">",",validatorName: string,message: string,match: boolean): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setPendingValidation")," | setPendingValidation(fieldName: NestedKeyOf<T",">",",validatorName: string,pending: boolean): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setSubmitting")," | setSubmitting(submitting: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setValidation")," | setValidation(fieldName: NestedKeyOf<T",">",",validatorName: string,code: ValidationCode,message: string,compile: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setValue")," | setValue<K",">","(fieldName: K,value: PathType<T, K",">","): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setValues")," | setValues(values: AnonymousPathObject<T",">","): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"setWarning")," | setWarning(fieldName: NestedKeyOf<T",">",",validatorName: string,message: string,match: boolean): boolean |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"show")," | show(fieldOrDecoratorName: string,match: boolean): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"state")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/FormState"},"FormState"),"<T",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"submit")," | submit(): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"submittingChange")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/FormListenerProps"},"FormListenerProps"),"[]",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"touch")," | touch(fieldName: NestedKeyOf<T",">","): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"touchAll")," | touchAll(): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"triggered")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<boolean",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"validateAll")," | validateAll(values: AnonymousPathObject<T",">","): AnonymousKeyObject<T, default",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"validateAsync")," | validateAsync(fieldName: NestedKeyOf<T",">",",validatorName: string,validator: ValidatorAsyncFunction,value: any): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"validateSync")," | validateSync(fieldName: NestedKeyOf<T",">",",validatorName: string,validator: ValidatorSyncFunction,value: any): void |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"validationChange")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/FormListenerProps"},"FormListenerProps"),"[]",">"," |  |\n| ",(0,o.kt)("strong",{parentName:"li"},"valueChange")," | ",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/framework-api/interfaces/FormListenerProps"},"FormListenerProps"),"[]",">"," |  |")))}N.isMDXComponent=!0}}]);