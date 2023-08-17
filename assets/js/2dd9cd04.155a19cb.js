"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[30852],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a().createContext({}),s=function(e){var t=a().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a().createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a().createElement(f,i(i({ref:t},p),{},{components:n})):a().createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(63366),u=n(72389),p=n(86043),s="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function b(e){var t=e.summary,n=e.children,b=(0,i.Z)(e,d),y=(0,u.Z)(),g=(0,a.useRef)(null),h=(0,p.u)({initialState:!b.open}),N=h.collapsed,v=h.setCollapsed,w=(0,a.useState)(b.open),O=w[0],x=w[1],E=o().isValidElement(t)?t:o().createElement("summary",null,null!=t?t:"Details");return o().createElement("details",(0,r.Z)({},b,{ref:g,open:O,"data-collapsed":N,className:(0,l.Z)(s,y&&c,b.className),onMouseDown:function(e){f(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;f(t)&&k(t,g.current)&&(e.preventDefault(),N?(v(!1),x(!0)):v(!0))}}),E,o().createElement(p.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){v(e),x(!e)}},o().createElement("div",{className:m},n)))}var y="details_b_Ee";function g(e){var t=Object.assign({},e);return o().createElement(b,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",y,t.className)}))}},80381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(34673),i=["components"],u={id:"xhr",title:"xhr",sidebar_label:"xhr"},p=void 0,s={unversionedId:"framework-api/functions/xhr",id:"framework-api/functions/xhr",title:"xhr",description:"Properties",source:"@site/docs/framework-api/functions/xhr.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/xhr",permalink:"/docs/framework-api/functions/xhr",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/xhr.md",tags:[],version:"current",frontMatter:{id:"xhr",title:"xhr",sidebar_label:"xhr"},sidebar:"someSidebar",previous:{title:"wrap",permalink:"/docs/framework-api/functions/wrap"},next:{title:"useLogin",permalink:"/docs/framework-api/hooks/auth/useLogin"}},c={},m=[{value:"Properties",id:"properties",level:3}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"xhr(url: string,method: string,body: unknown,options: FetchOptions<any>): Promise<Response>\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(l.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"body"),(0,o.kt)("td",{parentName:"tr",align:null},"unknown"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/FetchOptions"},"FetchOptions"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}f.isMDXComponent=!0}}]);