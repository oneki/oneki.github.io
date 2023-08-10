"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[52970],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),s=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a().createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a().createElement(f,l(l({ref:t},u),{},{components:r})):a().createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),c=r(72389),u=r(86043),s="details_lb9f",p="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,l.Z)(e,m),k=(0,c.Z)(),g=(0,a.useRef)(null),v=(0,u.u)({initialState:!b.open}),w=v.collapsed,h=v.setCollapsed,O=(0,a.useState)(b.open),S=O[0],N=O[1],x=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:g,open:S,"data-collapsed":w,className:(0,i.Z)(s,k&&p,b.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&y(t,g.current)&&(e.preventDefault(),w?(h(!1),N(!0)):h(!0))}}),x,o().createElement(u.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),N(!e)}},o().createElement("div",{className:d},r)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},42362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(34673),l=["components"],c={id:"createReduxStore",title:"createReduxStore",sidebar_label:"createReduxStore"},u=void 0,s={unversionedId:"framework-api/functions/createReduxStore",id:"framework-api/functions/createReduxStore",title:"createReduxStore",description:"Properties",source:"@site/docs/framework-api/functions/createReduxStore.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/createReduxStore",permalink:"/docs/framework-api/functions/createReduxStore",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/createReduxStore.md",tags:[],version:"current",frontMatter:{id:"createReduxStore",title:"createReduxStore",sidebar_label:"createReduxStore"},sidebar:"someSidebar",previous:{title:"createPath",permalink:"/docs/framework-api/functions/createPath"},next:{title:"createRoutesFromChildren",permalink:"/docs/framework-api/functions/createRoutesFromChildren"}},p={},d=[{value:"Properties",id:"properties",level:3}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"createReduxStore(initialState: AnonymousObject<any>,middlewares: Middleware<any, any, any>[]): AppStore<any, AnyAction>\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialState"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,o.kt)("td",{parentName:"tr",align:null},"Middleware<any, any, any",">","[]"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);