/*! For license information please see e960dcf0.585d85f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),r=t(9),o=(t(0),t(204)),i=(t(210),t(208),t(207),{id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"}),s={id:"i18n/useTranslation",title:"useTranslation",description:"To make a component available in multiple languages, you can use the hook useTranslation which has the following signature",source:"@site/docs/i18n/020_useTranslation.md",permalink:"/docs/i18n/useTranslation",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/i18n/020_useTranslation.md",sidebar_label:"useTranslation",sidebar:"someSidebar",previous:{title:"Translation files",permalink:"/docs/i18n/translations"},next:{title:"useI18nService",permalink:"/docs/i18n/i18nService"}},c=[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To make a component available in multiple languages, you can use the hook ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useTranslation"))," which has the following signature"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const [T, t, locale, loading] = useTranslation([namespaces]);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"useTranslation"))," loads the translations from the server if there are not yet available locally"),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"inputs"},"Inputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// The translations can be split in multiple files to only load what is needed\n// By convention, the namespace "common" contains translations common to any pages\n// and you don\'t need to specify it\nnamespace: [string]\n')),Object(o.b)("h3",{id:"outputs"},"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// A component to translate JSX content\nT: Component,\n\n// A helper function to translate a string\nt: func(text: string),\n\n// the current selected language\nlocale: string\n\n// a flag to indicate that the retrieval of translation files is in progress\nloading: boolean\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\'\nimport { useTranslation } from \'onekijs\';\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation([\'users\', \'common\']);\n  const lastname = "Franki";\n  const firstname = "Bruno";\n  return (\n    <div>\n      {/*Basic example*/}\n      <div title={t("Welcome")}><T>Welcome</T></div>\n\n      {/*Example with variable*/}\n      <div><T>Welcome {{lastname}} on Oneki.js</T></div>\n\n      {/*Plural example*/}\n      <div><T count={2}>user</T></div>\n\n      {/*Force translation from a specific namespace*/}\n      <div><T alias="common:user">user</T></div>\n\n      {/*Complex example*/}\n      <div><T alias="complex">Hello <b><i>mister</i> {{firstname}} {{lastname}} <i>male</i></b> <u>address</u> <span title={t("Welcome")}>Welcome</span></T></div>\n    </div>\n  );\n}\n\nexport default IndexPage;\n\n')),Object(o.b)("p",null,"The content of public/locales/fr/common.json looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// content of public/locales/fr/users.json\n{\n  "user": "utilisateur",\n  "plural::user": "utilisateurs"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue",\n  "Welcome {{lastname}} on Oneki.js": "Bievenue {{lastname}} sur Oneki.js",\n  "Welcome <1>{{lastname}}</1> {{firstname}": "Bienvenue {{firstname}} <1>{{lastname}}</1>",\n  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4> <5>Bienvenue</5>",\n  "user": "utilisateur commun"\n}\n')))}u.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,b=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},205:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},206:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=r},207:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},208:function(e,n,t){"use strict";t(23),t(17),t(18);var a=t(0),r=t.n(a),o=t(206);var i=function(){return Object(a.useContext)(o.a)},s=t(205),c=t.n(s),l=t(127),u=t.n(l),p=37,m=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,s=e.values,l=e.groupId,f=i(),b=f.tabGroupChoices,d=f.setTabGroupChoices,v=Object(a.useState)(o),h=v[0],g=v[1];if(null!=l){var O=b[l];null!=O&&O!==h&&g(O)}var j=function(e){g(e),null!=l&&d(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":n})},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===n,className:c()("tabs__item",u.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case m:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return j(n)},onClick:function(){return j(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},209:function(e,n,t){"use strict";var a=t(0),r=t(50);n.a=function(){return Object(a.useContext)(r.a)}},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));t(211);var a=t(209);function r(e){var n=(Object(a.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},211:function(e,n,t){"use strict";var a=t(19),r=t(35),o=t(212),i="".startsWith;a(a.P+a.F*t(213)("startsWith"),"String",{startsWith:function(e){var n=o(this,e,"startsWith"),t=r(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),a=String(e);return i?i.call(n,a,t):n.slice(t,t+a.length)===a}})},212:function(e,n,t){var a=t(71),r=t(24);e.exports=function(e,n,t){if(a(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},213:function(e,n,t){var a=t(2)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[a]=!1,!"/./"[e](n)}catch(r){}}return!0}}}]);