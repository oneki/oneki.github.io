"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[5945],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(12466),s=n(45315),u=n(91980),p=n(67392),d=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function k(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=m(e),c=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),k=c[0],b=c[1],v=h({queryString:s,groupId:u}),f=v[0],N=v[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=x[0],y=x[1],E=function(){var e=null!=f?f:w;return g({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),N(e),y(e)}),[N,y,p]),tabValues:p}}var b=n(72389),v="tabList__CuJ",f="tabItem_LNqP";function N(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==r&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;n=null!=(o=p[i])?o:p[p.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=k(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",v)},o().createElement(N,(0,a.Z)({},e,t)),o().createElement(x,(0,a.Z)({},e,t)))}function y(e){var t=(0,b.Z)();return o().createElement(w,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{J5:function(){return m},b4:function(){return p},e3:function(){return d}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),u=n(74866),p=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,u=void 0===l?"master":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra/"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next/"+(a||t)+"\n")))},d=function(e){var t=e.path,n=e.branch,a=void 0===n?"master":n,o=t;return t.startsWith("http")||(o="https://github.com/oneki/onekijs/blob/"+a+"/examples/cra-examples/src/"+t),r().createElement(s(),{language:"tsx"},o+"\n")},c=function(e){var t=e.path,n=e.height,a=void 0===n?500:n,o=t;return t.startsWith("http")||(o="https://oneki-examples.surge.sh/"+t),r().createElement("iframe",{src:o,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},m=function(e){var t=e.values,n=e.branch,a=void 0===n?"master":n,o=e.preview,l=t.map((function(e){return{label:e.label,value:e.label}}));o&&l.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var s=t.map((function(e){return r().createElement(i.Z,{value:e.label},r().createElement(d,{path:e.path,branch:a}))}));return o&&s.push(r().createElement(i.Z,{value:"__preview__"},r().createElement(c,{path:o.path,height:o.height}))),console.log(l),r().createElement(u.Z,{groupId:"example-types",defaultValue:t[0].label,values:l},s)}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,p=e.view,d=void 0===p?"editor":p,c="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,p=e.nextModules,d=e.height,c=void 0===d?600:d,m=e.branch,g=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:g,height:c,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:c,modules:p||n})))};t.ZP=l},20510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094)),l=n(85162),s=n(32779),u=(n(20819),["components"]),p={id:"navigation",title:"Adding navigation",sidebar_label:"Adding navigation"},d=void 0,c={unversionedId:"getting-started/navigation",id:"getting-started/navigation",title:"Adding navigation",description:"This step consists in transforming a standard React application into a onekijs application and adding the possibility to navigate between pages",source:"@site/docs/getting-started/003_navigation.md",sourceDirName:"getting-started",slug:"/getting-started/navigation",permalink:"/docs/getting-started/navigation",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/003_navigation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"navigation",title:"Adding navigation",sidebar_label:"Adding navigation"},sidebar:"someSidebar",previous:{title:"Creating the project",permalink:"/docs/getting-started/creating-project"},next:{title:"Adding state management",permalink:"/docs/getting-started/global-state"}},m={},g=[{value:"Final result",id:"final-result",level:2},{value:"Upgrading to an <strong><code>onekijs</code></strong> application",id:"upgrading-to-an-onekijs-application",level:2},{value:"Adding the routes",id:"adding-the-routes",level:2},{value:"Adding navigation",id:"adding-navigation",level:2},{value:"Next step",id:"next-step",level:2}],h={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in transforming a standard React application into a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application and adding the possibility to navigate between pages"),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'You can now click on a product (e.g the "Phone XL" link) to view the product details',(0,o.kt)("br",null),".\nPlease note that the URL changes when you click on the link.")),(0,o.kt)(s.g0,{name:"step02-navigation",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"upgrading-to-an-onekijs-application"},"Upgrading to an ",(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application"),(0,o.kt)("p",null,"In order to be able to navigate between pages, we first need to transform the basic react application created in the previous step into an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application."),(0,o.kt)("p",null,"First add ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," to your project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add onekijs\n")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},"Update the entry point (src/index.tsx) to wrap the entire application with the **`onekijs`** ",(0,o.kt)("code",null,"<App/>")," component.",(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/index.tsx#\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," is the main component that primes the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," framework",(0,o.kt)("br",null),"\nThis component is usually the most external component of an application and is responsible of booting the following components:"),(0,o.kt)("p",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Router")),(0,o.kt)("td",{parentName:"tr",align:null},"By default, it starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://reactrouter.com/web/api/BrowserRouter"},"BrowserRouter")),", but this can be configured.",(0,o.kt)("br",null),"The router is responsible for managing the navigation between pages",(0,o.kt)("br",null),"*The router is used in this step.***")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Global state management")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux store"))," to manage global state.",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The redux store will be used in the next step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Others")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts other components described later on")))),(0,o.kt)("h2",{id:"adding-the-routes"},"Adding the routes"),(0,o.kt)("p",null,"We need to declare the routes so React router can link a ",(0,o.kt)("inlineCode",{parentName:"p"},"Page component")," to a URL.",(0,o.kt)("br",null),"\nThe routes are declared in their own file named ",(0,o.kt)("inlineCode",{parentName:"p"},"_router.tsx")," and can be nested.",(0,o.kt)("br",null),"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top level routes like ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/users"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products"),", ... are defined in ",(0,o.kt)("strong",{parentName:"li"},"src/pages/_router.tsx")),(0,o.kt)("li",{parentName:"ul"},"Sub routes like ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/new"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/:id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/:id/edit"),", ... are defined in ",(0,o.kt)("strong",{parentName:"li"},"src/pages/products/_router.tsx"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/_router.tsx\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step02-navigation/src/pages/products/_router.tsx\n")),(0,o.kt)("admonition",{title:"Hooks",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"useRouteMatch")," is a ",(0,o.kt)("em",{parentName:"p"},"Hook"),". ",(0,o.kt)("em",{parentName:"p"},"Hooks")," are a new addition in React 16.8. They let you use state and other React features without writing a class",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is heavily based on hooks. Therefore, it's important to understand ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/hooks-intro.html"},"this concept"))))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},"Update the entry point (src/pages/_app.tsx) to wrap the entire application with the **`onekijs`** ",(0,o.kt)("code",null,"<NextApp/>")," component.",(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step02-navigation/src/pages/_app.tsx\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")," is the main component that primes the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," framework",(0,o.kt)("br",null),"\nThis component is usually the most external component of an application and is responsible of booting the following components:"),(0,o.kt)("p",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Router")),(0,o.kt)("td",{parentName:"tr",align:null},"Standard Next.js router.",(0,o.kt)("br",null),"The router is responsible for managing the navigation between pages",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The router is used in this step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Global state management")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts a ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux store"))," to manage global state.",(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},"The redux store will be used in the next step."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Others")),(0,o.kt)("td",{parentName:"tr",align:null},"It starts other components described later on")))))),(0,o.kt)("h2",{id:"adding-navigation"},"Adding navigation"),(0,o.kt)("p",null,"To navigate between pages, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides the component ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link/>")," which replaces the standard HTML tag ",(0,o.kt)("inlineCode",{parentName:"p"},"<a/>")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Product />")," component that displays a product in the product list is updated to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link />")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5}","{5}":!0},"const Product: FC<ProductOptions> = ({ product, id, onClick, onNotify }) => {\n  return (\n    <div>\n      <h3>\n        <Link href={`/products/${id}`}>{product.name}</Link>\n      </h3>\n      {product.description && <p>Description: {product.description}</p>}\n      <button onClick={onClick}>Share</button>\n      {product.price > 700 && (\n        <p>\n          <button onClick={onNotify}>Notify me</button>\n        </p>\n      )}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null),"From now on, a click on the title of a product gives access to the detailed page of this product.",(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The navigation between pages is done entirely on the browser side. There is no call to a web server")),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"global-state"},"In the next step")),', we will add a "shopping cart" page that displays the list of products that the user wants to buy. This feature will allow to introduce the global state of an application.'))}k.isMDXComponent=!0}}]);