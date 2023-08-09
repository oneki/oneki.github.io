"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[90796],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a().createContext({}),u=function(t){var e=a().useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a().createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},m=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a().createElement(k,o(o({ref:e},s),{},{components:n})):a().createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(87462),a=n(67294),l=n.n(a),i=n(86010),o=n(63366),p=n(72389),s=n(86043),u="details_lb9f",c="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function k(t){return!!t&&("SUMMARY"===t.tagName||k(t.parentElement))}function g(t,e){return!!t&&(t===e||g(t.parentElement,e))}function N(t){var e=t.summary,n=t.children,N=(0,o.Z)(t,m),f=(0,p.Z)(),y=(0,a.useRef)(null),b=(0,s.u)({initialState:!N.open}),v=b.collapsed,h=b.setCollapsed,O=(0,a.useState)(N.open),w=O[0],S=O[1],F=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,r.Z)({},N,{ref:y,open:w,"data-collapsed":v,className:(0,i.Z)(u,f&&c,N.className),onMouseDown:function(t){k(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;k(e)&&g(e,y.current)&&(t.preventDefault(),v?(h(!1),S(!0)):h(!0))}}),F,l().createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){h(t),S(!t)}},l().createElement("div",{className:d},n)))}var f="details_b_Ee";function y(t){var e=Object.assign({},t);return l().createElement(N,(0,r.Z)({},e,{className:(0,i.Z)("alert alert--info",f,e.className)}))}},43261:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(34673),o=["components"],p={id:"FetchService",title:"FetchService",sidebar_label:"FetchService"},s=void 0,u={unversionedId:"framework-api/classes/FetchService",id:"framework-api/classes/FetchService",title:"FetchService",description:"Properties",source:"@site/docs/framework-api/classes/FetchService.md",sourceDirName:"framework-api/classes",slug:"/framework-api/classes/FetchService",permalink:"/docs/framework-api/classes/FetchService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/classes/FetchService.md",tags:[],version:"current",frontMatter:{id:"FetchService",title:"FetchService",sidebar_label:"FetchService"},sidebar:"someSidebar",previous:{title:"DefaultService",permalink:"/docs/framework-api/classes/DefaultService"},next:{title:"FieldValidation",permalink:"/docs/framework-api/classes/FieldValidation"}},c={},d=[{value:"Properties",id:"properties",level:3}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"callSaga")),(0,l.kt)("td",{parentName:"tr",align:null},"callSaga(sagaName: string,args: any[]): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"cancelPull")),(0,l.kt)("td",{parentName:"tr",align:null},"cancelPull(): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"constructor")),(0,l.kt)("td",{parentName:"tr",align:null},"new FetchService<S",">","()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"delayLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"delayLoading(delay_ms: number): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"delete")),(0,l.kt)("td",{parentName:"tr",align:null},"delete<R",">","(url: string,options: FetchOptions<R",">","): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fetch")),(0,l.kt)("td",{parentName:"tr",align:null},"fetch<R",">","(url: string,method: FetchMethod,body: unknown,options: FetchOptions<R",">","): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fetchError")),(0,l.kt)("td",{parentName:"tr",align:null},"fetchError(e: any): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fetchSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},"fetchSuccess(result: any): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"get")),(0,l.kt)("td",{parentName:"tr",align:null},"get<R",">","(url: string,options: FetchOptions<R",">","): any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"patch")),(0,l.kt)("td",{parentName:"tr",align:null},"patch<R",">","(url: string,body: unknown,options: FetchOptions<R",">","): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"poll")),(0,l.kt)("td",{parentName:"tr",align:null},"poll(url: string,fixedRateInMs: number,options: FetchOptions<any",">","): any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"pollFetch")),(0,l.kt)("td",{parentName:"tr",align:null},"pollFetch(url: string,fixedRateInMs: number,options: FetchOptions<any",">","): any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"post")),(0,l.kt)("td",{parentName:"tr",align:null},"post<R",">","(url: string,body: unknown,options: FetchOptions<R",">","): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"put")),(0,l.kt)("td",{parentName:"tr",align:null},"put<R",">","(url: string,body: unknown,options: FetchOptions<R",">","): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"setLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"setLoading(loading: boolean,fetching: boolean): void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullTask"),(0,l.kt)("td",{parentName:"tr",align:null},"Task<any",">"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}k.isMDXComponent=!0}}]);