"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[69516],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var n=r(67294),a=r.n(n);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a().createContext({}),p=function(t){var e=a().useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return a().createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},c=a().forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return r?a().createElement(k,o(o({ref:e},s),{},{components:r})):a().createElement(k,o({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}c.displayName="MDXCreateElement"},34673:function(t,e,r){r.d(e,{Z:function(){return y}});var n=r(87462),a=r(67294),l=r.n(a),i=r(86010),o=r(63366),d=r(72389),s=r(86043),p="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",c=["summary","children"];function k(t){return!!t&&("SUMMARY"===t.tagName||k(t.parentElement))}function g(t,e){return!!t&&(t===e||g(t.parentElement,e))}function N(t){var e=t.summary,r=t.children,N=(0,o.Z)(t,c),b=(0,d.Z)(),y=(0,a.useRef)(null),f=(0,s.u)({initialState:!N.open}),v=f.collapsed,C=f.setCollapsed,I=(0,a.useState)(N.open),O=I[0],S=I[1],h=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,n.Z)({},N,{ref:y,open:O,"data-collapsed":v,className:(0,i.Z)(p,b&&u,N.className),onMouseDown:function(t){k(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;k(e)&&g(e,y.current)&&(t.preventDefault(),v?(C(!1),S(!0)):C(!0))}}),h,l().createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){C(t),S(!t)}},l().createElement("div",{className:m},r)))}var b="details_b_Ee";function y(t){var e=Object.assign({},t);return l().createElement(N,(0,n.Z)({},e,{className:(0,i.Z)("alert alert--info",b,e.className)}))}},67429:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=(r(34673),["components"]),o={id:"CollectionBroker",title:"CollectionBroker",sidebar_label:"CollectionBroker"},d=void 0,s={unversionedId:"framework-api/types/CollectionBroker",id:"framework-api/types/CollectionBroker",title:"CollectionBroker",description:"Properties",source:"@site/docs/framework-api/types/CollectionBroker.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/CollectionBroker",permalink:"/docs/framework-api/types/CollectionBroker",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/CollectionBroker.md",tags:[],version:"current",frontMatter:{id:"CollectionBroker",title:"CollectionBroker",sidebar_label:"CollectionBroker"},sidebar:"someSidebar",previous:{title:"Collection",permalink:"/docs/framework-api/types/Collection"},next:{title:"CollectionBy",permalink:"/docs/framework-api/types/CollectionBy"}},p={},u=[{value:"Properties",id:"properties",level:3}],m={toc:u};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"addFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"addFilter(filterOrCriteria: QueryFilterOrCriteria,parentFilterId: QueryFilterId,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"addFilterCriteria")),(0,l.kt)("td",{parentName:"tr",align:null},"addFilterCriteria(field: string,operator: QueryFilterCriteriaOperator,value: QueryFilterCriteriaValue ","|"," QueryFilterCriteriaValue[],not: boolean,id: QueryFilterId,parentFilterId: QueryFilterId,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"addSortBy")),(0,l.kt)("td",{parentName:"tr",align:null},"addSortBy(sortBy: QuerySortBy,prepend: boolean): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"addSubscriber")),(0,l.kt)("td",{parentName:"tr",align:null},"addSubscriber(id: string,subscriber: C): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearFields")),(0,l.kt)("td",{parentName:"tr",align:null},"clearFields(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"clearFilter(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearParam")),(0,l.kt)("td",{parentName:"tr",align:null},"clearParam(key: string,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearParams")),(0,l.kt)("td",{parentName:"tr",align:null},"clearParams(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearSearch")),(0,l.kt)("td",{parentName:"tr",align:null},"clearSearch(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearSort")),(0,l.kt)("td",{parentName:"tr",align:null},"clearSort(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clearSortBy")),(0,l.kt)("td",{parentName:"tr",align:null},"clearSortBy(subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"filter")),(0,l.kt)("td",{parentName:"tr",align:null},"filter(filter: null ","|"," QueryFilter ","|"," QueryFilterCriteria ","|"," QueryFilterOrCriteria[],subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getInitialDataSource")),(0,l.kt)("td",{parentName:"tr",align:null},"getInitialDataSource(subscriberId: string): undefined ","|"," string ","|"," T[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getInitialQuery")),(0,l.kt)("td",{parentName:"tr",align:null},"getInitialQuery(subscriberId: string): Query"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"removeFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"removeFilter(filterId: QueryFilterId,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"removeSortBy")),(0,l.kt)("td",{parentName:"tr",align:null},"removeSortBy(id: string,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"removeSubscriber")),(0,l.kt)("td",{parentName:"tr",align:null},"removeSubscriber(id: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"search")),(0,l.kt)("td",{parentName:"tr",align:null},"search(search: Primitive,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setData")),(0,l.kt)("td",{parentName:"tr",align:null},"setData(data: T[],query: Query,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setFields")),(0,l.kt)("td",{parentName:"tr",align:null},"setFields(fields: string[],subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setParam")),(0,l.kt)("td",{parentName:"tr",align:null},"setParam(key: string,value: any,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setParams")),(0,l.kt)("td",{parentName:"tr",align:null},"setParams(params: AnonymousObject<any",">",",subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setUrl")),(0,l.kt)("td",{parentName:"tr",align:null},"setUrl(url: string,query: Query,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sort")),(0,l.kt)("td",{parentName:"tr",align:null},"sort(dir: QuerySortDir,subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sortBy")),(0,l.kt)("td",{parentName:"tr",align:null},"sortBy(sortBy: string ","|"," QuerySortBy ","|"," QuerySortBy[],subscriberId: string): void"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);