"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13874],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n.n(r),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(67294),o=n.n(a),i=n(86010),l=n(72389),s=n(67392),u=n(7094),p=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,g=e.defaultValue,h=e.values,k=e.groupId,b=e.className,f=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(t=null!=g?g:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),y=w.tabGroupChoices,j=w.setTabGroupChoices,E=(0,a.useState)(x),Z=E[0],C=E[1],I=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var _=y[k];null!=_&&_!==Z&&v.some((function(e){return e.value===_}))&&C(_)}var R=function(e){var t=e.currentTarget,n=I.indexOf(t),r=v[n].value;r!==Z&&(T(t),C(r),null!=k&&j(k,String(r)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=I.indexOf(e.currentTarget)+1;n=null!=(r=I[a])?r:I[0];break;case"ArrowLeft":var o,i=I.indexOf(e.currentTarget)-1;n=null!=(o=I[i])?o:I[I.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",c)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:R,onClick:R},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function g(e){var t=(0,l.Z)();return o().createElement(m,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return u}});var r=n(67294),a=n.n(r),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),u=function(e){var t=e.path,n=e.craPath,r=e.nextPath,l=e.branch,u=void 0===l?"react18":l;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra"+(n||t)+"\n")),a().createElement(i.Z,{value:"next"},a().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next"+(r||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var r=n(67294),a=n.n(r),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,p=e.view,c=void 0===p?"editor":p,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+c;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:d,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,r=e.craName,s=e.craModules,u=e.nextName,p=e.nextModules,c=e.height,d=void 0===c?600:c,m=e.branch,g=void 0===m?"master":m;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(l,{name:r||t,type:"getting-started/cra",view:"preview",branch:g,height:d,modules:s||n})),a().createElement(i.Z,{value:"next"},a().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:d,modules:p||n})))};t.ZP=l},92403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(44996),l=(n(65488),n(85162),n(32779),n(20819),["components"]),s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},u=void 0,p={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"",source:"@site/docs/getting-started/001_introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Creating the project",permalink:"/docs/getting-started/creating-project"}},c={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Optional reading",id:"optional-reading",level:4},{value:"Next step",id:"next-step",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a React framework based of the following components: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reacttraining.com/react-router/"},"Next.js")," or ",(0,o.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-saga.js.org/"},"Redux Saga")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer")," ")),(0,o.kt)("img",{alt:"Onekijs architecture",src:(0,i.Z)("img/onekijs-Application.svg")}),";",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to propose a framework built on top of these librairies that hides most of their complexities.",(0,o.kt)("br",null),"\nThus, the developer can more easily build webapps by respecting the best practices (e.g: immutability)",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a framework built on top of React. It uses React to render the view",(0,o.kt)("br",null),"It's strongly recommended to read ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/tutorial/tutorial.html"},"the official tutorial"))," available on their website"),(0,o.kt)("p",null,"Depending on the build tool you prefer to use, you should also read these documentations:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite"))),(0,o.kt)("td",{parentName:"tr",align:null},"The most popular React bundler"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite"))," and ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://reactrouter.com/docs/en/v6"},"React router")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Create Next App"))),(0,o.kt)("td",{parentName:"tr",align:null},"The tool to build a Next.js app. Useful if you need server rendering"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Next.js")))))),(0,o.kt)("h4",{id:"optional-reading"},"Optional reading"),(0,o.kt)("p",null,"Under the hood, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," uses ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org"},"Redux"))," to manage global state, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://immerjs.github.io/immer"},"Immer"))," for immutability and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-saga.js.org"},"Redux Saga"))," for asynchronous streams.",(0,o.kt)("br",null),"\nThese libraries are completely hidden, but if you want to master ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs")),", it can be interesting to read their docs."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"The objective of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to offer a complete React framework comparable to that offered by Angular.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"creating-project"},"In the next step")),", we will build an application strongly based on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://angular.io/start"},"basic Angular application"))," that you can find on the official Angular webiste.",(0,o.kt)("br",null)))}g.isMDXComponent=!0}}]);