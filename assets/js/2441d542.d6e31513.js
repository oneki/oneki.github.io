"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[72720],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r().createContext({}),p=function(e){var t=r().useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r().createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},c=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return n?r().createElement(k,o(o({ref:t},d),{},{components:n})):r().createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n.n(a),l=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,a=e.className;return r().createElement("div",{role:"tabpanel",className:(0,l.Z)(i,a),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(87462),r=n(67294),l=n.n(r),i=n(86010),o=n(72389),s=n(67392),d=n(7094),p=n(12466),u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,k=e.defaultValue,f=e.values,g=e.groupId,h=e.className,N=l().Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,d.U)(),x=w.tabGroupChoices,C=w.setTabGroupChoices,E=(0,r.useState)(y),O=E[0],T=E[1],j=[],F=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var V=x[g];null!=V&&V!==O&&b.some((function(e){return e.value===V}))&&T(V)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==O&&(F(t),T(a),null!=g&&C(g,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var l,i=j.indexOf(e.currentTarget)-1;n=null!=(l=j[i])?l:j[j.length-1]}null==(t=n)||t.focus()};return l().createElement("div",{className:(0,i.Z)("tabs-container",u)},l().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l().createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:P,onClick:P},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l().createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function k(e){var t=(0,o.Z)();return l().createElement(c,(0,a.Z)({key:String(t)},e))}},64094:function(e,t,n){var a=n(67294),r=n.n(a),l=n(65488);n(85162);t.Z=function(e){var t=e.children;return r().createElement(l.Z,{groupId:"application-types",defaultValue:"cra",values:[{label:"Vite App",value:"cra"},{label:"Nextjs App",value:"next"}]},t)}},32779:function(e,t,n){n.d(t,{YK:function(){return s},g0:function(){return d}});var a=n(67294),r=n.n(a),l=n(64094),i=n(85162),o=function(e){var t=e.name,n=e.height,a=void 0===n?500:n,l=e.modules,i=e.branch,o=void 0===i?"master":i,s=e.type,d=void 0===s?"examples":s,p=e.view,u=void 0===p?"editor":p,m="https://oneki-gs-vite-"+t.split("-")[0]+".surge.sh/",c="https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/"+o+"/"+d+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+u;l&&(c+="&module=",l.forEach((function(e,t){t>0&&(c+=","),c+=e})));var k="onekijs-"+t.split("/").join("-"),f="https://github.com/oneki/onekijs/tree/"+o+"/"+d+"/"+t;return r().createElement(r().Fragment,null,r().createElement("iframe",{src:m,style:{width:"100%",height:a+"px",border:"10px solid #EEE",bordeRadius:"4px",overflow:"hidden"},title:k,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r().createElement("div",{style:{textAlign:"center"}},r().createElement("a",{href:c,target:"_blank"},"Open in CodeSandbox")," | ",r().createElement("a",{href:f,target:"_blank"},"View code on GitHub")))},s=function(e){var t=e.name;return r().createElement("div",{style:{textAlign:"right"}},r().createElement("a",{href:"https://codesandbox.io/p/sandbox/github/oneki/onekijs/tree/master/"+t,target:"_blank",style:{display:"inline-flex",alignItems:"center",height:"32px",padding:"0px 12px",fontSize:"13px",fontWeight:500,color:"rgb(255, 255, 255)",backgroundColor:"#2196f3",borderRadius:"4px",textDecoration:"none",cursor:"pointer",marginBottom:"2px"}},"Open in Codesandbox"))},d=function(e){var t=e.name,n=e.modules,a=e.craName,s=e.craModules,d=e.nextName,p=e.nextModules,u=e.height,m=void 0===u?600:u,c=e.branch,k=void 0===c?"master":c;return r().createElement(l.Z,null,r().createElement(i.Z,{value:"cra"},r().createElement(o,{name:a||t,type:"getting-started/cra",view:"preview",branch:k,height:m,modules:s||n})),r().createElement(i.Z,{value:"next"},r().createElement(o,{name:d||t,type:"getting-started/next",view:"preview",branch:k,height:m,modules:p||n})))};t.ZP=o},17463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(32779),o=(n(44996),["components"]),s={id:"field",title:"Field",sidebar_label:"Field"},d=void 0,p={unversionedId:"framework/form/field",id:"framework/form/field",title:"Field",description:"A field must be registered with a form to be controlled.",source:"@site/docs/framework/form/015_field.md",sourceDirName:"framework/form",slug:"/framework/form/field",permalink:"/docs/framework/form/field",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/015_field.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"field",title:"Field",sidebar_label:"Field"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/framework/form/use-form"},next:{title:"Core wrappers",permalink:"/docs/framework/form/wrapper"}},u={},m=[{value:"field method",id:"field-method",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Example",id:"example",level:3},{value:"useField",id:"usefield",level:2},{value:"Helpers",id:"helpers",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A field must be registered with a form to be controlled.\nThere are different ways to register a field with a form"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"field"),"method provided by ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"useField")," hook. Check the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Write your own wrapper component"))," page for more details"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"init")," method provided by ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),". Low level API.")),(0,l.kt)("h2",{id:"field-method"},"field method"),(0,l.kt)("p",null,"The simplest way to register a field with a form is to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," method provided by useForm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { field } = useForm();\nconst { name, value, onChange, onFocus, onBlur } = field(\n  name,\n  validators,\n  options\n);\n")),(0,l.kt)("h3",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),"*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the field. Must match the path in the values object",(0,l.kt)("br",null)," A sub property is accessed via a dot --\x3e ",(0,l.kt)("inlineCode",{parentName:"td"},'"address.street"'),(0,l.kt)("br",null),"A item of an array is accessed via its index --\x3e ",(0,l.kt)("inlineCode",{parentName:"td"},'"item.2"'),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"lastname"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"address.street"')),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},'"children.1.firstname"')," ")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"validators")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/Validator"},"Validator"),"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of validators. Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./validations"},"Validations"))," section for more details.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"[required(), maxlength(5)]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/interfaces/FieldOptions"},"FormOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains optional options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value of the field ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"'open'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"touchOn")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../api/types/TouchOnType"},"TouchOnType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Overrides the setting defined at the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"./use-form#inputs"},"form"))," level")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Indicates which event marks the field as touched.",(0,l.kt)("br",null),"The validations of a field are compiled as soon as it has been touched.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Valid values are",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"blur")),": when the field is exited",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"change")),": when the content of the field is changed",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"focus")),": when the field is entered",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"load")),": when the field is loaded",(0,l.kt)("br",null)," - ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"submit")),": when the form is submitted")))),(0,l.kt)("h3",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the field (same as input, given for convenience, see example below)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onChange")),(0,l.kt)("td",{parentName:"tr",align:null},"(value): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called anytime the value is changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"(): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called when the field is entered")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"(): void"),(0,l.kt)("td",{parentName:"tr",align:null},"listener called when the field is exited")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)(i.YK,{name:"cra-form-basic",mdxType:"SandboxExampleButton"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"reference",reference:!0},"https://github.com/oneki/onekijs/blob/master/examples/cra-form-basic/src/pages/field.tsx\n")),(0,l.kt)("h2",{id:"usefield"},"useField"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"field()")," method is the simplest way to register a field in a form, but it is also the least efficient. Every time any value in the form is updated, the field is re-rendered. ",(0,l.kt)("br",null),"\nFor best performance, it is best to wrap a form component and register it with the **",(0,l.kt)("inlineCode",{parentName:"p"},"useField")," hook because this hook only renders the wrapped component when its value is changed."),(0,l.kt)("p",null,"The signature of the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useField"))," hook is the same as the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#field-method"},"field"))," method"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useField } from "onkeijs";\nconst { name, value, onChange, onFocus, onBlur } = useField(\n  name,\n  validators,\n  options\n);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js")," comes with some components wrapping core form react component (see the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./wrapper"},"Core component wrappers"))," section).",(0,l.kt)("br",{parentName:"p"}),"\n","To create a custom one, check the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./custom-wrapper"},"Custom wrappers"))," section"),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"useField"))," uses internally ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./use-form-context"},"useFormContext")),", meaning that it only works if the component is rendered as a child of a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<Form>"))," component")),(0,l.kt)("h2",{id:"helpers"},"Helpers"),(0,l.kt)("p",null,"the ",(0,l.kt)("inlineCode",{parentName:"p"},"useForm")," hook provides some helper to access the value or the validation of a field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const { getValue, getValidation } = useForm();\n\nconst formValue = getValue();\nconst lastname = getValue("address.street"); // will not throw an error if address is undefined\nconst validationStatus = getValue("address.street").status; // will not throw an error if the validation is undefined\nconst validationMessage = getValidation("address.street").message; // will not throw an error if the validation is undefined\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getValue")),(0,l.kt)("td",{parentName:"tr",align:null},"<T",">","(fieldName: string): T ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"A helper to get the value of a field. Returns undefined if the value is not initialized.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"getValue('address.street')"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"getValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"(fieldName?: string, touchedOnly?: boolean): ",(0,l.kt)("a",{parentName:"td",href:"../../api/classes/ContainerValidation"},"ContainerValidation")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"../../api/classes/FieldValidation"},"FieldValidation")),(0,l.kt)("td",{parentName:"tr",align:null},"A helper to get the validation of a field. Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"{ status: null, message: null }")," if the validation is not initialized.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"touchedOnly")," defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Example"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"getValidation('address.street').status"))))),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValue"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValidation"))," can be used to get a composite value or a composite validation.",(0,l.kt)("br",{parentName:"p"}),"\n","For example, if there are two fields ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"address.street"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"address.city"))),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValue('address')"))," will return ",(0,l.kt)("inlineCode",{parentName:"li"},"{ street: 'xxx', city: 'xxx' }")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"getValidation('address')"))," will compile the validation of the two fields and returns the lower statusCode and the list of field messages"))))}k.isMDXComponent=!0}}]);