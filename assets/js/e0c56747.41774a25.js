"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[38978],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return c}});var n=r(67294),a=r.n(n);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var m=a().createContext({}),u=function(t){var e=a().useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return a().createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},k=a().forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(r),k=n,c=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return r?a().createElement(c,o(o({ref:e},m),{},{components:r})):a().createElement(c,o({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}k.displayName="MDXCreateElement"},34673:function(t,e,r){r.d(e,{Z:function(){return b}});var n=r(87462),a=r(67294),l=r.n(a),i=r(86010),o=r(63366),p=r(72389),m=r(86043),u="details_lb9f",d="isBrowser_bmU9",s="collapsibleContent_i85q",k=["summary","children"];function c(t){return!!t&&("SUMMARY"===t.tagName||c(t.parentElement))}function g(t,e){return!!t&&(t===e||g(t.parentElement,e))}function N(t){var e=t.summary,r=t.children,N=(0,o.Z)(t,k),f=(0,p.Z)(),b=(0,a.useRef)(null),y=(0,m.u)({initialState:!N.open}),v=y.collapsed,h=y.setCollapsed,P=(0,a.useState)(N.open),w=P[0],F=P[1],O=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,n.Z)({},N,{ref:b,open:w,"data-collapsed":v,className:(0,i.Z)(u,f&&d,N.className),onMouseDown:function(t){c(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;c(e)&&g(e,b.current)&&(t.preventDefault(),v?(h(!1),F(!0)):h(!0))}}),O,l().createElement(m.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){h(t),F(!t)}},l().createElement("div",{className:s},r)))}var f="details_b_Ee";function b(t){var e=Object.assign({},t);return l().createElement(N,(0,n.Z)({},e,{className:(0,i.Z)("alert alert--info",f,e.className)}))}},46037:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(34673),o=["components"],p={id:"FormFieldProps",title:"FormFieldProps",sidebar_label:"FormFieldProps"},m=void 0,u={unversionedId:"framework-api/types/FormFieldProps",id:"framework-api/types/FormFieldProps",title:"FormFieldProps",description:"Properties",source:"@site/docs/framework-api/types/FormFieldProps.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/FormFieldProps",permalink:"/docs/framework-api/types/FormFieldProps",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/FormFieldProps.md",tags:[],version:"current",frontMatter:{id:"FormFieldProps",title:"FormFieldProps",sidebar_label:"FormFieldProps"},sidebar:"someSidebar",previous:{title:"FormErrorCallback",permalink:"/docs/framework-api/types/FormErrorCallback"},next:{title:"FormLabelWidth",permalink:"/docs/framework-api/types/FormLabelWidth"}},d={},s=[{value:"Properties",id:"properties",level:3}],k={toc:s};function c(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"__type(value: any): boolean\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emailMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integerMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isUndefined"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxLengthMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minLength"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minLengthMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," RegExp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regexMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requiredMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validators"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Validator"},"Validator"),">"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}c.isMDXComponent=!0}}]);