/*! For license information please see 68f7f1c4.92b61d27.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),b=(a(0),a(198)),c=(a(203),a(201)),l=a(200),o=(a(208),{id:"services",title:"Authentication services",sidebar_label:"Services"}),i={id:"framework/auth/services",title:"Authentication services",description:"Oneki.js provides 4 services you can use to implement the authentication process:",source:"@site/docs/framework/auth/040_services.md",permalink:"/docs/framework/auth/services",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/040_services.md",sidebar_label:"Services",sidebar:"someSidebar",previous:{title:"Security context",permalink:"/docs/framework/auth/security-context"},next:{title:"Authentication types",permalink:"/docs/framework/auth/authentication-type/introduction"}},u=[{value:"Login service",id:"login-service",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Login callback service",id:"login-callback-service",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"Logout service",id:"logout-service",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"Logout callback service",id:"logout-callback-service",children:[{value:"Parameters",id:"parameters-3",children:[]}]},{value:"Example",id:"example-1",children:[]}],s={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Oneki.js")," provides 4 services you can use to implement the authentication process:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Service"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#login-service"}),"login service"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service handling the login request. e.g: a AJAX POST, a redirect to an OIDC IDP, ...")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#login-callback-service"}),"login callback service"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When the authentication is done by an external party (e.g an OIDC IDP), this service handles the callback following a login")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#logout-service"}),"logout service "))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service handling the logout request")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#logout-callback-service"}),"logout callback service "))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When the logout is done by an external party (e.g an OIDC IDP), this service handles the callback following a logout")))),Object(b.b)("h2",{id:"login-service"},"Login service"),Object(b.b)("p",null,"Based on the configuration found in settings.js, the ",Object(b.b)("strong",{parentName:"p"},"login service"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"redirects the user to an external identity provider  (",Object(b.b)("inlineCode",{parentName:"li"},"External authentication"),", ",Object(b.b)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",Object(b.b)("inlineCode",{parentName:"li"},"Oauth2"),")"),Object(b.b)("li",{parentName:"ul"},"provides a submit function to send the credentials to the server (",Object(b.b)("inlineCode",{parentName:"li"},"Form based authentication"),")")),Object(b.b)("p",null,"It's instantied via the hook ",Object(b.b)("strong",{parentName:"p"},"useLoginService"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [error, loading, submit] = useLoginService(idpName, options);\n")),Object(b.b)("h3",{id:"parameters"},"Parameters"),Object(b.b)("h4",{id:"inputs"},"Inputs"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Mandatory parameters are in bold")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idpName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"idp/:idpName"))," in ",Object(b.b)("strong",{parentName:"td"},"settings.js"),".",Object(b.b)("br",null),"Check the page ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./authentication-type/introduction"}),"Configuration"))," for more detail",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),': "default"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object with non mandatory attributes",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": ","{","}")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onSuccess"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSuccess function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the login request was successful.",Object(b.b)("br",null),"Mainly used for Form based authentication",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onError function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the login request failed.",Object(b.b)("br",null),"Mainly used for Form based authentication",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../notification/introduction"}),"sending a notification"))," on the topic ",Object(b.b)("inlineCode",{parentName:"td"},"login-error"))))),Object(b.b)("h4",{id:"outputs"},"Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SimpleError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set if an error occurs during the login phase. The error object contains three properties:",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"code")),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"message"),": the error message"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to indicate that an AJAX request is in progress")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"submit"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(data) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function to submit the credentials to the server",Object(b.b)("br",null),"Mainly used for Form based authentication")))),Object(b.b)("h4",{id:"example"},"Example"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./authentication-type/form-based#example"}),"Form based authentication"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./authentication-type/oidc-server#example"}),"Open ID Connect (server)")))),Object(b.b)("h2",{id:"login-callback-service"},"Login callback service"),Object(b.b)("p",null,"The login callback service handles a redirect following a login. This service is useful when the authentication implies a redirect following the login (",Object(b.b)("strong",{parentName:"p"},"external login"),", ",Object(b.b)("strong",{parentName:"p"},"open id connect"),", ...)"),Object(b.b)("p",null,"Based on the configuration found in settings.js, the ",Object(b.b)("strong",{parentName:"p"},"login callback service")," can (non exhaustive list): "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Extract the token from the query parameters and potentialy store it"),Object(b.b)("li",{parentName:"ul"},"Extract an authorization code from the query parameters and exchange it for a token")),Object(b.b)("p",null,"It's instantied via the hook ",Object(b.b)("strong",{parentName:"p"},"useLoginCallbackService"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [error, loading] = useLoginCallbackService(idpName, options);\n")),Object(b.b)("h3",{id:"parameters-1"},"Parameters"),Object(b.b)("h4",{id:"inputs-1"},"Inputs"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Mandatory parameters are in bold")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idpName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"idp/:idpName"))," in ",Object(b.b)("strong",{parentName:"td"},"settings.js"),".",Object(b.b)("br",null),"Check the page ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"./authentication-type/introduction"}),"Configuration"))," for more detail",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),': "default"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object with non mandatory attributes",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": ","{","}")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onSuccess"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSuccess function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the login callback was successful.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onError function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the login callback returned an error.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../notification/introduction"}),"sending a notification"))," on the topic ",Object(b.b)("inlineCode",{parentName:"td"},"login-error"))))),Object(b.b)("h4",{id:"outputs-1"},"Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SimpleError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set if the callback request contains an error. The error object contains three properties:",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"code")),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"message"),": the error message"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to indicate that an AJAX request is in progress")))),Object(b.b)("h2",{id:"logout-service"},"Logout service"),Object(b.b)("p",null,"Based on the configuration found in settings.js, the ",Object(b.b)("strong",{parentName:"p"},"logout service"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"redirects the user to an external identity provider (",Object(b.b)("inlineCode",{parentName:"li"},"External authentication"),", ",Object(b.b)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",Object(b.b)("inlineCode",{parentName:"li"},"Oauth2"),")"),Object(b.b)("li",{parentName:"ul"},"sends a AJAX request to the backend (",Object(b.b)("inlineCode",{parentName:"li"},"Form based authentication"),")")),Object(b.b)("p",null,"It's instantied via the hook ",Object(b.b)("strong",{parentName:"p"},"useLogoutService"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [error, loading] = useLogoutService(options);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": idpName is not needed as it's stored in the localStorage during the login process."),Object(b.b)("h3",{id:"parameters-2"},"Parameters"),Object(b.b)("h4",{id:"inputs-2"},"Inputs"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Mandatory parameters are in bold")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object with non mandatory attributes",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": ","{","}")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onSuccess"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSuccess function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the logout was successful.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onError function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the logout returned an error.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../notification/introduction"}),"sending a notification"))," on the topic ",Object(b.b)("inlineCode",{parentName:"td"},"logout-error"))))),Object(b.b)("h4",{id:"outputs-2"},"Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SimpleError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set if an error occurs during the logout phase. The error object contains three properties:",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"code")),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"message"),": the error message"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to indicate that an AJAX request is in progress")))),Object(b.b)("h2",{id:"logout-callback-service"},"Logout callback service"),Object(b.b)("p",null,"The logout callback service handles a redirect following a logout. This service is useful when the authentication implies a redirect following the logout (",Object(b.b)("strong",{parentName:"p"},"external login"),", ",Object(b.b)("strong",{parentName:"p"},"open id connect"),", ...)"),Object(b.b)("p",null,"It's instantied via the hook ",Object(b.b)("strong",{parentName:"p"},"useLogoutCallbackService"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const [error, loading] = useLogoutCallbackService(options);\n")),Object(b.b)("h3",{id:"parameters-3"},"Parameters"),Object(b.b)("h4",{id:"inputs-3"},"Inputs"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Mandatory parameters are in bold")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onSuccess"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSuccess function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the logout callback was successful.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options.",Object(b.b)("br",null),"onError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onError function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Called if the logout callback returned an error.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Defaults"),": a function ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../notification/introduction"}),"sending a notification"))," on the topic ",Object(b.b)("inlineCode",{parentName:"td"},"logout-error"))))),Object(b.b)("h4",{id:"outputs-3"},"Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SimpleError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set if the callback request contains an error. The error object contains three properties:",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"code")),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"message"),": the error message"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loading"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to indicate that an AJAX request is in progress")))),Object(b.b)("h2",{id:"example-1"},"Example"),Object(b.b)(c.a,{defaultValue:"login",values:[{label:"Login",value:"login"},{label:"Login Callback",value:"loginCallback"},{label:"Logout",value:"logout"},{label:"Logout Callback",value:"logoutCallback"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"login",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginService(idpName, options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),Object(b.b)(l.a,{value:"loginCallback",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const options = {};\n  const [error] = useLoginCallbackService(idpName,options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),Object(b.b)(l.a,{value:"logout",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLogoutService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n'))),Object(b.b)(l.a,{value:"logoutCallback",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const options = {};\n  const [error] = useLogoutCallbackService(options);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')))))}p.isMDXComponent=!0},197:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===b)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(a),O=n,j=s["".concat(c,".").concat(O)]||s[O]||p[O]||b;return a?r.a.createElement(j,l(l({ref:t},i),{},{components:a})):r.a.createElement(j,l({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},199:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},201:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),r=a.n(n),b=a(199);var c=function(){return Object(n.useContext)(b.a)},l=a(197),o=a.n(l),i=a(127),u=a.n(i),s=37,p=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,l=e.values,i=e.groupId,O=c(),j=O.tabGroupChoices,d=O.setTabGroupChoices,m=Object(n.useState)(b),g=m[0],h=m[1];if(null!=i){var N=j[i];null!=N&&N!==g&&h(N)}var f=function(e){h(e),null!=i&&d(i,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:o()("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===g}))[0]))}},202:function(e,t,a){"use strict";var n=a(0),r=a(50);t.a=function(){return Object(n.useContext)(r.a)}},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(204);var n=a(202);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},204:function(e,t,a){"use strict";var n=a(19),r=a(35),b=a(205),c="".startsWith;n(n.P+n.F*a(206)("startsWith"),"String",{startsWith:function(e){var t=b(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},205:function(e,t,a){var n=a(71),r=a(24);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},206:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},207:function(e,t,a){var n=a(25).f,r=Function.prototype,b=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(b)[1]}catch(e){return""}}})},208:function(e,t,a){"use strict";var n=a(1),r=a(0),b=a.n(r),c=(a(72),a(207),function(e){var t=e.type,a=e.name,n=e.height,r=void 0===n?500:n,c=e.modules,l="https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/"+t+"/"+a+"?codemirror=1&fontsize=14&theme=dark&view=editor";c&&(l+="&module=",c.forEach((function(e,t){t>0&&(l+=","),l+=e})));var o="onekijs-"+a.split("/").join("-");return b.a.createElement("iframe",{src:l,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:o,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})});t.a=function(e){return b.a.createElement(c,Object(n.a)({type:"next"},e))}}}]);