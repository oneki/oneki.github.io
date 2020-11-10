(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{139:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,j=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return a?r.a.createElement(j,b(b({ref:t},c),{},{components:a})):r.a.createElement(j,b({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,i=e.modules,o=e.branch,b=void 0===o?"master":o,l=e.type,c=void 0===l?"example":l,d=e.view,s="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+b+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===d?"editor":d);i&&(s+="&module=",i.forEach((function(e,t){t>0&&(s+=","),s+=e})));var m="onekijs-"+t.split("/").join("-");return r.a.createElement("iframe",{src:s,style:{width:"100%",height:n+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:m,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(139)),o=a(148),b={id:"validations",title:"Validations",sidebar_label:"Validations"},l={unversionedId:"framework/form/validations",id:"framework/form/validations",isDocsHomePage:!1,title:"Validations",description:"There are different ways to validate the content of the form",source:"@site/docs/framework/form/025_validations.md",slug:"/framework/form/validations",permalink:"/docs/framework/form/validations",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/025_validations.md",version:"current",sidebar_label:"Validations",sidebar:"someSidebar",previous:{title:"Core wrappers",permalink:"/docs/framework/form/wrapper"},next:{title:"Custom Wrappers",permalink:"/docs/framework/form/custom-wrapper"}},c=[{value:"Simple validations",id:"simple-validations",children:[{value:"Validation object",id:"validation-object",children:[]},{value:"Async validator",id:"async-validator",children:[]},{value:"Built-in validators",id:"built-in-validators",children:[]},{value:"Simple validation Example",id:"simple-validation-example",children:[]}]},{value:"Complex validations",id:"complex-validations",children:[{value:"Complex validation Example",id:"complex-validation-example",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are different ways to validate the content of the form"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For simple validations, it's possible to add some validators to the field during its registration"),Object(i.b)("li",{parentName:"ul"},"For more complex validations (i.e inter field validations), it's possible to use the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"rule"))," method or the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"useRule"))," hook.")),Object(i.b)("h2",{id:"simple-validations"},"Simple validations"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./field#field"}),"field"))," method and the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./field#usefield"}),"useField"))," hook accept both a list of validators a their second argument."),Object(i.b)("p",null,"A validator is a function or a async function receiving a value and returning a boolean (for the validity) and an error message"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { valid, message } = (value) => {};\nconst { valid, message } = async (value) => {};\n")),Object(i.b)("p",null,"A validator often expects a configuration to be reusable in different contexts.",Object(i.b)("br",{parentName:"p"}),"\n","To do that, just wrap the validator in a closure."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const maxlengthValidator = maxlength => {\n  return value => {\n    return {\n      valid: value.length <= maxlength\n      message: `Cannot exceed ${maxlength} characters`\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"validation-object"},"Validation object"),Object(i.b)("p",null,"For each field, the form collects all validator results and compiles them in a validation object",Object(i.b)("br",{parentName:"p"}),"\n","This object can be accessed via the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"getValidation"))," method provided by useForm or the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"useValidation"))," hook inside a custom component"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { message, status, statusCode } = getValidation(fieldName);\nconst { message, status, statusCode } = useValidation(fieldName);\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"status")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"can be ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"null"))," (not yet validated), ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"loading"))," , ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"error")),", ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"warning"))," or ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"ok")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"statusCode")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"can be ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"null"))," (not yet validated), ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"0"))," (for loading), ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"1"))," (for error), ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"2"))," (for warning) or ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"3"))," (for ok)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"message")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"only defined if status is ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"warning"))," or ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"error")))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During the compilation, the validator results are ordered by their statusCode",Object(i.b)("br",{parentName:"p"}),"\n","The compilator checks first if a validator returns a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"loading"))," result then checks if a validator an ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"error"))," result and so on. Once it finds a match, the compilation stops and the validation object is returned",Object(i.b)("br",{parentName:"p"}),"\n","If nothing is found, it returns ",Object(i.b)("inlineCode",{parentName:"p"},"{ status: null, message: null }")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"By default, the compilation is done only when the field has been touched. To control when the field is touched, check options of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form#inputs"}),"useForm"))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./field#inputs"}),"field"))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"Oneki.js")," provides a constant for each statusCode  "),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { OK, WARNING, ERROR, LOADING } from 'onekijs-cra'; // or from 'onekijs-next'\n")))),Object(i.b)("h3",{id:"async-validator"},"Async validator"),Object(i.b)("p",null,"Once a async validator is attached to a field, there are two renders each time the value is changed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the first render get a loading validation object ",Object(i.b)("inlineCode",{parentName:"li"},"{ status: 'loading', statusCode: LOADING, message: null }")),Object(i.b)("li",{parentName:"ul"},"once the validator resolves, the second render get the final validation object ",Object(i.b)("inlineCode",{parentName:"li"},"{ status: 'error|warning|ok', statusCode: ERROR|WARNING|OK, message: 'error_msg|warning_msg|null' }"))),Object(i.b)("h3",{id:"built-in-validators"},"Built-in validators"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Signature"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"required(message)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks that the field is not empty",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"message")),": override the default error message")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"regex")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"regex(expression, message)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks that the value of the field matchs a regular expression",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"expression")),": a regular expression (object or string)",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"message")),": override the default error message")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"email")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"email(message)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks that the value of the field is an email",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"message")),": override the default error message")))),Object(i.b)("h3",{id:"simple-validation-example"},"Simple validation Example"),Object(i.b)(o.a,{name:"cra-form-basic",height:"1000",modules:["/src/pages/validator.js"],branch:"master",mdxType:"Sandbox"}),Object(i.b)("h2",{id:"complex-validations"},"Complex validations"),Object(i.b)("p",null,"Sometimes, a validation implies more than one field. For example, the confirm password validator checks that the content of two different fields are similar.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form"}),"useForm"))," provides some methods to control externally the validation status of a field."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { setError, setWarning, setOK, setPendingValidation } = useForm();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Signature"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"setPendingValidation")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"setPendingValidation(fieldName, validatorId, matcher)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark the field as pending a validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"fieldName")),": name of the field affected by the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"validatorId")),": unique id of the validator doing the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"matcher")),": boolean (true = add the validation, false = clear the validation)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"setError")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"setError(fieldName, validatorId, message, matcher)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the field in error",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"fieldName")),": name of the field affected by the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"validatorId")),": unique id of the validator doing the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"message")),": message describing the error",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"matcher")),": boolean (true = add the validation, false = clear the validation)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"setWarning")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"setWarning(fieldName, validatorId, message, matcher)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the field in warning",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"fieldName")),": name of the field affected by the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"validatorId")),": unique id of the validator doing the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"message")),": message describing the warning",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"matcher")),": boolean (true = add the validation, false = clear the validation)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"setOK")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"setOK(fieldName, validatorId, matcher)")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark the field as valid ",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"fieldName")),": name of the field affected by the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"validatorId")),": unique id of the validator doing the validation",Object(i.b)("br",null)," - ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("inlineCode",{parentName:"strong"},"matcher")),": boolean (true = add the validation, false = clear the validation)")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Generally, these methods are used in conjunction with the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./rules#rule"}),"rule"))," method or the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./rules#userule"}),"useRule"))," hook."))),Object(i.b)("h3",{id:"complex-validation-example"},"Complex validation Example"),Object(i.b)(o.a,{name:"cra-form-basic",height:"1000",modules:["/src/pages/complex_validator.js"],branch:"master",mdxType:"Sandbox"}))}s.isMDXComponent=!0}}]);