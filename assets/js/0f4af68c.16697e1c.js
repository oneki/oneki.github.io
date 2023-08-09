"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[52317],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a().createContext({}),u=function(e){var t=a().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||i;return r?a().createElement(d,l(l({ref:t},c),{},{components:r})):a().createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(67294),i=r.n(a),o=r(86010),l=r(63366),s=r(72389),c=r(86043),u="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,l.Z)(e,f),b=(0,s.Z)(),v=(0,a.useRef)(null),g=(0,c.u)({initialState:!k.open}),N=g.collapsed,w=g.setCollapsed,h=(0,a.useState)(k.open),O=h[0],P=h[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},k,{ref:v,open:O,"data-collapsed":N,className:(0,o.Z)(u,b&&p,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),N?(w(!1),P(!0)):w(!0))}}),E,i().createElement(c.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),P(!e)}},i().createElement("div",{className:m},r)))}var b="details_b_Ee";function v(e){var t=Object.assign({},e);return i().createElement(k,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",b,t.className)}))}},21177:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(34673),["components"]),l={id:"verify",title:"verify",sidebar_label:"verify"},s=void 0,c={unversionedId:"framework-api/functions/verify",id:"framework-api/functions/verify",title:"verify",description:"Properties",source:"@site/docs/framework-api/functions/verify.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/verify",permalink:"/docs/framework-api/functions/verify",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/verify.md",tags:[],version:"current",frontMatter:{id:"verify",title:"verify",sidebar_label:"verify"},sidebar:"someSidebar",previous:{title:"validateToken",permalink:"/docs/framework-api/functions/validateToken"},next:{title:"visitFilter",permalink:"/docs/framework-api/functions/visitFilter"}},u={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"verify(token: string,jwKey: JsonWebKey,alg: AesKeyAlgorithm | EcKeyImportParams | AlgorithmIdentifier | HmacImportParams | RsaHashedImportParams): Promise<boolean>\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"alg")),(0,i.kt)("td",{parentName:"tr",align:null},"AesKeyAlgorithm ","|"," EcKeyImportParams ","|"," AlgorithmIdentifier ","|"," HmacImportParams ","|"," RsaHashedImportParams"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"jwKey")),(0,i.kt)("td",{parentName:"tr",align:null},"JsonWebKey"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);