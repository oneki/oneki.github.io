"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[76590],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o().createContext({}),u=function(e){var t=o().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?o().createElement(d,l(l({ref:t},c),{},{components:r})):o().createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),l=r(63366),s=r(72389),c=r(86043),u="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,l.Z)(e,f),v=(0,s.Z)(),h=(0,o.useRef)(null),w=(0,c.u)({initialState:!y.open}),g=w.collapsed,O=w.setCollapsed,k=(0,o.useState)(y.open),E=k[0],F=k[1],j=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},y,{ref:h,open:E,"data-collapsed":g,className:(0,i.Z)(u,v&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,h.current)&&(e.preventDefault(),g?(O(!1),F(!0)):O(!0))}}),j,a().createElement(c.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),F(!e)}},a().createElement("div",{className:m},r)))}var v="details_b_Ee";function h(e){var t=Object.assign({},e);return a().createElement(y,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",v,t.className)}))}},51956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),l={id:"FormLabelWidth",title:"FormLabelWidth",sidebar_label:"FormLabelWidth"},s=void 0,c={unversionedId:"framework-api/types/FormLabelWidth",id:"framework-api/types/FormLabelWidth",title:"FormLabelWidth",description:"Properties",source:"@site/docs/framework-api/types/FormLabelWidth.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/FormLabelWidth",permalink:"/docs/framework-api/types/FormLabelWidth",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/FormLabelWidth.md",tags:[],version:"current",frontMatter:{id:"FormLabelWidth",title:"FormLabelWidth",sidebar_label:"FormLabelWidth"},sidebar:"someSidebar",previous:{title:"FormFieldProps",permalink:"/docs/framework-api/types/FormFieldProps"},next:{title:"FormLayout",permalink:"/docs/framework-api/types/FormLayout"}},u={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}f.isMDXComponent=!0}}]);