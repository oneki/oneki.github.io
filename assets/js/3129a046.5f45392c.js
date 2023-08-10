"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[9933],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return r?a().createElement(m,l(l({ref:t},s),{},{components:r})):a().createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),a=r(67294),i=r.n(a),o=r(86010),l=r(63366),c=r(72389),s=r(86043),p="details_lb9f",u="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function v(e){var t=e.summary,r=e.children,v=(0,l.Z)(e,d),y=(0,c.Z)(),h=(0,a.useRef)(null),w=(0,s.u)({initialState:!v.open}),g=w.collapsed,k=w.setCollapsed,O=(0,a.useState)(v.open),E=O[0],j=O[1],P=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},v,{ref:h,open:E,"data-collapsed":g,className:(0,o.Z)(p,y&&u,v.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&b(t,h.current)&&(e.preventDefault(),g?(k(!1),j(!0)):k(!0))}}),P,i().createElement(s.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),j(!e)}},i().createElement("div",{className:f},r)))}var y="details_b_Ee";function h(e){var t=Object.assign({},e);return i().createElement(v,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",y,t.className)}))}},38537:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(34673),["components"]),l={id:"dispatch",title:"dispatch",sidebar_label:"dispatch"},c=void 0,s={unversionedId:"framework-api/variables/dispatch",id:"framework-api/variables/dispatch",title:"dispatch",description:"Properties",source:"@site/docs/framework-api/variables/dispatch.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/dispatch",permalink:"/docs/framework-api/variables/dispatch",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/dispatch.md",tags:[],version:"current",frontMatter:{id:"dispatch",title:"dispatch",sidebar_label:"dispatch"},sidebar:"someSidebar",previous:{title:"defaultValidation",permalink:"/docs/framework-api/variables/defaultValidation"},next:{title:"eventLocks",permalink:"/docs/framework-api/variables/eventLocks"}},p={},u=[{value:"Properties",id:"properties",level:3}],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"This element is often used without passing props"))}d.isMDXComponent=!0}}]);