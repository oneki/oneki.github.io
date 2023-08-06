"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[93149],{85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n.n(a),s=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,s.Z)(o,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),s=n.n(r),o=n(86010),i=n(72389),l=n(67392),c=n(7094),u=n(12466),d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,h=e.defaultValue,g=e.values,k=e.groupId,v=e.className,b=s().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==T&&!f.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),y=N.tabGroupChoices,E=N.setTabGroupChoices,w=(0,r.useState)(T),A=w[0],C=w[1],_=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=y[k];null!=D&&D!==A&&f.some((function(e){return e.value===D}))&&C(D)}var R=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==A&&(Z(t),C(a),null!=k&&E(k,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var s,o=_.indexOf(e.currentTarget)-1;n=null!=(s=_[o])?s:_[_.length-1]}null==(t=n)||t.focus()};return s().createElement("div",{className:(0,o.Z)("tabs-container",d)},s().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return s().createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:R,onClick:R},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):s().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function h(e){var t=(0,i.Z)();return s().createElement(m,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),s=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(s.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return c}});var a=n(67294),r=n.n(a),s=n(64094),o=n(85162),i=n(95665),l=n.n(i),c=function(e){var t=e.path,n=e.craPath,a=e.nextPath,i=e.branch,c=void 0===i?"react18":i;return r().createElement(s.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/cra"+(n||t)+"\n")),r().createElement(o.Z,{value:"next"},r().createElement(l(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+c+"/getting-started/next"+(a||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return l},g0:function(){return c}});var a=n(67294),r=n.n(a),s=n(64094),o=n(85162),i=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,s=e.modules,o=e.branch,i=void 0===o?"master":o,l=e.type,c=void 0===l?"examples":l,u=e.view,d=void 0===u?"editor":u,p="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;s&&(m+="&module=",s.forEach((function(e,t){t>0&&(m+=","),m+=e})));var h="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+i+"/"+c+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:p,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},l=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},c=function(e){var t=e.name,n=e.modules,a=e.craName,l=e.craModules,c=e.nextName,u=e.nextModules,d=e.height,p=void 0===d?600:d,m=e.branch,h=void 0===m?"master":m;return r().createElement(s.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(i,{name:a||t,type:"getting-started/cra",view:"preview",branch:h,height:p,modules:l||n})),r().createElement(o.Z,{value:"next"},r().createElement(i,{name:c||t,type:"getting-started/next",view:"preview",branch:h,height:p,modules:u||n})))};t.ZP=i},43277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=(n(44996),n(64094)),i=n(85162),l=n(32779),c=(n(20819),["components"]),u={id:"data",title:"Managing data",sidebar_label:"Managing data"},d=void 0,p={unversionedId:"getting-started/data",id:"getting-started/data",title:"Managing data",description:"",source:"@site/docs/getting-started/006_data.md",sourceDirName:"getting-started",slug:"/getting-started/data",permalink:"/docs/getting-started/data",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/006_data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"data",title:"Managing data",sidebar_label:"Managing data"},sidebar:"someSidebar",previous:{title:"Adding authentication",permalink:"/docs/getting-started/authentication"},next:{title:"Centralizing notifications",permalink:"/docs/getting-started/notification"}},m={},h=[{value:"Final result",id:"final-result",level:2},{value:"Saving the cart on the server",id:"saving-the-cart-on-the-server",level:2},{value:"Retrieving the cart from the server",id:"retrieving-the-cart-from-the-server",level:2},{value:"Retrieve the list of products only once and cache it",id:"retrieve-the-list-of-products-only-once-and-cache-it",level:2},{value:"Next step",id:"next-step",level:2}],g={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This step consists in adding some interaction with a backend system via AJAX requests."),(0,s.kt)("h2",{id:"final-result"},"Final result"),(0,s.kt)("p",null,"The result of this step is as follows:"),(0,s.kt)("admonition",{title:"New in this step",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The shopping cart is now saved on the server so that it doesn't lose its contents after a refresh",(0,s.kt)("br",null),'.\nA click on the "Buy" button sends an AJAX POST request to add the product to the cart on the server.',(0,s.kt)("br",null),"\nThe contents of the cart are retrieved from the server with an AJAX GET request."),(0,s.kt)("p",{parentName:"admonition"},"The list of products on the main page is retrieved once and cached locally in the global state.")),(0,s.kt)(l.g0,{name:"step05-data",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"onekijs"))," provides several hooks to handle interaction with a backend server.",(0,s.kt)("br",null),"\nIn this tutorial, we will use these hooks:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"useGet")," makes an AJAX GET request. It returns a load indicator and the result. Each time the URL is updated, the request is executed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"usePost"),' returns a submit indicator and a "submit" function. The component can use it to send an AJAX POST request.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"useDelete"),' returns a "delete" function. The component can use it to send an AJAX DELETE request.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"useCache")," makes an AJAX GET request and caches the response in the global state. The AJAX request is sent only if the cache does not exist or has expired."))),(0,s.kt)("h2",{id:"saving-the-cart-on-the-server"},"Saving the cart on the server"),(0,s.kt)("p",null,'To avoid losing the cart contents after a refresh, a click on the "Buy" button sends a POST request to add the product to a cart saved on the server.'),(0,s.kt)("p",null,"Let's update the product details page to use the ",(0,s.kt)("strong",{parentName:"p"},"usePost")," hook instead of ",(0,s.kt)("strong",{parentName:"p"},"useGlobalState"),".",(0,s.kt)("br",null),"\nThe hook accepts a success and error callback executed once it receives a response from the server:"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2} title="src/modules/core/libs/constants.ts"',"{2}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\n")),(0,s.kt)("p",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/%5BproductId%5D/index.tsx\n"))),(0,s.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2} title="src/modules/core/libs/constants.ts"',"{2}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\n")),(0,s.kt)("p",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/products/%5BproductId%5D/index.tsx\n")))),(0,s.kt)("h2",{id:"retrieving-the-cart-from-the-server"},"Retrieving the cart from the server"),(0,s.kt)("p",null,"We want to add the ability to retrieve the cart contents from the server.",(0,s.kt)("br",null),"\nLet's update the page to use the ",(0,s.kt)("strong",{parentName:"p"},"useGet")," hook to make an AJAX GET request every time the page is displayed"),(0,s.kt)("p",null),"We also want to add a button to empty the cart.",(0,s.kt)("br",null),"Let's update the page to use the ",(0,s.kt)("b",null,"useDelete")," hook to make an AJAX DELETE request.",(0,s.kt)("p",null,'We want to refresh the page once the cart is emptied. We use the "refresh" function provided by ',(0,s.kt)("strong",{parentName:"p"},"useGet")," to do this."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3} title="src/modules/core/libs/constants.ts"',"{3}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\nexport const URL_CART = '/cart';\n")),(0,s.kt)("p",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/cart.tsx\n"))),(0,s.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3} title="src/modules/core/libs/constants.ts"',"{3}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\nexport const URL_CART = '/api/cart';\n")),(0,s.kt)("p",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/cart.tsx\n")))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"useGet")," also accepts an error callback to display an error in case the GET request returns an error.")),(0,s.kt)("h2",{id:"retrieve-the-list-of-products-only-once-and-cache-it"},"Retrieve the list of products only once and cache it"),(0,s.kt)("p",null,"Up to now, the list of products is hardcoded in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/pages/products/index.ts"),(0,s.kt)("br",null),"\nTo retrieve the list of products from the server and cache it locally, update the page to use the hook ",(0,s.kt)("strong",{parentName:"p"},"useCache"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"useCache")," can store the result of an AJAX GET request in the global state for a defined period, so the AJAX GET request is not performed again the next time the list of products is displayed."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/index.tsx\n"))),(0,s.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,s.kt)("p",null,"  ",(0,s.kt)("strong",{parentName:"p"},"useCache")," is not relevant in this case because the products are provided via ",(0,s.kt)("strong",{parentName:"p"},"getStaticProps"),(0,s.kt)("br",null),"\nSee the ",(0,s.kt)("b",null,"Create React App")," tab to see how ",(0,s.kt)("b",null,"useCache")," works."))),(0,s.kt)("h2",{id:"next-step"},"Next step"),(0,s.kt)("p",null,"Currently, notifications are displayed via ",(0,s.kt)("inlineCode",{parentName:"p"},"window.alert()")," which is not very user-friendly and configurable.",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"notification"},"In the next step")),", we improve that and introduce how to centralize notifications."))}k.isMDXComponent=!0}}]);