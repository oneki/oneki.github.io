"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[18501],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),d=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return n?a().createElement(u,o(o({ref:t},s),{},{components:n})):a().createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a().createElement.apply(null,p)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},63274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),p=["components"],o={id:"BasicAppContext",title:"Class: BasicAppContext",sidebar_label:"BasicAppContext",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/BasicAppContext",id:"api/classes/BasicAppContext",isDocsHomePage:!1,title:"Class: BasicAppContext",description:"Implements",source:"@site/docs/api/classes/BasicAppContext.md",sourceDirName:"api/classes",slug:"/api/classes/BasicAppContext",permalink:"/docs/api/classes/BasicAppContext",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BasicAppContext",title:"Class: BasicAppContext",sidebar_label:"BasicAppContext",sidebar_position:0,custom_edit_url:null},sidebar:"someSidebar",previous:{title:"BaseRouter",permalink:"/docs/api/classes/BaseRouter"},next:{title:"CacheEntryService",permalink:"/docs/api/classes/CacheEntryService"}},d=[{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"i18n",id:"i18n",children:[{value:"Implementation of",id:"implementation-of",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"router",id:"router",children:[{value:"Implementation of",id:"implementation-of-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"settings",id:"settings",children:[{value:"Implementation of",id:"implementation-of-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"store",id:"store",children:[{value:"Implementation of",id:"implementation-of-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"ID",id:"id",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/AppContext"},(0,i.kt)("inlineCode",{parentName:"a"},"AppContext")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BasicAppContext"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/Router"},(0,i.kt)("inlineCode",{parentName:"a"},"Router")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/AppSettings"},(0,i.kt)("inlineCode",{parentName:"a"},"AppSettings")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"store")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/AppStore"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStore")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"AnyAction"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"i18n")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/I18n"},(0,i.kt)("inlineCode",{parentName:"a"},"I18n")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:13"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"i18n"},"i18n"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"i18n"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/I18n"},(0,i.kt)("inlineCode",{parentName:"a"},"I18n"))),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext"},"AppContext"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext#i18n"},"i18n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:12"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"router"},"router"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"router"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Router"},(0,i.kt)("inlineCode",{parentName:"a"},"Router"))),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext"},"AppContext"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext#router"},"router")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:9"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settings"},"settings"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"settings"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppSettings"},(0,i.kt)("inlineCode",{parentName:"a"},"AppSettings"))),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext"},"AppContext"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext#settings"},"settings")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:10"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"store"},"store"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"store"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppStore"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStore")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AnyAction"),">"),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext"},"AppContext"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/AppContext#store"},"store")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"[ID]"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"[ID]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"symbol")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"onekijs/packages/onekijs-framework/src/app/AppContext.ts:8"))}m.isMDXComponent=!0}}]);