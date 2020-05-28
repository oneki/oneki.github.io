/*! For license information please see 5b36d7bc.b283ef51.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(189)),i=(n(194),n(192)),c=n(191),l={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},s={id:"framework/i18n/introduction",title:"Introduction",description:"Oneki.js provides an Internationalization (i18n) library to make an app available in multiple languages. This library works with Create React app and Next.js",source:"@site/docs/framework/i18n/001_introduction.md",permalink:"/docs/framework/i18n/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/001_introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"OpenID Connect (server side)",permalink:"/docs/framework/auth/oidc-server"},next:{title:"Translation files",permalink:"/docs/framework/i18n/translations"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Hook",id:"hook",children:[{value:"useTranslation",id:"usetranslation",children:[]},{value:"useLocale",id:"uselocale",children:[]}]},{value:"Example",id:"example-1",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Oneki.js"))," provides an Internationalization (i18n) library to make an app available in multiple languages. This library works with ",Object(o.b)("strong",{parentName:"p"},"Create React app")," and ",Object(o.b)("strong",{parentName:"p"},"Next.js"))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"As usual, the configuration is done via ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"settings.js"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'export default {\n  i18n: {\n    locales: ["en", "fr"], // supported locales\n    defaultLocale: "en",\n    url: "/locales" // the URL to retrieves the JSON files with the translations\n  }\n}\n')),Object(o.b)("h2",{id:"translations"},"Translations"),Object(o.b)("p",null,"The translations are stored in JSON files in the folders ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"public/locales/{locale}/{namespace}.json"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"My-App\n\u251c\u2500 public\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in french \n\u2502  \u2514\u2500 ... // You are free to create your own structure \n")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"Here is a very simple example of a translation file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// content of public/locales/en/common.json\n{\n  "Welcome": "Welcome"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue"\n}\n')),Object(o.b)("h2",{id:"hook"},"Hook"),Object(o.b)("p",null,"To make a component available in multiple languages, you can use the hook ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useTranslation"))," which has the following signature"),Object(o.b)("h3",{id:"usetranslation"},"useTranslation"),Object(o.b)("p",null,"This is the main hook that returns a component and a function that are used to translate a content."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const [T, t, locale, loading] = useTranslation([namespaces]);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<div><T>Welcome</T></div> //output <div>Welcome</div> or <div>Bienvenue</div>\n")),Object(o.b)("p",null,"Check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"useTranslation"}),"useTranslation documentation page")," for more info"),Object(o.b)("h3",{id:"uselocale"},"useLocale"),Object(o.b)("p",null,"This hook returns the current selected language"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const locale = useLocale() // -> locale = fr\n")),Object(o.b)("h2",{id:"example-1"},"Example"),Object(o.b)("p",null,"Here is a very basic example of a component available in multiple languages"),Object(o.b)(i.a,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"next",mdxType:"TabItem"},Object(o.b)("h4",{id:"client-side-only"},"Client side only"),Object(o.b)("p",null,"This example shows how to use the i18n feature where everything is handled only on the client side."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react'\nimport { useTranslation } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div><T>Welcome</T> {firstname} !</div>\n  );\n}\nexport default withLayout(IndexPage, SiteLayout);\n\n")),Object(o.b)("br",null),Object(o.b)("h4",{id:"static-html-export-hosted-on-a-cdn"},"Static HTML export (hosted on a CDN)"),Object(o.b)("p",null,"This example shows how to use the i18n feature with static HTML export (hosted on a CDN)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react'\nimport { useTranslation,  getI18nStaticProps, withI18nPaths, withLayout } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\nimport fs from 'fs';\nimport path from 'path';\n\nexport async function getStaticProps(context) {\n  // read the content of common.json and add it to static props\n  const result = getI18nStaticProps(fs, path, context.params.lang)\n  return result;\n}\n\nexport async function getStaticPaths() {\n  // add the locales to the static paths\n  const result = withI18nPaths(fs, path);\n  return {\n    paths: withI18nPaths(fs, path),\n    fallback: false\n  }\n}\n\nconst IndexPage = (props) => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <>\n      <div><T>Welcome</T> {firstname} !</div>\n      <img src=\"avatar.jpg\" title={t(\"avatar\")} width=\"100\" height=\"50\">\n    <>\n    \n  );\n}\n\nexport default withLayout(IndexPage, SiteLayout);\n")),Object(o.b)("br",null),Object(o.b)("h4",{id:"server-side-rendering"},"Server side rendering"),Object(o.b)("p",null,"Example not yet available")),Object(o.b)(c.a,{value:"cra",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react'\nimport { useTranslation } from 'onekijs';\n\nconst I18Component = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div>><T>Welcome</T> {firstname} !</div>\n  );\n}\n")))))}b.isMDXComponent=!0},188:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},192:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),r=n.n(a),o=n(190);var i=function(){return Object(a.useContext)(o.a)},c=n(188),l=n.n(c),s=n(127),u=n.n(s),p=37,b=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,s=e.groupId,m=i(),f=m.tabGroupChoices,d=m.setTabGroupChoices,h=Object(a.useState)(o),j=h[0],v=h[1];if(null!=s){var O=f[s];null!=O&&O!==j&&v(O)}var g=function(e){v(e),null!=s&&d(s,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:l()("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},193:function(e,t,n){"use strict";var a=n(0),r=n(50);t.a=function(){return Object(a.useContext)(r.a)}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(195);var a=n(193);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},195:function(e,t,n){"use strict";var a=n(19),r=n(35),o=n(196),i="".startsWith;a(a.P+a.F*n(197)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},196:function(e,t,n){var a=n(71),r=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},197:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);