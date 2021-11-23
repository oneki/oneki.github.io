"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[97520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r().createContext({}),c=function(e){var t=r().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r().createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r().createElement(g,l(l({ref:t},p),{},{components:n})):r().createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(52263),r=n(13919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),o=n.n(r),i=n(72389),l=n(79443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,i=e.lazy,l=e.block,d=e.defaultValue,m=e.values,g=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,p.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),y=N.tabGroupChoices,x=N.setTabGroupChoices,w=(0,r.useState)(b),j=w[0],T=w[1],O=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=y[g];null!=E&&E!==j&&f.some((function(e){return e.value===E}))&&T(E)}var Z=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==j&&(C(t),T(a),null!=g&&x(g,a))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:"tabs-container"},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},f.map((function(e){var t=e.value,n=e.label;return o().createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":j===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:R,onFocus:Z,onClick:Z},null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o().createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,i.Z)();return o().createElement(d,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=n(67294),r=(0,a.createContext)(void 0);t.Z=r},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(26396);n(58215);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){var a=n(67294),r=n.n(a);t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,p=void 0===s?"examples":s,c=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+p+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===c?"editor":c);o&&(u+="&module=",o.forEach((function(e,t){t>0&&(u+=","),u+=e})));var d="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:u,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},42875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(44996),n(64094)),l=n(58215),s=n(32779),p=["components"],c={id:"creating-project",title:"Creating the project",sidebar_label:"Creating the project"},u=void 0,d={unversionedId:"getting-started/creating-project",id:"getting-started/creating-project",isDocsHomePage:!1,title:"Creating the project",description:"This step consists in creating a standard React application without involving Oneki.js.",source:"@site/docs/getting-started/002_creating-project.md",sourceDirName:"getting-started",slug:"/getting-started/creating-project",permalink:"/docs/getting-started/creating-project",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/002_creating-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"creating-project",title:"Creating the project",sidebar_label:"Creating the project"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Adding navigation",permalink:"/docs/getting-started/navigation"}},m=[{value:"Step Final result",id:"step-final-result",children:[],level:2},{value:"Creating the project",id:"creating-the-project",children:[{value:"Structure",id:"structure",children:[],level:3}],level:2},{value:"Next step",id:"next-step",children:[],level:2}],g={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in creating a standard React application ",(0,o.kt)("strong",{parentName:"p"},"without involving Oneki.js"),".",(0,o.kt)("br",null),"\nThis application looks exactly like the one proposed on the ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/start"},"Angular site")," so you can compare the Angular and React versions."),(0,o.kt)("h2",{id:"step-final-result"},"Step Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Code Editor")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The code below is hosted on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://codesandbox.io/"},"Code Sandbox")),". ",(0,o.kt)("br",null),'\nClick the "Open Sandbox" button to view/edit the code with an online IDE.'))),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)(s.Z,{name:"step01-react-app",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"})),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)(s.Z,{name:"step01-next-app",type:"getting-started/next",view:"preview",height:"600",modules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,o.kt)("h2",{id:"creating-the-project"},"Creating the project"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Typescript")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.typescriptlang.org/"},"Typescript"))," instead of javascript. Therefore, all examples are in Typescript."))),(0,o.kt)("p",null,"A Oneki.js application is built with one of this build tool:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:null},"Librairies"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard React app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://create-react-app.dev"},"Create React App"))),(0,o.kt)("td",{parentName:"tr",align:null},"OnekiJs, React, Redux, Immer, Saga, ",(0,o.kt)("strong",{parentName:"td"},"React Router Dom"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Next.js app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Create Next App"))),(0,o.kt)("td",{parentName:"tr",align:null},"OnekiJs, React, Redux, Immer, Saga, ",(0,o.kt)("strong",{parentName:"td"},"Next"),", ",(0,o.kt)("strong",{parentName:"td"},"Next Router"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gatsby app"),(0,o.kt)("td",{parentName:"tr",align:null},"Not yet supported"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"From then on, you benefit from all the advantages brought by this tool."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Tabs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The code is slightly different depending on the framework used. Click on the corresponding tab to display the code corresponding to the type of application you want to build."))),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create react app")," is the most popular tool to boostrap a React project. ",(0,o.kt)("br",null),"\nTo create a projet named ",(0,o.kt)("strong",{parentName:"p"},"mystore-app"),", enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// npm install -g yarn\nyarn create react-app mystore-app --template typescript\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create next app")," is the tool to boostrap a Next.js project. ",(0,o.kt)("br",null),"\nTo create a projet named ",(0,o.kt)("strong",{parentName:"p"},"mystore-app"),", enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// npm install -g yarn\nyarn create next-app --typescript\n")))),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Even if the project is very simple at this stage, we already structure the project as recommended ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../advanced/file-structure"},"in this chapter")),".",(0,o.kt)("br",null)),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/index.tsx#L7-L15\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/pages/products/index.tsx#L4-L43\n")),(0,o.kt)("p",null,"Via a command line enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd mystore-app\nyarn start\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/_app.tsx#L7-L18\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/index.tsx#L7-L40\n")),(0,o.kt)("p",null,"Via a command line enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd mystore-app\nyarn dev\n")))),(0,o.kt)("p",null,"to start a livereload webserver. The website is available at http://localhost:3000",(0,o.kt)("br",null),"\nAny change to the source code will refresh the page to reflect the change."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"navigation"},"In the next step")),", we will transform this standard React application into an Oneki.js application and add the ability to navigate between pages."))}h.isMDXComponent=!0}}]);