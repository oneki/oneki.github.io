"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[24133],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=l().createContext({}),m=function(e){var n=l().useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return l().createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l().createElement(l().Fragment,{},n)}},d=l().forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||p[d]||r;return t?l().createElement(f,o(o({ref:n},u),{},{components:t})):l().createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l().createElement.apply(null,i)}return l().createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),l=t.n(a),r=t(86010),i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,a=e.className;return l().createElement("div",{role:"tabpanel",className:(0,r.Z)(i,a),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),l=t(67294),r=t.n(l),i=t(86010),o=t(72389),s=t(67392),u=t(7094),m=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,f=e.defaultValue,v=e.values,h=e.groupId,k=e.className,b=r().Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,s.l)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(n=null!=f?f:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),w=T.tabGroupChoices,j=T.setTabGroupChoices,x=(0,l.useState)(N),O=x[0],E=x[1],C=[],P=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=w[h];null!=S&&S!==O&&g.some((function(e){return e.value===S}))&&E(S)}var W=function(e){var n=e.currentTarget,t=C.indexOf(n),a=g[t].value;a!==O&&(P(n),E(a),null!=h&&j(h,String(a)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=C.indexOf(e.currentTarget)+1;t=null!=(a=C[l])?a:C[0];break;case"ArrowLeft":var r,i=C.indexOf(e.currentTarget)-1;t=null!=(r=C[i])?r:C[C.length-1]}null==(n=t)||n.focus()};return r().createElement("div",{className:(0,i.Z)("tabs-container",c)},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r().createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:W,onClick:W},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r().createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function f(e){var n=(0,o.Z)();return r().createElement(d,(0,a.Z)({key:String(n)},e))}},25464:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=(t(44996),t(65488),t(85162),["components"]),o={id:"translations",title:"Translation files",sidebar_label:"Translation files"},s=void 0,u={unversionedId:"framework/i18n/translations",id:"framework/i18n/translations",title:"Translation files",description:"Translations are stored in JSON files in the folder public/locales//{namespace}.json",source:"@site/docs/framework/i18n/010_translations.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/translations",permalink:"/docs/framework/i18n/translations",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/010_translations.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"translations",title:"Translation files",sidebar_label:"Translation files"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/i18n/introduction"},next:{title:"useTranslation",permalink:"/docs/framework/i18n/useTranslation"}},m={},c=[{value:"Namespaces",id:"namespaces",level:2},{value:"Common namespace",id:"common-namespace",level:3},{value:"Example",id:"example",level:3},{value:"JSON files",id:"json-files",level:2},{value:"Not embedded in javascript bundle",id:"not-embedded-in-javascript-bundle",level:3},{value:"Embedded in javascript bundle",id:"embedded-in-javascript-bundle",level:3},{value:"Content",id:"content",level:2},{value:"Plural key",id:"plural-key",level:3},{value:"Complex key / value",id:"complex-key--value",level:3},{value:"Modifiers",id:"modifiers",level:3},{value:"Modifiers with parameters",id:"modifiers-with-parameters",level:4}],p={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Translations are stored in JSON files in the folder ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"public/locales/{locale}/{namespace}.json")))),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Oneki.js"))," supports splitting translations into multiple files, called ",(0,r.kt)("strong",{parentName:"p"},"namespaces"),"."),(0,r.kt)("p",null,"Separating translations into multiple files offers the following advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only the necessary translation files are loaded"),(0,r.kt)("li",{parentName:"ul"},"The size of the translation files remains under control")),(0,r.kt)("h3",{id:"common-namespace"},"Common namespace"),(0,r.kt)("p",null,"By convention, the default namespace is named ",(0,r.kt)("strong",{parentName:"p"},"common")," and is automatically loaded.",(0,r.kt)("br",null),"\nIt's a good practice to put everything that is common to the whole application in this file (for example: the text of the navigation bar). ",(0,r.kt)("br",null),"\nFor small applications, it's common to put all translations only in this file."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's assume that the translation files are divided into 3 namespaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"common.json"),(0,r.kt)("li",{parentName:"ul"},"users.json"),(0,r.kt)("li",{parentName:"ul"},"admin.json")),(0,r.kt)("p",null,'and that the "admin" page only needs the translations of the namespaces "admin" and "common". This is specified via the ',(0,r.kt)("strong",{parentName:"p"},"useTranslation")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// if common is not specified, it's automatically added to the list of required namespaces\nconst [T, t, locale, loading] = useTranslation(['admin', 'common']); \n")),(0,r.kt)("p",null,'Therefore when the page "admin" is displayed, only the files "common.json" and "admin.json" are loaded.'),(0,r.kt)("h2",{id:"json-files"},"JSON files"),(0,r.kt)("h3",{id:"not-embedded-in-javascript-bundle"},"Not embedded in javascript bundle"),(0,r.kt)("p",null,"The JSON files ",(0,r.kt)("strong",{parentName:"p"},"must be")," stored in the folder ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"public/locales/{locale}/{namespace}.json"))," where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locale")," is one of the language supported by the app (en, fr, es, ...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace")," is the name of the namespace (see above)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"My-App\n\u251c\u2500 public\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en // locales in english\n\u2502  \u2502  \u2502  \u251c\u2500 admin.json\n\u2502  \u2502  \u2502  \u2514\u2500 common.json \n\u2502  \u2502  \u2502\n\u2502  \u2502  \u2514\u2500 fr // locales in french\n\u2502  \u2502  \u2502  \u251c\u2500 admin.json\n\u2502  \u2502  \u2502  \u2514\u2500 common.json \n\u2502  \u2514\u2500 ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"useTranslation"))," hook will lazy load these files from the server when needed."),(0,r.kt)("h3",{id:"embedded-in-javascript-bundle"},"Embedded in javascript bundle"),(0,r.kt)("p",null,"The translations can be embedded directly in the javascript bundle by adding them directly in the initial state of the redux store"),(0,r.kt)("p",null,"TODO: example"),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"The content of a translation file is a simple  JSON key/value file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Welcome": "Bienvenue"\n}\n')),(0,r.kt)("h3",{id:"plural-key"},"Plural key"),(0,r.kt)("p",null,"A key can be prefixed to support plurals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "User": "Utilisateur",\n  "plural::User": "Utilisateurs"\n}\n')),(0,r.kt)("h3",{id:"complex-key--value"},"Complex key / value"),(0,r.kt)("p",null,"The key and value can be more complex and look like the content of a JSX component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Basic example\n  "Welcome": "Bienvenue", // <T>Welcome<T>\n\n  // example of a translation containing a variable. The key is not equal to the value (the key is therefore an alias)\n  // Example: <T alias="Welcome">Welcome {{name}} !</T>\n  "Welcome": "Bienvenue {{name}} !", \n\n  // Same example as above but the key is not an alias. The key is therefore equal to the content of the default language\n  // Example: <T>Welcome {{name}} !</T>\n  "Welcome {{name}} !": "Bienvenue {{name}}!", \n\n  // The value is more complex\n  // Example:\n  // <T alias="complex">\n  //   Hello{\' \'}\n  //   <b>\n  //     <i>mister</i> {{ firstname }} {{ lastname }} <i>male</i>\n  //   </b>{\' \'}\n  //   <u>address</u>\n  // </T>\n  //\n  // Please note that lastname and firstname are reversed\n  "complex": "Bonjour <1><2>monsieur</2> {{lastname}} {{firstname}}  <3>masculin</3></1> <4>adresse</4>", \n\n  // Same example as above but when the alias is not specified\n  // Example: <T>User <b>{{name}}</b> is connected</T>\n  "User <1>{{name}}</1> is connected": "Utilisateur <1>{{name}}</1> est connect\xe9"\n}\n')),(0,r.kt)("h3",{id:"modifiers"},"Modifiers"),(0,r.kt)("p",null,"For advanced use cases, you can add one or several modifiers to a variable like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Basic example: first name will be in uppercase\n  // Example: <T>Welcome {{firstname}}</T>\n  "Welcome {{firstname}}": "Welcome {{firstname | uppercase}}", // <T>Welcome {{firstname}}<T>\n}\n')),(0,r.kt)("p",null,"A modifier is a function with at least two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value"),": the value of the variable to which the modifier is applied"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locale"),": the current locale")),(0,r.kt)("p",null,"The modifiers must be defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," with the key ",(0,r.kt)("strong",{parentName:"p"},"i18n.modifiers"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  i18n: {\n    ...\n    modifiers: {\n      uppercase: (value, locale) => value ? value.toUpperCase() : value\n    }\n  }\n}\n")),(0,r.kt)("h4",{id:"modifiers-with-parameters"},"Modifiers with parameters"),(0,r.kt)("p",null,"You can even pass one or more parameters to a modifier like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // display only the 5 first characters of the firstname\n  // example: <T>Welcome {{firstname}}<T>\n  "Welcome {{firstname}}": "Welcome {{firstname | maxlength(5)}}", \n}\n')),(0,r.kt)("p",null),(0,r.kt)("p",null,"The modifier defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  i18n: {\n    ...\n    modifiers: {\n      maxlength: (value, locale, length) => value ? value.substring(length) : value\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);