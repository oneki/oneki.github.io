"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[59411],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a().createContext({}),c=function(e){var n=a().useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a().createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a().createElement(a().Fragment,{},n)}},f=a().forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?a().createElement(m,l(l({ref:n},i),{},{components:t})):a().createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a().createElement.apply(null,s)}return a().createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t.n(r),o=t(86010),s="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(87462),a=t(67294),o=t.n(a),s=t(86010),l=t(12466),u=t(45315),i=t(91980),c=t(67392),p=t(50012);function d(e){return function(e){var n,t;return null!=(n=null==(t=o().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,u.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function y(e){var n,t,r,o,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,i=e.groupId,c=f(e),d=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:c})})),y=d[0],b=d[1],h=v({queryString:u,groupId:i}),g=h[0],j=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),t=(0,p.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),x=w[0],C=w[1],k=function(){var e=null!=g?g:x;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){k&&b(k)}),[k]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),j(e),C(e)}),[j,C,c]),tabValues:c}}var b=t(72389),h="tabList__CuJ",g="tabItem_LNqP";function j(e){var n=e.className,t=e.block,a=e.selectedValue,u=e.selectValue,i=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(p(n),u(r))},f=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,s=c.indexOf(e.currentTarget)-1;t=null!=(o=c[s])?o:c[c.length-1]}null==(n=t)||n.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},i.map((function(e){var n=e.value,t=e.label,l=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,key:n,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},l,{className:(0,s.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":a===n})}),null!=t?t:n)})))}function w(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function x(e){var n=y(e);return o().createElement("div",{className:(0,s.Z)("tabs-container",h)},o().createElement(j,(0,r.Z)({},e,n)),o().createElement(w,(0,r.Z)({},e,n)))}function C(e){var n=(0,b.Z)();return o().createElement(x,(0,r.Z)({key:String(n)},e))}},17074:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(74866),l=t(85162),u=["components"],i={id:"file-structure",title:"File structure",sidebar_label:"File structure"},c=void 0,p={unversionedId:"advanced/file-structure",id:"advanced/file-structure",title:"File structure",description:"We recommend the following file structure:",source:"@site/docs/advanced/100_file-structure.md",sourceDirName:"advanced",slug:"/advanced/file-structure",permalink:"/docs/advanced/file-structure",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/advanced/100_file-structure.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{id:"file-structure",title:"File structure",sidebar_label:"File structure"},sidebar:"someSidebar",previous:{title:"Local service",permalink:"/docs/framework/service/local-service"},next:{title:"CRUD application",permalink:"/docs/examples/crud-app"}},d={},f=[],m={toc:f};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We recommend the following file structure:"),(0,o.kt)(s.Z,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"My-App\n\u251c\u2500 public // see nextjs documentation\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in french\n\u2502  \u251c\u2500 logo.svg \n\u2502  \u251c\u2500 robots.txt \n\u2502  \u2514\u2500 ... // You are free to create your own structure \n\u2502\n\u251c\u2500 src\n\u2502  \u251c\u2500 components // folder containing all components but routes\n\u2502  \u2502  \u251c\u2500 myComponent // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 myComponentHeader // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export MyComponent\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.module.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 MyComponent.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 css\n\u2502  \u2502  \u2514\u2500 app.css // see nextjs documentation\n\u2502  \u2502\n\u2502  \u251c\u2500 layout // folder containing all layouts\n\u2502  \u2502  \u251c\u2500 siteLayout // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 Header // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as SiteLayout folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export SiteLayout\n\u2502  \u2502  \u2502  \u251c\u2500 SiteLayout.module.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 SiteLayout.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 SiteLayout.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 pages // folder containing all pages. Pages are the entry points (see nextjs doc)\n\u2502  \u2502  \u251c\u2500 [lang]] // a folder is created for each top route\n\u2502  \u2502  \u2502  \u251c\u2500 users // a folder is created for each top route\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 [id] // Dynamic route, see nextjs documentation\n\u2502  \u2502  \u2502  \u2502  \u2502  \u251c\u2500 edit.js //edit user page /users/:id/edit\n\u2502  \u2502  \u2502  \u2502  \u2502  \u2514\u2500 index.js //view user page /users/:id\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 index.js // list all users page /users\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 new.js // new user page /users/new\n\u2502  \u2502  \u251c\u2500 _app.js // the wrapper component common to all pages that bootstraps the App (<NextApp />)\n\u2502  \u2502  \u2514\u2500 index.js // the index page /. Redirect to the correct locale\n\u2502  \u2502\n\u2502  \u251c\u2500 utils // a folder to contain any utility code. You are free to create your own structure\n\u2502  \u2502  \u251c\u2500 string.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502\n\u2502  \u2514\u2500 settings.js // a central file to configure your app\n\u2502\n\u251c\u2500 .env.development // contain variables specific to the DEV environement\n\u251c\u2500 .env.development.local // contains sensitive data (not commited on GIT)\n\u251c\u2500 .gitignore\n\u251c\u2500 next.config.js // not mandatory. Specific configuration for nextjs\n\u251c\u2500 package.json\n\u251c\u2500 postcss.config.js // not mandatory. Only present if postcss is used\n\u251c\u2500 README.md\n\u251c\u2500 yarn.lock\n"))),(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"My-App\n\u251c\u2500 public // see create react app documentation\n\u2502  \u251c\u2500 locales\n\u2502  \u2502  \u2514\u2500 en\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in english\n\u2502  \u2502  \u2514\u2500 fr\n\u2502  \u2502  \u2502  \u2514\u2500 translation.json // locales in french\n\u2502  \u251c\u2500 index.html // index.html generated by create-react-app\n\u2502  \u2514\u2500 ... // You are free to create your own structure \n\u2502\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u2502  \u251c\u2500 img // folder containing common images included in the bundle\n\u2502  \u2502  \u251c\u2500 fonts // folder containing common fonts included in the bundle\n\u2502  \u2502  \u2514\u2500 files // folder containing common files included in the bundle\n\u2502  \u2502\n\u2502  \u251c\u2500 components // folder containing all components but routes\n\u2502  \u2502  \u251c\u2500 myComponent // a folder is created for each standalone component (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 myComponentHeader // Each slave component has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export MyComponent\n\u2502  \u2502  \u2502  \u251c\u2500 image1.png // a file needed only by MyComponent (camelCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.css // Optional: the CSS of the component (PascalCase)\n\u2502  \u2502  \u2502  \u251c\u2500 MyComponent.js // The component itself (PascalCase)\n\u2502  \u2502  \u2502  \u2514\u2500 MyComponent.test.js  // Unit tests of the component (PascalCase)\n\u2502  \u2502\n\u2502  \u251c\u2500 routes // folder containing all routes\n\u2502  \u2502  \u251c\u2500 users // a folder is created for each top route\n\u2502  \u2502  \u2502  \u251c\u2500 create // Each sub route has its own folder\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...  // Same structure as myComponent folder\n\u2502  \u2502  \u2502  \u251c\u2500 display\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502  \u2502  \u251c\u2500 edit\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 list\n\u2502  \u2502  \u2502  \u2502  \u2514\u2500 ... \n\u2502  \u2502  \u2502  \u251c\u2500 index.js // a file that export Users\n\u2502  \u2502  \u2502  \u251c\u2500 Users.js // The component itself\n\u2502  \u2502  \u2502  \u2514\u2500 Users.test.js  // Unit tests of the component\n\u2502  \u2502\n\u2502  \u251c\u2500 utils // a folder to contain any code. You are free to create your own structure\n\u2502  \u2502  \u251c\u2500 string.js\n\u2502  \u2502  \u2514\u2500 ...\n\u2502  \u2502\n\u2502  \u251c\u2500 i18n.js // Bootstrap of the i18n library\n\u2502  \u251c\u2500 index.js // The bootstrap of the app (entry point)\n\u2502  \u251c\u2500 serviceWorker.js // generated by create react app\n\u2502  \u251c\u2500 settings.js // a central file to configure your app\n\u2502  \u2514\u2500 setupTests.js  // generated by create react app\n\u2502\n\u251c\u2500 .gitignore\n\u251c\u2500 package.json\n\u251c\u2500 README.md\n\u251c\u2500 yarn.lock\n")))))}v.isMDXComponent=!0}}]);