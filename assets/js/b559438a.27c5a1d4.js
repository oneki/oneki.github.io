"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[6250],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a().createElement(k,i(i({ref:t},s),{},{components:n})):a().createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return l},Z:function(){return o}});var r=n(52263),a=n(13919);function l(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,i=void 0!==o&&o,u=l.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294),a=n.n(r);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),l=n.n(a),o=n(72389),i=n(79443);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),p=n(86010),c="tabItem_1uMI";function d(e){var t,n,r,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,k=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=u(),y=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,a.useState)(b),O=x[0],j=x[1],C=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var R=y[k];null!=R&&R!==O&&h.some((function(e){return e.value===R}))&&j(R)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==O&&(I(t),j(r),null!=k&&w(k,r))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return l().createElement("div",{className:"tabs-container"},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},g)},h.map((function(e){var t=e.value,n=e.label;return l().createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:L,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l().createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return l().createElement(d,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=n(67294),a=(0,r.createContext)(void 0);t.Z=a},7551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=(n(44996),n(26396)),i=n(58215),u=["components"],s={id:"oidc-client",title:"OpenID Connect (client side)",sidebar_label:"OIDC (client side)"},p=void 0,c={unversionedId:"framework/auth/authentication-type/oidc-client",id:"framework/auth/authentication-type/oidc-client",isDocsHomePage:!1,title:"OpenID Connect (client side)",description:"Oneki.js supports the Open ID Connect (OIDC) authorization code flow where the authorization code is exchanged for an access token via a server. This is the most common and secure way to retrieve the access token",source:"@site/docs/framework/auth/authentication-type/210-oidc-client.md",sourceDirName:"framework/auth/authentication-type",slug:"/framework/auth/authentication-type/oidc-client",permalink:"/docs/framework/auth/authentication-type/oidc-client",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authentication-type/210-oidc-client.md",tags:[],version:"current",sidebarPosition:210,frontMatter:{id:"oidc-client",title:"OpenID Connect (client side)",sidebar_label:"OIDC (client side)"}},d=[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[],level:4},{value:"Outputs",id:"outputs",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[{value:"Inputs",id:"inputs-1",children:[],level:4},{value:"Outputs",id:"outputs-1",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-2",children:[{value:"Inputs",id:"inputs-2",children:[],level:4},{value:"Outputs",id:"outputs-2",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-3",children:[{value:"Inputs",id:"inputs-3",children:[],level:4},{value:"Outputs",id:"outputs-3",children:[],level:4}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Mandatory attributes",id:"mandatory-attributes",children:[],level:4},{value:"Optional attributes",id:"optional-attributes",children:[],level:4}],level:2},{value:"Configuration example",id:"configuration-example",children:[],level:2}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," supports the Open ID Connect (OIDC) authorization code flow where the authorization code is exchanged for an access token via a server. This is the most common and secure way to retrieve the access token ")),(0,l.kt)("p",null,"In ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"settings.js")),', when the "idp type" is ',(0,l.kt)("strong",{parentName:"p"},'"oidc_server"'),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Oneki.js"))," implements the following scenario:"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VLIxRjmm4Epr5PkhdE9EG4eLWHCOCDobIHrG94-t48yKoANZ-Ekzf28TzV2fuYvcPuUZaHu32K_nQgelQAM9IaTlu48qXAQkMn-jEtjXUpnrI9VOdj3LF48eQn4aedBoE1XX4yKnz6XFcCY49EVXTz2-QjqR77uC0ppyzEulTxuUAk1duBqeSU1PEDHU1_8eIQi3Y02tSWThN8Ssm_BfCqGjXJ6ja7s6JaMbhGBMDEfwUVe53y_ETKRloXAHBixZkyuSNGR-cPix0-HwRKjmRYoNPZEI5kxkRdLfmxU2QoJP0YFRYVRiCcWgvcN9VZX-Bynim8fNx0GbwVoEy9MFIxDlHHhDHZRSLEYrf2nXdhkvdqyBl50GD17QBYmHQmzNv0NzhjjAxwmlcglWh3cIWcHB0me3v_OVd9s_haascsShj-f3RAz88FaMsX8A4whxTzYJD8LpPSOzIGkhvd2dxbGauXoS1lIRl0ZRCT0flVRv5YuOpyL5xynlRraIUKtHZyLuR58U_lDp4gHpFUgDtYd33NICJXMRG09DMAkUqxxOLdALiIziBKnTsFPPX9OVHFwbtSjSLLMF_07oJ_03",alt:null}),(0,l.kt)("p",null,"To authenticate against an OpenID Connect Identity Provider (OIDC IDP), you have to create four pages/routes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"login"),": this page is displayed following a click on a link or a redirect following a 401 HTTP Error"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"login callback"),": this route is called by the OIDC IDP (e.g: Google) after a successfull authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logout"),": this page is displayed following a click on a logout link or if there is no activity for x minutes (configurable via settings)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logout callback"),": this route is called by the OIDC IDP after a successfull logout")),(0,l.kt)("p",null,"The code is the same for a NextJS App or a Create React App"),(0,l.kt)(o.Z,{defaultValue:"login",values:[{label:"Login",value:"login"},{label:"Login Callback",value:"loginCallback"},{label:"Logout",value:"logout"},{label:"Logout Callback",value:"logoutCallback"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"login",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginService(idpName, options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// [Optional] the name of the IDP used for the login -- defaults to "default"\nidpName: string\n\n// [Optional] options object -- defaults to {}\noptions: {\n\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "login-error"\n  onError: func\n}\n')),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),(0,l.kt)(i.Z,{value:"loginCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginCallbackService(idpName,options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("h4",{id:"inputs-1"},"Inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// [Optional] the name of the IDP used for the login -- defaults to "default"\nidpName: string\n\n// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an the login is successfull -- The default redirects the user from the calling page\n  onSuccess: func\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "login-error"\n  onError: func\n}\n')),(0,l.kt)("h4",{id:"outputs-1"},"Outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),(0,l.kt)(i.Z,{value:"logout",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLogoutService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"parameters-2"},"Parameters"),(0,l.kt)("h4",{id:"inputs-2"},"Inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "logout-error"\n  onError: func\n}\n')),(0,l.kt)("h4",{id:"outputs-2"},"Outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),(0,l.kt)(i.Z,{value:"logoutCallback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutCallbackService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"parameters-3"},"Parameters"),(0,l.kt)("h4",{id:"inputs-3"},"Inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an the logout is successfull -- The default redirects the user to the home page\n  onSuccess: func\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "logout-error"\n  onError: func\n}\n')),(0,l.kt)("h4",{id:"outputs-3"},"Outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n")))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLoginService")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLoginCallbackService")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLogoutService")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLogoutCallbackService"))," are fully configured in settings.js",(0,l.kt)("br",null),"\nThe configuration ",(0,l.kt)("strong",{parentName:"p"},"must"),' be defined under the key "',(0,l.kt)("strong",{parentName:"p"},"idp/:idpName"),'". For example, if ',(0,l.kt)("strong",{parentName:"p"},"idpName"),"=",(0,l.kt)("em",{parentName:"p"},"google"),", the config must look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const settings = {\n  idp: {\n    google: {\n      type: "oidc_server",\n      ...\n    }\n  }\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"mandatory-attributes"},"Mandatory attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"authorizeEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"a string (relative or absolute URL)"),(0,l.kt)("li",null,"or a function returning the URL")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"clientId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("em",{parentName:"td"},"client_id")," created on the IDP (identity provider)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"tokenEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(grant_type, context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"a relative or absolute URL"),(0,l.kt)("li",null,'A function that does an AJAX POST request to the token endpoint and returns a object of type "Token"')),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'must be "',(0,l.kt)("strong",{parentName:"td"},"oidc_server"),'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null)," function (context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function that returns an object that represents the userInfo. For example a object like this: {email: '",(0,l.kt)("a",{parentName:"td",href:"mailto:foo@example.com"},"foo@example.com"),"', roles: ","['ADMIN']","}}")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"optional-attributes"},"Optional attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:null},"function(response, context): ","[token,userInfo]"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback called at the end of the authentication for extracting the token and the userInfo from the response. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Inputs"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"response: the response from the authentication server"),(0,l.kt)("li",null,"context: an object containing the configuration of the IDP used, the redux store, the router, the settings and i18n infos")),(0,l.kt)("strong",{parentName:"td"},"Outputs"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"token: the oauth2 token"),(0,l.kt)("li",null,"userInfo: the securityContext of the user"))),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"codeChallengeMethod")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Method that was used to derive an authorization code challenge"),(0,l.kt)("td",{parentName:"tr",align:null},"S256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"jwksEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(token, context)"),(0,l.kt)("td",{parentName:"tr",align:null},"jwksEndpoint is ",(0,l.kt)("strong",{parentName:"td"},"mandatory")," if ",(0,l.kt)("em",{parentName:"td"},"validate")," = true.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function that returns a public key")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginCallbackRoute")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a relative or absolute URL called by the OIDC server after a successfull login."),(0,l.kt)("td",{parentName:"tr",align:null},"[loginRoute]","/callback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutCallbackRoute")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a relative or absolute URL called by the OIDC server after a successfull logout. Should be used to remove the cookie on the server side"),(0,l.kt)("td",{parentName:"tr",align:null},"[logoutRoute]","/callback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"pkce")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"flag to indicate if the PKCE extension is applied. Recommended"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"nonce")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"flag to indicate if the nonce in the id_token is validated on the client side. Should be done on the server side"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"postLoginRedirectKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"When calling the ",(0,l.kt)("em",{parentName:"td"},"authorize")," endpoint, ",(0,l.kt)("em",{parentName:"td"},"postLoginRedirectKey")," represents the name of the parameter to indicate the redirect URI"),(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"postLogoutRedirectKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"When calling the ",(0,l.kt)("em",{parentName:"td"},"logout")," endpoint, ",(0,l.kt)("em",{parentName:"td"},"postLoginRedirectKey")," represents the name of the parameter to indicate the redirect URI"),(0,l.kt)("td",{parentName:"tr",align:null},"post_logout_redirect_uri")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"responseType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"only ",(0,l.kt)("em",{parentName:"td"},"code")," is supported right now"),(0,l.kt)("td",{parentName:"tr",align:null},"code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"scope")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'the value of the parameter "scope" sent to the ',(0,l.kt)("em",{parentName:"td"},"authorize")," endpoint. Should generally be redefined"),(0,l.kt)("td",{parentName:"tr",align:null},"openid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"flag to indicate if the javascript client send a state to the IDP. Recommended for mitigating attacks"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"validate")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"flag to indicate if the id_token and the access_token are validated. Should generally be done on the server side"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const settings = {\n  idp: {\n    google: {\n      type: 'oidc_server', \n      clientId: '1eb5cq6p7d8dm8g4q9jk6qdve5', // id given by Google              \n      authorizeEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth', // URL given by Google. Will be called by the client\n      tokenEndpoint: '/api/oauth2/token',   // URL of a service exposed by your server that exchanges the authorization code for an access token by calling the Google /token endpoint\n      userinfoEndpoint: '/api/oauth2/userinfo', // URL of a service exposed by your server that returns the details about the logged-in user\n      logoutEndpoint: '/api/oauth2/logout', // URL exposed by your server which call the IDP logout URL and then removes the cookie\n      scope: 'openid email profile', // ask to Google the profile and the email of the user\n    }\n  }\n}\n")))}k.isMDXComponent=!0}}]);