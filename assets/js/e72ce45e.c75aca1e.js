"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51137],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r().createContext({}),p=function(e){var t=r().useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return a?r().createElement(k,i(i({ref:t},u),{},{components:a})):r().createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r().createElement.apply(null,o)}return r().createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a.n(n),l=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,n),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(87462),r=a(67294),l=a.n(r),o=a(86010),i=a(72389),s=a(67392),u=a(7094),p=a(12466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,k=e.defaultValue,h=e.values,g=e.groupId,f=e.className,b=l().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===k?k:null!=(t=null!=k?k:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,E=y.setTabGroupChoices,T=(0,r.useState)(x),j=T[0],O=T[1],P=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=w[g];null!=A&&A!==j&&v.some((function(e){return e.value===A}))&&O(A)}var S=function(e){var t=e.currentTarget,a=P.indexOf(t),n=v[a].value;n!==j&&(D(t),O(n),null!=g&&E(g,String(n)))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=P.indexOf(e.currentTarget)+1;a=null!=(n=P[r])?n:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;a=null!=(l=P[o])?l:P[P.length-1]}null==(t=a)||t.focus()};return l().createElement("div",{className:(0,o.Z)("tabs-container",d)},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l().createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):l().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function k(e){var t=(0,i.Z)();return l().createElement(c,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,a){var n=a(67294),r=a.n(n),l=a(65488);a(85162);t.Z=function(e){var t=e.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,a){a.d(t,{YK:function(){return s},g0:function(){return u}});var n=a(67294),r=a.n(n),l=a(64094),o=a(85162),i=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,l=e.modules,o=e.branch,i=void 0===o?"master":o,s=e.type,u=void 0===s?"examples":s,p=e.view,d=void 0===p?"editor":p,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",c="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;l&&(c+="&module=",l.forEach((function(e,t){t>0&&(c+=","),c+=e})));var k="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+i+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:m,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:k,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:c,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,a=e.modules,n=e.craName,s=e.craModules,u=e.nextName,p=e.nextModules,d=e.height,m=void 0===d?600:d,c=e.branch,k=void 0===c?"master":c;return r().createElement(l.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(i,{name:n||t,type:"getting-started/cra",view:"preview",branch:k,height:m,modules:s||a})),r().createElement(o.Z,{value:"next"},r().createElement(i,{name:u||t,type:"getting-started/next",view:"preview",branch:k,height:m,modules:p||a})))};t.ZP=i},91356:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(65488),a(85162),a(32779)),i=["components"],s={id:"use-get",title:"Data retrieval",sidebar_label:"Data retrieval"},u=void 0,p={unversionedId:"framework/data/use-get",id:"framework/data/use-get",title:"Data retrieval",description:"Oneki.js provides several hooks to retrieve data from a server via an AJAX GET request",source:"@site/docs/framework/data/010-use-get.md",sourceDirName:"framework/data",slug:"/framework/data/use-get",permalink:"/docs/framework/data/use-get",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/data/010-use-get.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"use-get",title:"Data retrieval",sidebar_label:"Data retrieval"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/data/introduction"},next:{title:"Data creation",permalink:"/docs/framework/data/use-post"}},d={},m=[{value:"Hooks",id:"hooks",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3},{value:"Cache example",id:"cache-example",level:3},{value:"Polling example",id:"polling-example",level:3},{value:"loading delay example",id:"loading-delay-example",level:3},{value:"onError example",id:"onerror-example",level:3},{value:"onError with notification example",id:"onerror-with-notification-example",level:3}],c={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," provides several hooks to retrieve data from a server via an AJAX GET request"),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [data, loading, refresh] = useGet(url, options);\nconst [data, loading, refresh] = useSecureGet(url, options);\nconst [data, loading, refresh] = useCache(url, options);\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useGet"))," hook executes an ajax GET request and returns back the data.",(0,l.kt)("br",null),"\nThe ajax request is made during the mount of the component and each time the URL is updated.",(0,l.kt)("br",null),"\nThe data is stored in the component state and ",(0,l.kt)("strong",{parentName:"p"},"not")," in the redux store"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useSecureGet"))," is similar to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useGet"))," but adds a authorization header ",(0,l.kt)("em",{parentName:"p"},"Bearer")," which contains the token received and stored by ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useCache"))," hook is similar to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useGet"))," except that the data is cached in the redux store (one entry in the store per URL)",(0,l.kt)("br",null),"\nTherefore, the ajax request is only executed if the cache is not yet present in the store or if the cache is no longer valid."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url"),"*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the URL to which the Ajax request is sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional object to specify additional options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onError")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"if onError is a function, this function is called if the HTTP response is a 4xx or 5xx (Promise / async allowed)"),(0,l.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL")),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": the hook sends a notification to the ",(0,l.kt)("inlineCode",{parentName:"td"},"error")," topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"delayLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait before setting the loading flag to true. This value is useful to not display a loading indicator if the request is executed rapidly.",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"(only supported by useGet). The value returned while the AJAX request is pending.",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the credentials to be sent in the request. See ",(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/Auth"},"Auth"),".",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no credentials sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"the HTTP headers to add in the request",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no headers added in the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Params in the url.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": if the user is /user/:userId, options.params could be ","{","userId: '1'","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Query params to add the URL.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": If the final url is /users?name=Doe, options.query will be ","{","name: 'Doe'","}")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The options object also accept these additionnal parameters supported by the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch API")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"headers,\ncredentials,\ncache,\nredirect,\nreferrer,\nreferrerPolicy,\nintegrity,\nkeepalive,\nsignal\n"))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"the data returned by the server.",(0,l.kt)("br",null),"The value is null while the ajax request is pending")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the ajax request is pending")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"refresh")),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"a function that can be called to force a re-execution of useGet")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,l.kt)("p",null,"The minimal example shows how to retrieve data from a backend server.",(0,l.kt)("br",null),"\nA loading indicator (Loading ...) is displayed while the AJAX request is pending."),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users.tsx\n")),(0,l.kt)("h3",{id:"cache-example"},"Cache example"),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-cache.tsx\n")),(0,l.kt)("h3",{id:"polling-example"},"Polling example"),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-pooling.tsx\n")),(0,l.kt)("h3",{id:"loading-delay-example"},"loading delay example"),(0,l.kt)("p",null,"Show a loading indicator only if the data is not retrieved in less than 100 ms.",(0,l.kt)("br",null)),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-delay.tsx\n")),(0,l.kt)("h3",{id:"onerror-example"},"onError example"),(0,l.kt)("p",null,"This is an example showing how to use the onError handler"),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-on-error.tsx\n")),(0,l.kt)("h3",{id:"onerror-with-notification-example"},"onError with notification example"),(0,l.kt)("p",null,"This example shows how to handle onError using the notification service"),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/list-users-error-notification.tsx\n")))}k.isMDXComponent=!0}}]);