"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[21821],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r().createContext({}),p=function(e){var t=r().useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r().createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?r().createElement(k,i(i({ref:t},s),{},{components:a})):r().createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r().createElement.apply(null,o)}return r().createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a.n(n),l=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,n=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,n),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(87462),r=a(67294),l=a.n(r),o=a(86010),i=a(12466),u=a(45315),s=a(91980),p=a(67392),d=a(50012);function c(e){return function(e){var t,a;return null!=(t=null==(a=l().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function k(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function h(e){var t,a,n,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=m(e),c=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=c[0],g=c[1],b=f({queryString:u,groupId:s}),v=b[0],N=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,d.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],x=y[1],E=function(){var e=null!=v?v:w;return k({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!k({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),x(e)}),[N,x,p]),tabValues:p}}var g=a(72389),b="tabList__CuJ",v="tabItem_LNqP";function N(e){var t=e.className,a=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==r&&(d(t),u(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;a=null!=(l=p[o])?l:p[p.length-1]}null==(t=a)||t.focus()};return l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l().createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":r===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return l().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=h(e);return l().createElement("div",{className:(0,o.Z)("tabs-container",b)},l().createElement(N,(0,n.Z)({},e,t)),l().createElement(y,(0,n.Z)({},e,t)))}function x(e){var t=(0,g.Z)();return l().createElement(w,(0,n.Z)({key:String(t)},e))}},64094:function(e,t,a){var n=a(67294),r=a.n(n),l=a(74866);a(85162);t.Z=function(e){var t=e.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,a){a.d(t,{YK:function(){return u},g0:function(){return s}});var n=a(67294),r=a.n(n),l=a(64094),o=a(85162),i=function(e){var t=e.name,a=e.height,n=void 0===a?500:a,l=e.modules,o=e.branch,i=void 0===o?"master":o,u=e.type,s=void 0===u?"examples":u,p=e.view,d=void 0===p?"editor":p,c="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+d;l&&(m+="&module=",l.forEach((function(e,t){t>0&&(m+=","),m+=e})));var k="onekijs-"+t.split("/").join("-"),f="https://github.com/oneki/onekijs/tree/"+i+"/"+s+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:c,style:{width:"100%",height:n+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:k,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:f,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,a=e.modules,n=e.craName,u=e.craModules,s=e.nextName,p=e.nextModules,d=e.height,c=void 0===d?600:d,m=e.branch,k=void 0===m?"master":m;return r().createElement(l.Z,null,r().createElement(o.Z,{value:"cra"},r().createElement(i,{name:n||t,type:"getting-started/cra",view:"preview",branch:k,height:c,modules:u||a})),r().createElement(o.Z,{value:"next"},r().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:k,height:c,modules:p||a})))};t.ZP=i},52744:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=(a(74866),a(85162),a(32779)),i=["components"],u={id:"use-put",title:"Data update",sidebar_label:"Data update"},s=void 0,p={unversionedId:"framework/data/use-put",id:"framework/data/use-put",title:"Data update",description:"Hooks",source:"@site/docs/framework/data/030-use-put.md",sourceDirName:"framework/data",slug:"/framework/data/use-put",permalink:"/docs/framework/data/use-put",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/data/030-use-put.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"use-put",title:"Data update",sidebar_label:"Data update"},sidebar:"someSidebar",previous:{title:"Data creation",permalink:"/docs/framework/data/use-post"},next:{title:"Data deletion",permalink:"/docs/framework/data/use-delete"}},d={},c=[{value:"Hooks",id:"hooks",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2}],m={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [submit, loading] = usePut(url, options);\nconst [submit, loading] = useSecurePut(url, options);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"usePut"))," hook executes an ajax PUT request and returns back the payload sent by the server.",(0,l.kt)("br",null),"\nBy default, the body of the request is a JSON string."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useSecurePut"))," is similar to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"usePut"))," but adds a ",(0,l.kt)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The data are stored in the state of the component and ",(0,l.kt)("strong",{parentName:"p"},"not")," in the redux store.")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url"),"*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the URL to which the Ajax request is sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional object to specify additional options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"if onSuccess is a function, this function is called on a successful GET (Promise / async allowed)"),(0,l.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL on a successful GET")),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": Nothing is done on a successful GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onError")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"if onError is a function, this function is called if the HTTP response is a 4xx or 5xx (Promise / async allowed)"),(0,l.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL")),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": the hook sends a notification to the ",(0,l.kt)("inlineCode",{parentName:"td"},"error")," topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"delayLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait before setting the loading flag to true. This value is useful to not display a loading indicator if the request is executed rapidly.",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the credentials to be sent in the request. See ",(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/Auth"},"Auth"),".",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no credentials sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"the HTTP headers to add in the request",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no headers added in the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Params in the url.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": if the user is /user/:userId, options.params could be ","{","userId: '1'","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Query params to add the URL.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": If the final url is /users?name=Doe, options.query will be ","{","name: 'Doe'","}")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The options object also accept these additionnal parameters supported by the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch API")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"headers,\ncredentials,\ncache,\nredirect,\nreferrer,\nreferrerPolicy,\nintegrity,\nkeepalive,\nsignal\n"))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"submit")),(0,l.kt)("td",{parentName:"tr",align:null},"(data, options) => Promise"),(0,l.kt)("td",{parentName:"tr",align:null},"submit is a function that executes the ajax PUT request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data")," is the body of the PUT request",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"options")," is the same object as the one used for usePut. Use this object to override an option passed to usePut")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the ajax request is pending")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"usePut is similar to usePost. So you can check the examples on the usePost page for more examples")),(0,l.kt)("p",null,"The example below shows how to redirect to the user list page if the user has been successfully updated."),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/edit-user-success-redirect.tsx\n")))}k.isMDXComponent=!0}}]);