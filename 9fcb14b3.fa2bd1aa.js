(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(140)),c=(n(147),n(145),n(144),n(149)),i={id:"data",title:"Managing data",sidebar_label:"Managing data"},s={unversionedId:"overview/getting-started/data",id:"overview/getting-started/data",isDocsHomePage:!1,title:"Managing data",description:"This step consists of adding some interaction with a backend system via AJAX requests.",source:"@site/docs/overview/getting-started/006_data.md",slug:"/overview/getting-started/data",permalink:"/docs/overview/getting-started/data",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/getting-started/006_data.md",version:"current",sidebar_label:"Managing data",sidebar:"someSidebar",previous:{title:"Adding authentication",permalink:"/docs/overview/getting-started/authentication"},next:{title:"Centralizing notifications",permalink:"/docs/overview/getting-started/notification"}},l=[{value:"Final result",id:"final-result",children:[]},{value:"Saving the cart on the server",id:"saving-the-cart-on-the-server",children:[]},{value:"Retrieving the cart from the server",id:"retrieving-the-cart-from-the-server",children:[]},{value:"Deleting the content of the cart on the server",id:"deleting-the-content-of-the-cart-on-the-server",children:[]},{value:"Retrieve the list of products only once and cache it",id:"retrieve-the-list-of-products-only-once-and-cache-it",children:[]},{value:"Next step",id:"next-step",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This step consists of adding some interaction with a backend system via AJAX requests."),Object(o.b)("h2",{id:"final-result"},"Final result"),Object(o.b)("p",null,"The result of this step is the following:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"New in this step")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The shopping cart is now saved on the server to not loose its content after a refresh",Object(o.b)("br",null),'\nA click on the "Buy" button send an AJAX POST request to add the product to the cart on the server.',Object(o.b)("br",null),"\nThe content of the cart is retrieved from the server with an AJAX GET request."),Object(o.b)("p",{parentName:"div"},"The list of products on main page is retrieved once and cached locally in the global state."))),Object(o.b)(c.a,{name:"step05-data",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Oneki.js provides several hooks to handle interaction with a backend server.",Object(o.b)("br",null),"\nIn this tutorial, we are going to use these hooks:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"useGet")," performs an AJAX GET request. It returns a loading flag and the result. Each time the URL is updated, the request is performed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"usePost"),' returns a submitting flag and a "submit" function. The component can use it to send an AJAX POST request'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"useDelete"),' returns a "delete" function. The component can use it to send an AJAX DELETE request'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"useCache")," performs an AJAX GET request and caches the response in the global state. The AJAX Request is sent only if the cache doesn't exist or is expired.")))),Object(o.b)("h2",{id:"saving-the-cart-on-the-server"},"Saving the cart on the server"),Object(o.b)("p",null,'To prevent loosing the content of the shopping cart after a refresh, the "Buy" button to send a POST request to add the product to a cart saved on the server.'),Object(o.b)("p",null,"Update the product details page to use the hook ",Object(o.b)("strong",{parentName:"p"},"usePost")," instead of ",Object(o.b)("strong",{parentName:"p"},"useGlobalState"),".",Object(o.b)("br",null),"\nThe hook accepts a success and error callbacks executed once it receives a response from the server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{2} title="src/modules/core/libs/constants.ts"',"{2}":!0,title:'"src/modules/core/libs/constants.ts"'}),"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{3-10} title="src/product/details.tsx"',"{3-10}":!0,title:'"src/product/details.tsx"'}),"const ProductDetailsPage: FC = () => {\n  const { id } = useParams();\n  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT, {\n    onSuccess: () => {\n      window.alert('Product added succesfully to the cart!');\n    },\n    onError: (error) => {\n      window.alert(`An error occured while adding the product to the cart: ${error.message}`);\n    },\n  });\n\n  const product = products[+id];\n  return (\n    <div>\n      <ProductDetails product={product} onBuy={() => submit(product)} />\n    </div>\n  );\n};\n")),Object(o.b)("h2",{id:"retrieving-the-cart-from-the-server"},"Retrieving the cart from the server"),Object(o.b)("p",null,"The cart page is updated to retrieve the content of the cart from the server.",Object(o.b)("br",null),"\nUpdate the page to use the hook ",Object(o.b)("strong",{parentName:"p"},"useGet")," to perform an AJAX GET request each time the page is displayed"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{3} title="src/modules/core/libs/constants.ts"',"{3}":!0,title:'"src/modules/core/libs/constants.ts"'}),"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products';\nexport const URL_CART = '/cart';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{2} title="src/pages/cart.tsx"',"{2}":!0,title:'"src/pages/cart.tsx"'}),"const CartPage: FC = () => {\n  const [cart, loading] = useGet<CartResponse>(URL_CART);\n  return (\n    <div>\n      {loading && <p>Loading ...</p>}\n      {cart && <Cart cart={cart} />}\n    </div>\n  );\n};\n\nexport default secure(CartPage);\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"useGet")," accepts also an error callback to display an error in case the GET request returns an error"))),Object(o.b)("h2",{id:"deleting-the-content-of-the-cart-on-the-server"},"Deleting the content of the cart on the server"),Object(o.b)("p",null,"The cart page is updated to add a button to empty the cart.",Object(o.b)("br",null),"\nUpdate the page to use the hook ",Object(o.b)("strong",{parentName:"p"},"useDelete")," to perform an AJAX DELETE request. "),Object(o.b)("p",null,'We want to refresh the page once the cart is emptied. We use the "refresh" function provided by ',Object(o.b)("strong",{parentName:"p"},"useGet")," to perform that."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{2-10,14-18} title="src/pages/cart.tsx"',"{2-10,14-18}":!0,title:'"src/pages/cart.tsx"'}),'const CartPage: FC = () => {\n  const [cart, loading, refresh] = useGet<CartResponse>(URL_CART);\n  const [deleleCart] = useDelete(URL_CART, {\n    onSuccess: () => {\n      refresh();\n    },\n    onError: (error) => {\n      window.alert(`An error occured while cleaning the cart: ${error.message}`);\n    },\n  });\n  return (\n    <div>\n      {loading && <p>Loading ...</p>}\n      <div>\n        <button className="button" onClick={() => deleleCart()}>\n          Empty the cart\n        </button>\n      </div>\n      {cart && <Cart cart={cart} />}\n    </div>\n  );\n};\n\nexport default secure(CartPage);\n')),Object(o.b)("h2",{id:"retrieve-the-list-of-products-only-once-and-cache-it"},"Retrieve the list of products only once and cache it"),Object(o.b)("p",null,"Up to now, the list of products is hardcoded in src/page ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/products/index.ts"),Object(o.b)("br",null),"\nTo retrieve the list of products from the server and cache it locally, update the page to use the hook ",Object(o.b)("strong",{parentName:"p"},"useCache"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"useCache")," can store the result of an AJAX GET request in the global state for a defined period, so the AJAX GET request is not performed again the next time the list of products is displayed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{7-10} title="src/pages/products/index.tsx"',"{7-10}":!0,title:'"src/pages/products/index.tsx"'}),"const ProductsPage: FC = () => {\n  // perform an AJAX GET request and cache the response\n  // the response looks like this:\n  // {\n  //   \"products\": [{...}]\n  // }\n  const [cache, loading] = useCache<ProductsResponse>(URL_PRODUCT, {\n    // if ttl is not passed, the value in HTTP header response 'cache-control' is used (default: no cache)\n    ttl: NO_EXPIRATION, // The validity time of the cache in seconds (NO_EXPIRATION means infinite)\n  });\n  if (loading) {\n    return null;\n  }\n  return (\n    <div>\n      <h2>Products</h2>\n      {cache?.products &&\n        cache.products.map((product, index) => (\n          <Product\n            key={product.name}\n            product={product}\n            id={index}\n            onClick={() => window.alert('The product has been shared!')}\n            onNotify={() => window.alert('You will be notified when the product goes on sale')}\n          />\n        ))}\n    </div>\n  );\n};\n\nexport default ProductsPage;\n")),Object(o.b)("h2",{id:"next-step"},"Next step"),Object(o.b)("p",null,"Currently, the notifications are displayed via ",Object(o.b)("inlineCode",{parentName:"p"},"window.alert()")," which is not very user friendly and configurable.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"notification"}),"In the next step")),", we improve that and introduce how to centralize notifications."))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},142:function(e,t,n){"use strict";var r=n(0),a=n(143);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},143:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},145:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(142),c=n(141),i=n(48),s=n.n(i),l=37,d=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,u=e.values,p=e.groupId,b=e.className,h=Object(o.a)(),m=h.tabGroupChoices,v=h.setTabGroupChoices,f=Object(r.useState)(i),g=f[0],O=f[1],j=Object(r.useState)(!1),w=j[0],y=j[1];if(null!=p){var N=m[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&O(N)}var x=function(e){O(e),null!=p&&v(p,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},A=function(){y(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",A),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",A)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},146:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},147:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(146),a=n(148);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},148:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},149:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,c=e.branch,i=void 0===c?"master":c,s=e.type,l=void 0===s?"example":s,d=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+l+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===d?"editor":d);o&&(u+="&module=",o.forEach((function(e,t){t>0&&(u+=","),u+=e})));var p="onekijs-"+t.split("/").join("-");return a.a.createElement("iframe",{src:u,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}}}]);