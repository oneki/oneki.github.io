"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[11046],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,y=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return r?a().createElement(y,i(i({ref:t},u),{},{components:r})):a().createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),p=r(72389),u=r(86043),c="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function y(e){return!!e&&("SUMMARY"===e.tagName||y(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,i.Z)(e,f),b=(0,p.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!k.open}),N=v.collapsed,S=v.setCollapsed,w=(0,a.useState)(k.open),O=w[0],h=w[1],j=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},k,{ref:g,open:O,"data-collapsed":N,className:(0,l.Z)(c,b&&s,k.className),onMouseDown:function(e){y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;y(t)&&d(t,g.current)&&(e.preventDefault(),N?(S(!1),h(!0)):S(!0))}}),j,o().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){S(e),h(!e)}},o().createElement("div",{className:m},r)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(k,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},13385:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"applySortBy",title:"applySortBy",sidebar_label:"applySortBy"},p=void 0,u={unversionedId:"framework-api/functions/applySortBy",id:"framework-api/functions/applySortBy",title:"applySortBy",description:"Properties",source:"@site/docs/framework-api/functions/applySortBy.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/applySortBy",permalink:"/docs/framework-api/functions/applySortBy",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/applySortBy.md",tags:[],version:"current",frontMatter:{id:"applySortBy",title:"applySortBy",sidebar_label:"applySortBy"},sidebar:"someSidebar",previous:{title:"applySort",permalink:"/docs/framework-api/functions/applySort"},next:{title:"asReducer",permalink:"/docs/framework-api/functions/asReducer"}},c={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"applySortBy<T,I>(items: I[],sortBy: QuerySortBy[],comparators: AnonymousObject<QuerySortComparator<T>>): I[]\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"comparators")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QuerySortComparator"},"QuerySortComparator"),"<T",">",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"items")),(0,o.kt)("td",{parentName:"tr",align:null},"I[]"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"sortBy")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QuerySortBy"},"QuerySortBy"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);