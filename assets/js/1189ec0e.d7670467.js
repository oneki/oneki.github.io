"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[77421],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o().createContext({}),c=function(e){var t=o().useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o().createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return r?o().createElement(d,s(s({ref:t},l),{},{components:r})):o().createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o().createElement.apply(null,a)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(67294),i=r.n(o),a=r(86010),s=r(63366),u=r(72389),l=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,s.Z)(e,m),v=(0,u.Z)(),g=(0,o.useRef)(null),k=(0,l.u)({initialState:!b.open}),w=k.collapsed,O=k.setCollapsed,h=(0,o.useState)(b.open),E=h[0],j=h[1],P=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},b,{ref:g,open:E,"data-collapsed":w,className:(0,a.Z)(c,v&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),w?(O(!1),j(!0)):O(!0))}}),P,i().createElement(l.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),j(!e)}},i().createElement("div",{className:f},r)))}var v="details_b_Ee";function g(e){var t=Object.assign({},e);return i().createElement(b,(0,n.Z)({},t,{className:(0,a.Z)("alert alert--info",v,t.className)}))}},83483:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=(r(34673),["components"]),s={id:"useHistory",title:"useHistory",sidebar_label:"useHistory"},u=void 0,l={unversionedId:"framework-api/functions/useHistory",id:"framework-api/functions/useHistory",title:"useHistory",description:"Properties",source:"@site/docs/framework-api/functions/useHistory.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useHistory",permalink:"/docs/framework-api/functions/useHistory",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useHistory.md",tags:[],version:"current",frontMatter:{id:"useHistory",title:"useHistory",sidebar_label:"useHistory"},sidebar:"someSidebar",previous:{title:"useGlobalState",permalink:"/docs/framework-api/functions/useGlobalState"},next:{title:"useHref",permalink:"/docs/framework-api/functions/useHref"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"useHistory(): Location[]\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);