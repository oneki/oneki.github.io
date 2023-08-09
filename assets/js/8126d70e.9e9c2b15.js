"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[56376],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(67294),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=r().createContext({}),s=function(t){var e=r().useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return r().createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r().createElement(r().Fragment,{},e)}},f=r().forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(a),f=n,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return a?r().createElement(d,l(l({ref:e},p),{},{components:a})):r().createElement(d,l({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r().createElement.apply(null,i)}return r().createElement.apply(null,a)}f.displayName="MDXCreateElement"},34673:function(t,e,a){a.d(e,{Z:function(){return y}});var n=a(87462),r=a(67294),o=a.n(r),i=a(86010),l=a(63366),c=a(72389),p=a(86043),s="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(t){return!!t&&("SUMMARY"===t.tagName||d(t.parentElement))}function h(t,e){return!!t&&(t===e||h(t.parentElement,e))}function b(t){var e=t.summary,a=t.children,b=(0,l.Z)(t,f),k=(0,c.Z)(),y=(0,r.useRef)(null),P=(0,p.u)({initialState:!b.open}),g=P.collapsed,v=P.setCollapsed,w=(0,r.useState)(b.open),N=w[0],O=w[1],M=o().isValidElement(e)?e:o().createElement("summary",null,null!=e?e:"Details");return o().createElement("details",(0,n.Z)({},b,{ref:y,open:N,"data-collapsed":g,className:(0,i.Z)(s,k&&u,b.className),onMouseDown:function(t){d(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;d(e)&&h(e,y.current)&&(t.preventDefault(),g?(v(!1),O(!0)):v(!0))}}),M,o().createElement(p.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){v(t),O(!t)}},o().createElement("div",{className:m},a)))}var k="details_b_Ee";function y(t){var e=Object.assign({},t);return o().createElement(b,(0,n.Z)({},e,{className:(0,i.Z)("alert alert--info",k,e.className)}))}},45763:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(34673),["components"]),l={id:"PathMatch",title:"PathMatch",sidebar_label:"PathMatch"},c=void 0,p={unversionedId:"framework-api/interfaces/PathMatch",id:"framework-api/interfaces/PathMatch",title:"PathMatch",description:"A PathMatch contains info about how a PathPattern matched on a URL pathname.",source:"@site/docs/framework-api/interfaces/PathMatch.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/PathMatch",permalink:"/docs/framework-api/interfaces/PathMatch",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/PathMatch.md",tags:[],version:"current",frontMatter:{id:"PathMatch",title:"PathMatch",sidebar_label:"PathMatch"},sidebar:"someSidebar",previous:{title:"Path",permalink:"/docs/framework-api/interfaces/Path"},next:{title:"PathRouteProps",permalink:"/docs/framework-api/interfaces/PathRouteProps"}},s={},u=[{value:"Properties",id:"properties",level:3}],m={toc:u};function f(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A PathMatch contains info about how a PathPattern matched on a URL pathname."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Params"},"Params"),"<ParamKey",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The names and values of dynamic parameters in the URL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pathname"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The portion of the URL pathname that was matched.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pathnameBase"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The portion of the URL pathname that was matched before child routes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pattern"),(0,o.kt)("td",{parentName:"tr",align:null},"PathPattern<string",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The pattern that was used to match.")))))}f.isMDXComponent=!0}}]);