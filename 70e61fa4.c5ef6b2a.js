/*! For license information please see 70e61fa4.c5ef6b2a.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(186)),i=(r(191),r(189)),c=r(190),s={id:"use-redux-selector",title:"useReduxSelector",sidebar_label:"useReduxSelector"},l={id:"state-management/use-redux-selector",title:"useReduxSelector",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/state-management/40-use-redux-selector.md",permalink:"/docs/state-management/use-redux-selector",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/state-management/40-use-redux-selector.md",sidebar_label:"useReduxSelector"},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],b={rightToc:u},p="wrapper";function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const result = useReduxSelector(selector, defaultValue);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useReduxSelector"))," is similar to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useSelector"))," from ",Object(o.b)("strong",{parentName:"p"},"React Redux")," but is tailored to be used with a Redux Store built by Oneki.js",Object(o.b)("br",null),"\nThe difference between ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useSelector"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useReduxSelector"))," are the following:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"useSelector (Redux)"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"useReduxSelector (Oneki.js)"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selector is a function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selector is a function or a string which represent a key in the Redux state.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A equality function can be passed as a second argument"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"There is no need for a equality function as the Redux state built by Oneki.js is fully immutable")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"There is no possibility to pass a default value"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A default value can be passed as a second argument. This value is returned if the selector returns ",Object(o.b)("em",{parentName:"td"},"undefined"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," to understand exactly how it works.")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h4",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// [Mandatory] selector is a function or a string.\n// If selector is a function, it returns a subset of the state\n// If selector is a string, then the string represents a key in the state\nselector: function(state): any | string\n\n// [Optional] This value is returned if the selector returns *undefined*\ndefautValue: any \n")),Object(o.b)("h4",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// The result is a subset of the Redux state\nresult: any\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"minimal-example"},"Minimal example"),Object(o.b)("p",null,"This example shows how to use the selector as a string to retrieve directly a value from the Redux store by key."),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"1100px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(c.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"1100px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}d.isMDXComponent=!0},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},187:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},188:function(e,t,r){"use strict";var n=r(0),a=r(48);t.a=function(){return Object(n.useContext)(a.a)}},189:function(e,t,r){"use strict";r(23),r(17),r(18);var n=r(0),a=r.n(n),o=r(187),i=r.n(o),c=r(118),s=r.n(c),l={left:37,right:39};t.a=function(e){var t=e.block,r=e.children,o=e.defaultValue,c=e.values,u=Object(n.useState)(o),b=u[0],p=u[1],d=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case l.right:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l.left:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===b}))[0]))}},190:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(194);var n=r(188);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},192:function(e,t,r){var n=r(66),a=r(24);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},193:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},194:function(e,t,r){"use strict";var n=r(19),a=r(34),o=r(192),i="".startsWith;n(n.P+n.F*r(193)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})}}]);