"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[48747],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o().createContext({}),l=function(e){var t=o().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,y=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?o().createElement(y,c(c({ref:t},u),{},{components:n})):o().createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o().createElement.apply(null,i)}return o().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),o=n(67294),a=n.n(o),i=n(86010),c=n(63366),s=n(72389),u=n(86043),l="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function y(e){return!!e&&("SUMMARY"===e.tagName||y(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,c.Z)(e,f),O=(0,s.Z)(),v=(0,o.useRef)(null),h=(0,u.u)({initialState:!b.open}),j=h.collapsed,w=h.setCollapsed,P=(0,o.useState)(b.open),g=P[0],k=P[1],E=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,r.Z)({},b,{ref:v,open:g,"data-collapsed":j,className:(0,i.Z)(l,O&&p,b.className),onMouseDown:function(e){y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;y(t)&&d(t,v.current)&&(e.preventDefault(),j?(w(!1),k(!0)):w(!0))}}),E,a().createElement(u.z,{lazy:!1,collapsed:j,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),k(!e)}},a().createElement("div",{className:m},n)))}var O="details_b_Ee";function v(e){var t=Object.assign({},e);return a().createElement(b,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",O,t.className)}))}},40339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(34673),["components"]),c={id:"AnonymousPathObject",title:"AnonymousPathObject",sidebar_label:"AnonymousPathObject"},s=void 0,u={unversionedId:"framework-api/types/AnonymousPathObject",id:"framework-api/types/AnonymousPathObject",title:"AnonymousPathObject",description:"Properties",source:"@site/docs/framework-api/types/AnonymousPathObject.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/AnonymousPathObject",permalink:"/docs/framework-api/types/AnonymousPathObject",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/AnonymousPathObject.md",tags:[],version:"current",frontMatter:{id:"AnonymousPathObject",title:"AnonymousPathObject",sidebar_label:"AnonymousPathObject"},sidebar:"someSidebar",previous:{title:"AnonymousKeyObject",permalink:"/docs/framework-api/types/AnonymousKeyObject"},next:{title:"AnyFunction",permalink:"/docs/framework-api/types/AnyFunction"}},l={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}f.isMDXComponent=!0}}]);