"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[88588],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294),a=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a().createContext({}),c=function(e){var t=a().useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a().createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||u;return r?a().createElement(f,o(o({ref:t},s),{},{components:r})):a().createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,l=new Array(u);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<u;s++)l[s]=r[s];return a().createElement.apply(null,l)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a=r.n(n),u=r(86010),l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,n=e.className;return a().createElement("div",{role:"tabpanel",className:(0,u.Z)(l,n),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(87462),a=r(67294),u=r.n(a),l=r(86010),o=r(12466),i=r(45315),s=r(91980),c=r(67392),d=r(50012);function p(e){return function(e){var t,r;return null!=(t=null==(r=u().Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,u=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(u.location.search);t.set(l,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[l,u])]}function v(e){var t,r,n,u,l=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,c=m(e),p=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:c})})),v=p[0],h=p[1],g=b({queryString:i,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,d.Nk)(t),n=r[0],u=r[1],[n,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),x=w[0],N=w[1],O=function(){var e=null!=y?y:x;return f({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){O&&h(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),N(e)}),[k,N,c]),tabValues:c}}var h=r(72389),g="tabList__CuJ",y="tabItem_LNqP";function k(e){var t=e.className,r=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==a&&(d(t),i(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var u,l=c.indexOf(e.currentTarget)-1;r=null!=(u=c[l])?u:c[c.length-1]}null==(t=r)||t.focus()};return u().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return u().createElement("li",(0,n.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":a===t})}),null!=r?r:t)})))}function w(e){var t=e.lazy,r=e.children,n=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return u().createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function x(e){var t=v(e);return u().createElement("div",{className:(0,l.Z)("tabs-container",g)},u().createElement(k,(0,n.Z)({},e,t)),u().createElement(w,(0,n.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return u().createElement(x,(0,n.Z)({key:String(t)},e))}},62778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=r(87462),a=r(63366),u=(r(67294),r(3905)),l=(r(44996),r(74866)),o=r(85162),i=["components"],s={id:"use-redux-selector",title:"useReduxSelector",sidebar_label:"useReduxSelector"},c=void 0,d={unversionedId:"data/use-redux-selector",id:"data/use-redux-selector",title:"useReduxSelector",description:"useReduxSelector is similar to useSelector from React Redux but is tailored to be used with a Redux Store built by Oneki.js",source:"@site/docs/data/160-use-redux-selector.md",sourceDirName:"data",slug:"/data/use-redux-selector",permalink:"/docs/data/use-redux-selector",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/data/160-use-redux-selector.md",tags:[],version:"current",sidebarPosition:160,frontMatter:{id:"use-redux-selector",title:"useReduxSelector",sidebar_label:"useReduxSelector"}},p={},m=[{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Examples",id:"examples",level:2},{value:"Minimal example",id:"minimal-example",level:3}],f={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = useReduxSelector(selector, defaultValue);\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useReduxSelector"))," is similar to ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useSelector"))," from ",(0,u.kt)("strong",{parentName:"p"},"React Redux")," but is tailored to be used with a Redux Store built by Oneki.js",(0,u.kt)("br",null),"\nThe difference between ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useSelector"))," and ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"useReduxSelector"))," are the following:"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"useSelector (Redux)"),(0,u.kt)("th",{parentName:"tr",align:null},"useReduxSelector (Oneki.js)"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Selector is a function"),(0,u.kt)("td",{parentName:"tr",align:null},"Selector is a function or a string which represent a key in the Redux state.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"A equality function can be passed as a second argument"),(0,u.kt)("td",{parentName:"tr",align:null},"There is no need for a equality function as the Redux state built by Oneki.js is fully immutable")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"There is no possibility to pass a default value"),(0,u.kt)("td",{parentName:"tr",align:null},"A default value can be passed as a second argument. This value is returned if the selector returns ",(0,u.kt)("em",{parentName:"td"},"undefined"))))),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Be sure to read the documentation of ",(0,u.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," to understand exactly how it works.")),(0,u.kt)("h3",{id:"parameters"},"Parameters"),(0,u.kt)("h4",{id:"inputs"},"Inputs"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"// [Mandatory] selector is a function or a string.\n// If selector is a function, it returns a subset of the state\n// If selector is a string, then the string represents a key in the state\nselector: function(state): any | string\n\n// [Optional] This value is returned if the selector returns *undefined*\ndefautValue: any \n")),(0,u.kt)("h4",{id:"outputs"},"Outputs"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"// The result is a subset of the Redux state\nresult: any\n")),(0,u.kt)("h2",{id:"examples"},"Examples"),(0,u.kt)("h3",{id:"minimal-example"},"Minimal example"),(0,u.kt)("p",null,"This example shows how to use the selector as a string to retrieve directly a value from the Redux store by key."),(0,u.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"code",mdxType:"TabItem"},(0,u.kt)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"1100px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),(0,u.kt)(o.Z,{value:"preview",mdxType:"TabItem"},(0,u.kt)("iframe",{src:"https://codesandbox.io/embed/onekijs-use-redux-selector-lq6s7?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"1100px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))))}b.isMDXComponent=!0}}]);