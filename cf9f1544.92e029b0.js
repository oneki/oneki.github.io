/*! For license information please see cf9f1544.92e029b0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{183:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return u}));var a=n(1),r=n(9),b=(n(0),n(194)),l=(n(199),n(197),n(196),n(204),{id:"external",title:"External",sidebar_label:"External"}),c={id:"framework/auth/authentication-type/external",title:"External",description:"Form based authentication means that the login page presents a form, so the user can specifiy his username and password.",source:"@site/docs/framework/auth/authentication-type/020-external.md",permalink:"/docs/framework/auth/authentication-type/external",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authentication-type/020-external.md",sidebar_label:"External"},i=[{value:"Architecture",id:"architecture",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Mandatory attributes",id:"mandatory-attributes",children:[]},{value:"External authentication",id:"external-authentication",children:[]}]}],o={rightToc:i};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Form based authentication")," means that the login page presents a form, so the user can specifiy his username and password."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Oneki.js")," lets you build the form as you wish, but provide you a function to:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"submit the username / password to the backend server"),Object(b.b)("li",{parentName:"ul"},"handle the response returned by the backend server")),Object(b.b)("h2",{id:"architecture"},"Architecture"),Object(b.b)("h2",{id:"configuration"},"Configuration"),Object(b.b)("p",null,"The configuration parameters are the following:"),Object(b.b)("h3",{id:"mandatory-attributes"},"Mandatory attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'must be "',Object(b.b)("strong",{parentName:"td"},"form"),'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null),"function(context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function returning the URL")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"logoutEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null),"function(context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function returning the URL")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"userinfoEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null)," function (context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be:",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function that returns an object representing the userInfo. ",Object(b.b)("br",null),"For example a object like this: {email: '",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"mailto:foo@example.com"}),"foo@example.com"),"', roles: ","['ADMIN']","}}")))))),Object(b.b)("h4",{id:"optional-attributes"},"Optional attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginMethod")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POST"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if ",Object(b.b)("strong",{parentName:"td"},"loginEndpoint")," is an URL, the method used to send username and password to the server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginContentType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"application/json"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"can be",Object(b.b)("ul",null,Object(b.b)("li",null,"application/x-www-form-urlencoded"),Object(b.b)("li",null,"application/json")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"usernameKey")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"username"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the username")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"passwordKey")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"rememberMeKey")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rememberMe"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the field expected by the server for the rememberMe feature")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"logoutMethod")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if ",Object(b.b)("strong",{parentName:"td"},"logoutEndpoint")," is an URL, the method used to call the logout URL")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"callback")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function(response, context): ","[token,securityContext]"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a callback function to parse the result of the authentication.",Object(b.b)("br",null),"The fonction returns optionally a token and/or a securityContext  (if not set, it's assumed that the session is done via a cookie and the security context is retrieved via the ",Object(b.b)("strong",{parentName:"td"},"userinfoEndpoint")," defined above)")))),Object(b.b)("h4",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  idp: {\n    default: {\n      // MANDATORY parameters\n      type: 'form',\n      loginEndpoint: '/api/login',\n      logoutEndpoint: '/api/logout',\n      userinfoEndpoint: '/api/whoami',\n\n      // OPTIONAL parameters\n      loginMethod: 'POST',\n      loginContentType: 'application/json',\n      usernameKey: 'username',\n      passwordKey: 'password',\n      rememberMeKey: 'rememberMe',\n      logoutMethod: 'GET',\n      callback: (result, context) => [null, result]  \n    }\n  }\n}\n")),Object(b.b)("h3",{id:"external-authentication"},"External authentication"),Object(b.b)("p",null,"The configuration parameters are the following:"),Object(b.b)("h4",{id:"mandatory-attributes-1"},"Mandatory attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'must be "',Object(b.b)("strong",{parentName:"td"},"external"),'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null),"function(context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function returning the URL")),"A redirect is done to this URL")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"logoutEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null),"function(context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function returning the URL")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"userinfoEndpoint")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(b.b)("br",null)," function (context)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be:",Object(b.b)("ul",null,Object(b.b)("li",null,"A relative or absolute URL"),Object(b.b)("li",null,"A function that returns an object representing the userInfo. ",Object(b.b)("br",null),"For example a object like this: {email: '",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"mailto:foo@example.com"}),"foo@example.com"),"', roles: ","['ADMIN']","}}")))))),Object(b.b)("h4",{id:"optional-attributes-1"},"Optional attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginMethod")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POST"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if ",Object(b.b)("strong",{parentName:"td"},"loginEndpoint")," is an URL, the method used to send username and password to the server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"loginContentType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"application/json"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"can be",Object(b.b)("ul",null,Object(b.b)("li",null,"application/x-www-form-urlencoded"),Object(b.b)("li",null,"application/json")))))))}u.isMDXComponent=!0},193:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var b=typeof a;if("string"===b||"number"===b)t.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&t.push(l)}else if("object"===b)for(var c in a)n.call(a,c)&&a[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},194:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},b=Object.keys(t);for(a=0;a<b.length;a++)n=b[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(a=0;a<b.length;a++)n=b[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),u=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,b=t.originalType,l=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),p=u(n),O=a,j=p["".concat(l,".").concat(O)]||p[O]||s[O]||b;return n?r.a.createElement(j,c(c({ref:e},o),{},{components:n})):r.a.createElement(j,c({ref:e},o))}));function j(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var b=n.length,l=new Array(b);l[0]=O;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},195:function(t,e,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});e.a=r},196:function(t,e,n){"use strict";var a=n(0),r=n.n(a);e.a=function(t){return r.a.createElement("div",null,t.children)}},197:function(t,e,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),b=n(195);var l=function(){return Object(a.useContext)(b.a)},c=n(193),i=n.n(c),o=n(127),u=n.n(o),p=37,s=39;e.a=function(t){var e=t.block,n=t.children,b=t.defaultValue,c=t.values,o=t.groupId,O=l(),j=O.tabGroupChoices,d=O.setTabGroupChoices,m=Object(a.useState)(b),g=m[0],f=m[1];if(null!=o){var h=j[o];null!=h&&h!==g&&f(h)}var N=function(t){f(t),null!=o&&d(o,t)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":e})},c.map((function(t){var e=t.value,n=t.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:i()("tabs__item",u.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:function(t){return function(t,e,n){switch(n.keyCode){case s:!function(t,e){var n=t.indexOf(e)+1;t[n]?t[n].focus():t[0].focus()}(t,e);break;case p:!function(t,e){var n=t.indexOf(e)-1;t[n]?t[n].focus():t[t.length-1].focus()}(t,e)}}(y,t.target,t)},onFocus:function(){return N(e)},onClick:function(){return N(e)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(t){return t.props.value===g}))[0]))}},198:function(t,e,n){"use strict";var a=n(0),r=n(50);e.a=function(){return Object(a.useContext)(r.a)}},199:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(200);var a=n(198);function r(t){var e=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},200:function(t,e,n){"use strict";var a=n(19),r=n(35),b=n(201),l="".startsWith;a(a.P+a.F*n(202)("startsWith"),"String",{startsWith:function(t){var e=b(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return l?l.call(e,a,n):e.slice(n,n+a.length)===a}})},201:function(t,e,n){var a=n(71),r=n(24);t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},202:function(t,e,n){var a=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}},203:function(t,e,n){var a=n(25).f,r=Function.prototype,b=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(b)[1]}catch(t){return""}}})},204:function(t,e,n){"use strict";var a=n(1),r=n(0),b=n.n(r),l=(n(72),n(203),function(t){var e=t.type,n=t.name,a=t.height,r=void 0===a?500:a,l=t.modules,c="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/"+e+"/"+n+"?codemirror=1&fontsize=14&theme=dark&view=editor";l&&(c+="&module=",l.forEach((function(t,e){e>0&&(c+=","),c+=t})));var i="onekijs-"+n.split("/").join("-");return b.a.createElement("iframe",{src:c,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:i,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})});e.a=function(t){return b.a.createElement(l,Object(a.a)({type:"next"},t))}}}]);