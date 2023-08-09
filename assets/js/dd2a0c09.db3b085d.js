"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[2084],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a().createContext({}),s=function(e){var t=a().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return a().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a().createElement(m,u(u({ref:t},c),{},{components:r})):a().createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),u=r(63366),l=r(72389),c=r(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function v(e,t){return!!e&&(e===t||v(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,u.Z)(e,d),y=(0,l.Z)(),k=(0,a.useRef)(null),g=(0,c.u)({initialState:!b.open}),w=g.collapsed,O=g.setCollapsed,h=(0,a.useState)(b.open),x=h[0],S=h[1],N=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:k,open:x,"data-collapsed":w,className:(0,i.Z)(s,y&&p,b.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&v(t,k.current)&&(e.preventDefault(),w?(O(!1),S(!0)):O(!0))}}),N,o().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),S(!e)}},o().createElement("div",{className:f},r)))}var y="details_b_Ee";function k(e){var t=Object.assign({},e);return o().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}},40758:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(34673),["components"]),u={id:"useReduxService",title:"useReduxService",sidebar_label:"useReduxService"},l=void 0,c={unversionedId:"framework-api/functions/useReduxService",id:"framework-api/functions/useReduxService",title:"useReduxService",description:"Properties",source:"@site/docs/framework-api/functions/useReduxService.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useReduxService",permalink:"/docs/framework-api/functions/useReduxService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useReduxService.md",tags:[],version:"current",frontMatter:{id:"useReduxService",title:"useReduxService",sidebar_label:"useReduxService"},sidebar:"someSidebar",previous:{title:"useQuery",permalink:"/docs/framework-api/functions/useQuery"},next:{title:"useResolvedPath",permalink:"/docs/framework-api/functions/useResolvedPath"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useReduxService<T>(ctor: Class<T>): T\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ctor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Class"},"Class"),"<T",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);