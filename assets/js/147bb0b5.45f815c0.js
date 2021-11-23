"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[14278],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a().createElement(h,l(l({ref:t},u),{},{components:n})):a().createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294),a=n.n(r);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n.n(a),i=n(72389),l=n(79443);var s=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),c=n(86010),d="tabItem_1uMI";function p(e){var t,n,r,i=e.lazy,l=e.block,p=e.defaultValue,m=e.values,h=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),y=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,a.useState)(k),j=N[0],T=N[1],O=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=y[h];null!=E&&E!==j&&b.some((function(e){return e.value===E}))&&T(E)}var R=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==j&&(S(t),T(r),null!=h&&x(h,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},b.map((function(e){var t=e.value,n=e.label;return o().createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":j===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:R,onClick:R},null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,i.Z)();return o().createElement(p,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=n(67294),a=(0,r.createContext)(void 0);t.Z=a},26096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(44996),n(26396)),l=n(58215),s=["components"],u={id:"use-redux-service",title:"useReduxService",sidebar_label:"useReduxService"},c=void 0,d={unversionedId:"data/use-redux-service",id:"data/use-redux-service",isDocsHomePage:!1,title:"useReduxService",description:"The goal of useReduxService is to create a singleton with two kinds of methods:",source:"@site/docs/data/150-use-redux-service.md",sourceDirName:"data",slug:"/data/use-redux-service",permalink:"/docs/data/use-redux-service",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/data/150-use-redux-service.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{id:"use-redux-service",title:"useReduxService",sidebar_label:"useReduxService"}},p=[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[{value:"Reducer",id:"reducer",children:[],level:5},{value:"Saga",id:"saga",children:[],level:5}],level:4},{value:"Outputs",id:"outputs",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[{value:"Definition of the service",id:"definition-of-the-service",children:[],level:5},{value:"Component that uses the service",id:"component-that-uses-the-service",children:[],level:5}],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const service = useReduxService(serviceDefinition);\n")),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useReduxService"))," is to create a singleton with two kinds of methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the redux state. These methods are generally very simple."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Saga")," methods"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex. "),(0,o.kt)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",{parentName:"ul"},"A saga method never updates the Redux state by itself. It always calls a ",(0,o.kt)("em",{parentName:"li"},"Reducer")," method to do that.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A redux service is unique across the application (singleton) and can be reused in multiple components.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," and ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"Redux Saga")," to understand exactly how it works.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check the ",(0,o.kt)("strong",{parentName:"p"},"advanced")," section to have an in depth view of a service.")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"serviceDefinition: {\n\n  init: function(context) // method called just after the creation of the service.\n  name: string, // the name of the service. Must be unique\n  reducers: Reducer, // The Reducer methods\n  sagas: Sagas, // The Saga methods\n  inject: { // Inject other services into this service so it can use them.\n    myService1, // myService1 is a service imported via import myService1 from '...'\n    myService2,\n    ...\n  }\n\n}\n")),(0,o.kt)("h5",{id:"reducer"},"Reducer"),(0,o.kt)("p",null,"Reducer is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Reducer: {\n  method1: function (state,    // the full redux state\n                     payload,  // the payload of the action that was dispatched\n                     context),\n  method2: function (state, \n                     payload,\n                     context),\n  ...\n}\n")),(0,o.kt)("h5",{id:"saga"},"Saga"),(0,o.kt)("p",null,"Saga is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Saga")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Saga: {\n  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.\n              function* (payload, // the payload of the action that was dispatched\n                        context)), \n  method4: every (\n              function* (payload,\n                        context)), \n  ...\n}\n")),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// A singleton service that has all reducer and saga methods defined in the serviceDefinition\n// The signature of these methods is the same whether they are Reducer or Saga.\nservice: {\n\n  method1: function (payload),\n  method2: function (payload),\n  method3: function (payload),\n  method4: function (payload),\n  ...\n\n}\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"A redux service is not created inside a component as it's a singleton available across the whole app.\nThis example contains two files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One file to define the service"),(0,o.kt)("li",{parentName:"ul"},"A second file to show how a component can use this service")),(0,o.kt)("h5",{id:"definition-of-the-service"},"Definition of the service"),(0,o.kt)(i.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=editor",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),(0,o.kt)(l.Z,{value:"preview",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotificationService.js&theme=dark&view=preview",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),(0,o.kt)("h5",{id:"component-that-uses-the-service"},"Component that uses the service"),(0,o.kt)(i.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=editor",style:{width:"100%",height:"800px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),(0,o.kt)(l.Z,{value:"preview",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-redux-service-jtotk?fontsize=14&hidenavigation=1&module=%2Fsrc%2FExample.js&theme=dark&view=preview",style:{width:"100%",height:"800px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}h.isMDXComponent=!0}}]);