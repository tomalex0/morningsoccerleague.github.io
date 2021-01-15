(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"3Rlc":function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l),n=r.a.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-light-800 dark:text-light-50",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}));a.a=function MslTotalStatsItem(e){var a=e.title,t=e.value,l=e.children,s=void 0===l?n:l;return r.a.createElement("div",{className:"flex py-2 px-2 bg-dark_alt  dark:bg-dark-800  rounded-xl shadow-md items-center "},r.a.createElement("div",null,s),r.a.createElement("div",{className:"ml-2 md:ml-4"},r.a.createElement("p",{className:"text-base font-medium text-dark-900 dark:text-dark-300"},a),r.a.createElement("p",{className:"mt-1 text-sm text-dark-500 dark:text-dark-400"},t)))}},"89fK":function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l);t("8hoZ"),t("s15Y");a.a=function MslTable(e){return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},r.a.createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},r.a.createElement("div",{className:"shadow overflow-hidden border-b border-gray-200 dark:border-gray-400 rounded-lg"},r.a.createElement("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-400"},r.a.createElement("thead",{className:"bg-light-800 dark:bg-dark-800"},e.children[0]),r.a.createElement("tbody",{className:"bg-dark_alt dark:bg-dark-300 divide-y divide-dark-200 dark:divide-dark-400"},e.children[1]))))))}},"8hoZ":function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l);a.a=function MslTableHeaderCell(e){var a=e.children,t=e.cssName;return r.a.createElement("th",{scope:"col",className:"px-2 py-2 text-left text-xs font-medium text-light-50 dark:text-dark-200 uppercase tracking-wider "+t},a)}},IOx6:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l),n=t("3Rlc");a.a=function MslTeamStatsItem(e){var a=e.stats,t=e.cssName,l=void 0===t?"mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4":t,s=a;return r.a.createElement("div",{className:""+l},r.a.createElement(n.a,{title:"Games",value:s.matches}),r.a.createElement(n.a,{title:"Goals",value:s.goals}),r.a.createElement(n.a,{title:"Players",value:s.players}),r.a.createElement(n.a,{title:"Mos",value:s.mos}),r.a.createElement(n.a,{title:"Mom",value:s.mom}),r.a.createElement(n.a,{title:"Yellow Cards",value:s.yellow_cards}),r.a.createElement(n.a,{title:"Red Cards",value:s.red_cards}))}},dFek:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),s=t("Bl7J"),m=t("vrFN"),c=t("s15Y"),d=t("8hoZ"),i=t("89fK"),o=function MslTeamSeasonStats(e){var a=e.seasons;return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement(d.a,null,"Season"),r.a.createElement(d.a,null,"#Games"),r.a.createElement(d.a,null,"#Goals"),r.a.createElement(d.a,null,"#Assists"),r.a.createElement(d.a,null,"#Mos"),r.a.createElement(d.a,null,"#Mom"),r.a.createElement(d.a,null,"#Players"),r.a.createElement(d.a,null," #Yellow Cards"),r.a.createElement(d.a,null," #Red Cards"))),r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement(c.a,null,r.a.createElement(n.Link,{to:e.season.seasonPath},e.season.season," - ",e.season.season_year)),r.a.createElement(c.a,null,e.matches),r.a.createElement(c.a,null,e.goals),r.a.createElement(c.a,null,e.assists),r.a.createElement(c.a,null,e.mos),r.a.createElement(c.a,null,e.mom),r.a.createElement(c.a,null,e.players),r.a.createElement(c.a,null,e.yellow_cards),r.a.createElement(c.a,null,e.red_cards))}))))},u=t("IOx6");t("o5e5");a.default=function Team(e){var a,t,l=e.path,n=e.data.team,c=null==n||null===(a=n.teamStats)||void 0===a?void 0:a.seasonStats,d=null==n||null===(t=n.teamStats)||void 0===t?void 0:t.allseasonStats;return r.a.createElement(s.a,null,r.a.createElement(m.a,{title:n.teamName,path:l}),r.a.createElement("div",{className:"lg:flex lg:items-center lg:justify-between px-5 mt-10"},r.a.createElement("div",{className:"flex-1 min-w-0"},r.a.createElement("h1",{className:"text-2xl flex items-center font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate"},r.a.createElement("img",{className:"block h-16 mr-2 rounded-full sm:mx-0 sm:flex-shrink-0",src:n.image.publicURL,alt:n.teamName}),n.teamName),r.a.createElement(u.a,{stats:d}))),r.a.createElement("div",{className:"mx-5 mt-5 pb-5 overflow-hidden"},r.a.createElement("div",{className:"py-5"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-300"},"Seasons")),r.a.createElement(o,{seasons:c})))}},o5e5:function(e,a){},s15Y:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),r=t.n(l);a.a=function MslTableDataCell(e){var a=e.children;return r.a.createElement("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-900 break-words"},a)}}}]);
//# sourceMappingURL=component---src-pages-teams-msl-teams-json-team-name-js-1f63ec48f2caede4a4cc.js.map