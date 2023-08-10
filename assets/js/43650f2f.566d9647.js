"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[97520],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(12466),s=n(45315),u=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=o().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function k(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,c=m(e),d=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),k=d[0],b=d[1],f=h({queryString:s,groupId:u}),v=f[0],x=f[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),y=N[0],w=N[1],j=function(){var e=null!=v?v:y;return g({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){j&&b(j)}),[j]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),w(e)}),[x,w,c]),tabValues:c}}var b=n(72389),f="tabList__CuJ",v="tabItem_LNqP";function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==r&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=k(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",f)},o().createElement(x,(0,a.Z)({},e,t)),o().createElement(N,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return o().createElement(y,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return u},e3:function(){return c}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),u=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,u=void 0===l?"master":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra/"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next/"+(a||t)+"\n")))},c=function(e){var t=e.path,n=e.branch,a=void 0===n?"master":n;return r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+a+"/examples/cra-examples/src/"+t+"\n")}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:d,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,g=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:g,height:d,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:d,modules:c||n})))};t.ZP=l},42875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094)),l=n(85162),s=n(32779),u=(n(20819),["components"]),c={id:"creating-project",title:"Creating the project",sidebar_label:"Creating the project"},p=void 0,d={unversionedId:"getting-started/creating-project",id:"getting-started/creating-project",title:"Creating the project",description:"This step consists in creating a standard React application without involving onekijs.",source:"@site/docs/getting-started/002_creating-project.md",sourceDirName:"getting-started",slug:"/getting-started/creating-project",permalink:"/docs/getting-started/creating-project",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/002_creating-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"creating-project",title:"Creating the project",sidebar_label:"Creating the project"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Adding navigation",permalink:"/docs/getting-started/navigation"}},m={},g=[{value:"Step Final result",id:"step-final-result",level:2},{value:"Creating the project",id:"creating-the-project",level:2},{value:"Structure",id:"structure",level:3},{value:"Next step",id:"next-step",level:2}],h={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in creating a standard React application ",(0,o.kt)("strong",{parentName:"p"},"without involving ",(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs")),".",(0,o.kt)("br",null),"\nThis application looks exactly like the one proposed on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://angular.io/start"},"Angular site"))," so you can compare the Angular and React versions."),(0,o.kt)("h2",{id:"step-final-result"},"Step Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"Code Editor",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The code below is hosted on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://codesandbox.io/"},"Code Sandbox")),". ",(0,o.kt)("br",null),'\nClick the "Open Sandbox" button to view/edit the code with an online IDE.')),(0,o.kt)(s.g0,{craName:"step01-react-app",nextName:"step01-next-app",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"creating-the-project"},"Creating the project"),(0,o.kt)("admonition",{title:"Typescript",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.typescriptlang.org/"},"Typescript"))," instead of javascript. Therefore, all examples are in Typescript.")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application is built with one of this build tool:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:null},"Librairies"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard React app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite"))),(0,o.kt)("td",{parentName:"tr",align:null},"OnekiJs, React, Redux, Immer, Saga, ",(0,o.kt)("strong",{parentName:"td"},"React Router Dom"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Next.js app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Create Next App"))),(0,o.kt)("td",{parentName:"tr",align:null},"OnekiJs, React, Redux, Immer, Saga, ",(0,o.kt)("strong",{parentName:"td"},"Next"),", ",(0,o.kt)("strong",{parentName:"td"},"Next Router"))))),(0,o.kt)("p",null,"From then on, you benefit from all the advantages brought by this tool."),(0,o.kt)("admonition",{title:"Tabs",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The code is slightly different depending on the framework used. Click on the corresponding tab to display the code corresponding to the type of application you want to build.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vite")," is the most popular tool to boostrap a React project. ",(0,o.kt)("br",null),"\nTo create a projet named ",(0,o.kt)("strong",{parentName:"p"},"mystore-app"),", enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// npm install -g yarn\nyarn create vite mystore-app --template react-ts\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create next app")," is the tool to boostrap a Next.js project. ",(0,o.kt)("br",null),"\nTo create a projet named ",(0,o.kt)("strong",{parentName:"p"},"mystore-app"),", enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// npm install -g yarn\nyarn create next-app --typescript\n")))),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Even if the project is very simple at this stage, we already structure the project as recommended ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../advanced/file-structure"},"in this chapter")),".",(0,o.kt)("br",null)),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/index.tsx#L7-L15\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step01-react-app/src/pages/products/index.tsx#L4-L43\n")),(0,o.kt)("p",null,"Via a command line enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd mystore-app\nyarn start\n"))),(0,o.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/_app.tsx#L7-L18\n")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step01-next-app/src/pages/index.tsx#L7-L40\n")),(0,o.kt)("p",null,"Via a command line enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd mystore-app\nyarn dev\n")))),(0,o.kt)("p",null,"to start a livereload webserver. The website is available at http://localhost:3000",(0,o.kt)("br",null),"\nAny change to the source code will refresh the page to reflect the change."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"navigation"},"In the next step")),", we will transform this standard React application into an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," application and add the ability to navigate between pages."))}k.isMDXComponent=!0}}]);