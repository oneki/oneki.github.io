"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[28237],{85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a.n(n),o=a(86010),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,n),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(87462),r=a(67294),o=a.n(r),i=a(86010),l=a(12466),s=a(45315),u=a(91980),p=a(67392),c=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=o().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function b(e){var t,a,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=m(e),d=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),b=d[0],f=d[1],k=h({queryString:s,groupId:u}),v=k[0],y=k[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=x[0],w=x[1],T=function(){var e=null!=v?v:N;return g({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),w(e)}),[y,w,p]),tabValues:p}}var f=a(72389),k="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,a=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==r&&(c(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;a=null!=(o=p[i])?o:p[p.length-1]}null==(t=a)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o().createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":r===t})}),null!=a?a:t)})))}function x(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=b(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",k)},o().createElement(y,(0,n.Z)({},e,t)),o().createElement(x,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return o().createElement(N,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,a){var n=a(67294),r=a.n(n),o=a(74866);a(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,a){a.d(t,{J5:function(){return m},b4:function(){return p}});var n=a(67294),r=a.n(n),o=a(64094),i=a(85162),l=a(95665),s=a.n(l),u=a(74866),p=function(e){var t=e.path,a=e.craPath,n=e.nextPath,l=e.branch,u=void 0===l?"master":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra/"+(a||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next/"+(n||t)+"\n")))},c=function(e){var t=e.path,a=e.branch,n=void 0===a?"master":a,o=t;return t.startsWith("http")||(o="https://github.com/oneki/onekijs/blob/"+n+"/examples/cra-examples/src/"+t),r().createElement(s(),{language:"tsx"},o+"\n")},d=function(e){var t=e.path,a=e.height,n=void 0===a?500:a,o=t;return t.startsWith("http")||(o="https://oneki-examples.surge.sh/"+t),r().createElement("iframe",{src:o,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},m=function(e){var t=e.values,a=e.branch,n=void 0===a?"master":a,o=e.preview,l=t.map((function(e){return{label:e.label,value:e.label}}));o&&l.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var s=t.map((function(e){return r().createElement(i.Z,{value:e.label},r().createElement(c,{path:e.path,branch:n}))}));return o&&s.push(r().createElement(i.Z,{value:"__preview__"},r().createElement(d,{path:o.path,height:o.height}))),console.log(l),r().createElement(u.Z,{groupId:"example-types",defaultValue:t[0].label,values:l},s)}},32779:function(e,t,a){a.d(t,{YK:function(){return s},g0:function(){return u}});var n=a(67294),r=a.n(n),o=a(64094),i=a(85162),l=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,p=e.view,c=void 0===p?"editor":p,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+c;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:d,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,a=e.modules,n=e.craName,s=e.craModules,u=e.nextName,p=e.nextModules,c=e.height,d=void 0===c?600:c,m=e.branch,g=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:n||t,type:"getting-started/cra",view:"preview",branch:g,height:d,modules:s||a})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:d,modules:p||a})))};t.ZP=l},47219:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(44996),a(64094)),l=a(85162),s=a(32779),u=a(20819),p=["components"],c={id:"global-state",title:"Adding state management",sidebar_label:"Adding state management"},d=void 0,m={unversionedId:"getting-started/global-state",id:"getting-started/global-state",title:"Adding state management",description:"This step consists in adding a global state management to the application",source:"@site/docs/getting-started/004_global-state.md",sourceDirName:"getting-started",slug:"/getting-started/global-state",permalink:"/docs/getting-started/global-state",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/004_global-state.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"global-state",title:"Adding state management",sidebar_label:"Adding state management"},sidebar:"someSidebar",previous:{title:"Adding navigation",permalink:"/docs/getting-started/navigation"},next:{title:"Adding authentication",permalink:"/docs/getting-started/authentication"}},g={},h=[{value:"Final result",id:"final-result",level:2},{value:"Adding global state management",id:"adding-global-state-management",level:2},{value:"Adding the shopping cart page",id:"adding-the-shopping-cart-page",level:2},{value:"Adding the &quot;Buy&quot; button",id:"adding-the-buy-button",level:2},{value:"Updating the navigation",id:"updating-the-navigation",level:2},{value:"Next step",id:"next-step",level:2}],b={toc:h};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in adding a global state management to the application",(0,o.kt)("br",null)),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The core feature of React is to offer components that rerender when a state change.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"The state"))," can be the internal state of the component or the state of a parent component (see ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down"},"The Data Flows Down"),")"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides a global state for the application to store the data that any component can access and react to. This global state is based on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux")),".")),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'You can now add a product to the cart by clicking on the "Buy" button available on the product details page.',(0,o.kt)("br",null),'\nThe "checkout" button is now clickable and displays the cart page')),(0,o.kt)(s.g0,{name:"step03-global-state",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"adding-global-state-management"},"Adding global state management"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides a store to hold the global state. The store is a Redux store and is automatically started by the ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")," component."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides several hooks to update and react on the global state.",(0,o.kt)("br",null),"\nIn this tutorial, we will use these hooks:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useGlobalState")," to react on a data of the global state, but also to update it"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useGlobalProp")," to only react on a data of the global state"))),(0,o.kt)("h2",{id:"adding-the-shopping-cart-page"},"Adding the shopping cart page"),(0,o.kt)("p",null,'This list of products is stored in the global state under the key "cart".',(0,o.kt)("br",null),"\nThe global state is an ",(0,o.kt)("strong",{parentName:"p"},"immutable")," javascript object that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  cart: [\n    {\n      name: "Phone XL",\n      price: 799,\n      description: "A large phone with one of the best screens",\n    },\n    {\n      name: "Phone Standard",\n      price: 299,\n    },\n  ];\n}\n')),(0,o.kt)("p",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default, the global state is an empty object when the application starts. In our case, this means that the shopping cart page displays an empty list of products.",(0,o.kt)("br",null),"\nIf necessary, it's possible to pass an initial state to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"<NextApp />")," component.")),(0,o.kt)("p",null,"Add a new page to display the list of products the user wants to buy:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/cart.tsx\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/pages/cart.tsx\n")),(0,o.kt)("admonition",{title:"Layout",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"withLayout")," is a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/higher-order-components.html"},"HOC"))," to provide a consistent layout between each pages of a Next.js application. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../framework/layout/layout"},"More details here")))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's a good practice to use a constant to identify a property in the global state. Indeed, if a refactoring is needed further on, it's easier to find which component uses which property.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3,6} title="src/modules/core/libs/constants.ts"',"{3,6}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\n")),(0,o.kt)("p",null),"The Cart component displays the list of products:",(0,o.kt)(u.b4,{path:"/step03-global-state/src/modules/core/components/Cart.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("h2",{id:"adding-the-buy-button"},'Adding the "Buy" button'),(0,o.kt)("p",null,"Update the product details component to display a button to purchase the product."),(0,o.kt)(u.b4,{path:"/step03-global-state/src/modules/products/components/ProductDetails.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("p",null,'Update the product details page to handle the click on the "Buy" button.',(0,o.kt)("br",null),'\nA click on the "Buy" button calls a function that adds the product to the "cart" property of the global state.',(0,o.kt)("br",null),"As the cart page reacts on this property, the product will automatically appears on it."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/products/%5BproductId%5D/index.tsx\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The page below uses ",(0,o.kt)("strong",{parentName:"p"},"Static Generation")," (",(0,o.kt)("em",{parentName:"p"},"getStaticProps")," and ",(0,o.kt)("em",{parentName:"p"},"getStaticPaths"),") which is a feature provided by Next.js. That means in production, the page HTML is generated when you run ",(0,o.kt)("code",null,"next build"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/pages/products/%5BproductId%5D/index.tsx\n")))),(0,o.kt)("admonition",{title:"Immutability",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As mentioned above, the global state is immutable. Therefore, to update the cart, you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cart.concat()")," to build a new array and not ",(0,o.kt)("inlineCode",{parentName:"p"},"cart.push()"),".",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," transparently handles the immutability of the global state. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cart")," variable is a standard javascript object that you can manipulate like any other javascript object excepted that it is frozen."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Advanced tip"),": As the ",(0,o.kt)("inlineCode",{parentName:"p"},"cart")," variable is immutable, the ","<","Cart/",">"," component could use React.memo to be more efficient")),(0,o.kt)("h2",{id:"updating-the-navigation"},"Updating the navigation"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},"Update the main router to add a route to display the cart page",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/pages/_router.tsx\n")),(0,o.kt)("p",null,'and finally, update the "Checkout" button to navigate to the cart page'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step03-global-state/src/modules/core/components/Navbar.tsx\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},'Update the "Checkout" button to navigate to the cart page',(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step03-global-state/src/modules/core/components/Navbar.tsx\n")))),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"Currently, the contents of the cart are only stored in memory (in the global state) and if you refresh the page, the contents are lost.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"authentication"},"In the next step")),", we will add the ability to authenticate a user and then save the cart contents in the cloud."))}f.isMDXComponent=!0}}]);