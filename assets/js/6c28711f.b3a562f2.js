"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[71337],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a().createContext({}),s=function(e){var t=a().useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return r?a().createElement(f,o(o({ref:t},p),{},{components:r})):a().createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),l=r.n(a),i=r(86010),o=r(63366),u=r(72389),p=r(86043),s="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,o.Z)(e,d),b=(0,u.Z)(),g=(0,a.useRef)(null),N=(0,p.u)({initialState:!k.open}),v=N.collapsed,w=N.setCollapsed,h=(0,a.useState)(k.open),O=h[0],P=h[1],j=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},k,{ref:g,open:O,"data-collapsed":v,className:(0,i.Z)(s,b&&c,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&y(t,g.current)&&(e.preventDefault(),v?(w(!1),P(!0)):w(!0))}}),j,l().createElement(p.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),P(!e)}},l().createElement("div",{className:m},r)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(k,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",b,t.className)}))}},92983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(34673),o=["components"],u={id:"Query",title:"Query",sidebar_label:"Query"},p=void 0,s={unversionedId:"framework-api/interfaces/Query",id:"framework-api/interfaces/Query",title:"Query",description:"Properties",source:"@site/docs/framework-api/interfaces/Query.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/Query",permalink:"/docs/framework-api/interfaces/Query",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/Query.md",tags:[],version:"current",frontMatter:{id:"Query",title:"Query",sidebar_label:"Query"},sidebar:"someSidebar",previous:{title:"PathRouteProps",permalink:"/docs/framework-api/interfaces/PathRouteProps"},next:{title:"QueryFilter",permalink:"/docs/framework-api/interfaces/QueryFilter"}},c={},m=[{value:"Properties",id:"properties",level:3}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This element is often used without passing props"),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/QueryFilter"},"QueryFilter")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Primitive"},"Primitive")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QuerySortDir"},"QuerySortDir")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortBy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QuerySortBy"},"QuerySortBy"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);