"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[78493],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(67294),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r().createContext({}),c=function(e){var t=r().useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?r().createElement(f,i(i({ref:t},u),{},{components:a})):r().createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r().createElement.apply(null,l)}return r().createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a.n(n),o=a(86010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,n),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(87462),r=a(67294),o=a.n(r),l=a(86010),i=a(72389),s=a(67392),u=a(7094),c=a(12466),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,f=e.defaultValue,v=e.values,k=e.groupId,b=e.className,g=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),w=x.tabGroupChoices,S=x.setTabGroupChoices,T=(0,r.useState)(N),j=T[0],O=T[1],E=[],L=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=w[k];null!=I&&I!==j&&h.some((function(e){return e.value===I}))&&O(I)}var Z=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==j&&(L(t),O(n),null!=k&&S(k,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=E.indexOf(e.currentTarget)+1;a=null!=(n=E[r])?n:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;a=null!=(o=E[l])?o:E[E.length-1]}null==(t=a)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",p)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,a=e.label,r=e.attributes;return o().createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function f(e){var t=(0,i.Z)();return o().createElement(d,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,a){var n=a(67294),r=a.n(n),o=a(65488);a(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},88425:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=(a(44996),a(64094)),i=a(85162),s=["components"],u={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"framework/state-management/introduction",id:"framework/state-management/introduction",title:"Introduction",description:"One of the main features of Oneki.js is a powerful state management library based on these popular libraries",source:"@site/docs/framework/state-management/001_introduction.md",sourceDirName:"framework/state-management",slug:"/framework/state-management/introduction",permalink:"/docs/framework/state-management/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/state-management/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"Environment variables",permalink:"/docs/framework/configuration/multi-env"},next:{title:"Global state",permalink:"/docs/framework/state-management/global-state"}},m={},d=[{value:"Global state",id:"global-state",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Local state",id:"local-state",level:2},{value:"Basic Example",id:"basic-example-1",level:3}],f={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"One of the main features of ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," is a powerful state management library based on these popular libraries"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Redux (global state) or useReducer (local state)"),(0,o.kt)("li",{parentName:"ul"},"Saga"),(0,o.kt)("li",{parentName:"ul"},"Immer"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," tries to hide all the complexity and boiler plate code needed to properly manage a state with these libraries."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," offers several hooks to manage easily an immutable ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"local"))," or  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"global"))," state. These states are immutable thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer"),(0,o.kt)("br",null),"\nThe global state is managed by ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/getting-started"},"Redux"),"."),(0,o.kt)("p",null,"The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the framework"),(0,o.kt)("h2",{id:"global-state"},"Global state"),(0,o.kt)("p",null,"If several components react on the same data, it is good to use a global state to store it. The most popular library to manage this kind of state is ",(0,o.kt)("strong",{parentName:"p"},"Redux")),(0,o.kt)("p",null,"When the application starts, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," automatically creates a Redux store (or you can provide your own) and provides generic hooks to manage it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./global-state#useglobalstate"},"useGlobalState"))," is a hook equivalent to the standard ",(0,o.kt)("strong",{parentName:"li"},"useState")," from React, but for the global state. It retrieves a specific entry from the global state and provides a setter to upate it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./global-state#useglobalprop"},"useGlobalProp"))," to react on a data from the global state using a selector (read only, no setter provided)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note")),": For advanced use cases involving asynchronous flows, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," provides also a hook to create a ",(0,o.kt)("strong",{parentName:"p"},"globalService"),".",(0,o.kt)("br",null),"This part is more complex and described in ",(0,o.kt)("a",{parentName:"p",href:"../service/global-service"},"another section of the documentation"))),(0,o.kt)("h3",{id:"basic-example"},"Basic Example"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useGlobalState } from "onekijs";\nimport React from "react";\n\nlet uid = 0;\nexport default () => {\n  const [foo, setFoo] = useGlobalState("foo");\n\n  return (\n    <div>\n      <button onClick={() => setFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n'))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useGlobalState } from "onekijs-next";\nimport React from "react";\n\nlet uid = 0;\nexport default () => {\n  const [foo, setFoo] = useGlobalState("foo");\n\n  return (\n    <div>\n      <button onClick={() => setFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')))),(0,o.kt)("h2",{id:"local-state"},"Local state"),(0,o.kt)("p",null,"If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.",(0,o.kt)("br",{parentName:"p"}),"\n","For a simple use case, it's often sufficient to use the standard ",(0,o.kt)("strong",{parentName:"p"},"useState")," from React and we recommend it."),(0,o.kt)("p",null,"For more complexe use cases, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," introduces the concept of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local services")),".",(0,o.kt)("br",{parentName:"p"}),"\n","Generally, you only need to create a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," when a scenario/orchestration is needed (or sometimes when the local state is a complex object)"),(0,o.kt)("p",null,"An example of scenario is retrieving data via an AJAX GET request. The scenario consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Execute the AJAX GET request and store the result in the local state"),(0,o.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"false"))),(0,o.kt)("p",null,"You can instanciate a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," multiple times in multiple components to reuse the same logic.",(0,o.kt)("br",null),"\nE.g: the above scenario is exactly what the ",(0,o.kt)("strong",{parentName:"p"},"useGet")," hook does and you can reuse it in multiple components."),(0,o.kt)("h3",{id:"basic-example-1"},"Basic Example"),(0,o.kt)("p",null,"This very basic example is for demonstration only as a simple ",(0,o.kt)("strong",{parentName:"p"},"useState")," would be normally enough."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useLocalService } from "onekijs";\nimport React from "react";\nimport { myLocalService } from "./MyLocalService";\n\nlet uid = 0;\nexport default () => {\n  // instanciate a local service\n  const [state, service] = useLocalService(myLocalService);\n\n  return (\n    <div>\n      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("p",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"myLocalService")," looks like this:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to understand how to build services yet. This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../service/introduction"},"page"))," explains how to build services")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AnyState, DefaultLocalService, reducer, service } from 'onekijs';\nimport { Settings } from './settings';\n\nexport interface MyLocalState extends AnyState {\n  foo: string;\n}\n\n@service\nexport class MyLocalService extends DefaultLocalService<MyLocalState> {\n  \n  @reducer\n  setFoo(value: string): void {\n    this.state.foo = value;\n  }\n\n}\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useLocalService } from "onekijs-next";\nimport React from "react";\nimport { myLocalService } from "./MyLocalService";\n\nlet uid = 0;\nexport default () => {\n  // instanciate a local service\n  const [state, service] = useLocalService(myLocalService);\n\n  return (\n    <div>\n      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("p",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"myLocalService")," looks like this:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to understand how to build services yet. This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../service/introduction"},"page"))," explains how to build services")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AnyState, DefaultLocalService, reducer, service } from 'onekijs-next';\nimport { Settings } from './settings';\n\nexport interface MyLocalState extends AnyState {\n  foo: string;\n}\n\n@service\nexport class MyLocalService extends DefaultLocalService<MyLocalState> {\n  \n  @reducer\n  setFoo(value: string): void {\n    this.state.foo = value;\n  }\n\n}\n")))))}v.isMDXComponent=!0}}]);