"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[39794],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a().createContext({}),u=function(e){var t=a().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a().createElement(m,s(s({ref:t},c),{},{components:r})):a().createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),s=r(63366),l=r(72389),c=r(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,s.Z)(e,d),O=(0,l.Z)(),v=(0,a.useRef)(null),g=(0,c.u)({initialState:!b.open}),w=g.collapsed,k=g.setCollapsed,N=(0,a.useState)(b.open),h=N[0],P=N[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:v,open:h,"data-collapsed":w,className:(0,i.Z)(u,O&&p,b.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&y(t,v.current)&&(e.preventDefault(),w?(k(!1),P(!0)):k(!0))}}),E,o().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),P(!e)}},o().createElement("div",{className:f},r)))}var O="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",O,t.className)}))}},63909:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(34673),["components"]),s={id:"NestedKeyOf",title:"NestedKeyOf",sidebar_label:"NestedKeyOf"},l=void 0,c={unversionedId:"framework-api/types/NestedKeyOf",id:"framework-api/types/NestedKeyOf",title:"NestedKeyOf",description:"Properties",source:"@site/docs/framework-api/types/NestedKeyOf.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/NestedKeyOf",permalink:"/docs/framework-api/types/NestedKeyOf",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/NestedKeyOf.md",tags:[],version:"current",frontMatter:{id:"NestedKeyOf",title:"NestedKeyOf",sidebar_label:"NestedKeyOf"},sidebar:"someSidebar",previous:{title:"LogLevel",permalink:"/docs/framework-api/types/LogLevel"},next:{title:"ParamKeyValuePair",permalink:"/docs/framework-api/types/ParamKeyValuePair"}},u={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"))}d.isMDXComponent=!0}}]);