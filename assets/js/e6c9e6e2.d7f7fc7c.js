"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[43847],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(67294),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n().createContext({}),c=function(e){var t=n().useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n().createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n().createElement(n().Fragment,{},t)}},m=n().forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n().createElement(k,i(i({ref:t},s),{},{components:a})):n().createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n().createElement.apply(null,o)}return n().createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a.n(r),l=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,r=e.className;return n().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(87462),n=a(67294),l=a.n(n),o=a(86010),i=a(12466),u=a(45315),s=a(91980),c=a(67392),p=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=l().Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function k(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function h(e){var t,a,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=m(e),d=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:c})})),h=d[0],b=d[1],g=f({queryString:u,groupId:s}),v=g[0],N=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,p.Nk)(t),r=a[0],l=a[1],[r,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=y[0],w=y[1],E=function(){var e=null!=v?v:x;return k({value:e,tabValues:c})?e:null}();return(0,n.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!k({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),N(e),w(e)}),[N,w,c]),tabValues:c}}var b=a(72389),g="tabList__CuJ",v="tabItem_LNqP";function N(e){var t=e.className,a=e.block,n=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==n&&(p(t),u(r))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=c.indexOf(e.currentTarget)+1;a=null!=(r=c[n])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;a=null!=(l=c[o])?l:c[c.length-1]}null==(t=a)||t.focus()};return l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l().createElement("li",(0,r.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":n===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return l().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function x(e){var t=h(e);return l().createElement("div",{className:(0,o.Z)("tabs-container",g)},l().createElement(N,(0,r.Z)({},e,t)),l().createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return l().createElement(x,(0,r.Z)({key:String(t)},e))}},64094:function(e,t,a){var r=a(67294),n=a.n(r),l=a(74866);a(85162);t.Z=function(e){var t=e.children;return n().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,a){a.d(t,{YK:function(){return u},g0:function(){return s}});var r=a(67294),n=a.n(r),l=a(64094),o=a(85162),i=function(e){var t=e.name,a=e.height,r=void 0===a?500:a,l=e.modules,o=e.branch,i=void 0===o?"master":o,u=e.type,s=void 0===u?"examples":u,c=e.view,p=void 0===c?"editor":c,d="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",m="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+i+"/"+s+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;l&&(m+="&module=",l.forEach((function(e,t){t>0&&(m+=","),m+=e})));var k="onekijs-"+t.split("/").join("-"),f="https://github.com/oneki/onekijs/tree/"+i+"/"+s+"/"+t;return n().createElement(n().Fragment,null,n().createElement("iframe",{src:d,style:{width:"100%",height:r+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:k,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),n().createElement("div",{style:{textAlign:"center"}},n().createElement("a",{href:m,target:"_blank"},"Open in CodeSandbox")," | ",n().createElement("a",{href:f,target:"_blank"},"View code on GitHub")))},u=function(e){var t=e.name;return n().createElement("div",{style:{textAlign:"right"}},n().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},s=function(e){var t=e.name,a=e.modules,r=e.craName,u=e.craModules,s=e.nextName,c=e.nextModules,p=e.height,d=void 0===p?600:p,m=e.branch,k=void 0===m?"master":m;return n().createElement(l.Z,null,n().createElement(o.Z,{value:"cra"},n().createElement(i,{name:r||t,type:"getting-started/cra",view:"preview",branch:k,height:d,modules:u||a})),n().createElement(o.Z,{value:"next"},n().createElement(i,{name:s||t,type:"getting-started/next",view:"preview",branch:k,height:d,modules:c||a})))};t.ZP=i},9910:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=(a(74866),a(85162),a(32779)),i=["components"],u={id:"use-post",title:"Data creation",sidebar_label:"Data creation"},s=void 0,c={unversionedId:"framework/data/use-post",id:"framework/data/use-post",title:"Data creation",description:"Hooks",source:"@site/docs/framework/data/020-use-post.md",sourceDirName:"framework/data",slug:"/framework/data/use-post",permalink:"/docs/framework/data/use-post",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/data/020-use-post.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"use-post",title:"Data creation",sidebar_label:"Data creation"},sidebar:"someSidebar",previous:{title:"Data retrieval",permalink:"/docs/framework/data/use-get"},next:{title:"Data update",permalink:"/docs/framework/data/use-put"}},p={},d=[{value:"Hooks",id:"hooks",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3},{value:"Form submit",id:"form-submit",level:3},{value:"Success redirect",id:"success-redirect",level:3}],m={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [submit, loading] = usePost(url, options);\nconst [submit, loading] = useSecurePost(url, options);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"usePost"))," hooks executes an ajax POST request and returns back the payload sent by the server.",(0,l.kt)("br",null),"\nBy default, the body of the request is a JSON string."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useSecurePost"))," is similar to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"usePost"))," but adds a ",(0,l.kt)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The data are stored in the state of the component and ",(0,l.kt)("strong",{parentName:"p"},"not")," in the redux store.")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url"),"*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the URL to which the Ajax request is sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional object to specify additional options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSuccess")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"if onSuccess is a function, this function is called on a successful GET (Promise / async allowed)"),(0,l.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL on a successful GET")),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": Nothing is done on a successful GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onError")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"if onError is a function, this function is called if the HTTP response is a 4xx or 5xx (Promise / async allowed)"),(0,l.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL")),(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": the hook sends a notification to the ",(0,l.kt)("inlineCode",{parentName:"td"},"error")," topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"delayLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait before setting the loading flag to true. This value is useful to not display a loading indicator if the request is executed rapidly.",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the credentials to be sent in the request. See ",(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/Auth"},"Auth"),".",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no credentials sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"the HTTP headers to add in the request",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Defaults to"),": no headers added in the request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Params in the url.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": if the user is /user/:userId, options.params could be ","{","userId: '1'","}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Query params to add the URL.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": If the final url is /users?name=Doe, options.query will be ","{","name: 'Doe'","}")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The options object also accept these additionnal parameters supported by the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch API")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"headers,\ncredentials,\ncache,\nredirect,\nreferrer,\nreferrerPolicy,\nintegrity,\nkeepalive,\nsignal\n"))),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"submit")),(0,l.kt)("td",{parentName:"tr",align:null},"(data, options) => Promise"),(0,l.kt)("td",{parentName:"tr",align:null},"submit is a function that executes the ajax POST request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data")," is the body of the POST request",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"options")," is the same object as the one used for usePost. Use this object to override an option passed to usePost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"loading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the ajax request is pending")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,l.kt)("p",null,"The example below shows how to submit a (fix) JSON object to a server."),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/create-user.tsx\n")),(0,l.kt)("h3",{id:"form-submit"},"Form submit"),(0,l.kt)("p",null,"The example below shows how to submit data to a server by combining the data library (usePost) and the form library (useForm)."),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/create-user-form.tsx\n")),(0,l.kt)("h3",{id:"success-redirect"},"Success redirect"),(0,l.kt)("p",null,"The example below shows how to redirect to the user list page if the user has been successfully created."),(0,l.kt)(o.YK,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/create-user-success-redirect.tsx\n")))}k.isMDXComponent=!0}}]);