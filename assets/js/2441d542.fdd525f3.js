"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[72720],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),m=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r().createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},k=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(n),k=a,c=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return n?r().createElement(c,l(l({ref:t},s),{},{components:n})):r().createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}k.displayName="MDXCreateElement"},32779:function(e,t,n){n.d(t,{Y:function(){return o}});var a=n(67294),r=n.n(a),o=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,d=e.type,s=void 0===d?"examples":d,m=e.view,p="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===m?"editor":m);o&&(p+="&module=",o.forEach((function(e,t){t>0&&(p+=","),p+=e})));var u="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:p,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:u,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},17463:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(32779),l=["components"],d={id:"field",title:"Field",sidebar_label:"Field"},s=void 0,m={unversionedId:"framework/form/field",id:"framework/form/field",isDocsHomePage:!1,title:"Field",description:"A field must be registered with a form to be controlled.",source:"@site/docs/framework/form/015_field.md",sourceDirName:"framework/form",slug:"/framework/form/field",permalink:"/docs/framework/form/field",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/015_field.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"field",title:"Field",sidebar_label:"Field"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/framework/form/use-form"},next:{title:"Core wrappers",permalink:"/docs/framework/form/wrapper"}},p=[{value:"field method",id:"field-method",children:[{value:"Inputs",id:"inputs",children:[],level:3},{value:"Outputs",id:"outputs",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"useField",id:"usefield",children:[],level:2},{value:"Helpers",id:"helpers",children:[],level:2}],u={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A field must be registered with a form to be controlled.\nThere are different ways to register a field with a form"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"field"),"method provided by ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"useField")," hook. Check the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Write your own wrapper component"))," page for more details"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"init")," method provided by ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),". Low level API.")),(0,o.kt)("h2",{id:"field-method"},"field method"),(0,o.kt)("p",null,"The simplest way to register a field with a form is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"field")," method provided by useForm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { field } = useForm();\nconst { name, value, onChange, onFocus, onBlur } = field(name, validators, options);\n")),(0,o.kt)("h3",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the field. Must match the path in the values object",(0,o.kt)("br",null)," A sub property is accessed via a dot --\x3e ",(0,o.kt)("inlineCode",{parentName:"td"},'"address.street"'),(0,o.kt)("br",null),"A item of an array is accessed via its index --\x3e ",(0,o.kt)("inlineCode",{parentName:"td"},'"item.2"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"lastname"'),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},'"address.street"'),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},'"children.1.firstname"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"validators")),(0,o.kt)("td",{parentName:"tr",align:null},"An array of validators. Check the ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[required(), maxlength(5)]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options.defaultValue")),(0,o.kt)("td",{parentName:"tr",align:null},"Default value of the field"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"defaultValue: 'open'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options.touchOn")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Overrides the setting defined at the ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("a",{parentName:"strong",href:"./use-form#inputs"},"form"))," level")," ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Indicates which event marks the field as touched.",(0,o.kt)("br",null),"The validations of a field are compiled as soon as it has been touched.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Valid values are",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"blur")),": when the field is exited",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"change")),": when the content of the field is changed",(0,o.kt)("br",null),"  - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"focus")),": when the field is entered",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"load")),": when the field is loaded",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"submit")),": when the form is submitted"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"touchOn: 'focus'"))))),(0,o.kt)("h3",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the field (same as input, given for convenience, see example below)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"Value of the field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"onChange")),(0,o.kt)("td",{parentName:"tr",align:null},"listener called anytime the value is changed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"onFocus")),(0,o.kt)("td",{parentName:"tr",align:null},"listener called when the field is entered")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"onBlur")),(0,o.kt)("td",{parentName:"tr",align:null},"listener called when the field is exited")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)(i.Z,{name:"cra-form-basic",height:"1000",modules:["/src/pages/field.js"],branch:"master",mdxType:"Sandbox"}),(0,o.kt)("h2",{id:"usefield"},"useField"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"field")," method is the simplest way to register a field with a form but it's also the less performant. Anytime any value of the form is changed, the field is rerendered",(0,o.kt)("br",{parentName:"p"}),"\n","For better performance, it's better to wrap a form component and register it via the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"useField"))," hook since this hook only rerenders the wrapped component when its value is changed."),(0,o.kt)("p",null,"The signature of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"useField"))," hook is the same as the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#field-method"},"field"))," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useField } from \"onkeijs-cra\"; //  or import { useField } from 'onkeijs-next'\nconst { name, value, onChange, onFocus, onBlur } = useField(name, validators, options);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," comes with some components wrapping core form react component (see the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./wrapper"},"Core component wrappers"))," section).",(0,o.kt)("br",{parentName:"p"}),"\n","To create a custom one, check the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Custom wrappers"))," section"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"useField"))," uses internally ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),", meaning that it only works if the component is rendered as a child of a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<Form>"))," component"))),(0,o.kt)("h2",{id:"helpers"},"Helpers"),(0,o.kt)("p",null,"the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook provides some helper to access the value or the validation of a field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { getValue, getValidation } = useForm();\n\nconst formValue = getValue();\nconst lastname = getValue("address.street"); // will not throw an error if address is undefined\nconst validationStatus = getValue("address.street").status; // will not throw an error if the validation is undefined\nconst validationMessage = getValidation("address.street").message; // will not throw an error if the validation is undefined\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Signature"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"getValue")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"const fieldValue = getValue(fieldName)")),(0,o.kt)("td",{parentName:"tr",align:null},"Get the form value or the value of a field",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"fieldName")),": (null ","|"," string) the name of a field. Returns the full content of the form if ",(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")," is undefined, null or empty")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"getValidation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"const fieldValidation = getValidation(fieldName, touchedOnly)")),(0,o.kt)("td",{parentName:"tr",align:null},"Get the validation of the form or the validation of a field",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"fieldName")),": (null ","|"," string) the name of a field. Returns all validations if ",(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")," is undefined, null or empty.",(0,o.kt)("br",null)," - ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"touchedOnly")),": (bool) only returns validations of touched fields -- defaults to true.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"getValue"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"getValidation"))," can be used to get a composite value or a composite validation.",(0,o.kt)("br",{parentName:"p"}),"\n","For example, if there are two fields ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"address.street"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"address.city"))),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"getValue('address')"))," will return ",(0,o.kt)("inlineCode",{parentName:"li"},"{ street: 'xxx', city: 'xxx' }")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"getValidation('address')"))," will compile the validation of the two fields and returns the lower statusCode and the list of field messages")))))}k.isMDXComponent=!0}}]);