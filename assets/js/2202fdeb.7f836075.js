"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13303],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i().createContext({}),c=function(e){var t=i().useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i().createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i().createElement(i().Fragment,{},t)}},m=i().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return n?i().createElement(d,s(s({ref:t},l),{},{components:n})):i().createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i().createElement.apply(null,a)}return i().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),i=n(67294),o=n.n(i),a=n(86010),s=n(63366),u=n(72389),l=n(86043),c="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,s.Z)(e,m),y=(0,u.Z)(),v=(0,i.useRef)(null),w=(0,l.u)({initialState:!b.open}),k=w.collapsed,S=w.setCollapsed,O=(0,i.useState)(b.open),h=O[0],E=O[1],j=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},b,{ref:v,open:h,"data-collapsed":k,className:(0,a.Z)(c,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,v.current)&&(e.preventDefault(),k?(S(!1),E(!0)):S(!0))}}),j,o().createElement(l.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){S(e),E(!e)}},o().createElement("div",{className:f},n)))}var y="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(b,(0,r.Z)({},t,{className:(0,a.Z)("alert alert--info",y,t.className)}))}},84773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=(n(34673),["components"]),s={id:"useSettings",title:"useSettings",sidebar_label:"useSettings"},u=void 0,l={unversionedId:"framework-api/functions/useSettings",id:"framework-api/functions/useSettings",title:"useSettings",description:"Properties",source:"@site/docs/framework-api/functions/useSettings.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useSettings",permalink:"/docs/framework-api/functions/useSettings",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useSettings.md",tags:[],version:"current",frontMatter:{id:"useSettings",title:"useSettings",sidebar_label:"useSettings"},sidebar:"someSidebar",previous:{title:"useSetting",permalink:"/docs/framework-api/functions/useSetting"},next:{title:"useShallowEqual",permalink:"/docs/framework-api/functions/useShallowEqual"}},c={},p=[{value:"Properties",id:"properties",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useSettings(): AppSettings\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"))}m.isMDXComponent=!0}}]);