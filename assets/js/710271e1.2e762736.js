"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[39731],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a().createContext({}),u=function(e){var t=a().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?a().createElement(f,i(i({ref:t},p),{},{components:n})):a().createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(63366),c=n(72389),p=n(86043),u="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,d),b=(0,c.Z)(),g=(0,a.useRef)(null),v=(0,p.u)({initialState:!k.open}),N=v.collapsed,O=v.setCollapsed,w=(0,a.useState)(k.open),C=w[0],h=w[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},k,{ref:g,open:C,"data-collapsed":N,className:(0,l.Z)(u,b&&s,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&y(t,g.current)&&(e.preventDefault(),N?(O(!1),h(!0)):O(!0))}}),E,o().createElement(p.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),h(!e)}},o().createElement("div",{className:m},n)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(k,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},66318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=(n(34673),["components"]),i={id:"CollectionBy",title:"CollectionBy",sidebar_label:"CollectionBy"},c=void 0,p={unversionedId:"framework-api/types/CollectionBy",id:"framework-api/types/CollectionBy",title:"CollectionBy",description:"Properties",source:"@site/docs/framework-api/types/CollectionBy.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/CollectionBy",permalink:"/docs/framework-api/types/CollectionBy",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/CollectionBy.md",tags:[],version:"current",frontMatter:{id:"CollectionBy",title:"CollectionBy",sidebar_label:"CollectionBy"},sidebar:"someSidebar",previous:{title:"CollectionBroker",permalink:"/docs/framework-api/types/CollectionBroker"},next:{title:"CollectionFetchOptions",permalink:"/docs/framework-api/types/CollectionFetchOptions"}},u={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"item")),(0,o.kt)("td",{parentName:"tr",align:null},"I"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"uid")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"T"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);