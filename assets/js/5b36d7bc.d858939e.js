"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[34975],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),c=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r().createElement(f,i(i({ref:t},s),{},{components:n})):r().createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r().createElement.apply(null,l)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(87462),r=n(67294),o=n.n(r),l=n(86010),i=n(12466),u=n(45315),s=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=m(e),d=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),h=d[0],g=d[1],b=v({queryString:u,groupId:s}),k=b[0],y=b[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=x[0],T=x[1],N=function(){var e=null!=k?k:w;return f({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),T(e)}),[y,T,c]),tabValues:c}}var g=n(72389),b="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(p(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=h(e);return o().createElement("div",{className:(0,l.Z)("tabs-container",b)},o().createElement(y,(0,a.Z)({},e,t)),o().createElement(x,(0,a.Z)({},e,t)))}function T(e){var t=(0,g.Z)();return o().createElement(w,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var a=n(67294),r=n.n(a),o=n(64094),l=n(85162),i=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,l=e.branch,i=void 0===l?"master":l,u=e.type,s=void 0===u?"examples":u,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var f="onekijs-"+t.split("/").join("-"),v="https://github.com/oneki/onekijs/tree/"+i+"/"+s+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:v,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,a=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(l.Z,{value:"cra"},r().createElement(i,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:u||n})),r().createElement(l.Z,{value:"next"},r().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:c||n})))};t.ZP=i},47729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(85162),u=(n(32779),["components"]),s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"framework/i18n/introduction",id:"framework/i18n/introduction",title:"Introduction",description:"Oneki.js provides an Internationalization library (i18n) to make an application available in multiple languages. This library works with Create React app and Next.js",source:"@site/docs/framework/i18n/001_introduction.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/introduction",permalink:"/docs/framework/i18n/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"OIDC (client side)",permalink:"/docs/framework/auth/authn/oidc-client"},next:{title:"Translation files",permalink:"/docs/framework/i18n/translations"}},d={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Translations",id:"translations",level:2},{value:"Example",id:"example",level:4},{value:"Hooks",id:"hooks",level:2},{value:"useTranslation",id:"usetranslation",level:3},{value:"useLocale",id:"uselocale",level:3},{value:"Example",id:"example-1",level:2},{value:"Client side only",id:"client-side-only",level:4},{value:"Static HTML export (hosted on a CDN)",id:"static-html-export-hosted-on-a-cdn",level:4},{value:"Server side rendering",id:"server-side-rendering",level:4}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Oneki.js"))," provides an Internationalization library (i18n) to make an application available in multiple languages. This library works with ",(0,o.kt)("strong",{parentName:"p"},"Create React app")," and ",(0,o.kt)("strong",{parentName:"p"},"Next.js"))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"As usual, the configuration is done via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  i18n: {\n    locales: ["en", "fr"], // supported locales\n    defaultLocale: "en",\n    url: "/locales" // the base URL to retrieve the JSON files with the translations\n  }\n}\n')),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("p",null,"The translations are stored in JSON files in the folders ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"public/locales/{locale}/{namespace}.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"My-App\n\u251c\u2500 public\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 common.json // locales in french \n\u2502  \u2514\u2500 ... // You are free to create your own structure \n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is a very simple example of a translation file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// content of public/locales/en/common.json\n{\n  "Welcome": "Welcome"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./translations"},"Translation files"))," for more info"),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"usetranslation"},"useTranslation"),(0,o.kt)("p",null,"To make a component available in multiple languages, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslation")," hook",(0,o.kt)("br",{parentName:"p"}),"\n","This is the main hook that returns a component and a function that are used to translate a content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example: FC = () => {\n  const [T, t, locale, loading] = useTranslation([namespaces]);\n\n  //output <div>Welcome</div> or <div>Bienvenue</div>\n  return <div><T>Welcome</T></div> \n}\n\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./useTranslation"},"useTranslation"))," for more info"),(0,o.kt)("h3",{id:"uselocale"},"useLocale"),(0,o.kt)("p",null,"This hook returns the current selected language"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const locale = useLocale() // -> locale = fr\n")),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)("p",null,"Here is a very basic example of a component available in multiple languages"),(0,o.kt)(l.Z,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("h4",{id:"client-side-only"},"Client side only"),(0,o.kt)("p",null,"This example shows how to use the i18n feature where everything is handled only on the client side."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div><T>Welcome</T> {firstname} !</div>\n  );\n}\nexport default withLayout(IndexPage, SiteLayout);\n\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"static-html-export-hosted-on-a-cdn"},"Static HTML export (hosted on a CDN)"),(0,o.kt)("p",null,"This example shows how to use the i18n feature with static HTML export (hosted on a CDN)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation,  getI18nStaticProps, withI18nPaths, withLayout } from 'onekijs';\nimport SiteLayout from '../../layout/siteLayout';\nimport fs from 'fs';\nimport path from 'path';\n\nexport async function getStaticProps(context) {\n  // read the content of common.json and add it to static props\n  const result = getI18nStaticProps(fs, path, context.params.lang)\n  return result;\n}\n\nexport async function getStaticPaths() {\n  // add the locales to the static paths\n  const result = withI18nPaths(fs, path);\n  return {\n    paths: withI18nPaths(fs, path),\n    fallback: false\n  }\n}\n\nconst IndexPage = (props) => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <>\n      <div><T>Welcome</T> {firstname} !</div>\n      <img src=\"avatar.jpg\" title={t(\"avatar\")} width=\"100\" height=\"50\">\n    <>\n    \n  );\n}\n\nexport default withLayout(IndexPage, SiteLayout);\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"server-side-rendering"},"Server side rendering"),(0,o.kt)("p",null,"Example not yet available")),(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport { useTranslation } from 'onekijs';\n\nconst I18Component = () => {\n  const [T, t, locale, loading] = useTranslation();\n  const firstname = \"Joe\";\n  return (\n    <div>><T>Welcome</T> {firstname} !</div>\n  );\n}\n")))))}v.isMDXComponent=!0}}]);