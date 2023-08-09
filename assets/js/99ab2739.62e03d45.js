"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[29642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?a().createElement(f,l(l({ref:t},u),{},{components:n})):a().createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),p=n(72389),u=n(86043),c="details_lb9f",s="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,l.Z)(e,m),g=(0,p.Z)(),v=(0,a.useRef)(null),y=(0,u.u)({initialState:!b.open}),N=y.collapsed,w=y.setCollapsed,O=(0,a.useState)(b.open),h=O[0],T=O[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},b,{ref:v,open:h,"data-collapsed":N,className:(0,i.Z)(c,g&&s,b.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&k(t,v.current)&&(e.preventDefault(),N?(w(!1),T(!0)):w(!0))}}),E,o().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),T(!e)}},o().createElement("div",{className:d},n)))}var g="details_b_Ee";function v(e){var t=Object.assign({},e);return o().createElement(b,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",g,t.className)}))}},42906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(34673),["components"]),l={id:"validateToken",title:"validateToken",sidebar_label:"validateToken"},p=void 0,u={unversionedId:"framework-api/functions/validateToken",id:"framework-api/functions/validateToken",title:"validateToken",description:"Properties",source:"@site/docs/framework-api/functions/validateToken.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/validateToken",permalink:"/docs/framework-api/functions/validateToken",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/validateToken.md",tags:[],version:"current",frontMatter:{id:"validateToken",title:"validateToken",sidebar_label:"validateToken"},sidebar:"someSidebar",previous:{title:"useValue",permalink:"/docs/framework-api/functions/useValue"},next:{title:"verify",permalink:"/docs/framework-api/functions/verify"}},c={},s=[{value:"Properties",id:"properties",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"validateToken(token: string,jwksEndpoint: string | ,idp: Idp,context: AppContext): Promise<boolean>\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppContext"},"AppContext")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"idp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/Idp"},"Idp")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"jwksEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"token")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);