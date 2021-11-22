"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[93149],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r().createContext({}),u=function(e){var t=r().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r().createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r().createElement(h,i(i({ref:t},c),{},{components:n})):r().createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r().createElement.apply(null,s)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return s}});var a=n(52263),r=n(13919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,s=o.forcePrependBaseUrl,i=void 0!==s&&s,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),o=n.n(r),s=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(89521),u=n(86010),d="tabItem_1uMI";function p(e){var t,n,a,s=e.lazy,i=e.block,p=e.defaultValue,m=e.values,h=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,c.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=l(),y=x.tabGroupChoices,N=x.setTabGroupChoices,T=(0,r.useState)(b),w=T[0],A=T[1],E=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==w&&g.some((function(e){return e.value===O}))&&A(O)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==w&&(C(t),A(a),null!=h&&N(h,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},v)},g.map((function(e){var t=e.value,n=e.label;return o().createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:D,onClick:D},null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,s.Z)();return o().createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=n(67294),r=(0,a.createContext)(void 0);t.Z=r},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(26396);n(58215);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,s=e.branch,i=void 0===s?"master":s,l=e.type,c=void 0===l?"examples":l,u=e.view,d="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===u?"editor":u);o&&(d+="&module=",o.forEach((function(e,t){t>0&&(d+=","),d+=e})));var p="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},43277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),s=(n(44996),n(64094)),i=n(58215),l=n(32779),c=["components"],u={id:"data",title:"Managing data",sidebar_label:"Managing data"},d=void 0,p={unversionedId:"getting-started/data",id:"getting-started/data",isDocsHomePage:!1,title:"Managing data",description:"This step consists in adding some interaction with a backend system via AJAX requests.",source:"@site/docs/getting-started/006_data.md",sourceDirName:"getting-started",slug:"/getting-started/data",permalink:"/docs/getting-started/data",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/006_data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"data",title:"Managing data",sidebar_label:"Managing data"},sidebar:"someSidebar",previous:{title:"Adding authentication",permalink:"/docs/getting-started/authentication"},next:{title:"Centralizing notifications",permalink:"/docs/getting-started/notification"}},m=[{value:"Final result",id:"final-result",children:[],level:2},{value:"Saving the cart on the server",id:"saving-the-cart-on-the-server",children:[],level:2},{value:"Retrieving the cart from the server",id:"retrieving-the-cart-from-the-server",children:[],level:2},{value:"Retrieve the list of products only once and cache it",id:"retrieve-the-list-of-products-only-once-and-cache-it",children:[],level:2},{value:"Next step",id:"next-step",children:[],level:2}],h={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in adding some interaction with a backend system via AJAX requests."),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"New in this step")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The shopping cart is now saved on the server so that it doesn't lose its contents after a refresh",(0,o.kt)("br",null),'.\nA click on the "Buy" button sends an AJAX POST request to add the product to the cart on the server.',(0,o.kt)("br",null),"\nThe contents of the cart are retrieved from the server with an AJAX GET request."),(0,o.kt)("p",{parentName:"div"},"The list of products on the main page is retrieved once and cached locally in the global state."))),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(l.Z,{name:"step05-data",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"})),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(l.Z,{name:"step05-data",type:"getting-started/next",view:"preview",height:"600",modules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Oneki.js provides several hooks to handle interaction with a backend server.",(0,o.kt)("br",null),"\nIn this tutorial, we will use these hooks:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useGet")," makes an AJAX GET request. It returns a load indicator and the result. Each time the URL is updated, the request is executed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"usePost"),' returns a submit indicator and a "submit" function. The component can use it to send an AJAX POST request.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useDelete"),' returns a "delete" function. The component can use it to send an AJAX DELETE request.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"useCache")," makes an AJAX GET request and caches the response in the global state. The AJAX request is sent only if the cache does not exist or has expired.")))),(0,o.kt)("h2",{id:"saving-the-cart-on-the-server"},"Saving the cart on the server"),(0,o.kt)("p",null,'To avoid losing the cart contents after a refresh, a click on the "Buy" button sends a POST request to add the product to a cart saved on the server.'),(0,o.kt)("p",null,"Let's update the product details page to use the ",(0,o.kt)("strong",{parentName:"p"},"usePost")," hook instead of ",(0,o.kt)("strong",{parentName:"p"},"useGlobalState"),".",(0,o.kt)("br",null),"\nThe hook accepts a success and error callback executed once it receives a response from the server:"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},"```tsx ",2," title=\"src/modules/core/libs/constants.ts\" export const STATE_CART = 'cart'; export const URL_ADD_PRODUCT = '/cart/products'; ```",(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/%5BproductId%5D/index.tsx\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2} title="src/modules/core/libs/constants.ts"',"{2}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/products/%5BproductId%5D/index.tsx\n")))),(0,o.kt)("h2",{id:"retrieving-the-cart-from-the-server"},"Retrieving the cart from the server"),(0,o.kt)("p",null,"We want to add the ability to retrieve the cart contents from the server.",(0,o.kt)("br",null),"\nLet's update the page to use the ",(0,o.kt)("strong",{parentName:"p"},"useGet")," hook to make an AJAX GET request every time the page is displayed"),(0,o.kt)("p",null),"We also want to add a button to empty the cart.",(0,o.kt)("br",null),"Let's update the page to use the ",(0,o.kt)("b",null,"useDelete")," hook to make an AJAX DELETE request.",(0,o.kt)("p",null,'We want to refresh the page once the cart is emptied. We use the "refresh" function provided by ',(0,o.kt)("strong",{parentName:"p"},"useGet")," to do this."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3} title="src/modules/core/libs/constants.ts"',"{3}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\nexport const URL_CART = '/cart';\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/cart.tsx\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3} title="src/modules/core/libs/constants.ts"',"{3}":!0,title:'"src/modules/core/libs/constants.ts"'},"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/api/cart/products';\nexport const URL_CART = '/api/cart';\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step05-data/src/pages/cart.tsx\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"useGet")," also accepts an error callback to display an error in case the GET request returns an error."))),(0,o.kt)("h2",{id:"retrieve-the-list-of-products-only-once-and-cache-it"},"Retrieve the list of products only once and cache it"),(0,o.kt)("p",null,"Up to now, the list of products is hardcoded in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/products/index.ts"),(0,o.kt)("br",null),"\nTo retrieve the list of products from the server and cache it locally, update the page to use the hook ",(0,o.kt)("strong",{parentName:"p"},"useCache"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useCache")," can store the result of an AJAX GET request in the global state for a defined period, so the AJAX GET request is not performed again the next time the list of products is displayed."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step05-data/src/pages/products/index.tsx\n"))),(0,o.kt)(i.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"useCache")," is not relevant in this case because the products are provided via ",(0,o.kt)("strong",{parentName:"p"},"getStaticProps"),(0,o.kt)("br",null),"\nSee the ",(0,o.kt)("b",null,"Create React App")," tab to see how ",(0,o.kt)("b",null,"useCache")," works."))),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"Currently, notifications are displayed via ",(0,o.kt)("inlineCode",{parentName:"p"},"window.alert()")," which is not very user-friendly and configurable.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"notification"},"In the next step")),", we improve that and introduce how to centralize notifications."))}v.isMDXComponent=!0}}]);