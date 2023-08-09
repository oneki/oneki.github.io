"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[91837],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var a=r(67294),n=r.n(a);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=n().createContext({}),d=function(t){var e=n().useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return n().createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n().createElement(n().Fragment,{},e)}},c=n().forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(r),c=a,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return r?n().createElement(k,i(i({ref:e},m),{},{components:r})):n().createElement(k,i({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n().createElement.apply(null,o)}return n().createElement.apply(null,r)}c.displayName="MDXCreateElement"},34673:function(t,e,r){r.d(e,{Z:function(){return N}});var a=r(87462),n=r(67294),l=r.n(n),o=r(86010),i=r(63366),p=r(72389),m=r(86043),d="details_lb9f",u="isBrowser_bmU9",s="collapsibleContent_i85q",c=["summary","children"];function k(t){return!!t&&("SUMMARY"===t.tagName||k(t.parentElement))}function f(t,e){return!!t&&(t===e||f(t.parentElement,e))}function g(t){var e=t.summary,r=t.children,g=(0,i.Z)(t,c),b=(0,p.Z)(),N=(0,n.useRef)(null),y=(0,m.u)({initialState:!g.open}),h=y.collapsed,v=y.setCollapsed,w=(0,n.useState)(g.open),F=w[0],O=w[1],C=l().isValidElement(e)?e:l().createElement("summary",null,null!=e?e:"Details");return l().createElement("details",(0,a.Z)({},g,{ref:N,open:F,"data-collapsed":h,className:(0,o.Z)(d,b&&u,g.className),onMouseDown:function(t){k(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;k(e)&&f(e,N.current)&&(t.preventDefault(),h?(v(!1),O(!0)):v(!0))}}),C,l().createElement(m.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){v(t),O(!t)}},l().createElement("div",{className:s},r)))}var b="details_b_Ee";function N(t){var e=Object.assign({},t);return l().createElement(g,(0,a.Z)({},e,{className:(0,o.Z)("alert alert--info",b,e.className)}))}},76784:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(34673),i=["components"],p={id:"FormConfig",title:"FormConfig",sidebar_label:"FormConfig"},m=void 0,d={unversionedId:"framework-api/types/FormConfig",id:"framework-api/types/FormConfig",title:"FormConfig",description:"Properties",source:"@site/docs/framework-api/types/FormConfig.md",sourceDirName:"framework-api/types",slug:"/framework-api/types/FormConfig",permalink:"/docs/framework-api/types/FormConfig",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/types/FormConfig.md",tags:[],version:"current",frontMatter:{id:"FormConfig",title:"FormConfig",sidebar_label:"FormConfig"},sidebar:"someSidebar",previous:{title:"FieldOptions",permalink:"/docs/framework-api/types/FieldOptions"},next:{title:"FormDecorator",permalink:"/docs/framework-api/types/FormDecorator"}},u={},s=[{value:"Properties",id:"properties",level:3}],c={toc:s};function k(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"controller")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/classes/FormService"},"FormService")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSubmit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormSubmitCallback"},"FormSubmitCallback")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fieldSize"),(0,l.kt)("td",{parentName:"tr",align:null},"xsmall ","|"," small ","|"," medium ","|"," large ","|"," xlarge"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLayout"},"FormLayout")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lgLabelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoadingComponent"),(0,l.kt)("td",{parentName:"tr",align:null},"React.FC"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mdLabelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormErrorCallback"},"FormErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onWarning"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormWarningCallback"},"FormWarningCallback")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reconfigure"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smLabelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"touchOn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/TouchOnType"},"TouchOnType")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xlLabelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xsLabelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/types/FormLabelWidth"},"FormLabelWidth")),(0,l.kt)("td",{parentName:"tr",align:null})))))))}k.isMDXComponent=!0}}]);