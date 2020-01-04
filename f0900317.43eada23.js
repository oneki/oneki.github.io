/*! For license information please see f0900317.43eada23.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(169)),s=n(173),i=n(174),c={id:"use-put",title:"usePut",sidebar_label:"usePut"},l={id:"hooks/use-put",title:"usePut",description:"import Tabs from '@theme/Tabs';\r",source:"@site/docs/hooks/030-use-put.md",permalink:"/docs/hooks/use-put",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/030-use-put.md",sidebar_label:"usePut",sidebar:"someSidebar",previous:{title:"usePost",permalink:"/docs/hooks/use-post"},next:{title:"useDelete",permalink:"/docs/hooks/use-delete"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]},{value:"onSuccess example",id:"onsuccess-example",children:[]},{value:"onError with notification example",id:"onerror-with-notification-example",children:[]}]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const [put, loading] = usePut(url, options);\nconst [put, loading] = useSecurePut(url, options);\n")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"usePut"))," is to send an ajax PUT request and returns back the payload sent by the server.",Object(o.b)("br",null),"\nBy default, the body of the request is a JSON string."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useSecurePut"))," is similar to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"usePut"))," but adds a ",Object(o.b)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note")),": The data are stored in the state of the component and ",Object(o.b)("strong",{parentName:"p"},"not")," in the redux store.")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// the URL the Ajax request is sent to [mandatory]\nurl: string,\n\n// all options below are [optional]\noptions: {\n  // if onSuccess is a function, this function is called after a sucessful call\n  // if onSuccess is a string, the value must be a URL. The hook does a redirect to this URL after a sucessful call\n  onSuccess: string | function(data, context), \n\n  // if onError is a function, this function is called in case of failure (Promise / async allowed)\n  // if onError is a string, the value must be a URL then the hook does a redirect to this URL after a failure\n  // if onError is not present, the error message is sent directly to the notificationService\n  onError: string | function(error, context),\n\n  // parameters below are passed directly to fetch()\n  // See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch\n  // for more details\n  headers,\n  credentials,\n  cache,\n  redirect,\n  referrer,\n  referrerPolicy,\n  integrity,\n  keepalive,\n  signal\n} \n")),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'// put is a function that sends the ajax PUT request\n// the signature is: put(data, options) where:\n// - "data" is the body of the PUT request\n// - "options" is the same object as the one used for usePut. Use this object to override an option passed to usePut\nput: function(data, options),\n\n// a flag to indicate if the ajax request is pending\n// "loading" is true only after 100ms (configurable via settings.js) and if the ajax request is pending\nloading: boolean\n')),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)("p",null,"This example shows how to display a form with two input fields: ",Object(o.b)("strong",{parentName:"p"},"name")," and ",Object(o.b)("strong",{parentName:"p"},"firstname")," to edit a user.",Object(o.b)("br",null),"\nFirst, the component retrieves a user via a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useGet")),Object(o.b)("br",null),"\nThen, the component displays the form with fields pre-filled in with the data returned by ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useGet")),Object(o.b)("br",null),"\nFinally, a click on the button ",Object(o.b)("em",{parentName:"p"},"Submit")," send the data to the server via an ajax PUT request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the call is successful, one is redirected to ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"/users"))),Object(o.b)("li",{parentName:"ul"},"If the call fails, the error is sent to the ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"notificationService")))),Object(o.b)(s.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-t7sfi?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fedit%2FUserEdit.js&theme=dark&view=editor",style:{width:"100%",height:"1300px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-post-t7sfi?fontsize=14&hidenavigation=1&module=%2Fsrc%2Froutes%2Fusers%2Fedit%2FUserEdit.js&theme=dark&view=preview",style:{width:"100%",height:"1300px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("h3",{id:"onsuccess-example"},"onSuccess example"),Object(o.b)("p",null,"The logic is the same as for ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"usePost")),". Please refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"use-post"}),"the documentation of usePost")," for an example"),Object(o.b)("h3",{id:"onerror-with-notification-example"},"onError with notification example"),Object(o.b)("p",null,"The logic is the same as for ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"usePost")),". Please refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"use-post"}),"the documentation of usePost")," for an example"))}b.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},170:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},173:function(e,t,n){"use strict";n(23),n(17),n(18);var r=n(0),a=n.n(r),o=n(170),s=n.n(o),i=n(118),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,i=e.values,p=Object(r.useState)(o),b=p[0],m=p[1],d=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:s()("tab-item",c.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},174:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);