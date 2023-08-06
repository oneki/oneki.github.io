"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[5945],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(72389),s=n(67392),p=n(7094),u=n(12466),d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,g=e.defaultValue,k=e.values,h=e.groupId,b=e.className,v=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(t=null!=g?g:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==x&&!f.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,p.U)(),y=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,r.useState)(x),j=T[0],E=T[1],_=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=y[h];null!=A&&A!==j&&f.some((function(e){return e.value===A}))&&E(A)}var I=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==j&&(Z(t),E(a),null!=h&&C(h,String(a)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var o,i=_.indexOf(e.currentTarget)-1;n=null!=(o=_[i])?o:_[_.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",d)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},b)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return _.push(e)},onKeyDown:R,onFocus:I,onClick:I},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function g(e){var t=(0,l.Z)();return o().createElement(m,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return p}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),p=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,p=void 0===l?"react18":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+p+"/getting-started/cra"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+p+"/getting-started/next"+(a||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return p}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,p=void 0===s?"examples":s,u=e.view,d=void 0===u?"editor":u,c="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+p+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),k="https://github.com/oneki/onekijs/tree/"+l+"/"+p+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:k,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},p=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,p=e.nextName,u=e.nextModules,d=e.height,c=void 0===d?600:d,m=e.branch,g=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:g,height:c,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:p||t,type:"getting-started/next",view:"preview",branch:g,height:c,modules:u||n})))};t.ZP=l},20510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094)),l=n(85162),s=n(32779),p=(n(20819),["components"]),u={id:"navigation",title:"Adding navigation",sidebar_label:"Adding navigation"},d=void 0,c={unversionedId:"getting-started/navigation",id:"getting-started/navigation",title:"Adding navigation",description:"",source:"@site/docs/getting-started/003_navigation.md",sourceDirName:"getting-started",slug:"/getting-started/navigation",permalink:"/docs/getting-started/navigation",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/003_navigation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"navigation",title:"Adding navigation",sidebar_label:"Adding navigation"},sidebar:"someSidebar",previous:{title:"Creating the project",permalink:"/docs/getting-started/creating-project"},next:{title:"Adding state management",permalink:"/docs/getting-started/global-state"}},m={},g=[{value:"Final result",id:"final-result",level:2},{value:"Upgrading to an <strong><code>onekijs</code></strong> application",id:"upgrading-to-an-onekijs-application",level:2},{value:"Adding the routes",id:"adding-the-routes",level:2},{value:"Adding navigation",id:"adding-navigation",level:2},{value:"Next step",id:"next-step",level:2}],k={toc:g};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in transforming a standard React application into a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application and adding the possibility to navigate between pages"),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'You can now click on a product (e.g the "Phone XL" link) to view the product details',(0,o.kt)("br",null),".\nPlease note that the URL changes when you click on the link.")),(0,o.kt)(s.g0,{name:"step02-navigation",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"upgrading-to-an-onekijs-application"},"Upgrading to an ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application"),(0,o.kt)("p",null,"In order to be able to navigate between pages, we first need to transform the basic react application created in the previous step into an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application."),(0,o.kt)("p",null,"First add ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," to your project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add onekijs\n")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},"Update the entry point (src/index.tsx) to wrap the entire application with the **`onekijs`** ",(0,o.kt)("code",null,"<App/>")," component.",(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/index.tsx#\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," is the main component that primes the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," framework",(0,o.kt)("br",null),"\nThis component is usually the most external component of an application and is responsible of booting the following components:"),(0,o.kt)("p",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Router")),(0,o.kt)("td",{parentName:"tr",align:null},"By default, it starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://reactrouter.com/web/api/BrowserRouter"},"BrowserRouter")),", but this can be configured.",(0,o.kt)("br",null),"The router is responsible for managing the navigation between pages",(0,o.kt)("br",null),"*The router is used in this step.***")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Global state management")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux store"))," to manage global state.",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The redux store will be used in the next step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Others")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts other components described later on")))),(0,o.kt)("h2",{id:"adding-the-routes"},"Adding the routes"),(0,o.kt)("p",null,"We need to declare the routes so React router can link a ",(0,o.kt)("inlineCode",{parentName:"p"},"Page component")," to a URL.",(0,o.kt)("br",null),"\nThe routes are declared in their own file named ",(0,o.kt)("inlineCode",{parentName:"p"},"_router.tsx")," and can be nested.",(0,o.kt)("br",null),"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top level routes like ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/users"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products"),", ... are defined in ",(0,o.kt)("strong",{parentName:"li"},"src/pages/_router.tsx")),(0,o.kt)("li",{parentName:"ul"},"Sub routes like ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/new"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/:id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/:id/edit"),", ... are defined in ",(0,o.kt)("strong",{parentName:"li"},"src/pages/products/_router.tsx"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/_router.tsx\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/products/_router.tsx\n")),(0,o.kt)("admonition",{title:"Hooks",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"useRouteMatch")," is a ",(0,o.kt)("em",{parentName:"p"},"Hook"),". ",(0,o.kt)("em",{parentName:"p"},"Hooks")," are a new addition in React 16.8. They let you use state and other React features without writing a class",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is heavily based on hooks. Therefore, it's important to understand ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/hooks-intro.html"},"this concept"))))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},"Update the entry point (src/pages/_app.tsx) to wrap the entire application with the **`onekijs`** ",(0,o.kt)("code",null,"<NextApp/>")," component.",(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step02-navigation/src/pages/_app.tsx\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")," is the main component that primes the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," framework",(0,o.kt)("br",null),"\nThis component is usually the most external component of an application and is responsible of booting the following components:"),(0,o.kt)("p",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Router")),(0,o.kt)("td",{parentName:"tr",align:null},"Standard Next.js router.",(0,o.kt)("br",null),"The router is responsible for managing the navigation between pages",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The router is used in this step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Global state management")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux store"))," to manage global state.",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The redux store will be used in the next step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Others")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts other components described later on")))))),(0,o.kt)("h2",{id:"adding-navigation"},"Adding navigation"),(0,o.kt)("p",null,"To navigate between pages, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides the component ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link/>")," which replaces the standard HTML tag ",(0,o.kt)("inlineCode",{parentName:"p"},"<a/>")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Product />")," component that displays a product in the product list is updated to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5}","{5}":!0},"const Product: FC<ProductOptions> = ({ product, id, onClick, onNotify }) => {\n  return (\n    <div>\n      <h3>\n        <Link href={`/products/${id}`}>{product.name}</Link>\n      </h3>\n      {product.description && <p>Description: {product.description}</p>}\n      <button onClick={onClick}>Share</button>\n      {product.price > 700 && (\n        <p>\n          <button onClick={onNotify}>Notify me</button>\n        </p>\n      )}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null),"From now on, a click on the title of a product gives access to the detailed page of this product.",(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The navigation between pages is done entirely on the browser side. There is no call to a web server")),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"global-state"},"In the next step")),', we will add a "shopping cart" page that displays the list of products that the user wants to buy. This feature will allow to introduce the global state of an application.'))}h.isMDXComponent=!0}}]);