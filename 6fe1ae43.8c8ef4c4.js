(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},141:function(e,t,n){"use strict";var a=n(0),r=n(142);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},142:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(141),i=n(140),c=n(48),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,d=e.groupId,u=e.className,m=Object(o.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],f=O[1],v=Object(a.useState)(!1),w=v[0],N=v[1];if(null!=d){var y=g[d];null!=y&&y!==j&&b.some((function(e){return e.value===y}))&&f(y)}var x=function(e){f(e),null!=d&&h(d,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},R=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",R),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",R)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},145:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},146:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(145),r=n(147);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},147:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,c=void 0===i?"master":i,s=e.type,l=void 0===s?"example":s,p=e.view,b="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+c+"/"+l+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===p?"editor":p);o&&(b+="&module=",o.forEach((function(e,t){t>0&&(b+=","),b+=e})));var d="onekijs-"+t.split("/").join("-");return r.a.createElement("iframe",{src:b,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(139)),i=(n(146),n(144),n(143),n(148)),c={id:"navigation",title:"Adding navigation",sidebar_label:"Adding navigation"},s={unversionedId:"overview/getting-started/navigation",id:"overview/getting-started/navigation",isDocsHomePage:!1,title:"Adding navigation",description:"This step consists of transforming a standard React application into an Oneki.js app and add the possibility to navigate between pages",source:"@site/docs/overview/getting-started/003_navigation.md",slug:"/overview/getting-started/navigation",permalink:"/docs/overview/getting-started/navigation",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/getting-started/003_navigation.md",version:"current",sidebar_label:"Adding navigation",sidebar:"someSidebar",previous:{title:"Creating the project",permalink:"/docs/overview/getting-started/creating-project"},next:{title:"Adding state management",permalink:"/docs/overview/getting-started/global-state"}},l=[{value:"Final result",id:"final-result",children:[]},{value:"Upgrading to an Oneki.js app",id:"upgrading-to-an-onekijs-app",children:[]},{value:"Adding the routes",id:"adding-the-routes",children:[]},{value:"Adding navigation",id:"adding-navigation",children:[]},{value:"Next step",id:"next-step",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This step consists of transforming a standard React application into an ",Object(o.b)("strong",{parentName:"p"},"Oneki.js app")," and add the possibility to navigate between pages"),Object(o.b)("h2",{id:"final-result"},"Final result"),Object(o.b)("p",null,"The result of this step is the following:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"New in this step")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'You can now click on a product (i.e: the link "Phone XL") to display the details of the product',Object(o.b)("br",null),"\nPlease note that the URL changes when you click on the link."))),Object(o.b)(i.a,{name:"step02-navigation",type:"getting-started",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"}),Object(o.b)("h2",{id:"upgrading-to-an-onekijs-app"},"Upgrading to an Oneki.js app"),Object(o.b)("p",null,"To be able to navigate between pages, we first transform the basic react app created during the previous step into an Oneki.js app"),Object(o.b)("p",null,"Update the entry point (src/index.tsx) to wrap the whole application with the Oneki.js ",Object(o.b)("inlineCode",{parentName:"p"},"<App/>")," component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'}),"ReactDOM.render(\n  <App>\n    <RootRouter />\n  </App>,\n  document.getElementById('root'),\n);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<App>")," is the main component that bootstraps the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Oneki.js framework")),Object(o.b)("br",null),"\nThis component is generally the outermost component of an application and is responsible of bootstrapping the following components"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Component"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Router"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, it bootstraps a ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://reactrouter.com/web/api/BrowserRouter"}),"BrowserRouter")),", but this can be configured.",Object(o.b)("br",null),"The router is responsible of handling navigation between pages",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"The router is used in this step."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Global state management"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It bootstraps a ",Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://redux.js.org/"}),"Redux store"))," to handle global state management.",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"The redux store will be used in the next step."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Others"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It bootstraps other components described in details here (TODO LINK)")))),Object(o.b)("h2",{id:"adding-the-routes"},"Adding the routes"),Object(o.b)("p",null,"We need to declare the routes so React router can link a ",Object(o.b)("inlineCode",{parentName:"p"},"Page component")," to a URL.",Object(o.b)("br",null),"\nThe routes are declared in their own file named ",Object(o.b)("inlineCode",{parentName:"p"},"@router.tsx")," and can be nested.",Object(o.b)("br",null),"For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Top level routes like ",Object(o.b)("inlineCode",{parentName:"li"},"/"),", ",Object(o.b)("inlineCode",{parentName:"li"},"/users"),", ",Object(o.b)("inlineCode",{parentName:"li"},"/products"),", ... are defined in src/pages/@router.tsx"),Object(o.b)("li",{parentName:"ul"},"Sub routes like ",Object(o.b)("inlineCode",{parentName:"li"},"/products/new"),", ",Object(o.b)("inlineCode",{parentName:"li"},"/products/:id"),", ",Object(o.b)("inlineCode",{parentName:"li"},"/products/:id/edit"),", ... are defined in src/pages/products/@router.tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/pages/@router.tsx"',title:'"src/pages/@router.tsx"'}),'const RootRouter = (): JSX.Element => {\n  return (\n    <AppLayout>\n      {/* AppLayout is a layout common to all pages */}\n      <Switch>\n        <Route path="/products">\n          {/* all routes starting with /products are defined in src/products/@router.tsx */}\n          <ProductsRouter />\n        </Route>\n        <Route>\n          {/* redirect by default to /products as we don\'t have any homepage in this example */}\n          <Redirect to="/products" />\n        </Route>\n      </Switch>\n    </AppLayout>\n  );\n};\n\nexport default RootRouter;\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/pages/products/@router.tsx"',title:'"src/pages/products/@router.tsx"'}),"const ProductsRouter = (): JSX.Element => {\n  const match = useRouteMatch();\n  return (\n    <Switch>\n      {/* match.path represents the base path, in our case /products */}\n      <Route path={`${match.path}/:id`}>\n        <ProductDetailsPage />\n      </Route>\n      <Route path={match.path}>\n        <ProductsPage />\n      </Route>\n    </Switch>\n  );\n};\n\nexport default ProductsRouter;\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Hooks")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"useRouteMatch")," is a ",Object(o.b)("em",{parentName:"p"},"Hook"),". ",Object(o.b)("em",{parentName:"p"},"Hooks")," are a new addition in React 16.8. They let you use state and other React features without writing a class",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," is heavily based on hooks. Therefore, it's important to understand ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"this concept"))))),Object(o.b)("h2",{id:"adding-navigation"},"Adding navigation"),Object(o.b)("p",null,"To navigate between pages, React Router offers the component ",Object(o.b)("inlineCode",{parentName:"p"},"<Link/>")," that replaces the standard HTML tag ",Object(o.b)("inlineCode",{parentName:"p"},"<a/>")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Product />")," component that displays a product in the product list is updated to use ",Object(o.b)("inlineCode",{parentName:"p"},"<Link />")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'{5} title="src/pages/products/@components/Product.tsx"',"{5}":!0,title:'"src/pages/products/@components/Product.tsx"'}),"const Product: FC<ProductOptions> = ({ product, id, onClick, onNotify }) => {\n  return (\n    <div>\n      <h3>\n        <Link to={`/products/${id}`}>{product.name}</Link>\n      </h3>\n      {product.description && <p>Description: {product.description}</p>}\n      <button onClick={onClick}>Share</button>\n      {product.price > 700 && (\n        <p>\n          <button onClick={onNotify}>Notify me</button>\n        </p>\n      )}\n    </div>\n  );\n};\n")),Object(o.b)("p",null,"Now a click on the title of a product gives access to the detailed page of this product."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The navigation between pages is done entirely at the browser side. There is no call to a web server"))),Object(o.b)("h2",{id:"next-step"},"Next step"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"global-state"}),"In the next step")),', we will add a "cart" page that displays the list of products the user wants to buy. This feature will introduce the global state of an application.'))}b.isMDXComponent=!0}}]);