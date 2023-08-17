"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[703],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o().createContext({}),u=function(e){var t=o().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},d=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o().createElement(m,l(l({ref:t},s),{},{components:r})):o().createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}d.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),l=r(63366),c=r(72389),s=r(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,l.Z)(e,d),y=(0,c.Z)(),g=(0,o.useRef)(null),w=(0,s.u)({initialState:!k.open}),v=w.collapsed,O=w.setCollapsed,h=(0,o.useState)(k.open),N=h[0],E=h[1],j=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},k,{ref:g,open:N,"data-collapsed":v,className:(0,i.Z)(u,y&&p,k.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&b(t,g.current)&&(e.preventDefault(),v?(O(!1),E(!0)):O(!0))}}),j,a().createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),E(!e)}},a().createElement("div",{className:f},r)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return a().createElement(k,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}},73662:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),l={id:"oidcBrowser",title:"oidcBrowser",sidebar_label:"oidcBrowser"},c=void 0,s={unversionedId:"framework-api/functions/oidcBrowser",id:"framework-api/functions/oidcBrowser",title:"oidcBrowser",description:"Properties",source:"@site/docs/framework-api/functions/oidcBrowser.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/oidcBrowser",permalink:"/docs/framework-api/functions/oidcBrowser",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/oidcBrowser.md",tags:[],version:"current",frontMatter:{id:"oidcBrowser",title:"oidcBrowser",sidebar_label:"oidcBrowser"},sidebar:"someSidebar",previous:{title:"minLength",permalink:"/docs/framework-api/functions/minLength"},next:{title:"oidcServer",permalink:"/docs/framework-api/functions/oidcServer"}},u={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"oidcBrowser(idpConfig: IdpSettings): Idp\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("font",{size:"2"},(0,a.kt)("i",null,"(Mandatory properties are in bold)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"idpConfig")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/IdpSettings"},"IdpSettings")),(0,a.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);