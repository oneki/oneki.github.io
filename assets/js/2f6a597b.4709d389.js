"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[6741],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a().createContext({}),c=function(t){var e=a().useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a().createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},d=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a().createElement(f,l(l({ref:e},s),{},{components:n})):a().createElement(f,l({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),u=n(72389),s=n(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(t){return!!t&&("SUMMARY"===t.tagName||f(t.parentElement))}function k(t,e){return!!t&&(t===e||k(t.parentElement,e))}function P(t){var e=t.summary,n=t.children,P=(0,l.Z)(t,d),b=(0,u.Z)(),h=(0,a.useRef)(null),y=(0,s.u)({initialState:!P.open}),g=y.collapsed,N=y.setCollapsed,v=(0,a.useState)(P.open),w=v[0],O=v[1],E=o().isValidElement(e)?e:o().createElement("summary",null,null!=e?e:"Details");return o().createElement("details",(0,r.Z)({},P,{ref:h,open:w,"data-collapsed":g,className:(0,i.Z)(c,b&&p,P.className),onMouseDown:function(t){f(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;f(e)&&k(e,h.current)&&(t.preventDefault(),g?(N(!1),O(!0)):N(!0))}}),E,o().createElement(s.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){N(t),O(!t)}},o().createElement("div",{className:m},n)))}var b="details_b_Ee";function h(t){var e=Object.assign({},t);return o().createElement(P,(0,r.Z)({},e,{className:(0,i.Z)("alert alert--info",b,e.className)}))}},52169:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(34673),l=["components"],u={id:"usePostPutPatch",title:"usePostPutPatch",sidebar_label:"usePostPutPatch"},s=void 0,c={unversionedId:"framework-api/functions/usePostPutPatch",id:"framework-api/functions/usePostPutPatch",title:"usePostPutPatch",description:"Properties",source:"@site/docs/framework-api/functions/usePostPutPatch.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/usePostPutPatch",permalink:"/docs/framework-api/functions/usePostPutPatch",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/usePostPutPatch.md",tags:[],version:"current",frontMatter:{id:"usePostPutPatch",title:"usePostPutPatch",sidebar_label:"usePostPutPatch"},sidebar:"someSidebar",previous:{title:"usePost",permalink:"/docs/framework-api/functions/usePost"},next:{title:"usePut",permalink:"/docs/framework-api/functions/usePut"}},p={},m=[{value:"Properties",id:"properties",level:3}],d={toc:m};function f(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"usePostPutPatch<T>(url: string,method: FetchMethod,options: AppFetchOptions<T>): \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FetchMethod"},"FetchMethod")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppFetchOptions"},"AppFetchOptions"),"<T",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);