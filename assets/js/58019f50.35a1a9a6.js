"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13060],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return K}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,K=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?a().createElement(K,i(i({ref:t},s),{},{components:r})):a().createElement(K,i({ref:t},s))}));function K(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),u=r(72389),s=r(86043),c="details_lb9f",m="isBrowser_bmU9",p="collapsibleContent_i85q",f=["summary","children"];function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function h(e){var t=e.summary,r=e.children,h=(0,i.Z)(e,f),k=(0,u.Z)(),b=(0,a.useRef)(null),y=(0,s.u)({initialState:!h.open}),g=y.collapsed,w=y.setCollapsed,F=(0,a.useState)(h.open),v=F[0],T=F[1],N=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},h,{ref:b,open:v,"data-collapsed":g,className:(0,l.Z)(c,k&&m,h.className),onMouseDown:function(e){K(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;K(t)&&d(t,b.current)&&(e.preventDefault(),g?(w(!1),T(!0)):w(!0))}}),N,o().createElement(s.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),T(!e)}},o().createElement("div",{className:p},r)))}var k="details_b_Ee";function b(e){var t=Object.assign({},e);return o().createElement(h,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},59266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"useFormWatcher",title:"useFormWatcher",sidebar_label:"useFormWatcher"},u=void 0,s={unversionedId:"framework-api/functions/useFormWatcher",id:"framework-api/functions/useFormWatcher",title:"useFormWatcher",description:"Properties",source:"@site/docs/framework-api/functions/useFormWatcher.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useFormWatcher",permalink:"/docs/framework-api/functions/useFormWatcher",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useFormWatcher.md",tags:[],version:"current",frontMatter:{id:"useFormWatcher",title:"useFormWatcher",sidebar_label:"useFormWatcher"},sidebar:"someSidebar",previous:{title:"useFormStatus",permalink:"/docs/framework-api/functions/useFormStatus"},next:{title:"useGet",permalink:"/docs/framework-api/functions/useGet"}},c={},m=[{value:"Properties",id:"properties",level:3}],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useFormWatcher<T,R,K>(form: default<T>,watch: K,listener: FormValueListener<PathType<T, K>, K>): R\nuseFormWatcher<T,R,K1,K2>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2>): R\nuseFormWatcher<T,R,K1,K2,K3>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3>): R\nuseFormWatcher<T,R,K1,K2,K3,K4>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5,K6>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5 | K6>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5,K6,K7>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5 | K6 | K7>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5,K6,K7,K8>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5,K6,K7,K8,K9>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9>): R\nuseFormWatcher<T,R,K1,K2,K3,K4,K5,K6,K7,K8,K9,K10>(form: default<T>,watch: ,listener: FormValueListener<, K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | K9 | K10>): R\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"form")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/FormService"},"default"),"<T",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"listener")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormValueListener"},"FormValueListener"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/PathType"},"PathType"),"<T, K",">",", K",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"watch")),(0,o.kt)("td",{parentName:"tr",align:null},"K"),(0,o.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);