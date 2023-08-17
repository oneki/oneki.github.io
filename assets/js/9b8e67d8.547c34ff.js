"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[83841],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a().createContext({}),s=function(e){var t=a().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,d=c["".concat(o,".").concat(f)]||c[f]||m[f]||l;return n?a().createElement(d,i(i({ref:t},p),{},{components:n})):a().createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),l=n.n(a),o=n(86010),i=n(63366),u=n(72389),p=n(86043),s="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function y(e,t){return!!e&&(e===t||y(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,f),b=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,p.u)({initialState:!k.open}),h=v.collapsed,N=v.setCollapsed,w=(0,a.useState)(k.open),O=w[0],E=w[1],j=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,r.Z)({},k,{ref:g,open:O,"data-collapsed":h,className:(0,o.Z)(s,b&&c,k.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&y(t,g.current)&&(e.preventDefault(),h?(N(!1),E(!0)):N(!0))}}),j,l().createElement(p.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),E(!e)}},l().createElement("div",{className:m},n)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(k,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",b,t.className)}))}},66094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(34673),i=["components"],u={id:"layout",title:"layout",sidebar_label:"layout"},p=void 0,s={unversionedId:"framework-api/functions/layout",id:"framework-api/functions/layout",title:"layout",description:"Inspired by this excellent article:",source:"@site/docs/framework-api/functions/layout.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/layout",permalink:"/docs/framework-api/functions/layout",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/layout.md",tags:[],version:"current",frontMatter:{id:"layout",title:"layout",sidebar_label:"layout"},sidebar:"someSidebar",previous:{title:"latest",permalink:"/docs/framework-api/functions/latest"},next:{title:"lcfirst",permalink:"/docs/framework-api/functions/lcfirst"}},c={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"layout(Layout: ElementType,ParentLayout: ElementType): ElementType<any>\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"Inspired by this excellent article:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/"},"https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/")),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("font",{size:"2"},(0,l.kt)("i",null,"(Mandatory properties are in bold)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Layout")),(0,l.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)(o.Z,{summary:(0,l.kt)("summary",null,(0,l.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ParentLayout"),(0,l.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);