(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+0xn":function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),l=a.n(n),o=a("K8M1");t.a=function MslPlayerItem(e){var t=e.player,a=e.fontSize,n=void 0===a?"text-sm":a,i=e.imageWidth,s=void 0===i?"w-10":i,c=e.imageHeight,d=void 0===c?"h-10":c,u=e.playerNameCss,m=void 0===u?"font-medium text-dark-600 dark:text-dark-900":u,p=e.showImage,v=void 0!==p&&p,f=Object(o.getInitials)(null==t?void 0:t.name);return l.a.createElement("div",{className:"flex items-center"},v&&l.a.createElement("div",{className:"flex-shrink-0 mr-2 "+s+" "+d},l.a.createElement("div",{className:s+" "+d+" rounded-full flex items-center justify-center bg-light-800 dark:bg-dark-300 text-dark_alt dark:text-dark-900 uppercase"},f)),l.a.createElement("div",null,l.a.createElement("div",{className:n+" "+m},t&&l.a.createElement(r.Link,{to:null==t?void 0:t.playerPath},null==t?void 0:t.name," →"))))}},"/kGe":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=n.a.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-light-800 dark:text-dark-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}));t.a=function MslTotalStatsItem(e){var t=e.title,a=e.value,r=e.children,o=void 0===r?l:r;return n.a.createElement("div",{className:"flex py-2 px-2 bg-dark_alt  dark:bg-dark-800  rounded-xl shadow-md items-center "},n.a.createElement("div",null,o),n.a.createElement("div",{className:"ml-2 md:ml-4"},n.a.createElement("p",{className:"text-base font-medium text-dark-900 dark:text-dark-300"},t),n.a.createElement("p",{className:"mt-1 text-sm text-dark-500 dark:text-dark-400"},a)))}},"4HAI":function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("q1tI"),l=a.n(n),o=a("Bl7J"),i=a("vrFN"),s=a("sgZR"),c=a("+0xn"),d=a("K8M1");a("o5e5");t.default=function PlayersIndex(e){var t=e.data,a=e.path,u=t.players.nodes.map((function(e){var t;return Object.assign({},e,null==e||null===(t=e.playerStats)||void 0===t?void 0:t.allseasonStats)})),m=Object(n.useState)(u),p=m[0],v=m[1],f=Object(n.useState)(""),g=f[0],h=f[1],k=Object(n.useState)("name"),x=k[0],E=k[1],y=Object(n.useState)(0),b=y[0],w=y[1];return Object(n.useEffect)((function(){!function searchFilter(e,t,a){var n=Object(r.a)(u).filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));n=n.slice().sort(Object(d.predicate)({name:""+t,reverse:Boolean(parseInt(a))})),v(n)}(g,x,b)}),[g,x,b]),l.a.createElement(o.a,null,l.a.createElement(i.a,{title:"Players",path:a}),l.a.createElement("div",{className:"mt-5 px-5 divide-y divide-dark-300"},l.a.createElement("div",{className:"mb-3 text-center"},l.a.createElement("form",{className:"flex w-full max-w-lg mx-auto space-l-0 space-x-2 relative"},l.a.createElement("div",{className:"flex-1 "},l.a.createElement("svg",{width:"20",height:"20",fill:"currentColor",className:"absolute left-2 top-1/2 transform -translate-y-1/2 text-dark-400"},l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"})),l.a.createElement("input",{type:"text",className:"appearance-none focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800  focus:outline-none w-full text-sm text-black placeholder-dark-500 border border-dark-200 rounded-md py-2 pl-8 shadow-md bg-dark_alt","aria-label":"Search",placeholder:"Type to filter players...",onChange:function onChange(e){return h(e.target.value)}})),l.a.createElement("select",{id:"sortby",name:"sortby","aria-label":"Sort By",autoComplete:"sortby",onChange:function onChange(e){return E(e.target.value)},className:"flex-shrink-0 py-2 px-2 rounded-md shadow-md w-24 focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800 focus:outline-none text-sm text-black placeholder-dark-500 border border-dark-200 bg-dark_alt"},l.a.createElement("option",{value:"name"},"Sort By"),l.a.createElement("option",{value:"name"},"Name"),l.a.createElement("option",{value:"goals"},"Goals"),l.a.createElement("option",{value:"assists"},"Assists"),l.a.createElement("option",{value:"mos"},"Mos"),l.a.createElement("option",{value:"yellow_cards"},"Yellow Cards"),l.a.createElement("option",{value:"red_cards"},"Red Cards"),l.a.createElement("option",{value:"mom"},"Mom"),l.a.createElement("option",{value:"saves"},"Saves"),l.a.createElement("option",{value:"referees"},"Referee")),l.a.createElement("select",{id:"orderby",name:"orderby","aria-label":"Order By",autoComplete:"orderby",onChange:function onChange(e){return w(e.target.value)},className:"flex-shrink-0 py-2 px-2 rounded-md shadow-md w-18 focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800 focus:outline-none text-sm text-black placeholder-dark-500 border border-dark-200 bg-dark_alt"},l.a.createElement("option",{value:"0"},"ASC"),l.a.createElement("option",{value:"1"},"DESC"))),l.a.createElement("div",{className:"mt-2 text-dark-600 dark:text-dark-300 text-left"},p.length," Results")),l.a.createElement("div",null,p.length>0&&p.map((function(e){var t;return l.a.createElement("div",{className:"mb-7 pt-5",key:e.player_id},l.a.createElement(c.a,{player:e,fontSize:"text-md md:text-lg",playerNameCss:"font-medium text-dark-600 dark:text-dark-300",imageWidth:"w-14",imageHeight:"h-14",showImage:!0}),l.a.createElement("div",null,l.a.createElement(s.a,{stats:null==e||null===(t=e.playerStats)||void 0===t?void 0:t.allseasonStats})))}))),l.a.createElement("div",null,p.length<=0&&l.a.createElement("div",{className:"text-center p-4 text-dark_alt text-xl"},"Player Not Found"))))}},K8M1:function(e,t,a){a("E9XD"),t.predicate=function predicate(){for(var e,t,a,r=[],n=arguments.length,l=function default_cmp(e,t){return e===t?0:e<t?-1:1},o=function getCmpFunc(e,t){var a=l,r=l;return e&&(r=function cmp(t,r){return a(e(t),e(r))}),t?function(e,t){return-1*r(e,t)}:r},i=0;i<n;i++)"string"==typeof(e=arguments[i])?(t=e,a=l):(t=e.name,a=o(e.primer,e.reverse)),r.push({name:t,cmp:a});return function(t,a){for(var l,o,i=0;i<n&&(o=0,l=(e=r[i]).name,0===(o=e.cmp(t[l],a[l])));i++);return o}},t.propComparator=function propComparator(e){return function(t,a){for(var r=0,n=0;r<e.length&&0===n;)n=e[r].direction*(t[e[r].name].toString()<a[e[r].name].toString()?-1:t[e[r].name].toString()>a[e[r].name].toString()?1:0),r++;return n}},t.getTotalChildArr=function getTotalChildArr(e,t){var a=0;return e.map((function(e){a+=e[t].length})),a};function preapareDateString(e){return e.replace(/-/g,"/")}t.groupBy=function groupBy(e,t){return e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{})},t.getSum=function getSum(e,t){return e.reduce((function(e,a){return e+a[t]}),0)},t.getDefaultScore=function getDefaultScore(){return{played:0,won:0,lost:0,draw:0,goal_allowed:0,goal_scored:0}},t.jsonArrayColumnSum=function jsonArrayColumnSum(e,t){return e.reduce((function(e,t){return Object.keys(t).reduce((function(e,a){return"id"===a||(e[a]=(e[a]||0)+ +t[a]),e}),e)}),{})},t.getInitials=function getInitials(e,t){var a,r,n;return void 0===t&&(t=2),null==e||null===(a=e.split(" "))||void 0===a||null===(r=a.map((function(e){return e[0]})))||void 0===r||null===(n=r.slice(0,t))||void 0===n?void 0:n.join("")},t.preapareDateString=preapareDateString,t.formatDateString=function formatDateString(e,t){void 0===t&&(t="en");var a=preapareDateString(e);return new Date(a).toLocaleDateString(t,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},o5e5:function(e,t){},sgZR:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("/kGe");t.a=function MslPlayerStatsItem(e){var t=e.stats;return n.a.createElement("div",{className:"mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4"},n.a.createElement(l.a,{title:"Goals",value:t.goals}),n.a.createElement(l.a,{title:"Mom",value:t.mom}),n.a.createElement(l.a,{title:"Mos",value:t.mos}),n.a.createElement(l.a,{title:"Assists",value:t.assists}),n.a.createElement(l.a,{title:"Saves",value:t.saves}),n.a.createElement(l.a,{title:"Referee",value:t.referees}),n.a.createElement(l.a,{title:"Yellow Cards",value:t.yellow_cards}),n.a.createElement(l.a,{title:"Red Cards",value:t.red_cards}))}}}]);
//# sourceMappingURL=component---src-pages-players-index-js-8838a2c6d6c7d8a4dd82.js.map