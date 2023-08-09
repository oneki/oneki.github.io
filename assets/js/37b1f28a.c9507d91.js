"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[89208],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?a().createElement(f,i(i({ref:t},u),{},{components:r})):a().createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),p=r(72389),u=r(86043),c="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,i.Z)(e,d),y=(0,p.Z)(),b=(0,a.useRef)(null),v=(0,u.u)({initialState:!k.open}),N=v.collapsed,w=v.setCollapsed,S=(0,a.useState)(k.open),O=S[0],h=S[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},k,{ref:b,open:O,"data-collapsed":N,className:(0,l.Z)(c,y&&s,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&g(t,b.current)&&(e.preventDefault(),N?(w(!1),h(!0)):w(!0))}}),E,o().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),h(!e)}},o().createElement("div",{className:m},r)))}var y="details_b_Ee";function b(e){var t=Object.assign({},e);return o().createElement(k,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",y,t.className)}))}},41215:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"IdpStorage",title:"IdpStorage",sidebar_label:"IdpStorage"},p=void 0,u={unversionedId:"framework-api/enum/IdpStorage",id:"framework-api/enum/IdpStorage",title:"IdpStorage",description:"Properties",source:"@site/docs/framework-api/enum/IdpStorage.md",sourceDirName:"framework-api/enum",slug:"/framework-api/enum/IdpStorage",permalink:"/docs/framework-api/enum/IdpStorage",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/enum/IdpStorage.md",tags:[],version:"current",frontMatter:{id:"IdpStorage",title:"IdpStorage",sidebar_label:"IdpStorage"},sidebar:"someSidebar",previous:{title:"IdpResponseType",permalink:"/docs/framework-api/enum/IdpResponseType"},next:{title:"IdpType",permalink:"/docs/framework-api/enum/IdpType"}},c={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cookie")),(0,o.kt)("td",{parentName:"tr",align:null},"cookie"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LocalStorage")),(0,o.kt)("td",{parentName:"tr",align:null},"localStorage"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"memory"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"SessionStorage")),(0,o.kt)("td",{parentName:"tr",align:null},"sessionStorage"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);