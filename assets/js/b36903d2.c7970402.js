"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[35590],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a().createContext({}),p=function(e){var t=a().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a().createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},c=a().forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?a().createElement(f,i(i({ref:t},s),{},{components:n})):a().createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n.n(r),o=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(67294),o=n.n(a),l=n(86010),i=n(72389),u=n(67392),s=n(7094),p=n(12466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,f=e.defaultValue,h=e.values,k=e.groupId,g=e.className,b=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,E=w.setTabGroupChoices,O=(0,a.useState)(N),j=O[0],T=O[1],B=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=x[k];null!=A&&A!==j&&v.some((function(e){return e.value===A}))&&T(A)}var I=function(e){var t=e.currentTarget,n=B.indexOf(t),r=v[n].value;r!==j&&(C(t),T(r),null!=k&&E(k,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=B.indexOf(e.currentTarget)+1;n=null!=(r=B[a])?r:B[0];break;case"ArrowLeft":var o,l=B.indexOf(e.currentTarget)-1;n=null!=(o=B[l])?o:B[B.length-1]}null==(t=n)||t.focus()};return o().createElement("div",{className:(0,l.Z)("tabs-container",d)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return B.push(e)},onKeyDown:P,onFocus:I,onClick:I},a,{className:(0,l.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function f(e){var t=(0,i.Z)();return o().createElement(c,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,n){var r=n(67294),a=n.n(r),o=n(65488);n(85162);t.Z=function(e){var t=e.children;return a().createElement(o.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return u},g0:function(){return s}});var r=n(67294),a=n.n(r),o=n(64094),l=n(85162),i=function(e){var t=e.name,n=e.height,r=void 0===n?500:n,o=e.modules,l=(e.branch,e.type,e.view,"https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/");o&&("&module=",o.forEach((function(e,t){t>0&&",",e})));var i="onekijs-"+t.split("/").join("-");return a().createElement("iframe",{src:l,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:i,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})},u=function(e){var t=e.name;return a().createElement("div",{style:{textAlign:"right"}},a().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,n=e.modules,r=e.craName,u=e.craModules,s=e.nextName,p=e.nextModules,d=e.height,m=void 0===d?600:d,c=e.branch,f=void 0===c?"master":c;return a().createElement(o.Z,null,a().createElement(l.Z,{value:"cra"},a().createElement(i,{name:r||t,type:"getting-started/cra",view:"preview",branch:f,height:m,modules:u||n})),a().createElement(l.Z,{value:"next"},a().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:f,height:m,modules:p||n})))};t.ZP=i},8513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(32779),i=(n(44996),["components"]),u={id:"bind",title:"Binding",sidebar_label:"Binding"},s=void 0,p={unversionedId:"framework/form/bind",id:"framework/form/bind",title:"Binding",description:"It is often useful to create a new computed property based on one or more field values and to automatically adapt this new property when these field values change.",source:"@site/docs/framework/form/040_bind.md",sourceDirName:"framework/form",slug:"/framework/form/bind",permalink:"/docs/framework/form/bind",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/040_bind.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"bind",title:"Binding",sidebar_label:"Binding"},sidebar:"someSidebar",previous:{title:"Initial values",permalink:"/docs/framework/form/initial-value"},next:{title:"Rules",permalink:"/docs/framework/form/rules"}},d={},m=[{value:"useBind hook",id:"usebind-hook",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Example",id:"example",level:3},{value:"useAsyncBind hook",id:"useasyncbind-hook",level:2},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output-1",level:3},{value:"Example",id:"example-1",level:3}],c={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is often useful to create a new computed property based on one or more field values and to automatically adapt this new property when these field values change.\n",(0,o.kt)("strong",{parentName:"p"},"Oneki.js")," provides two hoos to create a computed property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#usebind-hook"},"useBind"))," hook for synchronous bindings"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#useasyncbind-hook"},"useAsyncBind"))," hook for asynchronous bindings")),(0,o.kt)("h2",{id:"usebind-hook"},"useBind hook"),(0,o.kt)("p",null,"To create a computed property synchronously inside, you should use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../api/functions/useBind"},"useBind"))," hook.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = useBind(binder, observed);\n")),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"binder"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/types/Binder"},"Binder")),(0,o.kt)("td",{parentName:"tr",align:null},"Function receiving as arguments the values of the observed fields and returning the binding value.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example:"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"(firstname: string, lastname: string) => `${firstname} ${lastname}`"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"observed")),(0,o.kt)("td",{parentName:"tr",align:null},"any[]"),(0,o.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder. You must use useValue to react of these fields",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example:"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"[useValue('firstname'), useValue('lastname')]"))))),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"The output is the calculated property and the type is infered from the result of the function."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useBind, useValue } from 'onekijs';\n\nconst fullname = useBind((firstname: string, lastname: string) => {\n    return `${firstname} ${lastname}`\n}, [useValue('firstname'), useValue('lastname')])\n")),(0,o.kt)("h2",{id:"useasyncbind-hook"},"useAsyncBind hook"),(0,o.kt)("p",null,"To create a asynchronous computed property, you should use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"useAyncBind"))," hook.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"useAsyncBind"))," accepts a async function as argument and only returns the value when the async function resolves. Until then, the result is not modified (returns the old one) but a loading flag is set to true"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [result, loading, error] = useAsyncBind(binder, observed);\n")),(0,o.kt)("h3",{id:"input-1"},"Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"binder"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/types/AsyncBinder"},"AsyncBinder")),(0,o.kt)("td",{parentName:"tr",align:null},"A synchronous or asynchronous function receiving as arguments the values of the observed fields and returning the binding value.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example:"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"username => `asyncGet(`/userinfo/${username}`)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"observed")),(0,o.kt)("td",{parentName:"tr",align:null},"any[]"),(0,o.kt)("td",{parentName:"tr",align:null},"A array of fieldnames observed by the binder. You must use useValue to react of these fields",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example:"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"[useValue('username')]"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { asyncGet, useAsyncBind, useValue } from 'onekijs'; // or from 'onekijs-next'\n\nconst [repositories, loading, error] = useAsyncBind((staging: string) => {\n    return asyncGet(`/repositories/${staging}`)\n}, [useValue('staging')])\n")),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's a two phase binding"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"An observed value is changed ->  ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"useAsyncBind"))," is executed. It forces a rerendering of the component and returns ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[oldValue|undefined, true, null]"))),(0,o.kt)("li",{parentName:"ul"},"The async function resolves, the asyncBind forces a second rerendering of the component and returns ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[newValue, false, null]"))," if there is no error or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[oldValue, false, Error(msg)]"))," if there is an error"))),(0,o.kt)("h3",{id:"output-1"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"result")),(0,o.kt)("td",{parentName:"tr",align:null},"any?"),(0,o.kt)("td",{parentName:"tr",align:null},"The computed property. The type is infered from the result of the function. ",(0,o.kt)("br",null),"Returns the previous value (or undefined if it's the first execution) until the binder is resolved")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loading")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"A boolean indicating whether the execution of the binder is pending or completed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:null},"Error?"),(0,o.kt)("td",{parentName:"tr",align:null},"The error object if the binder resolves with an error")))),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)(l.YK,{name:"cra-form-basic",mdxType:"SandboxExampleButton"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/bind.tsx\n")))}f.isMDXComponent=!0}}]);