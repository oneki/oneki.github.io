/*! For license information please see 4f546fb7.bf00daca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(196)),c=(n(201),n(199),n(198),n(206),{id:"form-based",title:"Form based",sidebar_label:"Form based"}),i={id:"framework/auth/authentication-type/form-based",title:"Form based",description:"Form based authentication means that the login page presents a form, so the user can specifiy his username and password.",source:"@site/docs/framework/auth/authentication-type/010_form-based.md",permalink:"/docs/framework/auth/authentication-type/form-based",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authentication-type/010_form-based.md",sidebar_label:"Form based",sidebar:"someSidebar",previous:{title:"Authentication types",permalink:"/docs/framework/auth/authentication-type/introduction"},next:{title:"OpenID Connect (server side)",permalink:"/docs/framework/auth/authentication-type/oidc-server"}},l=[{value:"Architecture",id:"architecture",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Mandatory attributes",id:"mandatory-attributes",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Form based authentication")," means that the login page presents a form, so the user can specifiy his username and password."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," lets you build the form as you wish, but provide you a function to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"submit the username / password to the backend server"),Object(o.b)("li",{parentName:"ul"},"handle the response returned by the backend server")),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for logged-in user. This means that this page is secured thanks to the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"../secure-page"}),"secure HOC")),Object(o.b)("br",null),"\nThis flow can be customized via settings.js"),Object(o.b)("img",{src:"https://www.plantuml.com/plantuml/png/VLF1Rjim3BtxAxYScaFYkmz3jwBeSGFQVG0jomuHMJ8eAcd_VfJT97RcpWU1eidt-4ZgCGgofDuLtyWRbngRsC51P8XLMTQSV6WP_P7s7SaXrNiAfQO8cHAZ8Mg2sGqEVOROnIFvFMKmD18O_aJBHHtUOVDZ6E3X9uUpUhQR0lGRb9SC3PeBcv9j52OZjja0HhXTLs9TwCYFOQDLMD-0iioOQZH7zQuouK0b9ZcC0Ddu8kPy2DZJ63MPLvui2tRVPqLMuF547OfLCDLE9pMN8cwNd3eMNgcp8RP6nX8QkvuvGvpqPjTeBP2mWMX5o7TnDIBYoK9WqWiwu90Kxs7Mz-qoAukieA6eq_s0Dd1_N-HKpAKPdoolgUv9mAWowuNGnMAb_YjBxdy5lt-zla5I88-zBGUCyHpuJlfrKjcufPxGKPF_BndPIcAV6m8cX2EfL6eX9cDiZDi2dKmuBP8Rc_o5xcVcm4-X7u9NyCAwE5LoWMgJcoVFD-8oMv00vTr0_-dYGkfTy79pfbsiuENvJUMPn2GVJy6BVP-sQ8RpkROJHkx72jnIxe2T_UykwXCeYaSzzP7_1G00",alt:null}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The configuration parameters are the following:"),Object(o.b)("h3",{id:"mandatory-attributes"},"Mandatory attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"type")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'must be "',Object(o.b)("strong",{parentName:"td"},"form"),'"')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"loginEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function returning the URL")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"logoutEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function returning the URL")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"userinfoEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null)," function (context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be:",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function that returns an object representing the userInfo. ",Object(o.b)("br",null),"For example a object like this: {email: '",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"mailto:foo@example.com"}),"foo@example.com"),"', roles: ","['ADMIN']","}}")))))),Object(o.b)("h4",{id:"optional-attributes"},"Optional attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"loginMethod")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POST"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if ",Object(o.b)("strong",{parentName:"td"},"loginEndpoint")," is an URL, the method used to send username and password to the server")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"loginContentType")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"application/json"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"can be",Object(o.b)("ul",null,Object(o.b)("li",null,"application/x-www-form-urlencoded"),Object(o.b)("li",null,"application/json")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"usernameKey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"username"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the username")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"passwordKey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the password")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"rememberMeKey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rememberMe"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the rememberMe feature")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"logoutMethod")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GET"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if ",Object(o.b)("strong",{parentName:"td"},"logoutEndpoint")," is an URL, the method used to call the logout URL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"callback")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function(response, context): ","[token,securityContext]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a callback function to parse the result of the authentication.",Object(o.b)("br",null),"The fonction returns optionally a token and/or a securityContext  (if not set, it's assumed that the session is done via a cookie and the security context is retrieved via the ",Object(o.b)("strong",{parentName:"td"},"userinfoEndpoint")," defined above)")))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  idp: {\n    default: {\n      // MANDATORY parameters\n      type: 'form',\n      loginEndpoint: '/api/login',\n      logoutEndpoint: '/api/logout',\n      userinfoEndpoint: '/api/whoami',\n\n      // OPTIONAL parameters\n      loginMethod: 'POST',\n      loginContentType: 'application/json',\n      usernameKey: 'username',\n      passwordKey: 'password',\n      rememberMeKey: 'rememberMe',\n      logoutMethod: 'GET',\n      callback: (result, context) => [null, result]  \n    }\n  }\n}\n")))}u.isMDXComponent=!0},195:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},199:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),o=n(197);var c=function(){return Object(a.useContext)(o.a)},i=n(195),l=n.n(i),b=n(127),u=n.n(b),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,i=e.values,b=e.groupId,d=c(),m=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(a.useState)(o),f=j[0],g=j[1];if(null!=b){var h=m[b];null!=h&&h!==f&&g(h)}var y=function(e){g(e),null!=b&&O(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:l()("tabs__item",u.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},200:function(e,t,n){"use strict";var a=n(0),r=n(50);t.a=function(){return Object(a.useContext)(r.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(202);var a=n(200);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},202:function(e,t,n){"use strict";var a=n(19),r=n(35),o=n(203),c="".startsWith;a(a.P+a.F*n(204)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return c?c.call(t,a,n):t.slice(n,n+a.length)===a}})},203:function(e,t,n){var a=n(71),r=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},204:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},205:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},206:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=(n(72),n(205),function(e){var t=e.type,n=e.name,a=e.height,r=void 0===a?500:a,c=e.modules,i="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/"+t+"/"+n+"?codemirror=1&fontsize=14&theme=dark&view=editor";c&&(i+="&module=",c.forEach((function(e,t){t>0&&(i+=","),i+=e})));var l="onekijs-"+n.split("/").join("-");return o.a.createElement("iframe",{src:i,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:l,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})});t.a=function(e){return o.a.createElement(c,Object(a.a)({type:"next"},e))}}}]);