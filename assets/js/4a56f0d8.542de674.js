"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[33144],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||i;return r?a().createElement(d,l(l({ref:t},s),{},{components:r})):a().createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(87462),a=r(67294),i=r.n(a),o=r(86010),l=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,l.Z)(e,f),b=(0,u.Z)(),y=(0,a.useRef)(null),v=(0,s.u)({initialState:!k.open}),x=v.collapsed,N=v.setCollapsed,O=(0,a.useState)(k.open),h=O[0],w=O[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},k,{ref:y,open:h,"data-collapsed":x,className:(0,o.Z)(c,b&&p,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,y.current)&&(e.preventDefault(),x?(N(!1),w(!0)):N(!0))}}),E,i().createElement(s.z,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),w(!e)}},i().createElement("div",{className:m},r)))}var b="details_b_Ee";function y(e){var t=Object.assign({},e);return i().createElement(k,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",b,t.className)}))}},60836:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(34673),l=["components"],u={id:"regex",title:"regex",sidebar_label:"regex"},s=void 0,c={unversionedId:"framework-api/functions/regex",id:"framework-api/functions/regex",title:"regex",description:"Properties",source:"@site/docs/framework-api/functions/regex.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/regex",permalink:"/docs/framework-api/functions/regex",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/regex.md",tags:[],version:"current",frontMatter:{id:"regex",title:"regex",sidebar_label:"regex"},sidebar:"someSidebar",previous:{title:"reducer",permalink:"/docs/framework-api/functions/reducer"},next:{title:"regexIndexOf",permalink:"/docs/framework-api/functions/regexIndexOf"}},p={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"regex(regex: string | RegExp,message: string): Validator\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"regex")),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," RegExp"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)(o.Z,{summary:(0,i.kt)("summary",null,(0,i.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);