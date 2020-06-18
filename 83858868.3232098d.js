/*! For license information please see 83858868.3232098d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(208)),i=r(214),c=(r(212),r(211),{id:"introduction",title:"Introduction",sidebar_label:"Introduction"}),l={id:"framework/service/introduction",title:"Introduction",description:"Oneki.js introduces the concept of services handling a local or global state  very easily and following the best practices (immutability, action, reducers, ...).",source:"@site/docs/framework/service/001_introduction.md",permalink:"/docs/framework/service/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/service/001_introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"useFormContext",permalink:"/docs/framework/form/use-form-context"},next:{title:"Global service",permalink:"/docs/framework/service/global-service"}},s=[{value:"Architecture",id:"architecture",children:[]}],u={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," introduces the concept of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"services"))," handling a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"local"))," or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"global"))," state  very easily and following the best practices (immutability, action, reducers, ...)."),Object(o.b)("p",null,"The developer doesn't need to create actions, reducers, selectors, ... everything is created automatically by the service."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Local service"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A service handling a state local to a component. This service is instantied every time the component is instantied")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global service"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A service handling the global state of the application. This service is a singleton and is shared between all components")))),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("img",{alt:"Service architecture",src:Object(i.a)("img/onekijs-State Management.svg")}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," provides a library to built your own ",Object(o.b)("strong",{parentName:"p"},"local")," or ",Object(o.b)("strong",{parentName:"p"},"global")," services to handle complex asynchronous flows like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Updating the "loading" variable in the local state to ',Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Performing a AJAX GET requests and store the result in the local state"),Object(o.b)("li",{parentName:"ul"},'Updating the "loading" variable in the local state to ',Object(o.b)("strong",{parentName:"li"},"false"))))}b.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},209:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},210:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},211:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},212:function(e,t,r){"use strict";r(23),r(17),r(18);var n=r(0),a=r.n(n),o=r(210);var i=function(){return Object(n.useContext)(o.a)},c=r(209),l=r.n(c),s=r(127),u=r.n(s),b=37,p=39;t.a=function(e){var t=e.block,r=e.children,o=e.defaultValue,c=e.values,s=e.groupId,f=i(),d=f.tabGroupChoices,m=f.setTabGroupChoices,v=Object(n.useState)(o),h=v[0],O=v[1];if(null!=s){var g=d[s];null!=g&&g!==h&&O(g)}var j=function(e){O(e),null!=s&&m(s,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:l()("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===h}))[0]))}},213:function(e,t,r){"use strict";var n=r(0),a=r(50);t.a=function(){return Object(n.useContext)(a.a)}},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(215);var n=r(213);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},215:function(e,t,r){"use strict";var n=r(19),a=r(35),o=r(216),i="".startsWith;n(n.P+n.F*r(217)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},216:function(e,t,r){var n=r(71),a=r(24);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},217:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);