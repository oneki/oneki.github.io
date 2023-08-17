"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[56809],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a().createContext({}),s=function(e){var r=a().useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a().createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a().createElement(a().Fragment,{},r)}},m=a().forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||l;return t?a().createElement(d,i(i({ref:r},u),{},{components:t})):a().createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,t)}m.displayName="MDXCreateElement"},34673:function(e,r,t){t.d(r,{Z:function(){return E}});var n=t(87462),a=t(67294),l=t.n(a),o=t(86010),i=t(63366),c=t(72389),u=t(86043),s="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function k(e,r){return!!e&&(e===r||k(e.parentElement,r))}function b(e){var r=e.summary,t=e.children,b=(0,i.Z)(e,m),y=(0,c.Z)(),E=(0,a.useRef)(null),v=(0,u.u)({initialState:!b.open}),g=v.collapsed,C=v.setCollapsed,w=(0,a.useState)(b.open),h=w[0],N=w[1],O=l().isValidElement(r)?r:l().createElement("summary",null,null!=r?r:"Details");return l().createElement("details",(0,n.Z)({},b,{ref:E,open:h,"data-collapsed":g,className:(0,o.Z)(s,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var r=e.target;d(r)&&k(r,E.current)&&(e.preventDefault(),g?(C(!1),N(!0)):C(!0))}}),O,l().createElement(u.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){C(e),N(!e)}},l().createElement("div",{className:f},t)))}var y="details_b_Ee";function E(e){var r=Object.assign({},e);return l().createElement(b,(0,n.Z)({},r,{className:(0,o.Z)("alert alert--info",y,r.className)}))}},71140:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(34673),i=["components"],c={id:"useErrorCallback",title:"useErrorCallback",sidebar_label:"useErrorCallback"},u=void 0,s={unversionedId:"framework-api/functions/useErrorCallback",id:"framework-api/functions/useErrorCallback",title:"useErrorCallback",description:"Properties",source:"@site/docs/framework-api/functions/useErrorCallback.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useErrorCallback",permalink:"/docs/framework-api/functions/useErrorCallback",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useErrorCallback.md",tags:[],version:"current",frontMatter:{id:"useErrorCallback",title:"useErrorCallback",sidebar_label:"useErrorCallback"},sidebar:"someSidebar",previous:{title:"useDelete",permalink:"/docs/framework-api/functions/useDelete"},next:{title:"useEventListener",permalink:"/docs/framework-api/functions/useEventListener"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"useErrorCallback<T>(callback: AppErrorCallback<T>,defaultCallback: AppErrorCallback<T>): ErrorCallback<T> | undefined\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This element is often used without passing props"),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/AppErrorCallback"},"AppErrorCallback"),"<T",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultCallback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/AppErrorCallback"},"AppErrorCallback"),"<T",">"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);