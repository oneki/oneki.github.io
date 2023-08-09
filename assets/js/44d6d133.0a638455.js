"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[45789],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),u=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return r?a().createElement(f,i(i({ref:t},s),{},{components:r})):a().createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(87462),a=r(67294),l=r.n(a),o=r(86010),i=r(63366),c=r(72389),s=r(86043),u="details_lb9f",p="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function v(e){var t=e.summary,r=e.children,v=(0,i.Z)(e,m),y=(0,c.Z)(),k=(0,a.useRef)(null),g=(0,s.u)({initialState:!v.open}),h=g.collapsed,w=g.setCollapsed,O=(0,a.useState)(v.open),N=O[0],E=O[1],j=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},v,{ref:k,open:N,"data-collapsed":h,className:(0,o.Z)(u,y&&p,v.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&b(t,k.current)&&(e.preventDefault(),h?(w(!1),E(!0)):w(!0))}}),j,l().createElement(s.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),E(!e)}},l().createElement("div",{className:d},r)))}var y="details_b_Ee";function k(e){var t=Object.assign({},e);return l().createElement(v,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",y,t.className)}))}},55831:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=(r(34673),["components"]),i={id:"handler",title:"handler",sidebar_label:"handler"},c=void 0,s={unversionedId:"framework-api/variables/handler",id:"framework-api/variables/handler",title:"handler",description:"Properties",source:"@site/docs/framework-api/variables/handler.md",sourceDirName:"framework-api/variables",slug:"/framework-api/variables/handler",permalink:"/docs/framework-api/variables/handler",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/variables/handler.md",tags:[],version:"current",frontMatter:{id:"handler",title:"handler",sidebar_label:"handler"},sidebar:"someSidebar",previous:{title:"eventLocks",permalink:"/docs/framework-api/variables/eventLocks"},next:{title:"inReducer",permalink:"/docs/framework-api/variables/inReducer"}},u={},p=[{value:"Properties",id:"properties",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"__type<S,T>(target: T,prop: string | number | symbol,receiver: T): any\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"get")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);