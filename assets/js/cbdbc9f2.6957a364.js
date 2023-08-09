"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51468],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a().createElement(d,l(l({ref:t},u),{},{components:r})):a().createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),s=r(72389),u=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,l.Z)(e,m),k=(0,s.Z)(),O=(0,a.useRef)(null),v=(0,u.u)({initialState:!y.open}),g=v.collapsed,P=v.setCollapsed,w=(0,a.useState)(y.open),h=w[0],E=w[1],N=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},y,{ref:O,open:h,"data-collapsed":g,className:(0,i.Z)(c,k&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,O.current)&&(e.preventDefault(),g?(P(!1),E(!0)):P(!0))}}),N,o().createElement(u.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){P(e),E(!e)}},o().createElement("div",{className:f},r)))}var k="details_b_Ee";function O(e){var t=Object.assign({},e);return o().createElement(y,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},53996:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(34673),l=["components"],s={id:"OutletProps",title:"OutletProps",sidebar_label:"OutletProps"},u=void 0,c={unversionedId:"framework-api/interfaces/OutletProps",id:"framework-api/interfaces/OutletProps",title:"OutletProps",description:"Properties",source:"@site/docs/framework-api/interfaces/OutletProps.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/OutletProps",permalink:"/docs/framework-api/interfaces/OutletProps",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/OutletProps.md",tags:[],version:"current",frontMatter:{id:"OutletProps",title:"OutletProps",sidebar_label:"OutletProps"},sidebar:"someSidebar",previous:{title:"OidcToken",permalink:"/docs/framework-api/interfaces/OidcToken"},next:{title:"ParsedQuery",permalink:"/docs/framework-api/interfaces/ParsedQuery"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"unknown"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);