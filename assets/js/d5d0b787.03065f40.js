"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[92957],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r().createContext({}),d=function(e){var t=r().useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=d(e.components);return r().createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return n?r().createElement(k,u(u({ref:t},s),{},{components:n})):r().createElement(k,u({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r().createElement.apply(null,o)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n.n(a),l=n(86010),o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(o,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(87462),r=n(67294),l=n.n(r),o=n(86010),u=n(12466),i=n(45315),s=n(91980),d=n(67392),p=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=l().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function k(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function b(e){var t,n,a,l,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,d=m(e),c=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),b=c[0],g=c[1],h=f({queryString:i,groupId:s}),N=h[0],v=h[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],E=y[1],x=function(){var e=null!=N?N:w;return k({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!k({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),E(e)}),[v,E,d]),tabValues:d}}var g=n(72389),h="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,d=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==r&&(p(t),i(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var l,o=d.indexOf(e.currentTarget)-1;n=null!=(l=d[o])?l:d[d.length-1]}null==(t=n)||t.focus()};return l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return l().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:c},u,{className:(0,o.Z)("tabs__item",N,null==u?void 0:u.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return l().createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=b(e);return l().createElement("div",{className:(0,o.Z)("tabs-container",h)},l().createElement(v,(0,a.Z)({},e,t)),l().createElement(y,(0,a.Z)({},e,t)))}function E(e){var t=(0,g.Z)();return l().createElement(w,(0,a.Z)({key:String(t)},e))}},46465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a,r=n(87462),l=n(63366),o=(n(67294),n(3905)),u=(n(74866),n(85162),["components"]),i={id:"use-delete",title:"Data deletion",sidebar_label:"Data deletion"},s=void 0,d={unversionedId:"framework/data/use-delete",id:"framework/data/use-delete",title:"Data deletion",description:"Hooks",source:"@site/docs/framework/data/040-use-delete.md",sourceDirName:"framework/data",slug:"/framework/data/use-delete",permalink:"/docs/framework/data/use-delete",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/data/040-use-delete.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"use-delete",title:"Data deletion",sidebar_label:"Data deletion"},sidebar:"someSidebar",previous:{title:"Data update",permalink:"/docs/framework/data/use-put"},next:{title:"Introduction",permalink:"/docs/framework/notification/introduction"}},p={},c=[{value:"Hooks",id:"hooks",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2}],m=(a="SandboxExampleButton",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const [del, loading] = useDelete(url, options);\nconst [del, loading] = useSecureDelete(url, options);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"usePut"))," hook executes an ajax PUT request and returns back the payload sent by the server.",(0,o.kt)("br",null)),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useSecureDelete"))," is similar to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useDelete"))," but adds a ",(0,o.kt)("em",{parentName:"p"},"Bearer")," authorization header that contains the token received and stored by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The data are stored in the state of the component and ",(0,o.kt)("strong",{parentName:"p"},"not")," in the redux store.")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Mandatory parameters are marked with a ","*"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"url"),"*"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the URL to which the Ajax request is sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"An optional object to specify additional options")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"onSuccess")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/types/AppSuccessCallback"},"AppSuccessCallback")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"if onSuccess is a function, this function is called on a successful GET (Promise / async allowed)"),(0,o.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL on a successful GET")),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": Nothing is done on a successful GET")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"onError")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/types/AppErrorCallback"},"AppErrorCallback")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"if onError is a function, this function is called if the HTTP response is a 4xx or 5xx (Promise / async allowed)"),(0,o.kt)("li",null,"if onError is a string then the value must be an URL. The hook does a redirect to this URL")),(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": the hook sends a notification to the ",(0,o.kt)("inlineCode",{parentName:"td"},"error")," topic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"delayLoading")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait before setting the loading flag to true. This value is useful to not display a loading indicator if the request is executed rapidly.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"auth")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the credentials to be sent in the request. See ",(0,o.kt)("a",{parentName:"td",href:"../../api/interfaces/Auth"},"Auth"),".",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": no credentials sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"headers")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"the HTTP headers to add in the request",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Defaults to"),": no headers added in the request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"params")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Params in the url.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example"),": if the user is /user/:userId, options.params could be ","{","userId: '1'","}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"query")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Query params to add the URL.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Example"),": If the final url is /users?name=Doe, options.query will be ","{","name: 'Doe'","}")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The options object also accept these additionnal parameters supported by the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch API")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"headers,\ncredentials,\ncache,\nredirect,\nreferrer,\nreferrerPolicy,\nintegrity,\nkeepalive,\nsignal\n"))),(0,o.kt)("h4",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"del")),(0,o.kt)("td",{parentName:"tr",align:null},"(options) => Promise"),(0,o.kt)("td",{parentName:"tr",align:null},"del is a function that executes the ajax DELETE request.",(0,o.kt)("br",null),">",(0,o.kt)("strong",{parentName:"td"},"options")," is the same object as the one used for usePut. Use this object to override an option passed to useDelete")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"loading")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"A flag to indicate if the ajax request is pending")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(m,{name:"cra-data",mdxType:"SandboxExampleButton"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-data/src/pages/index.tsx\n")))}f.isMDXComponent=!0}}]);