"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[56622],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a().createElement(f,l(l({ref:t},s),{},{components:n})):a().createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),l=n(63366),u=n(72389),s=n(86043),c="details_lb9f",p="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,l.Z)(e,m),y=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,s.u)({initialState:!k.open}),w=v.collapsed,h=v.setCollapsed,C=(0,a.useState)(k.open),O=C[0],N=C[1],E=i().isValidElement(t)?t:i().createElement("summary",null,null!=t?t:"Details");return i().createElement("details",(0,r.Z)({},k,{ref:g,open:O,"data-collapsed":w,className:(0,o.Z)(c,y&&p,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&b(t,g.current)&&(e.preventDefault(),w?(h(!1),N(!0)):h(!0))}}),E,i().createElement(s.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){h(e),N(!e)}},i().createElement("div",{className:d},n)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return i().createElement(k,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",y,t.className)}))}},97569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(34673),l=["components"],u={id:"useFieldContainer",title:"useFieldContainer",sidebar_label:"useFieldContainer"},s=void 0,c={unversionedId:"framework-api/functions/useFieldContainer",id:"framework-api/functions/useFieldContainer",title:"useFieldContainer",description:"Properties",source:"@site/docs/framework-api/functions/useFieldContainer.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useFieldContainer",permalink:"/docs/framework-api/functions/useFieldContainer",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useFieldContainer.md",tags:[],version:"current",frontMatter:{id:"useFieldContainer",title:"useFieldContainer",sidebar_label:"useFieldContainer"},sidebar:"someSidebar",previous:{title:"useField",permalink:"/docs/framework-api/functions/useField"},next:{title:"useForm",permalink:"/docs/framework-api/functions/useForm"}},p={},d=[{value:"Properties",id:"properties",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"useFieldContainer(__namedParameters: ): FieldContainer\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"This element is often used without passing props"),(0,i.kt)(o.Z,{summary:(0,i.kt)("summary",null,(0,i.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onValidationChange"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onValueChange"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);