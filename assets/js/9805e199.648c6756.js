"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[33687],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||o;return r?a().createElement(d,i(i({ref:t},s),{},{components:r})):a().createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),l=r(86010),i=r(63366),u=r(72389),s=r(86043),p="details_lb9f",c="isBrowser_bmU9",f="collapsibleContent_i85q",m=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function y(e){var t=e.summary,r=e.children,y=(0,i.Z)(e,m),k=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,s.u)({initialState:!y.open}),P=v.collapsed,w=v.setCollapsed,O=(0,a.useState)(y.open),h=O[0],N=O[1],G=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},y,{ref:g,open:h,"data-collapsed":P,className:(0,l.Z)(p,k&&c,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,g.current)&&(e.preventDefault(),P?(w(!1),N(!0)):w(!0))}}),G,o().createElement(s.z,{lazy:!1,collapsed:P,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),N(!e)}},o().createElement("div",{className:f},r)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(y,(0,n.Z)({},t,{className:(0,l.Z)("alert alert--info",k,t.className)}))}},78556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(34673),["components"]),i={id:"useGlobalProp",title:"useGlobalProp",sidebar_label:"useGlobalProp"},u=void 0,s={unversionedId:"framework-api/functions/useGlobalProp",id:"framework-api/functions/useGlobalProp",title:"useGlobalProp",description:"Properties",source:"@site/docs/framework-api/functions/useGlobalProp.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useGlobalProp",permalink:"/docs/framework-api/functions/useGlobalProp",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useGlobalProp.md",tags:[],version:"current",frontMatter:{id:"useGlobalProp",title:"useGlobalProp",sidebar_label:"useGlobalProp"},sidebar:"someSidebar",previous:{title:"useGlobalModifier",permalink:"/docs/framework-api/functions/useGlobalModifier"},next:{title:"useGlobalSelector",permalink:"/docs/framework-api/functions/useGlobalSelector"}},p={},c=[{value:"Properties",id:"properties",level:3}],f={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useGlobalProp<T>(prop: string): T | undefined\nuseGlobalProp<T>(prop: string,defaultValue: undefined): T | undefined\nuseGlobalProp<T>(prop: string,defaultValue: null): T | null\nuseGlobalProp<T>(prop: string,defaultValue: T): T\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"prop")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);