"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[6465],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?a().createElement(d,o(o({ref:t},u),{},{components:n})):a().createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),i=n.n(a),l=n(86010),o=n(63366),s=n(72389),u=n(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,o.Z)(e,f),b=(0,s.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!k.open}),N=v.collapsed,h=v.setCollapsed,O=(0,a.useState)(k.open),w=O[0],x=O[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,r.Z)({},k,{ref:g,open:w,"data-collapsed":N,className:(0,l.Z)(c,b&&p,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),N?(h(!1),x(!0)):h(!0))}}),E,i().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),x(!e)}},i().createElement("div",{className:m},n)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return i().createElement(k,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},1804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(34673),o=["components"],s={id:"stringifyJsx",title:"stringifyJsx",sidebar_label:"stringifyJsx"},u=void 0,c={unversionedId:"framework-api/functions/stringifyJsx",id:"framework-api/functions/stringifyJsx",title:"stringifyJsx",description:"Properties",source:"@site/docs/framework-api/functions/stringifyJsx.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/stringifyJsx",permalink:"/docs/framework-api/functions/stringifyJsx",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/stringifyJsx.md",tags:[],version:"current",frontMatter:{id:"stringifyJsx",title:"stringifyJsx",sidebar_label:"stringifyJsx"},sidebar:"someSidebar",previous:{title:"sleep",permalink:"/docs/framework-api/functions/sleep"},next:{title:"throttle",permalink:"/docs/framework-api/functions/throttle"}},p={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"stringifyJsx(reactElement: Element,ctx: AnonymousObject<any>,idx: number): \n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"reactElement")),(0,i.kt)("td",{parentName:"tr",align:null},"Element"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)(l.Z,{summary:(0,i.kt)("summary",null,(0,i.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ctx"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idx"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);