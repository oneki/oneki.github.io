(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},141:function(e,t,n){"use strict";var a=n(0),r=n(142);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},142:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(141),i=n(140),c=n(48),l=n.n(c),b=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,j=d.setTabGroupChoices,v=Object(a.useState)(c),O=v[0],g=v[1],h=Object(a.useState)(!1),N=h[0],y=h[1];if(null!=p){var w=f[p];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&g(w)}var T=function(e){g(e),null!=p&&j(p,e)},x=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},P=function(){y(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",P),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",P)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),E(e)},onFocus:function(){return T(t)},onClick:function(){T(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},145:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},146:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(145),r=n(147);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},147:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(139)),i=(n(146),n(144)),c=n(143),l={id:"multi-env",title:"Environment variables",sidebar_label:"Environment variables"},b={unversionedId:"framework/configuration/multi-env",id:"framework/configuration/multi-env",isDocsHomePage:!1,title:"Environment variables",description:"The file settings.js is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables.",source:"@site/docs/framework/configuration/030_multi-env.md",slug:"/framework/configuration/multi-env",permalink:"/docs/framework/configuration/multi-env",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/configuration/030_multi-env.md",version:"current",sidebar_label:"Environment variables",sidebar:"someSidebar",previous:{title:"useSettings",permalink:"/docs/framework/configuration/use-settings"},next:{title:"Introduction",permalink:"/docs/framework/state-management/introduction"}},s=[{value:"Example",id:"example",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The file ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js"))," is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables."),Object(o.b)("p",null,"To avoid inserting unexpected environment variables in the final bundle, the name of the variables ",Object(o.b)("strong",{parentName:"p"},"must be")," prefixed like this:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Application type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prefix"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create React App"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"REACT","_","APP_")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"REACT_APP_API_URL=",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://api.oneki.net"}),"https://api.oneki.net"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Next.js APP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"NEXT_")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NEXT_API_URL=",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://api.oneki.net"}),"https://api.oneki.net"))))),Object(o.b)("p",null,"The environment variables can be defined in one of these files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"My-App\n\u2502  \u251c\u2500 src \n\u2502  \u2502  \u251c\u2500 settings.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502\n\u251c\u2500 .env.development\n\u251c\u2500 .env.development.local\n\u251c\u2500 .env.production\n\u251c\u2500 .env.production.local\n\u251c\u2500 package.json\n\u2514\u2500 ...\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Filename"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),".env.development"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Environment variables specific to the development environment. The development environment is the one started with ",Object(o.b)("strong",{parentName:"td"},"yarn dev")," or ",Object(o.b)("strong",{parentName:"td"},"next"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),".env.development.local"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"same as ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("em",{parentName:"strong"},".env.development"))," but this file ",Object(o.b)("strong",{parentName:"td"},"should not")," be committed on GIT.",Object(o.b)("br",null),"Therefore this file can contain more sensitive data",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Note"),": This file is generally not used with ",Object(o.b)("strong",{parentName:"td"},"create react app")," as it should only contain data that will not be bundled in a file loaded by the browser")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),".env.production"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Environment variables specific to a production environment. A production environment is any environment built with ",Object(o.b)("strong",{parentName:"td"}," yarn build"),". This file is generally not committed on GIT but created by a CI when building the app (so the file is different between staging and production)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),".env.production.local"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"same as ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("em",{parentName:"strong"},".env.production"))," but this file ",Object(o.b)("strong",{parentName:"td"},"should not")," be committed on GIT.",Object(o.b)("br",null),"Therefore this file can contain more sensitive data",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Note"),": This file is generally not used with ",Object(o.b)("strong",{parentName:"td"},"create react app")," as it should only contain data that will not be bundled in a file loaded by the browser")))),Object(o.b)("p",null,"These files should only contain environment variables. ",Object(o.b)("br",null),"The whole configuration should be stored in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js"))," and environment variables ",Object(o.b)("strong",{parentName:"p"},"must")," be referenced using ",Object(o.b)("strong",{parentName:"p"},"process.env."),"<env_variable>"),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Create react app",value:"cra"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"next",mdxType:"TabItem"},Object(o.b)("p",null,"Content of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},".env.development"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"NEXT_API_URL=https://dev.oneki.net/api\n")),Object(o.b)("p",null,"Content of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  baseUrl: process.env.NEXT_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n"))),Object(o.b)(c.a,{value:"cra",mdxType:"TabItem"},Object(o.b)("p",null,"Content of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},".env.development"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"REACT_APP_API_URL=https://dev.oneki.net/api\n")),Object(o.b)("p",null,"Content of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  baseUrl: process.env.REACT_APP_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n")))))}p.isMDXComponent=!0}}]);