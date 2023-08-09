"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[67961],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||l;return r?a().createElement(d,o(o({ref:t},u),{},{components:r})):a().createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),l=r.n(a),i=r(86010),o=r(63366),p=r(72389),u=r(86043),c="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,o.Z)(e,f),b=(0,p.Z)(),g=(0,a.useRef)(null),O=(0,u.u)({initialState:!k.open}),N=O.collapsed,v=O.setCollapsed,h=(0,a.useState)(k.open),w=h[0],C=h[1],E=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},k,{ref:g,open:w,"data-collapsed":N,className:(0,i.Z)(c,b&&s,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),N?(v(!1),C(!0)):v(!0))}}),E,l().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){v(e),C(!e)}},l().createElement("div",{className:m},r)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(k,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",b,t.className)}))}},92850:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(34673),o=["components"],p={id:"applyOperator",title:"applyOperator",sidebar_label:"applyOperator"},u=void 0,c={unversionedId:"framework-api/functions/applyOperator",id:"framework-api/functions/applyOperator",title:"applyOperator",description:"Properties",source:"@site/docs/framework-api/functions/applyOperator.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/applyOperator",permalink:"/docs/framework-api/functions/applyOperator",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/applyOperator.md",tags:[],version:"current",frontMatter:{id:"applyOperator",title:"applyOperator",sidebar_label:"applyOperator"},sidebar:"someSidebar",previous:{title:"applyMixins",permalink:"/docs/framework-api/functions/applyMixins"},next:{title:"applySearch",permalink:"/docs/framework-api/functions/applySearch"}},s={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"applyOperator(operator: QueryFilterCriteriaOperator,left: any,right: QueryFilterCriteriaValue | QueryFilterCriteriaValue[]): boolean\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"left")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterCriteriaOperator"},"QueryFilterCriteriaOperator")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"right"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterCriteriaValue"},"QueryFilterCriteriaValue")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterCriteriaValue"},"QueryFilterCriteriaValue"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);