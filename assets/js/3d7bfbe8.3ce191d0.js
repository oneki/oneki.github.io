"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[23118],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return g}});var n=r(67294),a=r.n(n);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=a().createContext({}),p=function(t){var e=a().useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return a().createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},m=a().forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return r?a().createElement(g,i(i({ref:e},c),{},{components:r})):a().createElement(g,i({ref:e},c))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(t,e,r){r.d(e,{Z:function(){return b}});var n=r(87462),a=r(67294),l=r.n(a),o=r(86010),i=r(63366),s=r(72389),c=r(86043),p="details_lb9f",u="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function g(t){return!!t&&("SUMMARY"===t.tagName||g(t.parentElement))}function k(t,e){return!!t&&(t===e||k(t.parentElement,e))}function f(t){var e=t.summary,r=t.children,f=(0,i.Z)(t,m),N=(0,s.Z)(),b=(0,a.useRef)(null),v=(0,c.u)({initialState:!f.open}),y=v.collapsed,S=v.setCollapsed,h=(0,a.useState)(f.open),w=h[0],E=h[1],L=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,n.Z)({},f,{ref:b,open:w,"data-collapsed":y,className:(0,o.Z)(p,N&&u,f.className),onMouseDown:function(t){g(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;g(e)&&k(e,b.current)&&(t.preventDefault(),y?(S(!1),E(!0)):S(!0))}}),L,l().createElement(c.z,{lazy:!1,collapsed:y,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){S(t),E(!t)}},l().createElement("div",{className:d},r)))}var N="details_b_Ee";function b(t){var e=Object.assign({},t);return l().createElement(f,(0,n.Z)({},e,{className:(0,o.Z)("alert alert--info",N,e.className)}))}},43437:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=(r(34673),["components"]),i={id:"LoginService",title:"LoginService",sidebar_label:"LoginService"},s=void 0,c={unversionedId:"framework-api/classes/LoginService",id:"framework-api/classes/LoginService",title:"LoginService",description:"Properties",source:"@site/docs/framework-api/classes/LoginService.md",sourceDirName:"framework-api/classes",slug:"/framework-api/classes/LoginService",permalink:"/docs/framework-api/classes/LoginService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/classes/LoginService.md",tags:[],version:"current",frontMatter:{id:"LoginService",title:"LoginService",sidebar_label:"LoginService"},sidebar:"someSidebar",previous:{title:"LocalStateService",permalink:"/docs/framework-api/classes/LocalStateService"},next:{title:"LogoutService",permalink:"/docs/framework-api/classes/LogoutService"}},p={},u=[{value:"Properties",id:"properties",level:3}],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"authService")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/AuthService"},"default")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"callSaga")),(0,l.kt)("td",{parentName:"tr",align:null},"callSaga(sagaName: string,args: any[]): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"constructor")),(0,l.kt)("td",{parentName:"tr",align:null},"new LoginService(notificationService: default,authService: default)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/BasicAppContext"},"default")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"externalLogin")),(0,l.kt)("td",{parentName:"tr",align:null},"externalLogin(idpName: string,onError: ErrorCallback): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Redirect the user to an external login page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"externalLoginCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"externalLoginCallback(idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Parse the token and the security context from the response of the")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external login"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"formLogin")),(0,l.kt)("td",{parentName:"tr",align:null},"formLogin(data: AnonymousObject<any",">",",idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Submit the login form")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"login")),(0,l.kt)("td",{parentName:"tr",align:null},"login(idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Check if a login is necessary.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"notificationService")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/NotificationService"},"default")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onError")),(0,l.kt)("td",{parentName:"tr",align:null},"onError(error: default): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Inform the user if there is an error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess(): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the loading and error message after a successful operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"setLoading(loading: boolean): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Inform the user if there is a loading task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/LoginState"},"LoginState")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"successLogin")),(0,l.kt)("td",{parentName:"tr",align:null},"successLogin(token: string ","|"," AnonymousObject<any",">",",securityContext: AnonymousObject<any",">",",idpName: string,onError: ErrorCallback,onSuccess: SuccessCallback): void"),(0,l.kt)("td",{parentName:"tr",align:null},"Save the token and the security context")))))}m.isMDXComponent=!0}}]);