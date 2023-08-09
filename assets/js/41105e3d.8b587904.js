"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[58423],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o().createContext({}),c=function(e){var t=o().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return o().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return r?o().createElement(d,u(u({ref:t},s),{},{components:r})):o().createElement(d,u({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),u=r(63366),l=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function v(e){var t=e.summary,r=e.children,v=(0,u.Z)(e,m),b=(0,l.Z)(),k=(0,o.useRef)(null),y=(0,s.u)({initialState:!v.open}),w=y.collapsed,O=y.setCollapsed,h=(0,o.useState)(v.open),S=h[0],N=h[1],E=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},v,{ref:k,open:S,"data-collapsed":w,className:(0,i.Z)(c,b&&p,v.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,k.current)&&(e.preventDefault(),w?(O(!1),N(!0)):O(!0))}}),E,a().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),N(!e)}},a().createElement("div",{className:f},r)))}var b="details_b_Ee";function k(e){var t=Object.assign({},e);return a().createElement(v,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",b,t.className)}))}},69989:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(34673),u=["components"],l={id:"useLogoutService",title:"useLogoutService",sidebar_label:"useLogoutService"},s=void 0,c={unversionedId:"framework-api/functions/useLogoutService",id:"framework-api/functions/useLogoutService",title:"useLogoutService",description:"Properties",source:"@site/docs/framework-api/functions/useLogoutService.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useLogoutService",permalink:"/docs/framework-api/functions/useLogoutService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useLogoutService.md",tags:[],version:"current",frontMatter:{id:"useLogoutService",title:"useLogoutService",sidebar_label:"useLogoutService"},sidebar:"someSidebar",previous:{title:"useLogoutError",permalink:"/docs/framework-api/functions/useLogoutError"},next:{title:"useMatch",permalink:"/docs/framework-api/functions/useMatch"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useLogoutService(options: LogoutOptions): \n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"),(0,a.kt)(i.Z,{summary:(0,a.kt)("summary",null,(0,a.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/LogoutOptions"},"LogoutOptions")),(0,a.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);