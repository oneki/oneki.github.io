"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[29417],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i().createContext({}),c=function(e){var t=i().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return i().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i().createElement(i().Fragment,{},t)}},m=i().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return r?i().createElement(d,l(l({ref:t},s),{},{components:r})):i().createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i().createElement.apply(null,o)}return i().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),i=r(67294),a=r.n(i),o=r(86010),l=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,l.Z)(e,m),k=(0,u.Z)(),v=(0,i.useRef)(null),g=(0,s.u)({initialState:!b.open}),O=g.collapsed,w=g.setCollapsed,h=(0,i.useState)(b.open),N=h[0],F=h[1],Q=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:v,open:N,"data-collapsed":O,className:(0,o.Z)(c,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),O?(w(!1),F(!0)):w(!0))}}),Q,a().createElement(s.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),F(!e)}},a().createElement("div",{className:f},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},1451:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=(r(34673),["components"]),l={id:"isQueryFilter",title:"isQueryFilter",sidebar_label:"isQueryFilter"},u=void 0,s={unversionedId:"framework-api/functions/isQueryFilter",id:"framework-api/functions/isQueryFilter",title:"isQueryFilter",description:"Properties",source:"@site/docs/framework-api/functions/isQueryFilter.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/isQueryFilter",permalink:"/docs/framework-api/functions/isQueryFilter",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/isQueryFilter.md",tags:[],version:"current",frontMatter:{id:"isQueryFilter",title:"isQueryFilter",sidebar_label:"isQueryFilter"},sidebar:"someSidebar",previous:{title:"isPromise",permalink:"/docs/framework-api/functions/isPromise"},next:{title:"isQueryFilterCriteria",permalink:"/docs/framework-api/functions/isQueryFilterCriteria"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"isQueryFilter(value: QueryFilterOrCriteria | QueryFilterOrCriteria[]): \n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("font",{size:"2"},(0,a.kt)("i",null,"(Mandatory properties are in bold)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterOrCriteria"},"QueryFilterOrCriteria")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterOrCriteria"},"QueryFilterOrCriteria"),"[]"),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);