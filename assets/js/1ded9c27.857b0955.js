"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[74555],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a().createElement(f,i(i({ref:t},s),{},{components:n})):a().createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n.n(r),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(12466),u=n(45315),s=n(91980),c=n(67392),p=n(50012);function m(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function b(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:c})})),b=m[0],g=m[1],k=v({queryString:u,groupId:s}),h=k[0],N=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=y[0],T=y[1],E=function(){var e=null!=h?h:w;return f({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),T(e)}),[N,T,c]),tabValues:c}}var g=n(72389),k="tabList__CuJ",h="tabItem_LNqP";function N(e){var t=e.className,n=e.block,a=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(p(t),u(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":a===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=b(e);return o().createElement("div",{className:(0,l.Z)("tabs-container",k)},o().createElement(N,(0,r.Z)({},e,t)),o().createElement(y,(0,r.Z)({},e,t)))}function T(e){var t=(0,g.Z)();return o().createElement(w,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},73317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(85162),u=["components"],s={id:"multi-env",title:"Environment variables",sidebar_label:"Environment variables"},c=void 0,p={unversionedId:"framework/configuration/multi-env",id:"framework/configuration/multi-env",title:"Environment variables",description:"The file src/settings.tsx is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables.",source:"@site/docs/framework/configuration/030_multi-env.md",sourceDirName:"framework/configuration",slug:"/framework/configuration/multi-env",permalink:"/docs/framework/configuration/multi-env",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/configuration/030_multi-env.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"multi-env",title:"Environment variables",sidebar_label:"Environment variables"},sidebar:"someSidebar",previous:{title:"useSetting",permalink:"/docs/framework/configuration/use-setting"},next:{title:"Introduction",permalink:"/docs/framework/state-management/introduction"}},m={},d=[{value:"Example",id:"example",level:3}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The file ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.tsx"))," is the central place to contain all configuration variables. However, some variables are different by environment (e.g: development, staging, acceptance, production). They are called environment variables."),(0,o.kt)("p",null,"To avoid inserting unexpected environment variables in the final bundle, the name of the variables ",(0,o.kt)("strong",{parentName:"p"},"must be")," prefixed like this:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Application type"),(0,o.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create React App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"REACT","_","APP_")),(0,o.kt)("td",{parentName:"tr",align:null},"REACT_APP_API_URL=",(0,o.kt)("a",{parentName:"td",href:"https://api.oneki.net"},"https://api.oneki.net"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Next.js APP"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"NEXT_")),(0,o.kt)("td",{parentName:"tr",align:null},"NEXT_API_URL=",(0,o.kt)("a",{parentName:"td",href:"https://api.oneki.net"},"https://api.oneki.net"))))),(0,o.kt)("p",null,"The environment variables can be defined in one of these files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"My-App\n\u2502  \u251c\u2500 src \n\u2502  \u2502  \u251c\u2500 settings.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502\n\u251c\u2500 .env.development\n\u251c\u2500 .env.development.local\n\u251c\u2500 .env.production\n\u251c\u2500 .env.production.local\n\u251c\u2500 package.json\n\u2514\u2500 ...\n")),(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These files should only contain environment variables. ",(0,o.kt)("br",null),"The entire configuration should be stored in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.tx"))," and environment variables ",(0,o.kt)("strong",{parentName:"p"},"must")," be referenced using ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.<env_variable>"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Filename"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.development"),(0,o.kt)("td",{parentName:"tr",align:null},"Environment variables specific to the development environment. The development environment is started with ",(0,o.kt)("strong",{parentName:"td"},"yarn dev")," or ",(0,o.kt)("strong",{parentName:"td"},"next"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.development.local"),(0,o.kt)("td",{parentName:"tr",align:null},"same as ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},".env.development"))," but this file ",(0,o.kt)("strong",{parentName:"td"},"should not")," be committed on GIT.",(0,o.kt)("br",null),"Therefore this file can contain more sensitive data",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": Since a ",(0,o.kt)("strong",{parentName:"td"},"create react app")," is executed on the browser side, it should not contain sensitive data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.production"),(0,o.kt)("td",{parentName:"tr",align:null},"Environment variables specific to a production environment. A production environment is any environment built with ",(0,o.kt)("strong",{parentName:"td"}," yarn build"),". This file is generally not committed on GIT but created by a CI during the construction of the application (the file is therefore different between staging and production)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".env.production.local"),(0,o.kt)("td",{parentName:"tr",align:null},"same as ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},".env.production"))," but this file ",(0,o.kt)("strong",{parentName:"td"},"should not")," be committed on GIT.",(0,o.kt)("br",null),"Therefore this file can contain more sensitive data",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": Since a ",(0,o.kt)("strong",{parentName:"td"},"create react app")," is executed on the browser side, it should not contain sensitive data")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".env.development"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"REACT_APP_API_URL=https://dev.oneki.net/api\n")),(0,o.kt)("p",null),(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  baseUrl: process.env.REACT_APP_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".env.development"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"NEXT_API_URL=https://dev.oneki.net/api\n")),(0,o.kt)("p",null),(0,o.kt)("p",null,"Content of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"src/settings.ts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  baseUrl: process.env.NEXT_API_URL,\n  notification: { // variables below common to all environments\n    default: {\n      ttl: 1000, \n      max: 5\n    }\n  }     \n}\n")))))}v.isMDXComponent=!0}}]);