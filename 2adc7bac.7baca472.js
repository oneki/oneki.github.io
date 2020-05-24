/*! For license information please see 2adc7bac.7baca472.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(1),r=n(9),o=(n(0),n(204)),a=n(210),c=n(208),s=n(207),u={id:"use-notifications",title:"useNotifications",sidebar_label:"useNotifications"},l={id:"hooks/use-notifications",title:"useNotifications",description:"`javascript",source:"@site/docs/hooks/060-use-notifications.md",permalink:"/docs/hooks/use-notifications",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/060-use-notifications.md",sidebar_label:"useNotifications"},p=[{value:"Architecture",id:"architecture",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],f={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const notifications = useNotifications(topic)\n")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useNotifications"))," is to listen on a topic that contains notifications.",Object(o.b)("br",null),"\nAs soon as the topic is updated, the component does a re-render."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Oneki.js provides a default service to send notifications, but not a default widget to handle them. You have to provide it")),Object(o.b)("h3",{id:"architecture"},"Architecture"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useNotificationService"))," is a producer service. The notifications produced by ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useNotificationService"))," are consumed by ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useNotifications"))," as described on the figure below"),Object(o.b)("img",{alt:"Notification architecture",src:Object(a.a)("img/notification_service.svg")}),";",Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'// topic is a entry in the Redux state, stored under "notification.(topic)"\n// E.g: if topic=error, then the entry in Redux state is: notification.error\n// the value of notification.error is an array of notifications\ntopic: string\n')),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"// notifications is an array of notification\nnotifications: [{\n  topic: string, // the topic to use to send the notification. If not present, topic=default\n  id: string, // Unique ID of the notification. This id is used later on to remove the notification from the Redux state. If no ID is provided, the service will autogenerated one.\n  ttl: number, // Time to leave of the notification in milliseconds. Default value=0 (means no expiration)\n  persist: boolean // A flag to indicate if the notification should survive after a route change. Default value=true\n  payload: object // The payload of the notification.\n}]\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"A topic can be configured via settings.js. The configuration is detailled on this page."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)(c.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-notification-service-tswy1?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotification.js&theme=dark&view=editor",style:{width:"100%",height:"1500px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/use-notification-service-tswy1?fontsize=14&hidenavigation=1&module=%2Fsrc%2FNotification.js&theme=dark&view=preview",style:{width:"100%",height:"1500px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=i,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},205:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var a=r.apply(null,i);a&&e.push(a)}else if("object"===o)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},206:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},207:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){return r.a.createElement("div",null,e.children)}},208:function(e,t,n){"use strict";n(23),n(17),n(18);var i=n(0),r=n.n(i),o=n(206);var a=function(){return Object(i.useContext)(o.a)},c=n(205),s=n.n(c),u=n(127),l=n.n(u),p=37,f=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,u=e.groupId,b=a(),d=b.tabGroupChoices,m=b.setTabGroupChoices,h=Object(i.useState)(o),v=h[0],g=h[1];if(null!=u){var O=d[u];null!=O&&O!==v&&g(O)}var j=function(e){g(e),null!=u&&m(u,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case f:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},209:function(e,t,n){"use strict";var i=n(0),r=n(50);t.a=function(){return Object(i.useContext)(r.a)}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(211);var i=n(209);function r(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},211:function(e,t,n){"use strict";var i=n(19),r=n(35),o=n(212),a="".startsWith;i(i.P+i.F*n(213)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return a?a.call(t,i,n):t.slice(n,n+i.length)===i}})},212:function(e,t,n){var i=n(71),r=n(24);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},213:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);