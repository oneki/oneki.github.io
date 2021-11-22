"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[38689],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a().createContext({}),p=function(t){var e=a().useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a().createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},c=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a().createElement(k,i(i({ref:e},s),{},{components:n})):a().createElement(k,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}c.displayName="MDXCreateElement"},13919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},44996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return o}});var r=n(52263),a=n(13919);function l(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var l=void 0===r?{}:r,o=l.forcePrependBaseUrl,i=void 0!==o&&o,u=l.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return e+n;var p=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+p:p}(l,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},58215:function(t,e,n){var r=n(67294),a=n.n(r);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(83117),a=n(67294),l=n.n(a),o=n(72389),i=n(79443);var u=function(){var t=(0,a.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(89521),p=n(86010),d="tabItem_1uMI";function m(t){var e,n,r,o=t.lazy,i=t.block,m=t.defaultValue,c=t.values,k=t.groupId,f=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),b=(0,s.lx)(h,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(e=null!=m?m:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=g[0])?void 0:r.props.value;if(null!==N&&!h.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=u(),y=v.tabGroupChoices,w=v.setTabGroupChoices,x=(0,a.useState)(N),E=x[0],O=x[1],T=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var C=y[k];null!=C&&C!==E&&h.some((function(t){return t.value===C}))&&O(C)}var A=function(t){var e=t.currentTarget,n=T.indexOf(e),r=h[n].value;r!==E&&(j(e),O(r),null!=k&&w(k,r))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=T.indexOf(t.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(t.currentTarget)-1;n=T[a]||T[T.length-1]}null==(e=n)||e.focus()};return l().createElement("div",{className:"tabs-container"},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},f)},h.map((function(t){var e=t.value,n=t.label;return l().createElement("li",{role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":E===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:D,onFocus:A,onClick:A},null!=n?n:e)}))),o?(0,a.cloneElement)(g.filter((function(t){return t.props.value===E}))[0],{className:"margin-vert--md"}):l().createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==E})}))))}function c(t){var e=(0,o.Z)();return l().createElement(m,(0,r.Z)({key:String(e)},t))}},79443:function(t,e,n){var r=n(67294),a=(0,r.createContext)(void 0);e.Z=a},69443:function(t,e,n){var r=n(83117),a=n(67294),l=n.n(a),o=n(32779);e.Z=function(t){return l().createElement(o.Z,(0,r.Z)({type:"next"},t))}},32779:function(t,e,n){var r=n(67294),a=n.n(r);e.Z=function(t){var e=t.name,n=t.height,r=void 0===n?500:n,l=t.modules,o=t.branch,i=void 0===o?"master":o,u=t.type,s=void 0===u?"examples":u,p=t.view,d="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+s+"/"+e+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===p?"editor":p);l&&(d+="&module=",l.forEach((function(t,e){e>0&&(d+=","),d+=t})));var m="onekijs-"+e.split("/").join("-");return a().createElement("iframe",{src:d,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:m,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},85063:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=(n(44996),n(26396),n(58215),n(69443),["components"]),i={id:"external",title:"External",sidebar_label:"External"},u=void 0,s={unversionedId:"framework/auth/authn/external",id:"framework/auth/authn/external",isDocsHomePage:!1,title:"External",description:"Form based authentication means that the login page presents a form, so the user can specifiy his username and password.",source:"@site/docs/framework/auth/authn/020-external.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/external",permalink:"/docs/framework/auth/authn/external",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/020-external.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"external",title:"External",sidebar_label:"External"},sidebar:"someSidebar",previous:{title:"Form based",permalink:"/docs/framework/auth/authn/form-based"},next:{title:"OIDC (server side)",permalink:"/docs/framework/auth/authn/oidc-server"}},p=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Mandatory attributes",id:"mandatory-attributes",children:[{value:"Optional attributes",id:"optional-attributes",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"External authentication",id:"external-authentication",children:[{value:"Mandatory attributes",id:"mandatory-attributes-1",children:[],level:4},{value:"Optional attributes",id:"optional-attributes-1",children:[],level:4}],level:3}],level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Form based authentication")," means that the login page presents a form, so the user can specifiy his username and password."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," lets you build the form as you wish, but provide you a function to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"submit the username / password to the backend server"),(0,l.kt)("li",{parentName:"ul"},"handle the response returned by the backend server")),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration parameters are the following:"),(0,l.kt)("h3",{id:"mandatory-attributes"},"Mandatory attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'must be "',(0,l.kt)("strong",{parentName:"td"},"form"),'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null)," function (context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function that returns an object representing the userInfo. ",(0,l.kt)("br",null),"For example a object like this: {email: '",(0,l.kt)("a",{parentName:"td",href:"mailto:foo@example.com"},"foo@example.com"),"', roles: ","['ADMIN']","}}")))))),(0,l.kt)("h4",{id:"optional-attributes"},"Optional attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginMethod")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("strong",{parentName:"td"},"loginEndpoint")," is an URL, the method used to send username and password to the server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginContentType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json"),(0,l.kt)("td",{parentName:"tr",align:null},"can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"application/x-www-form-urlencoded"),(0,l.kt)("li",null,"application/json")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"usernameKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"the field expected by the server for the username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"passwordKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"the field expected by the server for the password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"rememberMeKey")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"rememberMe"),(0,l.kt)("td",{parentName:"tr",align:null},"the field expected by the server for the rememberMe feature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutMethod")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("strong",{parentName:"td"},"logoutEndpoint")," is an URL, the method used to call the logout URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:null},"function(response, context): ","[token,securityContext]"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"a callback function to parse the result of the authentication.",(0,l.kt)("br",null),"The fonction returns optionally a token and/or a securityContext  (if not set, it's assumed that the session is done via a cookie and the security context is retrieved via the ",(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")," defined above)")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  idp: {\n    default: {\n      // MANDATORY parameters\n      type: 'form',\n      loginEndpoint: '/api/login',\n      logoutEndpoint: '/api/logout',\n      userinfoEndpoint: '/api/whoami',\n\n      // OPTIONAL parameters\n      loginMethod: 'POST',\n      loginContentType: 'application/json',\n      usernameKey: 'username',\n      passwordKey: 'password',\n      rememberMeKey: 'rememberMe',\n      logoutMethod: 'GET',\n      callback: (result, context) => [null, result]  \n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"external-authentication"},"External authentication"),(0,l.kt)("p",null,"The configuration parameters are the following:"),(0,l.kt)("h4",{id:"mandatory-attributes-1"},"Mandatory attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'must be "',(0,l.kt)("strong",{parentName:"td"},"external"),'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")),"A redirect is done to this URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logoutEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null),"function(context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function returning the URL")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"userinfoEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|",(0,l.kt)("br",null)," function (context)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"A relative or absolute URL"),(0,l.kt)("li",null,"A function that returns an object representing the userInfo. ",(0,l.kt)("br",null),"For example a object like this: {email: '",(0,l.kt)("a",{parentName:"td",href:"mailto:foo@example.com"},"foo@example.com"),"', roles: ","['ADMIN']","}}")))))),(0,l.kt)("h4",{id:"optional-attributes-1"},"Optional attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginMethod")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("strong",{parentName:"td"},"loginEndpoint")," is an URL, the method used to send username and password to the server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loginContentType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json"),(0,l.kt)("td",{parentName:"tr",align:null},"can be",(0,l.kt)("ul",null,(0,l.kt)("li",null,"application/x-www-form-urlencoded"),(0,l.kt)("li",null,"application/json")))))))}m.isMDXComponent=!0}}]);