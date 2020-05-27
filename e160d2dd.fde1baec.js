/*! For license information please see e160d2dd.fde1baec.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return f}));var o=t(1),r=t(9),a=(t(0),t(188)),s=t(191),c=t(190),i={id:"file-structure",title:"File structure",sidebar_label:"File structure"},l={id:"advanced/file-structure",title:"File structure",description:"We recommend the following file structure:",source:"@site/docs/advanced/100_file-structure.md",permalink:"/docs/advanced/file-structure",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/advanced/100_file-structure.md",sidebar_label:"File structure",sidebar:"someSidebar",previous:{title:"Local service",permalink:"/docs/framework/service/local-service"},next:{title:"CRUD application",permalink:"/docs/examples/crud-app"}},u=[],p={rightToc:u};function f(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend the following file structure:"),Object(a.b)(s.a,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"next",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"My-App\n\u251c\u2500 public // see nextjs documentation\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in french\n\u2502  \u251c\u2500 logo.svg \n\u2502  \u251c\u2500 robots.txt \n\u2502  \u2514\u2500 ... // You are free to create your own structure \n\u2502\n\u251c\u2500 src\n\u2502  \u251c\u2500 components // folder containing all components but routes\n\u2502  \u2502  \u251c\u2500 myComponent // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 myComponentHeader // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export MyComponent\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.module.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 MyComponent.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 css\n\u2502  \u2502  \u2514\u2500 app.css // see nextjs documentation\n\u2502  \u2502\n\u2502  \u251c\u2500 layout // folder containing all layouts\n\u2502  \u2502  \u251c\u2500 siteLayout // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 Header // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as SiteLayout folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export SiteLayout\n\u2502  \u2502  \u2502  \u251c\u2500 SiteLayout.module.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 SiteLayout.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 SiteLayout.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 pages // folder containing all pages. Pages are the entry points (see nextjs doc)\n\u2502  \u2502  \u251c\u2500 [lang]] // a folder is created for each top route\n\u2502  \u2502  \u2502  \u251c\u2500 users // a folder is created for each top route\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 [id] // Dynamic route, see nextjs documentation\n\u2502  \u2502  \u2502  \u2502  \u2502  \u251c\u2500 edit.js //edit user page /users/:id/edit\n\u2502  \u2502  \u2502  \u2502  \u2502  \u2514\u2500 index.js //view user page /users/:id\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 index.js // list all users page /users\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 new.js // new user page /users/new\n\u2502  \u2502  \u251c\u2500 _app.js // the wrapper component common to all pages that bootstraps the App (<NextApp />)\n\u2502  \u2502  \u2514\u2500 index.js // the index page /. Redirect to the correct locale\n\u2502  \u2502\n\u2502  \u251c\u2500 utils // a folder to contain any utility code. You are free to create your own structure\n\u2502  \u2502  \u251c\u2500 string.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502\n\u2502  \u2514\u2500 settings.js // a central file to configure your app\n\u2502\n\u251c\u2500 .env.development // contain variables specific to the DEV environement\n\u251c\u2500 .env.development.local // contains sensitive data (not commited on GIT)\n\u251c\u2500 .gitignore\n\u251c\u2500 next.config.js // not mandatory. Specific configuration for nextjs\n\u251c\u2500 package.json\n\u251c\u2500 postcss.config.js // not mandatory. Only present if postcss is used\n\u251c\u2500 README.md\n\u251c\u2500 yarn.lock\n"))),Object(a.b)(c.a,{value:"cra",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"My-App\n\u251c\u2500 public // see create react app documentation\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in french\n\u2502  \u251c\u2500 index.html // index.html generated by create-react-app\n\u2502  \u2514\u2500 ... // You are free to create your own structure \n\u2502\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u2502  \u251c\u2500 img // folder containing common images included in the bundle\n\u2502  \u2502  \u251c\u2500 fonts // folder containing common fonts included in the bundle\n\u2502  \u2502  \u2514\u2500 files // folder containing common files included in the bundle\n\u2502  \u2502\n\u2502  \u251c\u2500 components // folder containing all components but routes\n\u2502  \u2502  \u251c\u2500 myComponent // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 myComponentHeader // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export MyComponent\n\u2502  \u2502  \u2502  \u251c\u2500 image1.png // a file needed only by MyComponent (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 MyComponent.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 routes // folder containing all routes\n\u2502  \u2502  \u251c\u2500 users // a folder is created for each top route\n\u2502  \u2502  \u2502  \u251c\u2500 create // Each sub route has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 display\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502  \u2502  \u251c\u2500 edit\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 list\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export Users\n\u2502  \u2502  \u2502  \u251c\u2500 Users.js // The component itself\n\u2502  \u2502  \u2502  \u2514\u2500 Users.test.js  // Unit tests of the component\n\u2502  \u2502\n\u2502  \u251c\u2500 utils // a folder to contain any code. You are free to create your own structure\n\u2502  \u2502  \u251c\u2500 string.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502\n\u2502  \u251c\u2500 i18n.js // Bootstrap of the i18n library\n\u2502  \u251c\u2500 index.js // The bootstrap of the app (entry point)\n\u2502  \u251c\u2500 serviceWorker.js // generated by create react app\n\u2502  \u251c\u2500 settings.js // a central file to configure your app\n\u2502  \u2514\u2500 setupTests.js  // generated by create react app\n\u2502\n\u251c\u2500 .gitignore\n\u251c\u2500 package.json\n\u251c\u2500 README.md\n\u251c\u2500 yarn.lock\n")))))}f.isMDXComponent=!0},187:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var s=r.apply(null,o);s&&e.push(s)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(e.exports=o)}()},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},189:function(e,n,t){"use strict";var o=t(0),r=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=r},190:function(e,n,t){"use strict";var o=t(0),r=t.n(o);n.a=function(e){return r.a.createElement("div",null,e.children)}},191:function(e,n,t){"use strict";t(23),t(17),t(18);var o=t(0),r=t.n(o),a=t(189);var s=function(){return Object(o.useContext)(a.a)},c=t(187),i=t.n(c),l=t(127),u=t.n(l),p=37,f=39;n.a=function(e){var n=e.block,t=e.children,a=e.defaultValue,c=e.values,l=e.groupId,d=s(),m=d.tabGroupChoices,b=d.setTabGroupChoices,y=Object(o.useState)(a),h=y[0],g=y[1];if(null!=l){var v=m[l];null!=v&&v!==h&&g(v)}var j=function(e){g(e),null!=l&&b(l,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===n,className:i()("tabs__item",u.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case f:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(O,e.target,e)},onFocus:function(){return j(n)},onClick:function(){return j(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}}}]);