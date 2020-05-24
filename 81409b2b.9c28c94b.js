/*! For license information please see 81409b2b.9c28c94b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var r=a(1),o=a(9),n=(a(0),a(204)),s=a(208),i=a(207),l={id:"use-post",title:"usePost",sidebar_label:"usePost"},c={id:"services/rest/use-post",title:"usePost",description:"`javascript",source:"@site/docs/services/rest/020-use-post.md",permalink:"/docs/services/rest/use-post",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/services/rest/020-use-post.md",sidebar_label:"usePost",sidebar:"someSidebar",previous:{title:"useGet",permalink:"/docs/services/rest/use-get"},next:{title:"usePut",permalink:"/docs/services/rest/use-put"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]},{value:"onSuccess example",id:"onsuccess-example",children:[]},{value:"onError with notification example",id:"onerror-with-notification-example",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const [post, loading] = usePost(url, options);\nconst [post, loading] = useSecurePost(url, options);\n")),Object(n.b)("p",null,"The goal of ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"usePost"))," is to send an ajax POST request and returns back the payload sent by the server.",Object(n.b)("br",null),"\nBy default, the body of the request is a JSON string."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"useSecurePost"))," is similar to ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"usePost"))," but adds a ",Object(n.b)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"Note")),": The data are stored in the state of the component and ",Object(n.b)("strong",{parentName:"p"},"not")," in the redux store.")),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("h4",{id:"inputs"},"Inputs"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// the URL the Ajax request is sent to [mandatory]\nurl: string,\n\n// all options below are [optional]\noptions: {\n  // if onSuccess is a function, this function is called after a sucessful call\n  // if onSuccess is a string, the value must be a URL. The hook does a redirect to this URL after a sucessful call\n  onSuccess: string | function(data, context), \n\n  // if onError is a function, this function is called in case of failure (Promise / async allowed)\n  // if onError is a string, the value must be a URL then the hook does a redirect to this URL after a failure\n  // if onError is not present, the error message is sent directly to the notificationService\n  onError: string | function(error, context),\n\n  // parameters below are passed directly to fetch()\n  // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch\n  // for more details\n  headers,\n  credentials,\n  cache,\n  redirect,\n  referrer,\n  referrerPolicy,\n  integrity,\n  keepalive,\n  signal\n} \n")),Object(n.b)("h4",{id:"outputs"},"Outputs"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'// post is a function that sends the ajax POST request\n// the signature is: post(data, options) where:\n// - "data" is the body of the POST request\n// - "options" is the same object as the one used for usePost. Use this object to override an option passed to usePost\npost: function(data, options),\n\n// a flag to indicate if the ajax request is pending\n// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending\nloading: boolean\n')),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("h3",{id:"minimal-example"},"Minimal example"),Object(n.b)("p",null,"This example shows how to display a form with two input fields: ",Object(n.b)("strong",{parentName:"p"},"name")," and ",Object(n.b)("strong",{parentName:"p"},"firstname")," and submit the data to a server via a ajax POST request."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If the call is successful, one is redirected to ",Object(n.b)("strong",{parentName:"li"},Object(n.b)("em",{parentName:"strong"},"/users"))),Object(n.b)("li",{parentName:"ul"},"If the call fails, the error is sent to the ",Object(n.b)("strong",{parentName:"li"},Object(n.b)("em",{parentName:"strong"},"notificationService")))),Object(n.b)(s.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"code",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-notification-t7sfi?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor",style:{width:"100%",height:"1000px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(n.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-get-notification-t7sfi?fontsize=14&initialpath=%2Fusers%2Fcreate&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview",style:{width:"100%",height:"1000px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(n.b)("h3",{id:"onsuccess-example"},"onSuccess example"),Object(n.b)("p",null,"This example show how to display a success message on top of the form if the POST call is successful."),Object(n.b)(s.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"code",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-8z56k?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor",style:{width:"100%",height:"1200px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(n.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-8z56k?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview",style:{width:"100%",height:"1200px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(n.b)("h3",{id:"onerror-with-notification-example"},"onError with notification example"),Object(n.b)("p",null,"This is an example showing how to handle onError using the notification service",Object(n.b)("br",null),'\nActually this is exactly what it\'s done if no "onError" is specified in useGet'),Object(n.b)(s.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"code",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-ustdh?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=editor",style:{width:"100%",height:"1300px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(n.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(n.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-ustdh?fontsize=14&hidenavigation=1&initialpath=%2Fusers%2Fcreate&module=%2Fsrc%2Froutes%2Fusers%2Fcreate%2FUserCreate.js&theme=dark&view=preview",style:{width:"100%",height:"1300px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}d.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||n;return a?o.a.createElement(m,i(i({ref:t},c),{},{components:a})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},205:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===n)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},206:function(e,t,a){"use strict";var r=a(0),o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},207:function(e,t,a){"use strict";var r=a(0),o=a.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},208:function(e,t,a){"use strict";a(23),a(17),a(18);var r=a(0),o=a.n(r),n=a(206);var s=function(){return Object(r.useContext)(n.a)},i=a(205),l=a.n(i),c=a(127),u=a.n(c),p=37,d=39;t.a=function(e){var t=e.block,a=e.children,n=e.defaultValue,i=e.values,c=e.groupId,b=s(),m=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(r.useState)(n),v=h[0],g=h[1];if(null!=c){var j=m[c];null!=j&&j!==v&&g(j)}var w=function(e){g(e),null!=c&&f(c,e)},O=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:l()("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return w(t)},onClick:function(){return w(t)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}}}]);