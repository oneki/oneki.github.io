"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[23272],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=r().createContext({}),u=function(t){var e=r().useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return r().createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r().createElement(r().Fragment,{},e)}},c=r().forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(a),c=n,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return a?r().createElement(k,o(o({ref:e},p),{},{components:a})):r().createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r().createElement.apply(null,i)}return r().createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:function(t,e,a){a.d(e,{Z:function(){return o}});var n=a(67294),r=a.n(n),l=a(86010),i="tabItem_Ymn6";function o(t){var e=t.children,a=t.hidden,n=t.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(i,n),hidden:a},e)}},65488:function(t,e,a){a.d(e,{Z:function(){return k}});var n=a(87462),r=a(67294),l=a.n(r),i=a(86010),o=a(72389),s=a(67392),p=a(7094),u=a(12466),d="tabList__CuJ",m="tabItem_LNqP";function c(t){var e,a,o=t.lazy,c=t.block,k=t.defaultValue,g=t.values,h=t.groupId,N=t.className,b=l().Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,s.l)(f,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(e=null!=k?k:null==(a=b.find((function(t){return t.props.default})))?void 0:a.props.value)?e:b[0].props.value;if(null!==y&&!f.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),C=x.tabGroupChoices,w=x.setTabGroupChoices,E=(0,r.useState)(y),O=E[0],T=E[1],D=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=C[h];null!=P&&P!==O&&f.some((function(t){return t.value===P}))&&T(P)}var S=function(t){var e=t.currentTarget,a=D.indexOf(e),n=f[a].value;n!==O&&(j(e),T(n),null!=h&&w(h,String(n)))},A=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=D.indexOf(t.currentTarget)+1;a=null!=(n=D[r])?n:D[0];break;case"ArrowLeft":var l,i=D.indexOf(t.currentTarget)-1;a=null!=(l=D[i])?l:D[D.length-1]}null==(e=a)||e.focus()};return l().createElement("div",{className:(0,i.Z)("tabs-container",d)},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},N)},f.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l().createElement("li",(0,n.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:function(t){return D.push(t)},onKeyDown:A,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":O===e})}),null!=a?a:e)}))),o?(0,r.cloneElement)(b.filter((function(t){return t.props.value===O}))[0],{className:"margin-top--md"}):l().createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function k(t){var e=(0,o.Z)();return l().createElement(c,(0,n.Z)({key:String(e)},t))}},64094:function(t,e,a){var n=a(67294),r=a.n(n),l=a(65488);a(85162);e.Z=function(t){var e=t.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},e)}},32779:function(t,e,a){a.d(e,{YK:function(){return s},g0:function(){return p}});var n=a(67294),r=a.n(n),l=a(64094),i=a(85162),o=function(t){var e=t.name,a=t.height,n=void 0===a?500:a,l=t.modules,i=(t.branch,t.type,t.view,"https://oneki-gs-vite-"+e.split("-")[0]+".surge.sh/");l&&("&module=",l.forEach((function(t,e){e>0&&",",t})));var o="onekijs-"+e.split("/").join("-");return r().createElement("iframe",{src:i,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:o,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},s=function(t){var e=t.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+e,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},p=function(t){var e=t.name,a=t.modules,n=t.craName,s=t.craModules,p=t.nextName,u=t.nextModules,d=t.height,m=void 0===d?600:d,c=t.branch,k=void 0===c?"master":c;return r().createElement(l.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(o,{name:n||e,type:"getting-started/cra",view:"preview",branch:k,height:m,modules:s||a})),r().createElement(i.Z,{value:"next"},r().createElement(o,{name:p||e,type:"getting-started/next",view:"preview",branch:k,height:m,modules:u||a})))};e.ZP=o},67738:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=(a(44996),a(64094)),o=a(85162),s=a(32779),p=["components"],u={id:"services",title:"Authentication services",sidebar_label:"Services"},d=void 0,m={unversionedId:"framework/auth/authn/services",id:"framework/auth/authn/services",title:"Authentication services",description:"Oneki.js provides 4 services you can use to implement the authentication process",source:"@site/docs/framework/auth/authn/005_services.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/services",permalink:"/docs/framework/auth/authn/services",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/005_services.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"services",title:"Authentication services",sidebar_label:"Services"},sidebar:"someSidebar",previous:{title:"User info",permalink:"/docs/framework/auth/authn/userinfo"},next:{title:"Form based auth",permalink:"/docs/framework/auth/authn/form-based"}},c={},k=[{value:"Login service",id:"login-service",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Example",id:"example",level:4},{value:"Login callback service",id:"login-callback-service",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Logout service",id:"logout-service",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Logout callback service",id:"logout-callback-service",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Inputs",id:"inputs-3",level:4},{value:"Outputs",id:"outputs-3",level:4},{value:"Example",id:"example-3",level:4}],g={toc:k};function h(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," provides 4 services you can use to implement the authentication process",(0,l.kt)("br",{parentName:"p"}),"\n","The use of these services is the same regardless of the type of authentication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#login-service"},"login service"))),(0,l.kt)("td",{parentName:"tr",align:null},"Service processing the connection request. e.g: an AJAX POST, a redirect to an OIDC IDP, ...")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#login-callback-service"},"login callback service"))),(0,l.kt)("td",{parentName:"tr",align:null},"When authentication is performed by an external party (e.g an OIDC Identity Provider), this service handles the callback after a connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#logout-service"},"logout service "))),(0,l.kt)("td",{parentName:"tr",align:null},"Service processing the disconnection request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#logout-callback-service"},"logout callback service "))),(0,l.kt)("td",{parentName:"tr",align:null},"When the disconnection is performed by an external party (e.g an OIDC Identity Provider), this service handles the callback after a disconnection")))),(0,l.kt)("h2",{id:"login-service"},"Login service"),(0,l.kt)("p",null,"Based on the configuration found in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/settings.ts"),", the ",(0,l.kt)("strong",{parentName:"p"},"login service"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"redirects the user to an external identity provider  (",(0,l.kt)("inlineCode",{parentName:"li"},"External authentication"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Oauth2"),")"),(0,l.kt)("li",{parentName:"ul"},"provides a submit function to send the credentials to the server (",(0,l.kt)("inlineCode",{parentName:"li"},"Form based authentication"),")")),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLogin"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading, submit] = useLogin(idpName, options);\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are marked with a ","*")),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"idpName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"idp/:idpName"))," in ",(0,l.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),".",(0,l.kt)("br",null),"See the page ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./introduction#configuration"},"Configuration"))," for more details",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),': "default"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/LoginOptions"},"LoginOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options.",(0,l.kt)("br",null),"onSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request was successful.",(0,l.kt)("br",null),"Mainly used for Form based authentication",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options.",(0,l.kt)("br",null),"onError")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request failed.",(0,l.kt)("br",null),"Mainly used for Form based authentication",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../../notification/introduction"},"that sends a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"login-error"))))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/BasicError"},"BasicError")),(0,l.kt)("td",{parentName:"tr",align:null},"Set if an error occurs during the login phase. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"submit"),(0,l.kt)("td",{parentName:"tr",align:null},"(data) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"A function to submit the credentials to the server",(0,l.kt)("br",null),"Mainly used for Form based authentication")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Form based authentication")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cra",mdxType:"TabItem"},(0,l.kt)(s.ZP,{name:"cra-auth-form",height:"600",modules:["/src/pages/login.tsx"],mdxType:"Sandbox"})),(0,l.kt)(o.Z,{value:"next",mdxType:"TabItem"},(0,l.kt)(s.ZP,{name:"next-auth-form",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OIDC authentication")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useLogin } from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const [error] = useLogin(idpName); // redirects the user to Google\'s signin page\n  if (error) {\n    return <div>{error.payload.message}</div>\n  }\n  return null;\n}\n')),(0,l.kt)("h2",{id:"login-callback-service"},"Login callback service"),(0,l.kt)("p",null,"The login callback service manages a redirection following a connection. This service is useful when the authentication is done by an external entity (",(0,l.kt)("strong",{parentName:"p"},"external login"),", ",(0,l.kt)("strong",{parentName:"p"},"open id connect"),", ...)"),(0,l.kt)("p",null,"Based on the configuration found in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/settings.ts"),", the ",(0,l.kt)("strong",{parentName:"p"},"login callback service")," can (non exhaustive list): "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Extracts the token from the query parameters and potentialy store it"),(0,l.kt)("li",{parentName:"ul"},"Extracts an authorization code from the query parameters and exchange it for a token")),(0,l.kt)("p",null,"It's instantied via the ",(0,l.kt)("strong",{parentName:"p"},"useLoginCallback")," hook."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLoginCallback(idpName, options);\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are marked with a ","*")),(0,l.kt)("h4",{id:"inputs-1"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idpName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"idpName")," is used to retrieve the configuration with the key ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"idp/:idpName"))," in ",(0,l.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),".",(0,l.kt)("br",null),"See the page ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./introduction#configuration"},"Configuration"))," for more details",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),': "default"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/LoginOptions"},"LoginOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options.",(0,l.kt)("br",null),"onSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options.",(0,l.kt)("br",null),"onError")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the login request failed.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../../notification/introduction"},"that sends a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"login-error"))))),(0,l.kt)("h4",{id:"outputs-1"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/BasicError"},"BasicError")),(0,l.kt)("td",{parentName:"tr",align:null},"Set if an error occurs during the login phase. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OIDC authentication"),(0,l.kt)("br",{parentName:"p"}),"\n","The user is redirected to this page by the external entity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useLoginCallback} from "onekijs";\n\nexport default React.memo(() => {\n  const idpName = \'google\';\n  const [error] = useLoginCallback(idpName);\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')),(0,l.kt)("h2",{id:"logout-service"},"Logout service"),(0,l.kt)("p",null,"Based on the configuration found in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/settings.ts"),", the ",(0,l.kt)("strong",{parentName:"p"},"logout service"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"redirects the user to an external identity provider (",(0,l.kt)("inlineCode",{parentName:"li"},"External authentication"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Open ID Connect"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Oauth2"),")"),(0,l.kt)("li",{parentName:"ul"},"sends a AJAX request to the backend (",(0,l.kt)("inlineCode",{parentName:"li"},"Form based authentication"),")")),(0,l.kt)("p",null,"It's instantied via the ",(0,l.kt)("strong",{parentName:"p"},"useLogout")," hook."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLogout(options);\n")),(0,l.kt)("p",null),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"idpName")," is not needed as it's stored in the localStorage during the login process.")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are marked with a ","*")),(0,l.kt)("h4",{id:"inputs-2"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/LogoutOptions"},"LogoutOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout returned an error.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"logout-error"))))),(0,l.kt)("h4",{id:"outputs-2"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/BasicError"},"BasicError")),(0,l.kt)("td",{parentName:"tr",align:null},"Set if an error occurs during the logout phase. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cra",mdxType:"TabItem"},(0,l.kt)(s.ZP,{name:"cra-auth-form",height:"600",modules:["/src/pages/logout.tsx"],mdxType:"Sandbox"})),(0,l.kt)(o.Z,{value:"next",mdxType:"TabItem"},(0,l.kt)(s.ZP,{name:"next-auth-form",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,l.kt)("h2",{id:"logout-callback-service"},"Logout callback service"),(0,l.kt)("p",null,"The logout callback service manages a redirect following a logout. This service is useful when the authentication is done by an external entity (",(0,l.kt)("strong",{parentName:"p"},"external login"),", ",(0,l.kt)("strong",{parentName:"p"},"open id connect"),", ...)"),(0,l.kt)("p",null,"It's instantied via the hook ",(0,l.kt)("strong",{parentName:"p"},"useLogoutCallback"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [error, loading] = useLogoutCallback(options);\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("h4",{id:"inputs-3"},"Inputs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/LogoutOptions"},"LogoutOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout callback was successful.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function that redirects the user to the original requested page or the homepage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.",(0,l.kt)("br",null),"onError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the logout callback returned an error.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": a function ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../../notification/introduction"},"sending a notification"))," on the topic ",(0,l.kt)("inlineCode",{parentName:"td"},"logout-error"))))),(0,l.kt)("h4",{id:"outputs-3"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/BasicError"},"BasicError")),(0,l.kt)("td",{parentName:"tr",align:null},"Set if the callback request contains an error. The error object contains three properties:",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"message"),": the error message"),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"payload"),": any additionnal data specific to the error")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate that an AJAX request is in progress")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OIDC authentication"),(0,l.kt)("br",{parentName:"p"}),"\n","The user is redirected to this page by the external entity following a logout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useLoginCallbackService } from "onekijs";\n\nexport default React.memo(() => {\n  const [error] = useLogoutCallbackService();\n  if (error) {\n    return <div>{error.payload.message} <span onClick={() => error.remove()}>X</span></div>\n  }\n  return null;\n}\n')))}h.isMDXComponent=!0}}]);