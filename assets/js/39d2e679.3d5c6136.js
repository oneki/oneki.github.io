"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[80616],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(67294),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n().createContext({}),c=function(e){var t=n().useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n().createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n().createElement(n().Fragment,{},t)}},m=n().forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n().createElement(h,i(i({ref:t},u),{},{components:a})):n().createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n().createElement.apply(null,l)}return n().createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a.n(r),o=a(86010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,r=e.className;return n().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(87462),n=a(67294),o=a.n(n),l=a(86010),i=a(12466),s=a(45315),u=a(91980),c=a(67392),d=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=o().Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,a,r,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,c=m(e),p=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:c})})),v=p[0],b=p[1],g=f({queryString:s,groupId:u}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,d.Nk)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],x=w[1],j=function(){var e=null!=k?k:N;return h({value:e,tabValues:c})?e:null}();return(0,n.useLayoutEffect)((function(){j&&b(j)}),[j]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),x(e)}),[y,x,c]),tabValues:c}}var b=a(72389),g="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,a=e.block,n=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==n&&(d(t),s(r))},m=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,n=c.indexOf(e.currentTarget)+1;a=null!=(r=c[n])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;a=null!=(o=c[l])?o:c[c.length-1]}null==(t=a)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":n===t})}),null!=a?a:t)})))}function w(e){var t=e.lazy,a=e.children,r=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=v(e);return o().createElement("div",{className:(0,l.Z)("tabs-container",g)},o().createElement(y,(0,r.Z)({},e,t)),o().createElement(w,(0,r.Z)({},e,t)))}function x(e){var t=(0,b.Z)();return o().createElement(N,(0,r.Z)({key:String(t)},e))}},76798:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(44996),i=a(74866),s=a(85162),u=["components"],c={id:"use-local-service",title:"useLocalService",sidebar_label:"useLocalService"},d=void 0,p={unversionedId:"hooks/use-local-service",id:"hooks/use-local-service",title:"useLocalService",description:"The goal of useLocalService is to create a service local to the component with two kinds of methods:",source:"@site/docs/hooks/140-use-local-service.md",sourceDirName:"hooks",slug:"/hooks/use-local-service",permalink:"/docs/hooks/use-local-service",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/140-use-local-service.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{id:"use-local-service",title:"useLocalService",sidebar_label:"useLocalService"}},m={},h=[{value:"Architecture",id:"architecture",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Reducer",id:"reducer",level:5},{value:"Saga",id:"saga",level:5},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3}],f={toc:h};function v(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, service] = useLocalService(serviceDefinition, initialState);\n")),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two kinds of methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the local state of the component. These methods are generally very simple."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Saga")," methods"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex. "),(0,o.kt)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",{parentName:"ul"},"A saga method never updates the local state by itself. It always calls a ",(0,o.kt)("em",{parentName:"li"},"Reducer")," method to do that.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," and ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"Redux Saga")," to understand exactly how it works.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the boilerplate, but it's important to understand how it works underneath.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check the ",(0,o.kt)("strong",{parentName:"p"},"advanced")," section to have an in depth view of a service.")),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("img",{alt:"Service architecture",src:(0,l.Z)("img/service_archi.svg")}),";",(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"serviceDefinition: {\n\n  init: function(context), // method called just after the creation of the service.\n  reducers: Reducer, // The Reducer methods\n  sagas: Sagas, // The Saga methods\n  inject: { // Inject other services into this service so it can use them.\n    myService1, // myService1 is a service imported via import myService1 from '...'\n    myService2,\n    ...\n  }\n\n}\n\ninitialState: object // the initial state returned after the creation of the service\n")),(0,o.kt)("h5",{id:"reducer"},"Reducer"),(0,o.kt)("p",null,"Reducer is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Reducer: {\n  method1: function (state,    // the local state\n                     payload,  // the payload of the action that was dispatched\n                     context),\n  method2: function (state, \n                     payload,\n                     context),\n  ...\n}\n")),(0,o.kt)("h5",{id:"saga"},"Saga"),(0,o.kt)("p",null,"Saga is an object where each entry represents a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Saga")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Saga: {\n  method3: latest ( // Saga effect. could be: latest | every | leading. Indicate how to handle an action when another action of the same type is still in progress.\n              function* (payload, // the payload of the action that was dispatched\n                        context)), \n  method4: every (\n              function* (payload,\n                        context)), \n  ...\n}\n")),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// A singleton service that has all reducer and saga methods defined in the serviceDefinition\n// The signature of these methods is the same whether they are Reducer or Saga.\nservice: {\n\n  method1: function (payload),\n  method2: function (payload),\n  method3: function (payload),\n  method4: function (payload),\n  ...\n\n}\n\nstate: object // the local state handled by the service\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"This example shows how to send a ajax POST request to a back end server to create a user. Actually, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"../data/use-post"},"usePost")))," is based on this approach.",(0,o.kt)("br",null),'\nA Saga method is defined to handle correctly the "loading ..." indicator and the asynchronous AJAX request'),(0,o.kt)(i.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=editor",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),(0,o.kt)(s.Z,{value:"preview",mdxType:"TabItem"},(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/use-local-service-pjljv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FLocalService.js&theme=dark&view=preview",style:{width:"100%",height:"1600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}v.isMDXComponent=!0}}]);