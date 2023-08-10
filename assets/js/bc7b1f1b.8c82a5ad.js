"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[73188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||l;return n?a().createElement(d,i(i({ref:t},u),{},{components:n})):a().createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),s=n(72389),u=n(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,i.Z)(e,f),k=(0,s.Z)(),y=(0,a.useRef)(null),v=(0,u.u)({initialState:!b.open}),w=v.collapsed,N=v.setCollapsed,h=(0,a.useState)(b.open),O=h[0],E=h[1],P=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},b,{ref:y,open:O,"data-collapsed":w,className:(0,o.Z)(c,k&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&g(t,y.current)&&(e.preventDefault(),w?(N(!1),E(!0)):N(!0))}}),P,l().createElement(u.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),E(!e)}},l().createElement("div",{className:m},n)))}var k="details_b_Ee";function y(e){var t=Object.assign({},e);return l().createElement(b,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},31750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(34673),i=["components"],s={id:"saga",title:"saga",sidebar_label:"saga"},u=void 0,c={unversionedId:"framework-api/functions/saga",id:"framework-api/functions/saga",title:"saga",description:"Properties",source:"@site/docs/framework-api/functions/saga.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/saga",permalink:"/docs/framework-api/functions/saga",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/saga.md",tags:[],version:"current",frontMatter:{id:"saga",title:"saga",sidebar_label:"saga"},sidebar:"someSidebar",previous:{title:"resolvePath",permalink:"/docs/framework-api/functions/resolvePath"},next:{title:"secure",permalink:"/docs/framework-api/functions/secure"}},p={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"saga(type: SagaEffect,delay: string | number,defaultDelay: number): \n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This element is often used without passing props"),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delay"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/enum/SagaEffect"},"SagaEffect")),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);