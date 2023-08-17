"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[60327],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a().createContext({}),u=function(e){var r=a().useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return a().createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a().createElement(a().Fragment,{},r)}},m=a().forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a().createElement(f,c(c({ref:r},s),{},{components:t})):a().createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,t)}m.displayName="MDXCreateElement"},34673:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(87462),a=t(67294),o=t.n(a),i=t(86010),c=t(63366),l=t(72389),s=t(86043),u="details_lb9f",p="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function b(e,r){return!!e&&(e===r||b(e.parentElement,r))}function v(e){var r=e.summary,t=e.children,v=(0,c.Z)(e,m),y=(0,l.Z)(),w=(0,a.useRef)(null),g=(0,s.u)({initialState:!v.open}),O=g.collapsed,k=g.setCollapsed,h=(0,a.useState)(v.open),E=h[0],j=h[1],P=o().isValidElement(r)?r:o().createElement("summary",null,null!=r?r:"Details");return o().createElement("details",(0,n.Z)({},v,{ref:w,open:E,"data-collapsed":O,className:(0,i.Z)(u,y&&p,v.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var r=e.target;f(r)&&b(r,w.current)&&(e.preventDefault(),O?(k(!1),j(!0)):k(!0))}}),P,o().createElement(s.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),j(!e)}},o().createElement("div",{className:d},t)))}var y="details_b_Ee";function w(e){var r=Object.assign({},e);return o().createElement(v,(0,n.Z)({},r,{className:(0,i.Z)("alert alert--info",y,r.className)}))}},41558:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(34673),["components"]),c={id:"combinedReducers",title:"combinedReducers",sidebar_label:"combinedReducers"},l=void 0,s={unversionedId:"framework-api/variables/combinedReducers",id:"framework-api/variables/combinedReducers",title:"combinedReducers",description:"Properties",source:"@site/docs/framework-api/variables/combinedReducers.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/combinedReducers",permalink:"/docs/framework-api/variables/combinedReducers",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/combinedReducers.md",tags:[],version:"current",frontMatter:{id:"combinedReducers",title:"combinedReducers",sidebar_label:"combinedReducers"},sidebar:"someSidebar",previous:{title:"collectionProxyHandler",permalink:"/docs/framework-api/variables/collectionProxyHandler"},next:{title:"create",permalink:"/docs/framework-api/variables/create"}},u={},p=[{value:"Properties",id:"properties",level:3}],d={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);