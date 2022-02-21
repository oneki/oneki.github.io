"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[38689],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(67294),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=r().createContext({}),p=function(t){var e=r().useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r().createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r().createElement(r().Fragment,{},e)}},m=r().forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r().createElement(k,o(o({ref:e},u),{},{components:n})):r().createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},44996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(52263),r=n(13919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,i=l.forcePrependBaseUrl,o=void 0!==i&&i,s=l.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return e+n;var p=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+p:p}(l,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},58215:function(t,e,n){var a=n(67294),r=n.n(a);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(83117),r=n(67294),l=n.n(r),i=n(72389),o=n(79443);var s=function(){var t=(0,r.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},u=n(89521),p=n(86010),c="tabItem_1uMI";function d(t){var e,n,a,i=t.lazy,o=t.block,d=t.defaultValue,m=t.values,k=t.groupId,h=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),b=(0,u.lx)(f,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(e=null!=d?d:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==N&&!f.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),y=v.tabGroupChoices,x=v.setTabGroupChoices,w=(0,r.useState)(N),C=w[0],E=w[1],T=[],R=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=y[k];null!=L&&L!==C&&f.some((function(t){return t.value===L}))&&E(L)}var O=function(t){var e=t.currentTarget,n=T.indexOf(e),a=f[n].value;a!==C&&(R(e),E(a),null!=k&&x(k,a))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return l().createElement("div",{className:"tabs-container"},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},h)},f.map((function(t){var e=t.value,n=t.label;return l().createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":C===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:j,onFocus:O,onClick:O},null!=n?n:e)}))),i?(0,r.cloneElement)(g.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):l().createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function m(t){var e=(0,i.Z)();return l().createElement(d,(0,a.Z)({key:String(e)},t))}},79443:function(t,e,n){var a=n(67294),r=(0,a.createContext)(void 0);e.Z=r},64094:function(t,e,n){var a=n(67294),r=n.n(a),l=n(26396);n(58215);e.Z=function(t){var e=t.children;return console.log("children",e),r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},e)}},32779:function(t,e,n){n.d(e,{Y:function(){return l}});var a=n(67294),r=n.n(a),l=function(t){var e=t.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+e,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};e.Z=function(t){var e=t.name,n=t.height,a=void 0===n?500:n,l=t.modules,i=t.branch,o=void 0===i?"master":i,s=t.type,u=void 0===s?"examples":s,p=t.view,c="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+o+"/"+u+"/"+e+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===p?"editor":p);l&&(c+="&module=",l.forEach((function(t,e){e>0&&(c+=","),c+=t})));var d="onekijs-"+e.split("/").join("-");return r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},85063:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=(n(44996),n(64094)),o=n(58215),s=n(32779),u=["components"],p={id:"external",title:"External authentication",sidebar_label:"External auth"},c=void 0,d={unversionedId:"framework/auth/authn/external",id:"framework/auth/authn/external",isDocsHomePage:!1,title:"External authentication",description:"External authentication means that the authentication is handled by an external entity and once the authentication is done, the user is redirected back to the React application.",source:"@site/docs/framework/auth/authn/020-external.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/external",permalink:"/docs/framework/auth/authn/external",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/020-external.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"external",title:"External authentication",sidebar_label:"External auth"},sidebar:"someSidebar",previous:{title:"Form based auth",permalink:"/docs/framework/auth/authn/form-based"},next:{title:"OIDC (server side)",permalink:"/docs/framework/auth/authn/oidc-server"}},m=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],k={toc:m};function h(t){var e=t.components,n=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"External authentication")," means that the authentication is handled by an external entity and once the authentication is done, the user is redirected back to the React application."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The external entity could be the backend of the React app or any other server."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," expects a function to parse the parameters returned by the external entity"),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for the logged-in user. This means that this page is secured via the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../authz/secure-page"},"secure HOC")),(0,l.kt)("br",null),"\nThis flow can be customized via ",(0,l.kt)("inlineCode",{parentName:"p"},"src/settings.ts")),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VLJ1ajiW3BtxAzISTW-9xpvqjitiz0FQVe0CnD6400CYk_ltbI6Rc8otFZ0WdfuUJng_9CR8-MoxR-IKpThaQE787DBGzsFCpXyYkXFj9k9Z7dVaUqbXKZqcHQIzsWQBRgROfXEv7SragDX7-9jCx4R_3fiV8S3Jp-ZV9FAywK2-87L9KP1SsFJH98wasEWDO8BxSGLh_KIkmChkAyHMeRKZgjCTkhz6EkCqYB2bE0bBT5KSPZuM4j9XvVhjwF5C1L2tD_hP0DX-Npnd08SNcf2D48bBT95j-zpxOKujkWS9Qef6SIclpNhcWl7kJDarJAWX6MPoKrf59BmOy97aW1QYpyBtjEZGSvibfdojh-huzA50V-VnJ0nAKenZGfkMLbIBPRtXP_TdeAgcNQ-QVZRr5zKhMIlcDWDekN330SaM_vhxkSYiUm1DIKRy0rvZz77lpy4xqTCPcqmbI5afaz8XspMIPVC_PG9xw1zwz-ZQJMZJs8UaTbZg-0tmw_MFj5ZbIFonzuxDUstCWkSwgPM3StGhTEtp0qxcl-CdKzzrBxBA7-0V",alt:null}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In the above scenario, the ",(0,l.kt)("strong",{parentName:"p"},"/login page")," uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogin")," to redirect the user to the external entity."))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"useLoginCallback"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogoutCallback")," hooks are configured via several parameters in ",(0,l.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./introduction#configuration"},"see configuration")),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"the following parameters are available:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  idp: {\n    default: {\n      // MANDATORY parameters\n      type: "external",\n      externalLoginEndpoint: "/api/auth",\n\n      // OPTIONAL parameters\n      externalLogoutEndpoint: "/api/logout",\n      userinfoEndpoint: "/api/whoami",\n      postLoginRedirectKey: "redirectUri",\n      postLogoutRedirectKey: "redirectUri",\n      callback: (result, context) => [token, securityContext],\n    },\n  },\n};\n')),(0,l.kt)("p",null),"_Mandatory parameters are marked with a \\*_",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'must be "',(0,l.kt)("strong",{parentName:"td"},"form"),'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"externalLoginEndpoint"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#externalloginendpoint"},"externalLoginEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of an external webpage that allows the user to log in",(0,l.kt)("br",null),(0,l.kt)("br",null),"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"externalLogoutEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#externallogoutendpoint"},"externalLogoutEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of an external webpage that allows the user to log out",(0,l.kt)("br",null),(0,l.kt)("br",null),"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#userinfoendpoint"},"userinfoEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of an API called to retrieve the connected user's profile (via a HTTP GET request)",(0,l.kt)("br",null),(0,l.kt)("br",null),"Can be:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function that returns an object representing the userInfo. ",(0,l.kt)("br",null),"For example a object like this: {email: '",(0,l.kt)("a",{parentName:"td",href:"mailto:foo@example.com"},"foo@example.com"),"', roles: ","['ADMIN']","}}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginCallbackRoute")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL to which the user is redirected after authentication",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/login-callback"},"https://mysite.com/login-callback"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": <current_url>/callback (so if current URL is ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/login"},"https://mysite.com/login")," -> defaults to ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/login/callback"},"https://mysite.com/login/callback"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"postLoginRedirectKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Oneki.js")," adds a query param to the ",(0,l.kt)("inlineCode",{parentName:"td"},"externalLoginEndpoint")," to indicate the callback URL to redirect to once the authentication is performed",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),":",(0,l.kt)("br",null),"if ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"externalLoginEndpoint"),' = "',(0,l.kt)("a",{parentName:"td",href:"https://idp.com/auth%22"},'https://idp.com/auth"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"postLoginRedictKey"),' = "redirectUri"'),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"loginCallbackRoute")," = ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/login-callback"},"https://mysite.com/login-callback")))," then the external authentication URL is ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"https://idp.com/auth?redirectUri=https://mysite.com/login-callback"},"https://idp.com/auth?redirectUri=https://mysite.com/login-callback"))),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": redirect_uri")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutCallbackRoute")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL to which the user is redirected after disconnection",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/logout-callback"},"https://mysite.com/logout-callback"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": <current_url>/callback (so if current URL is ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/logout"},"https://mysite.com/logout")," -> defaults to ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/logout/callback"},"https://mysite.com/logout/callback"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"postLogoutRedirectKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Oneki.js")," adds a query param to the ",(0,l.kt)("inlineCode",{parentName:"td"},"externalLogoutEndpoint")," to indicate the callback URL to redirect to once the disconnection is performed",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),":",(0,l.kt)("br",null),"if ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"externalLogoutEndpoint"),' = "',(0,l.kt)("a",{parentName:"td",href:"https://idp.com/logout%22"},'https://idp.com/logout"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"postLoginRedictKey"),' = "redirectUri"'),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"loginCallbackRoute")," = ",(0,l.kt)("a",{parentName:"td",href:"https://mysite.com/logout-callback"},"https://mysite.com/logout-callback")))," then the external authentication URL is ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"https://idp.com/logoutredirectUri=https://mysite.com/logout-callback"},"https://idp.com/logoutredirectUri=https://mysite.com/logout-callback"))),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": redirect_uri")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#callback"},"callback")),(0,l.kt)("td",{parentName:"tr",align:null},"a callback function to parse the query params received by the loginCallbackRoute.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The fonction returns optionally a token and/or a securityContext",(0,l.kt)("br",null),"if callback is null, ",(0,l.kt)("strong",{parentName:"td"},"Oneki.js")," assumes that the session is done via a cookie and the security context is retrieved via the ",(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")," defined above)",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"persist")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"How the token is persisted",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Possible values"),": ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"memory"),": the token is stored only in the global state with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"auth.token")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"localStorage"),": the token is stored in the global state with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"auth.token")," and in the browser's local storage with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"onekijs.token")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"sessionStorage"),": the token is stored in the global state with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"auth.token")," and in the browser's session storage with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"onekijs.token")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"cookie"),": the token is stored in the global state with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"auth.token")," and in the browser's cookies with the key ",(0,l.kt)("inlineCode",{parentName:"td"},"onekijs.token"))),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": memory")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The example below redirects the user to an external page (",(0,l.kt)("inlineCode",{parentName:"p"},"/login.html"),", not part of the React application) to handle the authentication. The redirect is done via ",(0,l.kt)("inlineCode",{parentName:"p"},"useLogin")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"/login")," page"),(0,l.kt)("p",null,"Once the authentication is done, he's redirected back to ",(0,l.kt)("inlineCode",{parentName:"p"},"/login-callback?token=XXXX")," which is part the React application. Then:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The token is extracted from the URL and put in the global state with the key ",(0,l.kt)("inlineCode",{parentName:"li"},"auth.token"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secure() HOC")," retrieves the user's profile of the user via an AJAX GET request to ",(0,l.kt)("inlineCode",{parentName:"li"},"/userinfo")," with an HTTP Authorization header = ",(0,l.kt)("inlineCode",{parentName:"li"},"Bearer <TOKEN_VALUE_IN_GLOBAL_STATE>"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"the page ",(0,l.kt)("inlineCode",{parentName:"p"},"login.html")," could be hosted on another domain"))),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cra",mdxType:"TabItem"},(0,l.kt)(s.Z,{name:"cra-auth-external",height:"650",modules:["/src/settings.ts",,"/src/pages/admin.tsx","/src/pages/login.tsx","/src/pages/login-callback.tsx"],mdxType:"Sandbox"})),(0,l.kt)(o.Z,{value:"next",mdxType:"TabItem"},(0,l.kt)(s.Z,{name:"next-auth-external",height:"1000",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))))}h.isMDXComponent=!0}}]);