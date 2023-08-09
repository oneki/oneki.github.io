"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[83244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),u=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||i;return n?a().createElement(d,c(c({ref:t},s),{},{components:n})):a().createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),c=n(63366),l=n(72389),s=n(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,c.Z)(e,m),k=(0,l.Z)(),v=(0,a.useRef)(null),g=(0,s.u)({initialState:!b.open}),O=g.collapsed,w=g.setCollapsed,h=(0,a.useState)(b.open),N=h[0],A=h[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,r.Z)({},b,{ref:v,open:N,"data-collapsed":O,className:(0,o.Z)(u,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),O?(w(!1),A(!0)):w(!0))}}),E,i().createElement(s.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),A(!e)}},i().createElement("div",{className:f},n)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return i().createElement(b,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},91098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(34673),["components"]),c={id:"isAsyncFunction",title:"isAsyncFunction",sidebar_label:"isAsyncFunction"},l=void 0,s={unversionedId:"framework-api/functions/isAsyncFunction",id:"framework-api/functions/isAsyncFunction",title:"isAsyncFunction",description:"Properties",source:"@site/docs/framework-api/functions/isAsyncFunction.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/isAsyncFunction",permalink:"/docs/framework-api/functions/isAsyncFunction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/isAsyncFunction.md",tags:[],version:"current",frontMatter:{id:"isAsyncFunction",title:"isAsyncFunction",sidebar_label:"isAsyncFunction"},sidebar:"someSidebar",previous:{title:"isAbsoluteUrl",permalink:"/docs/framework-api/functions/isAbsoluteUrl"},next:{title:"isAsyncOrPromise",permalink:"/docs/framework-api/functions/isAsyncOrPromise"}},u={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"isAsyncFunction(value: any): boolean\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);