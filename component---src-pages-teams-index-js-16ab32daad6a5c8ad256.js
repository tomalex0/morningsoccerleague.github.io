(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3Rlc":function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l),s=r.a.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}));a.a=function MslTotalStatsItem(e){var a=e.title,t=e.value,l=e.children,m=void 0===l?s:l;return r.a.createElement("div",{className:"flex py-2 px-2 bg-white  dark:bg-gray-800  rounded-xl shadow-md items-center "},r.a.createElement("div",null,m),r.a.createElement("div",{className:"ml-2 md:ml-4"},r.a.createElement("p",{className:"text-base font-medium text-gray-900 dark:text-gray-300"},a),r.a.createElement("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400"},t)))}},IOx6:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l),s=t("3Rlc");a.a=function MslTeamStatsItem(e){var a=e.stats,t=e.cssName,l=void 0===t?"mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4":t,m=a;return r.a.createElement("div",{className:""+l},r.a.createElement(s.a,{title:"Games",value:m.matches}),r.a.createElement(s.a,{title:"Goals",value:m.goals}),r.a.createElement(s.a,{title:"Players",value:m.players}),r.a.createElement(s.a,{title:"Mos",value:m.mos}),r.a.createElement(s.a,{title:"Mom",value:m.mom}),r.a.createElement(s.a,{title:"Yellow Cards",value:m.yellow_cards}),r.a.createElement(s.a,{title:"Red Cards",value:m.red_cards}))}},ItPX:function(e,a,t){e.exports=t.p+"static/msl-logo-14-ba14c1ab9b28b49c858358133dd0c27b.svg"},j7LP:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),s=t("Wbzz"),m=t("Bl7J"),n=t("vrFN"),c=(t("ItPX"),t("IOx6")),d=function MslTeamListItem(e){var a=e.team;return r.a.createElement(s.Link,{to:a.teamPath},r.a.createElement("div",{className:"px-3 bg-gray-200  dark:bg-gray-800  rounded-xl shadow-md space-y-2 py-3 flex items-center space-y-0 rounded-b-none"},r.a.createElement("img",{className:"block  h-14 rounded-full mx-0 flex-shrink-0",src:a.image.publicURL,alt:a.teamName}),r.a.createElement("div",{className:"text-center ml-2 space-y-2 text-left"},r.a.createElement("div",{className:"space-y-0.5"},r.a.createElement("div",{className:"text-sm md:text-md text-black dark:text-white font-semibold"},a.teamName," →")))),r.a.createElement("div",{className:" px-4 pb-4 bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl rounded-t-none"},r.a.createElement(c.a,{stats:a.teamStats.allseasonStats,cssName:"mt-4 grid grid-cols-2 md:grid-cols-2 gap-4"})))};t("o5e5"),a.default=function TeamsIndex(e){var a=e.data,t=e.path,l=a.teams;return r.a.createElement(m.a,null,r.a.createElement(n.a,{title:"Teams",path:t}),r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 px-5"},l.nodes.map((function(e){return r.a.createElement(d,{team:e,key:e.team_id})}))))}},o5e5:function(e,a){}}]);
//# sourceMappingURL=component---src-pages-teams-index-js-16ab32daad6a5c8ad256.js.map