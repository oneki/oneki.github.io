"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[60666],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),u=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a().createElement(d,l(l({ref:t},c),{},{components:n})):a().createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),s=n(72389),c=n(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,l.Z)(e,m),k=(0,s.Z)(),y=(0,a.useRef)(null),v=(0,c.u)({initialState:!b.open}),O=v.collapsed,w=v.setCollapsed,h=(0,a.useState)(b.open),N=h[0],S=h[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},b,{ref:y,open:N,"data-collapsed":O,className:(0,i.Z)(u,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,y.current)&&(e.preventDefault(),O?(w(!1),S(!0)):w(!0))}}),E,o().createElement(c.z,{lazy:!1,collapsed:O,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),S(!e)}},o().createElement("div",{className:f},n)))}var k="details_b_Ee";function y(e){var t=Object.assign({},e);return o().createElement(b,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},32045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(34673),l=["components"],s={id:"LoginState",title:"LoginState",sidebar_label:"LoginState"},c=void 0,u={unversionedId:"framework-api/interfaces/LoginState",id:"framework-api/interfaces/LoginState",title:"LoginState",description:"Properties",source:"@site/docs/framework-api/interfaces/LoginState.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/LoginState",permalink:"/docs/framework-api/interfaces/LoginState",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/LoginState.md",tags:[],version:"current",frontMatter:{id:"LoginState",title:"LoginState",sidebar_label:"LoginState"},sidebar:"someSidebar",previous:{title:"LoginOptions",permalink:"/docs/framework-api/interfaces/LoginOptions"},next:{title:"LogoutOptions",permalink:"/docs/framework-api/interfaces/LogoutOptions"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"error"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/DefaultBasicError"},"default")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loading"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);