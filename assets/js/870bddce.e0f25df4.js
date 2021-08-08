"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[5581],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=a().createContext({}),c=function(t){var e=a().useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return a().createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},d=a().forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return r?a().createElement(f,l(l({ref:e},p),{},{components:r})):a().createElement(f,l({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}d.displayName="MDXCreateElement"},810:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},m=void 0,p={unversionedId:"framework/form/introduction",id:"framework/form/introduction",isDocsHomePage:!1,title:"Introduction",description:"Oneki.js framework comes with a form management system handling all boilerplate codes and providing some nice features for creating complex performant forms",source:"@site/docs/framework/form/001_introduction.md",sourceDirName:"framework/form",slug:"/framework/form/introduction",permalink:"/docs/framework/form/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/001_introduction.md",version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"useNotifications",permalink:"/docs/framework/notification/use-notifications"},next:{title:"useForm",permalink:"/docs/framework/form/use-form"}},c=[],u={toc:c};function s(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," framework comes with a form management system handling all boilerplate codes and providing some nice features for creating complex performant forms"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))),(0,o.kt)("td",{parentName:"tr",align:null},"Starting point to create a new form")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./field"},"field"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to register a field with a form")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./wrapper"},"Core wrappers"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to use Oneki.js components wrapping standard form react components to gain performance and avoid having to write boilerplate code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to attach validators to a field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Custom wrappers"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to create a custom wrapper around any third party form component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./initial-value"},"Initial values"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to create a form with initial values (create form vs edit form)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./bind"},"Binding"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to create a new prop related to the value of a field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./rules"},"Rules"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to create a rule for modifying the state of the form")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"./use-form-context"},"Context"))),(0,o.kt)("td",{parentName:"tr",align:null},"How to get the form context from underlying components")))))}s.isMDXComponent=!0}}]);