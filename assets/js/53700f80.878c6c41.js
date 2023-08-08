"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[71971],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o().createContext({}),p=function(e){var t=o().useContext(f),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o().createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||l[m]||a;return r?o().createElement(d,c(c({ref:t},f),{},{components:r})):o().createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var f=2;f<a;f++)i[f]=r[f];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},73418:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"useIsomorphicLayoutEffect",title:"useIsomorphicLayoutEffect",sidebar_label:"useIsomorphicLayoutEffect"},u=void 0,f={unversionedId:"framework-api/functions/useIsomorphicLayoutEffect",id:"framework-api/functions/useIsomorphicLayoutEffect",title:"useIsomorphicLayoutEffect",description:"Accepts a function that contains imperative, possibly effectful code.",source:"@site/docs/framework-api/functions/useIsomorphicLayoutEffect.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useIsomorphicLayoutEffect",permalink:"/docs/framework-api/functions/useIsomorphicLayoutEffect",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useIsomorphicLayoutEffect.md",tags:[],version:"current",frontMatter:{id:"useIsomorphicLayoutEffect",title:"useIsomorphicLayoutEffect",sidebar_label:"useIsomorphicLayoutEffect"},sidebar:"someSidebar",previous:{title:"useInRouterContext",permalink:"/docs/framework-api/functions/useInRouterContext"},next:{title:"useLazyRef",permalink:"/docs/framework-api/functions/useLazyRef"}},p={},s=[{value:"Properties",id:"properties",level:3}],l={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useIsomorphicLayoutEffect(effect: EffectCallback,deps: DependencyList): void\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Accepts a function that contains imperative, possibly effectful code."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("font",{size:"2"},(0,a.kt)("i",null,"(Mandatory properties are in bold)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deps"),(0,a.kt)("td",{parentName:"tr",align:null},"DependencyList"),(0,a.kt)("td",{parentName:"tr",align:null},"If present, effect will only activate if the values in the list change.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"effect"),(0,a.kt)("td",{parentName:"tr",align:null},"EffectCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"Imperative function that can return a cleanup function")))))}m.isMDXComponent=!0}}]);