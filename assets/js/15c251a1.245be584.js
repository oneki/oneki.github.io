"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[82550],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a().createElement(d,l(l({ref:t},u),{},{components:n})):a().createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),s=n(72389),u=n(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,l.Z)(e,m),k=(0,s.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!y.open}),T=v.collapsed,w=v.setCollapsed,h=(0,a.useState)(y.open),O=h[0],N=h[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},y,{ref:g,open:O,"data-collapsed":T,className:(0,i.Z)(c,k&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,g.current)&&(e.preventDefault(),T?(w(!1),N(!0)):w(!0))}}),E,o().createElement(u.z,{lazy:!1,collapsed:T,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),N(!e)}},o().createElement("div",{className:f},n)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(y,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},91466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(34673),l=["components"],s={id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},u=void 0,c={unversionedId:"framework-api/functions/useTranslation",id:"framework-api/functions/useTranslation",title:"useTranslation",description:"Properties",source:"@site/docs/framework-api/functions/useTranslation.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useTranslation",permalink:"/docs/framework-api/functions/useTranslation",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useTranslation.md",tags:[],version:"current",frontMatter:{id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},sidebar:"someSidebar",previous:{title:"useThrottle",permalink:"/docs/framework-api/functions/useThrottle"},next:{title:"useTryAppContext",permalink:"/docs/framework-api/functions/useTryAppContext"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useTranslation(namespaces: string | string[]): \n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"namespaces"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," string[]"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);