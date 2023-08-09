"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[25030],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o().createContext({}),p=function(e){var t=o().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return r?o().createElement(d,l(l({ref:t},c),{},{components:r})):o().createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o().createElement.apply(null,i)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),o=r(67294),a=r.n(o),i=r(86010),l=r(63366),u=r(72389),c=r(86043),p="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,l.Z)(e,f),k=(0,u.Z)(),v=(0,o.useRef)(null),g=(0,c.u)({initialState:!b.open}),P=g.collapsed,w=g.setCollapsed,O=(0,o.useState)(b.open),S=O[0],h=O[1],E=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:v,open:S,"data-collapsed":P,className:(0,i.Z)(p,k&&s,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),P?(w(!1),h(!0)):w(!0))}}),E,a().createElement(c.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),h(!e)}},a().createElement("div",{className:m},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},5228:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(34673),["components"]),l={id:"SecureRouteProps",title:"SecureRouteProps",sidebar_label:"SecureRouteProps"},u=void 0,c={unversionedId:"framework-api/types/SecureRouteProps",id:"framework-api/types/SecureRouteProps",title:"SecureRouteProps",description:"Properties",source:"@site/docs/framework-api/types/SecureRouteProps.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/SecureRouteProps",permalink:"/docs/framework-api/types/SecureRouteProps",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/SecureRouteProps.md",tags:[],version:"current",frontMatter:{id:"SecureRouteProps",title:"SecureRouteProps",sidebar_label:"SecureRouteProps"},sidebar:"someSidebar",previous:{title:"Search",permalink:"/docs/framework-api/types/Search"},next:{title:"SelectProps",permalink:"/docs/framework-api/types/SelectProps"}},p={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("font",{size:"2"},(0,a.kt)("i",null,"(Mandatory properties are in bold)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"component")),(0,a.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,a.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);