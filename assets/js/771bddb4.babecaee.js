"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[58179],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(i,".").concat(f)]||c[f]||m[f]||o;return r?a().createElement(d,l(l({ref:t},s),{},{components:r})):a().createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),u=r(72389),s=r(86043),p="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,l.Z)(e,f),k=(0,u.Z)(),v=(0,a.useRef)(null),g=(0,s.u)({initialState:!y.open}),w=g.collapsed,P=g.setCollapsed,S=(0,a.useState)(y.open),O=S[0],h=S[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},y,{ref:v,open:O,"data-collapsed":w,className:(0,i.Z)(p,k&&c,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,v.current)&&(e.preventDefault(),w?(P(!1),h(!0)):P(!0))}}),E,o().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){P(e),h(!e)}},o().createElement("div",{className:m},r)))}var k="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(y,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",k,t.className)}))}},53690:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(34673),l=["components"],u={id:"SubmitButtonProps",title:"SubmitButtonProps",sidebar_label:"SubmitButtonProps"},s=void 0,p={unversionedId:"framework-api/types/SubmitButtonProps",id:"framework-api/types/SubmitButtonProps",title:"SubmitButtonProps",description:"Properties",source:"@site/docs/framework-api/types/SubmitButtonProps.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/SubmitButtonProps",permalink:"/docs/framework-api/types/SubmitButtonProps",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/SubmitButtonProps.md",tags:[],version:"current",frontMatter:{id:"SubmitButtonProps",title:"SubmitButtonProps",sidebar_label:"SubmitButtonProps"},sidebar:"someSidebar",previous:{title:"SetGlobalStateFunction",permalink:"/docs/framework-api/types/SetGlobalStateFunction"},next:{title:"SuccessCallback",permalink:"/docs/framework-api/types/SuccessCallback"}},c={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"This element is often used without passing props"),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showErrors"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);