"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[93461],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r().createContext({}),d=function(e){var t=r().useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r().createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return a?r().createElement(k,s(s({ref:t},u),{},{components:a})):r().createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r().createElement.apply(null,l)}return r().createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a.n(n),o=a(86010),l="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,n),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(87462),r=a(67294),o=a.n(r),l=a(86010),s=a(72389),i=a(67392),u=a(7094),d=a(12466),m="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a,s=e.lazy,c=e.block,k=e.defaultValue,h=e.values,g=e.groupId,f=e.className,N=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),S=w.tabGroupChoices,x=w.setTabGroupChoices,O=(0,r.useState)(y),j=O[0],T=O[1],E=[],P=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=S[g];null!=D&&D!==j&&b.some((function(e){return e.value===D}))&&T(D)}var R=function(e){var t=e.currentTarget,a=E.indexOf(t),n=b[a].value;n!==j&&(P(t),T(n),null!=g&&x(g,String(n)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=E.indexOf(e.currentTarget)+1;a=null!=(n=E[r])?n:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;a=null!=(o=E[l])?o:E[E.length-1]}null==(t=a)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",m)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return o().createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:R,onClick:R},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(N.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function k(e){var t=(0,s.Z)();return o().createElement(c,(0,n.Z)({key:String(t)},e))}},78926:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=(a(65488),a(85162),["components"]),s={id:"introduction",title:"Oneki.js hooks",sidebar_label:"Table of contents"},i=void 0,u={unversionedId:"hooks/introduction",id:"hooks/introduction",title:"Oneki.js hooks",description:"",source:"@site/docs/hooks/001-introduction.md",sourceDirName:"hooks",slug:"/hooks/introduction",permalink:"/docs/hooks/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/001-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Oneki.js hooks",sidebar_label:"Table of contents"}},d={},m=[{value:"Configuration hooks",id:"configuration-hooks",level:4},{value:"AJAX hooks",id:"ajax-hooks",level:4},{value:"Notification hooks",id:"notification-hooks",level:4},{value:"Service hooks",id:"service-hooks",level:4}],p={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Oneki.js"))," provides several hooks to speed up the developpement and to hide most of the complexity of Redux, Redux Saga and Immer."),(0,o.kt)("h4",{id:"configuration-hooks"},"Configuration hooks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/configuration/use-settings"},"useSettings")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSettings"))," returns the whole object passed as a prop to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"App"))," (generally defined in settings.js)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/configuration/use-settings"},"useSetting")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSetting"))," returns a specific entry from Settings")))),(0,o.kt)("h4",{id:"ajax-hooks"},"AJAX hooks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-get"},"useGet")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useGet"))," sends an ajax GET request and returns back the data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-get"},"useSecureGet")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSecureGet"))," is similar to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useGet"))," but adds a ",(0,o.kt)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-post"},"usePost")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"usePost"))," sends an ajax POST request and returns back the payload received from the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-post"},"useSecurePost")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSecurePost"))," is similar to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"usePost"))," but adds a ",(0,o.kt)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-put"},"usePut")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"usePut"))," sends an ajax PUT request and returns back the payload received from the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-put"},"useSecurePut")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSecurePut"))," is similar to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"usePut"))," but adds a ",(0,o.kt)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-delete"},"useDelete")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useDelete"))," sends an ajax DELETE request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/data/use-delete"},"useSecureDelete")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSecureDelete"))," is similar to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useDelete"))," but adds a ",(0,o.kt)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")))),(0,o.kt)("h4",{id:"notification-hooks"},"Notification hooks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/notification/use-notification-service"},"useNotificationService")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useNotificationService"))," provides a central service to send notification.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/notification/use-notifications"},"useNotifications")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useNotifications"))," listens on a topic that contains notifications.",(0,o.kt)("br",null)," As soon as the topic is updated, the component does a re-render")))),(0,o.kt)("h4",{id:"service-hooks"},"Service hooks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/service/local-service"},"useLocalService")),(0,o.kt)("td",{parentName:"tr",align:null},"The goal of ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two kinds of methods: ",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"Reducer methods")),": the role of these methods is to update the local state of the component. These methods are generally very simple."),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"Saga methods")),":",(0,o.kt)("ul",null,(0,o.kt)("li",null,"These methods are generally asynchronous and more complex"),(0,o.kt)("li",null,"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",null,"A saga method never updates the local state by itself. It always calls a ",(0,o.kt)("em",{parentName:"td"},"Reducer")," method to do that.")))))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/service/global-service"},"useReduxService")),(0,o.kt)("td",{parentName:"tr",align:null},"The goal of ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useReduxService"))," is to create a singleton with two kinds of methods:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"Reducer methods")),": the role of these methods is to update the redux state. These methods are generally very simple."),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"Saga methods")),(0,o.kt)("ul",null,(0,o.kt)("li",null,"These methods are generally asynchronous and more complex."),(0,o.kt)("li",null,"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,o.kt)("li",null,"A saga method never updates the Redux state by itself. It always calls a ",(0,o.kt)("em",{parentName:"td"},"Reducer")," method to do that.")))))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../framework/service/global-service"},"useReduxSelector")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useReduxSelector"))," is similar to ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"useSelector"))," from ",(0,o.kt)("strong",{parentName:"td"},"React Redux")," but is tailored to be used with a Redux Store built by Oneki.js")))))}c.isMDXComponent=!0}}]);