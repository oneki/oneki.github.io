"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[40196],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(67294),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a().createContext({}),d=function(t){var e=a().useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a().createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},k=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?a().createElement(c,o(o({ref:e},u),{},{components:n})):a().createElement(c,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}k.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(87462),a=n(67294),l=n.n(a),i=n(86010),o=n(63366),p=n(72389),u=n(86043),d="details_lb9f",m="isBrowser_bmU9",s="collapsibleContent_i85q",k=["summary","children"];function c(t){return!!t&&("SUMMARY"===t.tagName||c(t.parentElement))}function g(t,e){return!!t&&(t===e||g(t.parentElement,e))}function N(t){var e=t.summary,n=t.children,N=(0,o.Z)(t,k),f=(0,p.Z)(),b=(0,a.useRef)(null),y=(0,u.u)({initialState:!N.open}),h=y.collapsed,v=y.setCollapsed,O=(0,a.useState)(N.open),w=O[0],P=O[1],j=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,r.Z)({},N,{ref:b,open:w,"data-collapsed":h,className:(0,i.Z)(d,f&&m,N.className),onMouseDown:function(t){c(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;c(e)&&g(e,b.current)&&(t.preventDefault(),h?(v(!1),P(!0)):v(!0))}}),j,l().createElement(u.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){v(t),P(!t)}},l().createElement("div",{className:s},n)))}var f="details_b_Ee";function b(t){var e=Object.assign({},t);return l().createElement(N,(0,r.Z)({},e,{className:(0,i.Z)("alert alert--info",f,e.className)}))}},42838:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(34673),o=["components"],p={id:"Router",title:"Router",sidebar_label:"Router"},u=void 0,d={unversionedId:"framework-api/interfaces/Router",id:"framework-api/interfaces/Router",title:"Router",description:"Properties",source:"@site/docs/framework-api/interfaces/Router.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/Router",permalink:"/docs/framework-api/interfaces/Router",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/Router.md",tags:[],version:"current",frontMatter:{id:"Router",title:"Router",sidebar_label:"Router"},sidebar:"someSidebar",previous:{title:"RouteMatch",permalink:"/docs/framework-api/interfaces/RouteMatch"},next:{title:"RouterContext",permalink:"/docs/framework-api/interfaces/RouterContext"}},m={},s=[{value:"Properties",id:"properties",level:3}],k={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"back")),(0,l.kt)("td",{parentName:"tr",align:null},"back(delta: number): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"deleteOrigin")),(0,l.kt)("td",{parentName:"tr",align:null},"deleteOrigin(): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"forward")),(0,l.kt)("td",{parentName:"tr",align:null},"forward(delta: number): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getLinkComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"getLinkComponent(props: LinkProps,ref: null ","|"," MutableRefObject<null ","|"," HTMLAnchorElement",">"," ","|"," ): Element"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getOrigin")),(0,l.kt)("td",{parentName:"tr",align:null},"getOrigin():"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"hash")),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ","|"," null ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/ParsedQuery"},"ParsedQuery"),"<string",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"history")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/Location"},"Location"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"href")),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ","|"," null ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"i18n")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/I18n"},"I18n")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"init(settings: AppSettings): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"listen")),(0,l.kt)("td",{parentName:"tr",align:null},"listen(callback: LocationChangeCallback): UnregisterCallback"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"location")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/Location"},"Location")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"pathname")),(0,l.kt)("td",{parentName:"tr",align:null},"null ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"previousLocation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/Location"},"Location")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"push")),(0,l.kt)("td",{parentName:"tr",align:null},"push(urlOrLocation: string ","|"," Location,options: RouterPushOptions): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ","|"," null ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/ParsedQuery"},"ParsedQuery"),"<string",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"replace")),(0,l.kt)("td",{parentName:"tr",align:null},"replace(urlOrLocation: string ","|"," Location,options: RouterPushOptions): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"saveOrigin")),(0,l.kt)("td",{parentName:"tr",align:null},"saveOrigin(force: boolean): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"settings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppSettings"},"AppSettings")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ","|"," null ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<any",">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"route"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}c.isMDXComponent=!0}}]);