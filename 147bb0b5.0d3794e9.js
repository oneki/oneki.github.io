/*! For license information please see 147bb0b5.0d3794e9.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(9),o=(a(0),a(175)),i=(a(180),a(178)),c=a(179),s={id:"use-redux-service",title:"useReduxService",sidebar_label:"useReduxService"},l={id:"data/use-redux-service",title:"useReduxService",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/data/150-use-redux-service.md",permalink:"/docs/data/use-redux-service",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/data/150-use-redux-service.md",sidebar_label:"useReduxService",sidebar:"someSidebar",previous:{title:"useDelete",permalink:"/docs/data/use-delete"},next:{title:"useReduxSelector",permalink:"/docs/data/use-redux-selector"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],d={rightToc:u},p="wrapper";function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const service = useReduxService(serviceDefinition);\n")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useReduxService"))," is to create a singleton with two kinds of methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the redux state. These methods are generally very simple."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Saga")," methods"),": ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex. "),Object(o.b)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),Object(o.b)("li",{parentName:"ul"},"A saga method never updates the Redux state by itself. It always calls a ",Object(o.b)("em",{parentName:"li"},"Reducer")," method to do that.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A redux service is unique across the application (singleton) and can be reused in multiple components.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux-saga.js.org/"}),"Redux Saga")," to understand exactly how it works.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Check the ",Object(o.b)("strong",{parentName:"p"},"advanced")," section to have an in depth view of a service.")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"serviceDefinition: {\n\n  init: function(context) // method called just after the creation of the service.\n  name: string, // the name of the service. Must be unique\n  reducers: Reducer, // The Reducer methods\n  sagas: Sagas, // The Saga methods\n  inject: { // Inject other services into this service so it can use them.\n    myService1, // myService1 is a service imported via import myService1 from '...'\n    myService2,\n    ...\n  }\n\n}\n")),Object(o.b)("h5",{id:"reducer"},"Reducer"),Object(o.b)("p",null,"Reducer is an object where each entry represents a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Reducer")," method")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"Reducer: {\n  method1: function (state,    // the full redux state\n                     payload,  // the payload of the action that was dispatched\n                     context),\n  method2: function (state, \n                     payload,\n                     context),\n  ...\n}\n")),Object(o.b)("h5",{id:"saga"},"Saga"),Object(o.b)("p",null,"Saga is an object where each entry represents a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Saga")," method")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"Saga: {\n  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.\n              function* (payload, // the payload of the action that was dispatched\n                        context)), \n  method4: every (\n              function* (payload,\n                        context)), \n  ...\n}\n")),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// A singleton service that has all reducer and saga methods defined in the serviceDefinition\n// The signature of these methods is the same whether they are Reducer or Saga.\nservice: {\n\n  method1: function (payload),\n  method2: function (payload),\n  method3: function (payload),\n  method4: function (payload),\n  ...\n\n}\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)("p",null,"A redux service is not created inside a component as it's a singleton available across the whole app.\nThis example contains two files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"One file to define the service"),Object(o.b)("li",{parentName:"ul"},"A second file to show how a component can use this service")),Object(o.b)("h5",{id:"definition-of-the-service"},"Definition of the service"),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=editor",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(c.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=preview",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("h5",{id:"component-that-uses-the-service"},"Component that uses the service"),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=editor",style:{width:"100%",height:"800px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(c.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=preview",style:{width:"100%",height:"800px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}b.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return a?n.a.createElement(m,c({ref:t},l,{components:a})):n.a.createElement(m,c({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},176:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},177:function(e,t,a){"use strict";var r=a(0),n=a(48);t.a=function(){return Object(r.useContext)(n.a)}},178:function(e,t,a){"use strict";a(23),a(17),a(18);var r=a(0),n=a.n(r),o=a(176),i=a.n(o),c=a(118),s=a.n(c),l={left:37,right:39};t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,c=e.values,u=Object(r.useState)(o),d=u[0],p=u[1],b=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case l.right:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l.left:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(b,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},a)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter((function(e){return e.props.value===d}))[0]))}},179:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(183);var r=a(177);function n(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},181:function(e,t,a){var r=a(66),n=a(24);e.exports=function(e,t,a){if(r(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}},182:function(e,t,a){var r=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,!"/./"[e](t)}catch(n){}}return!0}},183:function(e,t,a){"use strict";var r=a(19),n=a(34),o=a(181),i="".startsWith;r(r.P+r.F*a(182)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,a):t.slice(a,a+r.length)===r}})}}]);