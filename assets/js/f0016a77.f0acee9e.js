"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[78207],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a().createContext({}),c=function(e){var t=a().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return n?a().createElement(d,l(l({ref:t},p),{},{components:n})):a().createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),l=n(63366),u=n(72389),p=n(86043),c="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,l.Z)(e,f),b=(0,u.Z)(),h=(0,a.useRef)(null),y=(0,p.u)({initialState:!k.open}),v=y.collapsed,P=y.setCollapsed,N=(0,a.useState)(k.open),w=N[0],O=N[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,r.Z)({},k,{ref:h,open:w,"data-collapsed":v,className:(0,o.Z)(c,b&&s,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,h.current)&&(e.preventDefault(),v?(P(!1),O(!0)):P(!0))}}),E,i().createElement(p.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){P(e),O(!e)}},i().createElement("div",{className:m},n)))}var b="details_b_Ee";function h(e){var t=Object.assign({},e);return i().createElement(k,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",b,t.className)}))}},51917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(34673),l=["components"],u={id:"generatePath",title:"generatePath",sidebar_label:"generatePath"},p=void 0,c={unversionedId:"framework-api/functions/generatePath",id:"framework-api/functions/generatePath",title:"generatePath",description:"Returns a path with params interpolated.",source:"@site/docs/framework-api/functions/generatePath.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/generatePath",permalink:"/docs/framework-api/functions/generatePath",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/generatePath.md",tags:[],version:"current",frontMatter:{id:"generatePath",title:"generatePath",sidebar_label:"generatePath"},sidebar:"someSidebar",previous:{title:"generateNonce",permalink:"/docs/framework-api/functions/generateNonce"},next:{title:"generateRandomString",permalink:"/docs/framework-api/functions/generateRandomString"}},s={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"generatePath<Path>(originalPath: Path,params: ): string\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Returns a path with params interpolated."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"originalPath")),(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)(o.Z,{summary:(0,i.kt)("summary",null,(0,i.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);