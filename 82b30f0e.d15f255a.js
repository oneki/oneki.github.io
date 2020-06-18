/*! For license information please see 82b30f0e.d15f255a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(1),o=n(9),r=(n(0),n(208)),a=(n(214),n(212)),c=n(211),s={id:"use-notifications",title:"useNotifications",sidebar_label:"useNotifications"},u={id:"framework/notification/use-notifications",title:"useNotifications",description:"The goal of useNotifications is to listen on a topic that contains notifications.",source:"@site/docs/framework/notification/060-use-notifications.md",permalink:"/docs/framework/notification/use-notifications",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/notification/060-use-notifications.md",sidebar_label:"useNotifications",sidebar:"someSidebar",previous:{title:"useNotificationService",permalink:"/docs/framework/notification/use-notification-service"},next:{title:"Introduction",permalink:"/docs/framework/form/introduction"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],f={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The goal of ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"useNotifications"))," is to listen on a topic that contains notifications.",Object(r.b)("br",null),"\nAs soon as the topic is updated, the component does a re-render."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Oneki.js provides a default service to send notifications, but not a default widget to handle them. You have to provide it")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const notifications = useNotifications(topic)\n")),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("h4",{id:"inputs"},"Inputs"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'// topic is a entry in the Redux state, stored under "notifications.(topic)"\n// E.g: if topic=error, then the entry in Redux state is: notifications.error\n// the value of notifications.error is an array of notifications\ntopic: string\n')),Object(r.b)("h4",{id:"outputs"},"Outputs"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"// notifications is an array of notification\nnotifications: [{\n  topic: string, // the topic to use to send the notification. If not present, topic=default\n  id: string, // Unique ID of the notification. This id is used later on to remove the notification from the Redux state. If no ID is provided, the service will autogenerated one.\n  ttl: number, // Time to leave of the notification in milliseconds. Default value=0 (means no expiration)\n  persist: boolean // A flag to indicate if the notification should survive after a route change. Default value=true\n  ... // you can put what you want in the notification. We recommend to create an object payload\n}]\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"A topic can be configured via settings.js. The configuration is detailled on this page."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"minimal-example"},"Minimal example"),Object(r.b)(a.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"code",mdxType:"TabItem"},Object(r.b)("iframe",{src:"https://codesandbox.io/embed/use-notification-service-tswy1?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotification.js&theme=dark&view=editor",style:{width:"100%",height:"1500px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(r.b)(c.a,{value:"preview",mdxType:"TabItem"},Object(r.b)("iframe",{src:"https://codesandbox.io/embed/use-notification-service-tswy1?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotification.js&theme=dark&view=preview",style:{width:"100%",height:"1500px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||r;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},209:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var a=o.apply(null,i);a&&e.push(a)}else if("object"===r)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},210:function(e,t,n){"use strict";var i=n(0),o=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},211:function(e,t,n){"use strict";var i=n(0),o=n.n(i);t.a=function(e){return o.a.createElement("div",null,e.children)}},212:function(e,t,n){"use strict";n(23),n(17),n(18);var i=n(0),o=n.n(i),r=n(210);var a=function(){return Object(i.useContext)(r.a)},c=n(209),s=n.n(c),u=n(127),l=n.n(u),f=37,p=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,u=e.groupId,d=a(),b=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(i.useState)(r),v=h[0],g=h[1];if(null!=u){var y=b[u];null!=y&&y!==v&&g(y)}var O=function(e){g(e),null!=u&&m(u,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case f:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},213:function(e,t,n){"use strict";var i=n(0),o=n(50);t.a=function(){return Object(i.useContext)(o.a)}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(215);var i=n(213);function o(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},215:function(e,t,n){"use strict";var i=n(19),o=n(35),r=n(216),a="".startsWith;i(i.P+i.F*n(217)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return a?a.call(t,i,n):t.slice(n,n+i.length)===i}})},216:function(e,t,n){var i=n(71),o=n(24);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},217:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);