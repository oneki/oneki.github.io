/*! For license information please see 111c0c94.a6ece351.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(175)),l=a(178),i=a(179),c={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},b={id:"overview/getting-started",title:"Getting started",description:"import Tabs from '@theme/Tabs';\r",source:"@site/docs/overview/020_getting-started.md",permalink:"/docs/overview/getting-started",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/020_getting-started.md",sidebar_label:"Getting started",sidebar:"someSidebar",next:{title:"Application",permalink:"/docs/overview/app"}},p=[{value:"First app",id:"first-app",children:[]},{value:"Build",id:"build",children:[]}],s={rightToc:p},u="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," is a React framework based of the following components: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reacttraining.com/react-router/"}),"Next.js")," or ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://create-react-app.dev/"}),"Create React App")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux.js.org/"}),"Redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://redux-saga.js.org/"}),"Redux Saga")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://immerjs.github.io/immer/docs/introduction"}),"Immer")," ")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," is to propose a framework on top of these librairies that hides most of the complexity.\nTherefore, the developer can build more quickly powerful webapps respecting the best practices."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note")),": the documentation often contains two tabs: "),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"one for apps built on top of Next.js"),Object(o.b)("li",{parentName:"ul"},"one for apps built on top of create react app"))),Object(o.b)("h3",{id:"first-app"},"First app"),Object(o.b)("p",null,"To get started, we are going to build a minimal application consisting of a simple website with two pages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A homepage displaying the message "This is the main page".'),Object(o.b)("li",{parentName:"ul"},'A users page displaying the message "This is the users page".'),Object(o.b)("li",{parentName:"ul"},"A menu to navigate between these two pages.")),Object(o.b)(l.a,{defaultValue:"next",values:[{label:"Nextjs App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"next",mdxType:"TabItem"},Object(o.b)("p",null,"Create a new React application with ",Object(o.b)("b",null,"Create Next App")," and add ",Object(o.b)("b",null,"onekijs")," as a dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// npm install -g yarn\nyarn create next-app my-app\ncd my-app\nyarn add onekijs\nyarn install\n")),Object(o.b)("p",null,"and then create the following files:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src/pages/index.js"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("strong",{parentName:"td"},"/")," page")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src/pages/users.js"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("strong",{parentName:"td"},"/users")," page")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src/pages/_app.js"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A ",Object(o.b)("strong",{parentName:"td"},"common wrapper")," for all pages. This wrapper creates the Oneki.js Application")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src/layout/SiteLayout"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A Layout common to several pages. This layout is applied thanks to the HOC ",Object(o.b)("strong",{parentName:"td"},'"withLayout"'))))),Object(o.b)(l.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/hello-world?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/hello-world?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("p",null,"Via a command line enter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn dev\n")),Object(o.b)("p",null,"to start a livereload webserver. ",Object(o.b)("br",null),"\nThe website is available on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),Object(o.b)("br",null),"\nAny modification done on the source code will refresh the page to take into account the change."),Object(o.b)("p",null,"Please note that the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NextApp"))," component configures automatically a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Redux store")),Object(o.b)("br",null),"\nif you want to provide your own redux store, you can pass it as a prop to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"App"))),Object(o.b)("h3",{id:"build"},"Build"),Object(o.b)("p",null,"To build the application, enter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn build\n")),Object(o.b)("p",null,"The result of the build is available in the folder ",Object(o.b)("strong",{parentName:"p"},".next"),". Check the documentation of Next.js for more information concerning the build / deploy possiblities")),Object(o.b)(i.a,{value:"cra",mdxType:"TabItem"},"Create a new React application with ",Object(o.b)("b",null,Object(o.b)("a",{href:"https://create-react-app.dev/"},"Create React App"))," and add ",Object(o.b)("b",null,"onekijs")," as a dependency:",Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// npm install -g yarn\nyarn create react-app my-app\ncd my-app\nyarn add onekijs\nyarn install\n")),Object(o.b)("p",null,"and then replace the content of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"index.js"))," with the following code:"),Object(o.b)(l.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-basic-app-pqyr9?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(i.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-basic-app-pqyr9?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"600px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("p",null,"Via a command line enter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn start\n")),Object(o.b)("p",null,"to start a livereload webserver. The website is available on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),Object(o.b)("br",null),"\nAny modification done on the source code will refresh the page to take into account the change."),Object(o.b)("p",null,"Please note that the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"App"))," component automatically configures:"),Object(o.b)("ul",null,Object(o.b)("li",null,"a ",Object(o.b)("b",null,"BrowserRouter"),": if a BrowserRouter is not what you expect, you can configure it via props passed to ",Object(o.b)("b",null,"App")),Object(o.b)("li",null,"a ",Object(o.b)("b",null,"Redux store"),": if you want to provide your own redux store, you can pass it as a prop to ",Object(o.b)("b",null,"App"))))))}d.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return a?r.a.createElement(m,i({ref:t},b,{components:a})):r.a.createElement(m,i({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},176:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},178:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),r=a.n(n),o=a(176),l=a.n(o),i=a(118),c=a.n(i),b={left:37,right:39};t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,i=e.values,p=Object(n.useState)(o),s=p[0],u=p[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===t,className:l()("tab-item",c.a.tabItem,{"tab-item--active":s===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case b.right:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b.left:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return u(t)},onClick:function(){return u(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===s}))[0]))}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);