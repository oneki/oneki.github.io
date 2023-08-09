"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[53940],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o().createContext({}),c=function(e){var r=o().useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return o().createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o().createElement(o().Fragment,{},r)}},m=o().forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return t?o().createElement(d,s(s({ref:r},l),{},{components:t})):o().createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o().createElement.apply(null,i)}return o().createElement.apply(null,t)}m.displayName="MDXCreateElement"},34673:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(87462),o=t(67294),a=t.n(o),i=t(86010),s=t(63366),u=t(72389),l=t(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function w(e,r){return!!e&&(e===r||w(e.parentElement,r))}function b(e){var r=e.summary,t=e.children,b=(0,s.Z)(e,m),y=(0,u.Z)(),v=(0,o.useRef)(null),k=(0,l.u)({initialState:!b.open}),g=k.collapsed,O=k.setCollapsed,h=(0,o.useState)(b.open),E=h[0],R=h[1],P=a().isValidElement(r)?r:a().createElement("summary",null,null!=r?r:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:v,open:E,"data-collapsed":g,className:(0,i.Z)(c,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var r=e.target;d(r)&&w(r,v.current)&&(e.preventDefault(),g?(O(!1),R(!0)):O(!0))}}),P,a().createElement(l.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),R(!e)}},a().createElement("div",{className:f},t)))}var y="details_b_Ee";function v(e){var r=Object.assign({},e);return a().createElement(b,(0,n.Z)({},r,{className:(0,i.Z)("alert alert--info",y,r.className)}))}},22903:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(34673),["components"]),s={id:"BrowserRouter",title:"BrowserRouter",sidebar_label:"BrowserRouter"},u=void 0,l={unversionedId:"framework-api/functions/BrowserRouter",id:"framework-api/functions/BrowserRouter",title:"BrowserRouter",description:"A `` for use in web browsers. Provides the cleanest URLs.",source:"@site/docs/framework-api/functions/BrowserRouter.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/BrowserRouter",permalink:"/docs/framework-api/functions/BrowserRouter",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/BrowserRouter.md",tags:[],version:"current",frontMatter:{id:"BrowserRouter",title:"BrowserRouter",sidebar_label:"BrowserRouter"},sidebar:"someSidebar",previous:{title:"AppState",permalink:"/docs/framework-api/functions/AppState"},next:{title:"DefaultAuthErrorComponent",permalink:"/docs/framework-api/functions/DefaultAuthErrorComponent"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"BrowserRouter(__namedParameters: BrowserRouterProps): JSX.Element\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"<Router>")," for use in web browsers. Provides the cleanest URLs."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);