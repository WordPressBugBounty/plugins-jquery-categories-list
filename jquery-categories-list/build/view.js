!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.domReady,o=e.n(n);const r={title:"",symbol:"0",effect:"none",layout:"right",expand:"",orderby:"name",orderdir:"ASC",showcount:!1,show_empty:!1,include_or_exclude:"include",expandCategories:[]},a=(0,t.createContext)(r),l=e=>{let{attributes:n,children:o}=e;const l={...r,...n},[i,s]=(0,t.useState)(l),c=e=>{const t={...r,...e};"undefined"!=typeof jclCurrentCat&&(t.expandCategories=jclCurrentCat.split(",").map(Number)),s(t)};return(0,t.useEffect)((()=>{c(n)}),[n]),(0,t.createElement)(a.Provider,{value:{config:i,setConfig:c}},o)};var i=window.wp.i18n,s=window.wp.apiFetch,c=e.n(s);function y(e){const[n,o]=(0,t.useState)(null),[r,a]=(0,t.useState)(null),[l,i]=(0,t.useState)(!1);return{apiClient:async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(!0);const r=new URLSearchParams({orderby:t.orderby,orderdir:t.orderdir,parent:n,showEmpty:t.show_empty,taxonomy:"category",type:"post"});return"undefined"!=typeof jclCurrentCat&&t.onlycategory>0&&r.append("currentCat",jclCurrentCat),t.categories&&(r.append("exclusionType",t.include_or_exclude),r.append("cats",t.categories)),c()({path:`${e}?${r.toString()}`}).then((e=>{o(e),i(!1)})).catch((e=>{i(!1),a(e)}))},data:n,error:r,loading:l,setLoading:i}}function d(e,t){return"all"===e.expand||"sel_cat"===e.expand&&e.expandCategories.includes(t)}var u=e=>{let{expanded:n,title:o,permalink:r,onToggle:l}=e;const{config:i}=(0,t.useContext)(a),{expandSymbol:s,collapseSymbol:c}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left",n="",o="";switch(e.toString()){case"1":n="▼",o="left"===t?"►":"◄";break;case"2":n="(–)",o="(+)";break;case"3":n="[–]",o="[+]"}return{collapseSymbol:n,expandSymbol:o}}(i.symbol,i.layout);if("0"===i.symbol.toString())return null;const y="jcl_symbol "+(n?"expanded":""),d=n?c:s;return"0"===i.symbol.toString()?"":(0,t.createElement)("a",{href:r,title:o,className:y,onClick:l},d)},p=e=>{let{category:n}=e;const{config:o}=(0,t.useContext)(a);let r=n.name;return o.showcount&&(r+=` (${n.count})`),(0,t.createElement)("a",{href:n.url,title:n.name},r)},m=e=>{let{loading:n}=e;return n?(0,t.createElement)("div",{className:"loading",role:"progressbar"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 100 100",xmlSpace:"preserve"},(0,t.createElement)("path",{fill:"#000",d:"M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"},(0,t.createElement)("animateTransform",{attributeName:"transform",attributeType:"XML",dur:"1s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})))):""};const g=e=>{let{category:n,animationFunction:o}=e;const{loading:r,data:l,apiClient:i}=y("/jcl/v1/categories"),{config:s}=(0,t.useContext)(a),[c,f]=(0,t.useState)(d(s,n.id)),w=(0,t.useMemo)((()=>"left"===s.layout),[s]),h=parseInt(n.child_num,10)>0,v=(0,t.useRef)(null),b=async e=>{e.preventDefault(),l&&Array.isArray(l.categories)||await i(s,n.id),f(!c)},E=()=>h?(0,t.createElement)(u,{expanded:c,permalink:n.url,title:n.name,onToggle:b}):(0,t.createElement)("div",{className:"jcl_symbol no_child"});(0,t.useEffect)((()=>{!c||l&&Array.isArray(l.categories)||i(s,n.id),(()=>{const e=[...v.current.children].filter((e=>"ul"===e.nodeName.toLowerCase()));e.length>0&&o(e[0])})()}),[c]);const x=d(s,n.id)?"":"jcl-hide";return(0,t.createElement)("li",{ref:v},w?(0,t.createElement)(E,null):"",(0,t.createElement)(p,{category:n}),w?"":(0,t.createElement)(E,null),(0,t.createElement)(m,{loading:r}),h&&l&&l.categories.length>0?(0,t.createElement)("ul",{className:x},l.categories.map((e=>(0,t.createElement)(g,{key:e.id,category:e,animationFunction:o})))):"")};var f=g;var w=()=>{const{config:e}=(0,t.useContext)(a),[n,o]=(0,t.useState)(!1),{loading:r,data:l,error:s,apiClient:c}=y("/jcl/v1/categories"),d=function(e){const n="function"==typeof window.requestAnimationFrame,o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o,e.style.opacity=0;let r=+new Date;const a=function(){e.style.opacity=+e.style.opacity+(new Date-r)/t,r=+new Date,+e.style.opacity<1&&(n?window.requestAnimationFrame(a):setTimeout(a,16))};a()}(e,t):function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.display="",e.style.opacity=1;let o=+new Date;const r=function(){e.style.opacity=Number(+e.style.opacity-(new Date-o)/t).toFixed(4),o=+new Date,-e.style.opacity<=0?n?window.requestAnimationFrame(r):setTimeout(r,16):e.style.display="none"};r()}(e,t)},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.removeProperty("display");let n=window.getComputedStyle(e).display;"none"===n&&(n="block"),e.style.display=n;const o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}(e,t):function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}(e,t)},a=e=>{"none"===window.getComputedStyle(e).display?e.style.removeProperty("display"):e.style.display="none"},[l,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{i((()=>{let t;switch(e){case"fade":t=o;break;case"slide":t=r;break;default:t=a}return t}))}),[e]),l}(e.effect);return(0,t.useEffect)((()=>{c(e)}),[]),(0,t.useEffect)((()=>{n||!s&&!n||o(!0)}),[n,s]),(0,t.createElement)("div",{className:`js-categories-list layout-${e.layout}`},(0,t.createElement)("h2",null,e.title),r?(0,t.createElement)("div",null,(0,t.createElement)(m,{loading:r}),(0,i.__)("Loading…","jcl_i18n")):"",!r&&l&&l.categories?(0,t.createElement)("ul",{className:"jcl_widget"},0===l.categories.length?(0,t.createElement)("li",null,(0,i.__)("There are no categories to show.","jcl_i18n")):l.categories.map((e=>(0,t.createElement)(f,{key:e.id,category:e,animationFunction:d})))):"",!n&&!s||l?"":(0,i.__)("Cannot load categories.","jcl_i18n"))},h=e=>{let{attributes:n}=e;return(0,t.createElement)(l,{attributes:n},(0,t.createElement)(w,null))};o()((function(){document.querySelectorAll(".wp-block-jquery-categories-list-categories-block").forEach((e=>{const n={...e.dataset};(0,t.render)((0,t.createElement)(h,{attributes:n}),e)}))}))}();