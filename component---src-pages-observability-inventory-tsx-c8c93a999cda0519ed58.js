(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"99+X":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("q1tI"),a=n.n(r),i=n("qBvR"),l=n("FYvP"),o=n("LuYx"),c=n("Wbzz"),u=n("JumW"),s=n("0ZAC"),p=n("a5Ba"),m=n("DoWT");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){var t=e.navItem,n=d(Object(r.useState)(!1),2),i=n[0],l=n[1],o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v({id:e,name:e,isSelected:n.url===t||e===t,disabled:!n.url,onClick:n.url?function(){Object(c.navigate)(n.url)}:function(){return null}},n)},f=[o("Overview",{url:"observability/overview"}),o("Logs",{items:[o("Stream",{url:"/observability/stream"}),o("Anomalies"),o("Categories")]}),o("Infrastructure",{items:[o("Inventory",{url:"/observability/inventory"}),o("Metrics explorer")]}),o("APM",{items:[o("Services",{url:"/observability/services"}),o("Service map"),o("Traces")]}),o("Uptime",{items:[o("Monitoring overview",{url:"/observability/uptime"}),o("Certificates")]}),o("User experience",{items:[o("Dashboard",{url:"/observability/user-experience"}),o("Performance Analyzer")]})];return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{size:"xs"},a.a.createElement("h2",null,a.a.createElement(s.a,{size:"l",type:"logoObservability"}),"   Observability")),a.a.createElement(p.a,null),a.a.createElement(m.a,{mobileTitle:"Navigate within Observability",toggleOpenOnMobile:function(){l(!i)},isOpenOnMobile:i,items:f}))}var g=n("UJ+I");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=function(e){var t=e.breadcrumbs,n=e.headerLinks,u=e.navItem,s=e.children,p=e.pageTitle,m=E(e,["breadcrumbs","headerLinks","navItem","children","pageTitle"]),f=[{text:"Observability",onClick:null!=t&&t.length?function(){return Object(c.navigate)("/observability/overview")}:void 0}],v=f;null!=t&&t.length&&(v=f.concat(t));var b=a.a.createElement(i.a,null,n,a.a.createElement(l.a,{iconType:"plusInCircle",minWidth:0,size:"s"},"Add data")),d=Object(r.useContext)(g.KibanaChromeContext);return Object(r.useEffect)((function(){d.setChrome({breadcrumbs:v,headerLinks:b,pageTitle:p||"Observability"})}),[t,n]),a.a.createElement(o.a,O({solutionNav:a.a.createElement(h,{navItem:u})},m),s)}},IAJ3:function(e,t,n){e.exports=n.p+"static/Observability - inventory-ea26e625e7369298b9b4b2684c588f60.png"},XcHi:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),l=n.n(i),o=n("wsXB"),c=n("q2GH");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t,n,r=e.className,i=e.options,p=void 0===i?[]:i,m=e.id,f=e.name,v=e.inputRef,b=e.isInvalid,d=e.fullWidth,y=void 0!==d&&d,h=e.isLoading,g=void 0!==h&&h,O=e.hasNoInitialSelection,E=void 0!==O&&O,j=e.defaultValue,w=e.compressed,I=void 0!==w&&w,S=e.value,x=e.prepend,P=e.append,A=e.onMouseUp,C=s(e,["className","options","id","name","inputRef","isInvalid","fullWidth","isLoading","hasNoInitialSelection","defaultValue","compressed","value","prepend","append","onMouseUp"]),T=l()("euiSelect",{"euiSelect--fullWidth":y,"euiSelect--compressed":I,"euiSelect--inGroup":x||P,"euiSelect-isLoading":g},r);E&&(t=a.a.createElement("option",{value:"",disabled:!0,hidden:!0,style:{display:"none"}}," ")),null==S&&(n=j||"");return a.a.createElement(o.a,{icon:{type:"arrowDown",side:"right"},fullWidth:y,isLoading:g,compressed:I,prepend:x,append:P,inputId:m},a.a.createElement(c.a,{isInvalid:b},a.a.createElement("select",u({id:m,name:f,className:T,ref:v,defaultValue:n,value:S,onMouseUp:function(e){e.nativeEvent.stopImmediatePropagation(),A&&A(e)}},C),t,p.map((function(e,t){var n=e.text,r=s(e,["text"]);return a.a.createElement("option",u({},r,{key:t}),n)})))))}},sZej:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("qBvR"),l=n("0j75"),o=n("pbrG"),c=n("R9SF"),u=n("JumW"),s=n("3vKy"),p=n("+dxP"),m=n("MrTG"),f=n("8V7x"),v=n("xuGK"),b=n("XcHi"),d=n("a5Ba"),y=n("RCxc"),h=n("IAJ3"),g=n.n(h),O=n("99+X"),E=[{text:"Inventory"}],j=a.a.createElement(i.a,null,a.a.createElement(l.a,{href:"#",iconType:"gear",color:"primary"},"Settings"),a.a.createElement(l.a,{href:"#",iconType:"inspect",color:"primary"},"Anomaly detection"),a.a.createElement(l.a,{href:"#",iconType:"arrowDown",color:"primary"},"Alerts"));t.default=function(){return a.a.createElement(O.a,{pageTitle:"Inventory",navItem:"Inventory",headerLinks:j,breadcrumbs:E},a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement(u.a,{size:"l"},a.a.createElement("h1",null,"Inventory"))),a.a.createElement(c.a,null,a.a.createElement(y.a,null))),a.a.createElement(s.a,null,a.a.createElement(p.a,null,a.a.createElement(m.a,{gutterSize:"s"},a.a.createElement(f.a,{grow:4},a.a.createElement(v.a,{fullWidth:!0,placeholder:"Search monitor IDs, names, and protocol types..."})),a.a.createElement(f.a,null,a.a.createElement(b.a,{prepend:"Show",options:[{value:"option_one",text:"Hosts"}]})),a.a.createElement(f.a,null,a.a.createElement(b.a,{prepend:"Metric",options:[{value:"option_one",text:"CPU usage"}]})),a.a.createElement(f.a,null,a.a.createElement(b.a,{prepend:"Group by",options:[{value:"option_one",text:"All"}]})),a.a.createElement(f.a,null,a.a.createElement(b.a,{prepend:"Sort by",options:[{value:"option_one",text:"Name"}]}))),a.a.createElement(d.a,{size:"s"}),a.a.createElement(m.a,{style:{justifyContent:"flex-end",alignItems:"center"}},a.a.createElement(f.a,{style:{maxWidth:"280px"}},a.a.createElement("p",{style:{color:"#98A2B3"}},"Last 1 minute of data for the selected time")),a.a.createElement(f.a,{style:{maxWidth:"60px"}})),a.a.createElement("img",{className:"pageScreenshot pageScreenshot--fullWidth",alt:"Inventory view",src:g.a}))))}}}]);
//# sourceMappingURL=component---src-pages-observability-inventory-tsx-c8c93a999cda0519ed58.js.map