"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13018],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a().createElement(f,u(u({ref:t},s),{},{components:n})):a().createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n.n(r),i=n(86010),o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),u=n(12466),l=n(45315),s=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=i().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,n,r,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,c=m(e),d=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:c})})),b=d[0],v=d[1],h=g({queryString:l,groupId:s}),k=h[0],y=h[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=x[0],E=x[1],N=function(){var e=null!=k?k:w;return f({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),E(e)}),[y,E,c]),tabValues:c}}var v=n(72389),h="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,a=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(p(t),l(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return i().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return i().createElement("li",(0,r.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},u,{className:(0,o.Z)("tabs__item",k,null==u?void 0:u.className,{"tabs__item--active":a===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return i().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=b(e);return i().createElement("div",{className:(0,o.Z)("tabs-container",h)},i().createElement(y,(0,r.Z)({},e,t)),i().createElement(x,(0,r.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return i().createElement(w,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),i=n(74866);n(85162);t.Z=function(e){var t=e.children;return a().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return l},g0:function(){return s}});var r=n(67294),a=n.n(r),i=n(64094),o=n(85162),u=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,i=e.modules,o=e.branch,u=void 0===o?"master":o,l=e.type,s=void 0===l?"examples":l,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+u+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;i&&(m+="&module=",i.forEach((function(e,t){t>0&&(m+=","),m+=e})));var f="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+u+"/"+s+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:d,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},l=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,r=e.craName,l=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return a().createElement(i.Z,null,a().createElement(o.Z,{value:"cra"},a().createElement(u,{name:r||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:l||n})),a().createElement(o.Z,{value:"next"},a().createElement(u,{name:s||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:c||n})))};t.ZP=u},72179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(44996),n(64094)),u=n(85162),l=n(32779),s=["components"],c={id:"use-settings",title:"useSettings",sidebar_label:"useSettings"},p=void 0,d={unversionedId:"framework/configuration/use-settings",id:"framework/configuration/use-settings",title:"useSettings",description:"useSettings returns the configuration object that is passed as a prop to  (generally defined in src/settings.ts)",source:"@site/docs/framework/configuration/020-use-settings.md",sourceDirName:"framework/configuration",slug:"/framework/configuration/use-settings",permalink:"/docs/framework/configuration/use-settings",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/configuration/020-use-settings.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"use-settings",title:"useSettings",sidebar_label:"useSettings"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/configuration/introduction"},next:{title:"useSetting",permalink:"/docs/framework/configuration/use-setting"}},m={},f=[{value:"useSettings Parameters",id:"usesettings-parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3}],g={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const settings: AppSettings = useSettings();\n")),(0,i.kt)("p",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useSettings")," returns the configuration object that is passed as a prop to ",(0,i.kt)("strong",{parentName:"p"},"<App/",">")," (generally defined in src/settings.ts)"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The settings object is frozen and can't be updated.")),(0,i.kt)("h3",{id:"usesettings-parameters"},"useSettings Parameters"),(0,i.kt)("h4",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"No input."),(0,i.kt)("h4",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"settings"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppSettings"},"AppSettings")),(0,i.kt)("td",{parentName:"tr",align:null},"the whole configuration object that generally defined in src/settings.ts",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note"),": This object is frozen and can't be updated")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"cra",mdxType:"TabItem"},(0,i.kt)(l.ZP,{name:"cra-app-settings",height:"600",modules:["/src/Main.tsx","/src/settings.ts","/src/index.tsx"],mdxType:"Sandbox"})),(0,i.kt)(u.Z,{value:"next",mdxType:"TabItem"},(0,i.kt)(l.ZP,{name:"next-app-settings",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))))}b.isMDXComponent=!0}}]);