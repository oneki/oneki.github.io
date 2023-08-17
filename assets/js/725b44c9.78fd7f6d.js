"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[6832],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a().createElement(d,l(l({ref:t},s),{},{components:r})):a().createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,l.Z)(e,m),y=(0,u.Z)(),k=(0,a.useRef)(null),v=(0,s.u)({initialState:!b.open}),w=v.collapsed,O=v.setCollapsed,h=(0,a.useState)(b.open),N=h[0],S=h[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:k,open:N,"data-collapsed":w,className:(0,i.Z)(c,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,k.current)&&(e.preventDefault(),w?(O(!1),S(!0)):O(!0))}}),E,o().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),S(!e)}},o().createElement("div",{className:f},r)))}var y="details_b_Ee";function k(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}},16018:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(34673),l=["components"],u={id:"LogoutState",title:"LogoutState",sidebar_label:"LogoutState"},s=void 0,c={unversionedId:"framework-api/interfaces/LogoutState",id:"framework-api/interfaces/LogoutState",title:"LogoutState",description:"Properties",source:"@site/docs/framework-api/interfaces/LogoutState.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/LogoutState",permalink:"/docs/framework-api/interfaces/LogoutState",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/LogoutState.md",tags:[],version:"current",frontMatter:{id:"LogoutState",title:"LogoutState",sidebar_label:"LogoutState"},sidebar:"someSidebar",previous:{title:"LogoutOptions",permalink:"/docs/framework-api/interfaces/LogoutOptions"},next:{title:"MemoryRouterProps",permalink:"/docs/framework-api/interfaces/MemoryRouterProps"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"error"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/DefaultBasicError"},"default")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loading"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);