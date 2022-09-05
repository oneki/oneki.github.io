"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13874],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(72389),s=n(67392),u=n(7094),p=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,g=e.defaultValue,h=e.values,f=e.groupId,k=e.className,b=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,j=y.setTabGroupChoices,E=(0,r.useState)(x),C=E[0],Z=E[1],I=[],R=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=w[f];null!=T&&T!==C&&v.some((function(e){return e.value===T}))&&Z(T)}var _=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==C&&(R(t),Z(a),null!=f&&j(f,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var o,i=I.indexOf(e.currentTarget)-1;n=null!=(o=I[i])?o:I[I.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",c)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:_,onClick:_},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function g(e){var t=(0,l.Z)();return o().createElement(m,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return console.log("children",t),r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),u=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,u=void 0===l?"react18":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next"+(a||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=e.branch,l=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,p=e.view,c="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===p?"editor":p);o&&(c+="&module=",o.forEach((function(e,t){t>0&&(c+=","),c+=e})));var d="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:d,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,p=e.nextModules,c=e.height,d=void 0===c?600:c,m=e.branch,g=void 0===m?"master":m;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:g,height:d,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:d,modules:p||n})))};t.ZP=l},92403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(44996),l=(n(65488),n(85162),n(32779),n(20819),["components"]),s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},u=void 0,p={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"",source:"@site/docs/getting-started/001_introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Creating the project",permalink:"/docs/getting-started/creating-project"}},c={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Optional reading",id:"optional-reading",level:4},{value:"Next step",id:"next-step",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a React framework based of the following components: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reacttraining.com/react-router/"},"Next.js")," or ",(0,o.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-saga.js.org/"},"Redux Saga")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer")," ")),(0,o.kt)("img",{alt:"Onekijs architecture",src:(0,i.Z)("img/onekijs-Application.svg")}),";",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to propose a framework built on top of these librairies that hides most of their complexities.",(0,o.kt)("br",null),"\nThus, the developer can more easily build webapps by respecting the best practices (e.g: immutability)",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a framework built on top of React. It uses React to render the view",(0,o.kt)("br",null),"It's strongly recommended to read ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/tutorial/tutorial.html"},"the official tutorial"))," available on their website"),(0,o.kt)("p",null,"Depending on the build tool you prefer to use, you should also read these documentations:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://create-react-app.dev"},"Create React App"))),(0,o.kt)("td",{parentName:"tr",align:null},"The tool from the React team to build a React application"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://create-react-app.dev"},"Create React App"))," and ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://reactrouter.com/docs/en/v6"},"React router")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Create Next App"))),(0,o.kt)("td",{parentName:"tr",align:null},"The tool to build a Next.js app. Useful if you need server rendering"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Next.js")))))),(0,o.kt)("h4",{id:"optional-reading"},"Optional reading"),(0,o.kt)("p",null,"Under the hood, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," uses ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org"},"Redux"))," to manage global state, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://immerjs.github.io/immer"},"Immer"))," for immutability and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-saga.js.org"},"Redux Saga"))," for asynchronous streams.",(0,o.kt)("br",null),"\nThese libraries are completely hidden, but if you want to master ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs")),", it can be interesting to read their docs."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"The objective of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to offer a complete React framework comparable to that offered by Angular.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"creating-project"},"In the next step")),", we will build an application strongly based on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://angular.io/start"},"basic Angular application"))," that you can find on the official Angular webiste.",(0,o.kt)("br",null)))}g.isMDXComponent=!0}}]);