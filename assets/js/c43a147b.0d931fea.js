"use strict";(self.webpackChunkoneki_js=self.webpackChunkoneki_js||[]).push([[4592],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(67294),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n().createContext({}),m=function(e){var t=n().useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n().createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n().createElement(n().Fragment,{},t)}},k=n().forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,c=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return a?n().createElement(c,i(i({ref:t},d),{},{components:a})):n().createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n().createElement.apply(null,o)}return n().createElement.apply(null,a)}k.displayName="MDXCreateElement"},32779:function(e,t,a){var r=a(67294),n=a.n(r);t.Z=function(e){var t=e.name,a=e.height,r=void 0===a?500:a,l=e.modules,o=e.branch,i=void 0===o?"master":o,p=e.type,d=void 0===p?"examples":p,m=e.view,s="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+i+"/"+d+"/"+t+"?codemirror=1&fontsize=14&theme=dark&view="+(void 0===m?"editor":m);l&&(s+="&module=",l.forEach((function(e,t){t>0&&(s+=","),s+=e})));var u="onekijs-"+t.split("/").join("-");return n().createElement("iframe",{src:s,style:{width:"100%",height:r+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:u,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},85375:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),o=a(32779),i=["components"],p={id:"wrapper",title:"Core wrappers",sidebar_label:"Core wrappers"},d=void 0,m={unversionedId:"framework/form/wrapper",id:"framework/form/wrapper",isDocsHomePage:!1,title:"Core wrappers",description:"The field method provided by useForm is the simplest way to register a field with a form because it's not necessary to modify the component as soon as it accepts the common props name, value, onChange, onFocus and onBlur",source:"@site/docs/framework/form/020_wrapper.md",sourceDirName:"framework/form",slug:"/framework/form/wrapper",permalink:"/docs/framework/form/wrapper",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/020_wrapper.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"wrapper",title:"Core wrappers",sidebar_label:"Core wrappers"},sidebar:"someSidebar",previous:{title:"Field",permalink:"/docs/framework/form/field"},next:{title:"Validations",permalink:"/docs/framework/form/validations"}},s=[{value:"Field wrappers",id:"field-wrappers",children:[],level:3},{value:"Submit wrapper",id:"submit-wrapper",children:[],level:3},{value:"Example",id:"example",children:[],level:2}],u={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./field#field"},"field"))," method provided by ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))," is the simplest way to register a field with a form because it's not necessary to modify the component as soon as it accepts the common props ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"name")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"value")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"onChange")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"onFocus"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"onBlur")),(0,l.kt)("br",{parentName:"p"}),"\n","The downside of this method is that it's not very performant as it rerenders the field anytime any value is changed."),(0,l.kt)("h3",{id:"field-wrappers"},"Field wrappers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oneki.js"),' comes with a wrapper for each React core form component. These wrappers will register automatically the field and provide additional props to specify some validators in a more "React way". Internally, they leverage the ',(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./field#usefield"},"useField"))," hook"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Core component"),(0,l.kt)("th",{parentName:"tr",align:null},"Wrapper"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<input>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<Input>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<select>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<Select>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<textarea>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<Textarea>"))))),(0,l.kt)("p",null,"Each wrapper requires at least the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"name"))," prop. The name prop must match the path of the value in the values object. Check the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./field"},"field"))," for more detail",(0,l.kt)("br",{parentName:"p"}),"\n","Each wrapper accepts the same props as the wrapped component but also accepts additional props for validators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field.",(0,l.kt)("br",null),"The name prop must match the path of the value in the values object",(0,l.kt)("br",null),"Check the ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./field"},"field"))," for more detail ",(0,l.kt)("inlineCode",{parentName:"td"},"<Input>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'name="status"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value of the field if not defined in the values object or the initialValues provided to ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"./use-form"},"useForm"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'defaultValue="closed"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Check if the value of the field is an email"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"emailMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Override the default message provided to the user if the validator ",(0,l.kt)("inlineCode",{parentName:"td"},"email")," is not valid."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'emailMessage="Invalid email"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates that the field is required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"requiredMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Override the default message provided to the user if the validator ",(0,l.kt)("inlineCode",{parentName:"td"},"required")," is not valid."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'requiredMesage="This field is required"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"regex")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a regular expression evaluated against the value of the field"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'regex="^[a-zA-Z]*$"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"regexMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Override the default message provided to the user if the validator ",(0,l.kt)("inlineCode",{parentName:"td"},"regex")," is not valid."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'regexMessage="Can only contains alphabetical characters"'))))),(0,l.kt)("h3",{id:"submit-wrapper"},"Submit wrapper"),(0,l.kt)("p",null,"There is also a wrapper for the submit button. This wrapper listens on the form status and disables the submit button if the form status is not OK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Core component"),(0,l.kt)("th",{parentName:"tr",align:null},"Wrapper"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<buton type="submit">')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<Submit>"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(o.Z,{name:"cra-form-basic",height:"1000",modules:["/src/pages/wrapper.js"],branch:"master",mdxType:"Sandbox"}))}k.isMDXComponent=!0}}]);