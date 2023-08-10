"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[38044],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a().createContext({}),s=function(t){var e=a().useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a().createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},m=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a().createElement(f,l(l({ref:e},p),{},{components:n})):a().createElement(f,l({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),l=n(63366),u=n(72389),p=n(86043),s="details_lb9f",c="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(t){return!!t&&("SUMMARY"===t.tagName||f(t.parentElement))}function k(t,e){return!!t&&(t===e||k(t.parentElement,e))}function g(t){var e=t.summary,n=t.children,g=(0,l.Z)(t,m),b=(0,u.Z)(),y=(0,a.useRef)(null),N=(0,p.u)({initialState:!g.open}),v=N.collapsed,O=N.setCollapsed,w=(0,a.useState)(g.open),h=w[0],E=w[1],S=i().isValidElement(e)?e:i().createElement("summary",null,null!=e?e:"Details");return i().createElement("details",(0,r.Z)({},g,{ref:y,open:h,"data-collapsed":v,className:(0,o.Z)(s,b&&c,g.className),onMouseDown:function(t){f(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;f(e)&&k(e,y.current)&&(t.preventDefault(),v?(O(!1),E(!0)):O(!0))}}),S,i().createElement(p.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){O(t),E(!t)}},i().createElement("div",{className:d},n)))}var b="details_b_Ee";function y(t){var e=Object.assign({},t);return i().createElement(g,(0,r.Z)({},e,{className:(0,o.Z)("alert alert--info",b,e.className)}))}},99562:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(34673),["components"]),l={id:"ValidationStatus",title:"ValidationStatus",sidebar_label:"ValidationStatus"},u=void 0,p={unversionedId:"framework-api/enum/ValidationStatus",id:"framework-api/enum/ValidationStatus",title:"ValidationStatus",description:"Properties",source:"@site/docs/framework-api/enum/ValidationStatus.md",sourceDirName:"framework-api/enum",slug:"/framework-api/enum/ValidationStatus",permalink:"/docs/framework-api/enum/ValidationStatus",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/enum/ValidationStatus.md",tags:[],version:"current",frontMatter:{id:"ValidationStatus",title:"ValidationStatus",sidebar_label:"ValidationStatus"},sidebar:"someSidebar",previous:{title:"ValidationCode",permalink:"/docs/framework-api/enum/ValidationCode"},next:{title:"AppErrorBoundary",permalink:"/docs/framework-api/functions/AppErrorBoundary"}},s={},c=[{value:"Properties",id:"properties",level:3}],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Error")),(0,i.kt)("td",{parentName:"tr",align:null},"Error"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Loading")),(0,i.kt)("td",{parentName:"tr",align:null},"Loading"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"None")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Ok")),(0,i.kt)("td",{parentName:"tr",align:null},"OK"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Warning")),(0,i.kt)("td",{parentName:"tr",align:null},"Warning"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);