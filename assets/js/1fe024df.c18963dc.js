"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[65175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a().createElement(f,i(i({ref:t},u),{},{components:n})):a().createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(63366),s=n(72389),u=n(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function v(e,t){return!!e&&(e===t||v(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,k=(0,i.Z)(e,d),b=(0,s.Z)(),h=(0,a.useRef)(null),y=(0,u.u)({initialState:!k.open}),g=y.collapsed,N=y.setCollapsed,P=(0,a.useState)(k.open),w=P[0],O=P[1],R=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},k,{ref:h,open:w,"data-collapsed":g,className:(0,l.Z)(c,b&&p,k.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&v(t,h.current)&&(e.preventDefault(),g?(N(!1),O(!0)):N(!0))}}),R,o().createElement(u.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),O(!e)}},o().createElement("div",{className:m},n)))}var b="details_b_Ee";function h(e){var t=Object.assign({},e);return o().createElement(k,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",b,t.className)}))}},24707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(34673),i=["components"],s={id:"useResolvedPath",title:"useResolvedPath",sidebar_label:"useResolvedPath"},u=void 0,c={unversionedId:"framework-api/functions/useResolvedPath",id:"framework-api/functions/useResolvedPath",title:"useResolvedPath",description:"Resolves the pathname of the given to value against the current location.",source:"@site/docs/framework-api/functions/useResolvedPath.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/useResolvedPath",permalink:"/docs/framework-api/functions/useResolvedPath",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/useResolvedPath.md",tags:[],version:"current",frontMatter:{id:"useResolvedPath",title:"useResolvedPath",sidebar_label:"useResolvedPath"},sidebar:"someSidebar",previous:{title:"useReduxService",permalink:"/docs/framework-api/functions/useReduxService"},next:{title:"useRouter",permalink:"/docs/framework-api/functions/useRouter"}},p={},m=[{value:"Properties",id:"properties",level:3}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useResolvedPath(to: To,__namedParameters: ): Path\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Resolves the pathname of the given ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," value against the current location."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/To"},"To")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(l.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relative"),(0,o.kt)("td",{parentName:"tr",align:null},"RelativeRoutingType"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);