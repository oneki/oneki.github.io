"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[91259],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a().createElement(d,l(l({ref:t},s),{},{components:r})):a().createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,l.Z)(e,m),k=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,s.u)({initialState:!b.open}),O=v.collapsed,w=v.setCollapsed,h=(0,a.useState)(b.open),N=h[0],j=h[1],P=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:g,open:N,"data-collapsed":O,className:(0,i.Z)(c,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),O?(w(!1),j(!0)):w(!0))}}),P,o().createElement(s.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),j(!e)}},o().createElement("div",{className:f},r)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},53901:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(34673),["components"]),l={id:"parseQuery",title:"parseQuery",sidebar_label:"parseQuery"},u=void 0,s={unversionedId:"framework-api/functions/parseQuery",id:"framework-api/functions/parseQuery",title:"parseQuery",description:"Properties",source:"@site/docs/framework-api/functions/parseQuery.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/parseQuery",permalink:"/docs/framework-api/functions/parseQuery",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/parseQuery.md",tags:[],version:"current",frontMatter:{id:"parseQuery",title:"parseQuery",sidebar_label:"parseQuery"},sidebar:"someSidebar",previous:{title:"parsePath",permalink:"/docs/framework-api/functions/parsePath"},next:{title:"parseQueryFilter",permalink:"/docs/framework-api/functions/parseQueryFilter"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"parseQuery(query: URLSearchParams | AnonymousObject<any>): Query\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"query")),(0,o.kt)("td",{parentName:"tr",align:null},"URLSearchParams ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);