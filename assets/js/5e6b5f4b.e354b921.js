"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[71654],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),p=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?r().createElement(k,i(i({ref:t},s),{},{components:n})):r().createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r().createElement.apply(null,l)}return r().createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(87462),r=n(67294),o=n.n(r),l=n(86010),i=n(72389),u=n(67392),s=n(7094),p=n(12466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,k=e.defaultValue,h=e.values,g=e.groupId,f=e.className,b=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,E=(0,r.useState)(y),O=E[0],P=E[1],C=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=x[g];null!=A&&A!==O&&v.some((function(e){return e.value===A}))&&P(A)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==O&&(j(t),P(a),null!=g&&T(g,String(a)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",d)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:M,onFocus:D,onClick:D},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function k(e){var t=(0,i.Z)();return o().createElement(c,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var a=n(67294),r=n.n(a),o=n(64094),l=n(85162),i=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,l=e.branch,i=void 0===l?"master":l,u=e.type,s=void 0===u?"examples":u,p=e.view,d=void 0===p?"editor":p,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",c="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;o&&(c+="&module=",o.forEach((function(e,t){t>0&&(c+=","),c+=e})));var k="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+i+"/"+s+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:k,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:c,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,a=e.craName,u=e.craModules,s=e.nextName,p=e.nextModules,d=e.height,m=void 0===d?600:d,c=e.branch,k=void 0===c?"master":c;return r().createElement(o.Z,null,r().createElement(l.Z,{value:"cra"},r().createElement(i,{name:a||t,type:"getting-started/cra",view:"preview",branch:k,height:m,modules:u||n})),r().createElement(l.Z,{value:"next"},r().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:k,height:m,modules:p||n})))};t.ZP=i},7614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(44996),n(64094)),i=n(85162),u=n(32779),s=["components"],p={id:"form-based",title:"Form based authentication",sidebar_label:"Form based auth"},d=void 0,m={unversionedId:"framework/auth/authn/form-based",id:"framework/auth/authn/form-based",title:"Form based authentication",description:"Form based authentication means that the login page presents a form, so that the user can specifiy a username and password.",source:"@site/docs/framework/auth/authn/010_form-based.md",sourceDirName:"framework/auth/authn",slug:"/framework/auth/authn/form-based",permalink:"/docs/framework/auth/authn/form-based",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authn/010_form-based.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"form-based",title:"Form based authentication",sidebar_label:"Form based auth"},sidebar:"someSidebar",previous:{title:"Services",permalink:"/docs/framework/auth/authn/services"},next:{title:"External auth",permalink:"/docs/framework/auth/authn/external"}},c={},k=[{value:"Architecture",id:"architecture",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2}],h={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Form based authentication")," means that the login page presents a form, so that the user can specifiy a username and password."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," allows you to build the form as you wish, but provide a function to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"submit the username / password to the backend server"),(0,o.kt)("li",{parentName:"ul"},"manage the response returned by the backend server")),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The following scenario is the standard flow when a non logged-in user wants to display a page reserved only for the logged-in user. This means that this page is secured via the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../authz/secure-page"},"secure HOC")),(0,o.kt)("br",null),"\nThis flow can be customized via ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VLF1Rjim3BtxAxYScaFYkmz3jwBeSGFQVG0jomuHMJ8eAcd_VfJT97RcpWU1eidt-4ZgCGgofDuLtyWRbngRsC51P8XLMTQSV6WP_P7s7SaXrNiAfQO8cHAZ8Mg2sGqEVOROnIFvFMKmD18O_aJBHHtUOVDZ6E3X9uUpUhQR0lGRb9SC3PeBcv9j52OZjja0HhXTLs9TwCYFOQDLMD-0iioOQZH7zQuouK0b9ZcC0Ddu8kPy2DZJ63MPLvui2tRVPqLMuF547OfLCDLE9pMN8cwNd3eMNgcp8RP6nX8QkvuvGvpqPjTeBP2mWMX5o7TnDIBYoK9WqWiwu90Kxs7Mz-qoAukieA6eq_s0Dd1_N-HKpAKPdoolgUv9mAWowuNGnMAb_YjBxdy5lt-zla5I88-zBGUCyHpuJlfrKjcufPxGKPF_BndPIcAV6m8cX2EfL6eX9cDiZDi2dKmuBP8Rc_o5xcVcm4-X7u9NyCAwE5LoWMgJcoVFD-8oMv00vTr0_-dYGkfTy79pfbsiuENvJUMPn2GVJy6BVP-sQ8RpkROJHkx72jnIxe2T_UykwXCeYaSzzP7_1G00",alt:null}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the above scenario, the ",(0,o.kt)("strong",{parentName:"p"},"/login page")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook to generate a submit function. This function executes the ",(0,o.kt)("inlineCode",{parentName:"p"},"AJAX POST")," request that sends the credentials to the backend system.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogout")," hooks are configured via several parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./introduction#configuration"},"see configuration")),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"the following parameters are available:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  idp: {\n    default: {\n      // MANDATORY parameters\n      type: "form",\n      loginEndpoint: "/api/login",\n\n      // OPTIONAL parameters\n      logoutEndpoint: "/api/logout",\n      userinfoEndpoint: "/api/whoami",\n      loginMethod: "POST",\n      loginContentType: "application/json",\n      usernameKey: "username",\n      passwordKey: "password",\n      rememberMeKey: "rememberMe",\n      logoutMethod: "GET",\n      callback: (result, context) => [null, result],\n    },\n  },\n};\n')),(0,o.kt)("p",null),"_Mandatory parameters are marked with a \\*_",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"type"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},'must be "',(0,o.kt)("strong",{parentName:"td"},"form"),'"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loginEndpoint"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#loginendpoint"},"loginEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"The URL of the API that authenticate the user",(0,o.kt)("br",null),(0,o.kt)("br",null),"Can be",(0,o.kt)("ul",null,(0,o.kt)("li",null,"A relative or absolute URL"),(0,o.kt)("li",null,"A function returning the URL")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"logoutEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#logoutendpoint"},"logoutEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"The URL of the API that disconnect the user",(0,o.kt)("br",null),(0,o.kt)("br",null),"Can be",(0,o.kt)("ul",null,(0,o.kt)("li",null,"A relative or absolute URL"),(0,o.kt)("li",null,"A function returning the URL")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"userinfoEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#userinfoendpoint"},"userinfoEndpoint")),(0,o.kt)("td",{parentName:"tr",align:null},"The URL of an API called to retrieve the connected user's profile (via a HTTP GET request)",(0,o.kt)("br",null),(0,o.kt)("br",null),"Can be:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"A relative or absolute URL"),(0,o.kt)("li",null,"A function that returns an object representing the userInfo. ",(0,o.kt)("br",null),"For example a object like this: {email: '",(0,o.kt)("a",{parentName:"td",href:"mailto:foo@example.com"},"foo@example.com"),"', roles: ","['ADMIN']","}}")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loginMethod")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"if ",(0,o.kt)("strong",{parentName:"td"},"loginEndpoint")," is a URL, the HTTP method used to send the username and password to the server",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"POST"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loginContentType")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the HTTP Content-Type header value",(0,o.kt)("br",null),(0,o.kt)("br",null),"can be",(0,o.kt)("ul",null,(0,o.kt)("li",null,"application/x-www-form-urlencoded"),(0,o.kt)("li",null,"application/json")),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"usernameKey")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the name of the parameter in the request sent to the server that contains the ",(0,o.kt)("strong",{parentName:"td"},"username"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": username")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"passwordKey")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the name of the parameter in the request sent to the server that contains the ",(0,o.kt)("strong",{parentName:"td"},"password"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"rememberMeKey")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the name of the parameter in the request sent to the server that contains the ",(0,o.kt)("strong",{parentName:"td"},"rememberMe"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": rememberMe")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"logoutMethod")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"if ",(0,o.kt)("strong",{parentName:"td"},"logoutEndpoint")," is a URL, the HTTP method used to call the logout URL",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": GET")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"callback")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../api/interfaces/IdpSettings#callback"},"callback")),(0,o.kt)("td",{parentName:"tr",align:null},"a callback function to parse the ",(0,o.kt)("inlineCode",{parentName:"td"},"AJAX POST")," response.",(0,o.kt)("br",null),(0,o.kt)("br",null),"The fonction returns optionally a token and/or a securityContext",(0,o.kt)("br",null),"if callback is null, ",(0,o.kt)("strong",{parentName:"td"},"Oneki.js")," assumes that the session is done via a cookie and the security context is retrieved via the ",(0,o.kt)("strong",{parentName:"td"},"userinfoEndpoint")," defined above)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": null")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The example below uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook. This hook expects a function ",(0,o.kt)("inlineCode",{parentName:"p"},"(data) => void"),' called when the user clicks on the "Submit" button.')),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(u.ZP,{name:"cra-auth-form",height:"1000",modules:["/src/pages/login.tsx"],mdxType:"Sandbox"})),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(u.ZP,{name:"next-auth-form",height:"1000",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))))}g.isMDXComponent=!0}}]);