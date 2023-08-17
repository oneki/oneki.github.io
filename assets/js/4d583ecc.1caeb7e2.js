"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[83104],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a().createContext({}),s=function(e){var t=a().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return r?a().createElement(d,o(o({ref:t},c),{},{components:r})):a().createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),a=r(67294),i=r.n(a),l=r(86010),o=r(63366),u=r(72389),c=r(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function g(e){var t=e.summary,r=e.children,g=(0,o.Z)(e,m),b=(0,u.Z)(),k=(0,a.useRef)(null),v=(0,c.u)({initialState:!g.open}),C=v.collapsed,O=v.setCollapsed,w=(0,a.useState)(g.open),h=w[0],N=w[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},g,{ref:k,open:h,"data-collapsed":C,className:(0,l.Z)(s,b&&p,g.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,k.current)&&(e.preventDefault(),C?(O(!1),N(!0)):O(!0))}}),E,i().createElement(c.z,{lazy:!1,collapsed:C,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),N(!e)}},i().createElement("div",{className:f},r)))}var b="details_b_Ee";function k(e){var t=Object.assign({},e);return i().createElement(g,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},55318:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=(r(34673),["components"]),o={id:"getQueryFilterCriteriaValue",title:"getQueryFilterCriteriaValue",sidebar_label:"getQueryFilterCriteriaValue"},u=void 0,c={unversionedId:"framework-api/functions/getQueryFilterCriteriaValue",id:"framework-api/functions/getQueryFilterCriteriaValue",title:"getQueryFilterCriteriaValue",description:"Properties",source:"@site/docs/framework-api/functions/getQueryFilterCriteriaValue.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/getQueryFilterCriteriaValue",permalink:"/docs/framework-api/functions/getQueryFilterCriteriaValue",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/getQueryFilterCriteriaValue.md",tags:[],version:"current",frontMatter:{id:"getQueryFilterCriteriaValue",title:"getQueryFilterCriteriaValue",sidebar_label:"getQueryFilterCriteriaValue"},sidebar:"someSidebar",previous:{title:"getQueryFilterCriteria",permalink:"/docs/framework-api/functions/getQueryFilterCriteria"},next:{title:"getQueryFilterOrCriterias",permalink:"/docs/framework-api/functions/getQueryFilterOrCriterias"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"getQueryFilterCriteriaValue(value: string): QueryFilterCriteriaValue\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);