(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"99+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var n=r("q1tI"),a=r.n(n),i=r("qBvR"),l=r("FYvP"),o=r("LuYx"),c=r("Wbzz"),u=r("JumW"),s=r("0ZAC"),p=r("a5Ba"),m=r("DoWT");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.navItem,r=d(Object(n.useState)(!1),2),i=r[0],l=r[1],o=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v({id:e,name:e,isSelected:r.url===t||e===t,disabled:!r.url,onClick:r.url?function(){Object(c.navigate)(r.url)}:function(){return null}},r)},f=[o("Overview",{url:"observability/overview"}),o("Logs",{items:[o("Stream",{url:"/observability/stream"}),o("Anomalies"),o("Categories")]}),o("Infrastructure",{items:[o("Inventory",{url:"/observability/inventory"}),o("Metrics explorer")]}),o("APM",{items:[o("Services",{url:"/observability/services"}),o("Service map"),o("Traces")]}),o("Uptime",{items:[o("Monitoring overview",{url:"/observability/uptime"}),o("Certificates")]}),o("User experience",{items:[o("Dashboard",{url:"/observability/user-experience"}),o("Performance Analyzer")]})];return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{size:"xs"},a.a.createElement("h2",null,a.a.createElement(s.a,{size:"l",type:"logoObservability"}),"   Observability")),a.a.createElement(p.a,null),a.a.createElement(m.a,{mobileTitle:"Navigate within Observability",toggleOpenOnMobile:function(){l(!i)},isOpenOnMobile:i,items:f}))}var h=r("UJ+I");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var S=function(e){var t=e.breadcrumbs,r=e.headerLinks,u=e.navItem,s=e.children,p=e.pageTitle,m=E(e,["breadcrumbs","headerLinks","navItem","children","pageTitle"]),f=[{text:"Observability",onClick:null!=t&&t.length?function(){return Object(c.navigate)("/observability/overview")}:void 0}],v=f;null!=t&&t.length&&(v=f.concat(t));var b=a.a.createElement(i.a,null,r,a.a.createElement(l.a,{iconType:"plusInCircle",minWidth:0,size:"s"},"Add data")),d=Object(n.useContext)(h.KibanaChromeContext);return Object(n.useEffect)((function(){d.setChrome({breadcrumbs:v,headerLinks:b,pageTitle:p||"Observability"})}),[t,r]),a.a.createElement(o.a,g({solutionNav:a.a.createElement(O,{navItem:u})},m),s)}},QuSx:function(e,t,r){e.exports=r.p+"static/Observability - services-b5e1e46d222918f33941d611dc7cb009.png"},VQip:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("qBvR"),l=r("0j75"),o=r("pbrG"),c=r("R9SF"),u=r("JumW"),s=r("3vKy"),p=r("+dxP"),m=r("MrTG"),f=r("8V7x"),v=r("xuGK"),b=r("XcHi"),d=r("a5Ba"),y=r("RCxc"),O=r("QuSx"),h=r.n(O),g=r("99+X"),E=[{text:"Services"}],S=a.a.createElement(i.a,null,a.a.createElement(l.a,{href:"#",iconType:"gear",color:"primary"},"Settings"),a.a.createElement(l.a,{href:"#",iconType:"inspect",color:"primary"},"Anomaly detection"),a.a.createElement(l.a,{href:"#",iconType:"arrowDown",color:"primary"},"Alerts"));t.default=function(){return a.a.createElement(g.a,{pageTitle:"Services",navItem:"Services",headerLinks:S,breadcrumbs:E},a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement(u.a,{size:"l"},a.a.createElement("h1",null,"Services"))),a.a.createElement(c.a,null,a.a.createElement(y.a,null))),a.a.createElement(s.a,null,a.a.createElement(p.a,null,a.a.createElement(m.a,{gutterSize:"s"},a.a.createElement(f.a,{grow:4},a.a.createElement(v.a,{fullWidth:!0,placeholder:"Search transactions, errors and metrics..."})),a.a.createElement(f.a,null,a.a.createElement(b.a,{prepend:"Environment",options:[{value:"option_one",text:"All"}]}))),a.a.createElement(d.a,{size:"m"}),a.a.createElement("a",{href:"./opbeans-java"},a.a.createElement("img",{className:"pageScreenshot pageScreenshot--fullWidth",alt:"Service list",src:h.a})))))}},XcHi:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),a=r.n(n),i=r("TSYQ"),l=r.n(i),o=r("wsXB"),c=r("q2GH");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t,r,n=e.className,i=e.options,p=void 0===i?[]:i,m=e.id,f=e.name,v=e.inputRef,b=e.isInvalid,d=e.fullWidth,y=void 0!==d&&d,O=e.isLoading,h=void 0!==O&&O,g=e.hasNoInitialSelection,E=void 0!==g&&g,S=e.defaultValue,j=e.compressed,w=void 0!==j&&j,x=e.value,I=e.prepend,P=e.append,A=e.onMouseUp,T=s(e,["className","options","id","name","inputRef","isInvalid","fullWidth","isLoading","hasNoInitialSelection","defaultValue","compressed","value","prepend","append","onMouseUp"]),k=l()("euiSelect",{"euiSelect--fullWidth":y,"euiSelect--compressed":w,"euiSelect--inGroup":I||P,"euiSelect-isLoading":h},n);E&&(t=a.a.createElement("option",{value:"",disabled:!0,hidden:!0,style:{display:"none"}}," ")),null==x&&(r=S||"");return a.a.createElement(o.a,{icon:{type:"arrowDown",side:"right"},fullWidth:y,isLoading:h,compressed:w,prepend:I,append:P,inputId:m},a.a.createElement(c.a,{isInvalid:b},a.a.createElement("select",u({id:m,name:f,className:k,ref:v,defaultValue:r,value:x,onMouseUp:function(e){e.nativeEvent.stopImmediatePropagation(),A&&A(e)}},T),t,p.map((function(e,t){var r=e.text,n=s(e,["text"]);return a.a.createElement("option",u({},n,{key:t}),r)})))))}}}]);
//# sourceMappingURL=component---src-pages-observability-services-tsx-648abf7f713f3e79aefc.js.map