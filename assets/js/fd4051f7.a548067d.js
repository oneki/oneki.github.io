"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[38639],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),p=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return n?a().createElement(d,l(l({ref:t},c),{},{components:n})):a().createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),l=n(63366),u=n(72389),c=n(86043),p="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function g(e){var t=e.summary,n=e.children,g=(0,l.Z)(e,f),N=(0,u.Z)(),b=(0,a.useRef)(null),v=(0,c.u)({initialState:!g.open}),y=v.collapsed,w=v.setCollapsed,O=(0,a.useState)(g.open),h=O[0],E=O[1],j=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,r.Z)({},g,{ref:b,open:h,"data-collapsed":y,className:(0,o.Z)(p,N&&s,g.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&k(t,b.current)&&(e.preventDefault(),y?(w(!1),E(!0)):w(!0))}}),j,i().createElement(c.z,{lazy:!1,collapsed:y,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),E(!e)}},i().createElement("div",{className:m},n)))}var N="details_b_Ee";function b(e){var t=Object.assign({},e);return i().createElement(g,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",N,t.className)}))}},82640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(34673),["components"]),l={id:"NotificationLevel",title:"NotificationLevel",sidebar_label:"NotificationLevel"},u=void 0,c={unversionedId:"framework-api/enum/NotificationLevel",id:"framework-api/enum/NotificationLevel",title:"NotificationLevel",description:"Properties",source:"@site/docs/framework-api/enum/NotificationLevel.md",sourceDirName:"framework-api/enum",slug:"/framework-api/enum/NotificationLevel",permalink:"/docs/framework-api/enum/NotificationLevel",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/enum/NotificationLevel.md",tags:[],version:"current",frontMatter:{id:"NotificationLevel",title:"NotificationLevel",sidebar_label:"NotificationLevel"},sidebar:"someSidebar",previous:{title:"NavigationType",permalink:"/docs/framework-api/enum/NavigationType"},next:{title:"SagaEffect",permalink:"/docs/framework-api/enum/SagaEffect"}},p={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Debug")),(0,i.kt)("td",{parentName:"tr",align:null},"debug"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Error")),(0,i.kt)("td",{parentName:"tr",align:null},"error"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Info")),(0,i.kt)("td",{parentName:"tr",align:null},"info"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Success")),(0,i.kt)("td",{parentName:"tr",align:null},"success"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Warning")),(0,i.kt)("td",{parentName:"tr",align:null},"warning"),(0,i.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);