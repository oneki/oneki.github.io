"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[48553],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r().createContext({}),c=function(e){var t=r().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r().createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r().createElement(f,i(i({ref:t},u),{},{components:n})):r().createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),l=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(67294),l=n.n(r),o=n(86010),i=n(72389),s=n(67392),u=n(7094),c=n(12466),m="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,f=e.defaultValue,v=e.values,k=e.groupId,b=e.className,g=l().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),w=T.tabGroupChoices,x=T.setTabGroupChoices,E=(0,r.useState)(N),j=E[0],O=E[1],P=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=w[k];null!=D&&D!==j&&h.some((function(e){return e.value===D}))&&O(D)}var Z=function(e){var t=e.currentTarget,n=P.indexOf(t),a=h[n].value;a!==j&&(C(t),O(a),null!=k&&x(k,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;n=null!=(l=P[o])?l:P[P.length-1]}null==(t=n)||t.focus()};return l().createElement("div",{className:(0,o.Z)("tabs-container",m)},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l().createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return P.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):l().createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function f(e){var t=(0,i.Z)();return l().createElement(d,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),l=n(65488);n(85162);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),l=n(64094),o=n(85162),i=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,l=e.modules,o=e.branch,i=void 0===o?"master":o,s=e.type,u=void 0===s?"examples":s,c=e.view,m="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);l&&(m+="&module=",l.forEach((function(e,t){t>0&&(m+=","),m+=e})));var p="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,c=e.nextModules,m=e.height,p=void 0===m?600:m,d=e.branch,f=void 0===d?"master":d;return r().createElement(l.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(i,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:p,modules:s||n})),r().createElement(o.Z,{value:"next"},r().createElement(i,{name:u||t,type:"getting-started/next",view:"preview",branch:f,height:p,modules:c||n})))};t.ZP=i},52482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=(n(44996),n(64094),n(85162),n(32779),["components"]),i={id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},s=void 0,u={unversionedId:"framework/i18n/useTranslation",id:"framework/i18n/useTranslation",title:"useTranslation",description:"To make a component available in multiple languages, you can use the _useTranslation_ hook which has the following signature:",source:"@site/docs/framework/i18n/020_useTranslation.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/useTranslation",permalink:"/docs/framework/i18n/useTranslation",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/020_useTranslation.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"useTranslation",title:"useTranslation",sidebar_label:"useTranslation"},sidebar:"someSidebar",previous:{title:"Translation files",permalink:"/docs/framework/i18n/translations"},next:{title:"I18n Service",permalink:"/docs/framework/i18n/i18nService"}},c={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Example",id:"example",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To make a component available in multiple languages, you can use the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useTranslation"))," hook which has the following signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [T, t, locale, loading] = useTranslation([namespaces]);\n")),(0,l.kt)("p",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useTranslation"))," loads the translations from the server if there are not yet available locally")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are marked with a ","*")),(0,l.kt)("h3",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"The translations can be split in several files to load only what is needed",(0,l.kt)("br",null),'By convention, the "common" namespace contains translations common to all pages and it is not necessary to specify it',(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": [] ",(0,l.kt)("em",{parentName:"td"},"(equivalent to ","['common']",")"))))),(0,l.kt)("h3",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:null},"FC<",(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/TranslationProps"},"TranslationProps"),">"),(0,l.kt)("td",{parentName:"tr",align:null},"A component to translate JSX content",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),': <T alias="Welcome"',">","Welcome {{name}} !</T",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"t")),(0,l.kt)("td",{parentName:"tr",align:null},"(content, alias?, count?) => string"),(0,l.kt)("td",{parentName:"tr",align:null},"A helper function to translate a string or a JSX element",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": t(<b",">","Welcome {{name}}</b",">",", 'Welcome')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"locale")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The active language",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": fr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"A flag to indicate that the download of the translation files is in progress")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useTranslation } from "onekijs";\n\nconst IndexPage = () => {\n  const [T, t, locale, loading] = useTranslation(["users", "common"]);\n  const lastname = "Doe";\n  const firstname = "John";\n  return (\n    <div>\n      {/*Basic example*/}\n      <div title={t("Welcome")}>\n        <T>Welcome</T>\n      </div>\n\n      {/*Example with variable*/}\n      <div>\n        <T>Welcome {{ lastname }} on Oneki.js</T>\n      </div>\n\n      {/*Plural example*/}\n      <div>\n        <T count={2}>user</T>\n      </div>\n\n      {/*Pick up the translation in the file common*/}\n      <div>\n        <T alias="common:user">user</T>\n      </div>\n\n      {/*Complex example. Note the usage of t() to translate an attribute*/}\n      <div>\n        <T alias="complex">\n          Hello{" "}\n          <b>\n            <i>mister</i> {{ firstname }} {{ lastname }} <i>male</i>\n          </b>{" "}\n          <u>address</u> <span title={t("Welcome")}>Welcome</span>\n        </T>\n      </div>\n    </div>\n  );\n};\n\nexport default IndexPage;\n')),(0,l.kt)("p",null),(0,l.kt)("p",null,"The content of ",(0,l.kt)("inlineCode",{parentName:"p"},"public/locales/fr/common.json")," looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// content of public/locales/fr/users.json\n{\n  "user": "utilisateur",\n  "plural::user": "utilisateurs"\n}\n\n// content of public/locales/fr/common.json\n{\n  "Welcome": "Bienvenue",\n  "Welcome {{lastname}} on Oneki.js": "Bievenue {{lastname}} sur Oneki.js",\n  "Welcome <1>{{lastname}}</1> {{firstname}": "Bienvenue {{firstname}} <1>{{lastname}}</1>",\n  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4> <5>Bienvenue</5>",\n  "user": "utilisateur commun"\n}\n')))}d.isMDXComponent=!0}}]);