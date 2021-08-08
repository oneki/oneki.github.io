"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[9226],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(7294),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=r().createContext({}),p=function(t){var e=r().useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r().createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r().createElement(r().Fragment,{},e)}},m=r().forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r().createElement(k,i(i({ref:e},s),{},{components:n})):r().createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},4996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return o}});var a=n(2263),r=n(3919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,i=void 0!==o&&o,u=l.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return e+n;var p=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+p:p}(l,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},8215:function(t,e,n){var a=n(7294),r=n.n(a);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n.n(a),l=n(9443);var o=function(){var t=(0,a.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=n(6010),u="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var d=function(t){var e=t.lazy,n=t.block,l=t.defaultValue,d=t.values,m=t.groupId,k=t.className,g=o(),h=g.tabGroupChoices,N=g.setTabGroupChoices,b=(0,a.useState)(l),f=b[0],v=b[1],y=a.Children.toArray(t.children),C=[];if(null!=m){var w=h[m];null!=w&&w!==f&&d.some((function(t){return t.value===w}))&&v(w)}var x=function(t){var e=t.currentTarget,n=C.indexOf(e),a=d[n].value;v(a),null!=m&&(N(m,a),setTimeout((function(){var t,n,a,r,l,o,i,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,o=window,i=o.innerHeight,u=o.innerWidth,n>=0&&l<=u&&r<=i&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},j=function(t){var e,n;switch(t.keyCode){case c:var a=C.indexOf(t.target)+1;n=C[a]||C[0];break;case p:var r=C.indexOf(t.target)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()};return r().createElement("div",{className:"tabs-container"},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},d.map((function(t){var e=t.value,n=t.label;return r().createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":f===e}),key:e,ref:function(t){return C.push(t)},onKeyDown:j,onFocus:x,onClick:x},n)}))),e?(0,a.cloneElement)(y.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):r().createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},9443:function(t,e,n){var a=n(7294),r=(0,a.createContext)(void 0);e.Z=r},5203:function(t,e,n){var a=n(3117),r=n(7294),l=n.n(r),o=n(2779);e.Z=function(t){return l().createElement(o.Z,(0,a.Z)({type:"next"},t))}},2779:function(t,e,n){var a=n(7294),r=n.n(a);e.Z=function(t){var e=t.name,n=t.height,a=void 0===n?500:n,l=t.modules,o=t.branch,i=void 0===o?"master":o,u=t.type,s=void 0===u?"example":u,p=t.view,c="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+s+"/"+e+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===p?"editor":p);l&&(c+="&module=",l.forEach((function(t,e){e>0&&(c+=","),c+=t})));var d="onekijs-"+e.split("/").join("-");return r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},9374:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=(n(4996),n(5064)),i=n(8215),u=(n(5203),["components"]),s={id:"services",title:"Authentication services",sidebar_label:"Services"},p=void 0,c={unversionedId:"framework/auth/services",id:"framework/auth/services",isDocsHomePage:!1,title:"Authentication services",description:"Oneki.js provides 4 services you can use to implement the authentication process:",source:"@site/docs/framework/auth/040_services.md",sourceDirName:"framework/auth",slug:"/framework/auth/services",permalink:"/docs/framework/auth/services",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/040_services.md",version:"current",sidebarPosition:40,frontMatter:{id:"services",title:"Authentication services",sidebar_label:"Services"},sidebar:"someSidebar",previous:{title:"Security context",permalink:"/docs/framework/auth/security-context"},next:{title:"Introduction",permalink:"/docs/framework/auth/authentication-type/introduction"}},d=[{value:"Login service",id:"login-service",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Login callback service",id:"login-callback-service",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"Logout service",id:"logout-service",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"Logout callback service",id:"logout-callback-service",children:[{value:"Parameters",id:"parameters-3",children:[]}]},{value:"Example",id:"example-1",children:[]}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," provides 4 services you can use to implement the authentication process:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#login-service"},"login service"))),(0,l.kt)("td",{parentName:"tr",align:null},"Service handling the login request. e.g: a AJAX POST, a redirect to an OIDC IDP, ...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#login-callback-service"},"login callback service"))),(0,l.kt)("td",{parentName:"tr",align:null},"When the authentication is done by an external party (e.g an OIDC IDP), this service handles the callback following a login")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#logout-service"},"logout service "))),(0,l.kt)("td",{parentName:"tr",align:null},"Service handling the logout request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#logout-callback-service"},"logout callback service "))),(0,l.kt)("td",{parentName:"tr",align:null},"When the logout is done by an external party (e.g an OIDC IDP), this service handles the callback following a logout")))),(0,l.kt)("h2",{id:"login-service"},"Login service"),(0,l.kt)("p",null,"Based on the configuration found in settings.js, the ",(0,l.kt)("strong",{parentName:"p"},"login service"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"redirects the user to an external identity provider  (",(0,l.kt)("inlineCode",{parentName:"li"},"External authentication"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Oauth2"),")"),(0,l.kt)("li",{parentName:"ul"},"provides a submit function to send the credentials to the server (",(0,l.kt)("inlineCode",{parentName:"li"},"Form based authentication"),")")),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLoginService"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading, submit] = useLoginService(idpName, options);\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idpName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"idp/:idpName"))," in ",(0,l.kt)("strong",{parentName:"td"},"settings.js"),".",(0,l.kt)("br",null),"Check the page ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./authentication-type/introduction"},"Configuration"))," for more detail",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),': "default"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request was successful.",(0,l.kt)("br",null),"Mainly used for Form based authentication",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"onError function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request failed.",(0,l.kt)("br",null),"Mainly used for Form based authentication",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"login-error"))))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"SimpleError"),(0,l.kt)("td",{parentName:"tr",align:null},"Set if an error occurs during the login phase. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"submit"),(0,l.kt)("td",{parentName:"tr",align:null},"(data) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A function to submit the credentials to the server",(0,l.kt)("br",null),"Mainly used for Form based authentication")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./authentication-type/form-based#example"},"Form based authentication"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./authentication-type/oidc-server#example"},"Open ID Connect (server)")))),(0,l.kt)("h2",{id:"login-callback-service"},"Login callback service"),(0,l.kt)("p",null,"The login callback service handles a redirect following a login. This service is useful when the authentication implies a redirect following the login (",(0,l.kt)("strong",{parentName:"p"},"external login"),", ",(0,l.kt)("strong",{parentName:"p"},"open id connect"),", ...)"),(0,l.kt)("p",null,"Based on the configuration found in settings.js, the ",(0,l.kt)("strong",{parentName:"p"},"login callback service")," can (non exhaustive list): "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Extract the token from the query parameters and potentialy store it"),(0,l.kt)("li",{parentName:"ul"},"Extract an authorization code from the query parameters and exchange it for a token")),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLoginCallbackService"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLoginCallbackService(idpName, options);\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("h4",{id:"inputs-1"},"Inputs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idpName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"idp/:idpName"))," in ",(0,l.kt)("strong",{parentName:"td"},"settings.js"),".",(0,l.kt)("br",null),"Check the page ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./authentication-type/introduction"},"Configuration"))," for more detail",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),': "default"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login callback was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"onError function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login callback returned an error.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"login-error"))))),(0,l.kt)("h4",{id:"outputs-1"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"SimpleError"),(0,l.kt)("td",{parentName:"tr",align:null},"Set if the callback request contains an error. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h2",{id:"logout-service"},"Logout service"),(0,l.kt)("p",null,"Based on the configuration found in settings.js, the ",(0,l.kt)("strong",{parentName:"p"},"logout service"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"redirects the user to an external identity provider (",(0,l.kt)("inlineCode",{parentName:"li"},"External authentication"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Oauth2"),")"),(0,l.kt)("li",{parentName:"ul"},"sends a AJAX request to the backend (",(0,l.kt)("inlineCode",{parentName:"li"},"Form based authentication"),")")),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLogoutService"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLogoutService(options);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": idpName is not needed as it's stored in the localStorage during the login process."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("h4",{id:"inputs-2"},"Inputs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"onError function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout returned an error.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"logout-error"))))),(0,l.kt)("h4",{id:"outputs-2"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"SimpleError"),(0,l.kt)("td",{parentName:"tr",align:null},"Set if an error occurs during the logout phase. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h2",{id:"logout-callback-service"},"Logout callback service"),(0,l.kt)("p",null,"The logout callback service handles a redirect following a logout. This service is useful when the authentication implies a redirect following the logout (",(0,l.kt)("strong",{parentName:"p"},"external login"),", ",(0,l.kt)("strong",{parentName:"p"},"open id connect"),", ...)"),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLogoutCallbackService"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLogoutCallbackService(options);\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("h4",{id:"inputs-3"},"Inputs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout callback was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"onError function"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout callback returned an error.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"logout-error"))))),(0,l.kt)("h4",{id:"outputs-3"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"SimpleError"),(0,l.kt)("td",{parentName:"tr",align:null},"Set if the callback request contains an error. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h2",{id:"example-1"},"Example"),(0,l.kt)(o.Z,{defaultValue:"login",values:[{label:"Login",value:"login"},{label:"Login Callback",value:"loginCallback"},{label:"Logout",value:"logout"},{label:"Logout Callback",value:"logoutCallback"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"login",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginService(idpName, options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),(0,l.kt)(i.Z,{value:"loginCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginCallbackService(idpName,options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),(0,l.kt)(i.Z,{value:"logout",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLogoutService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),(0,l.kt)(i.Z,{value:"logoutCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutCallbackService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')))))}k.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);