/*! For license information please see 2c19e6ce.9d0f676a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(209)),c=(a(215),a(213)),i=a(212),s={id:"local-service",title:"Local service",sidebar_label:"Local service"},l={id:"features/state-management/local-service",title:"Local service",description:"If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.",source:"@site/docs/features/state-management/50-local-service.md",permalink:"/docs/features/state-management/local-service",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/features/state-management/50-local-service.md",sidebar_label:"Local service",sidebar:"someSidebar",previous:{title:"Global service",permalink:"/docs/features/state-management/global-service"},next:{title:"OpenID Connect (server side)",permalink:"/docs/features/auth/oidc-server"}},u=[{value:"Local service",id:"local-service",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.",Object(o.b)("br",null),"\nFor simple use case, it's often enough to use the standard ",Object(o.b)("strong",{parentName:"p"},"useState")," from React and we recommend that."),Object(o.b)("p",null,"For more complexe use cases, ",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," introduce the concept of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./local-state"}),"Local services")),". ",Object(o.b)("br",null),"\nGenerally, you will create a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./local-state"}),"Local services"))," when you need either"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a scenario"),Object(o.b)("li",{parentName:"ul"},"or an immutable state")),Object(o.b)("p",null,"An example of scenario is the retrieval of data via an AJAX GET request. The scenario consists of the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Perform the AJAX GET requests and store the result in the local state"),Object(o.b)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',Object(o.b)("strong",{parentName:"li"},"false"))),Object(o.b)("p",null,"You can instanciate a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./local-state"}),"Local services"))," multiple times in several components to reuse the same logic.",Object(o.b)("br",null),"\nE.g: the scenario above is exactly what the hook ",Object(o.b)("strong",{parentName:"p"},"useGet")," is doing and you can reuse it in several components"),Object(o.b)("h2",{id:"local-service"},"Local service"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [state, service] = useLocalService(serviceDefinition, initialState);\n")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two kinds of methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the local state of the component. These methods are generally very simple."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Saga")," methods"),": ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex. "),Object(o.b)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),Object(o.b)("li",{parentName:"ul"},"A saga method never updates the local state by itself. It always calls a ",Object(o.b)("em",{parentName:"li"},"Reducer")," method to do that.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux-saga.js.org/"}),"Redux Saga")," to understand exactly how it works.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Check the ",Object(o.b)("strong",{parentName:"p"},"advanced")," section to have an in depth view of a service.")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"serviceDefinition: {\n\n  init: function(context), // method called just after the creation of the service.\n  reducers: Reducer, // The Reducer methods\n  sagas: Sagas, // The Saga methods\n  inject: { // Inject other services into this service so it can use them.\n    myService1, // myService1 is a service imported via import myService1 from '...'\n    myService2,\n    ...\n  }\n\n}\n\ninitialState: object // the initial state returned after the creation of the service\n")),Object(o.b)("h5",{id:"reducer"},"Reducer"),Object(o.b)("p",null,"Reducer is an object where each entry represents a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Reducer")," method")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Reducer: {\n  method1: function (state,    // the local state\n                     payload,  // the payload of the action that was dispatched\n                     context), // context contains {store, router, settings, i18n}\n  method2: function (state, \n                     payload,\n                     context),\n  ...\n}\n")),Object(o.b)("h5",{id:"saga"},"Saga"),Object(o.b)("p",null,"Saga is an object where each entry represents a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Saga")," method")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Saga: {\n  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.\n              function* (payload, // the payload of the action that was dispatched\n                        context)), // context contains {store, router, settings, i18n}\n  method4: every (\n              function* (payload,\n                        context)), \n  ...\n}\n")),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// A singleton service that has all reducer and saga methods defined in the serviceDefinition\n// The signature of these methods is the same whether they are Reducer or Saga.\nservice: {\n\n  method1: function (payload),\n  method2: function (payload),\n  method3: function (payload),\n  method4: function (payload),\n  ...\n\n}\n\nstate: object // the local state handled by the service\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)("p",null,"This example shows how to send a ajax POST request to a back end server to create a user. Actually, ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"use-post"}),"usePost")))," is based on this approach.",Object(o.b)("br",null),'\nA Saga method is defined to handle correctly the "loading ..." indicator and the asynchronous AJAX request'),Object(o.b)(c.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=editor",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=preview",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}p.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},213:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),r=a.n(n),o=a(211);var c=function(){return Object(n.useContext)(o.a)},i=a(210),s=a.n(i),l=a(127),u=a.n(l),b=37,p=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,i=e.values,l=e.groupId,d=c(),m=d.tabGroupChoices,h=d.setTabGroupChoices,f=Object(n.useState)(o),v=f[0],j=f[1];if(null!=l){var O=m[l];null!=O&&O!==v&&j(O)}var g=function(e){j(e),null!=l&&h(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:s()("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},214:function(e,t,a){"use strict";var n=a(0),r=a(50);t.a=function(){return Object(n.useContext)(r.a)}},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(216);var n=a(214);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},216:function(e,t,a){"use strict";var n=a(19),r=a(35),o=a(217),c="".startsWith;n(n.P+n.F*a(218)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},217:function(e,t,a){var n=a(71),r=a(24);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},218:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);