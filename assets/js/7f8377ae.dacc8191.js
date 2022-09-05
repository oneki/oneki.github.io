"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51329],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a().createContext({}),d=function(e){var t=a().useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a().createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(o,".").concat(f)]||c[f]||s[f]||i;return r?a().createElement(m,l(l({ref:t},p),{},{components:r})):a().createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},57286:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"addFilter",title:"addFilter",sidebar_label:"addFilter"},u=void 0,p={unversionedId:"framework-api/functions/addFilter",id:"framework-api/functions/addFilter",title:"addFilter",description:"Parameters",source:"@site/docs/framework-api/functions/addFilter.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/addFilter",permalink:"/docs/framework-api/functions/addFilter",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/addFilter.md",tags:[],version:"current",frontMatter:{id:"addFilter",title:"addFilter",sidebar_label:"addFilter"},sidebar:"someSidebar",previous:{title:"addCookie",permalink:"/docs/framework-api/functions/addCookie"},next:{title:"append",permalink:"/docs/framework-api/functions/append"}},d={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return",id:"return",level:3}],s={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"addFilter(query: Query,filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId): void\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory parameters are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"filterOrCriteria")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterOrCriteria"},"QueryFilterOrCriteria")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/Query"},"Query")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parentFilterId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterId"},"QueryFilterId")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"return"},"Return"),(0,i.kt)("p",null,"The return is of type ",(0,i.kt)("code",null,"void")))}f.isMDXComponent=!0}}]);