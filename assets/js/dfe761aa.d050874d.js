"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[97468],{34673:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),o=n.n(r),l=n(86010),i=n(63366),s=n(72389),p=n(86043),u="details_lb9f",m="isBrowser_bmU9",d="collapsibleContent_i85q",c=["summary","children"];function k(e){return!!e&&("SUMMARY"===e.tagName||k(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function f(e){var t=e.summary,n=e.children,f=(0,i.Z)(e,c),N=(0,s.Z)(),h=(0,r.useRef)(null),b=(0,p.u)({initialState:!f.open}),y=b.collapsed,v=b.setCollapsed,x=(0,r.useState)(f.open),w=x[0],A=x[1];return o().createElement("details",(0,a.Z)({},f,{ref:h,open:w,"data-collapsed":y,className:(0,l.Z)(u,N&&m,f.className),onMouseDown:function(e){k(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;k(t)&&g(t,h.current)&&(e.preventDefault(),y?(v(!1),A(!0)):v(!0))}}),null!=t?t:o().createElement("summary",null,"Details"),o().createElement(p.z,{lazy:!1,collapsed:y,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){v(e),A(!e)}},o().createElement("div",{className:d},n)))}var N="details_b_Ee";function h(e){var t=Object.assign({},e);return o().createElement(f,(0,a.Z)({},t,{className:(0,l.Z)("alert alert--info",N,t.className)}))}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(87462),r=n(67294),o=n.n(r),l=n(86010),i=n(72389),s=n(67392),p=n(7094),u=n(12466),m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,k=e.defaultValue,g=e.values,f=e.groupId,N=e.className,h=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===k?k:null!=(t=null!=k?k:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),w=x.tabGroupChoices,A=x.setTabGroupChoices,S=(0,r.useState)(v),C=S[0],T=S[1],E=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=w[f];null!=D&&D!==C&&b.some((function(e){return e.value===D}))&&T(D)}var R=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==C&&(j(t),T(a),null!=f&&A(f,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",m)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:R,onClick:R},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function k(e){var t=(0,i.Z)();return o().createElement(c,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},69443:function(e,t,n){n(67294),n(32779)},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return p}});var a=n(67294),r=n.n(a),o=n(64094),l=n(85162),i=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,l=e.branch,i=void 0===l?"master":l,s=e.type,p=void 0===s?"examples":s,u=e.view,m="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+p+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===u?"editor":u);o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var d="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},p=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,p=e.nextName,u=e.nextModules,m=e.height,d=void 0===m?600:m,c=e.branch,k=void 0===c?"master":c;return r().createElement(o.Z,null,r().createElement(l.Z,{value:"cra"},r().createElement(i,{name:a||t,type:"getting-started/cra",view:"preview",branch:k,height:d,modules:s||n})),r().createElement(l.Z,{value:"next"},r().createElement(i,{name:p||t,type:"getting-started/next",view:"preview",branch:k,height:d,modules:u||n})))};t.ZP=i},38067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"App",title:"App",sidebar_label:"App"},s=void 0,p={unversionedId:"framework-api/application/components/App",id:"framework-api/application/components/App",title:"App",description:"`` is the main component that bootstraps the Oneki.js framework_** on top of Create React App_",source:"@site/docs/framework-api/application/components/App.md",sourceDirName:"framework-api/application/components",slug:"/framework-api/application/components/App",permalink:"/docs/framework-api/application/components/App",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework-api/application/components/App.md",tags:[],version:"current",frontMatter:{id:"App",title:"App",sidebar_label:"App"},sidebar:"someSidebar",previous:{title:"xhr",permalink:"/docs/api/functions/xhr"},next:{title:"AppErrorBoundary",permalink:"/docs/framework-api/classes/AppErrorBoundary"}},u={},m=[{value:"Custom redux store",id:"custom-redux-store",level:4},{value:"Properties",id:"properties",level:3}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<App/>")," is the main component that bootstraps the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Create React App"))),(0,o.kt)("p",null,"This component is generally the external component of an application and is responsible for:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creating a Redux store:  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"store")," property is present, ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses the one referenced by the property.  "),(0,o.kt)("li",{parentName:"ul"},"Otherwise, ",(0,o.kt)("strong",{parentName:"li"},"<","App/",">")," creates the Redux store. The initial state of the store is the object referenced by the property ",(0,o.kt)("inlineCode",{parentName:"li"},"initialState"),".  "))),(0,o.kt)("li",{parentName:"ul"},"creating a React Router. By default, it creates a ",(0,o.kt)("strong",{parentName:"li"},"BrowserRouter")," that can be changed / configured via the ",(0,o.kt)("strong",{parentName:"li"},"settings.ts")," file  "),(0,o.kt)("li",{parentName:"ul"},"creating and injecting global ",(0,o.kt)("strong",{parentName:"li"},"services")," in the Redux store  "),(0,o.kt)("li",{parentName:"ul"},"creating a context that contains three elements:  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"router"),": accessible via useRouter()  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,o.kt)("h4",{id:"custom-redux-store"},"Custom redux store"),(0,o.kt)("p",null,"A custom Redux store can be created by calling the helper ",(0,o.kt)("inlineCode",{parentName:"p"},"createReduxStore")," from Oneki.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,o.kt)("p",null,"This helper expects an initial state and an array of Redux middlewares."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("font",{size:"2"},(0,o.kt)("i",null,"(Mandatory properties are in bold)")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ErrorBoundaryComponent"),(0,o.kt)("td",{parentName:"tr",align:null},"ComponentType<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/types/ErrorBoundaryComponentProps"},"ErrorBoundaryComponentProps"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"The component displayed when an error occurs during the rendering phase",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," no error boundary component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"i18nNs"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/i18n/introduction"},"More info here")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialLocale"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Property to indicate the language to be used by default",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialState"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnyState"},"AnyState")," ","|"," Promise<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnyState"},"AnyState"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"The initial state passed to the Redux store when it is created",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadingComponent"),(0,o.kt)("td",{parentName:"tr",align:null},"ElementType<any",">"),(0,o.kt)("td",{parentName:"tr",align:null},"A component expected by ",(0,o.kt)("code",null,"<Suspense",">")," (used to display a loading indicator)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"<DefaultLoadingComponent /",">"),' that displays "Loading..."')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"A list of services that will be available globally in the application.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/service/introduction"},"More info here")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"settings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppSettings"},"AppSettings")," ","|"," Promise<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppSettings"},"AppSettings"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"Settings is a object usually defined in the file ",(0,o.kt)("code",null,"src/settings.ts"),(0,o.kt)("br",null),"Data defined in settings.ts is available throughout the application and contains configuration data.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/configuration/introduction"},"More info here")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"store"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AppStore"},"AppStore"),"<any, AnyAction",">"),(0,o.kt)("td",{parentName:"tr",align:null},"A standard Redux store, ",(0,o.kt)("strong",{parentName:"td"},"but created via the helper")," ",(0,o.kt)("code",null,"createReduxStore")," from onekijs",(0,o.kt)("br",null),"The store must be created via this helper so onekijs can control it",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," A store created by ",(0,o.kt)("code",null,"<App/",">")," (recommended)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"translations"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/framework-api/interfaces/AnonymousObject"},"AnonymousObject"),"<string",">",">"),(0,o.kt)("td",{parentName:"tr",align:null},"An object containing the translations",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/framework/i18n/introduction"},"More info here")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to:")," ",(0,o.kt)("code",null,"undefined"))))))}c.isMDXComponent=!0},99505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return N},metadata:function(){return b},toc:function(){return v}});var a=n(87462),r=n(63366),o=n(67294),l=n.n(o),i=n(3905),s=(n(44996),n(64094)),p=n(85162),u=n(32779),m=(n(69443),n(34673)),d=n(95665),c=n.n(d),k=function(e){var t=e.title,n=e.folder,a=e.file,r=e.children;return l().createElement(m.Z,{summary:l().createElement("summary",null,t)},l().createElement("div",null,r,l().createElement(u.YK,{name:n}),l().createElement(c(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/master/examples/"+n+"/"+a+"\n")))},g=n(38067),f=["components"],N={id:"app",title:"Application",sidebar_label:"Application"},h=void 0,b={unversionedId:"framework/application/app",id:"framework/application/app",title:"Application",description:"Oneki.js provides a component to wrap the entire application. This component starts the framework and is usually the most external component of an application.",source:"@site/docs/framework/application/040-app.md",sourceDirName:"framework/application",slug:"/framework/application/app",permalink:"/docs/framework/application/app",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/application/040-app.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"app",title:"Application",sidebar_label:"Application"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/introduction"},next:{title:"Layout",permalink:"/docs/framework/layout/layout"}},y={},v=[{value:"Parameters",id:"parameters",level:3},{value:"Custom redux store",id:"custom-redux-store",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:4},{value:"Example with settings, store and global services",id:"example-with-settings-store-and-global-services",level:4}],x={toc:v};function w(e){var t=e.components,n=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Oneki.js")," provides a component to wrap the entire application. This component starts the framework and is usually the most external component of an application."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," component is not the same for applications built from ",(0,i.kt)("strong",{parentName:"p"},"Create React App")," or ",(0,i.kt)("strong",{parentName:"p"},"Next.js"),".",(0,i.kt)("br",null),"\nSelect the correct tab to view the documentation for what you are using.")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"cra",mdxType:"TabItem"},(0,i.kt)(k,{title:"Basic example",folder:"cra-app-basic",file:"src/index.tsx",mdxType:"ExampleDetails"}),(0,i.kt)(k,{title:"App with settings, store and global services",folder:"cra-app-custom-store",file:"src/index.tsx",mdxType:"ExampleDetails"},"This example shows how to create the properties expected by ","<App/>",(0,i.kt)("p",null,"  In general, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," property is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," while the other properties (store, services, ...) are initialized by the ",(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," itself."),(0,i.kt)("p",null,"  The example below initializes an ",(0,i.kt)("inlineCode",{parentName:"p"},"<App/>")," by passing these properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Settings"),": An object defined in the file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/settings.ts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A redux store"),": Normally the redux store should not be initialized manually, but this example shows how it's possible to inject our own store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A global service"),": A global service is instantied only once and accessible everywhere in the application. The role of a service is to manipulate the Redux store. Check ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"../service/introduction"},"this documentation"))," for more info."))),(0,i.kt)(g.default,{mdxType:"ApiApp"})),(0,i.kt)(p.Z,{value:"next",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<NextApp/",">")," is the main component that bootstraps the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Next.js"))),(0,i.kt)("p",null,"This component is generally the external component of an application (defined in the file ",(0,i.kt)("strong",{parentName:"p"},"_","app.js"),") and is responsible of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creating a Redux store:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"store")," property is present, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses the one referenced by the property."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, ",(0,i.kt)("strong",{parentName:"li"},"<","App/",">")," creates the Redux store. The initial state of the store is the object referenced by the property ",(0,i.kt)("inlineCode",{parentName:"li"},"initialState"),"."))),(0,i.kt)("li",{parentName:"ul"},"creating and injecting global ",(0,i.kt)("strong",{parentName:"li"},"services")," in the Redux store"),(0,i.kt)("li",{parentName:"ul"},"creating a context that contains three elements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"router"),": accessible via useRouter()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,i.kt)("p",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<NextApp\n  settings={settings}\n  store={store}\n  initialState={initialState}\n  services={[services]}\n  LoadingComponent={LoadingComponent}\n  Component={Component}\n  pageProps={pageProps}\n/>\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppSettings"},"AppSettings")),(0,i.kt)("td",{parentName:"tr",align:null},"Settings is a object usually defined in the file ",(0,i.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),(0,i.kt)("br",null),"Data defined in settings.ts is available throughout the application and contains configuration data.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../configuration/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"store")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AppStore"},"AppStore")),(0,i.kt)("td",{parentName:"tr",align:null},"A standard Redux store, ",(0,i.kt)("strong",{parentName:"td"},"but created via the helper")," ",(0,i.kt)("inlineCode",{parentName:"td"},"createReduxStore")," from onekijs",(0,i.kt)("br",null),"The store must be created via this helper so onekijs can control it (See below for more info)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": A store created by ",(0,i.kt)("strong",{parentName:"td"},"<NextApp/",">")," (recommended)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialState")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState")," ","|"," Promise<",(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/AnyState"},"AnyState"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial state is passed to the Redux store when it is created",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"services")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../api/interfaces/Service"},"Service","[","]")),(0,i.kt)("td",{parentName:"tr",align:null},"A list of services that will be available globally in the application.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../service/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": []")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"LoadingComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (used to display a loading indicator)",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/oneki/onekijs/blob/master/packages/onekijs-framework/src/app/DefaultLoadingComponent.tsx"},"DefaultLoadingComponent"),' that displays "Loading..."')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"initialLocale")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Property to indicate the language to be used by default.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"translations")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"An object containing the translations.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"i18nNs")),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../i18n/introduction"},"More info here")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ErrorBoundaryComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"ComponentType <",(0,i.kt)("a",{parentName:"td",href:"../../api/types/ErrorBoundaryComponentProps"},"ErrorBoundaryComponentProps"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"The component displayed when an error occurs during the rendering phase",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults to"),": no error boundary component")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Component")),(0,i.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,i.kt)("td",{parentName:"tr",align:null},"The Page component injected by ",(0,i.kt)("inlineCode",{parentName:"td"},"Next.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"pageProps")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"The Page props injected by ",(0,i.kt)("inlineCode",{parentName:"td"},"Next.js"))))),(0,i.kt)("h4",{id:"custom-redux-store"},"Custom redux store"),(0,i.kt)("p",null,"A custom Redux store is created by calling the helper createReduxStore from Oneki.js",(0,i.kt)("br",null),"\nThe helper expects an initial state and an array of Redux middlewares."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,i.kt)("p",null),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"minimal-example"},"Minimal example"),(0,i.kt)(u.ZP,{name:"next-app-basic",height:"500",modules:["/src/pages/_app.tsx"],mdxType:"Sandbox"}),(0,i.kt)("h4",{id:"example-with-settings-store-and-global-services"},"Example with settings, store and global services"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This example creates a custom global service that uses annotations.\nTo enable the support of annotations in typescript, you must install this babel plugin:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"yarn add @babel/plugin-proposal-decorators -D\n")),(0,i.kt)("p",{parentName:"admonition"},"and add the file .babelrc at the root of the project with the following content:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["next/babel"],\n  "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]\n}\n'))),(0,i.kt)(u.ZP,{name:"next-app-custom-store",height:"450",modules:["/src/pages/_app.tsx","/src/settings.ts","/src/modules/core/services/LoadingService.ts","/src/pages/index.tsx"],mdxType:"Sandbox"}))))}w.isMDXComponent=!0}}]);