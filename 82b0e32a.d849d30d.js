(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(9),o=(a(0),a(173)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},c={id:"overview/installation",title:"Installation",description:"**Oneki.js** is a React framework based of the following components: \r",source:"@site/docs/overview/010_installation.md",permalink:"/docs/overview/installation",editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/overview/010_installation.md",sidebar_label:"Installation",sidebar:"someSidebar",next:{title:"Getting started",permalink:"/docs/overview/getting-started"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Oneki.js")," is a React framework based of the following components: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://reacttraining.com/react-router/"}),"React Router")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux.js.org/"}),"Redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux-saga.js.org/"}),"Redux Saga")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://immerjs.github.io/immer/docs/introduction"}),"Immer")," ")),Object(o.b)("p",null,"The goal of ",Object(o.b)("strong",{parentName:"p"},"Oneki.js")," is to propose a framework on top of these librairies that hides most of the complexity.\nTherefore, the developer can built more quickly powerful webapps respecting the best practices."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Create a new React application with ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://create-react-app.dev/"}),"Create React App"))," and add ",Object(o.b)("strong",{parentName:"p"},"onekijs")," as a dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// npm install -g yarn\nyarn create react-app my-app\ncd my-app\nyarn add onekijs\nyarn install\n")),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"basic-app"}),"Create your first basic application")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To fully master the framework, be sure to read the documentation of "),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://reacttraining.com/react-router/"}),"React Router")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux.js.org/"}),"Redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux-saga.js.org/"}),"Redux Saga")," "))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Oneki.js")," has an opinionated approach on how to use these librairies and tries to remove a lot of boilerplate, but it's important to understand how it works underneath.")))}b.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),m=r,O=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?n.a.createElement(O,c({ref:t},p,{components:a})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);