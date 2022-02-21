"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[58554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var a=n(67294),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i().createContext({}),d=function(e){var t=i().useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i().createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i().createElement(i().Fragment,{},t)}},m=i().forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i().createElement(v,l(l({ref:t},c),{},{components:n})):i().createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i().createElement.apply(null,o)}return i().createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(52263),i=n(13919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294),i=n.n(a);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i().createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),i=n(67294),r=n.n(i),o=n(72389),l=n(79443);var s=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(89521),d=n(86010),u="tabItem_1uMI";function p(e){var t,n,a,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,v=e.groupId,h=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,c.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),y=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,i.useState)(b),T=x[0],C=x[1],A=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=y[v];null!=O&&O!==T&&k.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==T&&(j(t),C(a),null!=v&&w(v,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var i=A.indexOf(e.currentTarget)-1;n=A[i]||A[A.length-1]}null==(t=n)||t.focus()};return r().createElement("div",{className:"tabs-container"},r().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},h)},k.map((function(e){var t=e.value,n=e.label;return r().createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,i.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r().createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r().createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=n(67294),i=(0,a.createContext)(void 0);t.Z=i},64094:function(e,t,n){var a=n(67294),i=n.n(a),r=n(26396);n(58215);t.Z=function(e){var t=e.children;return console.log("children",t),i().createElement(r.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Create React App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{Y:function(){return r}});var a=n(67294),i=n.n(a),r=function(e){var t=e.name;return i().createElement("div",{style:{textAlign:"right"}},i().createElement("a",{href:"https://codesandbox.io/s/github/oneki/onekijs/tree/master/examples/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))};t.Z=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,r=e.modules,o=e.branch,l=void 0===o?"master":o,s=e.type,c=void 0===s?"examples":s,d=e.view,u="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+l+"/"+c+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===d?"editor":d);r&&(u+="&module=",r.forEach((function(e,t){t>0&&(u+=","),u+=e})));var p="onekijs-"+t.split("/").join("-");return i().createElement("iframe",{src:u,style:{width:"100%",height:a+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:p,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},46679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=(n(44996),n(64094)),l=n(58215),s=n(32779),c=["components"],d={id:"service",title:"Adding a service",sidebar_label:"Adding a service"},u=void 0,p={unversionedId:"getting-started/service",id:"getting-started/service",isDocsHomePage:!1,title:"Adding a service",description:"This step consists in creating its own service.",source:"@site/docs/getting-started/011_service.md",sourceDirName:"getting-started",slug:"/getting-started/service",permalink:"/docs/getting-started/service",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/getting-started/011_service.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"service",title:"Adding a service",sidebar_label:"Adding a service"},sidebar:"someSidebar",previous:{title:"Using form for user input",permalink:"/docs/getting-started/form"},next:{title:"Introduction",permalink:"/docs/framework/introduction"}},m=[{value:"Final result",id:"final-result",children:[],level:2},{value:"Creating a service",id:"creating-a-service",children:[{value:"Adding reducers",id:"adding-reducers",children:[],level:3},{value:"Adding sagas",id:"adding-sagas",children:[],level:3}],level:2},{value:"Using the service",id:"using-the-service",children:[],level:2},{value:"Handling error",id:"handling-error",children:[],level:2},{value:"Next step",id:"next-step",children:[],level:2}],v={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This step consists in creating its own service."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The topic on this page is for advanced use cases.",(0,r.kt)("br",null),"\nYou will implement a service when you need to add advanced logic to your application"))),(0,r.kt)("p",null,"Almost all the functionality provided by Oneki.js are based on services.",(0,r.kt)("br",null),"\nThe role of a service is to mutate a state. This state can be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"a component state"),'. In this case, the service is called a "local service"',(0,r.kt)("br",null),"\nExample of hooks exposing a local service: ",(0,r.kt)("inlineCode",{parentName:"li"},"useGet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"usePost"),", ..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"the global redux state"),". In this case, the service is called a global service.",(0,r.kt)("br",null),"\nExample of hooks exposing global services: ",(0,r.kt)("inlineCode",{parentName:"li"},"useNotificationService"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"useSecurityContext"))),(0,r.kt)("p",null,"The service mutates the state following best practices (immutability, action, reducers, ...)",(0,r.kt)("br",null),"\nTo mutate the state, the service exposes two types of methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Reducer methods")," (annoted with @reducer). Only these methods can mutate the state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Saga methods")," (annotate with @saga). These methods can orchestrate calls to reducer methods and are used to handle complex scenarios such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Calling a reducer to update a "loading" variable to ',(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Letting React render the component to display the load indicator"),(0,r.kt)("li",{parentName:"ul"},"Making an AJAX request asynchronously"),(0,r.kt)("li",{parentName:"ul"},"Storing the result in the state (by calling another reducer method)"),(0,r.kt)("li",{parentName:"ul"},'Calling a reducer to update the "loading" variable to ',(0,r.kt)("inlineCode",{parentName:"li"},"false"))))),(0,r.kt)("h2",{id:"final-result"},"Final result"),(0,r.kt)("p",null,"The result of this step is as follows:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"New in this step")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'The product detail page now displays a new "Check Availability" button',(0,r.kt)("br",null),"\nWhen you click on this button, the application will call the server to check if the product is available or not"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,r.kt)(s.Z,{name:"step10-service",type:"getting-started/cra",view:"preview",height:"600",modules:["/src/index.tsx","/src/pages/products/index.tsx"],mdxType:"Sandbox"})),(0,r.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,r.kt)(s.Z,{name:"step10-service",type:"getting-started/next",view:"preview",height:"600",modules:["/src/pages/index.tsx","/src/pages/_app.tsx"],mdxType:"Sandbox"}))),(0,r.kt)("h2",{id:"creating-a-service"},"Creating a service"),(0,r.kt)("p",null,"We want to add a button on the product page to check its availability. Clicking on the button triggers the following scenario:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a loading indicator on the button"),(0,r.kt)("li",{parentName:"ol"},"Disable the button"),(0,r.kt)("li",{parentName:"ol"},"Make a request to the server to check availability"),(0,r.kt)("li",{parentName:"ol"},"Display the result on the product page next to the button:"),(0,r.kt)("li",{parentName:"ol"},"Remove the loading indicator"),(0,r.kt)("li",{parentName:"ol"},"Activate the button")),(0,r.kt)("p",null,"The state therefore contains the following elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AvailabilityState {\n  // a flag to indicate if a request is in flight\n  loading: boolean;\n\n  // the result of the request\n  // initial value is undefined\n  available?: boolean; // number of products available\n}\n")),(0,r.kt)("p",null,"Let's create a service to handle this state.",(0,r.kt)("br",null),"\nA service is a class that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalService")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalService"),". In our case, the state is local to a component and so the class extends ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalService")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The class must be annotated with @service. This is something specific to Typescript that allows Oneki.js to create a proxy of this class at runtime."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@service\nexport default class AvailabilityService extends LocalService<AvailabilityState> {\n  ...\n}\n")),(0,r.kt)("h3",{id:"adding-reducers"},"Adding reducers"),(0,r.kt)("p",null,"As mentioned before, the service contains two types of methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"saga")),(0,r.kt)("p",null,"For our service, we need two reducers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A reducer method to mutate the ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," field."),(0,r.kt)("li",{parentName:"ul"},"A reducer method to mutate the ",(0,r.kt)("inlineCode",{parentName:"li"},"available")," field.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reducer methods must be annotated with @reducer"))),(0,r.kt)("p",null,"Let's add these two methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3-14}","{3-14}":!0},"@service\nexport default class AvailabilityService extends LocalService<AvailabilityState> {\n  @reducer\n  setLoading(loading: boolean): void {\n    // the state is immutable\n    // however, the @reducer annotation allows updating the state\n    // like any other object (thanks to immer)\n    this.state.loading = loading;\n  }\n\n  @reducer\n  setData(data: AvailabilityResponse): void {\n    this.state.available = data.available;\n    this.setLoading(false); // A reducer can call another reducer\n  }\n}\n")),(0,r.kt)("h3",{id:"adding-sagas"},"Adding sagas"),(0,r.kt)("p",null,"For our service, we need a saga that will implement the following scenario:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update the field ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ol"},"Make a request to the server to check availability"),(0,r.kt)("li",{parentName:"ol"},"Put the result of the query in the state"),(0,r.kt)("li",{parentName:"ol"},"Update the field ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Let's add this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{18-23}","{18-23}":!0},"@service\nexport default class AvailabilityService extends LocalService<AvailabilityState> {\n  @reducer\n  setLoading(loading: boolean): void {\n    // the state is immutable\n    // however, the @reducer annotation allows updating the state\n    // like any other object (thanks to immer)\n    this.state.loading = loading;\n  }\n\n  @reducer\n  setData(data: AvailabilityResponse): void {\n    this.state.available = data.available;\n    this.setLoading(false); // A reducer can call another reducer\n  }\n\n  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\n  @saga(SagaEffect.Latest)\n  *checkAvailability(productId: number) {\n    yield this.setLoading(true);\n    const data: AvailabilityResponse = yield asyncGet(`/products/${productId}/availability`);\n    yield this.setData(data);\n  }\n}\n")),(0,r.kt)("h2",{id:"using-the-service"},"Using the service"),(0,r.kt)("p",null,"To instantiate this service, Oneki.js provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocalService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useGlobalService")," hooks",(0,r.kt)("br",null),"\nsince we have created a local service, we must use ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocalService"),":"),(0,r.kt)("p",null,"Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductDetails")," component to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Check Availability")," button that uses the service:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/components/ProductDetails.tsx\n"))),(0,r.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step10-service/src/modules/products/components/ProductDetails.tsx\n")))),(0,r.kt)("h2",{id:"handling-error"},"Handling error"),(0,r.kt)("p",null,"We can improve the service to properly handle errors returned by the server.",(0,r.kt)("br",null),"\nA common approch is to send a notification on the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," topic so the ",(0,r.kt)("inlineCode",{parentName:"p"},"<NotificationCenter />")," automatically displays it"),(0,r.kt)("p",null,"To be able to use the NotificationService inside the AvailabilityService, one must inject it."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cra",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/cra/step10-service/src/modules/products/services/AvailabilityService.ts\n"))),(0,r.kt)(l.Z,{value:"next",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/getting-started/next/step10-service/src/modules/products/services/AvailabilityService.ts\n")))),(0,r.kt)("h2",{id:"next-step"},"Next step"),(0,r.kt)("p",null,"The getting started tutorial is over. You should now have a good understanding of what Oneki.js can do to help you build enterprise applications !"))}h.isMDXComponent=!0}}]);