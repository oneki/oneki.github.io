/*! For license information please see 56b6d974.260e2346.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(194)),l=(n(199),n(197)),c=n(196),b={id:"oidc-server",title:"OpenID Connect (server side)",sidebar_label:"OpenID Connect (server side)"},i={id:"framework/auth/authentication-type/oidc-server",title:"OpenID Connect (server side)",description:"Oneki.js supports the Open ID Connect (OIDC) authorization code flow where the authorization code is exchanged for an access token via a server. This is the most common and secure way to retrieve the access token",source:"@site/docs/framework/auth/authentication-type/200-oidc-server.md",permalink:"/docs/framework/auth/authentication-type/oidc-server",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authentication-type/200-oidc-server.md",sidebar_label:"OpenID Connect (server side)",sidebar:"someSidebar",previous:{title:"Form based",permalink:"/docs/framework/auth/authentication-type/form-based"},next:{title:"Introduction",permalink:"/docs/framework/i18n/introduction"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Parameters",id:"parameters-3",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Configuration example",id:"configuration-example",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Oneki.js")," supports the Open ID Connect (OIDC) authorization code flow where the authorization code is exchanged for an access token via a server. This is the most common and secure way to retrieve the access token ")),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js")),', when the "idp type" is ',Object(o.b)("strong",{parentName:"p"},'"oidc_server"'),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Oneki.js"))," implements the following scenario:"),Object(o.b)("img",{src:"https://www.plantuml.com/plantuml/png/VLIxRjmm4Epr5PkhdE9EG4eLWHCOCDobIHrG94-t48yKoANZ-Ekzf28TzV2fuYvcPuUZaHu32K_nQgelQAM9IaTlu48qXAQkMn-jEtjXUpnrI9VOdj3LF48eQn4aedBoE1XX4yKnz6XFcCY49EVXTz2-QjqR77uC0ppyzEulTxuUAk1duBqeSU1PEDHU1_8eIQi3Y02tSWThN8Ssm_BfCqGjXJ6ja7s6JaMbhGBMDEfwUVe53y_ETKRloXAHBixZkyuSNGR-cPix0-HwRKjmRYoNPZEI5kxkRdLfmxU2QoJP0YFRYVRiCcWgvcN9VZX-Bynim8fNx0GbwVoEy9MFIxDlHHhDHZRSLEYrf2nXdhkvdqyBl50GD17QBYmHQmzNv0NzhjjAxwmlcglWh3cIWcHB0me3v_OVd9s_haascsShj-f3RAz88FaMsX8A4whxTzYJD8LpPSOzIGkhvd2dxbGauXoS1lIRl0ZRCT0flVRv5YuOpyL5xynlRraIUKtHZyLuR58U_lDp4gHpFUgDtYd33NICJXMRG09DMAkUqxxOLdALiIziBKnTsFPPX9OVHFwbtSjSLLMF_07oJ_03",alt:null}),Object(o.b)("p",null,"To authenticate against an OpenID Connect Identity Provider (OIDC IDP), you have to create four pages/routes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"login"),": this page is displayed following a click on a link or a redirect following a 401 HTTP Error"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"login callback"),": this route is called by the OIDC IDP (e.g: Google) after a successfull authentication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"logout"),": this page is displayed following a click on a logout link or if there is no activity for x minutes (configurable via settings)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"logout callback"),": this route is called by the OIDC IDP after a successfull logout")),Object(o.b)("p",null,"The code is the same for a NextJS App or a Create React App"),Object(o.b)(l.a,{defaultValue:"login",values:[{label:"Login",value:"login"},{label:"Login Callback",value:"loginCallback"},{label:"Logout",value:"logout"},{label:"Logout Callback",value:"logoutCallback"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"login",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginService(idpName, options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// [Optional] the name of the IDP used for the login -- defaults to "default"\nidpName: string\n\n// [Optional] options object -- defaults to {}\noptions: {\n\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "login-error"\n  onError: func\n}\n')),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),Object(o.b)(c.a,{value:"loginCallback",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginCallbackService(idpName,options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"parameters-1"},"Parameters"),Object(o.b)("h4",{id:"inputs-1"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// [Optional] the name of the IDP used for the login -- defaults to "default"\nidpName: string\n\n// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an the login is successfull -- The default redirects the user from the calling page\n  onSuccess: func\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "login-error"\n  onError: func\n}\n')),Object(o.b)("h4",{id:"outputs-1"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),Object(o.b)(c.a,{value:"logout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLogoutService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"parameters-2"},"Parameters"),Object(o.b)("h4",{id:"inputs-2"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "logout-error"\n  onError: func\n}\n')),Object(o.b)("h4",{id:"outputs-2"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n"))),Object(o.b)(c.a,{value:"logoutCallback",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutCallbackService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"parameters-3"},"Parameters"),Object(o.b)("h4",{id:"inputs-3"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// [Optional] options object -- defaults to {}\noptions: {\n  // a callback function triggered when an the logout is successfull -- The default redirects the user to the home page\n  onSuccess: func\n  // a callback function triggered when an error is thrown -- defaults to send error on topic "logout-error"\n  onError: func\n}\n')),Object(o.b)("h4",{id:"outputs-3"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"error: {\n  payload: {\n    // description of the error\n    message: string,\n\n    // code of the error\n    code: string,\n  }\n  \n  // remove the error\n  remove: func\n}\n")))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLoginService")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLoginCallbackService")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLogoutService")),", ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useLogoutCallbackService"))," are fully configured in settings.js",Object(o.b)("br",null),"\nThe configuration ",Object(o.b)("strong",{parentName:"p"},"must"),' be defined under the key "',Object(o.b)("strong",{parentName:"p"},"idp/:idpName"),'". For example, if ',Object(o.b)("strong",{parentName:"p"},"idpName"),"=",Object(o.b)("em",{parentName:"p"},"google"),", the config must look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const settings = {\n  idp: {\n    google: {\n      type: "oidc_server",\n      ...\n    }\n  }\n}\n')),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h4",{id:"mandatory-attributes"},"Mandatory attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"authorizeEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"a string (relative or absolute URL)"),Object(o.b)("li",null,"or a function returning the URL")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"clientId")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the ",Object(o.b)("em",{parentName:"td"},"client_id")," created on the IDP (identity provider)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"logoutEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function returning the URL")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"tokenEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(grant_type, context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"a relative or absolute URL"),Object(o.b)("li",null,'A function that does an AJAX POST request to the token endpoint and returns a object of type "Token"')),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"type")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'must be "',Object(o.b)("strong",{parentName:"td"},"oidc_server"),'"')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"userinfoEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null)," function (context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Can be:",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function that returns an object that represents the userInfo. For example a object like this: {email: '",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"mailto:foo@example.com"}),"foo@example.com"),"', roles: ","['ADMIN']","}}")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js")))),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h4",{id:"optional-attributes"},"Optional attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"callback")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function(response, context): ","[token,userInfo]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback called at the end of the authentication for extracting the token and the userInfo from the response. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Inputs"),Object(o.b)("ul",null,Object(o.b)("li",null,"response: the response from the authentication server"),Object(o.b)("li",null,"context: an object containing the configuration of the IDP used, the redux store, the router, the settings and i18n infos")),Object(o.b)("strong",{parentName:"td"},"Outputs"),Object(o.b)("ul",null,Object(o.b)("li",null,"token: the oauth2 token"),Object(o.b)("li",null,"userInfo: the securityContext of the user"))),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"codeChallengeMethod")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Method that was used to derive an authorization code challenge"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"S256")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"jwksEndpoint")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|",Object(o.b)("br",null),"function(token, context)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jwksEndpoint is ",Object(o.b)("strong",{parentName:"td"},"mandatory")," if ",Object(o.b)("em",{parentName:"td"},"validate")," = true.",Object(o.b)("br",null),Object(o.b)("br",null),"Can be",Object(o.b)("ul",null,Object(o.b)("li",null,"A relative or absolute URL"),Object(o.b)("li",null,"A function that returns a public key")),"if it's a relative URL, it's prefixed by the server.baseUrl from settings.js"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"loginCallbackRoute")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a relative or absolute URL called by the OIDC server after a successfull login."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[loginRoute]","/callback")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"logoutCallbackRoute")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a relative or absolute URL called by the OIDC server after a successfull logout. Should be used to remove the cookie on the server side"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[logoutRoute]","/callback")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"pkce")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"flag to indicate if the PKCE extension is applied. Recommended"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"nonce")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"flag to indicate if the nonce in the id_token is validated on the client side. Should be done on the server side"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"postLoginRedirectKey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When calling the ",Object(o.b)("em",{parentName:"td"},"authorize")," endpoint, ",Object(o.b)("em",{parentName:"td"},"postLoginRedirectKey")," represents the name of the parameter to indicate the redirect URI"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"redirect_uri")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"postLogoutRedirectKey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When calling the ",Object(o.b)("em",{parentName:"td"},"logout")," endpoint, ",Object(o.b)("em",{parentName:"td"},"postLoginRedirectKey")," represents the name of the parameter to indicate the redirect URI"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"post_logout_redirect_uri")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"responseType")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"only ",Object(o.b)("em",{parentName:"td"},"code")," is supported right now"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"scope")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'the value of the parameter "scope" sent to the ',Object(o.b)("em",{parentName:"td"},"authorize")," endpoint. Should generally be redefined"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openid")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"state")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"flag to indicate if the javascript client send a state to the IDP. Recommended for mitigating attacks"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"validate")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"flag to indicate if the id_token and the access_token are validated. Should generally be done on the server side"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"configuration-example"},"Configuration example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const settings = {\n  idp: {\n    google: {\n      type: 'oidc_server', \n      clientId: '1eb5cq6p7d8dm8g4q9jk6qdve5', // id given by Google              \n      authorizeEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth', // URL given by Google. Will be called by the client\n      tokenEndpoint: '/api/oauth2/token',   // URL of a service exposed by your server that exchanges the authorization code for an access token by calling the Google /token endpoint\n      userinfoEndpoint: '/api/oauth2/userinfo', // URL of a service exposed by your server that returns the details about the logged-in user\n      logoutEndpoint: '/api/oauth2/logout', // URL exposed by your server which call the IDP logout URL and then removes the cookie\n      scope: 'openid email profile', // ask to Google the profile and the email of the user\n    }\n  }\n}\n")))}p.isMDXComponent=!0},193:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,j=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(j,c(c({ref:t},i),{},{components:n})):r.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},196:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},197:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),o=n(195);var l=function(){return Object(a.useContext)(o.a)},c=n(193),b=n.n(c),i=n(127),s=n.n(i),u=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,i=e.groupId,d=l(),j=d.tabGroupChoices,O=d.setTabGroupChoices,m=Object(a.useState)(o),g=m[0],f=m[1];if(null!=i){var h=j[i];null!=h&&h!==g&&f(h)}var N=function(e){f(e),null!=i&&O(i,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:b()("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){return N(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},198:function(e,t,n){"use strict";var a=n(0),r=n(50);t.a=function(){return Object(a.useContext)(r.a)}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(200);var a=n(198);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},200:function(e,t,n){"use strict";var a=n(19),r=n(35),o=n(201),l="".startsWith;a(a.P+a.F*n(202)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})},201:function(e,t,n){var a=n(71),r=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},202:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);