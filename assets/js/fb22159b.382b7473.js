"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[16902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},d=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a().createElement(h,i(i({ref:t},s),{},{components:n})):a().createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n.n(r),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(72389),u=n(67392),s=n(7094),p=n(12466),c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,h=e.defaultValue,g=e.values,f=e.groupId,b=e.className,k=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,E=x.setTabGroupChoices,O=(0,a.useState)(N),T=O[0],j=O[1],C=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=w[f];null!=Z&&Z!==T&&v.some((function(e){return e.value===Z}))&&j(Z)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==T&&(P(t),j(r),null!=f&&E(f,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",c)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:S,onClick:S},a,{className:(0,l.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,i.Z)();return o().createElement(d,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var r=n(67294),a=n.n(r),o=n(64094),l=n(85162),i=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,l=e.branch,i=void 0===l?"master":l,u=e.type,s=void 0===u?"examples":u,p=e.view,c=void 0===p?"editor":p,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",d="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+c;o&&(d+="&module=",o.forEach((function(e,t){t>0&&(d+=","),d+=e})));var h="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+i+"/"+s+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:m,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:d,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,r=e.craName,u=e.craModules,s=e.nextName,p=e.nextModules,c=e.height,m=void 0===c?600:c,d=e.branch,h=void 0===d?"master":d;return a().createElement(o.Z,null,a().createElement(l.Z,{value:"cra"},a().createElement(i,{name:r||t,type:"getting-started/cra",view:"preview",branch:h,height:m,modules:u||n})),a().createElement(l.Z,{value:"next"},a().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:h,height:m,modules:p||n})))};t.ZP=i},46693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(85162),u=n(32779),s=["components"],p={id:"secure-page",title:"Secure component",sidebar_label:"Secure component"},c=void 0,m={unversionedId:"framework/auth/authz/secure-page",id:"framework/auth/authz/secure-page",title:"Secure component",description:"Oneki.js provides an HOC to secure any component:",source:"@site/docs/framework/auth/authz/020_secure-page.md",sourceDirName:"framework/auth/authz",slug:"/framework/auth/authz/secure-page",permalink:"/docs/framework/auth/authz/secure-page",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authz/020_secure-page.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"secure-page",title:"Secure component",sidebar_label:"Secure component"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/auth/introduction"},next:{title:"Security context",permalink:"/docs/framework/auth/authz/security-context"}},d={},h=[{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Example",id:"example",level:2}],g={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," provides an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://reactjs.org/docs/higher-order-components.html"},"HOC")))," to secure any component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const SecureComponent = secure(Component, validator, options);\n")),(0,o.kt)("p",null,"If the user is not yet logged in, this HOC redirects him to the login page",(0,o.kt)("br",null),"\nIf the connected user doesn't have the right to display the page, it displays an error"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Component"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:null},"the component to protect. Only authorized users will see it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"validator")),(0,o.kt)("td",{parentName:"tr",align:null},"(securityContext) => boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"By default, a user is authorized if he's connected.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"validator")," is a function to apply more complex logic like authorizing the user based on an attribute in the security context")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options.",(0,o.kt)("br",null),"ErrorComponent")),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null},"The component to display if the user is not authorized or not yet logged in.",(0,o.kt)("br",null),(0,o.kt)("br",null),"By default",(0,o.kt)("ul",null,(0,o.kt)("li",null,"if he user is not yet logged in, he's redirected to the login page"),(0,o.kt)("li",null,"if he's not authorized, a dummy component is displayed")))))),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"SecureComponent"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null},"The component secured")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example shows two protected pages and one public page"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"index"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is accessible to anyone")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"restricted"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is accessible to any logged-in users")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"admin"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is only accessible to logged-in users with the role ",(0,o.kt)("strong",{parentName:"td"},"admin"))))),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(u.ZP,{name:"cra-auth-form",height:"600",modules:["/src/modules/core/layouts/AppLayout.tsx","/src/pages/restricted.tsx","/src/pages/admin.tsx","/src/pages/login.tsx"],mdxType:"Sandbox"})),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(u.ZP,{name:"next-auth-form",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))))}f.isMDXComponent=!0}}]);