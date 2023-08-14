"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[13874],{85162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),a=r.n(n),o=r(86010),i="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,n=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,n),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(87462),a=r(67294),o=r.n(a),i=r(86010),l=r(12466),u=r(45315),s=r(91980),c=r(67392),p=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=o().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,r,n,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,c=m(e),d=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),f=d[0],b=d[1],v=g({queryString:u,groupId:s}),k=v[0],N=v[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,p.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=x[0],y=x[1],E=function(){var e=null!=k?k:w;return h({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),N(e),y(e)}),[N,y,c]),tabValues:c}}var b=r(72389),v="tabList__CuJ",k="tabItem_LNqP";function N(e){var t=e.className,r=e.block,a=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==a&&(p(t),u(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;r=null!=(o=c[i])?o:c[c.length-1]}null==(t=r)||t.focus()};return o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return o().createElement("li",(0,n.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":a===t})}),null!=r?r:t)})))}function x(e){var t=e.lazy,r=e.children,n=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return o().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=f(e);return o().createElement("div",{className:(0,i.Z)("tabs-container",v)},o().createElement(N,(0,n.Z)({},e,t)),o().createElement(x,(0,n.Z)({},e,t)))}function y(e){var t=(0,b.Z)();return o().createElement(w,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,r){var n=r(67294),a=r.n(n),o=r(74866);r(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,r){r.d(t,{J5:function(){return m},b4:function(){return c}});var n=r(67294),a=r.n(n),o=r(64094),i=r(85162),l=r(95665),u=r.n(l),s=r(74866),c=function(e){var t=e.path,r=e.craPath,n=e.nextPath,l=e.branch,s=void 0===l?"master":l;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(u(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+s+"/getting-started/cra/"+(r||t)+"\n")),a().createElement(i.Z,{value:"next"},a().createElement(u(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+s+"/getting-started/next/"+(n||t)+"\n")))},p=function(e){var t=e.path,r=e.branch,n=void 0===r?"master":r,o=t;return t.startsWith("http")||(o="https://github.com/oneki/onekijs/blob/"+n+"/examples/cra-examples/src/"+t),a().createElement(u(),{language:"tsx"},o+"\n")},d=function(e){var t=e.path,r=e.height,n=void 0===r?500:r,o=t;return t.startsWith("http")||(o="https://oneki-examples.surge.sh/"+t),a().createElement("iframe",{src:o,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},m=function(e){var t=e.values,r=e.branch,n=void 0===r?"master":r,o=e.preview,l=t.map((function(e){return{label:e.label,value:e.label}}));o&&l.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var u=t.map((function(e){return a().createElement(i.Z,{value:e.label},a().createElement(p,{path:e.path,branch:n}))}));return o&&u.push(a().createElement(i.Z,{value:"__preview__"},a().createElement(d,{path:o.path,height:o.height}))),console.log(l),a().createElement(s.Z,{groupId:"example-types",defaultValue:t[0].label,values:l},u)}},32779:function(e,t,r){r.d(t,{YK:function(){return u},g0:function(){return s}});var n=r(67294),a=r.n(n),o=r(64094),i=r(85162),l=function(e){var t=e.name,r=e.height,n=void 0===r?500:r,o=e.modules,i=e.branch,l=void 0===i?"master":i,u=e.type,s=void 0===u?"examples":u,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+l+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;o&&(m+="&module=",o.forEach((function(e,t){t>0&&(m+=","),m+=e})));var h="onekijs-"+t.split("/").join("-"),g="https://github.com/oneki/onekijs/tree/"+l+"/"+s+"/"+t;return a().createElement(a().Fragment,null,a().createElement("iframe",{src:d,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:h,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a().createElement("div",{style:{textAlign:"center"}},a().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",a().createElement("a",{href:g,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,r=e.modules,n=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,h=void 0===m?"master":m;return a().createElement(o.Z,null,a().createElement(i.Z,{value:"cra"},a().createElement(l,{name:n||t,type:"getting-started/cra",view:"preview",branch:h,height:d,modules:u||r})),a().createElement(i.Z,{value:"next"},a().createElement(l,{name:s||t,type:"getting-started/next",view:"preview",branch:h,height:d,modules:c||r})))};t.ZP=l},92403:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(44996),l=(r(74866),r(85162),r(32779),r(20819),["components"]),u={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},s=void 0,c={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"onekijs is a React framework based of the following components:",source:"@site/docs/getting-started/001_introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/001_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Creating the project",permalink:"/docs/getting-started/creating-project"}},p={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Optional reading",id:"optional-reading",level:4},{value:"Next step",id:"next-step",level:2}],m={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a React framework based of the following components: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reacttraining.com/react-router/"},"Next.js")," or ",(0,o.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-saga.js.org/"},"Redux Saga")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer")," ")),(0,o.kt)("img",{alt:"Onekijs architecture",src:(0,i.Z)("img/onekijs-Application.svg")}),";",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to propose a framework built on top of these librairies that hides most of their complexities.",(0,o.kt)("br",null),"\nThus, the developer can more easily build webapps by respecting the best practices (e.g: immutability)",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is a framework built on top of React. It uses React to render the view",(0,o.kt)("br",null),"It's strongly recommended to read ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/tutorial/tutorial.html"},"the official tutorial"))," available on their website"),(0,o.kt)("p",null,"Depending on the build tool you prefer to use, you should also read these documentations:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite"))),(0,o.kt)("td",{parentName:"tr",align:null},"The most popular React bundler"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite"))," and ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://reactrouter.com/docs/en/v6"},"React router")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Create Next App"))),(0,o.kt)("td",{parentName:"tr",align:null},"The tool to build a Next.js app. Useful if you need server rendering"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://nextjs.org/"},"Next.js")))))),(0,o.kt)("h4",{id:"optional-reading"},"Optional reading"),(0,o.kt)("p",null,"Under the hood, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," uses ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux.js.org"},"Redux"))," to manage global state, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://immerjs.github.io/immer"},"Immer"))," for immutability and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-saga.js.org"},"Redux Saga"))," for asynchronous streams.",(0,o.kt)("br",null),"\nThese libraries are completely hidden, but if you want to master ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs")),", it can be interesting to read their docs."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"The objective of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"onekijs"))," is to offer a complete React framework comparable to that offered by Angular.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"creating-project"},"In the next step")),", we will build an application strongly based on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://angular.io/start"},"basic Angular application"))," that you can find on the official Angular webiste.",(0,o.kt)("br",null)))}h.isMDXComponent=!0}}]);