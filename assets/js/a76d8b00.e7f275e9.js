"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[22672],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||l;return n?a().createElement(d,i(i({ref:t},s),{},{components:n})):a().createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),c=n(72389),s=n(86043),p="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,f),y=(0,c.Z)(),g=(0,a.useRef)(null),h=(0,s.u)({initialState:!k.open}),v=h.collapsed,P=h.setCollapsed,N=(0,a.useState)(k.open),w=N[0],O=N[1],E=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},k,{ref:g,open:w,"data-collapsed":v,className:(0,o.Z)(p,y&&u,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,g.current)&&(e.preventDefault(),v?(P(!1),O(!0)):P(!0))}}),E,l().createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){P(e),O(!e)}},l().createElement("div",{className:m},n)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(k,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",y,t.className)}))}},43045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(34673),i=["components"],c={id:"I18nLocalePath",title:"I18nLocalePath",sidebar_label:"I18nLocalePath"},s=void 0,p={unversionedId:"framework-api/interfaces/I18nLocalePath",id:"framework-api/interfaces/I18nLocalePath",title:"I18nLocalePath",description:"Properties",source:"@site/docs/framework-api/interfaces/I18nLocalePath.md",sourceDirName:"framework-api/interfaces",slug:"/framework-api/interfaces/I18nLocalePath",permalink:"/docs/framework-api/interfaces/I18nLocalePath",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/interfaces/I18nLocalePath.md",tags:[],version:"current",frontMatter:{id:"I18nLocalePath",title:"I18nLocalePath",sidebar_label:"I18nLocalePath"},sidebar:"someSidebar",previous:{title:"I18nLocaleDomain",permalink:"/docs/framework-api/interfaces/I18nLocaleDomain"},next:{title:"I18nSettings",permalink:"/docs/framework-api/interfaces/I18nSettings"}},u={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"locale")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);