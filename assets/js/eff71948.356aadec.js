"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[42838],{3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return d}});var r=n(67294),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a().createContext({}),s=function(t){var e=a().useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},f=function(t){var e=s(t.components);return a().createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a().createElement(a().Fragment,{},e)}},m=a().forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?a().createElement(d,l(l({ref:e},c),{},{components:n})):a().createElement(d,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(67294),a=n.n(r),o=n(86010),i="tabItem_Ymn6";function l(t){var e=t.children,n=t.hidden,r=t.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},e)}},65488:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(72389),u=n(67392),c=n(7094),s=n(12466),f="tabList__CuJ",p="tabItem_LNqP";function m(t){var e,n,l=t.lazy,m=t.block,d=t.defaultValue,b=t.values,g=t.groupId,v=t.className,k=o().Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,u.l)(h,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(e=null!=d?d:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:k[0].props.value;if(null!==N&&!h.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),O=w.tabGroupChoices,T=w.setTabGroupChoices,E=(0,a.useState)(N),x=E[0],j=E[1],C=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=O[g];null!=P&&P!==x&&h.some((function(t){return t.value===P}))&&j(P)}var _=function(t){var e=t.currentTarget,n=C.indexOf(e),r=h[n].value;r!==x&&(D(e),j(r),null!=g&&T(g,String(r)))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r,a=C.indexOf(t.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,i=C.indexOf(t.currentTarget)-1;n=null!=(o=C[i])?o:C[C.length-1]}null==(e=n)||e.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",f)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},h.map((function(t){var e=t.value,n=t.label,a=t.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return C.push(t)},onKeyDown:S,onFocus:_,onClick:_},a,{className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),l?(0,a.cloneElement)(k.filter((function(t){return t.props.value===x}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function d(t){var e=(0,l.Z)();return o().createElement(m,(0,r.Z)({key:String(e)},t))}},55496:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(65488),n(85162),["components"]),l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},u=void 0,c={unversionedId:"framework/notification/configuration",id:"framework/notification/configuration",title:"Configuration",description:"A topic can be configured in settings.ts via the key notification.(topic)",source:"@site/docs/framework/notification/010_configuration.md",sourceDirName:"framework/notification",slug:"/framework/notification/configuration",permalink:"/docs/framework/notification/configuration",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/notification/010_configuration.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/notification/introduction"},next:{title:"Create notifications",permalink:"/docs/framework/notification/use-notification-service"}},s={},f=[],p={toc:f};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A topic can be configured in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../configuration/introduction"},"settings.ts"))," via the key ",(0,o.kt)("strong",{parentName:"p"},"notification.(topic)"),"\nThe configuration parameters of a topic are the following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ttl")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of milliseconds the notification will remain in the topic before being automatically deleted. Set the value to 0 for no expiration",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example:")," Set the TTL to 5000 for the sucess topic, so that the notification is only displayed during 5 seconds.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," 5000 (0 for error topic)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"max")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of notification stored in a topic. If a new notification is added when the topic is full, the oldest notification is deleted. Set the value to 0 for no limit",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," 5 (0 for error topic)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"persist")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the notification should survive after a route change.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," true")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The values in settings.ts becomes the default values for a topic.\nThese values can be overridden when sending a notification")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// content of settings.ts\nexport default {\n  notification: {\n    error: { // 'error' is the name of the topic\n      ttl: 0,\n      max: 3,\n      persist: true\n    },\n    success: {\n      ttl: 2000,\n      max: 3,\n      persist: false\n    },\n    'login-error': {\n      ttl: 0,\n      max: 1,\n    },\n  }\n};\n")))}m.isMDXComponent=!0}}]);