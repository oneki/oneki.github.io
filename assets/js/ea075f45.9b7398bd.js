"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[29764],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o().createContext({}),u=function(e){var t=o().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?o().createElement(b,i(i({ref:t},s),{},{components:r})):o().createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o().createElement.apply(null,l)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),o=r(67294),a=r.n(o),l=r(86010),i=r(63366),c=r(72389),s=r(86043),u="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function b(e){return!!e&&("SUMMARY"===e.tagName||b(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,i.Z)(e,f),v=(0,c.Z)(),h=(0,o.useRef)(null),w=(0,s.u)({initialState:!y.open}),P=w.collapsed,g=w.setCollapsed,O=(0,o.useState)(y.open),S=O[0],k=O[1],N=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},y,{ref:h,open:S,"data-collapsed":P,className:(0,l.Z)(u,v&&p,y.className),onMouseDown:function(e){b(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;b(t)&&d(t,h.current)&&(e.preventDefault(),P?(g(!1),k(!0)):g(!0))}}),N,a().createElement(s.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){g(e),k(!e)}},a().createElement("div",{className:m},r)))}var v="details_b_Ee";function h(e){var t=Object.assign({},e);return a().createElement(y,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",v,t.className)}))}},63939:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"localeNoPathSymbol",title:"localeNoPathSymbol",sidebar_label:"localeNoPathSymbol"},c=void 0,s={unversionedId:"framework-api/variables/localeNoPathSymbol",id:"framework-api/variables/localeNoPathSymbol",title:"localeNoPathSymbol",description:"Properties",source:"@site/docs/framework-api/variables/localeNoPathSymbol.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/localeNoPathSymbol",permalink:"/docs/framework-api/variables/localeNoPathSymbol",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/localeNoPathSymbol.md",tags:[],version:"current",frontMatter:{id:"localeNoPathSymbol",title:"localeNoPathSymbol",sidebar_label:"localeNoPathSymbol"},sidebar:"someSidebar",previous:{title:"indexedLocalesSymbol",permalink:"/docs/framework-api/variables/indexedLocalesSymbol"},next:{title:"localesModeSymbol",permalink:"/docs/framework-api/variables/localesModeSymbol"}},u={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}f.isMDXComponent=!0}}]);