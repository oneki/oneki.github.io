"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[75463],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n.n(a),o=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),o=n.n(r),i=n(86010),l=n(72389),s=n(67392),d=n(7094),p=n(12466),m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,h=e.defaultValue,g=e.values,k=e.groupId,b=e.className,f=o().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(N,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,d.U)(),w=x.tabGroupChoices,C=x.setTabGroupChoices,j=(0,r.useState)(y),T=j[0],E=j[1],S=[],Z=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var _=w[k];null!=_&&_!==T&&N.some((function(e){return e.value===_}))&&E(_)}var I=function(e){var t=e.currentTarget,n=S.indexOf(t),a=N[n].value;a!==T&&(Z(t),E(a),null!=k&&C(k,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;n=null!=(o=S[i])?o:S[S.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",m)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},N.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o().createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:A,onFocus:I,onClick:I},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,l.Z)();return o().createElement(c,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,n){n.d(t,{b4:function(){return d}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=n(95665),s=n.n(l),d=function(e){var t=e.path,n=e.craPath,a=e.nextPath,l=e.branch,d=void 0===l?"react18":l;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+d+"/getting-started/cra"+(n||t)+"\n")),r().createElement(i.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+d+"/getting-started/next"+(a||t)+"\n")))}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return d}});var a=n(67294),r=n.n(a),o=n(64094),i=n(85162),l=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,o=e.modules,i=(e.branch,e.type,e.view,"https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/");o&&("&module=",o.forEach((function(e,t){t>0&&",",e})));var l="onekijs-"+t.split("/").join("-");return r().createElement("iframe",{src:i,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:l,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},d=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,d=e.nextName,p=e.nextModules,m=e.height,u=void 0===m?600:m,c=e.branch,h=void 0===c?"master":c;return r().createElement(o.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(l,{name:a||t,type:"getting-started/cra",view:"preview",branch:h,height:u,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(l,{name:d||t,type:"getting-started/next",view:"preview",branch:h,height:u,modules:p||n})))};t.ZP=l},67075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(64094),n(85162),n(32779)),l=n(20819),s=["components"],d={id:"theming",title:"Theming",sidebar_label:"Theming"},p=void 0,m={unversionedId:"getting-started/theming",id:"getting-started/theming",title:"Theming",description:"",source:"@site/docs/getting-started/012_theming.md",sourceDirName:"getting-started",slug:"/getting-started/theming",permalink:"/docs/getting-started/theming",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/012_theming.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"theming",title:"Theming",sidebar_label:"Theming"},sidebar:"someSidebar",previous:{title:"Adding a service",permalink:"/docs/getting-started/service"},next:{title:"Introduction",permalink:"/docs/framework/introduction"}},u={},c=[{value:"Final result",id:"final-result",level:2},{value:"Adding onekijs-ui to the project",id:"adding-onekijs-ui-to-the-project",level:2},{value:"Theme colors",id:"theme-colors",level:2},{value:"Upgrading the Navbar component",id:"upgrading-the-navbar-component",level:2},{value:"Next step",id:"next-step",level:2}],h={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step consists in introducing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui"))," which is a library that provides many components. Some of them are very complex like a data table with infinite scrolling.",(0,o.kt)("br",null),"\nIn order to have a consistent look and feel (consistent color, padding, marging, ...), the style of these components is centralized in a customizable theme."),(0,o.kt)("p",null,"In this step we present how the theme works and how we can use it to update the look and feel of our website.",(0,o.kt)("br",null),"\nIn the next step, we will introduce some of the components provided by  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To style the components, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui"))," uses the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://styled-components.com/"},"styled components"))," library. It's ",(0,o.kt)("em",{parentName:"p"},"strongly")," recommended to learn this library !")),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"The result of this step is as follows:"),(0,o.kt)("admonition",{title:"New in this step",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The background color of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Navbar />")," is from the theme",(0,o.kt)("br",null),"\nThe font family is also from the theme")),(0,o.kt)(i.g0,{name:"step11-theming",craModules:["/src/index.tsx","/src/pages/products/index.tsx"],nextModules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"GettingStartedSandbox"}),(0,o.kt)("h2",{id:"adding-onekijs-ui-to-the-project"},"Adding onekijs-ui to the project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui"))," is a standalone library. So we have to add it to the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add onekijs-ui\n")),(0,o.kt)("p",null,"Once the library is added, the entrypoint (",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx"),") must be updated to wrap all components in a theme"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"<ClarityTheme />")," which is a theme provided by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui")),". This theme implements the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://clarity.design"},"Clarity Design System"))," from VMware",(0,o.kt)("br",null),"\nYou can have a look at all the parameters defining the theme ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oneki/onekijs/blob/master/packages/onekijs-ui/src/theme/clarity.tsx"},"here")),(0,o.kt)("br",null),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs-ui"))," allows you to build your own theme from scratch or extend an existing theme to adapt it.")),(0,o.kt)(l.b4,{craPath:"/step11-theming/src/index.tsx",nextPath:"/step11-theming/src/pages/_app.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,o.kt)("p",null,"We want to update the navbar so the background color is coming from the theme and not from ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css"),(0,o.kt)("br",null),"\nConcerning the colors, ",(0,o.kt)("strong",{parentName:"p"},"Onekijs-ui")," is inspired by [Bootstrap",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/bootstrap5/bootstrap_colors.php"})," and a theme defines several ones:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"primary")),(0,o.kt)("td",{parentName:"tr",align:null},"The main color. Generally used for important element like a submit button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"secondary")),(0,o.kt)("td",{parentName:"tr",align:null},"The second main color. Generally used for less important element")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"success")),(0,o.kt)("td",{parentName:"tr",align:null},"A color to represent a success")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"info")),(0,o.kt)("td",{parentName:"tr",align:null},"A color to represnet some information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"warning")),(0,o.kt)("td",{parentName:"tr",align:null},"A color to indicate a warning")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"danger")),(0,o.kt)("td",{parentName:"tr",align:null},"A color to indicate a danger / error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"white")),(0,o.kt)("td",{parentName:"tr",align:null},"white color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"black")),(0,o.kt)("td",{parentName:"tr",align:null},"black color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"light")),(0,o.kt)("td",{parentName:"tr",align:null},"a light color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lightest")),(0,o.kt)("td",{parentName:"tr",align:null},"a very light color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"dark")),(0,o.kt)("td",{parentName:"tr",align:null},"a dark color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"darkest")),(0,o.kt)("td",{parentName:"tr",align:null},"a very dark color")))),(0,o.kt)("p",null,"This means that if a component defines its background color as ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary"),", the color will be the one identified by the key ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary")," in the theme."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Actually, more colors are defined by the theme, the list is available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oneki/onekijs/blob/master/packages/onekijs-ui/src/theme/base.tsx"},"here")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The theme defines not only the colors but also the spacing, border radius, padding, ...")),(0,o.kt)("h2",{id:"upgrading-the-navbar-component"},"Upgrading the Navbar component"),(0,o.kt)("p",null,"As we want to use a color coming from the theme, we can't use anymore ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")," to define the background color of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Navbar/>")),(0,o.kt)("p",null,"Therefore, the first thing to do is to update ",(0,o.kt)("inlineCode",{parentName:"p"},"<Navbar>")," to use a classname generated by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://styled-components.com/"},"styled-components"))," instead of the classname defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FCC, ... } from 'onekijs';\nimport React from 'react';\nimport styled from 'styled-components';\n\nconst Navbar: FCC = ({ className }) => { // FCC is like React.FC but add children and className to the props\n  ...\n  return (\n    <div className={className}>\n      ...\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"The prop ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," is injected by styled-components like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"//instead of exporting the Navbar directly, we export the styled version\nexport default styled(Navbar)`\n  // CSS HERE\n`;\n")),(0,o.kt)("p",null,"To define the style of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Navbar/>"),", we could use standard CSS like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import styled from 'styled-components';\n\n\nexport default styled(Navbar)`\n  width: 100%;\n  height: 68px;\n  background-color: #1976d2;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  h1 {\n    color: white;\n  }\n`;\n")),(0,o.kt)("p",null,"But we want to use the color from the theme and not an hardcoded one. ",(0,o.kt)("br",null),"\nTo achieve that, for each CSS property, ",(0,o.kt)("strong",{parentName:"p"},"Onekijs-ui")," provides a method that has access to the theme and therefore can reference a property in the theme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  alignItems,\n  backgroundColor,\n  color,\n  display,\n  flexDirection,\n  height,\n  justifyContent,\n  padding,\n  width,\n} from 'onekijs-ui';\nimport styled from 'styled-components';\n\n\nexport default styled(Navbar)`\n  ${backgroundColor('secondary')} // use the key 'secondary' from the theme to define the color\n  ${width('100%')}\n  ${height('68px')}\n  ${padding('lg')} // use the key 'lg' from the theme to define the size\n  ${display('flex')}\n  ${flexDirection('row')}\n  ${justifyContent('space-between')}\n  ${alignItems('center')}\n\n  h1 {\n    ${color('white')}\n  }\n`;\n")),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"the CSS methods provided by oneki (backgroundColor, width, ...) can do more that just retrieving a color from the theme",(0,o.kt)("br",null),"\nPlease read this documentation to learn more")),(0,o.kt)("p",null,"The final ",(0,o.kt)("inlineCode",{parentName:"p"},"<Navbar />")," now looks like this"),(0,o.kt)(l.b4,{path:"/step11-theming/src/modules/core/components/Navbar.tsx",mdxType:"GettingStartedSnippet"}),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"The getting started tutorial is over. You should now have a good understanding of what ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," can do to help you build enterprise applications !"))}g.isMDXComponent=!0}}]);