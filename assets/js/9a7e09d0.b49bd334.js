"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[51335],{34673:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(87462),r=a(67294),l=a.n(r),o=a(86010),i=a(63366),s=a(72389),u=a(86043),c="details_lb9f",p="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function v(e){var t=e.summary,a=e.children,v=(0,i.Z)(e,d),k=(0,s.Z)(),g=(0,r.useRef)(null),b=(0,u.u)({initialState:!v.open}),N=b.collapsed,y=b.setCollapsed,w=(0,r.useState)(v.open),E=w[0],x=w[1],S=l().isValidElement(t)?t:l().createElement("summary",null,null!=t?t:"Details");return l().createElement("details",(0,n.Z)({},v,{ref:g,open:E,"data-collapsed":N,className:(0,o.Z)(c,k&&p,v.className),onMouseDown:function(e){h(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;h(t)&&f(t,g.current)&&(e.preventDefault(),N?(y(!1),x(!0)):y(!0))}}),S,l().createElement(u.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){y(e),x(!e)}},l().createElement("div",{className:m},a)))}var k="details_b_Ee";function g(e){var t=Object.assign({},e);return l().createElement(v,(0,n.Z)({},t,{className:(0,o.Z)("alert alert--info",k,t.className)}))}},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a.n(n),l=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,n),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(87462),r=a(67294),l=a.n(r),o=a(86010),i=a(12466),s=a(45315),u=a(91980),c=a(67392),p=a(50012);function m(e){return function(e){var t,a;return null!=(t=null==(a=l().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,s.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function v(e){var t,a,n,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,c=d(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),v=m[0],k=m[1],g=f({queryString:s,groupId:u}),b=g[0],N=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],E=y[1],x=function(){var e=null!=b?b:w;return h({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),N(e),E(e)}),[N,E,c]),tabValues:c}}var k=a(72389),g="tabList__CuJ",b="tabItem_LNqP";function N(e){var t=e.className,a=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==r&&(p(t),s(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;a=null!=(l=c[o])?l:c[c.length-1]}null==(t=a)||t.focus()};return l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l().createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":r===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return l().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return l().createElement("div",{className:(0,o.Z)("tabs-container",g)},l().createElement(N,(0,n.Z)({},e,t)),l().createElement(y,(0,n.Z)({},e,t)))}function E(e){var t=(0,k.Z)();return l().createElement(w,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,a){var n=a(67294),r=a.n(n),l=a(74866);a(85162);t.Z=function(e){var t=e.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},20819:function(e,t,a){a.d(t,{J5:function(){return d},b4:function(){return c}});var n=a(67294),r=a.n(n),l=a(64094),o=a(85162),i=a(95665),s=a.n(i),u=a(74866),c=function(e){var t=e.path,a=e.craPath,n=e.nextPath,i=e.branch,u=void 0===i?"master":i;return r().createElement(l.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/cra/"+(a||t)+"\n")),r().createElement(o.Z,{value:"next"},r().createElement(s(),{language:"tsx"},"https://github.com/oneki/onekijs/blob/"+u+"/getting-started/next/"+(n||t)+"\n")))},p=function(e){var t=e.path,a=e.branch,n=void 0===a?"master":a,l=t;return t.startsWith("http")||(l="https://github.com/oneki/onekijs/blob/"+n+"/examples/cra-examples/src/"+t),r().createElement(s(),{language:"tsx"},l+"\n")},m=function(e){var t=e.path,a=e.height,n=void 0===a?500:a,l=t;return t.startsWith("http")||(l="https://examples.oneki.net/"+t),r().createElement("iframe",{src:l,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:"Example preview",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"})},d=function(e){var t=e.values,a=e.branch,n=void 0===a?"master":a,l=e.preview,i=t.map((function(e){return{label:e.label,value:e.label}}));l&&i.push({label:"\ud83d\udc41 Preview",value:"__preview__"});var s=t.map((function(e){return r().createElement(o.Z,{value:e.label},r().createElement(p,{path:e.path,branch:n}))}));return l&&s.push(r().createElement(o.Z,{value:"__preview__"},r().createElement(m,{path:l.path,height:l.height}))),console.log(i),r().createElement(u.Z,{groupId:"example-types",defaultValue:t[0].label,values:i},s)}},83930:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(44996),a(64094),a(85162),a(20819)),i=a(34673),s=["components"],u={id:"local-state",title:"Local state",sidebar_label:"Local state"},c=void 0,p={unversionedId:"framework/state-management/local-state",id:"framework/state-management/local-state",title:"Local state",description:"If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.",source:"@site/docs/framework/state-management/50-local-state.md",sourceDirName:"framework/state-management",slug:"/framework/state-management/local-state",permalink:"/docs/framework/state-management/local-state",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/state-management/50-local-state.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"local-state",title:"Local state",sidebar_label:"Local state"},sidebar:"someSidebar",previous:{title:"Global state",permalink:"/docs/framework/state-management/global-state"},next:{title:"Introduction",permalink:"/docs/framework/auth/introduction"}},m={},d=[{value:"Local service",id:"local-service",level:2},{value:"Example",id:"example",level:3},{value:"Interface",id:"interface",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4}],h={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If a single component needs to react to specific data, it's not necessary to store the data in a global state. For this type of data, a local state is sufficient.",(0,l.kt)("br",{parentName:"p"}),"\n","For a simple use case, it's often sufficient to use the standard ",(0,l.kt)("strong",{parentName:"p"},"useState")," from React and we recommend it."),(0,l.kt)("p",null,"For more complexe use cases, ",(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," introduces the concept of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local services")),".",(0,l.kt)("br",{parentName:"p"}),"\n","Generally, you only need to create a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," when you need either"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a scenario / orchestration"),(0,l.kt)("li",{parentName:"ul"},"or an immutable state")),(0,l.kt)("p",null,"An example of scenario is retrieving data via an AJAX GET request. The scenario consists of the following steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Execute the AJAX GET request and store the result in the local state"),(0,l.kt)("li",{parentName:"ul"},'Set the "loading" variable in the local state to ',(0,l.kt)("strong",{parentName:"li"},"false"))),(0,l.kt)("p",null,"You can instanciate a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./local-state#local-service"},"Local service"))," multiple times in multiple components to reuse the same logic.",(0,l.kt)("br",null),"\nE.g: the above scenario is exactly what the ",(0,l.kt)("strong",{parentName:"p"},"useGet")," hook does and you can reuse it in multiple components."),(0,l.kt)("h2",{id:"local-service"},"Local service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, service] = useLocalService(ServiceClass, initialState);\n")),(0,l.kt)("p",null),(0,l.kt)("p",null,"The goal of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two types of methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Reducer")," methods"),": the role of these methods is to update the local state of the component. These methods are generally very simple."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Saga")," methods"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"These methods are generally asynchronous and more complex."),(0,l.kt)("li",{parentName:"ul"},"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),(0,l.kt)("li",{parentName:"ul"},"A saga method never updates the local state by itself. It always calls a ",(0,l.kt)("inlineCode",{parentName:"li"},"Reducer")," method to do that.")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Be sure to read the documentation of ",(0,l.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," and ",(0,l.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"Redux Saga")," to understand exactly how it works.",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove most of the complexity, but it's important to understand how it works underneath.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../service/introduction"},"service section"))," to have an in-depth explanation of a service.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)(i.Z,{summary:(0,l.kt)("summary",null,"Simple example of useLocalService"),mdxType:"Details"},(0,l.kt)("p",null,"This very basic example is for demonstration only as a simple ",(0,l.kt)("strong",{parentName:"p"},"useState")," would be normally enough."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You don't need to understand how to build services yet. This ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../service/introduction"},"page"))," explains how to build services")),(0,l.kt)(o.J5,{values:[{label:"Use Global State",path:"state-management/UseLocalServicePage.tsx"},{label:"My Local Service",path:"state-management/@service/MyLocalService.ts"}],preview:{path:"state-management/use-local-service"},mdxType:"ExampleMultipleSnippet"})),(0,l.kt)("h3",{id:"interface"},"Interface"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ServiceClass")),(0,l.kt)("td",{parentName:"tr",align:null},"Class"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that extends ",(0,l.kt)("a",{parentName:"td",href:"../../api/classes/DefaultLocalService"},"DefaultLocalService"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"initialState")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial state of the service")))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The immutable state managed by the service (can be upated only by the service)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"service")),(0,l.kt)("td",{parentName:"tr",align:null},"Class"),(0,l.kt)("td",{parentName:"tr",align:null},"The service to manage the state")))))}f.isMDXComponent=!0}}]);