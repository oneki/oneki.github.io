/*! For license information please see 1e8191ef.9009d783.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),i=(n(0),n(198)),o=(n(203),n(201),n(200),n(208),{id:"introduction",title:"Authentication types",sidebar_label:"Introduction"}),c={id:"framework/auth/authentication-type/introduction",title:"Authentication types",description:"The goal of the authentication library is to provide the same service / methods for any kind of authentication. Everything specific to a type of authentication is configured in settings.js",source:"@site/docs/framework/auth/authentication-type/001_introduction.md",permalink:"/docs/framework/auth/authentication-type/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authentication-type/001_introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Authentication services",permalink:"/docs/framework/auth/services"},next:{title:"Form based",permalink:"/docs/framework/auth/authentication-type/form-based"}},b=[{value:"Structure",id:"structure",children:[]},{value:"String vs Function",id:"string-vs-function",children:[{value:"Context",id:"context",children:[]}]},{value:"Endpoint",id:"endpoint",children:[{value:"userinfo endpoint",id:"userinfo-endpoint",children:[]}]},{value:"Callback",id:"callback",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The goal of the authentication library is to provide the same service / methods for any kind of authentication. Everything specific to a type of authentication is configured in ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"../configuration/introduction"}),"settings.js"))),Object(i.b)("p",null,"There are 4 types of authentication, each having their specific configuration format: "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Use case"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Form based"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"form"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authentication via a standard username / password React form")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"External authentication"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"external"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authentication is handled by an external system redirecting to the application once the authenticiation is done")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Open ID Connect"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"oidc_server",Object(i.b)("br",null),"oidc_client"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authentication via Open ID Connect authorization code flow.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"oidc_server")," means that the exchange of the authorization code for a token is done on backend side",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"oidc_client")," means that everything is done on client side (less secure but doesn't require a server)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Oauth2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"oauth2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authentication via Oauth2 authorization code flow.")))),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"The authentication services provided by ",Object(i.b)("strong",{parentName:"p"},"Oneki.js")," retrieve their configuration from the key ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"idp/:idpName"))," in ",Object(i.b)("strong",{parentName:"p"},"settings.js")," where ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"idpName"))," is an ID used when the service is instantied."),Object(i.b)("h5",{id:"examples"},"Examples"),Object(i.b)("p",null,"Content of settings.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'export default {\n  idp: {\n    default: {\n      type: "oauth2",\n      ...\n    },\n    myId: {\n      type: "form",\n      ...\n    },\n    myOtherId: {\n      type: "external",\n      ...\n    }\n  }\n}\n')),Object(i.b)("p",null,"Instantiation of the service"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Login service will use the configuration idp.myId\nuseLoginService('myId');\n\n// As no id is indicated below, login service will use idp.default\nuseLoginService();\n")),Object(i.b)("h2",{id:"string-vs-function"},"String vs Function"),Object(i.b)("p",null,"For many attributes, the value can be a ",Object(i.b)("strong",{parentName:"p"},"String")," or a ",Object(i.b)("strong",{parentName:"p"},"Function")," (can be ",Object(i.b)("strong",{parentName:"p"},"async"),") receiving a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"#context"}),"context")))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"loginEndpoint: '/en/auth'\n// or\nloginEndpoint: (context) => {\n  return `https://example.com/${context.i18n.locale}/auth`\n}\n")),Object(i.b)("h3",{id:"context"},"Context"),Object(i.b)("p",null,"The context contains the following attributes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const context = {\n  idp // the configuration of the active IDP from settings.js\n  router\n  store // the Redux store\n  settings // the full settings.js\n  i18n // to know which locale is active\n}\n")),Object(i.b)("h2",{id:"endpoint"},"Endpoint"),Object(i.b)("p",null,"Endpoints specify how to interact with the backend.",Object(i.b)("br",null),"\nFor example, in a Form based authentication, you must indicate the URL used to send the username / password to do the authentication."),Object(i.b)("p",null,"You can provide the value in two ways:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Way"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If a String is provided, this is the URL to call the backend. ",Object(i.b)("br",null),"If the URL is relative (e.g: ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"/api/login")),"), it's prefixed with the ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"server.baseUrl"))," from settings.js"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"/api/login")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instead of a String, a function with the format ",Object(i.b)("strong",{parentName:"td"},"(context) => URL")," can be specified. ",Object(i.b)("strong",{parentName:"td"},"Oneki.js")," executes it to retrieve the URL",Object(i.b)("br",null),Object(i.b)("br",null),"This function can be ",Object(i.b)("strong",{parentName:"td"},"async")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(context) => ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://oneki.org/api/login"}),"https://oneki.org/api/login"))))),Object(i.b)("h6",{id:"examples-1"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  idp: {\n    default: {\n      type: 'form',\n\n      // Configuration via a function\n      loginEndpoint: ({ idp, router, store, settings, i18n }) => {\n        return `https://example.com/${i18n.locale}/auth`\n      },\n\n      // Configuration via a String\n      logoutEndpoint: '/logout'\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"userinfo-endpoint"},"userinfo endpoint"),Object(i.b)("p",null,"The userinfo endpoint is used to retrieve the security context of the logged-in user. The security context often contains attributes like name, firstname, email, roles, ..."),Object(i.b)("p",null,"The userinfo endpoint is a little bit different because one can provide the value in three ways:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Way"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String (URL)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a URL String. ",Object(i.b)("br",null),"If the URL is relative (e.g: ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"/api/userinfo")),"), it's prefixed with the ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"server.baseUrl"))," from settings.js"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"/api/userinfo")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instead of a String, a function with the format ",Object(i.b)("strong",{parentName:"td"},"(context) => URL")," can be specified. ",Object(i.b)("strong",{parentName:"td"},"Oneki.js")," executes it to retrieve the URL",Object(i.b)("br",null),Object(i.b)("br",null),"This function can be ",Object(i.b)("strong",{parentName:"td"},"async")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(context) => ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://oneki.org/api/userinfo"}),"https://oneki.org/api/userinfo"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String (token...)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A string starting with ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"token")),".",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"Oneki.js")," extracts the JWT token from the global state and uses it as the security context.",Object(i.b)("br",null),"The global state is populated with the token during the authentication",Object(i.b)("br",null),Object(i.b)("br",null),"Must be one of these values:",Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("strong",{parentName:"td"},"token://id_token")),Object(i.b)("li",null,Object(i.b)("strong",{parentName:"td"},"token://access_token")),Object(i.b)("li",null,Object(i.b)("strong",{parentName:"td"},"token"))),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#token-extraction"}),"see token extraction")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"token://id_token")))),Object(i.b)("h5",{id:"token"},"Token"),Object(i.b)("p",null,"When the value starts with ",Object(i.b)("strong",{parentName:"p"},"token"),", it means that the backend doesn't expose a userinfo endpoint, but the security context can be retrieved from a token existing in the global state (under the key ",Object(i.b)("strong",{parentName:"p"},"auth.token"),") with the following format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id_token": "JWT_ID_TOKEN_IN_BASE64",\n  "access_token": "JWT_ACCESS_TOKEN_IN_BASE64",\n  ...\n}\n')),Object(i.b)("p",null,"The token is stored in the global state via a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"#callback"}),"callback function"))),Object(i.b)("h5",{id:"token-extraction"},"Token extraction"),Object(i.b)("p",null,"if the value is "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"token://id_token"),", then the token JWT_ID_TOKEN_IN_BASE64 is parsed and the claims become the security context."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"token://access_token"),", then the token JWT_ACCESS_TOKEN_IN_BASE64 is parsed and the claims become the security context."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"token"),", then the whole response becomes the security context (there is no parsing)")),Object(i.b)("h6",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"userinfoEndpoint: '/api/whoami'\n// or\nuserInfoEndpoint: (context) => '/api/whoami'\n// or\nuserInfoEndpoint: 'token://id_token' //will not call the backend, but expects that the token is in the global state\n")),Object(i.b)("h2",{id:"callback"},"Callback"),Object(i.b)("p",null,"Via ",Object(i.b)("strong",{parentName:"p"},"settings.js")," you can specific a callback executed at the end of the authentication process",Object(i.b)("br",null)),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"callback: (result, context) => [token, securityContext]\n")),Object(i.b)("p",null,"The callback receives the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"#context"}),"context"))," but also a ",Object(i.b)("strong",{parentName:"p"},"result")," object. The ",Object(i.b)("strong",{parentName:"p"},"result")," object is specific to the type of authentication",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Example")),": For a Form based authentication, the ",Object(i.b)("strong",{parentName:"p"},"result")," object is the response from the backend"),Object(i.b)("p",null,"The callback returns optionally a token and/or a securityContext:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"token")," must have a specific format ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"#token"}),"described here")),". ",Object(i.b)("strong",{parentName:"li"},"Oneki.js")," stores the token in one of the following location (based on the configuration attribute ",Object(i.b)("strong",{parentName:"li"},"persist"),"):",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"no storage")," (if persist = null)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"global state")," with the key ",Object(i.b)("strong",{parentName:"li"},"auth.token"),' (if persist = "memory")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cookie"),' (if persist = "cookie")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"sessionStorage"),' (if persist = "sessionStorage")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"localStorage"),' (if persist = "localStorage")'))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"securityContext")," is stored in the global state with the key ",Object(i.b)("strong",{parentName:"li"},"auth.securityContext"))))}s.isMDXComponent=!0},197:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,j=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(j,c(c({ref:t},l),{},{components:n})):r.a.createElement(j,c({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},201:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),i=n(199);var o=function(){return Object(a.useContext)(i.a)},c=n(197),b=n.n(c),l=n(127),s=n.n(l),u=37,p=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,l=e.groupId,d=o(),j=d.tabGroupChoices,m=d.setTabGroupChoices,O=Object(a.useState)(i),h=O[0],g=O[1];if(null!=l){var f=j[l];null!=f&&f!==h&&g(f)}var N=function(e){g(e),null!=l&&m(l,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:b()("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){return N(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},202:function(e,t,n){"use strict";var a=n(0),r=n(50);t.a=function(){return Object(a.useContext)(r.a)}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(204);var a=n(202);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},204:function(e,t,n){"use strict";var a=n(19),r=n(35),i=n(205),o="".startsWith;a(a.P+a.F*n(206)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},205:function(e,t,n){var a=n(71),r=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},206:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},207:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},208:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=(n(72),n(207),function(e){var t=e.type,n=e.name,a=e.height,r=void 0===a?500:a,o=e.modules,c="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/"+t+"/"+n+"?codemirror=1&fontsize=14&theme=dark&view=editor";o&&(c+="&module=",o.forEach((function(e,t){t>0&&(c+=","),c+=e})));var b="onekijs-"+n.split("/").join("-");return i.a.createElement("iframe",{src:c,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:b,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})});t.a=function(e){return i.a.createElement(o,Object(a.a)({type:"next"},e))}}}]);