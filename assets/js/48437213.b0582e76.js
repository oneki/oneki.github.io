"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[16629],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a().createElement(h,l(l({ref:t},s),{},{components:n})):a().createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n.n(r),i=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),i=n.n(a),o=n(86010),l=n(72389),u=n(67392),s=n(7094),c=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,h=e.defaultValue,f=e.values,k=e.groupId,b=e.className,g=i().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,C=(0,a.useState)(x),O=C[0],S=C[1],j=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var Z=N[k];null!=Z&&Z!==O&&v.some((function(e){return e.value===Z}))&&S(Z)}var _=function(e){var t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==O&&(T(t),S(r),null!=k&&E(k,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;n=null!=(i=j[o])?i:j[j.length-1]}null==(t=n)||t.focus()};return i().createElement("div",{className:(0,o.Z)("tabs-container",p)},i().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i().createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:_,onClick:_},a,{className:(0,o.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):i().createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function h(e){var t=(0,l.Z)();return i().createElement(m,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),i=n(65488);n(85162);t.Z=function(e){var t=e.children;return a().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var r=n(67294),a=n.n(r),i=n(64094),o=n(85162),l=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,i=e.modules,o=e.branch,l=void 0===o?"master":o,u=e.type,s=void 0===u?"examples":u,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;i&&(m+="&module=",i.forEach((function(e,t){t>0&&(m+=","),m+=e})));var h="onekijs-"+t.split("/").join("-"),f="https://github.com/oneki/onekijs/tree/"+l+"/"+s+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:d,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:f,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,r=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,h=void 0===m?"master":m;return a().createElement(i.Z,null,a().createElement(o.Z,{value:"cra"},a().createElement(l,{name:r||t,type:"getting-started/cra",view:"preview",branch:h,height:d,modules:u||n})),a().createElement(o.Z,{value:"next"},a().createElement(l,{name:s||t,type:"getting-started/next",view:"preview",branch:h,height:d,modules:c||n})))};t.ZP=l},21119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(44996),n(64094)),l=n(85162),u=n(32779),s=["components"],c={id:"security-context",title:"Security context",sidebar_label:"Security context"},p=void 0,d={unversionedId:"framework/auth/authz/security-context",id:"framework/auth/authz/security-context",title:"Security context",description:"The security context represents the profile of the logged in user.It's usually retrieved from the backend during the authentication (via useLoginService) or by calling an API like /whoami (via useSecurityContext)",source:"@site/docs/framework/auth/authz/030_security-context.md",sourceDirName:"framework/auth/authz",slug:"/framework/auth/authz/security-context",permalink:"/docs/framework/auth/authz/security-context",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/auth/authz/030_security-context.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"security-context",title:"Security context",sidebar_label:"Security context"},sidebar:"someSidebar",previous:{title:"Secure component",permalink:"/docs/framework/auth/authz/secure-page"},next:{title:"Introduction",permalink:"/docs/framework/auth/authn/introduction"}},m={},h=[{value:"Example of a security context",id:"example-of-a-security-context",level:5},{value:"useSecurityContext",id:"usesecuritycontext",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Snippets",id:"snippets",level:5},{value:"Example",id:"example",level:2},{value:"Advanced",id:"advanced",level:2}],f={toc:h};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The security context represents the profile of the logged in user.",(0,i.kt)("br",null),"It's usually retrieved from the backend during the authentication (via ",(0,i.kt)("inlineCode",{parentName:"p"},"useLoginService"),") or by calling an API like ",(0,i.kt)("inlineCode",{parentName:"p"},"/whoami")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"useSecurityContext"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Oneki.js")," doesn't expect a specific format for the security context. You can put in what you want. The content of the security context is usually made of profile attributes like email, name, firstname, roles, ... "),(0,i.kt)("h5",{id:"example-of-a-security-context"},"Example of a security context"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  sub: "de1ff3d2-0710-4f7a-9dd1-4aadb7d94b57",\n  email: "john.doe@example.com",\n  given_name: "John",\n  family_name: "Doe",\n  picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",\n  roles: [\'admin\', \'user\']\n}\n')),(0,i.kt)("h2",{id:"usesecuritycontext"},"useSecurityContext"),(0,i.kt)("p",null,"The security context is stored in the global state of Redux with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.securityContext")," and accessible everywhere with the ",(0,i.kt)("inlineCode",{parentName:"p"},"useSecurityContext")," hook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const [securityContext, loading] = useSecurityContext<T>(selector, defaultValue);\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"selector")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"If the selector is:",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"not present"),": the whole ",(0,i.kt)("inlineCode",{parentName:"td"},"security context")," is returned"),(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"a string"),": the string is a key in the ",(0,i.kt)("inlineCode",{parentName:"td"},"security context"),". the result is this specific entry of the ",(0,i.kt)("inlineCode",{parentName:"td"},"security context"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"defaultValue")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"In case the ",(0,i.kt)("strong",{parentName:"td"},"selector")," is a string, return this value if the key doesn't exist in the ",(0,i.kt)("inlineCode",{parentName:"td"},"security context"))))),(0,i.kt)("h4",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"securityContext")),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Return the whole ",(0,i.kt)("inlineCode",{parentName:"td"},"security context")," or a specific entry based on the value of ",(0,i.kt)("strong",{parentName:"td"},"selector"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"loading"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"loading is true if the application is currently fetching the security context from the backend")))),(0,i.kt)("h5",{id:"snippets"},"Snippets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const [securityContext, loading] = useSecurityContext();\nconst [email, loading] = useSecurityContext("email");\nconst [picture, loading] = useSecurityContext("picture", "default_avatar.jpg");\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This example displays the logged-in user's username"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,i.kt)(u.ZP,{name:"cra-auth-form",height:"600",modules:["/src/modules/core/layouts/AppLayout.tsx","/src/pages/restricted.tsx","/src/pages/admin.tsx","/src/pages/login.tsx"],mdxType:"Sandbox"})),(0,i.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,i.kt)(u.ZP,{name:"next-auth-form",height:"600",modules:["/src/pages/index.tsx","/src/settings.ts","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"Here is the logic to retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"security context"),":"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLHDhzCm4BpdLootzj3stWXu4kA2EC537107rzuaIrqxiZU8_dlM-Nf9chw-Ks9xTdPdFCbJP1MukTZi7Jbj6uDDi50nr_5uE9n2utmHb3lJlYIkcjEU_45AcFH1HKralDxLLhb4iOjdSdjAP2rhTcmYVaVT1EBh9-yO_t6UKG6REDy4Sb1QVr8M4ZT-t09Nw61pnRZD08u1kGaEuf8B1E_hF4CR4JREj-283DOhGwu43WqcM6egmmHoXV_iJEt9CRo7ed6QoRjbGs7HobfObcosERJ70CupWiM2-pM0GOkbJ9-ee43MLPh05oCWxGyIGFVIsOCQ4SCyK0V_bmoQv8peOM6A-pyn6v7F5SKNk5OEJWWgNftk8UXCEsExtFqoAbPeVky-o7hgrbrhVdpxUkkA-D8Akv6HttMbzJ4f5q9HOqYBHKdNY9ZeIsvq3QHY0fWtMoZiLltcNEbIQwUM_LbKFSXSBtSQfa89MVvo9gC4fVdUV7ATmL-WxJQfMcHvwM0NwK7YOdefJyDqd2tzU51ZY1GPvVA48AXoCkaeUbtawpBV8dHTwbeSkkmYQAle4jCbf6ny-VdS5Szm9zJ-WgkVpGGtZy4i3A_wFKCbp-ULjzO_3FzQ_le9gSWcxsEZuMHuhjz3kZuCmOULtrIlhd462t9ekbdw2CqrjEIhHYu-XJnx7DIXGoSdwmGyoKF-_ly1",alt:null}))}k.isMDXComponent=!0}}]);