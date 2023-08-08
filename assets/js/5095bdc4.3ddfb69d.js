"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[58153],{85162:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(67294),a=n.n(i),o=n(86010),r="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,i=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(87462),a=n(67294),o=n.n(a),r=n(86010),s=n(72389),l=n(67392),c=n(7094),u=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,k=e.className,b=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,E=(0,a.useState)(N),T=E[0],_=E[1],S=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=w[h];null!=A&&A!==T&&v.some((function(e){return e.value===A}))&&_(A)}var Z=function(e){var t=e.currentTarget,n=S.indexOf(t),i=v[n].value;i!==T&&(j(t),_(i),null!=h&&C(h,String(i)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,a=S.indexOf(e.currentTarget)+1;n=null!=(i=S[a])?i:S[0];break;case"ArrowLeft":var o,r=S.indexOf(e.currentTarget)-1;n=null!=(o=S[r])?o:S[S.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,r.Z)("tabs-container",p)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o().createElement("li",(0,i.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},a,{className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,s.Z)();return o().createElement(m,(0,i.Z)({key:String(t)},e))}},64094:function(e,t,n){var i=n(67294),a=n.n(i),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return c}});var i=n(67294),a=n.n(i),o=n(64094),r=n(85162),s=n(95665),l=n.n(s),c=function(e){var t=e.path,n=e.craPath,i=e.nextPath,s=e.branch,c=void 0===s?"react18":s;return a().createElement(o.Z,null,a().createElement(r.Z,{value:"cra"},a().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/cra"+(n||t)+"\n")),a().createElement(r.Z,{value:"next"},a().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/next"+(i||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return l},g0:function(){return c}});var i=n(67294),a=n.n(i),o=n(64094),r=n(85162),s=function(e){var t=e.name,n=e.height,i=void 0===n?500:n,o=e.modules,r=e.branch,s=void 0===r?"master":r,l=e.type,c=void 0===l?"examples":l,u=e.view,p=void 0===u?"editor":u,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+s+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var f="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+s+"/"+c+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:d,style:{width:"100%",height:i+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},l=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},c=function(e){var t=e.name,n=e.modules,i=e.craName,l=e.craModules,c=e.nextName,u=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return a().createElement(o.Z,null,a().createElement(r.Z,{value:"cra"},a().createElement(s,{name:i||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:l||n})),a().createElement(r.Z,{value:"next"},a().createElement(s,{name:c||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:u||n})))};t.ZP=s},13438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=(n(44996),n(64094)),s=n(85162),l=n(32779),c=n(20819),u=["components"],p={id:"notification",title:"Centralizing notifications",sidebar_label:"Centralizing notifications"},d=void 0,m={unversionedId:"getting-started/notification",id:"getting-started/notification",title:"Centralizing notifications",description:"",source:"@site/docs/getting-started/007_notification.md",sourceDirName:"getting-started",slug:"/getting-started/notification",permalink:"/docs/getting-started/notification",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/007_notification.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"notification",title:"Centralizing notifications",sidebar_label:"Centralizing notifications"},sidebar:"someSidebar",previous:{title:"Managing data",permalink:"/docs/getting-started/data"},next:{title:"Handling errors",permalink:"/docs/getting-started/error-handling"}},f={},g=[{value:"Final result",id:"final-result",level:2},{value:"Notification center",id:"notification-center",level:2},{value:"Sending the notifications",id:"sending-the-notifications",level:2},{value:"Next step",id:"next-step",level:2}],h={toc:g};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This step consists in sending all notifications to a "notification center" in charge of displaying them.'),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Clicking the "Share" button displays a "success" notification and clicking the "Notify" button displays an "error" notification')),(0,o.kt)(l.g0,{name:"step06-notification",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides two hooks to centralize notifications:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useNotificationService")," returns a service to send notifications on a topic (error topic, success topic, ...)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useNotifications")," returns notifications for a specific topic. Each time a notification is added or removed from the topic, the component is refreshed."))),(0,o.kt)("p",null,"A notification is a javascript object containing at least these fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const notification = {\n  // the topic used for sending the notification (e.g: error)\n  topic: 'error', \n  // Time to leave of the notification in milliseconds. Default value=0 (means no expiration)\n  ttl: 0, \n  // you can put whatever you want in the notification. We recommend to create a payload object\n  // containing a message property\n  payload: { \n    message: \"An error occured while adding the product\"\n  }\n  ... \n}\n")),(0,o.kt)("h2",{id:"notification-center"},"Notification center"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides a service to send notifications, but not a widget to display them.",(0,o.kt)("br",null),'\nFirst, let\'s create the "Notification Center" widget to display them. If the topic is ',(0,o.kt)("inlineCode",{parentName:"p"},"success"),", the notification appears in green and if it's ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", the notification appears in red."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4-5} title="src/modules/core/libs/constants.ts"',"{4-5}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\nexport const URL_CART = '/cart';\nexport const NOTIF_TOPIC_ERROR = 'error';\nexport const NOTIF_TOPIC_SUCCESS = 'success';\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/components/NotificationCenter.tsx\n")),(0,o.kt)("p",null,"  As we want to centralize all notifications, we attach this widget to ",(0,o.kt)("code",null,"<","AppLayout /",">")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step06-notification/src/modules/core/layouts/AppLayout.tsx\n"))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4-5} title="src/modules/core/libs/constants.ts"',"{4-5}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\nexport const URL_CART = '/api/cart';\nexport const NOTIF_TOPIC_ERROR = 'error';\nexport const NOTIF_TOPIC_SUCCESS = 'success';\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/components/NotificationCenter.tsx\n")),(0,o.kt)("p",null,"  As we want to centralize all notifications, we attach this widget to ",(0,o.kt)("code",null,"<","AppLayout /",">")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step06-notification/src/modules/core/layouts/AppLayout.tsx\n")))),(0,o.kt)("h2",{id:"sending-the-notifications"},"Sending the notifications"),(0,o.kt)("p",null,"So far, the page listing the products uses the built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"window.alert()")," to display a notification.",(0,o.kt)("br",null),"\nWe want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"display a ",(0,o.kt)("inlineCode",{parentName:"li"},"Success")," notification when the ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," button is clicked.",(0,o.kt)("br",null),"The notification disappears automatically after 5 seconds."),(0,o.kt)("li",{parentName:"ul"},"display an ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," notification when clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Notify")," button.")),(0,o.kt)("p",null,"Clicking on these buttons sends a notification to a specific topic and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />")," displays them."),(0,o.kt)(c.b4,{craPath:"/step06-notification/src/pages/products/index.tsx",nextPath:"/step06-notification/src/pages/index.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"error-handling"},"In the next step")),", we introduce the services offered by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," to handle errors."))}k.isMDXComponent=!0}}]);