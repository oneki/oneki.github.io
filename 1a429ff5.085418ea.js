/*! For license information please see 1a429ff5.085418ea.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(9),o=(r(0),r(188)),i=r(193),c=r(191),s=r(190),l={id:"crud-app",title:"CRUD application",sidebar_label:"CRUD application"},u={id:"data/crud-app",title:"CRUD application",description:"The CRUD application consists of a simple website to create / read / update / delete a user.",source:"@site/docs/data/200_crud-app.md",permalink:"/docs/data/crud-app",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/data/200_crud-app.md",sidebar_label:"CRUD application"},p=[],d={rightToc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The CRUD application consists of a simple website to create / read / update / delete a user.\nThe application respects the file structure we recommend and consists of the following pages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"/users"))," page that list all the users"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"/users/new"))," page to create a new user"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"/users/:id"))," page to display a user. This page contains also a button to delete the user."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"/users/:id/edit"))," page to edit the user")),Object(o.b)(c.a,{defaultValue:"next",values:[{label:"Next App",value:"next"},{label:"Create React App",value:"cra"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"next",mdxType:"TabItem"},Object(o.b)(c.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?module=%2Fsrc%2Fpages%2F_app.js&fontsize=14&hidenavigation=1&theme=dark&view=editor",style:{width:"100%",height:"400px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"400px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),Object(o.b)("p",null,"Click on the icon ",Object(o.b)("img",{width:"20px",height:"20px",alt:"Notification architecture",src:Object(i.a)("img/hamburger_icon.svg")})," to access the other files or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/embed/github/oneki/onekijs-example/tree/master/next/form-crud?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark"}),"open the project in Code Sandbox"))),Object(o.b)(s.a,{value:"cra",mdxType:"TabItem"},Object(o.b)(c.a,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Preview",value:"preview"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"code",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark&view=editor",style:{width:"100%",height:"650px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})),Object(o.b)(s.a,{value:"preview",mdxType:"TabItem"},Object(o.b)("iframe",{src:"https://codesandbox.io/embed/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark&view=preview",style:{width:"100%",height:"650px",border:0,bordeRadius:"4px",overflow:"hidden"},title:"onekijs-basic-app",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))),"Click on the icon ",Object(o.b)("img",{width:"20px",height:"20px",alt:"Notification architecture",src:Object(i.a)("img/hamburger_icon.svg")})," to access the other files or [open the project in Code Sandbox](https://codesandbox.io/s/onekijs-crud-oixg2?fontsize=14&module=%2Fsrc%2Froutes%2Fusers%2FUsers.js&theme=dark)")))}b.isMDXComponent=!0},187:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},189:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=n},190:function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=function(e){return n.a.createElement("div",null,e.children)}},191:function(e,t,r){"use strict";r(23),r(17),r(18);var a=r(0),n=r.n(a),o=r(189);var i=function(){return Object(a.useContext)(o.a)},c=r(187),s=r.n(c),l=r(127),u=r.n(l),p=37,d=39;t.a=function(e){var t=e.block,r=e.children,o=e.defaultValue,c=e.values,l=e.groupId,b=i(),m=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(a.useState)(o),v=h[0],g=h[1];if(null!=l){var j=m[l];null!=j&&j!==v&&g(j)}var w=function(e){g(e),null!=l&&f(l,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:s()("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case d:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){return w(t)}},r)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(r).filter((function(e){return e.props.value===v}))[0]))}},192:function(e,t,r){"use strict";var a=r(0),n=r(50);t.a=function(){return Object(a.useContext)(n.a)}},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(194);var a=r(192);function n(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},194:function(e,t,r){"use strict";var a=r(19),n=r(35),o=r(195),i="".startsWith;a(a.P+a.F*r(196)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,r):t.slice(r,r+a.length)===a}})},195:function(e,t,r){var a=r(71),n=r(24);e.exports=function(e,t,r){if(a(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},196:function(e,t,r){var a=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,!"/./"[e](t)}catch(n){}}return!0}}}]);