"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[84463],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a().createContext({}),c=function(e){var t=a().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a().createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||d[f]||l;return n?a().createElement(m,i(i({ref:t},p),{},{components:n})):a().createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),u=n(72389),p=n(86043),c="details_lb9f",s="isBrowser_bmU9",d="collapsibleContent_i85q",f=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,i.Z)(e,f),k=(0,u.Z)(),b=(0,a.useRef)(null),T=(0,p.u)({initialState:!y.open}),v=T.collapsed,h=T.setCollapsed,N=(0,a.useState)(y.open),w=N[0],O=N[1],P=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},y,{ref:b,open:w,"data-collapsed":v,className:(0,o.Z)(c,k&&s,y.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&g(t,b.current)&&(e.preventDefault(),v?(h(!1),O(!0)):h(!0))}}),P,l().createElement(p.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),O(!e)}},l().createElement("div",{className:d},n)))}var k="details_b_Ee";function b(e){var t=Object.assign({},e);return l().createElement(y,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},5483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(34673),i=["components"],u={id:"get",title:"get",sidebar_label:"get"},p=void 0,c={unversionedId:"framework-api/functions/get",id:"framework-api/functions/get",title:"get",description:"Properties",source:"@site/docs/framework-api/functions/get.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/get",permalink:"/docs/framework-api/functions/get",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/get.md",tags:[],version:"current",frontMatter:{id:"get",title:"get",sidebar_label:"get"},sidebar:"someSidebar",previous:{title:"generateUniqueId",permalink:"/docs/framework-api/functions/generateUniqueId"},next:{title:"getCookie",permalink:"/docs/framework-api/functions/getCookie"}},s={},d=[{value:"Properties",id:"properties",level:3}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"get<T>(content: T,property: undefined,defaultValue: T): T\nget<T,K>(content: undefined | null | T,property: K,defaultValue: Exclude<PathType<T, K>, undefined | null>): Exclude<PathType<T, K>, undefined | null>\nget<T,K>(content: undefined | null | T,property: K,defaultValue: PathType<T, K>): PathType<T, K>\nget<T,K>(content: null | T,property: K,defaultValue: PathType<T, K>): PathType<T, K> | undefined\nget<T,K>(content: null | T,property: K,defaultValue: null | PathType<T, K>): PathType<T, K> | null\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"property"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}m.isMDXComponent=!0}}]);