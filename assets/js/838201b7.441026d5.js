"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[58854],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a().createContext({}),s=function(e){var r=a().useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return a().createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a().createElement(a().Fragment,{},r)}},d=a().forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return t?a().createElement(m,l(l({ref:r},u),{},{components:t})):a().createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,t)}d.displayName="MDXCreateElement"},34673:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(87462),a=t(67294),i=t.n(a),o=t(86010),l=t(63366),c=t(72389),u=t(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function b(e,r){return!!e&&(e===r||b(e.parentElement,r))}function v(e){var r=e.summary,t=e.children,v=(0,l.Z)(e,d),y=(0,c.Z)(),w=(0,a.useRef)(null),g=(0,u.u)({initialState:!v.open}),O=g.collapsed,k=g.setCollapsed,h=(0,a.useState)(v.open),E=h[0],j=h[1],P=i().isValidElement(r)?r:i().createElement("summary",null,null!=r?r:"Details");return i().createElement("details",(0,n.Z)({},v,{ref:w,open:E,"data-collapsed":O,className:(0,o.Z)(s,y&&p,v.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var r=e.target;m(r)&&b(r,w.current)&&(e.preventDefault(),O?(k(!1),j(!0)):k(!0))}}),P,i().createElement(u.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),j(!e)}},i().createElement("div",{className:f},t)))}var y="details_b_Ee";function w(e){var r=Object.assign({},e);return i().createElement(v,(0,n.Z)({},r,{className:(0,o.Z)("alert alert--info",y,r.className)}))}},91032:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=(t(34673),["components"]),l={id:"inReducer",title:"inReducer",sidebar_label:"inReducer"},c=void 0,u={unversionedId:"framework-api/variables/inReducer",id:"framework-api/variables/inReducer",title:"inReducer",description:"Properties",source:"@site/docs/framework-api/variables/inReducer.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/inReducer",permalink:"/docs/framework-api/variables/inReducer",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/inReducer.md",tags:[],version:"current",frontMatter:{id:"inReducer",title:"inReducer",sidebar_label:"inReducer"},sidebar:"someSidebar",previous:{title:"handler",permalink:"/docs/framework-api/variables/handler"},next:{title:"indexedLocalesSymbol",permalink:"/docs/framework-api/variables/indexedLocalesSymbol"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"This element is often used without passing props"))}d.isMDXComponent=!0}}]);