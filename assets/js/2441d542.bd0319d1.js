"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[72720],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r().createContext({}),d=function(e){var t=r().useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,f=p["".concat(i,".").concat(c)]||p[c]||m[c]||l;return n?r().createElement(f,o(o({ref:t},u),{},{components:n})):r().createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n.n(a),l=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(i,a),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(87462),r=n(67294),l=n.n(r),i=n(86010),o=n(12466),s=n(45315),u=n(91980),d=n(67392),p=n(50012);function m(e){return function(e){var t,n;return null!=(t=null==(n=l().Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function g(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,d=c(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),g=m[0],h=m[1],N=k({queryString:s,groupId:u}),b=N[0],v=N[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],x=y[1],C=function(){var e=null!=b?b:w;return f({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){C&&h(C)}),[C]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),v(e),x(e)}),[v,x,d]),tabValues:d}}var h=n(72389),N="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==r&&(p(t),s(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var l,i=d.indexOf(e.currentTarget)-1;n=null!=(l=d[i])?l:d[d.length-1]}null==(t=n)||t.focus()};return l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return l().createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return d.push(e)},onKeyDown:c,onClick:m},o,{className:(0,i.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return l().createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=g(e);return l().createElement("div",{className:(0,i.Z)("tabs-container",N)},l().createElement(v,(0,a.Z)({},e,t)),l().createElement(y,(0,a.Z)({},e,t)))}function x(e){var t=(0,h.Z)();return l().createElement(w,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),l=n(74866);n(85162);t.Z=function(e){var t=e.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return u}});var a=n(67294),r=n.n(a),l=n(64094),i=n(85162),o=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,l=e.modules,i=e.branch,o=void 0===i?"master":i,s=e.type,u=void 0===s?"examples":s,d=e.view,p=void 0===d?"editor":d,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",c="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+o+"/"+u+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+p;l&&(c+="&module=",l.forEach((function(e,t){t>0&&(c+=","),c+=e})));var f="onekijs-"+t.split("/").join("-"),k="https://github.com/oneki/onekijs/tree/"+o+"/"+u+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:f,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:c,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:k,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},u=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,u=e.nextName,d=e.nextModules,p=e.height,m=void 0===p?600:p,c=e.branch,f=void 0===c?"master":c;return r().createElement(l.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(o,{name:a||t,type:"getting-started/cra",view:"preview",branch:f,height:m,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(o,{name:u||t,type:"getting-started/next",view:"preview",branch:f,height:m,modules:d||n})))};t.ZP=o},17463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(32779),o=(n(44996),["components"]),s={id:"field",title:"Field",sidebar_label:"Field"},u=void 0,d={unversionedId:"framework/form/field",id:"framework/form/field",title:"Field",description:"A field must be registered with a form to be controlled.",source:"@site/docs/framework/form/015_field.md",sourceDirName:"framework/form",slug:"/framework/form/field",permalink:"/docs/framework/form/field",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/015_field.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"field",title:"Field",sidebar_label:"Field"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/framework/form/use-form"},next:{title:"Core wrappers",permalink:"/docs/framework/form/wrapper"}},p={},m=[{value:"field method",id:"field-method",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Example",id:"example",level:3},{value:"useField",id:"usefield",level:2},{value:"Helpers",id:"helpers",level:2}],c={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A field must be registered with a form to be controlled.\nThere are different ways to register a field with a form"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"field"),"method provided by ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"useField")," hook. Check the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Write your own wrapper component"))," page for more details"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"init")," method provided by ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),". Low level API.")),(0,l.kt)("h2",{id:"field-method"},"field method"),(0,l.kt)("p",null,"The simplest way to register a field with a form is to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," method provided by useForm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { field } = useForm();\nconst { name, value, onChange, onFocus, onBlur } = field(\n  name,\n  validators,\n  options\n);\n")),(0,l.kt)("h3",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),"*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the field. Must match the path in the values object",(0,l.kt)("br",null)," A sub property is accessed via a dot --\x3e ",(0,l.kt)("inlineCode",{parentName:"td"},'"address.street"'),(0,l.kt)("br",null),"A item of an array is accessed via its index --\x3e ",(0,l.kt)("inlineCode",{parentName:"td"},'"item.2"'),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"lastname"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"address.street"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"children.1.firstname"')," ")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"validators")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/Validator"},"Validator"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of validators. Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"[required(), maxlength(5)]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/FieldOptions"},"FormOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains optional options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value of the field ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"'open'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"touchOn")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/TouchOnType"},"TouchOnType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Overrides the setting defined at the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"./use-form#inputs"},"form"))," level")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Indicates which event marks the field as touched.",(0,l.kt)("br",null),"The validations of a field are compiled as soon as it has been touched.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Valid values are",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"blur")),": when the field is exited",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"change")),": when the content of the field is changed",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"focus")),": when the field is entered",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"load")),": when the field is loaded",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"submit")),": when the form is submitted")))),(0,l.kt)("h3",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the field (same as input, given for convenience, see example below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onChange")),(0,l.kt)("td",{parentName:"tr",align:null},"(value): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called anytime the value is changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"(): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called when the field is entered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"(): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called when the field is exited")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)(i.YK,{name:"cra-form-basic",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/field.tsx\n")),(0,l.kt)("h2",{id:"usefield"},"useField"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"field()")," method is the simplest way to register a field in a form, but it is also the least efficient. Every time any value in the form is updated, the field is re-rendered. ",(0,l.kt)("br",null),"\nFor best performance, it is best to wrap a form component and register it with the **",(0,l.kt)("inlineCode",{parentName:"p"},"useField")," hook because this hook only renders the wrapped component when its value is changed."),(0,l.kt)("p",null,"The signature of the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useField"))," hook is the same as the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#field-method"},"field"))," method"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useField } from "onkeijs";\nconst { name, value, onChange, onFocus, onBlur } = useField(\n  name,\n  validators,\n  options\n);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," comes with some components wrapping core form react component (see the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./wrapper"},"Core component wrappers"))," section).",(0,l.kt)("br",{parentName:"p"}),"\n","To create a custom one, check the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Custom wrappers"))," section"),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useField"))," uses internally ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),", meaning that it only works if the component is rendered as a child of a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<Form>"))," component")),(0,l.kt)("h2",{id:"helpers"},"Helpers"),(0,l.kt)("p",null,"the ",(0,l.kt)("inlineCode",{parentName:"p"},"useForm")," hook provides some helper to access the value or the validation of a field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const { getValue, getValidation } = useForm();\n\nconst formValue = getValue();\nconst lastname = getValue("address.street"); // will not throw an error if address is undefined\nconst validationStatus = getValue("address.street").status; // will not throw an error if the validation is undefined\nconst validationMessage = getValidation("address.street").message; // will not throw an error if the validation is undefined\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getValue")),(0,l.kt)("td",{parentName:"tr",align:null},"<T",">","(fieldName: string): T ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"A helper to get the value of a field. Returns undefined if the value is not initialized.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"getValue('address.street')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"(fieldName?: string, touchedOnly?: boolean): ",(0,l.kt)("a",{parentName:"td",href:"../../api/classes/ContainerValidation"},"ContainerValidation")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"../../api/classes/FieldValidation"},"FieldValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"A helper to get the validation of a field. Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"{ status: null, message: null }")," if the validation is not initialized.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"touchedOnly")," defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"getValidation('address.street').status"))))),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValue"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValidation"))," can be used to get a composite value or a composite validation.",(0,l.kt)("br",{parentName:"p"}),"\n","For example, if there are two fields ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"address.street"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"address.city"))),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValue('address')"))," will return ",(0,l.kt)("inlineCode",{parentName:"li"},"{ street: 'xxx', city: 'xxx' }")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValidation('address')"))," will compile the validation of the two fields and returns the lower statusCode and the list of field messages"))))}f.isMDXComponent=!0}}]);