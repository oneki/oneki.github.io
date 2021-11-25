"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[34975],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a().createContext({}),c=function(e){var n=a().useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a().createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a().createElement(a().Fragment,{},n)}},m=a().forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a().createElement(f,l(l({ref:n},u),{},{components:t})):a().createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,t)}m.displayName="MDXCreateElement"},13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},44996:function(e,n,t){t.d(n,{C:function(){return o},Z:function(){return i}});var r=t(52263),a=t(13919);function o(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},58215:function(e,n,t){var r=t(67294),a=t.n(r);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(83117),a=t(67294),o=t.n(a),i=t(72389),l=t(79443);var s=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(89521),c=t(86010),p="tabItem_1uMI";function d(e){var n,t,r,i=e.lazy,l=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),w=y.tabGroupChoices,x=y.setTabGroupChoices,T=(0,a.useState)(b),N=T[0],j=T[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=w[f];null!=C&&C!==N&&k.some((function(e){return e.value===C}))&&j(C)}var I=function(e){var n=e.currentTarget,t=O.indexOf(n),r=k[t].value;r!==N&&(E(n),j(r),null!=f&&x(f,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},k.map((function(e){var n=e.value,t=e.label;return o().createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":N===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:I,onClick:I},null!=t?t:n)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function m(e){var n=(0,i.Z)();return o().createElement(d,(0,r.Z)({key:String(n)},e))}},79443:function(e,n,t){var r=t(67294),a=(0,r.createContext)(void 0);n.Z=a},64094:function(e,n,t){var r=t(67294),a=t.n(r),o=t(26396);t(58215);n.Z=function(e){var n=e.children;return console.log("children",n),a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},n)}},32779:function(e,n,t){var r=t(67294),a=t.n(r);n.Z=function(e){var n=e.name,t=e.height,r=void 0===t?500:t,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,c=e.view,p="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+u+"/"+n+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);o&&(p+="&module=",o.forEach((function(e,n){n>0&&(p+=","),p+=e})));var d="onekijs-"+n.split("/").join("-");return a().createElement("iframe",{src:p,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},47729:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(44996),t(64094)),l=t(58215),s=(t(32779),["components"]),u={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"framework/i18n/introduction",id:"framework/i18n/introduction",isDocsHomePage:!1,title:"Introduction",description:"Oneki.js provides an Internationalization library (i18n) to make an application available in multiple languages. This library works with Create React app and Next.js",source:"@site/docs/framework/i18n/001_introduction.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/introduction",permalink:"/docs/framework/i18n/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"OIDC (client side)",permalink:"/docs/framework/auth/authn/oidc-client"},next:{title:"Translation files",permalink:"/docs/framework/i18n/translations"}},d=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Translations",id:"translations",children:[{value:"Example",id:"example",children:[],level:4}],level:2},{value:"Hooks",id:"hooks",children:[{value:"useTranslation",id:"usetranslation",children:[],level:3},{value:"useLocale",id:"uselocale",children:[],level:3}],level:2},{value:"Example",id:"example-1",children:[{value:"Client side only",id:"client-side-only",children:[],level:4},{value:"Static HTML export (hosted on a CDN)",id:"static-html-export-hosted-on-a-cdn",children:[],level:4},{value:"Server side rendering",id:"server-side-rendering",children:[],level:4}],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Oneki.js"))," provides an Internationalization library (i18n) to make an application available in multiple languages. This library works with ",(0,o.kt)("strong",{parentName:"p"},"Create React app")," and ",(0,o.kt)("strong",{parentName:"p"},"Next.js"))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"As usual, the configuration is done via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  i18n: {\n    locales: ["en", "fr"], // supported locales\n    defaultLocale: "en",\n    url: "/locales" // the base URL to retrieve the JSON files with the translations\n  }\n}\n')),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("p",null,"The translations are stored in JSON files in the folders ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"public/locales/{locale}/{namespace}.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"My-App\n\u251c\u2500 public\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in french \n\u2502  \u2514\u2500 ... // You are free to create your own structure \n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is a very simple example of a translation file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// content of public/locales/en/common.json\n{\n  "Welcome": "Welcome"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./translations"},"Translation files"))," for more info"),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"usetranslation"},"useTranslation"),(0,o.kt)("p",null,"To make a component available in multiple languages, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslation")," hook",(0,o.kt)("br",{parentName:"p"}),"\n","This is the main hook that returns a component and a function that are used to translate a content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example: FC = () => {\n  const [T, t, locale, loading] = useTranslation([namespaces]);\n\n  //output <div>Welcome</div> or <div>Bienvenue</div>\n  return <div><T>Welcome</T></div> \n}\n\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./useTranslation"},"useTranslation"))," for more info"),(0,o.kt)("h3",{id:"uselocale"},"useLocale"),(0,o.kt)("p",null,"This hook returns the current selected language"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const locale = useLocale() // -> locale = fr\n")),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)("p",null,"Here is a very basic example of a component available in multiple languages"),(0,o.kt)(i.Z,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("h4",{id:"client-side-only"},"Client side only"),(0,o.kt)("p",null,"This example shows how to use the i18n feature where everything is handled only on the client side."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div><T>Welcome</T> {firstname} !</div>\n  );\n}\nexport default withLayout(IndexPage, SiteLayout);\n\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"static-html-export-hosted-on-a-cdn"},"Static HTML export (hosted on a CDN)"),(0,o.kt)("p",null,"This example shows how to use the i18n feature with static HTML export (hosted on a CDN)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation,  getI18nStaticProps, withI18nPaths, withLayout } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\nimport fs from 'fs';\nimport path from 'path';\n\nexport async function getStaticProps(context) {\n  // read the content of common.json and add it to static props\n  const result = getI18nStaticProps(fs, path, context.params.lang)\n  return result;\n}\n\nexport async function getStaticPaths() {\n  // add the locales to the static paths\n  const result = withI18nPaths(fs, path);\n  return {\n    paths: withI18nPaths(fs, path),\n    fallback: false\n  }\n}\n\nconst IndexPage = (props) => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <>\n      <div><T>Welcome</T> {firstname} !</div>\n      <img src=\"avatar.jpg\" title={t(\"avatar\")} width=\"100\" height=\"50\">\n    <>\n    \n  );\n}\n\nexport default withLayout(IndexPage, SiteLayout);\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"server-side-rendering"},"Server side rendering"),(0,o.kt)("p",null,"Example not yet available")),(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation } from 'onekijs';\n\nconst I18Component = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div>><T>Welcome</T> {firstname} !</div>\n  );\n}\n")))))}f.isMDXComponent=!0}}]);