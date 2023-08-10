"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[16281],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return r?a().createElement(d,o(o({ref:t},s),{},{components:r})):a().createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(67294),i=r.n(a),l=r(86010),o=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,o.Z)(e,m),k=(0,u.Z)(),v=(0,a.useRef)(null),g=(0,s.u)({initialState:!b.open}),w=g.collapsed,O=g.setCollapsed,h=(0,a.useState)(b.open),N=h[0],V=h[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},b,{ref:v,open:N,"data-collapsed":w,className:(0,l.Z)(c,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),w?(O(!1),V(!0)):O(!0))}}),E,i().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),V(!e)}},i().createElement("div",{className:f},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return i().createElement(b,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},17021:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=(r(34673),["components"]),o={id:"serializeValue",title:"serializeValue",sidebar_label:"serializeValue"},u=void 0,s={unversionedId:"framework-api/functions/serializeValue",id:"framework-api/functions/serializeValue",title:"serializeValue",description:"Properties",source:"@site/docs/framework-api/functions/serializeValue.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/serializeValue",permalink:"/docs/framework-api/functions/serializeValue",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/serializeValue.md",tags:[],version:"current",frontMatter:{id:"serializeValue",title:"serializeValue",sidebar_label:"serializeValue"},sidebar:"someSidebar",previous:{title:"serializeSubFilter",permalink:"/docs/framework-api/functions/serializeSubFilter"},next:{title:"service",permalink:"/docs/framework-api/functions/service"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"serializeValue(value: QueryFilterCriteriaValue | QueryFilterCriteriaValue[]): string\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterCriteriaValue"},"QueryFilterCriteriaValue")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/types/QueryFilterCriteriaValue"},"QueryFilterCriteriaValue"),"[]"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);