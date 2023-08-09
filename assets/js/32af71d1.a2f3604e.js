"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[97513],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),p=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a().createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?a().createElement(f,i(i({ref:t},c),{},{components:n})):a().createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(63366),u=n(72389),c=n(86043),p="details_lb9f",s="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,m),y=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,c.u)({initialState:!k.open}),N=v.collapsed,h=v.setCollapsed,w=(0,a.useState)(k.open),O=w[0],P=w[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},k,{ref:g,open:O,"data-collapsed":N,className:(0,l.Z)(p,y&&s,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&b(t,g.current)&&(e.preventDefault(),N?(h(!1),P(!0)):h(!0))}}),E,o().createElement(c.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),P(!e)}},o().createElement("div",{className:d},n)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(k,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",y,t.className)}))}},99759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(34673),i=["components"],u={id:"debounce",title:"debounce",sidebar_label:"debounce"},c=void 0,p={unversionedId:"framework-api/functions/debounce",id:"framework-api/functions/debounce",title:"debounce",description:"Properties",source:"@site/docs/framework-api/functions/debounce.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/debounce",permalink:"/docs/framework-api/functions/debounce",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/debounce.md",tags:[],version:"current",frontMatter:{id:"debounce",title:"debounce",sidebar_label:"debounce"},sidebar:"someSidebar",previous:{title:"createSearchParams",permalink:"/docs/framework-api/functions/createSearchParams"},next:{title:"decrypt",permalink:"/docs/framework-api/functions/decrypt"}},s={},d=[{value:"Properties",id:"properties",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"debounce(saga: AnyFunction,delay: string | number,defaultDelay: number): AnyFunction\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"saga")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/AnyFunction"},"AnyFunction")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(l.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultDelay"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"delay"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);