"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[50991],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),p=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return n?a().createElement(m,l(l({ref:t},u),{},{components:n})):a().createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),c=n(72389),u=n(86043),p="details_lb9f",s="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,l.Z)(e,d),k=(0,c.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!y.open}),w=v.collapsed,N=v.setCollapsed,O=(0,a.useState)(y.open),h=O[0],M=O[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},y,{ref:g,open:h,"data-collapsed":w,className:(0,i.Z)(p,k&&s,y.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&b(t,g.current)&&(e.preventDefault(),w?(N(!1),M(!0)):N(!0))}}),E,o().createElement(u.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),M(!e)}},o().createElement("div",{className:f},n)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(y,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},99791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(34673),["components"]),l={id:"GlobalModifierFunction",title:"GlobalModifierFunction",sidebar_label:"GlobalModifierFunction"},c=void 0,u={unversionedId:"framework-api/types/GlobalModifierFunction",id:"framework-api/types/GlobalModifierFunction",title:"GlobalModifierFunction",description:"Properties",source:"@site/docs/framework-api/types/GlobalModifierFunction.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/GlobalModifierFunction",permalink:"/docs/framework-api/types/GlobalModifierFunction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/GlobalModifierFunction.md",tags:[],version:"current",frontMatter:{id:"GlobalModifierFunction",title:"GlobalModifierFunction",sidebar_label:"GlobalModifierFunction"},sidebar:"someSidebar",previous:{title:"FormWarningCallback",permalink:"/docs/framework-api/types/FormWarningCallback"},next:{title:"GlobalSelectorFunction",permalink:"/docs/framework-api/types/GlobalSelectorFunction"}},p={},s=[{value:"Properties",id:"properties",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"__type(key: string,value: unknown): void\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"key")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"unknown"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);