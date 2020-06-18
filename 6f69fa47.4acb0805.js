(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(9),i=(r(0),r(208)),o=r(218),l={id:"initial-value",title:"Initial values",sidebar_label:"Initial values"},c={id:"framework/form/initial-value",title:"Initial values",description:"Sometimes, it's useful to use the same form for creating an object or editing an object. For a edit-type form, the fields must be initialized with a initial value.",source:"@site/docs/framework/form/035_initial-value.md",permalink:"/docs/framework/form/initial-value",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/form/035_initial-value.md",sidebar_label:"Initial values",sidebar:"someSidebar",previous:{title:"Custom Wrappers",permalink:"/docs/framework/form/custom-wrapper"},next:{title:"Binding",permalink:"/docs/framework/form/bind"}},s=[{value:"Example",id:"example",children:[]}],u={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, it's useful to use the same form for creating an object or editing an object. For a edit-type form, the fields must be initialized with a initial value.\nThere are three ways to set a value to a field"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By setting explicitly the value, either following an ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"onChange"))," event or by using the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"setValue"))," method provided by ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form"}),"useForm"))),Object(i.b)("li",{parentName:"ul"},"By passing a initialValues object to ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form"}),"useForm"))),Object(i.b)("li",{parentName:"ul"},"By specifying a default value when registering the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"./use-form"}),"field")))),Object(i.b)("p",null,"The form controller checks first if a value has been explicitely set, then checks if a initial value has been provided an finally check the default value",Object(i.b)("br",{parentName:"p"}),"\n","If nothing has been provided, the value is a empty string (because core react components assume that an ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"undefined"))," or ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"null"))," value is for uncontrolled fields)"),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{name:"cra-form-basic",height:"1000",modules:["/src/pages/initial_value.js"],branch:"features/form",mdxType:"Sandbox"}))}m.isMDXComponent=!0},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),b=n,f=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},218:function(e,t,r){"use strict";r(72),r(219);var n=r(0),a=r.n(n);t.a=function(e){var t=e.name,r=e.height,n=void 0===r?500:r,i=e.modules,o=e.branch,l="https://codesandbox.io/embed/github/oneki/onekijs/tree/"+(void 0===o?"master":o)+"/examples/"+t+"?codemirror=1&fontsize=14&theme=dark&view=editor";i&&(l+="&module=",i.forEach((function(e,t){t>0&&(l+=","),l+=e})));var c="onekijs-"+t.split("/").join("-");return a.a.createElement("iframe",{src:l,style:{width:"100%",height:n+"px",border:0,bordeRadius:"4px",overflow:"hidden"},title:c,allow:"geolocation; microphone; camera; midi; accelerometer; gyroscope; payment; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})}},219:function(e,t,r){var n=r(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||r(11)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);