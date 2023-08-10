"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[26670],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),s=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=s(e.components);return a().createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return n?a().createElement(d,u(u({ref:t},c),{},{components:n})):a().createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),u=n(63366),l=n(72389),c=n(86043),s="details_lb9f",m="isBrowser_bmU9",p="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function g(e){var t=e.summary,n=e.children,g=(0,u.Z)(e,f),b=(0,l.Z)(),v=(0,a.useRef)(null),k=(0,c.u)({initialState:!g.open}),w=k.collapsed,O=k.setCollapsed,M=(0,a.useState)(g.open),h=M[0],E=M[1],j=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},g,{ref:v,open:h,"data-collapsed":w,className:(0,i.Z)(s,b&&m,g.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),w?(O(!1),E(!0)):O(!0))}}),j,o().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),E(!e)}},o().createElement("div",{className:p},n)))}var b="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(g,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",b,t.className)}))}},66410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(34673),["components"]),u={id:"dummyLogMetadata",title:"dummyLogMetadata",sidebar_label:"dummyLogMetadata"},l=void 0,c={unversionedId:"framework-api/functions/dummyLogMetadata",id:"framework-api/functions/dummyLogMetadata",title:"dummyLogMetadata",description:"Properties",source:"@site/docs/framework-api/functions/dummyLogMetadata.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/dummyLogMetadata",permalink:"/docs/framework-api/functions/dummyLogMetadata",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/dummyLogMetadata.md",tags:[],version:"current",frontMatter:{id:"dummyLogMetadata",title:"dummyLogMetadata",sidebar_label:"dummyLogMetadata"},sidebar:"someSidebar",previous:{title:"diffArrays",permalink:"/docs/framework-api/functions/diffArrays"},next:{title:"email",permalink:"/docs/framework-api/functions/email"}},s={},m=[{value:"Properties",id:"properties",level:3}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"dummyLogMetadata(): void\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"))}f.isMDXComponent=!0}}]);