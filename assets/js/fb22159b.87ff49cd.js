"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[16902],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a().createElement(f,i(i({ref:t},s),{},{components:n})):a().createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294),a=n.n(r);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n.n(a),l=n(72389),i=n(79443);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),c=n(86010),p="tabItem_1uMI";function d(e){var t,n,r,l=e.lazy,i=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),N=y.tabGroupChoices,x=y.setTabGroupChoices,w=(0,a.useState)(v),O=w[0],T=w[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==O&&k.some((function(e){return e.value===C}))&&T(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==O&&(j(t),T(r),null!=f&&x(f,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},k.map((function(e){var t=e.value,n=e.label;return o().createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:P,onClick:P},null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return o().createElement(d,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=n(67294),a=(0,r.createContext)(void 0);t.Z=a},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(26396);n(58215);t.Z=function(e){var t=e.children;return console.log("children",t),a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{Y:function(){return o}});var r=n(67294),a=n.n(r),o=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};t.Z=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,l=e.branch,i=void 0===l?"master":l,u=e.type,s=void 0===u?"examples":u,c=e.view,p="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);o&&(p+="&module=",o.forEach((function(e,t){t>0&&(p+=","),p+=e})));var d="onekijs-"+t.split("/").join("-");return a().createElement("iframe",{src:p,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},46693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(58215),u=n(32779),s=["components"],c={id:"secure-page",title:"Secure component",sidebar_label:"Secure component"},p=void 0,d={unversionedId:"framework/auth/authz/secure-page",id:"framework/auth/authz/secure-page",isDocsHomePage:!1,title:"Secure component",description:"Oneki.js provides an HOC to secure any component:",source:"@site/docs/framework/auth/authz/020_secure-page.md",sourceDirName:"framework/auth/authz",slug:"/framework/auth/authz/secure-page",permalink:"/docs/framework/auth/authz/secure-page",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authz/020_secure-page.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"secure-page",title:"Secure component",sidebar_label:"Secure component"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/auth/introduction"},next:{title:"Security context",permalink:"/docs/framework/auth/authz/security-context"}},m=[{value:"Parameters",id:"parameters",children:[{value:"Inputs",id:"inputs",children:[],level:4},{value:"Outputs",id:"outputs",children:[],level:4}],level:3},{value:"Example",id:"example",children:[],level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," provides an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("a",{parentName:"em",href:"https://reactjs.org/docs/higher-order-components.html"},"HOC")))," to secure any component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const SecureComponent = secure(Component, validator, options);\n")),(0,o.kt)("p",null,"If the user is not yet logged in, this HOC redirects him to the login page",(0,o.kt)("br",null),"\nIf the connected user doesn't have the right to display the page, it displays an error"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Component"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:null},"the component to protect. Only authorized users will see it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"validator")),(0,o.kt)("td",{parentName:"tr",align:null},"(securityContext) => boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"By default, a user is authorized if he's connected.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"validator")," is a function to apply more complex logic like authorizing the user based on an attribute in the security context")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Object with non mandatory attributes",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults"),": ","{","}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options.",(0,o.kt)("br",null),"ErrorComponent")),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null},"The component to display if the user is not authorized or not yet logged in.",(0,o.kt)("br",null),(0,o.kt)("br",null),"By default",(0,o.kt)("ul",null,(0,o.kt)("li",null,"if he user is not yet logged in, he's redirected to the login page"),(0,o.kt)("li",null,"if he's not authorized, a dummy component is displayed")))))),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"SecureComponent"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null},"The component secured")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example shows two protected pages and one public page"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"index"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is accessible to anyone")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"restricted"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is accessible to any logged-in users")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"admin"),(0,o.kt)("td",{parentName:"tr",align:null},"This page is only accessible to logged-in users with the role ",(0,o.kt)("strong",{parentName:"td"},"admin"))))),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(u.Z,{name:"cra-auth-form",height:"600",modules:["/src/modules/core/layouts/AppLayout.tsx","/src/pages/restricted.tsx","/src/pages/admin.tsx","/src/pages/login.tsx"],mdxType:"Sandbox"})),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(u.Z,{name:"next-auth-form",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))))}h.isMDXComponent=!0}}]);