"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[58153],{85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),i=n.n(a),r=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,a=e.className;return i().createElement("div",{role:"tabpanel",className:(0,r.Z)(o,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(87462),i=n(67294),r=n.n(i),o=n(86010),s=n(12466),l=n(45315),c=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=r().Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function h(e){var t,n,a,r,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,u=m(e),d=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:u})})),h=d[0],b=d[1],v=g({queryString:l,groupId:c}),k=v[0],x=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,p.Nk)(t),a=n[0],r=n[1],[a,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=y[0],w=y[1],E=function(){var e=null!=k?k:N;return f({value:e,tabValues:u})?e:null}();return(0,i.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:h,selectValue:(0,i.useCallback)((function(e){if(!f({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),w(e)}),[x,w,u]),tabValues:u}}var b=n(72389),v="tabList__CuJ",k="tabItem_LNqP";function x(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),l(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=u.indexOf(e.currentTarget)+1;n=null!=(a=u[i])?a:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;n=null!=(r=u[o])?r:u[u.length-1]}null==(t=n)||t.focus()};return r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r().createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===a}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return r().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=h(e);return r().createElement("div",{className:(0,o.Z)("tabs-container",v)},r().createElement(x,(0,a.Z)({},e,t)),r().createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return r().createElement(N,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),i=n.n(a),r=n(74866);n(85162);t.Z=function(e){var t=e.children;return i().createElement(r.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return c},e3:function(){return u}});var a=n(67294),i=n.n(a),r=n(64094),o=n(85162),s=n(95665),l=n.n(s),c=function(e){var t=e.path,n=e.craPath,a=e.nextPath,s=e.branch,c=void 0===s?"master":s;return i().createElement(r.Z,null,i().createElement(o.Z,{value:"cra"},i().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/cra/"+(n||t)+"\n")),i().createElement(o.Z,{value:"next"},i().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/next/"+(a||t)+"\n")))},u=function(e){var t=e.path,n=e.branch,a=void 0===n?"master":n;return i().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+a+"/examples/cra-examples/src/"+t+"\n")}},32779:function(e,t,n){n.d(t,{YK:function(){return l},g0:function(){return c}});var a=n(67294),i=n.n(a),r=n(64094),o=n(85162),s=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,r=e.modules,o=e.branch,s=void 0===o?"master":o,l=e.type,c=void 0===l?"examples":l,u=e.view,p=void 0===u?"editor":u,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+s+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;r&&(m+="&module=",r.forEach((function(e,t){t>0&&(m+=","),m+=e})));var f="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+s+"/"+c+"/"+t;return i().createElement(i().Fragment,null,i().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i().createElement("div",{style:{textAlign:"center"}},i().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",i().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},l=function(e){var t=e.name;return i().createElement("div",{style:{textAlign:"right"}},i().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},c=function(e){var t=e.name,n=e.modules,a=e.craName,l=e.craModules,c=e.nextName,u=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return i().createElement(r.Z,null,i().createElement(o.Z,{value:"cra"},i().createElement(s,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:l||n})),i().createElement(o.Z,{value:"next"},i().createElement(s,{name:c||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:u||n})))};t.ZP=s},13438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=(n(44996),n(64094)),s=n(85162),l=n(32779),c=n(20819),u=["components"],p={id:"notification",title:"Centralizing notifications",sidebar_label:"Centralizing notifications"},d=void 0,m={unversionedId:"getting-started/notification",id:"getting-started/notification",title:"Centralizing notifications",description:'This step consists in sending all notifications to a "notification center" in charge of displaying them.',source:"@site/docs/getting-started/007_notification.md",sourceDirName:"getting-started",slug:"/getting-started/notification",permalink:"/docs/getting-started/notification",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/007_notification.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"notification",title:"Centralizing notifications",sidebar_label:"Centralizing notifications"},sidebar:"someSidebar",previous:{title:"Managing data",permalink:"/docs/getting-started/data"},next:{title:"Handling errors",permalink:"/docs/getting-started/error-handling"}},f={},g=[{value:"Final result",id:"final-result",level:2},{value:"Notification center",id:"notification-center",level:2},{value:"Sending the notifications",id:"sending-the-notifications",level:2},{value:"Next step",id:"next-step",level:2}],h={toc:g};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This step consists in sending all notifications to a "notification center" in charge of displaying them.'),(0,r.kt)("h2",{id:"final-result"},"Final result"),(0,r.kt)("p",null,"The result of this step is as follows:"),(0,r.kt)("admonition",{title:"New in this step",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Clicking the "Share" button displays a "success" notification and clicking the "Notify" button displays an "error" notification')),(0,r.kt)(l.g0,{name:"step06-notification",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides two hooks to centralize notifications:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"useNotificationService")," returns a service to send notifications on a topic (error topic, success topic, ...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"useNotifications")," returns notifications for a specific topic. Each time a notification is added or removed from the topic, the component is refreshed."))),(0,r.kt)("p",null,"A notification is a javascript object containing at least these fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const notification = {\n  // the topic used for sending the notification (e.g: error)\n  topic: 'error', \n  // Time to leave of the notification in milliseconds. Default value=0 (means no expiration)\n  ttl: 0, \n  // you can put whatever you want in the notification. We recommend to create a payload object\n  // containing a message property\n  payload: { \n    message: \"An error occured while adding the product\"\n  }\n  ... \n}\n")),(0,r.kt)("h2",{id:"notification-center"},"Notification center"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides a service to send notifications, but not a widget to display them.",(0,r.kt)("br",null),'\nFirst, let\'s create the "Notification Center" widget to display them. If the topic is ',(0,r.kt)("inlineCode",{parentName:"p"},"success"),", the notification appears in green and if it's ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", the notification appears in red."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4-5} title="src/modules/core/libs/constants.ts"',"{4-5}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\nexport const URL_CART = '/cart';\nexport const NOTIF_TOPIC_ERROR = 'error';\nexport const NOTIF_TOPIC_SUCCESS = 'success';\n")),(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/components/NotificationCenter.tsx\n")),(0,r.kt)("p",null,"  As we want to centralize all notifications, we attach this widget to ",(0,r.kt)("code",null,"<","AppLayout /",">")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/layouts/AppLayout.tsx\n"))),(0,r.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4-5} title="src/modules/core/libs/constants.ts"',"{4-5}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\nexport const URL_CART = '/api/cart';\nexport const NOTIF_TOPIC_ERROR = 'error';\nexport const NOTIF_TOPIC_SUCCESS = 'success';\n")),(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/components/NotificationCenter.tsx\n")),(0,r.kt)("p",null,"  As we want to centralize all notifications, we attach this widget to ",(0,r.kt)("code",null,"<","AppLayout /",">")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/layouts/AppLayout.tsx\n")))),(0,r.kt)("h2",{id:"sending-the-notifications"},"Sending the notifications"),(0,r.kt)("p",null,"So far, the page listing the products uses the built-in function ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," to display a notification.",(0,r.kt)("br",null),"\nWe want to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display a ",(0,r.kt)("inlineCode",{parentName:"li"},"Success")," notification when the ",(0,r.kt)("inlineCode",{parentName:"li"},"Share")," button is clicked.",(0,r.kt)("br",null),"The notification disappears automatically after 5 seconds."),(0,r.kt)("li",{parentName:"ul"},"display an ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," notification when clicking on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Notify")," button.")),(0,r.kt)("p",null,"Clicking on these buttons sends a notification to a specific topic and the ",(0,r.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />")," displays them."),(0,r.kt)(c.b4,{craPath:"/step06-notification/src/pages/products/index.tsx",nextPath:"/step06-notification/src/pages/index.tsx",mdxType:"GettingStartedSnippet"}),(0,r.kt)("h2",{id:"next-step"},"Next step"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"error-handling"},"In the next step")),", we introduce the services offered by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"onekijs"))," to handle errors."))}b.isMDXComponent=!0}}]);