(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},141:function(e,t,n){"use strict";var r=n(0),a=n(142);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},142:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},143:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(141),i=n(140),c=n(48),s=n.n(c),d=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,l=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,f=Object(r.useState)(c),g=f[0],O=f[1],j=Object(r.useState)(!1),w=j[0],y=j[1];if(null!=p){var N=h[p];null!=N&&N!==g&&l.some((function(e){return e.value===N}))&&O(N)}var x=function(e){O(e),null!=p&&v(p,e)},P=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},E=function(){y(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},l.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},145:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},146:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(145),a=n(147);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},147:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},148:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,i=e.branch,c=void 0===i?"master":i,s=e.type,d=void 0===s?"example":s,u=e.view,l="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+c+"/"+d+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===u?"editor":u);o&&(l+="&module=",o.forEach((function(e,t){t>0&&(l+=","),l+=e})));var p="onekijs-"+t.split("/").join("-");return a.a.createElement("iframe",{src:l,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(139)),i=(n(146),n(144),n(143),n(148)),c={id:"error-handling",title:"Handling errors",sidebar_label:"Handling errors"},s={unversionedId:"overview/getting-started/error-handling",id:"overview/getting-started/error-handling",isDocsHomePage:!1,title:"Handling errors",description:"Two types of error can occur:",source:"@site/docs/overview/getting-started/008_error-handling.md",slug:"/overview/getting-started/error-handling",permalink:"/docs/overview/getting-started/error-handling",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/getting-started/008_error-handling.md",version:"current",sidebar_label:"Handling errors",sidebar:"someSidebar",previous:{title:"Centralizing notifications",permalink:"/docs/overview/getting-started/notification"},next:{title:"Internationalization (i18n)",permalink:"/docs/overview/getting-started/i18n"}},d=[{value:"Final result",id:"final-result",children:[]},{value:"Error boundaries",id:"error-boundaries",children:[]},{value:"Error handling",id:"error-handling",children:[{value:"Uncaught errors",id:"uncaught-errors",children:[]}]},{value:"Next step",id:"next-step",children:[]}],u={rightToc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Two types of error can occur:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ones throwed during the rendering of a component. To handle this type of errors, React recommends to implement ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"Error Boundaries"))),Object(o.b)("li",{parentName:"ul"},"The standard ones throwed by your javascript code (try/catch) or returned by the server")),Object(o.b)("p",null,"This step consists of handling these type of errors."),Object(o.b)("h2",{id:"final-result"},"Final result"),Object(o.b)("p",null,"The result of this step is the following:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"New in this step")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'The third product is now named "Invalid product". A click on this product simulate an error during the rendering of the page.',Object(o.b)("br",null),'\nThe "Buy" button now calls an API that returns an HTTP 400 error indicating that the product is not available at the moment'))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Codesandbox executes the project in dev mode. Therefore, the ",Object(o.b)("inlineCode",{parentName:"p"},"<ErrorBoundary />")," component is hidden by the stacktrace displayed by create react app",Object(o.b)("br",null),'\nJust press "ESC" to hide this stacktrace.'))),Object(o.b)(i.a,{name:"step07-error-handling",type:"getting-started",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"}),Object(o.b)("h2",{id:"error-boundaries"},"Error boundaries"),Object(o.b)("p",null,"You can pass a component to ",Object(o.b)("inlineCode",{parentName:"p"},"<App />")," (via the prop ",Object(o.b)("inlineCode",{parentName:"p"},"ErrorBoundaryComponent"),"). This component will be called when an error occurs during the rendering.",Object(o.b)("br",null),"\nFirst, let's create this component"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/pages/@components/ErrorBoundary.tsx"',title:'"src/pages/@components/ErrorBoundary.tsx"'}),'const ErrorBoundary: FC<ErrorBoundaryComponentProps> = ({ error, errorInfo }) => {\n  return (\n    <div className="error-boundary-container">\n      <div>\n        <div className="error">An error occured: {error?.message}</div>\n        <div>\n          stacktrace: <pre>{errorInfo?.componentStack}</pre>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component has access to the application context. It means you can use any Oneki hooks in this component (e.g: useGlobalState)"))),Object(o.b)("p",null,"Update the entry point to pass this component to ",Object(o.b)("inlineCode",{parentName:"p"},"<App />")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{2} title="src/index.tsx"',"{2}":!0,title:'"src/index.tsx"'}),"ReactDOM.render(\n  <App settings={settings} ErrorBoundaryComponent={ErrorBoundary}>\n    <RootRouter />\n  </App>,\n  document.getElementById('root'),\n);\n")),Object(o.b)("p",null,'To simulate an error during the rendering phase, update the product details page to simulate an error when the product name is "Phone Invalid":'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{13-16} title="src/pages/products/[id]/index.tsx"',"{13-16}":!0,title:'"src/pages/products/[id]/index.tsx"'}),"const ProductDetailsPage: FC = () => {\n  const { id } = useParams<ProductDetailsParams>();\n  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT, {\n    onSuccess: () => {\n      window.alert('Product added succesfully to the cart!');\n    },\n    onError: (error) => {\n      window.alert(`An error occured while adding the product to the cart: ${error.message}`);\n    },\n  });\n\n  let product = products[+id];\n  if (product.name === 'Phone Invalid') {\n    // to simulate an error, we pickup a entry that doesn't exist\n    product = products[9999];\n  }\n  return (\n    <div>\n      <ProductDetails product={product} onBuy={() => submit(product)} />\n    </div>\n  );\n};\n\nexport default ProductDetailsPage;\n")),Object(o.b)("p",null,'Now when rendering the product named "Phone Invalid", the product is undefined and the component ErrorBoundary is displayed',Object(o.b)("br",null),"\nIf you display another product, everything is working as before."),Object(o.b)("h2",{id:"error-handling"},"Error handling"),Object(o.b)("p",null,"When an error occurs, we recommend to display them via the ",Object(o.b)("inlineCode",{parentName:"p"},"<NotificationCenter />"),".",Object(o.b)("br",null),"\nTo simulate an error coming from the server, a new API is exposed by the server that returns an HTTP 400 response with the following body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "The product ${req.body.name} is not available at this moment"\n}\n')),Object(o.b)("p",null,"Update the ",Object(o.b)("inlineCode",{parentName:"p"},"Product details page")," to call this new API and to use ",Object(o.b)("inlineCode",{parentName:"p"},"NotificationService")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"window.alert"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{2} title="src/pages/@libs/constants.ts"',"{2}":!0,title:'"src/pages/@libs/constants.ts"'}),"export const STATE_CART = 'cart';\nexport const URL_ADD_PRODUCT = '/cart/products-not-available';\nexport const URL_CART = '/cart';\nexport const NOTIF_TOPIC_ERROR = 'error';\nexport const NOTIF_TOPIC_SUCCESS = 'success';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'{5-11} title="src/pages/products/[id]/index.tsx"',"{5-11}":!0,title:'"src/pages/products/[id]/index.tsx"'}),"const ProductDetailsPage: FC = () => {\n  const { id } = useParams<ProductDetailsParams>();\n  const notificationService = useNotificationService();\n  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT, {\n    onError: (error) => {\n      notificationService.error({\n        payload: {\n          message: error.message,\n        },\n      });\n    },\n  });\n\n  let product = products[+id];\n  if (product.name === 'Phone Invalid') {\n    // to simulate an error, we pickup a non entry in the array\n    product = products[9999];\n  }\n  return (\n    <div>\n      <ProductDetails product={product} onBuy={() => submit(product)} />\n    </div>\n  );\n};\n\nexport default ProductDetailsPage;\n")),Object(o.b)("p",null,'Now, when you click on the button "Buy", an error notification is shown.'),Object(o.b)("h3",{id:"uncaught-errors"},"Uncaught errors"),Object(o.b)("p",null,"When using an Oneki.js hook, if you don't specify a callback to handle errors, it will automatically send the following notification:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  topic: 'error',\n  payload: {\n    message: ${error.message}\n  }\n  ...\n}\n")),Object(o.b)("p",null,"Therefore, we can update the ",Object(o.b)("inlineCode",{parentName:"p"},"Product details page")," and remove the onError callback:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/pages/products/[id]/index.tsx"',title:'"src/pages/products/[id]/index.tsx"'}),"const ProductDetailsPage: FC = () => {\n  const { id } = useParams<ProductDetailsParams>();\n  const notificationService = useNotificationService();\n  const [submit] = usePost<ProductType>(URL_ADD_PRODUCT);\n\n  let product = products[+id];\n  if (product.name === 'Phone Invalid') {\n    // to simulate an error, we pickup a non entry in the array\n    product = products[9999];\n  }\n  return (\n    <div>\n      <ProductDetails product={product} onBuy={() => submit(product)} />\n    </div>\n  );\n};\n\nexport default ProductDetailsPage;\n")),Object(o.b)("h2",{id:"next-step"},"Next step"),Object(o.b)("p",null,"In the next step, we adapt the application to different languages (internationalization and localization)."))}l.isMDXComponent=!0}}]);