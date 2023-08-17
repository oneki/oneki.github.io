"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[9820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i().createContext({}),u=function(e){var t=i().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i().createElement(i().Fragment,{},t)}},m=i().forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return n?i().createElement(d,s(s({ref:t},c),{},{components:n})):i().createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i().createElement.apply(null,o)}return i().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),i=n(67294),a=n.n(i),o=n(86010),s=n(63366),l=n(72389),c=n(86043),u="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,s.Z)(e,m),k=(0,l.Z)(),g=(0,i.useRef)(null),v=(0,c.u)({initialState:!y.open}),N=v.collapsed,w=v.setCollapsed,O=(0,i.useState)(y.open),h=O[0],j=O[1],E=a().isValidElement(t)?t:a().createElement("summary",null,null!=t?t:"Details");return a().createElement("details",(0,r.Z)({},y,{ref:g,open:h,"data-collapsed":N,className:(0,o.Z)(u,k&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,g.current)&&(e.preventDefault(),N?(w(!1),j(!0)):w(!0))}}),E,a().createElement(c.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),j(!e)}},a().createElement("div",{className:f},n)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return a().createElement(y,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},96457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(34673),s=["components"],l={id:"useNotifications",title:"useNotifications",sidebar_label:"useNotifications"},c=void 0,u={unversionedId:"framework-api/functions/useNotifications",id:"framework-api/functions/useNotifications",title:"useNotifications",description:"Properties",source:"@site/docs/framework-api/functions/useNotifications.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useNotifications",permalink:"/docs/framework-api/functions/useNotifications",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useNotifications.md",tags:[],version:"current",frontMatter:{id:"useNotifications",title:"useNotifications",sidebar_label:"useNotifications"},sidebar:"someSidebar",previous:{title:"useNotificationService",permalink:"/docs/framework-api/functions/useNotificationService"},next:{title:"useObjectProxy",permalink:"/docs/framework-api/functions/useObjectProxy"}},p={},f=[{value:"Properties",id:"properties",level:3}],m={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useNotifications(topics: string | string[]): Notification[]\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"This element is often used without passing props"),(0,a.kt)(o.Z,{summary:(0,a.kt)("summary",null,(0,a.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topics"),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," string[]"),(0,a.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);