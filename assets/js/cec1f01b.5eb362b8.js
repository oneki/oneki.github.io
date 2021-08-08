"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[25],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r().createContext({}),u=function(e){var t=r().useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r().createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r().createElement(h,s(s({ref:t},c),{},{components:a})):r().createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r().createElement.apply(null,i)}return r().createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return o},Z:function(){return i}});var n=a(2263),r=a(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8215:function(e,t,a){var n=a(7294),r=a.n(n);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a.n(n),o=a(9443);var i=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,d=39;var p=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=i(),v=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,n.useState)(o),b=g[0],y=g[1],w=n.Children.toArray(e.children),N=[];if(null!=m){var x=v[m];null!=x&&x!==b&&p.some((function(e){return e.value===x}))&&y(x)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;y(n),null!=m&&(k(m,n),setTimeout((function(){var e,a,n,r,o,i,s,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,a>=0&&o<=l&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case u:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return r().createElement("div",{className:"tabs-container"},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},p.map((function(e){var t=e.value,a=e.label;return r().createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:j,onClick:j},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r().createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var n=a(7294),r=(0,n.createContext)(void 0);t.Z=r},5581:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=(a(4996),a(5064)),s=a(8215),l=["components"],c={id:"local-service",title:"Local service",sidebar_label:"Local service"},u=void 0,d={unversionedId:"framework/service/local-service",id:"framework/service/local-service",isDocsHomePage:!1,title:"Local service",description:"If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.",source:"@site/docs/framework/service/50-local-service.md",sourceDirName:"framework/service",slug:"/framework/service/local-service",permalink:"/docs/framework/service/local-service",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/service/50-local-service.md",version:"current",sidebarPosition:50,frontMatter:{id:"local-service",title:"Local service",sidebar_label:"Local service"},sidebar:"someSidebar",previous:{title:"Global service",permalink:"/docs/framework/service/global-service"},next:{title:"File structure",permalink:"/docs/advanced/file-structure"}},p=[{value:"Local service",id:"local-service",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],m={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.",(0,o.kt)("br",null),"\nFor simple use case, it's often enough to use the standard ",(0,o.kt)("strong",{parentName:"p"},"useState")," from React and we recommend that."),(0,o.kt)("p",null,"For more complexe use cases, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," introduce the concept of ",(0,o.kt)("strong",{parentName:"p"},"Local services]"),". ",(0,o.kt)("br",null),"\nGenerally, you will create a ",(0,o.kt)("strong",{parentName:"p"},"Local services")," when you need either"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a scenario"),(0,o.kt)("li",{parentName:"ul"},"or an immutable state")),(0,o.kt)("p",null,"An example of scenario is the retrieval of data via an AJAX GET request. The scenario consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Perform the AJAX GET requests and store the result in the local state"),(0,o.kt)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"false"))),(0,o.kt)("p",null,"You can instanciate a ",(0,o.kt)("strong",{parentName:"p"},"Local services")," multiple times in several components to reuse the same logic.",(0,o.kt)("br",null),"\nE.g: the scenario above is exactly what the hook ",(0,o.kt)("strong",{parentName:"p"},"useGet")," is doing and you can reuse it in several components"),(0,o.kt)("h2",{id:"local-service"},"Local service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, service] = useLocalService(serviceDefinition, initialState);\n")),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two kinds of methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the local state of the component. These methods are generally very simple."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Saga")," methods"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex. "),(0,o.kt)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",{parentName:"ul"},"A saga method never updates the local state by itself. It always calls a ",(0,o.kt)("em",{parentName:"li"},"Reducer")," method to do that.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," and ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"Redux Saga")," to understand exactly how it works.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check the ",(0,o.kt)("strong",{parentName:"p"},"advanced")," section to have an in depth view of a service.")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"serviceDefinition: {\n\n  init: function(context), // method called just after the creation of the service.\n  reducers: Reducer, // The Reducer methods\n  sagas: Sagas, // The Saga methods\n  inject: { // Inject other services into this service so it can use them.\n    myService1, // myService1 is a service imported via import myService1 from '...'\n    myService2,\n    ...\n  }\n\n}\n\ninitialState: object // the initial state returned after the creation of the service\n")),(0,o.kt)("h5",{id:"reducer"},"Reducer"),(0,o.kt)("p",null,"Reducer is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Reducer: {\n  method1: function (state,    // the local state\n                     payload,  // the payload of the action that was dispatched\n                     context), // context contains {store, router, settings, i18n}\n  method2: function (state, \n                     payload,\n                     context),\n  ...\n}\n")),(0,o.kt)("h5",{id:"saga"},"Saga"),(0,o.kt)("p",null,"Saga is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Saga")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Saga: {\n  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.\n              function* (payload, // the payload of the action that was dispatched\n                        context)), // context contains {store, router, settings, i18n}\n  method4: every (\n              function* (payload,\n                        context)), \n  ...\n}\n")),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// A singleton service that has all reducer and saga methods defined in the serviceDefinition\n// The signature of these methods is the same whether they are Reducer or Saga.\nservice: {\n\n  method1: function (payload),\n  method2: function (payload),\n  method3: function (payload),\n  method4: function (payload),\n  ...\n\n}\n\nstate: object // the local state handled by the service\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"This example shows how to send a ajax POST request to a back end server to create a user. Actually, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"../data/use-post"},"usePost")))," is based on this approach.",(0,o.kt)("br",null),'\nA Saga method is defined to handle correctly the "loading ..." indicator and the asynchronous AJAX request'),(0,o.kt)(i.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=editor",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),(0,o.kt)(s.Z,{value:"preview",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=preview",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}h.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);