"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[5296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r().createContext({}),m=function(e){var t=r().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r().createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},d=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?r().createElement(k,o(o({ref:t},p),{},{components:n})):r().createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r().createElement.apply(null,l)}return r().createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294),r=n.n(a);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n.n(a),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",p="tabItemActive_2DSg";var m=37,u=39;var c=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,c=e.values,d=e.groupId,k=e.className,g=l(),h=g.tabGroupChoices,b=g.setTabGroupChoices,N=(0,a.useState)(i),f=N[0],v=N[1],y=a.Children.toArray(e.children),x=[];if(null!=d){var w=h[d];null!=w&&w!==f&&c.some((function(e){return e.value===w}))&&v(w)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=c[n].value;v(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case m:var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r().createElement("div",{className:"tabs-container"},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},k)},c.map((function(e){var t=e.value,n=e.label;return r().createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:j,onClick:j},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r().createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,n){var a=n(7294),r=(0,a.createContext)(void 0);t.Z=r},4094:function(e,t,n){var a=n(7294),r=n.n(a),i=n(5064);n(8215);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},2779:function(e,t,n){var a=n(7294),r=n.n(a);t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,i=e.modules,l=e.branch,o=void 0===l?"master":l,s=e.type,p=void 0===s?"example":s,m=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+o+"/"+p+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===m?"editor":m);i&&(u+="&module=",i.forEach((function(e,t){t>0&&(u+=","),u+=e})));var c="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:u,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:c,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},5975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return k},default:function(){return b}});var a,r=n(3117),i=n(102),l=(n(7294),n(3905)),o=n(4094),s=n(8215),p=n(2779),m=["components"],u={id:"app",title:"Application",sidebar_label:"Application"},c=void 0,d={unversionedId:"overview/app",id:"overview/app",isDocsHomePage:!1,title:"Application",description:"Oneki.js provides a component to wrap the complete Application. This component bootstraps the framework and is generally the outermost component of an application",source:"@site/docs/overview/040-app.md",sourceDirName:"overview",slug:"/overview/app",permalink:"/docs/overview/app",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/040-app.md",version:"current",sidebarPosition:40,frontMatter:{id:"app",title:"Application",sidebar_label:"Application"},sidebar:"someSidebar",previous:{title:"Adding a service",permalink:"/docs/overview/getting-started/service"},next:{title:"Introduction",permalink:"/docs/framework/introduction"}},k=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"Examples",id:"examples-1",children:[{value:"Minimal example",id:"minimal-example-1",children:[]},{value:"App with settings, store, services and fallback",id:"app-with-settings-store-services-and-fallback",children:[]}]}],g=(a="CraSandbox",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),h={toc:k};function b(e){var t=e.components,n=(0,i.Z)(e,m);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," provides a component to wrap the complete Application. This component bootstraps the framework and is generally the outermost component of an application"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Tabs")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Application component")," is not the same for apps built on top of ",(0,l.kt)("strong",{parentName:"p"},"Create React App")," or ",(0,l.kt)("strong",{parentName:"p"},"Next.js"),(0,l.kt)("br",null),"\nSelect the correct tab to display the documentation for what you use."))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<NextApp\n  settings={settings}\n  store={store}\n  initialState={initialState}\n  services={[service]}\n  LoadingComponent={LoadingComponent}\n  Component={Component}\n  pageProps={pageProps}\n/>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NextApp"))," is the main component that bootstraps the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Next.js")),(0,l.kt)("br",null),"\nThis component is generally the outermost component of an application (defined in the file ","_","app.js) and is responsible of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"creating a Redux store:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If props.",(0,l.kt)("strong",{parentName:"li"},"store")," is present, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses this one"),(0,l.kt)("li",{parentName:"ul"},"Otherwise, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"App"))," creates a Redux store with props.",(0,l.kt)("strong",{parentName:"li"},"initialState")," as initialState"))),(0,l.kt)("li",{parentName:"ul"},"creating and injecting the ",(0,l.kt)("strong",{parentName:"li"},"services")," in the Redux store"),(0,l.kt)("li",{parentName:"ul"},"creating a context that contains three elements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"router"),": accessible via useOnekiRouter()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Settings is a object generally defined in the file settings.js",(0,l.kt)("br",null),"Data defined in settings.js are available across the application and contains configuration data.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": {}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store"),(0,l.kt)("td",{parentName:"tr",align:null},"ReduxStore"),(0,l.kt)("td",{parentName:"tr",align:null},"A standard Redux store, but created via the helper createReduxStore from onekijs",(0,l.kt)("br",null),"The store must be created via this helper so onekijs can control it",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": A store created by ",(0,l.kt)("inlineCode",{parentName:"td"},"NextApp")," (recommended)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialState"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial state is used by ",(0,l.kt)("inlineCode",{parentName:"td"},"NextApp")," when it creates a Redux store",(0,l.kt)("br",null),"This initalState becomes the initialState of the Redux store.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"services"),(0,l.kt)("td",{parentName:"tr",align:null},"[Service]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of Services that will be available globally across the application.",(0,l.kt)("br",null),"Check ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../framework/service/introduction"},"this documentation"))," for more info. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": []")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoadingComponent"),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (use to display a loading indicator)",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"DefaultLoadingComponent"),' that displays "Loading..."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Component"),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},"The Page component injected by ",(0,l.kt)("inlineCode",{parentName:"td"},"Next.js"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageProps"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"The Page props injected by ",(0,l.kt)("inlineCode",{parentName:"td"},"Next.js"))))),(0,l.kt)("h4",{id:"custom-redux-store"},"Custom redux store"),(0,l.kt)("p",null,"A custom Redux store is created by calling the helper createReduxStore from Oneki.js",(0,l.kt)("br",null),"\nThe helper expects an initial state and an array of Redux middlewares."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"minimal-example"},"Minimal example"),(0,l.kt)(p.Z,{name:"next-app-basic",height:"500",modules:["/src/pages/_app.js","/src/pages/index.js","/src/pages/users.js","/package.json"],mdxType:"Sandbox"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"example-with-custom-settings"},"Example with custom settings"),(0,l.kt)(p.Z,{name:"next-auth-oidc",height:"450",modules:["/src/pages/_app.js","/src/settings.js","/src/pages/index.js"],mdxType:"Sandbox"})),(0,l.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<App\n  settings={settings}\n  store={store}\n  initialState={initialState}\n  services={[service]}\n  history={history}\n  LoadingComponent={LoadingComponent}\n/>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"App"))," is the main component that bootstraps the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Oneki.js framework"))," on top of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Create React App")),(0,l.kt)("br",null),"\nThis component is generally the outermost component of an application and is responsible of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"creating a Redux store:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If props.",(0,l.kt)("strong",{parentName:"li"},"store")," is present, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"App"))," doesn't create a Redux store but uses this one"),(0,l.kt)("li",{parentName:"ul"},"Otherwise, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"App"))," creates a Redux store with props.",(0,l.kt)("strong",{parentName:"li"},"initialState")," as initialState"))),(0,l.kt)("li",{parentName:"ul"},"creating a React Router. By default, it creates a ",(0,l.kt)("strong",{parentName:"li"},"BrowserRouter"),", but this can be configured via the file ",(0,l.kt)("strong",{parentName:"li"},"settings.js")),(0,l.kt)("li",{parentName:"ul"},"creating and injecting the ",(0,l.kt)("strong",{parentName:"li"},"services")," in the Redux store"),(0,l.kt)("li",{parentName:"ul"},"creating a context that contains three elements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"router"),": accessible via useRouter()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"settings"),": accessible via useSettings()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"redux store"),": accessible via useStore()")))),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mandatory parameters are in bold")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Settings is a object generally defined in the file settings.js",(0,l.kt)("br",null),"Data defined in settings.js are available across the application and contains configuration data.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": {}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store"),(0,l.kt)("td",{parentName:"tr",align:null},"ReduxStore"),(0,l.kt)("td",{parentName:"tr",align:null},"A standard Redux store, but created via the helper createReduxStore from onekijs",(0,l.kt)("br",null),"The store must be created via this helper so onekijs can control it",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": A store created by ",(0,l.kt)("inlineCode",{parentName:"td"},"App")," (recommended)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialState"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial state is used by ",(0,l.kt)("inlineCode",{parentName:"td"},"App")," when it creates a Redux store",(0,l.kt)("br",null),"This initalState becomes the initialState of the Redux store.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"services"),(0,l.kt)("td",{parentName:"tr",align:null},"[Service]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of Services that will be available globally across the application.",(0,l.kt)("br",null),"Check ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"../framework/service/introduction"},"this documentation"))," for more info. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": []")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"history"),(0,l.kt)("td",{parentName:"tr",align:null},"History"),(0,l.kt)("td",{parentName:"tr",align:null},"An object expected by React Router. Must be one of the history it supports",(0,l.kt)("br",null),"If history is null, ",(0,l.kt)("inlineCode",{parentName:"td"},"App")," checks if an history is defined in the Settings",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": BrowserHistory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoadingComponent"),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},"A component expected by <Suspense",">"," (use to display a loading indicator)",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"DefaultLoadingComponent"),' that displays "Loading..."')))),(0,l.kt)("h4",{id:"custom-redux-store-1"},"Custom redux store"),(0,l.kt)("p",null,"A custom Redux store is created by calling the helper createReduxStore from Oneki.js",(0,l.kt)("br",null),"\nThe helper expects an initial state and an array of Redux middlewares."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = createReduxStore((initialState = {}), (middlewares = []));\n")),(0,l.kt)("h2",{id:"examples-1"},"Examples"),(0,l.kt)("h3",{id:"minimal-example-1"},"Minimal example"),(0,l.kt)(p.Z,{name:"cra-app-basic",height:"600",modules:["/src/index.js"],mdxType:"Sandbox"}),(0,l.kt)("h3",{id:"app-with-settings-store-services-and-fallback"},"App with settings, store, services and fallback"),(0,l.kt)("p",null,"This example shows how to create the props expected by ",(0,l.kt)("inlineCode",{parentName:"p"},"App"),"\nGenerally, only the prop settings is passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"App")," and the other props (store, services, ...) are initialized by the ",(0,l.kt)("inlineCode",{parentName:"p"},"App")," itself."),(0,l.kt)("p",null,"This example initialized an ",(0,l.kt)("inlineCode",{parentName:"p"},"App")," by passing these props:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Settings"),": the settings are defined in the file ",(0,l.kt)("inlineCode",{parentName:"li"},"src/settings.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"A redux store"),": Normally the redux store should not be initialized manually, but this example shows how it's possible to inject our own store"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"A global service"),": A global service is instantied only once and accessible anywhere in the application. The role of a service is to manipulate the Redux store. Check ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"../framework/service/introduction"},"this documentation"))," for more info.")),(0,l.kt)(g,{name:"application/settings-store-services",height:"600",modules:["/src/index.js","/src/settings.js"],mdxType:"CraSandbox"}))))}b.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);