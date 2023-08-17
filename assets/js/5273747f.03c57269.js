"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[29214],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),p=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a().createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return n?a().createElement(d,i(i({ref:t},c),{},{components:n})):a().createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),u=n(72389),c=n(86043),p="details_lb9f",m="isBrowser_bmU9",s="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,f),b=(0,u.Z)(),y=(0,a.useRef)(null),N=(0,c.u)({initialState:!k.open}),v=N.collapsed,E=N.setCollapsed,O=(0,a.useState)(k.open),w=O[0],h=O[1],S=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},k,{ref:y,open:w,"data-collapsed":v,className:(0,o.Z)(p,b&&m,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,y.current)&&(e.preventDefault(),v?(E(!1),h(!0)):E(!0))}}),S,l().createElement(c.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){E(e),h(!e)}},l().createElement("div",{className:s},n)))}var b="details_b_Ee";function y(e){var t=Object.assign({},e);return l().createElement(k,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",b,t.className)}))}},17638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=(n(34673),["components"]),i={id:"SagaEffect",title:"SagaEffect",sidebar_label:"SagaEffect"},u=void 0,c={unversionedId:"framework-api/enum/SagaEffect",id:"framework-api/enum/SagaEffect",title:"SagaEffect",description:"Properties",source:"@site/docs/framework-api/enum/SagaEffect.md",sourceDirName:"framework-api/enum",slug:"/framework-api/enum/SagaEffect",permalink:"/docs/framework-api/enum/SagaEffect",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/enum/SagaEffect.md",tags:[],version:"current",frontMatter:{id:"SagaEffect",title:"SagaEffect",sidebar_label:"SagaEffect"},sidebar:"someSidebar",previous:{title:"NotificationLevel",permalink:"/docs/framework-api/enum/NotificationLevel"},next:{title:"TouchOn",permalink:"/docs/framework-api/enum/TouchOn"}},p={},m=[{value:"Properties",id:"properties",level:3}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Debounce")),(0,l.kt)("td",{parentName:"tr",align:null},"debounce"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Every")),(0,l.kt)("td",{parentName:"tr",align:null},"every"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Latest")),(0,l.kt)("td",{parentName:"tr",align:null},"latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Leading")),(0,l.kt)("td",{parentName:"tr",align:null},"leading"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Serial")),(0,l.kt)("td",{parentName:"tr",align:null},"serial"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Throttle")),(0,l.kt)("td",{parentName:"tr",align:null},"throttle"),(0,l.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);