"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[97468],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r().createContext({}),u=function(t){var e=r().useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r().createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r().createElement(r().Fragment,{},e)}},c=r().forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?r().createElement(k,i(i({ref:e},p),{},{components:n})):r().createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}c.displayName="MDXCreateElement"},13919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},44996:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return o}});var a=n(52263),r=n(13919);function l(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,l=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,i=void 0!==o&&o,s=l.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return p?t+u:u}(l,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,l().withBaseUrl)(t,e)}},58215:function(t,e,n){var a=n(67294),r=n.n(a);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(83117),r=n(67294),l=n.n(r),o=n(72389),i=n(79443);var s=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},p=n(89521),u=n(86010),d="tabItem_1uMI";function m(t){var e,n,a,o=t.lazy,i=t.block,m=t.defaultValue,c=t.values,k=t.groupId,g=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:N.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,p.lx)(h,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(e=null!=m?m:null==(n=N.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=N[0])?void 0:a.props.value;if(null!==b&&!h.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),y=v.tabGroupChoices,x=v.setTabGroupChoices,w=(0,r.useState)(b),A=w[0],C=w[1],S=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=y[k];null!=T&&T!==A&&h.some((function(t){return t.value===T}))&&C(T)}var E=function(t){var e=t.currentTarget,n=S.indexOf(e),a=h[n].value;a!==A&&(j(e),C(a),null!=k&&x(k,a))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=S.indexOf(t.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(t.currentTarget)-1;n=S[r]||S[S.length-1]}null==(e=n)||e.focus()};return l().createElement("div",{className:"tabs-container"},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},h.map((function(t){var e=t.value,n=t.label;return l().createElement("li",{role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":A===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:D,onFocus:E,onClick:E},null!=n?n:e)}))),o?(0,r.cloneElement)(N.filter((function(t){return t.props.value===A}))[0],{className:"margin-vert--md"}):l().createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==A})}))))}function c(t){var e=(0,o.Z)();return l().createElement(m,(0,a.Z)({key:String(e)},t))}},79443:function(t,e,n){var a=n(67294),r=(0,a.createContext)(void 0);e.Z=r},64094:function(t,e,n){var a=n(67294),r=n.n(a),l=n(26396);n(58215);e.Z=function(t){var e=t.children;return console.log("children",e),r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},e)}},69443:function(t,e,n){n(67294),n(32779)},32779:function(t,e,n){var a=n(67294),r=n.n(a);e.Z=function(t){var e=t.name,n=t.height,a=void 0===n?500:n,l=t.modules,o=t.branch,i=void 0===o?"master":o,s=t.type,p=void 0===s?"examples":s,u=t.view,d="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+p+"/"+e+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===u?"editor":u);l&&(d+="&module=",l.forEach((function(t,e){e>0&&(d+=","),d+=t})));var m="onekijs-"+e.split("/").join("-");return r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:m,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},36839:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return N}});var a=n(83117),r=n(80102),l=n(67294),o=n.n(l),i=n(3905),s=(n(44996),n(64094)),p=n(58215),u=n(32779),d=function(t){return o().createElement(u.Z,(0,a.Z)({type:"cra"},t))},m=(n(69443),["components"]),c={id:"app",title:"Application",sidebar_label:"Application"},k=void 0,g={unversionedId:"framework/application/app",id:"framework/application/app",isDocsHomePage:!1,title:"Application",description:"Oneki.js provides a component to wrap the entire application. This component starts the framework and is usually the most external component of an application.",source:"@site/docs/framework/application/040-app.md",sourceDirName:"framework/application",slug:"/framework/application/app",permalink:"/docs/framework/application/app",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/application/040-app.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"app",title:"Application",sidebar_label:"Application"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/introduction"},next:{title:"Layout",permalink:"/docs/framework/layout/layout"}},N=[{value:"Parameters",id:"parameters",children:[{value:"Custom redux store",id:"custom-redux-store",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"Minimal example",id:"minimal-example",children:[],level:3},{value:"App with settings, store and global services",id:"app-with-settings-store-and-global-services",children:[],level:3},{value:"Parameters",id:"parameters-1",children:[{value:"Custom redux store",id:"custom-redux-store-1",children:[],level:4}],level:3}],level:2},{value:"Examples",id:"examples-1",children:[{value:"Minimal example",id:"minimal-example-1",children:[],level:4},{value:"Example with settings, store and global services",id:"example-with-settings-store-and-global-services",children:[],level:4}],level:2}],h={toc:N};function f(t){var e=t.components,n=(0,r.Z)(t,m);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Oneki.js")," provides a component to wrap the entire application. This component starts the framework and is usually the most external component of an application."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," component is not the same for applications built from ",(0,i.kt)("strong",{parentName:"p"},"Create React App")," or ",(0,i.kt)("strong",{parentName:"p"},"Next.js"),".",(0,i.kt)("br",null),"\nSelect the correct tab to view the documentation for what you are using."))),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"cra",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," is the main component that bootstraps the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Create React App"))),(0,i.kt)("p",null,"This component is generally the external component of an application and is responsible for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creating a Redux store:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"store")," property is present, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses the one referenced by the property."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, ",(0,i.kt)("strong",{parentName:"li"},"<","App/",">")," creates the Redux store. The initial state of the store is the object referenced by the property ",(0,i.kt)("inlineCode",{parentName:"li"},"initialState"),"."))),(0,i.kt)("li",{parentName:"ul"},"creating a React Router. By default, it creates a ",(0,i.kt)("strong",{parentName:"li"},"BrowserRouter")," that can be changed / configured via the ",(0,i.kt)("strong",{parentName:"li"},"settings.ts")," file"),(0,i.kt)("li",{parentName:"ul"},"creating and injecting global ",(0,i.kt)("strong",{parentName:"li"},"services")," in the Redux store"),(0,i.kt)("li",{parentName:"ul"},"creating a context that contains three elements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"router"),": accessible via useRouter()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<App\n  settings={settings}\n  store={store}\n  initialState={initialState}\n  services={[service]}\n  history={history}\n  LoadingComponent={LoadingComponent}\n")),(0,i.kt)("p",null),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppSettings"},"AppSettings")),(0,i.kt)("td",{parentName:"tr",align:null},"Settings is a object usually defined in the file ",(0,i.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),(0,i.kt)("br",null),"Data defined in settings.ts is available throughout the application and contains configuration data.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../configuration/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"store")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppStore"},"AppStore")),(0,i.kt)("td",{parentName:"tr",align:null},"A standard Redux store, ",(0,i.kt)("strong",{parentName:"td"},"but created via the helper")," ",(0,i.kt)("inlineCode",{parentName:"td"},"createReduxStore")," from onekijs",(0,i.kt)("br",null),"The store must be created via this helper so onekijs can control it (See below for more info)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": A store created by ",(0,i.kt)("strong",{parentName:"td"},"<NextApp/",">")," (recommended)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialState")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState")," ","|"," Promise<",(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial state is passed to the Redux store when it is created",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"services")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/Service"},"Service","[","]")),(0,i.kt)("td",{parentName:"tr",align:null},"A list of services that will be available globally in the application.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../service/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": []")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"LoadingComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (used to display a loading indicator)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"DefaultLoadingComponent"),' that displays "Loading...')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"history")),(0,i.kt)("td",{parentName:"tr",align:null},"History"),(0,i.kt)("td",{parentName:"tr",align:null},"An object expected by React Router. Must be an history type it supports",(0,i.kt)("br",null),"If history is null, ",(0,i.kt)("strong",{parentName:"td"},"<App/",">")," checks if an history is defined in the Settings",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": BrowserHistory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"LoadingComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (used to display a loading indicator)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/oneki/onekijs/blob/master/packages/onekijs-framework/src/app/DefaultLoadingComponent.tsx"},"DefaultLoadingComponent"),' that displays "Loading..."')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialLocale")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Property to indicate the language to be used by default.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"translations")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"An object containing the translations.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"i18nNs")),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ErrorBoundaryComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ComponentType <",(0,i.kt)("a",{parentName:"td",href:"../../api/types/ErrorBoundaryComponentProps"},"ErrorBoundaryComponentProps"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The component displayed when an error occurs during the rendering phase",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": no error boundary component")))),(0,i.kt)("h4",{id:"custom-redux-store"},"Custom redux store"),(0,i.kt)("p",null,"A custom Redux store can be created by calling the helper ",(0,i.kt)("inlineCode",{parentName:"p"},"createReduxStore")," from Oneki.js",(0,i.kt)("br",null),"\nThis helper expects an initial state and an array of Redux middlewares."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,i.kt)("p",null),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,i.kt)(d,{name:"cra-app-basic",height:"600",modules:["/src/index.js"],mdxType:"CraSandbox"}),(0,i.kt)("p",null),(0,i.kt)("h3",{id:"app-with-settings-store-and-global-services"},"App with settings, store and global services"),(0,i.kt)("p",null,"This example shows how to create the properties expected by ",(0,i.kt)("strong",{parentName:"p"},"<App/",">"),"\nIn genral, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," property is passed to ",(0,i.kt)("strong",{parentName:"p"},"<App/",">")," while the other properties (store, services, ...) are initialized by the ",(0,i.kt)("strong",{parentName:"p"},"<App/",">")," itself."),(0,i.kt)("p",null,"The example below initializes an ",(0,i.kt)("strong",{parentName:"p"},"<App/",">")," by passing these properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Settings"),": An object defined in the file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/settings.ts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A redux store"),": Normally the redux store should not be initialized manually, but this example shows how it's possible to inject our own store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A global service"),": A global service is instantied only once and accessible everywhere in the application. The role of a service is to manipulate the Redux store. Check ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../service/introduction"},"this documentation"))," for more info.")),(0,i.kt)(u.Z,{name:"cra-app-custom-store",height:"600",modules:["/src/index.tsx","/src/settings.ts"],mdxType:"Sandbox"})),(0,i.kt)(p.Z,{value:"next",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<NextApp/",">")," is the main component that bootstraps the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Next.js"))),(0,i.kt)("p",null,"This component is generally the external component of an application (defined in the file ",(0,i.kt)("strong",{parentName:"p"},"_","app.js"),") and is responsible of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creating a Redux store:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"store")," property is present, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses the one referenced by the property."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, ",(0,i.kt)("strong",{parentName:"li"},"<","App/",">")," creates the Redux store. The initial state of the store is the object referenced by the property ",(0,i.kt)("inlineCode",{parentName:"li"},"initialState"),"."))),(0,i.kt)("li",{parentName:"ul"},"creating and injecting global ",(0,i.kt)("strong",{parentName:"li"},"services")," in the Redux store"),(0,i.kt)("li",{parentName:"ul"},"creating a context that contains three elements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"router"),": accessible via useRouter()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<NextApp\n  settings={settings}\n  store={store}\n  initialState={initialState}\n  services={[services]}\n  LoadingComponent={LoadingComponent}\n  Component={Component}\n  pageProps={pageProps}\n/>\n")),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppSettings"},"AppSettings")),(0,i.kt)("td",{parentName:"tr",align:null},"Settings is a object usually defined in the file ",(0,i.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),(0,i.kt)("br",null),"Data defined in settings.ts is available throughout the application and contains configuration data.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../configuration/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"store")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppStore"},"AppStore")),(0,i.kt)("td",{parentName:"tr",align:null},"A standard Redux store, ",(0,i.kt)("strong",{parentName:"td"},"but created via the helper")," ",(0,i.kt)("inlineCode",{parentName:"td"},"createReduxStore")," from onekijs",(0,i.kt)("br",null),"The store must be created via this helper so onekijs can control it (See below for more info)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": A store created by ",(0,i.kt)("strong",{parentName:"td"},"<NextApp/",">")," (recommended)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialState")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState")," ","|"," Promise<",(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial state is passed to the Redux store when it is created",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"services")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/Service"},"Service","[","]")),(0,i.kt)("td",{parentName:"tr",align:null},"A list of services that will be available globally in the application.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../service/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": []")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"LoadingComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (used to display a loading indicator)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/oneki/onekijs/blob/master/packages/onekijs-framework/src/app/DefaultLoadingComponent.tsx"},"DefaultLoadingComponent"),' that displays "Loading..."')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialLocale")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Property to indicate the language to be used by default.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"translations")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"An object containing the translations.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"i18nNs")),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ErrorBoundaryComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ComponentType <",(0,i.kt)("a",{parentName:"td",href:"../../api/types/ErrorBoundaryComponentProps"},"ErrorBoundaryComponentProps"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The component displayed when an error occurs during the rendering phase",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": no error boundary component")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Component")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"The Page component injected by ",(0,i.kt)("inlineCode",{parentName:"td"},"Next.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"pageProps")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"The Page props injected by ",(0,i.kt)("inlineCode",{parentName:"td"},"Next.js"))))),(0,i.kt)("h4",{id:"custom-redux-store-1"},"Custom redux store"),(0,i.kt)("p",null,"A custom Redux store is created by calling the helper createReduxStore from Oneki.js",(0,i.kt)("br",null),"\nThe helper expects an initial state and an array of Redux middlewares."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,i.kt)("p",null),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"examples-1"},"Examples"),(0,i.kt)("h4",{id:"minimal-example-1"},"Minimal example"),(0,i.kt)(u.Z,{name:"next-app-basic",height:"500",modules:["/src/pages/_app.tsx"],mdxType:"Sandbox"}),(0,i.kt)("h4",{id:"example-with-settings-store-and-global-services"},"Example with settings, store and global services"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example creates a custom global service that uses annotations.\nTo enable the support of annotations in typescript, you must install this babel plugin:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"yarn add @babel/plugin-proposal-decorators -D\n")),(0,i.kt)("p",{parentName:"div"},"and add the file .babelrc at the root of the project with the following content:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["next/babel"],\n  "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]\n}\n')))),(0,i.kt)(u.Z,{name:"next-app-custom-store",height:"450",modules:["/src/pages/_app.tsx","/src/settings.ts","/src/modules/core/services/LoadingService.ts","/src/pages/index.tsx"],mdxType:"Sandbox"}))))}f.isMDXComponent=!0}}]);