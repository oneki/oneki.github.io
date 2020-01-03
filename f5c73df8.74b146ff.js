(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),a=(t(0),t(167)),c={id:"file-structure",title:"File structure",sidebar_label:"File structure"},i={id:"advanced/file-structure",title:"File structure",description:"We recommend the following file structure:\r",source:"@site/docs/advanced/010_file-structure.md",permalink:"/docs/advanced/file-structure",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/advanced/010_file-structure.md",sidebar_label:"File structure",sidebar:"someSidebar",previous:{title:"useReduxService",permalink:"/docs/hooks/use-redux-service"}},s=[],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend the following file structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"My-App\n\u251c\u2500 public // see create react app documentation\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in french\n\u2502  \u251c\u2500 index.html // index.html generated by create-react-app\n\u2502  \u2514\u2500 ... // You are free to create your own structure \n\u2502\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u2502  \u251c\u2500 img // folder containing common images included in the bundle\n\u2502  \u2502  \u251c\u2500 fonts // folder containing common fonts included in the bundle\n\u2502  \u2502  \u2514\u2500 files // folder containing common files included in the bundle\n\u2502  \u2502\n\u2502  \u251c\u2500 components // folder containing all components but routes\n\u2502  \u2502  \u251c\u2500 myComponent // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 myComponentHeader // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file containing only: export { default } from './MyComponent'\n\u2502  \u2502  \u2502  \u251c\u2500 image1.png // a file needed only by MyComponent (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 MyComponent.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 routes // folder containing all routes\n\u2502  \u2502  \u251c\u2500 users // a folder is created for each top route\n\u2502  \u2502  \u2502  \u251c\u2500 create // Each sub route has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 display\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502  \u2502  \u251c\u2500 edit\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 list\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file containing only: export { default } from './User.js'\n\u2502  \u2502  \u2502  \u251c\u2500 Users.js // The component itself\n\u2502  \u2502  \u2502  \u2514\u2500 Users.test.js  // Unit tests of the component\n\u2502  \u2502\n\u2502  \u251c\u2500 utils // a folder to contain any code. You are free to create your own structure\n\u2502  \u2502  \u251c\u2500 string.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502\n\u2502  \u251c\u2500 i18n.js // Bootstrap of the i18n library\n\u2502  \u251c\u2500 index.js // The bootstrap of the app (entry point)\n\u2502  \u251c\u2500 serviceWorker.js // generated by create react app\n\u2502  \u251c\u2500 settings.js // a central file to configure your app\n\u2502  \u2514\u2500 setupTests.js  // generated by create react app\n\u2502\n\u251c\u2500 .gitignore\n\u251c\u2500 package.json\n\u251c\u2500 README.md\n\u251c\u2500 yarn.lock\n")))}u.isMDXComponent=!0},167:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(m,i({ref:n},l,{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);