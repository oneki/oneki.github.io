"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[77151],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),s=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a().createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return r?a().createElement(f,i(i({ref:t},u),{},{components:r})):a().createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(87462),a=r(67294),l=r.n(a),o=r(86010),i=r(63366),p=r(72389),u=r(86043),s="details_lb9f",c="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,i.Z)(e,m),g=(0,p.Z)(),b=(0,a.useRef)(null),h=(0,u.u)({initialState:!y.open}),N=h.collapsed,v=h.setCollapsed,w=(0,a.useState)(y.open),O=w[0],P=w[1],E=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},y,{ref:b,open:O,"data-collapsed":N,className:(0,o.Z)(s,g&&c,y.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&k(t,b.current)&&(e.preventDefault(),N?(v(!1),P(!0)):v(!0))}}),E,l().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){v(e),P(!e)}},l().createElement("div",{className:d},r)))}var g="details_b_Ee";function b(e){var t=Object.assign({},e);return l().createElement(y,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",g,t.className)}))}},58970:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(34673),i=["components"],p={id:"LengthValidator",title:"LengthValidator",sidebar_label:"LengthValidator"},u=void 0,s={unversionedId:"framework-api/types/LengthValidator",id:"framework-api/types/LengthValidator",title:"LengthValidator",description:"Properties",source:"@site/docs/framework-api/types/LengthValidator.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/LengthValidator",permalink:"/docs/framework-api/types/LengthValidator",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/LengthValidator.md",tags:[],version:"current",frontMatter:{id:"LengthValidator",title:"LengthValidator",sidebar_label:"LengthValidator"},sidebar:"someSidebar",previous:{title:"ItemAdapter",permalink:"/docs/framework-api/types/ItemAdapter"},next:{title:"LinkComponentProps",permalink:"/docs/framework-api/types/LinkComponentProps"}},c={},d=[{value:"Properties",id:"properties",level:3}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"length")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"validator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/ValidatorFunction"},"ValidatorFunction")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"async"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);