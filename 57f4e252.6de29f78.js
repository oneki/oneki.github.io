/*! For license information please see 57f4e252.6de29f78.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(188)),c=r(193),o=(r(191),r(190),{id:"introduction",title:"Introduction",sidebar_label:"Introduction"}),s={id:"services/introduction",title:"Introduction",description:"Oneki.js introduces the concept of services handling a local (local services) or global state (global services) very easily and following the best practices (immutability, action, reducers, ...).",source:"@site/docs/services/001_introduction.md",permalink:"/docs/services/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/services/001_introduction.md",sidebar_label:"Introduction"},u=[{value:"Architecture",id:"architecture",children:[]},{value:"Built in services",id:"built-in-services",children:[]},{value:"Build your own",id:"build-your-own",children:[]}],l={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Oneki.js")," introduces the concept of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"services"))," handling a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"local"))," (local services) or ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"global"))," state (global services) very easily and following the best practices (immutability, action, reducers, ...)."),Object(i.b)("p",null,"The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the service."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("img",{alt:"Service architecture",src:Object(c.a)("img/onekijs-State Management.svg")}),Object(i.b)("h2",{id:"built-in-services"},"Built in services"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Oneki.js"))," provides several services to handle tasks commonly found in React applications:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Service"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"./notification/introduction"}),"Notification")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Services to centralize notifications in a global state and display them")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"./rest/use-get"}),"REST")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Services to easily interact with a backend service via REST calls")))),Object(i.b)("h2",{id:"build-your-own"},"Build your own"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Oneki.js"))," provides also a library to build ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./custom/introduction"}),"your own services")),". These services can be complex and asynchronous"))}b.isMDXComponent=!0},187:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(f,o(o({ref:t},u),{},{components:r})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},189:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},190:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},191:function(e,t,r){"use strict";r(23),r(17),r(18);var n=r(0),a=r.n(n),i=r(189);var c=function(){return Object(n.useContext)(i.a)},o=r(187),s=r.n(o),u=r(127),l=r.n(u),b=37,p=39;t.a=function(e){var t=e.block,r=e.children,i=e.defaultValue,o=e.values,u=e.groupId,d=c(),f=d.tabGroupChoices,m=d.setTabGroupChoices,v=Object(n.useState)(i),O=v[0],h=v[1];if(null!=u){var j=f[u];null!=j&&j!==O&&h(j)}var g=function(e){h(e),null!=u&&m(u,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===O}))[0]))}},192:function(e,t,r){"use strict";var n=r(0),a=r(50);t.a=function(){return Object(n.useContext)(a.a)}},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(194);var n=r(192);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},194:function(e,t,r){"use strict";var n=r(19),a=r(35),i=r(195),c="".startsWith;n(n.P+n.F*r(196)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},195:function(e,t,r){var n=r(71),a=r(24);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},196:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);