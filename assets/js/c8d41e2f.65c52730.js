"use strict";(self.webpackChunkonekijs_website=self.webpackChunkonekijs_website||[]).push([[55083],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a().createContext({}),s=function(e){var n=a().useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a().createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a().createElement(a().Fragment,{},n)}},f=a().forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return t?a().createElement(d,l(l({ref:n},c),{},{components:t})):a().createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a().createElement.apply(null,i)}return a().createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t.n(r),o=t(86010),i="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,r=e.className;return a().createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),o=t.n(a),i=t(86010),l=t(72389),u=t(67392),c=t(7094),s=t(12466),p="tabList__CuJ",m="tabItem_LNqP";function f(e){var n,t,l=e.lazy,f=e.block,d=e.defaultValue,v=e.values,h=e.groupId,b=e.className,g=o().Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.l)(k,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),S=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,a.useState)(w),E=T[0],j=T[1],x=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=S[h];null!=C&&C!==E&&k.some((function(e){return e.value===C}))&&j(C)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),r=k[t].value;r!==E&&(I(n),j(r),null!=h&&O(h,String(r)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;t=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;t=null!=(o=x[i])?o:x[x.length-1]}null==(n=t)||n.focus()};return o().createElement("div",{className:(0,i.Z)("tabs-container",p)},o().createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":f},b)},k.map((function(e){var n=e.value,t=e.label,a=e.attributes;return o().createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},a,{className:(0,i.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):o().createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,l.Z)();return o().createElement(f,(0,r.Z)({key:String(n)},e))}},26208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(44996),t(65488),t(85162),["components"]),l={id:"i18nService",title:"I18n Service",sidebar_label:"I18n Service"},u=void 0,c={unversionedId:"framework/i18n/i18nService",id:"framework/i18n/i18nService",title:"I18n Service",description:"Oneki.js offers a service that provides some help methods related to internationalization, such as switching from one language to another.",source:"@site/docs/framework/i18n/030_i18nService.md",sourceDirName:"framework/i18n",slug:"/framework/i18n/i18nService",permalink:"/docs/framework/i18n/i18nService",draft:!1,editUrl:"https://github.com/oneki/oneki.github.io/edit/source/docs/framework/i18n/030_i18nService.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"i18nService",title:"I18n Service",sidebar_label:"I18n Service"},sidebar:"someSidebar",previous:{title:"useTranslation",permalink:"/docs/framework/i18n/useTranslation"},next:{title:"Server side rendering",permalink:"/docs/framework/i18n/serverSideRendering"}},s={},p=[{value:"Example",id:"example",level:3}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Oneki.js offers a service that provides some help methods related to internationalization, such as switching from one language to another.")),(0,o.kt)("p",null,"The service can be instancied with the ",(0,o.kt)("strong",{parentName:"p"},"useI18nService")," hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const i18nService = useI18nService();\n")),(0,o.kt)("p",null),"The service exposes these methods:",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"changeLocale"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/classes/I18nService#changelocale"},"changeLocale")),(0,o.kt)("td",{parentName:"tr",align:null},"This method allows you to switch from one language to another")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchTranslations"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../api/classes/I18nService#fetchtranslations"},"fetchTranslations")),(0,o.kt)("td",{parentName:"tr",align:null},"load translations")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport {\n  layout,\n  useI18nService,\n  I18nLink,\n  useSetting,\n  useLocale,\n} from "onekijs";\n\nconst Example = ({ children }) => {\n  const i18nService = useI18nService();\n  const locales = useSetting("i18n.locales");\n  const currentLocale = useLocale();\n  return (\n    <>\n      <div>\n        <h4>\n          Change locale via buttons:\n          <button onClick={() => i18nService.changeLocale("en")}>\n            en\n          </button> | <button onClick={() => i18nService.changeLocale("fr")}>fr</button>\n        </h4>\n        <h4>\n          Change locale via dropdown:\n          <select\n            value={currentLocale}\n            onChange={(e) => i18nService.changeLocale(e.target.value)}\n          >\n            {locales.map((l) => (\n              <option key={l} value={l}>\n                {l}\n              </option>\n            ))}\n          </select>\n        </h4>\n      </div>\n    </>\n  );\n};\n')))}f.isMDXComponent=!0}}]);