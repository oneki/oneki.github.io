"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[65367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a().createElement(f,l(l({ref:t},s),{},{components:n})):a().createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a().createElement.apply(null,i)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n.n(r),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(72389),u=n(67392),s=n(7094),c=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,f=e.defaultValue,h=e.values,k=e.groupId,b=e.className,v=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,a.useState)(N),_=T[0],O=T[1],j=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=x[k];null!=S&&S!==_&&g.some((function(e){return e.value===S}))&&O(S)}var I=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==_&&(C(t),O(r),null!=k&&E(k,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,i=j.indexOf(e.currentTarget)-1;n=null!=(o=j[i])?o:j[j.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",p)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:I,onClick:I},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function f(e){var t=(0,l.Z)();return o().createElement(m,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return console.log("children",t),a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},69443:function(e,t,n){n(67294),n(32779)},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var r=n(67294),a=n.n(r),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,u=e.type,s=void 0===u?"examples":u,c=e.view,p="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);o&&(p+="&module=",o.forEach((function(e,t){t>0&&(p+=","),p+=e})));var d="onekijs-"+t.split("/").join("-");return a().createElement("iframe",{src:p,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})},u=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,r=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,f=void 0===m?"master":m;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(l,{name:r||t,type:"getting-started/cra",view:"preview",branch:f,height:d,modules:u||n})),a().createElement(i.Z,{value:"next"},a().createElement(l,{name:s||t,type:"getting-started/next",view:"preview",branch:f,height:d,modules:c||n})))};t.ZP=l},95434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(65488),n(85162),n(69443),["components"]),l={id:"userinfo",title:"Userinfo endpoint",sidebar_label:"User info"},u=void 0,s={unversionedId:"framework/auth/authn/userinfo",id:"framework/auth/authn/userinfo",title:"Userinfo endpoint",description:"The userinfo endpoint is used to retrieve the security context of the logged-in user. The security context often contains attributes like name, firstname, email, roles, ...",source:"@site/docs/framework/auth/authn/003_userinfo.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/userinfo",permalink:"/docs/framework/auth/authn/userinfo",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/003_userinfo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"userinfo",title:"Userinfo endpoint",sidebar_label:"User info"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/framework/auth/authn/introduction"},next:{title:"Services",permalink:"/docs/framework/auth/authn/services"}},c={},p=[{value:"Token",id:"token",level:2},{value:"Token extraction",id:"token-extraction",level:2},{value:"Example",id:"example",level:6}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"userinfo endpoint")," is used to retrieve the security context of the logged-in user. The security context often contains attributes like name, firstname, email, roles, ..."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This endpoint is the only configuration parameter that is common for all types of authentication")),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"userinfo endpoint")," parameter can have three formats:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"String (URL)"),(0,o.kt)("td",{parentName:"tr",align:null},"a URL String. ",(0,o.kt)("br",null),"If the URL is relative (e.g: ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"/api/userinfo")),"), it's prefixed with the ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("em",{parentName:"strong"},"server.baseUrl"))," from ",(0,o.kt)("inlineCode",{parentName:"td"},"src/settings.ts"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Oneki.js")," preforms an AJAX GET request on this URL to retrieve the profile of the connected user"),(0,o.kt)("td",{parentName:"tr",align:null},"/api/userinfo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"String (token...)"),(0,o.kt)("td",{parentName:"tr",align:null},"A string that starts with ",(0,o.kt)("inlineCode",{parentName:"td"},"token"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Oneki.js")," retrieves the profile of the connected user from the (JWT) Token present in the global state.",(0,o.kt)("br",null),"The global state is populated with the token during the authentication",(0,o.kt)("br",null),(0,o.kt)("br",null),"Must be one of these values:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"token://id_token")),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"token://access_token")),(0,o.kt)("li",null,(0,o.kt)("strong",{parentName:"td"},"token"))),(0,o.kt)("a",{parentName:"td",href:"#token"},"see token")),(0,o.kt)("td",{parentName:"tr",align:null},"token://id_token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},"Instead of a String, a function with the format ",(0,o.kt)("strong",{parentName:"td"},"(context) => URL")," can be specified. ",(0,o.kt)("strong",{parentName:"td"},"Oneki.js")," executes it to retrieve the URL",(0,o.kt)("br",null),(0,o.kt)("br",null),"This function can be ",(0,o.kt)("strong",{parentName:"td"},"async")),(0,o.kt)("td",{parentName:"tr",align:null},"(context) => ",(0,o.kt)("a",{parentName:"td",href:"https://oneki.org/api/userinfo"},"https://oneki.org/api/userinfo"))))),(0,o.kt)("h2",{id:"token"},"Token"),(0,o.kt)("p",null,"When the value starts with ",(0,o.kt)("strong",{parentName:"p"},"token"),", it means that the backend doesn't expose a userinfo endpoint, but the security context can be retrieved from a token existing in the global state (under the key ",(0,o.kt)("strong",{parentName:"p"},"auth.token"),") with the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id_token": "JWT_ID_TOKEN_IN_BASE64",\n  "access_token": "JWT_ACCESS_TOKEN_IN_BASE64",\n  ...\n}\n')),(0,o.kt)("p",null,"The token is stored in the global state via a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#callback"},"callback function"))),(0,o.kt)("h2",{id:"token-extraction"},"Token extraction"),(0,o.kt)("p",null,"if the value is "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token://id_token"),", then the token JWT_ID_TOKEN_IN_BASE64 is parsed and the claims become the security context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token://access_token"),", then the token JWT_ACCESS_TOKEN_IN_BASE64 is parsed and the claims become the security context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token"),", then the whole response becomes the security context (there is no parsing)")),(0,o.kt)("h6",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"userinfoEndpoint: '/api/whoami'\n// or\nuserInfoEndpoint: (context) => '/api/whoami'\n// or\nuserInfoEndpoint: 'token://id_token' //will not call the backend, but expects that the token is in the global state\n")))}m.isMDXComponent=!0}}]);