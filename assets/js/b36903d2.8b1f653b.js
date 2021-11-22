"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[35590],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r().createContext({}),m=function(e){var t=r().useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r().createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(o,".").concat(c)]||u[c]||p[c]||i;return n?r().createElement(k,s(s({ref:t},d),{},{components:n})):r().createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}c.displayName="MDXCreateElement"},32779:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,i=e.modules,o=e.branch,s=void 0===o?"master":o,l=e.type,d=void 0===l?"examples":l,m=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+s+"/"+d+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===m?"editor":m);i&&(u+="&module=",i.forEach((function(e,t){t>0&&(u+=","),u+=e})));var p="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:u,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},8513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(32779),s=["components"],l={id:"bind",title:"Binding",sidebar_label:"Binding"},d=void 0,m={unversionedId:"framework/form/bind",id:"framework/form/bind",isDocsHomePage:!1,title:"Binding",description:"It's often useful to create a new variable based on one or multiple field values and adapt automatically this new variable when those field values change.",source:"@site/docs/framework/form/040_bind.md",sourceDirName:"framework/form",slug:"/framework/form/bind",permalink:"/docs/framework/form/bind",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/040_bind.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"bind",title:"Binding",sidebar_label:"Binding"},sidebar:"someSidebar",previous:{title:"Initial values",permalink:"/docs/framework/form/initial-value"},next:{title:"Rules",permalink:"/docs/framework/form/rules"}},u=[{value:"bind method",id:"bind-method",children:[{value:"Signature of bind",id:"signature-of-bind",children:[],level:3}],level:2},{value:"asyncBind method",id:"asyncbind-method",children:[{value:"Signature of asyncBind",id:"signature-of-asyncbind",children:[{value:"Input",id:"input",children:[],level:4},{value:"Output",id:"output",children:[],level:4}],level:3}],level:2},{value:"useBind hook",id:"usebind-hook",children:[{value:"Signature of useBind",id:"signature-of-usebind",children:[],level:3}],level:2},{value:"useAsyncBind hook",id:"useasyncbind-hook",children:[{value:"Signature of useAsyncBind",id:"signature-of-useasyncbind",children:[{value:"Input",id:"input-1",children:[],level:4},{value:"Output",id:"output-1",children:[],level:4}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It's often useful to create a new variable based on one or multiple field values and adapt automatically this new variable when those field values change.\nThere are different ways to create a binding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#bind-method"},"bind"))," method provided by ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," for synchronous bindings"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#asyncbind-method"},"asyncBind"))," method provided by ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," for asynchronous bindings"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#usebind-hook"},"useBind"))," hook (only usable in ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"custom wrappers")),") for synchronous bindings"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#useasyncbind-hook"},"useAsyncBind"))," hook (only usable in ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"custom wrappers")),") for asynchronous bindings")),(0,i.kt)("h2",{id:"bind-method"},"bind method"),(0,i.kt)("p",null,"This method is provided by ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," for creating synchronous bindings and must be a sibling of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm")),".  "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It must only be used as a sibling of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," because it assumes that the rerendering is triggered by ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useForm } from 'onekijs-cra'; // or from 'onekijs-next'\n\nconst { bind } = useForm();\n\nconst fullname = bind((firstname, lastname) => {\n    return `${firstname} ${lastname}`\n}, ['firstname', 'lastname'])\n")),(0,i.kt)("h3",{id:"signature-of-bind"},"Signature of bind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = bind(binder, observed);\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"binder")),(0,i.kt)("td",{parentName:"tr",align:null},"A synchronous function receiving as arguments the observed field values and returning the binding value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(firstname, lastname) => `${firstname} ${lastname}`"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"observed")),(0,i.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['firstname', 'lastname']"))))),(0,i.kt)("h2",{id:"asyncbind-method"},"asyncBind method"),(0,i.kt)("p",null,"This method is provided by ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," for creating asynchronous bindings and must be a sibling of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form"},"useForm")),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"asyncBind"))," accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useForm, asyncGet } from 'onekijs-cra'; // or from 'onekijs-next'\n\nconst { asyncBind } = useForm();\n\nconst [repositories, loading, error] = asyncBind(environment => {\n    return asyncGet(`/repositories/${environment}`)\n}, ['environment'])\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's a two phase binding"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"An observed value is changed -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"useForm"))," forces a rerendering of the component"),(0,i.kt)("li",{parentName:"ul"},"The  ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"asyncBind"))," is executed. Since it's an async function, it first returns ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[oldValue|undefined, true, null]"))),(0,i.kt)("li",{parentName:"ul"},"The async function resolves, the asyncBind forces a rerendering of the component and returns ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[newValue, false, null]"))," if there is no error or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[oldValue, false, Error(msg)]"))," if there is an error")))),(0,i.kt)("h3",{id:"signature-of-asyncbind"},"Signature of asyncBind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const [result, loading, error] = asyncBind(binder, observed);\n")),(0,i.kt)("h4",{id:"input"},"Input"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"binder")),(0,i.kt)("td",{parentName:"tr",align:null},"A synchronous or asynchronous function receiving as arguments the observed field values and returning the binding value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username => `asyncGet(`/userinfo/${username}`)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"observed")),(0,i.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['username']"))))),(0,i.kt)("h4",{id:"output"},"Output"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"The binding value. Returns the previous value (or undefined if it's the first execution) until the binder is resolved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"loading")),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean indicating if the execution of the binder is pending or finished")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:null},"The error object if the binder resolves with an error")))),(0,i.kt)("h2",{id:"usebind-hook"},"useBind hook"),(0,i.kt)("p",null,"To create a synchronous bind inside a wrapper component, you should use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"useBind"))," hook.",(0,i.kt)("br",{parentName:"p"}),"\n","This hook has the same signature as the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#bind-method"},"bind"))," method but forces a rerending of the component when one of the observed value is changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useBind } from 'onekijs-cra'; // or from 'onekijs-next'\n\nconst fullname = useBind((firstname, lastname) => {\n    return `${firstname} ${lastname}`\n}, ['firstname', 'lastname'])\n")),(0,i.kt)("h3",{id:"signature-of-usebind"},"Signature of useBind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = useBind(binder, observed);\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"binder")),(0,i.kt)("td",{parentName:"tr",align:null},"Function receiving as arguments the observed field values and returning the binding value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(firstname, lastname) => `${firstname} ${lastname}`"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"observed")),(0,i.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['firstname', 'lastname']"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"useBind"))," uses internally ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),", meaning that it only works if the component is rendered as a child of a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"<Form>"))," component"))),(0,i.kt)("h2",{id:"useasyncbind-hook"},"useAsyncBind hook"),(0,i.kt)("p",null,"To create a asynchronous bind inside a wrapper component, you should use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"useAyncBind"))," hook.",(0,i.kt)("br",{parentName:"p"}),"\n","This hook has the same signature as the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#asyncbind-method"},"aysncBind"))," method but forces a rerending of the component when one of the observed value is changed",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"useAsyncBind"))," accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { asyncGet, useAsyncBind } from 'onekijs-cra'; // or from 'onekijs-next'\n\nconst [repositories, loading, error] = useAsyncBind(environment => {\n    return asyncGet(`/repositories/${environment}`)\n}, ['environment'])\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's a two phase binding"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"An observed value is changed ->  ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"useAsyncBind"))," is executed. It forces a rerendering of the component and returns ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[oldValue|undefined, true, null]"))),(0,i.kt)("li",{parentName:"ul"},"The async function resolves, the asyncBind forces a second rerendering of the component and returns ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[newValue, false, null]"))," if there is no error or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[oldValue, false, Error(msg)]"))," if there is an error")))),(0,i.kt)("h3",{id:"signature-of-useasyncbind"},"Signature of useAsyncBind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const [result, loading, error] = useAsyncBind(binder, observed);\n")),(0,i.kt)("h4",{id:"input-1"},"Input"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"binder")),(0,i.kt)("td",{parentName:"tr",align:null},"A synchronous or asynchronous function receiving as arguments the observed field values and returning the binding value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username => `asyncGet(`/userinfo/${username}`)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"observed")),(0,i.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['username']"))))),(0,i.kt)("h4",{id:"output-1"},"Output"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"The binding value. Returns the previous value (or undefined if it's the first execution) until the binder is resolved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"loading")),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean indicating if the execution of the binder is pending or finished")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:null},"The error object if the binder resolves with an error")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)(o.Z,{name:"cra-form-basic",height:"700",modules:["/src/pages/bind.js"],branch:"master",mdxType:"Sandbox"}))}c.isMDXComponent=!0}}]);