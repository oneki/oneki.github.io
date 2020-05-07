/*! For license information please see 22fb8405.bacc3f05.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(177)),i=r(180),s=r(181),l={id:"use-get",title:"useGet",sidebar_label:"useGet"},c={id:"data/use-get",title:"useGet",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/data/010-use-get.md",permalink:"/docs/data/use-get",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/data/010-use-get.md",sidebar_label:"useGet",sidebar:"someSidebar",previous:{title:"Environment variables",permalink:"/docs/configuration/multi-env"},next:{title:"usePost",permalink:"/docs/data/use-post"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]},{value:"onError with notification example",id:"onerror-with-notification-example",children:[]}]}],p={rightToc:u},d="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [data, loading, refresh] = useGet(url, options);\nconst [data, loading, refresh] = useSecureGet(url, options);\n")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useGet"))," is to send an ajax GET request and returns back the data.",Object(o.b)("br",null)),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useSecureGet"))," is similar to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useGet"))," but adds a ",Object(o.b)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note")),": The data are stored in the state of the component and ",Object(o.b)("strong",{parentName:"p"},"not")," in the redux store.")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// the URL the Ajax request is sent to [mandatory]\nurl: string,\n\n// all options below are [optional]\noptions: {\n  // function called on a sucessfull GET (Promise / async allowed)\n  onSuccess: function(data, context), \n\n  // if onError is a function, this function is called in case of failure (Promise / async allowed)\n  // if onError is a string, the value must be a URL then the hook does a redirect to this URL\n  // if onError is not present, the error message is sent directly to the notificationService\n  onError: string | function(error, context),\n\n  // parameters below are passed directly to fetch()\n  // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch\n  // for more details\n  headers,\n  credentials,\n  cache,\n  redirect,\n  referrer,\n  referrerPolicy,\n  integrity,\n  keepalive,\n  signal\n} \n")),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// the data returned by the server.\n// "data" is null while the Ajax request is pending.\ndata: object,\n\n// a flag to indicate if the ajax request is pending\n// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending\nloading: boolean\n\n// a function that can be called to force a re-execution of useGet\nrefresh: function()\n')),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)("p",null,"The minimal example shows how to retrieve data from a backend server.",Object(o.b)("br",null),"\nA loading indicator (Loading ...) is displayed while the AJAX request is pending."),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-yhj30?fontsize=14&hidenavigation=1&initialpath=%2Fusers&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=editor",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-yhj30?fontsize=14&hidenavigation=1&initialpath=%2Fusers&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=preview",style:{width:"100%",height:"700px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("h3",{id:"onerror-with-notification-example"},"onError with notification example"),Object(o.b)("p",null,"This is an example showing how to handle onError using the notification service",Object(o.b)("br",null),'\nActually this is exactly what it\'s done if no "onError" is specified in useGet'),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-notification-kqtmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=editor",style:{width:"100%",height:"1050px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-notification-kqtmm?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Flist%2FUserList.js&theme=dark&view=preview",style:{width:"100%",height:"1050px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}b.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,s({ref:t},c,{components:r})):a.a.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},178:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},180:function(e,t,r){"use strict";r(23),r(17),r(18);var n=r(0),a=r.n(n),o=r(178),i=r.n(o),s=r(118),l=r.n(s),c={left:37,right:39};t.a=function(e){var t=e.block,r=e.children,o=e.defaultValue,s=e.values,u=Object(n.useState)(o),p=u[0],d=u[1],b=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:i()("tab-item",l.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case c.right:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case c.left:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(b,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===p}))[0]))}},181:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);