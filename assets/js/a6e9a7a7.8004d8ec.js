"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[76884],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),s=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a().createElement(k,i(i({ref:t},u),{},{components:n})):a().createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),p=n(72389),u=n(86043),s="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function k(e){return!!e&&("SUMMARY"===e.tagName||k(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,i.Z)(e,d),g=(0,p.Z)(),b=(0,a.useRef)(null),N=(0,u.u)({initialState:!y.open}),v=N.collapsed,h=N.setCollapsed,T=(0,a.useState)(y.open),O=T[0],w=T[1],E=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},y,{ref:b,open:O,"data-collapsed":v,className:(0,o.Z)(s,g&&c,y.className),onMouseDown:function(e){k(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;k(t)&&f(t,b.current)&&(e.preventDefault(),v?(h(!1),w(!0)):h(!0))}}),E,l().createElement(u.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),w(!e)}},l().createElement("div",{className:m},n)))}var g="details_b_Ee";function b(e){var t=Object.assign({},e);return l().createElement(y,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",g,t.className)}))}},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(34673),i=["components"],p={id:"Token",title:"Token",sidebar_label:"Token"},u=void 0,s={unversionedId:"framework-api/types/Token",id:"framework-api/types/Token",title:"Token",description:"Properties",source:"@site/docs/framework-api/types/Token.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/Token",permalink:"/docs/framework-api/types/Token",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/Token.md",tags:[],version:"current",frontMatter:{id:"Token",title:"Token",sidebar_label:"Token"},sidebar:"someSidebar",previous:{title:"To",permalink:"/docs/framework-api/types/To"},next:{title:"TouchOnType",permalink:"/docs/framework-api/types/TouchOnType"}},c={},m=[{value:"Properties",id:"properties",level:3}],d={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"access_token")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"expires_in")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"token_type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expires_at"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}k.isMDXComponent=!0}}]);