"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[22387],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),i=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(67294),i=n.n(r),o=n(86010),l=n(72389),s=n(67392),u=n(7094),d=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,g=e.defaultValue,h=e.values,f=e.groupId,v=e.className,b=i().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],Z=T[1],j=[],_=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=N[f];null!=A&&A!==C&&k.some((function(e){return e.value===A}))&&Z(A)}var I=function(e){var t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==C&&(_(t),Z(a),null!=f&&E(f,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;n=null!=(i=j[o])?i:j[j.length-1]}null==(t=n)||t.focus()};return i().createElement("div",{className:(0,o.Z)("tabs-container",p)},i().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i().createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:I,onClick:I},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function g(e){var t=(0,l.Z)();return i().createElement(m,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),i=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(i.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return u}});var a=n(67294),r=n.n(a),i=n(64094),o=n(85162),l=n(95665),s=n.n(l),u=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,u=void 0===l?"react18":l;return r().createElement(i.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra"+(n||t)+"\n")),r().createElement(o.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next"+(a||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),i=n(64094),o=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,i=e.modules,o=e.branch,l=void 0===o?"master":o,s=e.type,u=void 0===s?"examples":s,d=e.view,p=void 0===d?"editor":d,c="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;i&&(m+="&module=",i.forEach((function(e,t){t>0&&(m+=","),m+=e})));var g="onekijs-"+t.split("/").join("-"),h="https://github.com/oneki/onekijs/tree/"+l+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:c,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:g,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:h,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,d=e.nextModules,p=e.height,c=void 0===p?600:p,m=e.branch,g=void 0===m?"master":m;return r().createElement(i.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:g,height:c,modules:s||n})),r().createElement(o.Z,{value:"next"},r().createElement(l,{name:u||t,type:"getting-started/next",view:"preview",branch:g,height:c,modules:d||n})))};t.ZP=l},27212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(44996),n(64094)),l=n(85162),s=n(32779),u=n(20819),d=["components"],p={id:"form",title:"Using form for user input",sidebar_label:"Using form for user input"},c=void 0,m={unversionedId:"getting-started/form",id:"getting-started/form",title:"Using form for user input",description:"",source:"@site/docs/getting-started/010_form.md",sourceDirName:"getting-started",slug:"/getting-started/form",permalink:"/docs/getting-started/form",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/010_form.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"form",title:"Using form for user input",sidebar_label:"Using form for user input"},sidebar:"someSidebar",previous:{title:"Internationalization",permalink:"/docs/getting-started/i18n"},next:{title:"Adding a service",permalink:"/docs/getting-started/service"}},g={},h=[{value:"Final result",id:"final-result",level:2},{value:"Adding validation",id:"adding-validation",level:2},{value:"Adding a signup page",id:"adding-a-signup-page",level:2},{value:"Next step",id:"next-step",level:2}],f={toc:h};function v(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This step consists in introducing how to build form with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onekijs"))),(0,i.kt)("p",null,"Building forms with React requires a lot of code and can be difficult to maintain.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onekijs"))," offers a library to control a form and drastically reduce the code."),(0,i.kt)("h2",{id:"final-result"},"Final result"),(0,i.kt)("p",null,"The result of this step is as follows:"),(0,i.kt)("admonition",{title:"New in this step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The login page now validates that the username and password are filled in."),(0,i.kt)("p",{parentName:"admonition"},"A new page is added for registration. The form on the registration page asynchronously checks wether the username is available or not",(0,i.kt)("br",null),"\nSome elements of the form are displayed or not depending on the value of a field")),(0,i.kt)(s.g0,{name:"step09-form",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,i.kt)("h2",{id:"adding-validation"},"Adding validation"),(0,i.kt)("p",null,"Let's update the login page to verify that the username and password are filled in and that the username contains only alphanumeric charaters (max size 20)",(0,i.kt)("br",null),'\nThe value of the form is updated every time the user enters a caracter. At the bottom of the form, We add a "debug" component to display the value of the form in real time',(0,i.kt)("br",null),"\nThis real-time update also allows to have a real time validation."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We use the component ",(0,i.kt)("inlineCode",{parentName:"p"},"<Input />")," from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onekijs")),". This component is a wrapper of ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," that can interact with a ",(0,i.kt)("inlineCode",{parentName:"p"},"FormContext")," created by ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm"))),(0,i.kt)(u.b4,{path:"/step09-form/src/pages/login.tsx",mdxType:"GettingStartedSnippet"}),(0,i.kt)("h2",{id:"adding-a-signup-page"},"Adding a signup page"),(0,i.kt)("p",null,"To introduce more functionality provided by the form library, let's build the registration page.",(0,i.kt)("br",null),"\nThe registration page is similar to the login page, except that we don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"useLogin")," but a ",(0,i.kt)("inlineCode",{parentName:"p"},"usePost")," to build the submit function"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Two new hooks are introduced in the code below:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useAuthService"),": a service used internally by ",(0,i.kt)("inlineCode",{parentName:"li"},"useLogin")," that provides a method to set the security context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useRouter"),": a simple hook to give access to the router. This is useful to redirect the user to another page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useRule"),":  a hook that reacts to a value change and executes some logic"))),(0,i.kt)("p",null,"If you register twice with the same username, the server returns an error.",(0,i.kt)("br",null),"\nWe want to improve the user experience and let the user know that the username already exists as soon as they fill it in."),(0,i.kt)("p",null,"Let's add a rule (by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"useRule"),") to verify if the username already exists or not by sending an AJAX request to the server"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step09-form/src/pages/signup.tsx\n")),(0,i.kt)("p",null,"The router is updated to add a route for this page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step09-form/src/pages/_router.tsx\n"))),(0,i.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step09-form/src/pages/signup.tsx\n")))),(0,i.kt)("h2",{id:"next-step"},"Next step"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"service"},"In the next step")),", we introduce the concept of services which allow to add complex logic to the application."))}v.isMDXComponent=!0}}]);