"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[74555],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),p=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,v=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r().createElement(v,i(i({ref:t},s),{},{components:n})):r().createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r().createElement.apply(null,l)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(87462),r=n(67294),o=n.n(r),l=n(86010),i=n(72389),u=n(67392),s=n(7094),p=n(12466),c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,v=e.defaultValue,f=e.values,b=e.groupId,k=e.className,g=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,u.l)(h,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===v?v:null!=(t=null!=v?v:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),w=T.tabGroupChoices,E=T.setTabGroupChoices,x=(0,r.useState)(y),P=x[0],_=x[1],O=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var A=w[b];null!=A&&A!==P&&h.some((function(e){return e.value===A}))&&_(A)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==P&&(j(t),_(a),null!=b&&E(b,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;n=null!=(o=O[l])?o:O[O.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",c)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function v(e){var t=(0,i.Z)();return o().createElement(d,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},73317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(85162),u=["components"],s={id:"multi-env",title:"Environment variables",sidebar_label:"Environment variables"},p=void 0,c={unversionedId:"framework/configuration/multi-env",id:"framework/configuration/multi-env",title:"Environment variables",description:"The file src/settings.tsx is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables.",source:"@site/docs/framework/configuration/030_multi-env.md",sourceDirName:"framework/configuration",slug:"/framework/configuration/multi-env",permalink:"/docs/framework/configuration/multi-env",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/configuration/030_multi-env.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"multi-env",title:"Environment variables",sidebar_label:"Environment variables"},sidebar:"someSidebar",previous:{title:"useSetting",permalink:"/docs/framework/configuration/use-setting"},next:{title:"Introduction",permalink:"/docs/framework/state-management/introduction"}},m={},d=[{value:"Example",id:"example",level:3}],v={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The file ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.tsx"))," is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables."),(0,o.kt)("p",null,"To avoid inserting unexpected environment variables in the final bundle, the name of the variables ",(0,o.kt)("strong",{parentName:"p"},"must be")," prefixed like this:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Application type"),(0,o.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create React App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"REACT","_","APP_")),(0,o.kt)("td",{parentName:"tr",align:null},"REACT_APP_API_URL=",(0,o.kt)("a",{parentName:"td",href:"https://api.oneki.net"},"https://api.oneki.net"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Next.js APP"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"NEXT_")),(0,o.kt)("td",{parentName:"tr",align:null},"NEXT_API_URL=",(0,o.kt)("a",{parentName:"td",href:"https://api.oneki.net"},"https://api.oneki.net"))))),(0,o.kt)("p",null,"The environment variables can be defined in one of these files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"My-App\n\u2502  \u251c\u2500 src \n\u2502  \u2502  \u251c\u2500 settings.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502\n\u251c\u2500 .env.development\n\u251c\u2500 .env.development.local\n\u251c\u2500 .env.production\n\u251c\u2500 .env.production.local\n\u251c\u2500 package.json\n\u2514\u2500 ...\n")),(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These files should only contain environment variables. ",(0,o.kt)("br",null),"The entire configuration should be stored in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.tx"))," and environment variables ",(0,o.kt)("strong",{parentName:"p"},"must")," be referenced using ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.<env_variable>"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Filename"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.development"),(0,o.kt)("td",{parentName:"tr",align:null},"Environment variables specific to the development environment. The development environment is started with ",(0,o.kt)("strong",{parentName:"td"},"yarn dev")," or ",(0,o.kt)("strong",{parentName:"td"},"next"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.development.local"),(0,o.kt)("td",{parentName:"tr",align:null},"same as ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},".env.development"))," but this file ",(0,o.kt)("strong",{parentName:"td"},"should not")," be committed on GIT.",(0,o.kt)("br",null),"Therefore this file can contain more sensitive data",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": Since a ",(0,o.kt)("strong",{parentName:"td"},"create react app")," is executed on the browser side, it should not contain sensitive data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.production"),(0,o.kt)("td",{parentName:"tr",align:null},"Environment variables specific to a production environment. A production environment is any environment built with ",(0,o.kt)("strong",{parentName:"td"}," yarn build"),". This file is generally not committed on GIT but created by a CI during the construction of the application (the file is therefore different between staging and production)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.production.local"),(0,o.kt)("td",{parentName:"tr",align:null},"same as ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},".env.production"))," but this file ",(0,o.kt)("strong",{parentName:"td"},"should not")," be committed on GIT.",(0,o.kt)("br",null),"Therefore this file can contain more sensitive data",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": Since a ",(0,o.kt)("strong",{parentName:"td"},"create react app")," is executed on the browser side, it should not contain sensitive data")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".env.development"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"REACT_APP_API_URL=https://dev.oneki.net/api\n")),(0,o.kt)("p",null),(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  baseUrl: process.env.REACT_APP_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".env.development"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"NEXT_API_URL=https://dev.oneki.net/api\n")),(0,o.kt)("p",null),(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  baseUrl: process.env.NEXT_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n")))))}f.isMDXComponent=!0}}]);