"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[98895],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),s=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||i;return r?a().createElement(d,l(l({ref:t},u),{},{components:r})):a().createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(87462),a=r(67294),i=r.n(a),o=r(86010),l=r(63366),c=r(72389),u=r(86043),s="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function g(e){var t=e.summary,r=e.children,g=(0,l.Z)(e,f),k=(0,c.Z)(),y=(0,a.useRef)(null),v=(0,u.u)({initialState:!g.open}),E=v.collapsed,w=v.setCollapsed,N=(0,a.useState)(g.open),O=N[0],h=N[1],j=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},g,{ref:y,open:O,"data-collapsed":E,className:(0,o.Z)(s,k&&p,g.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,y.current)&&(e.preventDefault(),E?(w(!1),h(!0)):w(!0))}}),j,i().createElement(u.z,{lazy:!1,collapsed:E,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),h(!e)}},i().createElement("div",{className:m},r)))}var k="details_b_Ee";function y(e){var t=Object.assign({},e);return i().createElement(g,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},1457:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(34673),["components"]),l={id:"trimEnd",title:"trimEnd",sidebar_label:"trimEnd"},c=void 0,u={unversionedId:"framework-api/functions/trimEnd",id:"framework-api/functions/trimEnd",title:"trimEnd",description:"Properties",source:"@site/docs/framework-api/functions/trimEnd.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/trimEnd",permalink:"/docs/framework-api/functions/trimEnd",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/trimEnd.md",tags:[],version:"current",frontMatter:{id:"trimEnd",title:"trimEnd",sidebar_label:"trimEnd"},sidebar:"someSidebar",previous:{title:"trim",permalink:"/docs/framework-api/functions/trim"},next:{title:"trimStart",permalink:"/docs/framework-api/functions/trimStart"}},s={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"trimEnd(string: string,charToRemove: string): string\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"charToRemove")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);