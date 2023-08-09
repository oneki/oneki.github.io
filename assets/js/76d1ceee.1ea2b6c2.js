"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[74610],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),u=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?a().createElement(d,i(i({ref:t},s),{},{components:r})):a().createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),c=r(72389),s=r(86043),u="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,i.Z)(e,f),k=(0,c.Z)(),v=(0,a.useRef)(null),g=(0,s.u)({initialState:!y.open}),w=g.collapsed,O=g.setCollapsed,S=(0,a.useState)(y.open),h=S[0],C=S[1],P=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},y,{ref:v,open:h,"data-collapsed":w,className:(0,l.Z)(u,k&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,v.current)&&(e.preventDefault(),w?(O(!1),C(!0)):O(!0))}}),P,o().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),C(!e)}},o().createElement("div",{className:m},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(y,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},22149:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"SuccessCallback",title:"SuccessCallback",sidebar_label:"SuccessCallback"},c=void 0,s={unversionedId:"framework-api/types/SuccessCallback",id:"framework-api/types/SuccessCallback",title:"SuccessCallback",description:"Properties",source:"@site/docs/framework-api/types/SuccessCallback.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/SuccessCallback",permalink:"/docs/framework-api/types/SuccessCallback",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/SuccessCallback.md",tags:[],version:"current",frontMatter:{id:"SuccessCallback",title:"SuccessCallback",sidebar_label:"SuccessCallback"},sidebar:"someSidebar",previous:{title:"SubmitButtonProps",permalink:"/docs/framework-api/types/SubmitButtonProps"},next:{title:"TextareaProps",permalink:"/docs/framework-api/types/TextareaProps"}},u={},p=[{value:"Properties",id:"properties",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"result")),(0,o.kt)("td",{parentName:"tr",align:null},"T"),(0,o.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);