(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),b=(a(0),a(208)),l=a(218),i={id:"use-form",title:"useForm",sidebar_label:"useForm"},o={id:"framework/form/use-form",title:"useForm",description:"The useForm hook is the starting point for creating a new form. This hook provides a Form component to encapsulate all controlled fields",source:"@site/docs/framework/form/010_use-form.md",permalink:"/docs/framework/form/use-form",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/010_use-form.md",sidebar_label:"useForm",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/form/introduction"},next:{title:"Field",permalink:"/docs/framework/form/field"}},c=[{value:"Signature",id:"signature",children:[{value:"Inputs",id:"inputs",children:[]},{value:"High Level Outputs",id:"high-level-outputs",children:[]},{value:"Low Level Outputs",id:"low-level-outputs",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("strong",{parentName:"p"},"useForm hook")," is the starting point for creating a new form. This hook provides a ",Object(b.b)("strong",{parentName:"p"},"Form")," component to encapsulate all controlled fields"),Object(b.b)("p",null,"This component has two main roles"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"it handles the submit action"),Object(b.b)("li",{parentName:"ul"},"it provides a context to sub components")),Object(b.b)(l.a,{name:"cra-form-basic",height:"700",modules:["/src/pages/basic.js"],branch:"features/form",mdxType:"Sandbox"}),Object(b.b)("h2",{id:"signature"},"Signature"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n  // High level API\n  asyncBind,\n  bind,\n  field,\n  Form,\n  rule,\n  setError,\n  setValue,\n  setOK,\n  setWarning,\n  setPendingValidation,\n  validation,\n  value,\n\n  // Low level API\n  clearValidation,\n  setValidation,\n  submit,\n  validations,\n  values,\n} = useForm(submit, options);\n")),Object(b.b)("h3",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"submit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function receiving the content of the form after a successful submit")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"options.initialValues")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initial value of the form")))),Object(b.b)("h3",{id:"high-level-outputs"},"High Level Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"asyncBind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function to bind asynchronously one or more values of the form to a new prop. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./bind"}),"Bind"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"const repos = asyncBind(env => asyncGet('/repo/'+env), ['environment'])"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"bind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function to bind one or more values of the form to a new prop. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./bind"}),"Bind"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"const showState = bind(country => country === 'usa', ['country'])"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"field")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Register a field as a controlled element. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./field"}),"Field"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"field('lastname', [required()])"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Form")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component handling the submit action. It must encapsulate all controlled fields"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'<Form><Input name="lastname" /></Form>'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"getValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A helper to get the value of a field. Returns undefined if the value is not initialized ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./field"}),"Field"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"getValue('address.street')"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"getValidation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A helper to get the validation of a field. Returns ",Object(b.b)("inlineCode",{parentName:"td"},"{ status: null, message: null }")," if the validation is not initialized ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./field"}),"Field"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"getValidation('address.street').status"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"rule")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add a rule to change the state of the form following a value change. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./rules"}),"Rules"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rule((status, assignee) => { setError('assignee', 'required', 'Assignee is required', !assignee && status)}, ['status', 'assignee'])"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setError")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark a field in error. Generally used with ",Object(b.b)("inlineCode",{parentName:"td"},"rule")," ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setError('password', 'complexity', 'Password is too weak', password.length < 6)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setOK")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark a field as OK. Generally used with ",Object(b.b)("inlineCode",{parentName:"td"},"rule")," ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setOK('password', 'complexity')"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setWarning")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark a field in warning. Generally used with ",Object(b.b)("inlineCode",{parentName:"td"},"rule")," ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setWarning('password', 'complexity', 'Password is quite weak', password.length < 8)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setPendingValidation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mark a field as pending validations. Generally used with ",Object(b.b)("inlineCode",{parentName:"td"},"rule")," ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setPendingValidation('password', 'complexity')"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the value of a field. Generally used with ",Object(b.b)("inlineCode",{parentName:"td"},"rule")," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"Signature:")," ",Object(b.b)("inlineCode",{parentName:"td"},"setValue(fieldName, value)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setValue('lastname', 'Franki')"))))),Object(b.b)("h3",{id:"low-level-outputs"},"Low Level Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"clearValidation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Remove a validation from a field. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"clearValidation('lastname', 'required', ERROR)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"setValidation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add a validation to a field. ",Object(b.b)("br",null)," Check the ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./validations"}),"Validations"))," section for more details"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"setValidation('lastname', 'required', ERROR, 'Lastname cannot be empty')"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"submit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The submit method used to execute all validations, gather the content of the form and call the user-submit method ",Object(b.b)("br",null)," Low level API, generally hidden by the ",Object(b.b)("inlineCode",{parentName:"td"},"Form")," component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"submit()"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"values")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The full content of the form ",Object(b.b)("br",null)," It's preferable to use ",Object(b.b)("inlineCode",{parentName:"td"},"getValue")," instead of ",Object(b.b)("inlineCode",{parentName:"td"},"values")," to avoid having to handle undefined values"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"values.address.street"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"validations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All field validations of the form ",Object(b.b)("br",null)," It's preferable to use ",Object(b.b)("inlineCode",{parentName:"td"},"getValidation")," instead of ",Object(b.b)("inlineCode",{parentName:"td"},"validations")," to avoid having to handle undefined validations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validations.address.street.status"))))))}s.isMDXComponent=!0},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,O=s["".concat(l,".").concat(p)]||s[p]||m[p]||b;return a?r.a.createElement(O,i(i({ref:t},c),{},{components:a})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<b;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},218:function(e,t,a){"use strict";a(72),a(219);var n=a(0),r=a.n(n);t.a=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,b=e.modules,l=e.branch,i="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+(void 0===l?"master":l)+"/examples/"+t+"?codemirror=1&fontsize=14&theme=dark&view=editor";b&&(i+="&module=",b.forEach((function(e,t){t>0&&(i+=","),i+=e})));var o="onekijs-"+t.split("/").join("-");return r.a.createElement("iframe",{src:i,style:{width:"100%",height:n+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:o,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},219:function(e,t,a){var n=a(25).f,r=Function.prototype,b=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(b)[1]}catch(e){return""}}})}}]);