"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[78693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r().createContext({}),c=function(e){var t=r().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?r().createElement(f,l(l({ref:t},u),{},{components:n})):r().createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),i=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(67294),i=n.n(r),o=n(86010),l=n(72389),s=n(67392),u=n(7094),c=n(12466),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,f=e.defaultValue,b=e.values,h=e.groupId,k=e.className,g=i().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),w=x.tabGroupChoices,E=x.setTabGroupChoices,O=(0,r.useState)(N),j=O[0],T=O[1],D=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=w[h];null!=C&&C!==j&&v.some((function(e){return e.value===C}))&&T(C)}var Z=function(e){var t=e.currentTarget,n=D.indexOf(t),a=v[n].value;a!==j&&(P(t),T(a),null!=h&&E(h,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var i,o=D.indexOf(e.currentTarget)-1;n=null!=(i=D[o])?i:D[D.length-1]}null==(t=n)||t.focus()};return i().createElement("div",{className:(0,o.Z)("tabs-container",p)},i().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i().createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i().createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function f(e){var t=(0,l.Z)();return i().createElement(d,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),i=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),i=n(64094),o=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,i=e.modules,o=e.branch,l=void 0===o?"master":o,s=e.type,u=void 0===s?"examples":s,c=e.view,p=void 0===c?"editor":c,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",d="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;i&&(d+="&module=",i.forEach((function(e,t){t>0&&(d+=","),d+=e})));var f="onekijs-"+t.split("/").join("-"),b="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:d,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:b,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,c=e.nextModules,p=e.height,m=void 0===p?600:p,d=e.branch,f=void 0===d?"master":d;return r().createElement(i.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:m,modules:s||n})),r().createElement(o.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:f,height:m,modules:c||n})))};t.ZP=l},8846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(44996),n(65488),n(85162),n(32779)),l=["components"],s={id:"use-notifications",title:"Display notifications",sidebar_label:"Display notifications"},u=void 0,c={unversionedId:"framework/notification/use-notifications",id:"framework/notification/use-notifications",title:"Display notifications",description:"",source:"@site/docs/framework/notification/060-use-notifications.md",sourceDirName:"framework/notification",slug:"/framework/notification/use-notifications",permalink:"/docs/framework/notification/use-notifications",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/notification/060-use-notifications.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{id:"use-notifications",title:"Display notifications",sidebar_label:"Display notifications"},sidebar:"someSidebar",previous:{title:"Create notifications",permalink:"/docs/framework/notification/use-notification-service"},next:{title:"Introduction",permalink:"/docs/framework/form/introduction"}},p={},m=[{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Oneki.js")," provides the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"useNotifications"))," hook to retrieve notifications for a specific topic.",(0,i.kt)("br",null),"\nAs soon as the topic is updated, the component does a re-render."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const notifications = useNotifications(topic)\n")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Oneki.js provides a default service to send notifications, but not a default widget to handle them. You have to provide it")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"topic"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'topic is a entry in the Redux state, stored under "notifications.(topic)',(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Example"),": if topic=error, then the entry in Redux state is: ",(0,i.kt)("inlineCode",{parentName:"td"},"notifications.error"),(0,i.kt)("br",null),"The value of ",(0,i.kt)("inlineCode",{parentName:"td"},"notifications.error")," is an array of notifications")))),(0,i.kt)("h4",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"The output is an array of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../../api/interfaces/Notification"},"Notification"))," which is an object with the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"topic")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The topic to be used to send the notification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique ID of the notification. This id is used later to remove the notification from the Redux state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ttl")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Time to leave of the notification in milliseconds. Set the value to 0 for no expiration",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to:")," ttl in settings.ts. If not defined in settings.ts, then defaults to 5000 (0 for error topic)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"persist")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the notification should survive after a route change.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to:")," persist in settings.ts. If not defined in settings.ts, then defaults to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"The payload of the notification. We recommand an object with at least the field ",(0,i.kt)("em",{parentName:"td"},"message"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Example"),': { message: "test" }')))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,i.kt)(o.YK,{name:"cra-notifications",mdxType:"SandboxExampleButton"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-notifications/src/components/NotificationCenter.tsx\n")))}f.isMDXComponent=!0}}]);