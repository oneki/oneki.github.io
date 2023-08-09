"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[90910],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a().createContext({}),s=function(e){var t=a().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a().createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?a().createElement(d,l(l({ref:t},c),{},{components:r})):a().createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}f.displayName="MDXCreateElement"},34673:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(63366),p=r(72389),c=r(86043),s="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,r=e.children,k=(0,l.Z)(e,f),y=(0,p.Z)(),g=(0,a.useRef)(null),v=(0,c.u)({initialState:!k.open}),w=v.collapsed,O=v.setCollapsed,h=(0,a.useState)(k.open),N=h[0],E=h[1],j=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,n.Z)({},k,{ref:g,open:N,"data-collapsed":w,className:(0,i.Z)(s,y&&u,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&b(t,g.current)&&(e.preventDefault(),w?(O(!1),E(!0)):O(!0))}}),j,o().createElement(c.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){O(e),E(!e)}},o().createElement("div",{className:m},r)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(k,(0,n.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}},92162:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(34673),["components"]),l={id:"idpForm",title:"idpForm",sidebar_label:"idpForm"},p=void 0,c={unversionedId:"framework-api/functions/idpForm",id:"framework-api/functions/idpForm",title:"idpForm",description:"Properties",source:"@site/docs/framework-api/functions/idpForm.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/idpForm",permalink:"/docs/framework-api/functions/idpForm",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/idpForm.md",tags:[],version:"current",frontMatter:{id:"idpForm",title:"idpForm",sidebar_label:"idpForm"},sidebar:"someSidebar",previous:{title:"hex2b64",permalink:"/docs/framework-api/functions/hex2b64"},next:{title:"indexLocales",permalink:"/docs/framework-api/functions/indexLocales"}},s={},u=[{value:"Properties",id:"properties",level:3}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"idpForm(idpConfig: IdpSettings): Idp\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"idpConfig")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/IdpSettings"},"IdpSettings")),(0,o.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);