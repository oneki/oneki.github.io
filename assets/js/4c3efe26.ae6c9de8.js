"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[91393],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),u=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},f=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?a().createElement(d,i(i({ref:t},s),{},{components:n})):a().createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(63366),c=n(72389),s=n(86043),u="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function y(e){var t=e.summary,n=e.children,y=(0,i.Z)(e,f),b=(0,c.Z)(),g=(0,a.useRef)(null),C=(0,s.u)({initialState:!y.open}),v=C.collapsed,N=C.setCollapsed,h=(0,a.useState)(y.open),w=h[0],S=h[1],O=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},y,{ref:g,open:w,"data-collapsed":v,className:(0,l.Z)(u,b&&p,y.className),onMouseDown:function(e){d(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;d(t)&&k(t,g.current)&&(e.preventDefault(),v?(N(!1),S(!0)):N(!0))}}),O,o().createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),S(!e)}},o().createElement("div",{className:m},n)))}var b="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(y,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},76717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(34673),i=["components"],c={id:"useCollectionInitialState",title:"useCollectionInitialState",sidebar_label:"useCollectionInitialState"},s=void 0,u={unversionedId:"framework-api/functions/useCollectionInitialState",id:"framework-api/functions/useCollectionInitialState",title:"useCollectionInitialState",description:"Properties",source:"@site/docs/framework-api/functions/useCollectionInitialState.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useCollectionInitialState",permalink:"/docs/framework-api/functions/useCollectionInitialState",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useCollectionInitialState.md",tags:[],version:"current",frontMatter:{id:"useCollectionInitialState",title:"useCollectionInitialState",sidebar_label:"useCollectionInitialState"},sidebar:"someSidebar",previous:{title:"useCollection",permalink:"/docs/framework-api/functions/useCollection"},next:{title:"useCollectionProxy",permalink:"/docs/framework-api/functions/useCollectionProxy"}},p={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useCollectionInitialState<T,I>(dataSource: undefined | string | CollectionProxy<T, I, CollectionState<T, I>, Collection<T, I, CollectionState<T, I>>> | T[],options: UseCollectionOptions<T, I>): CollectionState<T, I>\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"dataSource")),(0,o.kt)("td",{parentName:"tr",align:null},"undefined ","|"," string ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/CollectionProxy"},"CollectionProxy"),"<T, I, ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/CollectionState"},"CollectionState"),"<T, I",">",", ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/Collection"},"Collection"),"<T, I, ",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/CollectionState"},"CollectionState"),"<T, I",">",">",">"," ","|"," T[]"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(l.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/UseCollectionOptions"},"UseCollectionOptions"),"<T, I",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);