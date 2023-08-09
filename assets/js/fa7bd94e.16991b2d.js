"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[8647],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o().createContext({}),l=function(e){var t=o().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return o().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return r?o().createElement(d,u(u({ref:t},c),{},{components:r})):o().createElement(d,u({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),u=r(63366),s=r(72389),c=r(86043),l="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,u.Z)(e,m),v=(0,s.Z)(),g=(0,o.useRef)(null),k=(0,c.u)({initialState:!b.open}),w=k.collapsed,O=k.setCollapsed,h=(0,o.useState)(b.open),E=h[0],P=h[1],j=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:g,open:E,"data-collapsed":w,className:(0,i.Z)(l,v&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),w?(O(!1),P(!0)):O(!0))}}),j,a().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),P(!e)}},a().createElement("div",{className:f},r)))}var v="details_b_Ee";function g(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",v,t.className)}))}},19316:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),u={id:"useQuery",title:"useQuery",sidebar_label:"useQuery"},s=void 0,c={unversionedId:"framework-api/functions/useQuery",id:"framework-api/functions/useQuery",title:"useQuery",description:"Properties",source:"@site/docs/framework-api/functions/useQuery.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useQuery",permalink:"/docs/framework-api/functions/useQuery",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useQuery.md",tags:[],version:"current",frontMatter:{id:"useQuery",title:"useQuery",sidebar_label:"useQuery"},sidebar:"someSidebar",previous:{title:"usePut",permalink:"/docs/framework-api/functions/usePut"},next:{title:"useReduxService",permalink:"/docs/framework-api/functions/useReduxService"}},l={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useQuery(): ParsedQuery<string>\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);