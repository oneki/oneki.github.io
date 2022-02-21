"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[48553],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var a=t(67294),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r().createContext({}),c=function(e){var n=r().useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r().createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r().createElement(r().Fragment,{},n)}},d=r().forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r().createElement(f,i(i({ref:n},u),{},{components:t})):r().createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r().createElement.apply(null,l)}return r().createElement.apply(null,t)}d.displayName="MDXCreateElement"},13919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return r}})},44996:function(e,n,t){t.d(n,{C:function(){return o},Z:function(){return l}});var a=t(52263),r=t(13919);function o(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,i=void 0!==l&&l,s=o.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(i)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(o,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},58215:function(e,n,t){var a=t(67294),r=t.n(a);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(83117),r=t(67294),o=t.n(r),l=t(72389),i=t(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(89521),c=t(86010),m="tabItem_1uMI";function p(e){var n,t,a,l=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),y=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,r.useState)(b),x=T[0],j=T[1],E=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=y[f];null!=P&&P!==x&&h.some((function(e){return e.value===P}))&&j(P)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),a=h[t].value;a!==x&&(O(n),j(a),null!=f&&w(f,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var n=e.value,t=e.label;return o().createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,c.Z)("tabs__item",m,{"tabs__item--active":x===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=t?t:n)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,l.Z)();return o().createElement(p,(0,a.Z)({key:String(n)},e))}},79443:function(e,n,t){var a=t(67294),r=(0,a.createContext)(void 0);n.Z=r},64094:function(e,n,t){var a=t(67294),r=t.n(a),o=t(26396);t(58215);n.Z=function(e){var n=e.children;return console.log("children",n),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},n)}},32779:function(e,n,t){t.d(n,{Y:function(){return o}});var a=t(67294),r=t.n(a),o=function(e){var n=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+n,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};n.Z=function(e){var n=e.name,t=e.height,a=void 0===t?500:t,o=e.modules,l=e.branch,i=void 0===l?"master":l,s=e.type,u=void 0===s?"examples":s,c=e.view,m="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+u+"/"+n+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);o&&(m+="&module=",o.forEach((function(e,n){n>0&&(m+=","),m+=e})));var p="onekijs-"+n.split("/").join("-");return r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},52482:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=(t(44996),t(64094),t(58215),t(32779),["components"]),i={id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},s=void 0,u={unversionedId:"framework/i18n/useTranslation",id:"framework/i18n/useTranslation",isDocsHomePage:!1,title:"useTranslation",description:"To make a component available in multiple languages, you can use the _useTranslation_ hook which has the following signature:",source:"@site/docs/framework/i18n/020_useTranslation.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/useTranslation",permalink:"/docs/framework/i18n/useTranslation",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/020_useTranslation.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},sidebar:"someSidebar",previous:{title:"Translation files",permalink:"/docs/framework/i18n/translations"},next:{title:"I18n Service",permalink:"/docs/framework/i18n/i18nService"}},c=[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[],level:3},{value:"Outputs",id:"outputs",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],m={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To make a component available in multiple languages, you can use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useTranslation"))," hook which has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [T, t, locale, loading] = useTranslation([namespaces]);\n")),(0,o.kt)("p",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useTranslation"))," loads the translations from the server if there are not yet available locally"))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mandatory parameters are marked with a ","*")),(0,o.kt)("h3",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"namespace")),(0,o.kt)("td",{parentName:"tr",align:null},"string[]"),(0,o.kt)("td",{parentName:"tr",align:null},"The translations can be split in several files to load only what is needed",(0,o.kt)("br",null),'By convention, the "common" namespace contains translations common to all pages and it is not necessary to specify it',(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": [] ",(0,o.kt)("em",{parentName:"td"},"(equivalent to ","['common']",")"))))),(0,o.kt)("h3",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:null},"FC<",(0,o.kt)("a",{parentName:"td",href:"../../api/interfaces/TranslationProps"},"TranslationProps"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"A component to translate JSX content",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example"),': <T alias="Welcome"',">","Welcome {{name}} !</T",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"t")),(0,o.kt)("td",{parentName:"tr",align:null},"(content, alias?, count?) => string"),(0,o.kt)("td",{parentName:"tr",align:null},"A helper function to translate a string or a JSX element",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example"),": t(<b",">","Welcome {{name}}</b",">",", 'Welcome')")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"locale")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The active language",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example"),": fr")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loading")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"A flag to indicate that the download of the translation files is in progress")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useTranslation } from "onekijs";\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation(["users", "common"]);\n  const lastname = "Doe";\n  const firstname = "John";\n  return (\n    <div>\n      {/*Basic example*/}\n      <div title={t("Welcome")}>\n        <T>Welcome</T>\n      </div>\n\n      {/*Example with variable*/}\n      <div>\n        <T>Welcome {{ lastname }} on Oneki.js</T>\n      </div>\n\n      {/*Plural example*/}\n      <div>\n        <T count={2}>user</T>\n      </div>\n\n      {/*Pick up the translation in the file common*/}\n      <div>\n        <T alias="common:user">user</T>\n      </div>\n\n      {/*Complex example. Note the usage of t() to translate an attribute*/}\n      <div>\n        <T alias="complex">\n          Hello{" "}\n          <b>\n            <i>mister</i> {{ firstname }} {{ lastname }} <i>male</i>\n          </b>{" "}\n          <u>address</u> <span title={t("Welcome")}>Welcome</span>\n        </T>\n      </div>\n    </div>\n  );\n};\n\nexport default IndexPage;\n')),(0,o.kt)("p",null),(0,o.kt)("p",null,"The content of ",(0,o.kt)("inlineCode",{parentName:"p"},"public/locales/fr/common.json")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// content of public/locales/fr/users.json\n{\n  "user": "utilisateur",\n  "plural::user": "utilisateurs"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue",\n  "Welcome {{lastname}} on Oneki.js": "Bievenue {{lastname}} sur Oneki.js",\n  "Welcome <1>{{lastname}}</1> {{firstname}": "Bienvenue {{firstname}} <1>{{lastname}}</1>",\n  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4> <5>Bienvenue</5>",\n  "user": "utilisateur commun"\n}\n')))}p.isMDXComponent=!0}}]);