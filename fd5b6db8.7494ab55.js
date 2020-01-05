/*! For license information please see fd5b6db8.7494ab55.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(173)),o=n(176),s=n(177),c={id:"use-settings",title:"useSettings",sidebar_label:"useSettings"},l={id:"hooks/use-settings",title:"useSettings",description:"import Tabs from '@theme/Tabs';\r",source:"@site/docs/hooks/005-use-settings.md",permalink:"/docs/hooks/use-settings",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/005-use-settings.md",sidebar_label:"useSettings",sidebar:"someSidebar",previous:{title:"Oneki.js hooks",permalink:"/docs/hooks/introduction"},next:{title:"useGet",permalink:"/docs/hooks/use-get"}},u=[{value:"useSettings Parameters",id:"usesettings-parameters",children:[]},{value:"useSetting Parameters",id:"usesetting-parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[]}]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const settings = useSettings();\nconst setting = useSetting(key);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"useSettings"))," returns the whole object that is passed as a prop to ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"App"))," (generally defined in settings.js)",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"useSetting"))," returns a specific entry from Settings idenfified by ",Object(i.b)("strong",{parentName:"p"},"key")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Note")),": The settings object is frozen and can't be updated.")),Object(i.b)("h3",{id:"usesettings-parameters"},"useSettings Parameters"),Object(i.b)("h4",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"useSettings has no input."),Object(i.b)("h4",{id:"outputs"},"Outputs"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'// the settings passed to <App /> via the "settings" props.\n// We recommand to define this object in the file settings.js\nsettings: object\n')),Object(i.b)("h3",{id:"usesetting-parameters"},"useSetting Parameters"),Object(i.b)("h4",{id:"inputs-1"},"Inputs"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// key is the path of an element in the Settings object\nkey: string\n")),Object(i.b)("h4",{id:"outputs-1"},"Outputs"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// the value identified by the key in the Settings object\nsetting: any\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"minimal-example"},"Minimal example"),Object(i.b)("p",null,"The minimal example shows how to retrieve a setting inside a Component."),Object(i.b)(o.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"code",mdxType:"TabItem"},Object(i.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-settings-mqvi7?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"900px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(i.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(i.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-settings-mqvi7?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"900px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}b.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s({ref:t},l,{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},176:function(e,t,n){"use strict";n(23),n(17),n(18);var r=n(0),a=n.n(r),i=n(174),o=n.n(i),s=n(118),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,s=e.values,p=Object(r.useState)(i),b=p[0],m=p[1],d=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:o()("tab-item",c.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},177:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);