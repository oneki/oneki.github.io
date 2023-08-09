"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[97766],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o().createContext({}),u=function(e){var t=o().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||l;return r?o().createElement(d,a(a({ref:t},s),{},{components:r})):o().createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),o=r(67294),l=r.n(o),i=r(86010),a=r(63366),c=r(72389),s=r(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,a.Z)(e,m),v=(0,c.Z)(),h=(0,o.useRef)(null),w=(0,s.u)({initialState:!b.open}),g=w.collapsed,C=w.setCollapsed,O=(0,o.useState)(b.open),k=O[0],E=O[1],j=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},b,{ref:h,open:k,"data-collapsed":g,className:(0,i.Z)(u,v&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,h.current)&&(e.preventDefault(),g?(C(!1),E(!0)):C(!0))}}),j,l().createElement(s.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){C(e),E(!e)}},l().createElement("div",{className:f},r)))}var v="details_b_Ee";function h(e){var t=Object.assign({},e);return l().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",v,t.className)}))}},30082:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),i=(r(34673),["components"]),a={id:"CollectionFetcherResult",title:"CollectionFetcherResult",sidebar_label:"CollectionFetcherResult"},c=void 0,s={unversionedId:"framework-api/types/CollectionFetcherResult",id:"framework-api/types/CollectionFetcherResult",title:"CollectionFetcherResult",description:"Properties",source:"@site/docs/framework-api/types/CollectionFetcherResult.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/CollectionFetcherResult",permalink:"/docs/framework-api/types/CollectionFetcherResult",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/CollectionFetcherResult.md",tags:[],version:"current",frontMatter:{id:"CollectionFetcherResult",title:"CollectionFetcherResult",sidebar_label:"CollectionFetcherResult"},sidebar:"someSidebar",previous:{title:"CollectionFetcher",permalink:"/docs/framework-api/types/CollectionFetcher"},next:{title:"CollectionItemAdapter",permalink:"/docs/framework-api/types/CollectionItemAdapter"}},u={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);