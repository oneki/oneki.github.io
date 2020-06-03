/*! For license information please see c5b8260a.f5b93fcd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(199)),i=(n(204),n(202),n(201),{id:"serverSideRendering",title:"Server side rendering",sidebar_label:"Server side rendering"}),c={id:"framework/i18n/serverSideRendering",title:"Server side rendering",description:"Note: This page is specific to application built on top of Next.js",source:"@site/docs/framework/i18n/040_serviceSideRendering.md",permalink:"/docs/framework/i18n/serverSideRendering",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/040_serviceSideRendering.md",sidebar_label:"Server side rendering",sidebar:"someSidebar",previous:{title:"useI18nService",permalink:"/docs/framework/i18n/i18nService"},next:{title:"Introduction",permalink:"/docs/framework/data/introduction"}},s=[{value:"Static pages",id:"static-pages",children:[{value:"getI18nStaticProps",id:"geti18nstaticprops",children:[]},{value:"withI18nPaths",id:"withi18npaths",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": This page is specific to application built on top of ",Object(o.b)("strong",{parentName:"p"},"Next.js"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," proposes several helpers to generate pages in different languages on server side. These helpers assume that the path starts with the local and the dynamic attribute is named ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"[lang]")),Object(o.b)("br",null)),Object(o.b)("p",null,"The following structure is expected:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"My-App\n\u251c\u2500 src\n\u2502  \u251c\u2500 pages // folder containing all pages. Pages are the entry points (see nextjs doc)\n\u2502  \u2502  \u251c\u2500 [lang] // a folder is created for each top route\n\u2502  \u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502  \u251c\u2500 _app.js // the wrapper component common to all pages that bootstraps the App (<NextApp />)\n\u2502  \u2502  \u2514\u2500 index.js // redirect the user to the correct locale\n")),Object(o.b)("p",null,"Therefore if the application is available in english and french, the URLs look like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://example.com/en/"}),"https://example.com/en/"),"..."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://example.com/fr/"}),"https://example.com/fr/"),"...")),Object(o.b)("p",null,"and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://example.com"}),"https://example.com")," redirects the user to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://example.com/en"}),"https://example.com/en")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://example.com/fr"}),"https://example.com/fr")," (based on the locale auto detected)"),Object(o.b)("h2",{id:"static-pages"},"Static pages"),Object(o.b)("h3",{id:"geti18nstaticprops"},"getI18nStaticProps"),Object(o.b)("p",null,"For pages that can be generated at build time, ",Object(o.b)("strong",{parentName:"p"},"Next.js")," retrieves the data by calling the method ",Object(o.b)("strong",{parentName:"p"},"getStaticProps")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," proposes the helper ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"getI18nStaticProps"))," to retrieve the translations needed by the page, so they can be added in the output of ",Object(o.b)("strong",{parentName:"p"},"getStaticProps")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { getI18nStaticProps } from 'onekijs';\nimport fs from 'fs';\nimport path from 'path';\n\nconst i18nNamespaces = ['users', 'common'];\n\nexport async function getStaticProps(context) {\n  // retrieve the translatons associated to namespaces users and common\n  // the output has the following format:\n  // {\n  //   props: {\n  //    \"translations\": {\n  //       \"users\": {translations...}\n  //       \"common\": {translations...} \n  //     },\n  //     \"locale\": \"en\"\n  //   }\n  //   \n  // }\n  const result = getI18nStaticProps(fs, path, context.params.lang, i18nNamespaces);\n  return result;\n}\n")),Object(o.b)("h3",{id:"withi18npaths"},"withI18nPaths"),Object(o.b)("p",null,"As all routes starts with ","[lang]",", ",Object(o.b)("strong",{parentName:"p"},"Next.js")," expects that a method ",Object(o.b)("strong",{parentName:"p"},"getStaticPaths")," to define a list of paths that have to be rendered to HTML at build time"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," proposes the helper ",Object(o.b)("strong",{parentName:"p"},"withI18nPaths")," to handle the ","[lang]"," attribute"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { withI18nPaths } from 'onekijs';\nimport fs from 'fs';\nimport path from 'path';\n\n// Simple example where [lang] is the only dynamic attribute\nexport async function getStaticPaths() {\n  return {\n    paths: withI18nPaths(fs, path),\n    fallback: false\n  }\n}\n")))}l.isMDXComponent=!0},198:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},201:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},202:function(e,t,n){"use strict";n(23),n(17),n(18);var r=n(0),a=n.n(r),o=n(200);var i=function(){return Object(r.useContext)(o.a)},c=n(198),s=n.n(c),p=n(127),l=n.n(p),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,p=e.groupId,f=i(),m=f.tabGroupChoices,h=f.setTabGroupChoices,d=Object(r.useState)(o),g=d[0],j=d[1];if(null!=p){var O=m[p];null!=O&&O!==g&&j(O)}var v=function(e){j(e),null!=p&&h(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:s()("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},203:function(e,t,n){"use strict";var r=n(0),a=n(50);t.a=function(){return Object(r.useContext)(a.a)}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(205);var r=n(203);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},205:function(e,t,n){"use strict";var r=n(19),a=n(35),o=n(206),i="".startsWith;r(r.P+r.F*n(207)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},206:function(e,t,n){var r=n(71),a=n(24);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},207:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);