(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{BCQ6:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),l=n.n(i),c=n("KVUY"),u=n("q4D5"),o=n("YRHT");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){var t=e.children,n=e.className,r=e.icon,i=e.isDisabled,d=void 0!==i&&i,p=e.isLoading,f=void 0!==p&&p,g=e.isSelected,y=void 0!==g&&g,v=e.quantity,b=e.buttonRef,O=m(e,["children","className","icon","isDisabled","isLoading","isSelected","quantity","buttonRef"]);d=!!f||d;var E,h,j=l()("euiFacetButton",{"euiFacetButton--isSelected":y,"euiFacetButton--unSelected":!y},n);return f?E=a.a.createElement(u.a,{className:"euiFacetButton__spinner",size:"m"}):"number"==typeof v&&(E=a.a.createElement(c.a,{className:"euiFacetButton__quantity",size:"m",color:!y||d?"subdued":"accent"},v)),a.a.isValidElement(r)&&(h=a.a.cloneElement(r,{className:l()(r.props.className,"euiFacetButton__icon")})),a.a.createElement(o.a,null,(function(e,n){return a.a.createElement("button",s({className:j,disabled:d,type:"button",ref:b,title:O["aria-label"]||n},O),a.a.createElement("span",{className:"euiFacetButton__content"},h,a.a.createElement("span",{className:"euiFacetButton__text","data-text":n,ref:e},t),E))}))}},CXKg:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("q1tI"),a=n.n(r),i=n("ILuU"),l=n("Wbzz"),c=n("JumW"),u=n("0ZAC"),o=n("a5Ba"),s=n("DoWT");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.currentItem,n=void 0===t?"management/stack":t,i=f(Object(r.useState)(!1),2),m=i[0],p=i[1],g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d(d({},t),{},{id:e,name:e,isSelected:e===n,disabled:!t.url,onClick:t.url?function(){Object(l.navigate)(t.url)}:function(){return null}})},y=[g("Overview",{url:"management/stack"}),g("Console",{items:[g("Index Patterns"),g("Saved Objects"),g("Spaces"),g("Reporting"),g("Advanced settings",{items:[g("General"),g("Visualizations")]})]}),g("Security",{items:[g("Users"),g("Roles"),g("API Keys"),g("Role Mappings")]}),g("Fleet",{items:[g("Agents",{url:"management/agents"}),g("Integrations",{url:"management/ingest"})]}),g("Elasticsearch",{items:[g("Index Management"),g("Index Lifecycle Policies"),g("Rolllup Jobs"),g("Transforms"),g("Watcher"),g("Snapshot and Restore"),g("8.0 Upgrade Assistant")]})];return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{size:"xs"},a.a.createElement("h2",null,a.a.createElement(u.a,{size:"l",type:"managementApp"}),"   Management")),a.a.createElement(o.a,null),a.a.createElement(s.a,{mobileTitle:"Navigate within $APP_NAME",toggleOpenOnMobile:function(){p(!m)},isOpenOnMobile:m,items:y}))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=function(e){var t=e.breadcrumbs,n=e.sideNavItem,r=e.children,c=b(e,["breadcrumbs","sideNavItem","children"]),u=[{text:"Management",onClick:(null==t?void 0:t.length)?function(){return Object(l.navigate)("management/stack")}:void 0}],o=u;return(null==t?void 0:t.length)&&(o=u.concat(t)),a.a.createElement(i.a,v({breadcrumbs:o,solutionNav:a.a.createElement(y,{currentItem:n})},c),r)}},Ou0h:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),l=n.n(i),c=n("q1Cv"),u=n("0ZAC"),o=n("yk6V");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={primary:"euiCallOut--primary",success:"euiCallOut--success",warning:"euiCallOut--warning",danger:"euiCallOut--danger"},p=(Object(c.a)(d),{s:"euiCallOut--small",m:""}),f=function(e){var t,n,r=e.title,i=e.color,c=void 0===i?"primary":i,f=e.size,g=void 0===f?"m":f,y=e.iconType,v=e.children,b=e.className,O=e.heading,E=m(e,["title","color","size","iconType","children","className","heading"]),h=l()("euiCallOut",d[c],p[g],b);y&&(t=a.a.createElement(u.a,{className:"euiCallOutHeader__icon",type:y,size:"m","aria-hidden":"true"})),v&&"s"===g?n=a.a.createElement(o.a,{size:"xs"},v):v&&(n=a.a.createElement(o.a,{size:"s"},v));var j,S=O?"".concat(O):"span";return r&&(j=a.a.createElement("div",{className:"euiCallOutHeader"},t,a.a.createElement(S,{className:"euiCallOutHeader__title"},r))),a.a.createElement("div",s({className:h},E),j,n)}},X8vQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),l=n.n(i),c=n("q1Cv"),u=n("MrTG");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={vertical:"euiFacetGroup--vertical",horizontal:"euiFacetGroup--horizontal"},d=(Object(c.a)(m),{none:"euiFacetGroup--gutterNone",s:"euiFacetGroup--gutterSmall",m:"euiFacetGroup--gutterMedium",l:"euiFacetGroup--gutterLarge"}),p=(Object(c.a)(d),function(e){var t=e.children,n=e.className,r=e.layout,i=void 0===r?"vertical":r,c=e.gutterSize,p=void 0===c?"m":c,f=s(e,["children","className","layout","gutterSize"]),g=l()("euiFacetGroup",m[i],d[p],n),y="vertical"===i?"column":"row",v="vertical"!==i;return a.a.createElement(u.a,o({className:g,direction:y,wrap:v,gutterSize:"none"},f),t)})},"o+uz":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("AqHK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),l=n.n(i),c=n("q1Cv");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={row:null,column:"euiFlexGrid--directionColumn"},m=(Object(c.a)(s),{none:"euiFlexGrid--gutterNone",s:"euiFlexGrid--gutterSmall",m:"euiFlexGrid--gutterMedium",l:"euiFlexGrid--gutterLarge",xl:"euiFlexGrid--gutterXLarge"}),d=(Object(c.a)(m),{0:"euiFlexGrid--wrap",1:"euiFlexGrid--single",2:"euiFlexGrid--halves",3:"euiFlexGrid--thirds",4:"euiFlexGrid--fourths"}),p=(Object.keys(d).map((function(e){return parseInt(e,10)})),function(e){var t=e.children,n=e.className,r=e.gutterSize,i=void 0===r?"l":r,c=e.direction,p=void 0===c?"row":c,f=e.responsive,g=void 0===f||f,y=e.columns,v=void 0===y?0:y,b=e.component,O=void 0===b?"div":b,E=o(e,["children","className","gutterSize","direction","responsive","columns","component"]),h=l()("euiFlexGrid",i?m[i]:void 0,null!=v?d[v]:void 0,p?s[p]:void 0,{"euiFlexGrid--responsive":g},n);return a.a.createElement(O,u({className:h},E),t)})},r1Pz:function(e,t,n){e.exports=n.p+"static/Illustration_3-89238d0c2fbd989532de79d8f08d3175.svg"},xYSX:function(e,t,n){"use strict";n.r(t);for(var r=n("q1tI"),a=n.n(r),i=n("qBvR"),l=n("0j75"),c=n("FYvP"),u=n("8V7x"),o=n("cgm7"),s=n("0ZAC"),m=n("Ou0h"),d=n("pbrG"),p=n("R9SF"),f=n("yk6V"),g=n("+dxP"),y=n("3vKy"),v=n("xuGK"),b=n("a5Ba"),O=n("MrTG"),E=n("JumW"),h=n("X8vQ"),j=n("BCQ6"),S=n("JarC"),x=n("o+uz"),w=n("CXKg"),z=n("r1Pz"),G=n.n(z),P=[{text:"Integrations"}],q=a.a.createElement(i.a,null,a.a.createElement(l.a,null,"Send feedback"),a.a.createElement(c.a,{minWidth:0,size:"s"},"Settings")),I=[],F=0;F<20;F++)I.push(a.a.createElement(u.a,null,a.a.createElement(o.a,{icon:a.a.createElement(s.a,{type:"logoElastic",size:"xl"}),title:"Elastic",description:"Integration",betaBadgeLabel:"Experimental",footer:a.a.createElement(m.a,{color:"success",iconType:"checkInCircleFilled",size:"s",title:"Installed"})})));t.default=function(){return a.a.createElement(w.a,{pageTitle:"Integrations",sideNavItem:"Integrations",headerLinks:q,breadcrumbs:P},a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement(f.a,{color:"subdued"},a.a.createElement("h1",null,"Integrations"),a.a.createElement("p",null,"Browse integrations for popular apps and services."))),a.a.createElement(p.a,null,a.a.createElement("img",{className:"pageScreenshot pageScreenshot--responsive",style:{marginBottom:-32},alt:"","aria-hidden":!0,width:320,src:G.a}))),a.a.createElement(g.a,null,a.a.createElement(y.a,null,a.a.createElement(v.a,{fullWidth:!0,placeholder:"Search integrations..."}),a.a.createElement(b.a,{size:"xxl"}),a.a.createElement(O.a,{gutterSize:"xl"},a.a.createElement(u.a,{grow:!1},a.a.createElement("div",null,a.a.createElement(E.a,{size:"xs"},a.a.createElement("h2",null,"Installed")),a.a.createElement(b.a,{size:"s"}),a.a.createElement(h.a,null,a.a.createElement(j.a,{isSelected:!0,quantity:20},"All"),a.a.createElement(j.a,{quantity:0},"Updates available")),a.a.createElement(S.a,{margin:"xl"}),a.a.createElement(E.a,{size:"xs"},a.a.createElement("h2",null,"Available")),a.a.createElement(b.a,{size:"s"}),a.a.createElement(h.a,null,a.a.createElement(j.a,{quantity:35},"All"),a.a.createElement(j.a,{quantity:1},"Azure"),a.a.createElement(j.a,{quantity:2},"Cloud"),a.a.createElement(j.a,{quantity:1},"Config management"),a.a.createElement(j.a,{quantity:1},"Containers"),a.a.createElement(j.a,{quantity:1},"Custom"),a.a.createElement(j.a,{quantity:6},"Datastore"),a.a.createElement(j.a,{quantity:1},"Kubernetes"),a.a.createElement(j.a,{quantity:3},"Message Queue"),a.a.createElement(j.a,{quantity:2},"Monitoring"),a.a.createElement(j.a,{quantity:6},"Network 1"),a.a.createElement(j.a,{quantity:4},"OS & System"),a.a.createElement(j.a,{quantity:33},"Security"),a.a.createElement(j.a,{quantity:5},"Web")))),a.a.createElement(u.a,null,a.a.createElement(x.a,{columns:3,gutterSize:"xl"},I))))))}}}]);
//# sourceMappingURL=component---src-pages-management-ingest-tsx-82b30283ec63e17608e2.js.map