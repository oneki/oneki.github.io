"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[62433],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a().createContext({}),c=function(t){var e=a().useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a().createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},f=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?a().createElement(d,l(l({ref:e},p),{},{components:n})):a().createElement(d,l({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}f.displayName="MDXCreateElement"},34673:function(t,e,n){n.d(e,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(63366),u=n(72389),p=n(86043),c="details_lb9f",s="isBrowser_bmU9",m="collapsibleContent_i85q",f=["summary","children"];function d(t){return!!t&&("SUMMARY"===t.tagName||d(t.parentElement))}function b(t,e){return!!t&&(t===e||b(t.parentElement,e))}function k(t){var e=t.summary,n=t.children,k=(0,l.Z)(t,f),y=(0,u.Z)(),g=(0,a.useRef)(null),v=(0,p.u)({initialState:!k.open}),N=v.collapsed,h=v.setCollapsed,w=(0,a.useState)(k.open),S=w[0],O=w[1],P=o().isValidElement(e)?e:o().createElement("summary",null,null!=e?e:"Details");return o().createElement("details",(0,r.Z)({},k,{ref:g,open:S,"data-collapsed":N,className:(0,i.Z)(c,y&&s,k.className),onMouseDown:function(t){d(t.target)&&t.detail>1&&t.preventDefault()},onClick:function(t){t.stopPropagation();var e=t.target;d(e)&&b(e,g.current)&&(t.preventDefault(),N?(h(!1),O(!0)):h(!0))}}),P,o().createElement(p.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(t){h(t),O(!t)}},o().createElement("div",{className:m},n)))}var y="details_b_Ee";function g(t){var e=Object.assign({},t);return o().createElement(k,(0,r.Z)({},e,{className:(0,i.Z)("alert alert--info",y,e.className)}))}},50975:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(34673),l=["components"],u={id:"SubmitButton",title:"SubmitButton",sidebar_label:"SubmitButton"},p=void 0,c={unversionedId:"framework-api/functions/SubmitButton",id:"framework-api/functions/SubmitButton",title:"SubmitButton",description:"Properties",source:"@site/docs/framework-api/functions/SubmitButton.md",sourceDirName:"framework-api/functions",slug:"/framework-api/functions/SubmitButton",permalink:"/docs/framework-api/functions/SubmitButton",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/functions/SubmitButton.md",tags:[],version:"current",frontMatter:{id:"SubmitButton",title:"SubmitButton",sidebar_label:"SubmitButton"},sidebar:"someSidebar",previous:{title:"Select",permalink:"/docs/framework-api/functions/Select"},next:{title:"Textarea",permalink:"/docs/framework-api/functions/Textarea"}},s={},m=[{value:"Properties",id:"properties",level:3}],f={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"SubmitButton(props: PropsWithChildren<SubmitButtonProps>,context: any): ReactNode\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"props")),(0,o.kt)("td",{parentName:"tr",align:null},"PropsWithChildren<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/SubmitButtonProps"},"SubmitButtonProps"),">"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)(i.Z,{summary:(0,o.kt)("summary",null,(0,o.kt)("b",null,"Additional properties for advanced use cases")),mdxType:"Details"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null})))))))}d.isMDXComponent=!0}}]);