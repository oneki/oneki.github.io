"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[15999],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r().createContext({}),c=function(e){var t=r().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r().createElement(h,l(l({ref:t},u),{},{components:n})):r().createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(72389),s=n(67392),u=n(7094),c=n(12466),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,h=e.defaultValue,f=e.values,g=e.groupId,k=e.className,v=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),w=x.tabGroupChoices,E=x.setTabGroupChoices,O=(0,r.useState)(N),j=O[0],C=O[1],T=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=w[g];null!=P&&P!==j&&b.some((function(e){return e.value===P}))&&C(P)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==j&&(I(t),C(a),null!=g&&E(g,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;n=null!=(o=T[i])?o:T[T.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",p)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:_,onClick:_},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function h(e){var t=(0,l.Z)();return o().createElement(d,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},69443:function(e,t,n){n(67294),n(32779)},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=(e.branch,e.type,e.view,"https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/");o&&("&module=",o.forEach((function(e,t){t>0&&",",e})));var l="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:i,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:l,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,c=e.nextModules,p=e.height,m=void 0===p?600:p,d=e.branch,h=void 0===d?"master":d;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:h,height:m,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:h,height:m,modules:c||n})))};t.ZP=l},75039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(65488),n(85162),n(69443),["components"]),l={id:"introduction",title:"Authentication types",sidebar_label:"Introduction"},s=void 0,u={unversionedId:"framework/auth/authn/introduction",id:"framework/auth/authn/introduction",title:"Authentication types",description:"The goal of the authentication library is to provide the same service / methods for any type of authentication. Everything specific to a type of authentication is configured in src/settings.ts",source:"@site/docs/framework/auth/authn/001_introduction.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/introduction",permalink:"/docs/framework/auth/authn/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Authentication types",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"Security context",permalink:"/docs/framework/auth/authz/security-context"},next:{title:"User info",permalink:"/docs/framework/auth/authn/userinfo"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:5},{value:"Configuration parameter value",id:"configuration-parameter-value",level:3},{value:"Context",id:"context",level:3},{value:"Callback",id:"callback",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The goal of the authentication library is to provide the same service / methods for any type of authentication. Everything specific to a type of authentication is configured in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../configuration/introduction"},"src/settings.ts"))),(0,o.kt)("p",null,"There are 4 types of authentication, each having their specific configuration format: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Use case"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./form-based"},"Form based"))),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication with a username and password provided via a standard web form")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./external"},"External authentication"))),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication is handled by an external system that redirects to the application once authenticiation is complete")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./oidc-server"},"Open ID Connect"))),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication via the Open ID Connect authorization code flow. ",(0,o.kt)("strong",{parentName:"td"},"Oneki.js")," fully implements the standard (including state and nonce)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"oidc_server")," means that the exchange of the authorization code for a token is done on backend side",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"oidc_client")," means that everything is done on client side (less secure but doesn't require a server)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Oauth2 ")),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication via Oauth2 authorization code flow.")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The authentication services provided by ",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," retrieve their configuration from the key ",(0,o.kt)("inlineCode",{parentName:"p"},"idp/:idpName")," in ",(0,o.kt)("strong",{parentName:"p"},"src/settings.ts")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"idpName")," is an ID used when the service is instantied."),(0,o.kt)("h5",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},"src/settings.ts")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Each type of authentication has its own parameters, but some are common, such as"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": the type of authentication"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"userinfoEndpoint"),": represents the URL to retrieve the profile of the connected user"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  idp: {\n    default: {\n      type: "form",\n      loginEndpoint: "/api/lgoin",\n      logoutEndpoint: "/api/logout",\n      userinfoEndpoint: "/api/userinfo",\n      ...\n    },\n    myOidc: {\n      type: "oidc_server",\n      authorizeEndpoint: process.env.REACT_APP_AUTHORIZE_ENDPOINT,\n      userinfoEndpoint: "/api/userinfo",\n      ...\n    },\n    myOidcClient: {\n      type: "oidc_client",\n      ...\n    },\n    myExternal: {\n      type: "external",\n      ...\n    },\n    myOauth2: {\n      type: "oauth2",\n      ...\n    }\n  }\n}\n')),(0,o.kt)("p",null),"Instantiation of the service:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Login service will use the configuration idp.myId\nuseLoginService('myId');\n\n// As no id is indicated below, login service will use idp.default\nuseLoginService();\n")),(0,o.kt)("h3",{id:"configuration-parameter-value"},"Configuration parameter value"),(0,o.kt)("p",null,"For many attributes in ",(0,o.kt)("strong",{parentName:"p"},"src/settings.ts"),", the value can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"async Function")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"loginEndpoint: '/en/auth'\n// or\nloginEndpoint: (context) => {\n  return `https://example.com/${context.i18n.locale}/auth`\n}\n// or\nloginEndpoint: async (context) => {\n  return await myAsyncFunction(\"foo\");\n}\n")),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("p",null,"The context contains the following attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const context = {\n  idp // the configuration of the active IDP from settings.js\n  router\n  store // the Redux store\n  settings // the full settings.js\n  i18n // to know which locale is active\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../../api/interfaces/AppContext"},"See API for more details"))),(0,o.kt)("h2",{id:"callback"},"Callback"),(0,o.kt)("p",null,"Via ",(0,o.kt)("strong",{parentName:"p"},"src/settings.ts")," you can specific an (optional) callback executed at the end of the authentication process",(0,o.kt)("br",null)),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"callback: (result, context) => [token, securityContext]\n")),(0,o.kt)("p",null,"The callback receives the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#context"},"context"))," but also a ",(0,o.kt)("strong",{parentName:"p"},"result")," object. The ",(0,o.kt)("strong",{parentName:"p"},"result")," object is specific to the type of authentication",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Example")),": For a Form based authentication, the ",(0,o.kt)("strong",{parentName:"p"},"result")," object is the response from the backend"),(0,o.kt)("p",null,"The callback returns optionally a token and/or a securityContext:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"token")," must have a specific format ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#token"},"described here")),". ",(0,o.kt)("strong",{parentName:"li"},"Oneki.js")," stores the token in one of the following location (based on the configuration attribute ",(0,o.kt)("strong",{parentName:"li"},"persist"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"no storage")," (if persist = null)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"global state")," with the key ",(0,o.kt)("strong",{parentName:"li"},"auth.token"),' (if persist = "memory")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cookie"),' (if persist = "cookie")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sessionStorage"),' (if persist = "sessionStorage")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"localStorage"),' (if persist = "localStorage")'))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"securityContext")," is stored in the global state with the key ",(0,o.kt)("strong",{parentName:"li"},"auth.securityContext"))))}d.isMDXComponent=!0}}]);