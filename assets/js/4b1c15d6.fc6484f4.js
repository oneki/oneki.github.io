"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[94731],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),m=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r().createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},k=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(n),k=a,g=u["".concat(i,".").concat(k)]||u[k]||p[k]||l;return n?r().createElement(g,o(o({ref:t},s),{},{components:n})):r().createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}k.displayName="MDXCreateElement"},32779:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,l=e.modules,i=e.branch,o=void 0===i?"master":i,d=e.type,s=void 0===d?"examples":d,m=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+o+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===m?"editor":m);l&&(u+="&module=",l.forEach((function(e,t){t>0&&(u+=","),u+=e})));var p="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:u,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},41644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=(n(32779),["components"]),o={id:"use-form-context",title:"useFormContext",sidebar_label:"useFormContext"},d=void 0,s={unversionedId:"framework/form/use-form-context",id:"framework/form/use-form-context",isDocsHomePage:!1,title:"useFormContext",description:"The useFormContext is used internally by useField, useValue, useValidation, useBind and useRule.",source:"@site/docs/framework/form/999_form-context.md",sourceDirName:"framework/form",slug:"/framework/form/use-form-context",permalink:"/docs/framework/form/use-form-context",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/999_form-context.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{id:"use-form-context",title:"useFormContext",sidebar_label:"useFormContext"},sidebar:"someSidebar",previous:{title:"Rules",permalink:"/docs/framework/form/rules"},next:{title:"useSetting",permalink:"/docs/api/functions/useSetting"}},m=[{value:"Signature",id:"signature",children:[{value:"Inputs",id:"inputs",children:[],level:3},{value:"High level Outputs",id:"high-level-outputs",children:[],level:3},{value:"Low level Outputs",id:"low-level-outputs",children:[],level:3}],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useFormContext"))," is used internally by ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useField")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useValue")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useValidation")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useBind"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useRule")),".",(0,l.kt)("br",{parentName:"p"}),"\n","This context is provided by the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<Form>"))," component and is only available to components rendered as children of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<Form>")),"  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useFormContext"))," is generally used to get the methods for changing the state of the form (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"setValue")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"setError")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"setWarning")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"setOK")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"setPendingValidation")),")",(0,l.kt)("br",{parentName:"p"}),"\n","For specific cases, this hook provides some methods to register or unregister a listener executing an action on a value change or a validation change."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useFormContext"))," never mutates and thus never forces a rerendering of a component"))),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const {\n  // High level API\n  setError,\n  setOK,\n  setWarning,\n  setPendingValidation,\n  setValue,\n\n  // low level API\n  clearValidation, // use preferably setError, setWarning, setOK, setPendingValidation with a "false" matcher\n  init, // used internally by useField\n  offValidationChange, // used internally by useValidation\n  offValueChange, // used internally by useValue\n  onValidationChange, // used internally by useValidation\n  onValueChange, // used internally by useValue\n  setValidation, // use preferably setError, setWarning, setOK, setPendingValidation with a "true" matcher\n  submit, // used internally by <Form> to handle the submit action\n  valuesRef, // Use internally by useField and useValue to initialize the value\n  validationsRef, // Use internally and useValidation to initialize the validation\n} = useFormContext();\n')),(0,l.kt)("h3",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"high-level-outputs"},"High level Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setError")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark a field in error. Generally used with ",(0,l.kt)("inlineCode",{parentName:"td"},"rule")," ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setError('password', 'complexity', 'Password is too weak', password.length < 6)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setOK")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark a field as OK. Generally used with ",(0,l.kt)("inlineCode",{parentName:"td"},"rule")," ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setOK('password', 'complexity')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setWarning")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark a field in warning. Generally used with ",(0,l.kt)("inlineCode",{parentName:"td"},"rule")," ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setWarning('password', 'complexity', 'Password is quite weak', password.length < 8)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setPendingValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"Mark a field as pending validations. Generally used with ",(0,l.kt)("inlineCode",{parentName:"td"},"rule")," ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setPendingValidation('password', 'complexity')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setValue")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the value of a field. Generally used with ",(0,l.kt)("inlineCode",{parentName:"td"},"rule")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Signature:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"setValue(fieldName, value)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setValue('lastname', 'Franki')"))))),(0,l.kt)("h3",{id:"low-level-outputs"},"Low level Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a validation from a field. ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clearValidation('lastname', 'required', ERROR)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Same signature as ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./field"},"field(name, validators, options)")),".",(0,l.kt)("br",null),"Register a field as a controlled element. ",(0,l.kt)("br",null)," Do not return the value of the field but only { onChange, onFocus, onBlur, name }. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"useValue")," to get the value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"init('lastname', [required()])"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"offValidationChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a listener listening on a validation change. ",(0,l.kt)("br",null)," Validation listeners are considered as low level API and are generally hidden behind the ",(0,l.kt)("inlineCode",{parentName:"td"},"useValidation")," hook"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"offValidationChange(listener, ['lastname', 'firstname])"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"offValueChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a listener listening on a value change. ",(0,l.kt)("br",null)," Value listeners are considered as low level API and are generally hidden behind the ",(0,l.kt)("inlineCode",{parentName:"td"},"useValue")," hook"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"offValueChange(listener, ['lastname', 'firstname])"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onValidationChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a listener listening on a validation change. ",(0,l.kt)("br",null)," Validation listeners are considered as low level API and are generally hidden behind the ",(0,l.kt)("inlineCode",{parentName:"td"},"useValidation")," hook ",(0,l.kt)("strong",{parentName:"td"},"Signature:"),(0,l.kt)("inlineCode",{parentName:"td"},"onValidationChange((validaton_field1, validation_field2, ...) => {}, [fieldName1, fieldName2, ...])")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onValidationChange(lastnameValidation => console.log(lastnameValidation), ['lastname'])"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onValueChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a listener listening on a value change. ",(0,l.kt)("br",null)," Value listeners are considered as low level API and are generally hidden behind the ",(0,l.kt)("inlineCode",{parentName:"td"},"useValue"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"useBind")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"useRule")," hooks",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Signature:"),(0,l.kt)("inlineCode",{parentName:"td"},"onValueChange((value_field1, value_field2, ...) => {}, [fieldName21, fieldName2, ...])")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onValueChange(lastnameValue => console.log(lastnameValue), ['lastname'])"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a validation to a field. ",(0,l.kt)("br",null)," Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"submit")),(0,l.kt)("td",{parentName:"tr",align:null},"The submit method used to execute all validations, gather the content of the form and call the user-submit method ",(0,l.kt)("br",null)," Low level API, generally hidden by the ",(0,l.kt)("inlineCode",{parentName:"td"},"Form")," component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"submit()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"valuesRef")),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"ref object"))," with the full content of the form ",(0,l.kt)("br",null)," Do not rerender the component when changed",(0,l.kt)("br",null)," It's preferable to use ",(0,l.kt)("inlineCode",{parentName:"td"},"useValue")," which rerender the component if changed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"valuesRef.current.address.street"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"validationsRef")),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"ref object"))," with all field validations (even of non-touched fields) ",(0,l.kt)("br",null)," Do not rerender the component when changed",(0,l.kt)("br",null)," It's preferable to use ",(0,l.kt)("inlineCode",{parentName:"td"},"useValidation")," which rerenders the component if changed and takes care of the ",(0,l.kt)("inlineCode",{parentName:"td"},"touch")," status"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"validationsRef.current['address.street'].status"))))))}p.isMDXComponent=!0}}]);