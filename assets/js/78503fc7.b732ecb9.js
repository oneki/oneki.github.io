"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[9427],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(67294),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a().createContext({}),u=function(t){var e=a().useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return a().createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},m=a().forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a().createElement(f,i(i({ref:e},s),{},{components:r})):a().createElement(f,i({ref:e},s))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(t,e,r){r.d(e,{Z:function(){return y}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),p=r(72389),s=r(86043),u="details_lb9f",d="isBrowser_bmU9",c="collapsibleContent_i85q",m=["summary","children"];function f(t){return!!t&&("SUMMARY"===t.tagName||f(t.parentElement))}function k(t,e){return!!t&&(t===e||k(t.parentElement,e))}function g(t){var e=t.summary,r=t.children,g=(0,i.Z)(t,m),b=(0,p.Z)(),y=(0,a.useRef)(null),N=(0,s.u)({initialState:!g.open}),h=N.collapsed,v=N.setCollapsed,w=(0,a.useState)(g.open),A=w[0],P=w[1],C=o().isValidElement(e)?e:o().createElement("summary",null,null!=e?e:"Details");return o().createElement("details",(0,n.Z)({},g,{ref:y,open:A,"data-collapsed":h,className:(0,l.Z)(u,b&&d,g.className),onMouseDown:function(t){f(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;f(e)&&k(e,y.current)&&(t.preventDefault(),h?(v(!1),P(!0)):v(!0))}}),C,o().createElement(s.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){v(t),P(!t)}},o().createElement("div",{className:c},r)))}var b="details_b_Ee";function y(t){var e=Object.assign({},t);return o().createElement(g,(0,n.Z)({},e,{className:(0,l.Z)("alert alert--info",b,e.className)}))}},25079:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(34673),i=["components"],p={id:"CoreAppProps",title:"CoreAppProps",sidebar_label:"CoreAppProps"},s=void 0,u={unversionedId:"framework-api/interfaces/CoreAppProps",id:"framework-api/interfaces/CoreAppProps",title:"CoreAppProps",description:"Properties",source:"@site/docs/framework-api/interfaces/CoreAppProps.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/CoreAppProps",permalink:"/docs/framework-api/interfaces/CoreAppProps",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/CoreAppProps.md",tags:[],version:"current",frontMatter:{id:"CoreAppProps",title:"CoreAppProps",sidebar_label:"CoreAppProps"},sidebar:"someSidebar",previous:{title:"CollectionState",permalink:"/docs/framework-api/interfaces/CollectionState"},next:{title:"FetchOptions",permalink:"/docs/framework-api/interfaces/FetchOptions"}},d={},c=[{value:"Properties",id:"properties",level:3}],m={toc:c};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"settings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppSettings"},"AppSettings")," ","|"," Promise<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppSettings"},"AppSettings"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"Settings is a object usually defined in the file ",(0,o.kt)("code",null,"src/settings.ts"),(0,o.kt)("br",null),"Data defined in settings.ts is available throughout the application and contains configuration data.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/configuration/introduction"},"More info here")))))),(0,o.kt)(l.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ErrorBoundaryComponent"),(0,o.kt)("td",{parentName:"tr",align:null},"ComponentType<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/ErrorBoundaryComponentProps"},"ErrorBoundaryComponentProps"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"The component displayed when an error occurs during the rendering phase",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," no error boundary component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"i18nNs"),(0,o.kt)("td",{parentName:"tr",align:null},"string[]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/i18n/introduction"},"More info here")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialLocale"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Property to indicate the language to be used by default",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialState"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnyState"},"AnyState")," ","|"," Promise<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnyState"},"AnyState"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"The initial state passed to the Redux store when it is created",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadingComponent"),(0,o.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:null},"A component expected by ",(0,o.kt)("code",null,"<Suspense",">")," (used to display a loading indicator)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"<DefaultLoadingComponent /",">"),' that displays "Loading..."')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Class"},"Class"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/DefaultService"},"default"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnyState"},"AnyState"),">",">","[]"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of services that will be available globally in the application.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/service/introduction"},"More info here")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"store"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppStore"},"AppStore"),"<any, AnyAction",">"),(0,o.kt)("td",{parentName:"tr",align:null},"A standard Redux store, ",(0,o.kt)("strong",{parentName:"td"},"but created via the helper")," ",(0,o.kt)("code",null,"createReduxStore")," from onekijs",(0,o.kt)("br",null),"The store must be created via this helper so onekijs can control it",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," A store created by ",(0,o.kt)("code",null,"<App/",">")," (recommended)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"translations"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<string",">",">"),(0,o.kt)("td",{parentName:"tr",align:null},"An object containing the translations",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/i18n/introduction"},"More info here")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))))))))}f.isMDXComponent=!0}}]);