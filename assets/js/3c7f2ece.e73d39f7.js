"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[72603],{85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),s=n(12466),l=n(45315),u=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function k(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,c=g(e),d=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),k=d[0],f=d[1],b=m({queryString:l,groupId:u}),v=b[0],x=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),y=N[0],w=N[1],T=function(){var e=null!=v?v:y;return h({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),x(e),w(e)}),[x,w,c]),tabValues:c}}var f=n(72389),b="tabList__CuJ",v="tabItem_LNqP";function x(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==r&&(p(t),l(a))},g=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:g,onClick:d},s,{className:(0,i.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=k(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",b)},o().createElement(x,(0,a.Z)({},e,t)),o().createElement(N,(0,a.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return o().createElement(y,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{J5:function(){return g},b4:function(){return c}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),s=n(95665),l=n.n(s),u=n(74866),c=function(e){var t=e.path,n=e.craPath,a=e.nextPath,s=e.branch,u=void 0===s?"master":s;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra/"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next/"+(a||t)+"\n")))},p=function(e){var t=e.path,n=e.branch,a=void 0===n?"master":n,o=t;return t.startsWith("http")||(o="https://github.com/oneki/onekijs/blob/"+a+"/examples/cra-examples/src/"+t),r().createElement(l(),{language:"tsx"},o+"\n")},d=function(e){var t=e.path,n=e.height,a=void 0===n?500:n,o=t;return t.startsWith("http")||(o="https://oneki-examples.surge.sh/"+t),r().createElement("iframe",{src:o,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},g=function(e){var t=e.values,n=e.branch,a=void 0===n?"master":n,o=e.preview,s=t.map((function(e){return{label:e.label,value:e.label}}));o&&s.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var l=t.map((function(e){return r().createElement(i.Z,{value:e.label},r().createElement(p,{path:e.path,branch:a}))}));return o&&l.push(r().createElement(i.Z,{value:"__preview__"},r().createElement(d,{path:o.path,height:o.height}))),console.log(s),r().createElement(u.Z,{groupId:"example-types",defaultValue:t[0].label,values:s},l)}},32779:function(e,t,n){n.d(t,{YK:function(){return l},g0:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),s=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,s=void 0===i?"master":i,l=e.type,u=void 0===l?"examples":l,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",g="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+s+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;o&&(g+="&module=",o.forEach((function(e,t){t>0&&(g+=","),g+=e})));var h="onekijs-"+t.split("/").join("-"),m="https://github.com/oneki/onekijs/tree/"+s+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:g,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:m,target:"_blank"},"View code on GitHub")))},l=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,l=e.craModules,u=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,g=e.branch,h=void 0===g?"master":g;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s,{name:a||t,type:"getting-started/cra",view:"preview",branch:h,height:d,modules:l||n})),r().createElement(i.Z,{value:"next"},r().createElement(s,{name:u||t,type:"getting-started/next",view:"preview",branch:h,height:d,modules:c||n})))};t.ZP=s},44092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094)),s=n(85162),l=n(32779),u=n(20819),c=["components"],p={id:"authentication",title:"Adding authentication",sidebar_label:"Adding authentication"},d=void 0,g={unversionedId:"getting-started/authentication",id:"getting-started/authentication",title:"Adding authentication",description:"This step consists in adding an authentication system to the application",source:"@site/docs/getting-started/005_authentication.md",sourceDirName:"getting-started",slug:"/getting-started/authentication",permalink:"/docs/getting-started/authentication",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/005_authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"authentication",title:"Adding authentication",sidebar_label:"Adding authentication"},sidebar:"someSidebar",previous:{title:"Adding state management",permalink:"/docs/getting-started/global-state"},next:{title:"Managing data",permalink:"/docs/getting-started/data"}},h={},m=[{value:"Final result",id:"final-result",level:2},{value:"Securing the cart page",id:"securing-the-cart-page",level:2},{value:"Adding a global configuration",id:"adding-a-global-configuration",level:2},{value:"Adding the login page",id:"adding-the-login-page",level:2},{value:"Updating the Navbar to show the logged in user",id:"updating-the-navbar-to-show-the-logged-in-user",level:3},{value:"Adding the logout page",id:"adding-the-logout-page",level:2},{value:"Updating Navbar to display a logout link",id:"updating-navbar-to-display-a-logout-link",level:3},{value:"Next step",id:"next-step",level:2}],k={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in adding an authentication system to the application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides an authentication library offering:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"several authentication methods (form based, oauth2, external login, ...)"),(0,o.kt)("li",{parentName:"ul"},"the restriction of access to pages to authenticated users only (can be based on roles)."),(0,o.kt)("li",{parentName:"ul"},"the provision of a security context accessible everywhere in the application. The security context contains data identifying the connected user (username, roles, ...).")),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The shopping cart page (accessible via the checkout button) is now only for authenticated users.",(0,o.kt)("br",null),"\nIf you are not yet authenticated, you are redirected to the login page where you can log in.")),(0,o.kt)(l.g0,{name:"step04-authentication",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"securing-the-cart-page"},"Securing the cart page"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides several hooks to handle authentication",(0,o.kt)("br",null),"\nIn this tutorial, we will use these hooks:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useLogin")," returns a service handling the login phase. In our case, this is sending a POST request to /auth/login containing the username and password."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useLogout")," returns a service managing the disconnection phase. In our case, sending a GET request to /auth/logout"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useSecurityContext")," returns an object identifying the disconnected user."))),(0,o.kt)("p",null,"To prevent an unauthenticated user from accessing the shopping cart page, you can use the HOC ",(0,o.kt)("strong",{parentName:"p"},"secure")," (to learn more about the HOC, ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"click here"),")."),(0,o.kt)(u.b4,{path:"/step04-authentication/src/pages/cart.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("p",null,"By default, an unauthenticated user is redirected to /login. ",(0,o.kt)("br",null),"However, this path can be configured via a global configuration introduced below."),(0,o.kt)("h2",{id:"adding-a-global-configuration"},"Adding a global configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," recommends to place the configuration settings in a central location. Usually the configuration is placed in the file ",(0,o.kt)("strong",{parentName:"p"},"src/settings.ts"),"."),(0,o.kt)("p",null,"Some components of the framework use the content of this file to configure themselves. This is the case for the ",(0,o.kt)("strong",{parentName:"p"},"secure")," HOC.",(0,o.kt)("br",null),"\nTo redirect the user to ",(0,o.kt)("strong",{parentName:"p"},"/auth")," instead of ",(0,o.kt)("strong",{parentName:"p"},"/login"),", create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," with the following content:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/settings.ts"',title:'"src/settings.ts"'},"export default {\n  routes: {\n    // redirect to /auth if a non authenticated user\n    // tries to access a secured page\n    login: '/auth',\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null),"and pass the configuration to ",(0,o.kt)("code",null,"<App/>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/index.tsx\n"))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/settings.ts"',title:'"src/settings.ts"'},"export default {\n  routes: {\n    // redirect to /auth if a non authenticated user\n    // tries to access a secured page\n    login: '/auth',\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null),"and pass the configuration to ",(0,o.kt)("code",null,"<NextApp/>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/_app.tsx\n")))),(0,o.kt)("h2",{id:"adding-the-login-page"},"Adding the login page"),(0,o.kt)("p",null,"The login page displays a very basic form containing two fields: ",(0,o.kt)("strong",{parentName:"p"},"username")," and ",(0,o.kt)("strong",{parentName:"p"},"password"),(0,o.kt)("br",null),"\nThe page uses the ",(0,o.kt)("strong",{parentName:"p"},"useLogin")," hook to handle the login phase which consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sending a POST ajax request containing the username / password to a server"),(0,o.kt)("li",{parentName:"ul"},"process the response by creating a security context and storing it in the global state. The content of the security context is the content of the response.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useLogin")," also uses the global configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")," to know:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the type of authentication (form based, external, Oauth2, ...)"),(0,o.kt)("li",{parentName:"ul"},"the URL to use to send the POST request")),(0,o.kt)("p",null,"Let's first update the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{5-17} title="src/settings.ts"',"{5-17}":!0,title:'"src/settings.ts"'},"export default {\n  routes: {\n    login: '/login',\n  },\n  idp: {\n    default: {\n      // We want to use a form based authentication\n      type: 'form',\n      // The URL to send the POST request containing\n      // username / password \n      loginEndpoint: '/auth/login',\n      // URL to retrieve the security context\n      // This URL is called to verify if the user\n      // is already authenticated or not\n      userinfoEndpoint: '/userinfo', \n    },\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The endpoints /auth/login, /auth/logout and /userinfo are mocked to simulate a backend server.",(0,o.kt)("br",null),"\nThe mocked server is defined in src/","_","_server__"),(0,o.kt)("p",{parentName:"admonition"},"You can check the documentation of the library ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mswjs.io/"},"msw"))," to learn more about mocking a server inside a browser")),(0,o.kt)("p",null),"Then create the auth page:",(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The auth page uses the hook ",(0,o.kt)("strong",{parentName:"p"},"useForm")," which is explained later in the step ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./form"},"Adding form")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/login.tsx\n")),(0,o.kt)("p",null),"Create a route to associate the ",(0,o.kt)("code",null,"<LoginPage/>")," to ",(0,o.kt)("b",null,"/login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4} title="src/pages/_router.tsx"',"{4}":!0,title:'"src/pages/_router.tsx"'},'const RootRouter = (): JSX.Element => {\n  return (\n    <Routes>\n      <Route path="/login" element={<LoginPage />} />\n      <Route element={<AppLayout />}>\n        <Route path="/products/*" element={<ProductsRouter />} />\n        <Route path="/cart" element={<CartPage />} />\n      </Route>\n      <Route index element={<Navigate to="/products" replace />} />\n    </Routes>\n  );\n};\n\nexport default RootRouter;\n'))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{5-17} title="src/settings.ts"',"{5-17}":!0,title:'"src/settings.ts"'},"export default {\n  routes: {\n    login: '/login',\n  },\n  idp: {\n    default: {\n      // We want to use a form based authentication\n      type: 'form',\n      // The URL to send the POST request containing\n      // username / password \n      loginEndpoint: '/api/auth/login',\n      // URL to retrieve the security context\n      // This URL is called to verify if the user\n      // is already authenticated or not\n      userinfoEndpoint: '/api/userinfo', \n    },\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null),"Then create the auth page:",(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The auth page uses the ",(0,o.kt)("strong",{parentName:"p"},"useForm")," hook which is explained later in the step ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"./form"},"Adding form")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/login.tsx\n")))),(0,o.kt)("h3",{id:"updating-the-navbar-to-show-the-logged-in-user"},"Updating the Navbar to show the logged in user"),(0,o.kt)("p",null,"Now we want to show the username of the logged in user in the navigation bar.",(0,o.kt)("br",null),"\nWe can retrieve the username anywhere in the application via the ",(0,o.kt)("strong",{parentName:"p"},"useSecurityContext")," hook"),(0,o.kt)("p",null,"The content of the security context is the response sent by the backend when the userinfo endpoint is called.",(0,o.kt)("br",null),"In our case, the backend returns a very simple object containing only the username:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "john.doe"\n}\n')),(0,o.kt)("p",null),"To display the username in the Navbar, update the ",(0,o.kt)("code",null,"<Navbar/>")," component:",(0,o.kt)(u.b4,{path:"/step04-authentication/src/modules/core/components/Navbar.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("h2",{id:"adding-the-logout-page"},"Adding the logout page"),(0,o.kt)("p",null,"We want to provide the user with a link to log out.",(0,o.kt)("br",null),"\nThe logout action calls the backend server to delete the cookie and clean up the security context from the global state."),(0,o.kt)("p",null,"This action is handled by the ",(0,o.kt)("strong",{parentName:"p"},"useLogout")," hook. This hook gets the logout endpoint from ",(0,o.kt)("inlineCode",{parentName:"p"},"src/settings.ts")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{9} title="src/settings.ts"',"{9}":!0,title:'"src/settings.ts"'},"export default {\n  routes: {\n    login: '/login',\n  },\n  idp: {\n    default: {\n      type: 'form', \n      loginEndpoint: '/auth/login',\n      logoutEndpoint: '/auth/logout',\n      userinfoEndpoint: '/userinfo', \n    },\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null,"Create a logout page to handle the logout process.",(0,o.kt)("br",null),"\nBy default, the ",(0,o.kt)("strong",{parentName:"p"},"useLogout")," hook sends a GET request to the backend server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step04-authentication/src/pages/logout.tsx\n")),(0,o.kt)("p",null,"Update the router to take into account this new page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{5} title="src/pages/_router.tsx"',"{5}":!0,title:'"src/pages/_router.tsx"'},'const RootRouter = (): JSX.Element => {\n  return (\n    <Routes>\n      <Route path="/login" element={<LoginPage />} />\n      <Route path="/logout" element={<LogoutPage />} />\n      <Route element={<AppLayout />}>\n        <Route path="/products/*" element={<ProductsRouter />} />\n        <Route path="/cart" element={<CartPage />} />\n      </Route>\n      <Route index element={<Navigate to="/products" replace />} />\n    </Routes>\n  );\n};\n\nexport default RootRouter;\n'))),(0,o.kt)(s.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{9} title="src/settings.ts"',"{9}":!0,title:'"src/settings.ts"'},"export default {\n  routes: {\n    login: '/login',\n  },\n  idp: {\n    default: {\n      type: 'form', \n      loginEndpoint: '/api/auth/login',\n      logoutEndpoint: '/api/auth/logout',\n      userinfoEndpoint: '/api/userinfo', \n    },\n  },\n} as AppSettings;\n")),(0,o.kt)("p",null,"Create a logout page to handle the logout process.",(0,o.kt)("br",null),"\nBy default, the ",(0,o.kt)("strong",{parentName:"p"},"useLogout")," hook sends a GET request to the backend server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step04-authentication/src/pages/logout.tsx\n")))),(0,o.kt)("h3",{id:"updating-navbar-to-display-a-logout-link"},"Updating Navbar to display a logout link"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{12-14} title="src/modules/core/components/Navbar.tsx"',"{12-14}":!0,title:'"src/modules/core/components/Navbar.tsx"'},'const Navbar: FC = () => {\n  const [loggedUser] = useSecurityContext(\'username\');\n  return (\n    <div className="app-top-bar">\n      <Link href="/">\n        <h1>My Store</h1>\n      </Link>\n      <div className="app-top-bar-right">\n        {loggedUser && (\n          <div className="user">\n            {loggedUser}{\' \'}\n            <Link className="logout" href="/logout">\n              [Log out]\n            </Link>\n          </div>\n        )}\n        <Link href="/cart" className="button fancy-button">\n          <i className="material-icons">shopping_cart</i>\n          Checkout\n        </Link>\n      </div>\n    </div>\n  );\n};\n\nexport default Navbar;\n')),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"Now that we can identify the logged-in user, we can save the cart contents in the cloud so we don't lose its contents after a refresh",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"data"},"In the next step")),", we introduce the services offered by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," to retrieve and send data via AJAX requests."))}f.isMDXComponent=!0}}]);