"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[16393],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a().createContext({}),p=function(t){var e=a().useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a().createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},f=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?a().createElement(d,l(l({ref:e},u),{},{components:n})):a().createElement(d,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),c=n(72389),u=n(86043),p="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(t){return!!t&&("SUMMARY"===t.tagName||d(t.parentElement))}function h(t,e){return!!t&&(t===e||h(t.parentElement,e))}function b(t){var e=t.summary,n=t.children,b=(0,l.Z)(t,f),k=(0,c.Z)(),y=(0,a.useRef)(null),g=(0,u.u)({initialState:!b.open}),P=g.collapsed,v=g.setCollapsed,w=(0,a.useState)(b.open),N=w[0],O=w[1],E=o().isValidElement(e)?e:o().createElement("summary",null,null!=e?e:"Details");return o().createElement("details",(0,r.Z)({},b,{ref:y,open:N,"data-collapsed":P,className:(0,i.Z)(p,k&&s,b.className),onMouseDown:function(t){d(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;d(e)&&h(e,y.current)&&(t.preventDefault(),P?(v(!1),O(!0)):v(!0))}}),E,o().createElement(u.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){v(t),O(!t)}},o().createElement("div",{className:m},n)))}var k="details_b_Ee";function y(t){var e=Object.assign({},t);return o().createElement(b,(0,r.Z)({},e,{className:(0,i.Z)("alert alert--info",k,e.className)}))}},82652:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(34673),["components"]),l={id:"matchPath",title:"matchPath",sidebar_label:"matchPath"},c=void 0,u={unversionedId:"framework-api/functions/matchPath",id:"framework-api/functions/matchPath",title:"matchPath",description:"Performs pattern matching on a URL pathname and returns information about",source:"@site/docs/framework-api/functions/matchPath.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/matchPath",permalink:"/docs/framework-api/functions/matchPath",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/matchPath.md",tags:[],version:"current",frontMatter:{id:"matchPath",title:"matchPath",sidebar_label:"matchPath"},sidebar:"someSidebar",previous:{title:"localeFromLocation",permalink:"/docs/framework-api/functions/localeFromLocation"},next:{title:"matchRoutes",permalink:"/docs/framework-api/functions/matchRoutes"}},p={},s=[{value:"Properties",id:"properties",level:3}],m={toc:s};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"matchPath<ParamKey,Path>(pattern: Path | PathPattern<Path>,pathname: string): PathMatch<ParamKey> | null\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Performs pattern matching on a URL pathname and returns information about",(0,o.kt)("br",{parentName:"p"}),"\n","the match."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"pathname")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"pattern")),(0,o.kt)("td",{parentName:"tr",align:null},"Path ","|"," PathPattern<Path",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);