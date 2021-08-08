"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[8493],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r().createContext({}),u=function(e){var t=r().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r().createElement(f,l(l({ref:t},c),{},{components:n})):r().createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294),r=n.n(a);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n.n(a),o=n(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,p=39;var m=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,m=e.values,d=e.groupId,f=e.className,k=i(),b=k.tabGroupChoices,v=k.setTabGroupChoices,g=(0,a.useState)(o),h=g[0],y=g[1],N=a.Children.toArray(e.children),w=[];if(null!=d){var x=b[d];null!=x&&x!==h&&m.some((function(e){return e.value===x}))&&y(x)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;y(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r().createElement("div",{className:"tabs-container"},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return r().createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r().createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=n(7294),r=(0,a.createContext)(void 0);t.Z=r},1077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),n(5064),n(8215),["components"]),l={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},s=void 0,c={unversionedId:"framework/state-management/introduction",id:"framework/state-management/introduction",isDocsHomePage:!1,title:"Introduction",description:"One of the main feature of Oneki.js is a powerful state management library based on these popular libraries",source:"@site/docs/framework/state-management/001_introduction.md",sourceDirName:"framework/state-management",slug:"/framework/state-management/introduction",permalink:"/docs/framework/state-management/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/state-management/001_introduction.md",version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"Environment variables",permalink:"/docs/framework/configuration/multi-env"},next:{title:"Global state",permalink:"/docs/framework/state-management/global-state"}},u=[{value:"Global state",id:"global-state",children:[{value:"Basic Example",id:"basic-example",children:[]}]},{value:"Local state",id:"local-state",children:[{value:"Basic Example",id:"basic-example-1",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"One of the main feature of ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," is a powerful state management library based on these popular libraries"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Redux (global state) or useReducer (local state)"),(0,o.kt)("li",{parentName:"ul"},"Saga"),(0,o.kt)("li",{parentName:"ul"},"Immer"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," tries to hide all the complexity and boiler plate code needed to handle correctly a state with these libraries."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," proposes several hooks to handle easily an immutable ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"local"))," or  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"global"))," state. These states are immutable thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer"),(0,o.kt)("br",null),"\nThe global state is managed by ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/getting-started"},"Redux"),"."),(0,o.kt)("p",null,"The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the framework"),(0,o.kt)("h2",{id:"global-state"},"Global state"),(0,o.kt)("p",null,"If several components react on a same data, it's a good practice to use a global state to store it. The most popular library to handle this kind of state is ",(0,o.kt)("strong",{parentName:"p"},"Redux")),(0,o.kt)("p",null,"When the application starts, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," creates automatically a Redux store (or you can provide your own) and provides generic hooks to handle it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./global-state"},"useGlobalProp"))," is a generic global service equivalent to the standard ",(0,o.kt)("strong",{parentName:"li"},"useState")," from React, but for the global state. It retrieves a specific data from the global state and provide a setter to upate it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./global-state"},"useGlobalState"))," to retrieve and react on data from the global state using a selector"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./global-state"},"useGlobalStateService"))," is a generic global service to update any data in the global state")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note")),": For advanced use cases involving asynchronous flows, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," provides also a hook to create a ",(0,o.kt)("strong",{parentName:"p"},"globalService"),".",(0,o.kt)("br",null),"This part is more complex and described in ",(0,o.kt)("a",{parentName:"p",href:"../service/global-service"},"another section of the documentation"))),(0,o.kt)("h3",{id:"basic-example"},"Basic Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useGlobalProp } from "onekijs";\nimport React from "react";\nimport { myGlobalService } from "./MyGlobalService";\n\nlet uid = 0;\nexport default () => {\n  // useGlobalProp is a hook that selects a single entry in the Redux state\n  const [foo, setFoo] = useGlobalProp("foo");\n\n  return (\n    <div>\n      <button onClick={() => setFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("h2",{id:"local-state"},"Local state"),(0,o.kt)("p",null,"If only one component needs to react to specific data, it's not necessary to store the data in a global state. For this kind of data, a local state is enough.",(0,o.kt)("br",null),"\nFor simple use case, it's often enough to use the standard ",(0,o.kt)("strong",{parentName:"p"},"useState")," from React and we recommend that."),(0,o.kt)("p",null,"For more complexe use cases, ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," introduce the concept of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state"},"Local services")),". ",(0,o.kt)("br",null),"\nGenerally, you only need to create a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state"},"Local services"))," when a scenario is needed (or sometimes when the local state is a complex object)"),(0,o.kt)("p",null,"An example of scenario is the retrieval of data via an AJAX GET request. The scenario consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Perform the AJAX GET requests and store the result in the local state"),(0,o.kt)("li",{parentName:"ul"},'Update the "loading" variable in the local state to ',(0,o.kt)("strong",{parentName:"li"},"false"))),(0,o.kt)("p",null,"You can instanciate a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./local-state"},"Local services"))," multiple times in several components to reuse the same logic.",(0,o.kt)("br",null),"\nE.g: the scenario above is exactly what the hook ",(0,o.kt)("strong",{parentName:"p"},"useGet")," is doing and you can reuse it in several components"),(0,o.kt)("h3",{id:"basic-example-1"},"Basic Example"),(0,o.kt)("p",null,"This very basic example is for demonstration only as a simple ",(0,o.kt)("strong",{parentName:"p"},"useState")," would be normally enough."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useLocalService } from "onekijs";\nimport React from "react";\nimport { myLocalService } from "./MyLocalService";\n\nlet uid = 0;\nexport default () => {\n  // instanciate a local service\n  const [state, service] = useLocalService(myLocalService);\n\n  return (\n    <div>\n      <button onClick={() => service.updateFoo(`foo-${++uid})`)}>Update</button>\n      {foo && <div>Value in global state: {foo}</div>}\n    </div>\n  );\n};\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"myLocalService")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default const myLocalService = {\n  reducers: {\n    updateFoo: function(state, fooValue) {\n      // state is the local state\n      // Immer is used under the hood to handle correctly immutability\n      state.foo = fooValue;\n    }\n  }\n};\n")))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);