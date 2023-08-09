"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[55228],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||f[m]||i;return r?a().createElement(d,l(l({ref:t},u),{},{components:r})):a().createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(87462),a=r(67294),i=r.n(a),o=r(86010),l=r(63366),p=r(72389),u=r(86043),c="details_lb9f",s="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function v(e){var t=e.summary,r=e.children,v=(0,l.Z)(e,m),k=(0,p.Z)(),y=(0,a.useRef)(null),g=(0,u.u)({initialState:!v.open}),w=g.collapsed,S=g.setCollapsed,N=(0,a.useState)(v.open),O=N[0],h=N[1],A=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,n.Z)({},v,{ref:y,open:O,"data-collapsed":w,className:(0,o.Z)(c,k&&s,v.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,y.current)&&(e.preventDefault(),w?(S(!1),h(!0)):S(!0))}}),A,i().createElement(u.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){S(e),h(!e)}},i().createElement("div",{className:f},r)))}var k="details_b_Ee";function y(e){var t=Object.assign({},e);return i().createElement(v,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},70132:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=(r(34673),["components"]),l={id:"useAppService",title:"useAppService",sidebar_label:"useAppService"},p=void 0,u={unversionedId:"framework-api/functions/useAppService",id:"framework-api/functions/useAppService",title:"useAppService",description:"Properties",source:"@site/docs/framework-api/functions/useAppService.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useAppService",permalink:"/docs/framework-api/functions/useAppService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useAppService.md",tags:[],version:"current",frontMatter:{id:"useAppService",title:"useAppService",sidebar_label:"useAppService"},sidebar:"someSidebar",previous:{title:"useAppContext",permalink:"/docs/framework-api/functions/useAppContext"},next:{title:"useAuth",permalink:"/docs/framework-api/functions/useAuth"}},c={},s=[{value:"Properties",id:"properties",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"useAppService<S,T>(ctor: Class<T>,initialState: S): T\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("font",{size:"2"},(0,i.kt)("i",null,"(Mandatory properties are in bold)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ctor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Class"},"Class"),"<T",">"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialState")),(0,i.kt)("td",{parentName:"tr",align:null},"S"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);