"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[22804],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n.n(r),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(12466),s=n(45315),u=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,c=m(e),p=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),f=p[0],b=p[1],v=g({queryString:s,groupId:u}),k=v[0],x=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=y[0],N=y[1],E=function(){var e=null!=k?k:w;return h({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),N(e)}),[x,N,c]),tabValues:c}}var b=n(72389),v="tabList__CuJ",k="tabItem_LNqP";function x(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==a&&(d(t),s(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":a===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",v)},o().createElement(x,(0,r.Z)({},e,t)),o().createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return o().createElement(w,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return u}});var r=n(67294),a=n.n(r),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),u=function(e){var t=e.path,n=e.craPath,r=e.nextPath,l=e.branch,u=void 0===l?"react18":l;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra"+(n||t)+"\n")),a().createElement(i.Z,{value:"next"},a().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next"+(r||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var r=n(67294),a=n.n(r),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,c=e.view,d=void 0===c?"editor":c,p="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var h="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:p,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,r=e.craName,s=e.craModules,u=e.nextName,c=e.nextModules,d=e.height,p=void 0===d?600:d,m=e.branch,h=void 0===m?"master":m;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(l,{name:r||t,type:"getting-started/cra",view:"preview",branch:h,height:p,modules:s||n})),a().createElement(i.Z,{value:"next"},a().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:h,height:p,modules:c||n})))};t.ZP=l},63139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094)),l=n(85162),s=n(32779),u=(n(20819),["components"]),c={id:"error-handling",title:"Handling errors",sidebar_label:"Handling errors"},d=void 0,p={unversionedId:"getting-started/error-handling",id:"getting-started/error-handling",title:"Handling errors",description:"Two types of errors can occur:",source:"@site/docs/getting-started/008_error-handling.md",sourceDirName:"getting-started",slug:"/getting-started/error-handling",permalink:"/docs/getting-started/error-handling",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/008_error-handling.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"error-handling",title:"Handling errors",sidebar_label:"Handling errors"},sidebar:"someSidebar",previous:{title:"Centralizing notifications",permalink:"/docs/getting-started/notification"},next:{title:"Internationalization",permalink:"/docs/getting-started/i18n"}},m={},h=[{value:"Final result",id:"final-result",level:2},{value:"Error boundaries",id:"error-boundaries",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Error handling",id:"error-handling-1",level:2},{value:"Next step",id:"next-step",level:2}],g={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Two types of errors can occur:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Those thrown when rendering a component. To handle this type of error, React recommends implementing ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")),"."),(0,o.kt)("li",{parentName:"ul"},"Standard errors launched by your javascript code (try/catch) or returned by the server.")),(0,o.kt)("p",null,"This step consists in handling this kind of errors."),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'The third product is now named "Invalid product". Clicking on this product simulates an error when the page is rendered.',(0,o.kt)("br",null),'\nThe "Buy" button now calls an API that returns an HTTP 400 error indicating that the product is not available at the moment')),(0,o.kt)(s.g0,{name:"step07-error-handling",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"error-boundaries"},"Error boundaries"),(0,o.kt)("p",null,"You can pass a component to ","<","App /",">"," (via the prop ErrorBoundaryComponent). This component will be displayed when an error occurs during the rendering."),(0,o.kt)("p",null,"First, let's create this component"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},"You can pass a component to ",(0,o.kt)("code",null,"<App />")," (via the prop ",(0,o.kt)("code",null,"ErrorBoundaryComponent"),"). This component will be displayed when an error occurs during the rendering.",(0,o.kt)("p",null),"First, let's create this component:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)")),(0,o.kt)("p",null,"Update the entry point to pass this component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/index.tsx\n")),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"When an error occurs (outside the rendering phase), we recommend displaying it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />"),".",(0,o.kt)("br",null),"\nTo simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The product ${req.body.name} is not available at this moment"\n}\n')),(0,o.kt)("p",null),"Let's update the product details page to:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'simulate an error during the rendering phase when the product name is "Phone Invalid"'),(0,o.kt)("li",{parentName:"ul"},"display the error from the server via the NotificationCenter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,"You can pass a component to ",(0,o.kt)("code",null,"<","NextApp /",">")," (via the prop ",(0,o.kt)("code",null,"ErrorBoundaryComponent"),"). This component will be displayed when an error occurs during the rendering."),(0,o.kt)("p",null),"First, let's create this component:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)")),(0,o.kt)("p",null,"Update the entry point to pass this component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/_app.tsx\n")),(0,o.kt)("h2",{id:"error-handling-1"},"Error handling"),(0,o.kt)("p",null,"When an error occurs (outside the rendering phase), we recommend displaying it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />"),".",(0,o.kt)("br",null),"\nTo simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The product ${req.body.name} is not available at this moment"\n}\n')),(0,o.kt)("p",null),"Let's update the product details page to:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'simulate an error during the rendering phase when the product name is "Phone Invalid"'),(0,o.kt)("li",{parentName:"ul"},"display the error from the server via the NotificationCenter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("code",null,"<App />")," automatically detects any unhandled error and sends a notification on the error topic.",(0,o.kt)("br",null),"Therefore if you don't specify the ",(0,o.kt)("code",null,"onError")," callback, this notification is sent:",(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  topic: 'error',\n  payload: {\n    message: ${error.message}\n  }\n  ...\n}\n"))),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"i18n"},"In the next step")),", we adapt the application to support different languages (internationalization and localization)."))}f.isMDXComponent=!0}}]);