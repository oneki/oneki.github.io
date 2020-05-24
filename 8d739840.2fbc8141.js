/*! For license information please see 8d739840.2fbc8141.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return i}));var n=a(1),r=a(9),b=(a(0),a(204)),o=(a(208),a(207),{id:"introduction",title:"Oneki.js hooks",sidebar_label:"Table of contents"}),c={id:"hooks/introduction",title:"Oneki.js hooks",description:"Oneki.js provides several hooks to speed up the developpement and to hide most of the complexity of Redux, Redux Saga and Immer.",source:"@site/docs/hooks/001-introduction.md",permalink:"/docs/hooks/introduction",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/hooks/001-introduction.md",sidebar_label:"Table of contents"},s=[],l={rightToc:s};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"Oneki.js"))," provides several hooks to speed up the developpement and to hide most of the complexity of Redux, Redux Saga and Immer."),Object(b.b)("h4",{id:"configuration-hooks"},"Configuration hooks"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hook"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-settings"}),"useSettings")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSettings"))," returns the whole object passed as a prop to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"App"))," (generally defined in settings.js)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-settings"}),"useSetting")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSetting"))," returns a specific entry from Settings")))),Object(b.b)("h4",{id:"ajax-hooks"},"AJAX hooks"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hook"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-get"}),"useGet")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useGet"))," sends an ajax GET request and returns back the data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-get"}),"useSecureGet")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSecureGet"))," is similar to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useGet"))," but adds a ",Object(b.b)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-post"}),"usePost")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"usePost"))," sends an ajax POST request and returns back the payload received from the server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-post"}),"useSecurePost")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSecurePost"))," is similar to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"usePost"))," but adds a ",Object(b.b)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-put"}),"usePut")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"usePut"))," sends an ajax PUT request and returns back the payload received from the server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-put"}),"useSecurePut")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSecurePut"))," is similar to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"usePut"))," but adds a ",Object(b.b)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-delete"}),"useDelete")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useDelete"))," sends an ajax DELETE request")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-delete"}),"useSecureDelete")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSecureDelete"))," is similar to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useDelete"))," but adds a ",Object(b.b)("em",{parentName:"td"},"Bearer")," authorization header that contains the token received and stored by ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useLoginService"))," in the redux store")))),Object(b.b)("h4",{id:"notification-hooks"},"Notification hooks"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hook"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-notification-service"}),"useNotificationService")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useNotificationService"))," provides a central service to send notification.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-notifications"}),"useNotifications")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useNotifications"))," listens on a topic that contains notifications.",Object(b.b)("br",null)," As soon as the topic is updated, the component does a re-render")))),Object(b.b)("h4",{id:"service-hooks"},"Service hooks"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hook"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-local-service"}),"useLocalService")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The goal of ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useLocalService"))," is to create a service local to the component with two kinds of methods: ",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"Reducer methods")),": the role of these methods is to update the local state of the component. These methods are generally very simple."),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"Saga methods")),":",Object(b.b)("ul",null,Object(b.b)("li",null,"These methods are generally asynchronous and more complex"),Object(b.b)("li",null,"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),Object(b.b)("li",null,"A saga method never updates the local state by itself. It always calls a ",Object(b.b)("em",{parentName:"td"},"Reducer")," method to do that.")))))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-redux-service"}),"useReduxService")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The goal of ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useReduxService"))," is to create a singleton with two kinds of methods:",Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"Reducer methods")),": the role of these methods is to update the redux state. These methods are generally very simple."),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"Saga methods")),Object(b.b)("ul",null,Object(b.b)("li",null,"These methods are generally asynchronous and more complex."),Object(b.b)("li",null,"A saga method is more like a flow. Each step of the flow can be asynchronous and can trigger a re-render"),Object(b.b)("li",null,"A saga method never updates the Redux state by itself. It always calls a ",Object(b.b)("em",{parentName:"td"},"Reducer")," method to do that.")))))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"use-redux-selector"}),"useReduxSelector")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useReduxSelector"))," is similar to ",Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"},"useSelector"))," from ",Object(b.b)("strong",{parentName:"td"},"React Redux")," but is tailored to be used with a Redux Store built by Oneki.js")))))}i.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||b;return a?r.a.createElement(p,c(c({ref:t},l),{},{components:a})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,o=new Array(b);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<b;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},205:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===b)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},206:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},208:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),r=a.n(n),b=a(206);var o=function(){return Object(n.useContext)(b.a)},c=a(205),s=a.n(c),l=a(127),i=a.n(l),u=37,d=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,c=e.values,l=e.groupId,m=o(),p=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(n.useState)(b),h=j[0],g=j[1];if(null!=l){var N=p[l];null!=N&&N!==h&&g(N)}var f=function(e){g(e),null!=l&&O(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:s()("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}}}]);