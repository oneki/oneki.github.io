"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[51335],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return v}});var n=a(67294),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r().createContext({}),u=function(e){var t=r().useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?r().createElement(v,i(i({ref:t},c),{},{components:a})):r().createElement(v,i({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r().createElement.apply(null,l)}return r().createElement.apply(null,a)}d.displayName="MDXCreateElement"},13919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},44996:function(e,t,a){a.d(t,{C:function(){return o},Z:function(){return l}});var n=a(52263),r=a(13919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,l=o.forcePrependBaseUrl,i=void 0!==l&&l,s=o.absolute,c=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(i)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(o,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,a){var n=a(67294),r=a.n(n);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(83117),r=a(67294),o=a.n(r),l=a(72389),i=a(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(89521),u=a(86010),p="tabItem_1uMI";function m(e){var t,a,n,l=e.lazy,i=e.block,m=e.defaultValue,d=e.values,v=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,c.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),y=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,r.useState)(N),S=x[0],T=x[1],L=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=y[v];null!=j&&j!==S&&k.some((function(e){return e.value===j}))&&T(j)}var E=function(e){var t=e.currentTarget,a=L.indexOf(t),n=k[a].value;n!==S&&(O(t),T(n),null!=v&&w(v,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=L.indexOf(e.currentTarget)+1;a=L[n]||L[0];break;case"ArrowLeft":var r=L.indexOf(e.currentTarget)-1;a=L[r]||L[L.length-1]}null==(t=a)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var t=e.value,a=e.label;return o().createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":S===t}),key:t,ref:function(e){return L.push(e)},onKeyDown:C,onFocus:E,onClick:E},null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,l.Z)();return o().createElement(m,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=a(67294),r=(0,n.createContext)(void 0);t.Z=r},64094:function(e,t,a){var n=a(67294),r=a.n(n),o=a(26396);a(58215);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},83930:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=(a(44996),a(64094)),i=a(58215),s=["components"],c={id:"local-state",title:"Local state",sidebar_label:"Local state"},u=void 0,p={unversionedId:"framework/state-management/local-state",id:"framework/state-management/local-state",isDocsHomePage:!1,title:"Local state",description:"If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.",source:"@site/docs/framework/state-management/50-local-state.md",sourceDirName:"framework/state-management",slug:"/framework/state-management/local-state",permalink:"/docs/framework/state-management/local-state",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/state-management/50-local-state.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"local-state",title:"Local state",sidebar_label:"Local state"},sidebar:"someSidebar",previous:{title:"Global state",permalink:"/docs/framework/state-management/global-state"},next:{title:"Introduction",permalink:"/docs/framework/auth/introduction"}},m=[{value:"Local service",id:"local-service",children:[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[],level:4},{value:"Outputs",id:"outputs",children:[],level:4}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],d={toc:m};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.",(0,o.kt)("br",{parentName:"p"}),"\n","For a simple use case, it's often sufficient to use the standard ",(0,o.kt)("strong",{parentName:"p"},"useState")," from React and we recommend it."),(0,o.kt)("p",null,"For more complexe use cases, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," introduces the concept of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local services")),".",(0,o.kt)("br",{parentName:"p"}),"\n","Generally, you only need to create a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," when you need either"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a scenario / orchestration"),(0,o.kt)("li",{parentName:"ul"},"or an immutable state")),(0,o.kt)("p",null,"An example of scenario is retrieving data via an AJAX GET request. The scenario consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Execute the AJAX GET request and store the result in the local state"),(0,o.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"false"))),(0,o.kt)("p",null,"You can instanciate a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," multiple times in multiple components to reuse the same logic.",(0,o.kt)("br",null),"\nE.g: the above scenario is exactly what the ",(0,o.kt)("strong",{parentName:"p"},"useGet")," hook does and you can reuse it in multiple components."),(0,o.kt)("h2",{id:"local-service"},"Local service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, service] = useLocalService(ServiceClass, initialState);\n")),(0,o.kt)("p",null),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two types of methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the local state of the component. These methods are generally very simple."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Saga")," methods"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex."),(0,o.kt)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",{parentName:"ul"},"A saga method never updates the local state by itself. It always calls a ",(0,o.kt)("inlineCode",{parentName:"li"},"Reducer")," method to do that.")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be sure to read the documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," and ",(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"Redux Saga")," to understand exactly how it works.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the complexity, but it's important to understand how it works underneath."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../service/introduction"},"service section"))," to have an in-depth explanation of a service.")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ServiceClass")),(0,o.kt)("td",{parentName:"tr",align:null},"Class"),(0,o.kt)("td",{parentName:"tr",align:null},"A class that extends ",(0,o.kt)("a",{parentName:"td",href:"../../api/classes/DefaultLocalService"},"DefaultLocalService"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"initialState")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"The initial state of the service")))),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"The immutable state managed by the service (can be upated only by the service)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"service")),(0,o.kt)("td",{parentName:"tr",align:null},"Class"),(0,o.kt)("td",{parentName:"tr",align:null},"The service to manage the state")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"This very basic example is for demonstration only as a simple ",(0,o.kt)("strong",{parentName:"p"},"useState")," would be normally enough."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useLocalService } from "onekijs";\nimport React from "react";\nimport { myLocalService } from "./MyLocalService";\n\nlet uid = 0;\nexport default () => {\n  // instanciate a local service\n  const [state, service] = useLocalService(myLocalService);\n\n  return (\n    <div>\n      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("p",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"myLocalService")," looks like this:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You don't need to understand how to build services yet. This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../service/introduction"},"page"))," explains how to build services"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AnyState, DefaultLocalService, reducer, service } from 'onekijs';\nimport { Settings } from './settings';\n\nexport interface MyLocalState extends AnyState {\n  foo: string;\n}\n\n@service\nexport class MyLocalService extends DefaultLocalService<MyLocalState> {\n  \n  @reducer\n  setFoo(value: string): void {\n    this.state.foo = value;\n  }\n\n}\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useLocalService } from "onekijs-next";\nimport React from "react";\nimport { myLocalService } from "./MyLocalService";\n\nlet uid = 0;\nexport default () => {\n  // instanciate a local service\n  const [state, service] = useLocalService(myLocalService);\n\n  return (\n    <div>\n      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("p",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"myLocalService")," looks like this:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You don't need to understand how to build services yet. This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../service/introduction"},"page"))," explains how to build services"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AnyState, DefaultLocalService, reducer, service } from 'onekijs-next';\nimport { Settings } from './settings';\n\nexport interface MyLocalState extends AnyState {\n  foo: string;\n}\n\n@service\nexport class MyLocalService extends DefaultLocalService<MyLocalState> {\n  \n  @reducer\n  setFoo(value: string): void {\n    this.state.foo = value;\n  }\n\n}\n")))))}v.isMDXComponent=!0}}]);