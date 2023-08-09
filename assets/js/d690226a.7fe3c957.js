"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[6612],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o().createContext({}),s=function(e){var t=o().useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o().createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},m=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return r?o().createElement(d,c(c({ref:t},l),{},{components:r})):o().createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),c=r(63366),u=r(72389),l=r(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function v(e,t){return!!e&&(e===t||v(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,c.Z)(e,m),y=(0,u.Z)(),R=(0,o.useRef)(null),k=(0,l.u)({initialState:!b.open}),w=k.collapsed,g=k.setCollapsed,N=(0,o.useState)(b.open),O=N[0],h=N[1],D=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:R,open:O,"data-collapsed":w,className:(0,i.Z)(s,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&v(t,R.current)&&(e.preventDefault(),w?(g(!1),h(!0)):g(!0))}}),D,a().createElement(l.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){g(e),h(!e)}},a().createElement("div",{className:f},r)))}var y="details_b_Ee";function R(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}},66794:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),c={id:"NativeReactDomRouter",title:"NativeReactDomRouter",sidebar_label:"NativeReactDomRouter"},u=void 0,l={unversionedId:"framework-api/functions/NativeReactDomRouter",id:"framework-api/functions/NativeReactDomRouter",title:"NativeReactDomRouter",description:"Provides location context for the rest of the app.",source:"@site/docs/framework-api/functions/NativeReactDomRouter.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/NativeReactDomRouter",permalink:"/docs/framework-api/functions/NativeReactDomRouter",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/NativeReactDomRouter.md",tags:[],version:"current",frontMatter:{id:"NativeReactDomRouter",title:"NativeReactDomRouter",sidebar_label:"NativeReactDomRouter"},sidebar:"someSidebar",previous:{title:"MemoryRouter",permalink:"/docs/framework-api/functions/MemoryRouter"},next:{title:"NavLink",permalink:"/docs/framework-api/functions/NavLink"}},s={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"NativeReactDomRouter(__namedParameters: RouterProps): React.ReactElement | null\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Provides location context for the rest of the app."),(0,a.kt)("p",null,"Note: You usually won't render a <Router",">"," directly. Instead, you'll render a",(0,a.kt)("br",{parentName:"p"}),"\n","router that is more specific to your environment such as a <BrowserRouter",">",(0,a.kt)("br",{parentName:"p"}),"\n","in web browsers or a <StaticRouter",">"," for server rendering."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);