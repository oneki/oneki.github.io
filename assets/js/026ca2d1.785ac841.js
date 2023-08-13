"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[94021],{85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n.n(a),i=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,i.Z)(l,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(87462),r=n(67294),i=n.n(r),l=n(86010),o=n(12466),u=n(45315),s=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=i().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,n,a,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,c=m(e),d=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),h=d[0],v=d[1],b=g({queryString:u,groupId:s}),k=b[0],w=b[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),y=x[0],E=x[1],N=function(){var e=null!=k?k:y;return f({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){N&&v(N)}),[N]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),E(e)}),[w,E,c]),tabValues:c}}var v=n(72389),b="tabList__CuJ",k="tabItem_LNqP";function w(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(p(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;n=null!=(i=c[l])?i:c[c.length-1]}null==(t=n)||t.focus()};return i().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return i().createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=h(e);return i().createElement("div",{className:(0,l.Z)("tabs-container",b)},i().createElement(w,(0,a.Z)({},e,t)),i().createElement(x,(0,a.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return i().createElement(y,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),i=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{J5:function(){return m},b4:function(){return c},e3:function(){return p}});var a=n(67294),r=n.n(a),i=n(64094),l=n(85162),o=n(95665),u=n.n(o),s=n(74866),c=function(e){var t=e.path,n=e.craPath,a=e.nextPath,o=e.branch,s=void 0===o?"master":o;return r().createElement(i.Z,null,r().createElement(l.Z,{value:"cra"},r().createElement(u(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+s+"/getting-started/cra/"+(n||t)+"\n")),r().createElement(l.Z,{value:"next"},r().createElement(u(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+s+"/getting-started/next/"+(a||t)+"\n")))},p=function(e){var t=e.path,n=e.branch,a=void 0===n?"master":n,i=t;return t.startsWith("http")||(i="https://github.com/oneki/onekijs/blob/"+a+"/examples/cra-examples/src/"+t),r().createElement(u(),{language:"tsx"},i+"\n")},d=function(e){var t=e.path,n=e.height,a=void 0===n?500:n,i=t;return t.startsWith("http")||(i="https://oneki-examples.surge.sh/"+t),r().createElement("iframe",{src:i,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},m=function(e){var t=e.values,n=e.branch,a=void 0===n?"master":n,i=e.preview,o=t.map((function(e){return{label:e.label,value:e.label}}));i&&o.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var u=t.map((function(e){return r().createElement(l.Z,{value:e.label},r().createElement(p,{path:e.path,branch:a}))}));return i&&u.push(r().createElement(l.Z,{value:"__preview__"},r().createElement(d,{path:i.path,height:i.height}))),console.log(o),r().createElement(s.Z,{groupId:"example-types",defaultValue:t[0].label,values:o},u)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var a=n(67294),r=n.n(a),i=n(64094),l=n(85162),o=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,i=e.modules,l=e.branch,o=void 0===l?"master":l,u=e.type,s=void 0===u?"examples":u,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+o+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;i&&(m+="&module=",i.forEach((function(e,t){t>0&&(m+=","),m+=e})));var f="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+o+"/"+s+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,a=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return r().createElement(i.Z,null,r().createElement(l.Z,{value:"cra"},r().createElement(o,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:u||n})),r().createElement(l.Z,{value:"next"},r().createElement(o,{name:s||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:c||n})))};t.ZP=o},52699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=(n(44996),n(64094),n(85162),n(32779),n(20819)),o=["components"],u={id:"use-setting",title:"useSetting",sidebar_label:"useSetting"},s=void 0,c={unversionedId:"framework/configuration/use-setting",id:"framework/configuration/use-setting",title:"useSetting",description:"_useSetting_ returns a specific entry from Settings idenfified by key",source:"@site/docs/framework/configuration/021-use-setting.md",sourceDirName:"framework/configuration",slug:"/framework/configuration/use-setting",permalink:"/docs/framework/configuration/use-setting",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/configuration/021-use-setting.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{id:"use-setting",title:"useSetting",sidebar_label:"useSetting"},sidebar:"someSidebar",previous:{title:"useSettings",permalink:"/docs/framework/configuration/use-settings"},next:{title:"Environment variables",permalink:"/docs/framework/configuration/multi-env"}},p={},d=[{value:"useSettings Parameters",id:"usesettings-parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const setting: T = useSetting<T>(key: string);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"useSetting"))," returns a specific entry from Settings idenfified by ",(0,i.kt)("strong",{parentName:"p"},"key")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The setting object is frozen and can't be updated.")),(0,i.kt)("h3",{id:"usesettings-parameters"},"useSettings Parameters"),(0,i.kt)("h4",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier of a field in the configuration object.")))),(0,i.kt)("h4",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"setting")),(0,i.kt)("td",{parentName:"tr",align:null},"T"),(0,i.kt)("td",{parentName:"tr",align:null},"a specific entry from Settings idenfified by ",(0,i.kt)("strong",{parentName:"td"},"key"))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,i.kt)(l.e3,{path:"settings/UseSettingPage.tsx",mdxType:"ExampleSnippet"}))}f.isMDXComponent=!0}}]);