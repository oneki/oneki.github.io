"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51363],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?a().createElement(d,i(i({ref:t},s),{},{components:n})):a().createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},23230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"shallowEqual",title:"shallowEqual",sidebar_label:"shallowEqual"},u=void 0,s={unversionedId:"framework-api/functions/shallowEqual",id:"framework-api/functions/shallowEqual",title:"shallowEqual",description:"Copyright (c) 2013-present, Facebook, Inc.",source:"@site/docs/framework-api/functions/shallowEqual.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/shallowEqual",permalink:"/docs/framework-api/functions/shallowEqual",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/shallowEqual.md",tags:[],version:"current",frontMatter:{id:"shallowEqual",title:"shallowEqual",sidebar_label:"shallowEqual"},sidebar:"someSidebar",previous:{title:"sha256",permalink:"/docs/framework-api/functions/sha256"},next:{title:"shouldResetData",permalink:"/docs/framework-api/functions/shouldResetData"}},c={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Return",id:"return",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"shallowEqual(objA: null | AnonymousObject<any>,objB: null | AnonymousObject<any>): boolean\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Copyright (c) 2013-present, Facebook, Inc."),(0,o.kt)("p",null,"This source code is licensed under the MIT license found in the",(0,o.kt)("br",{parentName:"p"}),"\n","LICENSE file in the root directory of this source tree."),(0,o.kt)("p",null,"Performs equality by iterating through keys on an object and returning false",(0,o.kt)("br",{parentName:"p"}),"\n","when any key has values which are not strictly equal between the arguments.",(0,o.kt)("br",{parentName:"p"}),"\n","Returns true when the values of all keys are strictly equal."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory parameters are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"objA")),(0,o.kt)("td",{parentName:"tr",align:null},"null ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"objB")),(0,o.kt)("td",{parentName:"tr",align:null},"null ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"return"},"Return"),(0,o.kt)("p",null,"The return is of type ",(0,o.kt)("code",null,"boolean")))}m.isMDXComponent=!0}}]);