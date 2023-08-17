"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51246],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||l;return r?a().createElement(d,i(i({ref:t},s),{},{components:r})):a().createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),l=r.n(a),o=r(86010),i=r(63366),u=r(72389),s=r(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function b(e){var t=e.summary,r=e.children,b=(0,i.Z)(e,f),y=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,s.u)({initialState:!b.open}),h=v.collapsed,N=v.setCollapsed,O=(0,a.useState)(b.open),w=O[0],D=O[1],S=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},b,{ref:g,open:w,"data-collapsed":h,className:(0,o.Z)(c,y&&p,b.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&k(t,g.current)&&(e.preventDefault(),h?(N(!1),D(!0)):N(!0))}}),S,l().createElement(s.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),D(!e)}},l().createElement("div",{className:m},r)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(b,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",y,t.className)}))}},30730:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(34673),i=["components"],u={id:"useSecureDelete",title:"useSecureDelete",sidebar_label:"useSecureDelete"},s=void 0,c={unversionedId:"framework-api/functions/useSecureDelete",id:"framework-api/functions/useSecureDelete",title:"useSecureDelete",description:"Properties",source:"@site/docs/framework-api/functions/useSecureDelete.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useSecureDelete",permalink:"/docs/framework-api/functions/useSecureDelete",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useSecureDelete.md",tags:[],version:"current",frontMatter:{id:"useSecureDelete",title:"useSecureDelete",sidebar_label:"useSecureDelete"},sidebar:"someSidebar",previous:{title:"useSearchParams",permalink:"/docs/framework-api/functions/useSearchParams"},next:{title:"useSecureGet",permalink:"/docs/framework-api/functions/useSecureGet"}},p={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"useSecureDelete(url: string,options: AppFetchOptions<any>): \n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppFetchOptions"},"AppFetchOptions"),"<any",">"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);