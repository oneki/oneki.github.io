"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[78115],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o().createContext({}),s=function(e){var t=o().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return o().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?o().createElement(d,u(u({ref:t},c),{},{components:r})):o().createElement(d,u({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),u=r(63366),l=r(72389),c=r(86043),s="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,u.Z)(e,f),v=(0,l.Z)(),k=(0,o.useRef)(null),g=(0,c.u)({initialState:!b.open}),w=g.collapsed,O=g.setCollapsed,R=(0,o.useState)(b.open),h=R[0],M=R[1],E=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:k,open:h,"data-collapsed":w,className:(0,i.Z)(s,v&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,k.current)&&(e.preventDefault(),w?(O(!1),M(!0)):O(!0))}}),E,a().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),M(!e)}},a().createElement("div",{className:m},r)))}var v="details_b_Ee";function k(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",v,t.className)}))}},12417:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),u={id:"MemoryRouter",title:"MemoryRouter",sidebar_label:"MemoryRouter"},l=void 0,c={unversionedId:"framework-api/functions/MemoryRouter",id:"framework-api/functions/MemoryRouter",title:"MemoryRouter",description:"A  that stores all entries in memory.",source:"@site/docs/framework-api/functions/MemoryRouter.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/MemoryRouter",permalink:"/docs/framework-api/functions/MemoryRouter",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/MemoryRouter.md",tags:[],version:"current",frontMatter:{id:"MemoryRouter",title:"MemoryRouter",sidebar_label:"MemoryRouter"},sidebar:"someSidebar",previous:{title:"Link",permalink:"/docs/framework-api/functions/Link"},next:{title:"NativeReactDomRouter",permalink:"/docs/framework-api/functions/NativeReactDomRouter"}},s={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"MemoryRouter(__namedParameters: MemoryRouterProps): React.ReactElement\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"A <Router",">"," that stores all entries in memory."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}f.isMDXComponent=!0}}]);