(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0j75":function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));t("sc67"),t("R48M"),t("+ar0"),t("xtjI"),t("JHok"),t("OeI1"),t("4DPX"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi");var n=t("q1tI"),o=t.n(n),i=t("TSYQ"),a=t.n(i),c=t("zCr/");function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=function(e){var r=e.isActive,t=e.className,n=f(e,["isActive","className"]),i=a()("euiHeaderLink",{"euiHeaderLink-isActive":r},t),u=l(l({color:r?"primary":"text"},n),{},{className:i});return o.a.createElement(c.a,u)}},pbrG:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("sc67"),t("4DPX"),t("E5k/");var n=t("q1tI"),o=t.n(n),i=t("TSYQ"),a=t.n(i);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=function(e){var r=e.children,t=e.className,n=e.responsive,i=void 0===n||n,l=u(e,["children","className","responsive"]),s=a()("euiPageHeader",{"euiPageHeader--responsive":i},t);return o.a.createElement("div",c({className:s},l),r)}},qBvR:function(e,r,t){"use strict";t.d(r,"a",(function(){return E}));t("sc67"),t("R48M"),t("+ar0"),t("xtjI"),t("JHok"),t("OeI1"),t("Dq+y"),t("Ggvi"),t("MIFh"),t("rzGZ"),t("m210"),t("4DPX"),t("YbXK"),t("cFtU"),t("pJf4"),t("q8oJ"),t("C9fy"),t("8npG"),t("E5k/");var n=t("q1tI"),o=t.n(n),i=t("TSYQ"),a=t.n(i),c=t("q1Cv"),u=t("0ZAC"),l=t("saQl"),s=t("wZnm"),f=t("ccCF"),p=(t("gu/5"),t("eoYm"),t("Z6v3")),b=t("bc1k");function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var O=function(e){var r=e.children,t=e.sizes,i=y(Object(n.useState)(Object(p.a)("undefined"==typeof window?-1/0:window.innerWidth)),2),a=i[0],c=i[1],u=Object(b.c)((function(){var e=Object(p.a)(window.innerWidth);e!==a&&c(e)}),50);return Object(n.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[u]),"all"===t||t.includes(a)?null:o.a.createElement(o.a.Fragment,null,r)},d=t("xOiw");function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function P(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var S={xs:"--gutterXS",s:"--gutterS",m:"--gutterM",l:"--gutterL"},E=(Object(c.a)(S),function(e){var r=e.children,t=e.className,i=e.gutterSize,c=void 0===i?"s":i,p=e.popoverBreakpoints,b=void 0===p?["xs","s"]:p,y=e.popoverButtonProps,v=e.popoverProps,j=P(e,["children","className","gutterSize","popoverBreakpoints","popoverButtonProps","popoverProps"]),E=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},y),k=E.onClick,A=E.iconType,I=void 0===A?"apps":A,L=P(E,["onClick","iconType"]),z=g(Object(n.useState)(!1),2),x=z[0],D=z[1],H=function(e){k&&k(e),D(!x)},N=function(){D(!1)};Object(n.useEffect)((function(){return window.addEventListener("resize",N),function(){window.removeEventListener("resize",N)}}));var C=a()("euiHeaderLinks",t),G=o.a.createElement(s.a,{token:"euiHeaderLinks.openNavigationMenu",default:"Open menu"},(function(e){return o.a.createElement(f.a,m({"aria-label":e,onClick:H},L),o.a.createElement(u.a,{type:I,size:"m"}))}));return o.a.createElement(s.a,{token:"euiHeaderLinks.appNavigation",default:"App menu"},(function(e){return o.a.createElement("nav",m({className:C,"aria-label":e},j),o.a.createElement(O,{sizes:b},o.a.createElement("div",{className:a()("euiHeaderLinks__list",["euiHeaderLinks__list".concat(S[c])])},r)),o.a.createElement(d.a,{sizes:b},o.a.createElement(l.a,m({button:G,isOpen:x,anchorPosition:"downRight",closePopover:N,panelPaddingSize:"none"},v),o.a.createElement("div",{className:a()("euiHeaderLinks__mobileList",["euiHeaderLinks__mobileList".concat(S[c])])},r))))}))})}}]);
//# sourceMappingURL=088b050b2659d25f3aedbf28acb4358e6050667b-555038f9e6bbf2e08107.js.map