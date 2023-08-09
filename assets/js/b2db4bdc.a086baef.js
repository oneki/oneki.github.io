"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[80730],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),s=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?a().createElement(d,i(i({ref:t},u),{},{components:r})):a().createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),c=r(72389),u=r(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,i.Z)(e,m),k=(0,c.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!b.open}),P=v.collapsed,O=v.setCollapsed,w=(0,a.useState)(b.open),h=w[0],N=w[1],j=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:g,open:h,"data-collapsed":P,className:(0,l.Z)(s,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),P?(O(!1),N(!0)):O(!0))}}),j,o().createElement(u.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),N(!e)}},o().createElement("div",{className:f},r)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},54602:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"fromPayload",title:"fromPayload",sidebar_label:"fromPayload"},c=void 0,u={unversionedId:"framework-api/functions/fromPayload",id:"framework-api/functions/fromPayload",title:"fromPayload",description:"Properties",source:"@site/docs/framework-api/functions/fromPayload.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/fromPayload",permalink:"/docs/framework-api/functions/fromPayload",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/fromPayload.md",tags:[],version:"current",frontMatter:{id:"fromPayload",title:"fromPayload",sidebar_label:"fromPayload"},sidebar:"someSidebar",previous:{title:"formatSortBy",permalink:"/docs/framework-api/functions/formatSortBy"},next:{title:"generateCodeChallenge",permalink:"/docs/framework-api/functions/generateCodeChallenge"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"fromPayload(payload: AnonymousObject<any>): any[]\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"payload")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);