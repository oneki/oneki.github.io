"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[22804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a().createContext({}),d=function(e){var t=a().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a().createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a().createElement(h,s(s({ref:t},c),{},{components:n})):a().createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294),a=n.n(r);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n.n(a),i=n(72389),s=n(79443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(89521),d=n(86010),u="tabItem_1uMI";function p(e){var t,n,r,i=e.lazy,s=e.block,p=e.defaultValue,m=e.values,h=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,c.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,a.useState)(b),T=x[0],E=x[1],C=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=N[h];null!=O&&O!==T&&f.some((function(e){return e.value===O}))&&E(O)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;r!==T&&(j(t),E(r),null!=h&&w(h,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},g)},f.map((function(e){var t=e.value,n=e.label;return o().createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:I,onClick:I},null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o().createElement(p,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=n(67294),a=(0,r.createContext)(void 0);t.Z=a},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(26396);n(58215);t.Z=function(e){var t=e.children;return console.log("children",t),a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{Y:function(){return o}});var r=n(67294),a=n.n(r),o=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};t.Z=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,i=e.branch,s=void 0===i?"master":i,l=e.type,c=void 0===l?"examples":l,d=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+s+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===d?"editor":d);o&&(u+="&module=",o.forEach((function(e,t){t>0&&(u+=","),u+=e})));var p="onekijs-"+t.split("/").join("-");return a().createElement("iframe",{src:u,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},63139:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(44996),n(64094)),s=n(58215),l=n(32779),c=["components"],d={id:"error-handling",title:"Handling errors",sidebar_label:"Handling errors"},u=void 0,p={unversionedId:"getting-started/error-handling",id:"getting-started/error-handling",isDocsHomePage:!1,title:"Handling errors",description:"Two types of errors can occur:",source:"@site/docs/getting-started/008_error-handling.md",sourceDirName:"getting-started",slug:"/getting-started/error-handling",permalink:"/docs/getting-started/error-handling",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/008_error-handling.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"error-handling",title:"Handling errors",sidebar_label:"Handling errors"},sidebar:"someSidebar",previous:{title:"Centralizing notifications",permalink:"/docs/getting-started/notification"},next:{title:"Internationalization",permalink:"/docs/getting-started/i18n"}},m=[{value:"Final result",id:"final-result",children:[],level:2},{value:"Error boundaries",id:"error-boundaries",children:[],level:2},{value:"Error handling",id:"error-handling",children:[],level:2},{value:"Error handling",id:"error-handling-1",children:[],level:2},{value:"Next step",id:"next-step",children:[],level:2}],h={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Two types of errors can occur:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Those thrown when rendering a component. To handle this type of error, React recommends implementing ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")),"."),(0,o.kt)("li",{parentName:"ul"},"Standard errors launched by your javascript code (try/catch) or returned by the server.")),(0,o.kt)("p",null,"This step consists in handling this kind of errors."),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"New in this step")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The third product is now named "Invalid product". Clicking on this product simulates an error when the page is rendered.',(0,o.kt)("br",null),'\nThe "Buy" button now calls an API that returns an HTTP 400 error indicating that the product is not available at the moment'))),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(l.Z,{name:"step07-error-handling",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"}),(0,o.kt)("p",null,(0,o.kt)("i",null,(0,o.kt)("b",null,"Note"),": Codesandbox runs the project in dev mode. Therefore, the ",(0,o.kt)("code",null,"<ErrorBoundary />")," component is hidden by the stacktrace displayed by create react app",(0,o.kt)("br",null),'Just press "ESC" to hide this stacktrace.'))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(l.Z,{name:"step07-error-handling",type:"getting-started/next",view:"preview",height:"600",modules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,o.kt)("h2",{id:"error-boundaries"},"Error boundaries"),(0,o.kt)("p",null,"You can pass a component to ","<","App /",">"," (via the prop ErrorBoundaryComponent). This component will be displayed when an error occurs during the rendering."),(0,o.kt)("p",null,"First, let's create this component"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},"You can pass a component to ",(0,o.kt)("code",null,"<App />")," (via the prop ",(0,o.kt)("code",null,"ErrorBoundaryComponent"),"). This component will be displayed when an error occurs during the rendering.",(0,o.kt)("p",null),"First, let's create this component:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)"))),(0,o.kt)("p",null,"Update the entry point to pass this component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/index.tsx\n")),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"When an error occurs (outside the rendering phase), we recommend displaying it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />"),".",(0,o.kt)("br",null),"\nTo simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The product ${req.body.name} is not available at this moment"\n}\n')),(0,o.kt)("p",null),"Let's update the product details page to:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'simulate an error during the rendering phase when the product name is "Phone Invalid"'),(0,o.kt)("li",{parentName:"ul"},"display the error from the server via the NotificationCenter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx\n"))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,"You can pass a component to ",(0,o.kt)("code",null,"<","NextApp /",">")," (via the prop ",(0,o.kt)("code",null,"ErrorBoundaryComponent"),"). This component will be displayed when an error occurs during the rendering."),(0,o.kt)("p",null),"First, let's create this component:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/modules/core/components/ErrorBoundary.tsx\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)"))),(0,o.kt)("p",null,"Update the entry point to pass this component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/_app.tsx\n")),(0,o.kt)("h2",{id:"error-handling-1"},"Error handling"),(0,o.kt)("p",null,"When an error occurs (outside the rendering phase), we recommend displaying it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />"),".",(0,o.kt)("br",null),"\nTo simulate an error from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "The product ${req.body.name} is not available at this moment"\n}\n')),(0,o.kt)("p",null),"Let's update the product details page to:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'simulate an error during the rendering phase when the product name is "Phone Invalid"'),(0,o.kt)("li",{parentName:"ul"},"display the error from the server via the NotificationCenter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step07-error-handling/src/pages/products/%5BproductId%5D/index.tsx\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using an Oneki.js hook, if you don't specify a callback to handle errors, it will automatically send the following notification"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  topic: 'error',\n  payload: {\n    message: ${error.message}\n  }\n  ...\n}\n")),(0,o.kt)("p",{parentName:"div"},"Therefore, the onError callback can be omitted"))),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"i18n"},"In the next step")),", we adapt the application to support different languages (internationalization and localization)."))}g.isMDXComponent=!0}}]);