"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[17011],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o().createContext({}),s=function(e){var t=o().useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?o().createElement(d,i(i({ref:t},p),{},{components:r})):o().createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o().createElement.apply(null,l)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),o=r(67294),a=r.n(o),l=r(86010),i=r(63366),c=r(72389),p=r(86043),s="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,i.Z)(e,f),k=(0,c.Z)(),v=(0,o.useRef)(null),g=(0,p.u)({initialState:!b.open}),P=g.collapsed,w=g.setCollapsed,C=(0,o.useState)(b.open),O=C[0],h=C[1],x=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,n.Z)({},b,{ref:v,open:O,"data-collapsed":P,className:(0,l.Z)(s,k&&u,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,v.current)&&(e.preventDefault(),P?(w(!1),h(!0)):w(!0))}}),x,a().createElement(p.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),h(!e)}},a().createElement("div",{className:m},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return a().createElement(b,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},3537:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"CollectionProxy",title:"CollectionProxy",sidebar_label:"CollectionProxy"},c=void 0,p={unversionedId:"framework-api/types/CollectionProxy",id:"framework-api/types/CollectionProxy",title:"CollectionProxy",description:"Properties",source:"@site/docs/framework-api/types/CollectionProxy.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/CollectionProxy",permalink:"/docs/framework-api/types/CollectionProxy",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/CollectionProxy.md",tags:[],version:"current",frontMatter:{id:"CollectionProxy",title:"CollectionProxy",sidebar_label:"CollectionProxy"},sidebar:"someSidebar",previous:{title:"CollectionItemAdapter",permalink:"/docs/framework-api/types/CollectionItemAdapter"},next:{title:"CollectionStatus",permalink:"/docs/framework-api/types/CollectionStatus"}},s={},u=[{value:"Properties",id:"properties",level:3}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("font",{size:"2"},(0,a.kt)("i",null,"(Mandatory properties are in bold)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"asService")),(0,a.kt)("td",{parentName:"tr",align:null},"asService(): C"),(0,a.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);