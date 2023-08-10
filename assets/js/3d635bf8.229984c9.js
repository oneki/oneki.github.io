"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[15724],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(67294),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i().createContext({}),s=function(e){var r=i().useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return i().createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i().createElement(i().Fragment,{},r)}},m=i().forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,y=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return t?i().createElement(y,l(l({ref:r},c),{},{components:t})):i().createElement(y,l({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i().createElement.apply(null,o)}return i().createElement.apply(null,t)}m.displayName="MDXCreateElement"},34673:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(87462),i=t(67294),a=t.n(i),o=t(86010),l=t(63366),u=t(72389),c=t(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function y(e){return!!e&&("SUMMARY"===e.tagName||y(e.parentElement))}function d(e,r){return!!e&&(e===r||d(e.parentElement,r))}function b(e){var r=e.summary,t=e.children,b=(0,l.Z)(e,m),v=(0,u.Z)(),w=(0,i.useRef)(null),O=(0,c.u)({initialState:!b.open}),g=O.collapsed,k=O.setCollapsed,C=(0,i.useState)(b.open),h=C[0],E=C[1],j=a().isValidElement(r)?r:a().createElement("summary",null,null!=r?r:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:w,open:h,"data-collapsed":g,className:(0,o.Z)(s,v&&p,b.className),onMouseDown:function(e){y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var r=e.target;y(r)&&d(r,w.current)&&(e.preventDefault(),g?(k(!1),E(!0)):k(!0))}}),j,a().createElement(c.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),E(!e)}},a().createElement("div",{className:f},t)))}var v="details_b_Ee";function w(e){var r=Object.assign({},e);return a().createElement(b,(0,n.Z)({},r,{className:(0,o.Z)("alert alert--info",v,r.className)}))}},34370:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=(t(34673),["components"]),l={id:"QueryFilterCriteriaValue",title:"QueryFilterCriteriaValue",sidebar_label:"QueryFilterCriteriaValue"},u=void 0,c={unversionedId:"framework-api/types/QueryFilterCriteriaValue",id:"framework-api/types/QueryFilterCriteriaValue",title:"QueryFilterCriteriaValue",description:"Properties",source:"@site/docs/framework-api/types/QueryFilterCriteriaValue.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/QueryFilterCriteriaValue",permalink:"/docs/framework-api/types/QueryFilterCriteriaValue",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/QueryFilterCriteriaValue.md",tags:[],version:"current",frontMatter:{id:"QueryFilterCriteriaValue",title:"QueryFilterCriteriaValue",sidebar_label:"QueryFilterCriteriaValue"},sidebar:"someSidebar",previous:{title:"QueryFilterCriteriaOperator",permalink:"/docs/framework-api/types/QueryFilterCriteriaOperator"},next:{title:"QueryFilterId",permalink:"/docs/framework-api/types/QueryFilterId"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);