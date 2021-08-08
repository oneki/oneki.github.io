"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[3922],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a().createContext({}),d=function(e){var t=a().useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a().createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},p=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,g=c["".concat(o,".").concat(p)]||c[p]||m[p]||i;return n?a().createElement(g,s(s({ref:t},l),{},{components:n})):a().createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a().createElement.apply(null,o)}return a().createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){var r=n(7294),a=n.n(r);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n.n(r),i=n(9443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),u="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,c=39;var m=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,m=e.values,p=e.groupId,g=e.className,h=o(),v=h.tabGroupChoices,f=h.setTabGroupChoices,b=(0,r.useState)(i),w=b[0],k=b[1],y=r.Children.toArray(e.children),N=[];if(null!=p){var x=v[p];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&k(x)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),r=m[n].value;k(r),null!=p&&(f(p,r),setTimeout((function(){var e,n,r,a,i,o,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case d:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a().createElement("div",{className:"tabs-container"},a().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},g)},m.map((function(e){var t=e.value,n=e.label;return a().createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a().createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var r=n(7294),a=(0,r.createContext)(void 0);t.Z=a},2779:function(e,t,n){var r=n(7294),a=n.n(r);t.Z=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,i=e.modules,o=e.branch,s=void 0===o?"master":o,u=e.type,l=void 0===u?"example":u,d=e.view,c="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+s+"/"+l+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===d?"editor":d);i&&(c+="&module=",i.forEach((function(e,t){t>0&&(c+=","),c+=e})));var m="onekijs-"+t.split("/").join("-");return a().createElement("iframe",{src:c,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:m,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},9879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=(n(4996),n(5064),n(8215),n(2779)),s=["components"],u={id:"form",title:"Using form for user input",sidebar_label:"Using form for user input"},l=void 0,d={unversionedId:"overview/getting-started/form",id:"overview/getting-started/form",isDocsHomePage:!1,title:"Using form for user input",description:"This step consists in introducing how to build form with Oneki.js",source:"@site/docs/overview/getting-started/010_form.md",sourceDirName:"overview/getting-started",slug:"/overview/getting-started/form",permalink:"/docs/overview/getting-started/form",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/getting-started/010_form.md",version:"current",sidebarPosition:10,frontMatter:{id:"form",title:"Using form for user input",sidebar_label:"Using form for user input"},sidebar:"someSidebar",previous:{title:"Internationalization",permalink:"/docs/overview/getting-started/i18n"},next:{title:"Adding a service",permalink:"/docs/overview/getting-started/service"}},c=[{value:"Final result",id:"final-result",children:[]},{value:"Adding validation",id:"adding-validation",children:[]},{value:"Adding a signup page",id:"adding-a-signup-page",children:[]},{value:"Adding a rule",id:"adding-a-rule",children:[]},{value:"Next step",id:"next-step",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This step consists in introducing how to build form with Oneki.js"),(0,i.kt)("p",null,"Building forms with React require a lot of code and can be hard to maintain.",(0,i.kt)("br",null),"\nOneki.js proposes a library to control a form and reduce drastically the code."),(0,i.kt)("h2",{id:"final-result"},"Final result"),(0,i.kt)("p",null,"The result of this step is as follows:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"New in this step")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The login page now validates that the username and password are filled in"),(0,i.kt)("p",{parentName:"div"},"A new page is added to sign up. The form on the sign up page verifies asynchronously if the username is available or not",(0,i.kt)("br",null),"\nCertain elements of the form are displayed or not depending on the value of a field"))),(0,i.kt)(o.Z,{name:"step09-form",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"}),(0,i.kt)("h2",{id:"adding-validation"},"Adding validation"),(0,i.kt)("p",null,"Let's update the login page to verify that the username and password are filled in and that the username contains only alphanumeric charaters (max size 20)",(0,i.kt)("br",null),'\nThe value of the form is updated every time the user enters a caracter. At the bottom of the form, We add a "debug" component to display in real time the value of the form',(0,i.kt)("br",null),"\nThis real-time update also allows to have a real time validation:"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We use the component ",(0,i.kt)("inlineCode",{parentName:"p"},"<Input />")," from Oneki.js. This component is a wrapper of ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," that can interact with a ",(0,i.kt)("inlineCode",{parentName:"p"},"FormContext")," created by ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4,13,18-21,27,29,34} title="src/pages/auth/index.tsx"',"{4,13,18-21,27,29,34}":!0,title:'"src/pages/auth/index.tsx"'},'const LoginPage: FC = () => {\n  const [error, , submit] = useLogin();\n  const [T, t] = useTranslation();\n  const { Form, values, getValidation } = useForm(submit);\n\n  return (\n    <div className="login-container">\n      <Form className="login-form">\n        {error && <div className="error">Error: {error.message}</div>}\n        <div>\n          <label>\n            <T>Username</T>\n            <span className="error">{getValidation(\'username\').message}</span>\n          </label>\n          <Input\n            name="username"\n            type="text"\n            required={true}\n            requiredMessage={t(\'Username is mandatory\')}\n            regex="^[a-zA-Z0-9.]{1,20}$"\n            regexMessage={t(\'Username must contain only alphanumeric chars (max 20)\')}\n          />\n        </div>\n        <div>\n          <label>\n            <T>Password</T>\n            <span className="error">{getValidation(\'password\').message}</span>\n          </label>\n          <Input name="password" type="password" required={true} requiredMessage={t(\'Password is mandatory\')} />\n        </div>\n        <SubmitButton>\n          <T>Submit</T>\n        </SubmitButton>\n        <pre className="debug">{JSON.stringify(values, null, 2)}</pre>\n      </Form>\n    </div>\n  );\n};\n\nexport default LoginPage;\n')),(0,i.kt)("h2",{id:"adding-a-signup-page"},"Adding a signup page"),(0,i.kt)("p",null,"To introduce other features provided by the form library, let's build a sign up page.",(0,i.kt)("br",null),"\nThe signup page looks like the login page, except we don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"useLogin")," but a ",(0,i.kt)("inlineCode",{parentName:"p"},"usePost")," to build the submit function"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Two new hooks are introduced in the code below:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useAuthService"),": service used internally by ",(0,i.kt)("inlineCode",{parentName:"li"},"useLogin")," that offers a method to set the security context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useOnekiRouter"),": a simple hook to give access to the router. This is useful to redirect the user to another page")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/signup.tsx"',title:'"src/pages/signup.tsx"'},'const SignupPage: FC = () => {\n  const [T, t] = useTranslation();\n  const authService = useAuthService();\n  const router = useOnekiRouter();\n  const [submit] = usePost(\'/auth/signup\', {\n    onSuccess: (user) => {\n      // the API returns the user in the response\n      // we set the securityContext to log in the user\n      authService.setSecurityContext(user);\n      router.push(\'/\');\n    },\n  });\n  const { Form, getValidation } = useForm(submit);\n\n  return (\n    <div className="signup-container">\n      <Form className="signup-form">\n        <div>\n          <label>\n            <T>Username</T>\n            <span className="error">{getValidation(\'username\').message}</span>\n          </label>\n          <Input\n            name="username"\n            type="text"\n            required={true}\n            requiredMessage={t(\'Username is mandatory\')}\n            regex="^[a-zA-Z0-9.]{1,20}$"\n            regexMessage={t(\'Username must contain only alphanumeric chars (max 20)\')}\n          />\n        </div>\n        <div>\n          <label>\n            <T>Password</T>\n            <span className="error">{getValidation(\'password\').message}</span>\n          </label>\n          <Input name="password" type="password" required={true} requiredMessage={t(\'Password is mandatory\')} />\n        </div>\n        <SubmitButton>\n          <T>Submit</T>\n        </SubmitButton>\n      </Form>\n    </div>\n  );\n};\n\nexport default SignupPage;\n')),(0,i.kt)("p",null,"The router is updated to add a route for this page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{13-15} title="src/pages/_router.tsx"',"{13-15}":!0,title:'"src/pages/_router.tsx"'},'const RootRouter = (): JSX.Element => {\n  return (\n    <Switch>\n      <Route path="/login">\n        <LoginPage />\n      </Route>\n      <Route path="/logout">\n        <LogoutPage />\n      </Route>\n      <Route>\n        <AppLayout>\n          <Switch>\n            <Route path="/signup">\n              <SignupPage />\n            </Route>\n            <Route path="/products">\n              <ProductsRouter />\n            </Route>\n            <Route path="/cart">\n              <CartPage />\n            </Route>\n            <Route>\n              <Redirect href="/products" />\n            </Route>\n          </Switch>\n        </AppLayout>\n      </Route>\n    </Switch>\n  );\n};\n\nexport default RootRouter;\n')),(0,i.kt)("h2",{id:"adding-a-rule"},"Adding a rule"),(0,i.kt)("p",null,"If you signup two times with the same username, the server returns an error.",(0,i.kt)("br",null),"\nWe want to improve the user experience and let the user know that the username already exists as soon as he fills it in."),(0,i.kt)("p",null,"Oneki.js provides a hook to add some logic reacting on a value change: ",(0,i.kt)("inlineCode",{parentName:"p"},"useRule"),".",(0,i.kt)("br",null),"\nLet's add a rule to verify if the username already exists or not by sending an AJAX request to the server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{15-32} title="src/pages/signup.tsx"',"{15-32}":!0,title:'"src/pages/signup.tsx"'},"const SignupPage: FC = () => {\n  const [T, t] = useTranslation();\n  const authService = useAuthService();\n  const router = useOnekiRouter();\n  const [submit] = usePost('/auth/signup', {\n    onSuccess: (user) => {\n      // the API returns the user in the response\n      // we set the securityContext to log in the user\n      authService.setSecurityContext(user);\n      router.push('/');\n    },\n  });\n  const { Form, getValidation, getValue, setError } = useForm(submit);\n\n  useRule(\n    async (username) => {\n      // username is coming from getValue('username') \n      // (second parameter of useRule)\n      let isError = false;\n      try {\n        await asyncGet(`/users/${username}`);\n        isError = true; // user already exists on the server\n      } catch {} // server returned a 404 response\n      setError(\n        'username', // the field to put in error\n        'usernameAlreadyExists', // validator name - must be unique per field\n        t('Username already exists'), // error message\n        isError, // flag indicating if there is an error or not\n      );\n    },\n    [getValue('username')], // a list of fields on which the rule reacts\n  );\n\n  return (\n    <div className=\"signup-container\">\n      <Form className=\"signup-form\">\n        <div>\n          <label>\n            <T>Username</T>\n            <span className=\"error\">{getValidation('username').message}</span>\n          </label>\n          <Input\n            name=\"username\"\n            type=\"text\"\n            required={true}\n            requiredMessage={t('Username is mandatory')}\n            regex=\"^[a-zA-Z0-9.]{1,20}$\"\n            regexMessage={t('Username must contain only alphanumeric chars (max 20)')}\n          />\n        </div>\n        <div>\n          <label>\n            <T>Password</T>\n            <span className=\"error\">{getValidation('password').message}</span>\n          </label>\n          <Input name=\"password\" type=\"password\" required={true} requiredMessage={t('Password is mandatory')} />\n        </div>\n        <SubmitButton>\n          <T>Submit</T>\n        </SubmitButton>\n      </Form>\n    </div>\n  );\n};\n\nexport default SignupPage;\n")),(0,i.kt)("h2",{id:"next-step"},"Next step"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"service"},"In the next step")),", we introduce the concept of services which allow adding complex logic to the application."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);