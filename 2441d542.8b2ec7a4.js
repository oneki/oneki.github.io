(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(208)),i=a(218),b={id:"field",title:"Field",sidebar_label:"Field"},l={id:"framework/form/field",title:"Field",description:"A field must be registered with a form to be controlled.",source:"@site/docs/framework/form/015_field.md",permalink:"/docs/framework/form/field",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/015_field.md",sidebar_label:"Field",sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/framework/form/use-form"},next:{title:"Core wrappers",permalink:"/docs/framework/form/wrapper"}},c=[{value:"field method",id:"field-method",children:[{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Example",id:"example",children:[]}]},{value:"useField",id:"usefield",children:[]},{value:"Helpers",id:"helpers",children:[]}],s={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A field must be registered with a form to be controlled.\nThere are different ways to register a field with a form"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"field"),"method provided by ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form"}),"useForm"))),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"useField")," hook. Check the ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./custom-component"}),"Write your own wrapper component"))," page for more details"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"init")," method provided by ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form-context"}),"useFormContext")),". Low level API.")),Object(o.b)("h2",{id:"field-method"},"field method"),Object(o.b)("p",null,"The simplest way to register a field with a form is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"field")," method provided by useForm"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { field } = useForm();\nconst { name, value, onChange, onBlur } = field(name, validators, options);\n")),Object(o.b)("h3",{id:"inputs"},"Inputs"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"name")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the field. Must match the path in the values object",Object(o.b)("br",null)," A sub property is accessed via a dot --\x3e ",Object(o.b)("inlineCode",{parentName:"td"},"address.street"),Object(o.b)("br",null),"A item of an array is accessed via its index --\x3e ",Object(o.b)("inlineCode",{parentName:"td"},"item.2")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lastname"),Object(o.b)("br",null),Object(o.b)("inlineCode",{parentName:"td"},"address.street"),Object(o.b)("br",null),Object(o.b)("inlineCode",{parentName:"td"},"children.1.firstname"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"validators")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of validators. Check the ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./validation"}),"Validations"))," section for more details"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"[required(), maxlength(5), regex('/^[a-zA-Z]*$', 'Can only contains alphabetical characters)]"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"options.defaultValue")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value of the field"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(o.b)("h3",{id:"outputs"},"Outputs"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"name")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the field (same as input, given for convenience, see example below)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"value")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of the field")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"onChange")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"listener called anytime the value is changed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"onBlur")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"listener called when the field is exited")))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(i.a,{name:"cra-form-basic",height:"1000",modules:["/src/pages/field.js"],branch:"features/form",mdxType:"Sandbox"}),Object(o.b)("h2",{id:"usefield"},"useField"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"field")," method is the simplest way to register a field with a form but it's also the less performant. Anytime any value of the form is changed, the field is rerendered",Object(o.b)("br",{parentName:"p"}),"\n","For better performance, it's better to wrap a form component and register it via the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"useField"))," hook since this hook only rerenders the wrapped component when its value is changed."),Object(o.b)("p",null,"The signature of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"useField"))," hook is the same as the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"#field-method"}),"field"))," method"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { useField } from \"onkeijs-cra\"; //  or import { useField } from 'onkeijs-next'\nconst { name, value, onChange, onBlur } = field(name, validators, options);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OnekiJS")," comes with some components wrapping core form react component (see the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./wrapper"}),"Core component wrappers"))," section).",Object(o.b)("br",{parentName:"p"}),"\n","To create a custom one, check the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./custom-wrapper"}),"Custom wrappers"))," section"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"useField"))," uses internally ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form-context"}),"useFormContext")),", meaning that it only works if the component is rendered as a child of a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"<Form>"))," component"))),Object(o.b)("h2",{id:"helpers"},"Helpers"),Object(o.b)("p",null,"the ",Object(o.b)("inlineCode",{parentName:"p"},"useForm")," hook provides some helper to access the value or the validation of a field"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const { getValue, getValidation } = useForm();\nconst lastname = getValue("address.street"); // will not throw an error if address is undefined\nconst validationStatus = getValue("address.street").status; // will not throw an error if the validation is undefined\nconst validationMessage = getValidation("address.street").message; // will not throw an error if the validation is undefined\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"getValue(fieldName)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieves the value of a field. ",Object(o.b)("br",null),"Returns ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"strong"},"undefined"))," if the field has not been yet initialized.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"getValidation(fieldName)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieves the validation object of a field. ",Object(o.b)("br",null),"The validation object contains the ",Object(o.b)("strong",{parentName:"td"},"status")," and the ",Object(o.b)("strong",{parentName:"td"},"message"),Object(o.b)("br",null),"Returns ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"strong"},"{ message: null, status: null }"))," if the field has not been yet validated")))))}d.isMDXComponent=!0},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,u=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return a?r.a.createElement(u,b(b({ref:t},c),{},{components:a})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},218:function(e,t,a){"use strict";a(72),a(219);var n=a(0),r=a.n(n);t.a=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,o=e.modules,i=e.branch,b="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+(void 0===i?"master":i)+"/examples/"+t+"?codemirror=1&fontsize=14&theme=dark&view=editor";o&&(b+="&module=",o.forEach((function(e,t){t>0&&(b+=","),b+=e})));var l="onekijs-"+t.split("/").join("-");return r.a.createElement("iframe",{src:b,style:{width:"100%",height:n+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:l,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},219:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);