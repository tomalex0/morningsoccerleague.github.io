(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/kGe":function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),n=t.n(l),r=n.a.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-light-800 dark:text-dark-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}));a.a=function MslTotalStatsItem(e){var a=e.title,t=e.value,l=e.children,s=void 0===l?r:l;return n.a.createElement("div",{className:"flex py-2 px-2 bg-dark_alt  dark:bg-dark-800  rounded-xl shadow-md items-center "},n.a.createElement("div",null,s),n.a.createElement("div",{className:"ml-2 md:ml-4"},n.a.createElement("p",{className:"text-base font-medium text-dark-900 dark:text-dark-300"},a),n.a.createElement("p",{className:"mt-1 text-sm text-dark-500 dark:text-dark-400"},t)))}},A8IS:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),n=t.n(l);a.a=function MslTableDataCell(e){var a=e.children;return n.a.createElement("td",{className:"px-2 py-2 whitespace-nowrap text-sm text-dark-500 dark:text-dark-900 break-words"},a)}},G4kf:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),n=t.n(l);t("TrwS"),t("A8IS");a.a=function MslTable(e){return n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},n.a.createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},n.a.createElement("div",{className:"shadow overflow-hidden border-b border-dark-200 dark:border-dark-400 rounded-lg"},n.a.createElement("table",{className:"min-w-full divide-y divide-dark-200 dark:divide-dark-400"},n.a.createElement("thead",{className:"bg-light-800 dark:bg-dark-800"},e.children[0]),n.a.createElement("tbody",{className:"bg-dark_alt dark:bg-dark-300 divide-y divide-dark-200 dark:divide-dark-400"},e.children[1]))))))}},TrwS:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),n=t.n(l);a.a=function MslTableHeaderCell(e){var a=e.children,t=e.cssName;return n.a.createElement("th",{scope:"col",className:"px-2 py-2 text-left text-xs font-medium text-light-50 dark:text-dark-200 uppercase tracking-wider "+t},a)}},dFek:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("Bl7J"),m=t("vrFN"),c=t("A8IS"),d=t("TrwS"),i=t("G4kf"),o=function MslTeamSeasonStats(e){var a=e.seasons;return a.sort((function(e,a){var t,l;return(null==e||null===(t=e.season)||void 0===t?void 0:t.season_id)-(null==a||null===(l=a.season)||void 0===l?void 0:l.season_id)})),n.a.createElement(i.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement(d.a,null,"Season"),n.a.createElement(d.a,null,"#Played"),n.a.createElement(d.a,null,"#Won"),n.a.createElement(d.a,null,"#Drawn"),n.a.createElement(d.a,null,"#Lost"),n.a.createElement(d.a,null,"#For"),n.a.createElement(d.a,null,"#Against"),n.a.createElement(d.a,null,"#Players"),n.a.createElement(d.a,null,"#Mos"),n.a.createElement(d.a,null,"#Mom"),n.a.createElement(d.a,null,"#Assists"),n.a.createElement(d.a,null," #Yellow Cards"),n.a.createElement(d.a,null," #Red Cards"))),n.a.createElement(n.a.Fragment,null,a.map((function(e,a){return n.a.createElement("tr",null,n.a.createElement(c.a,null,n.a.createElement(r.Link,{to:e.season.seasonPath},e.season.season," - ",e.season.season_year)),n.a.createElement(c.a,null,e.matches),n.a.createElement(c.a,null,e.won),n.a.createElement(c.a,null,e.draw),n.a.createElement(c.a,null,e.lost),n.a.createElement(c.a,null,e.goals),n.a.createElement(c.a,null,e.goal_allowed),n.a.createElement(c.a,null,e.players),n.a.createElement(c.a,null,e.mos),n.a.createElement(c.a,null,e.mom),n.a.createElement(c.a,null,e.assists),n.a.createElement(c.a,null,e.yellow_cards),n.a.createElement(c.a,null,e.red_cards))}))))},u=t("lTgw"),E=t("0ei9");t("o5e5");a.default=function Team(e){var a,t,l=e.path,r=e.data.team,c=null==r||null===(a=r.teamStats)||void 0===a?void 0:a.seasonStats,d=null==r||null===(t=r.teamStats)||void 0===t?void 0:t.allseasonStats;return n.a.createElement(s.a,null,n.a.createElement(m.a,{title:r.teamName,path:l}),n.a.createElement("div",{className:"lg:flex lg:items-center lg:justify-between px-5 mt-10"},n.a.createElement("div",{className:"flex-1 min-w-0"},n.a.createElement("h1",{className:"text-2xl flex items-center font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate p-2"},n.a.createElement(E.a,{team:r,className:"block h-16 w-16 rounded-full sm:mx-0 sm:flex-shrink-0"}),n.a.createElement("span",{className:"pl-2"},r.teamName)),n.a.createElement(u.a,{stats:d}))),n.a.createElement("div",{className:"mx-5 mt-5 pb-5 overflow-hidden"},n.a.createElement("div",{className:"py-5"},n.a.createElement("h3",{className:"text-lg leading-6 font-medium text-dark-900 dark:text-dark-300"},"Seasons")),n.a.createElement(o,{seasons:c})))}},lTgw:function(e,a,t){"use strict";t("Wbzz");var l=t("q1tI"),n=t.n(l),r=t("/kGe");a.a=function MslTeamStatsItem(e){var a=e.stats,t=e.cssName,l=void 0===t?"mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4":t,s=a;return n.a.createElement("div",{className:""+l},n.a.createElement(r.a,{title:"Played",value:s.matches}),n.a.createElement(r.a,{title:"Won",value:s.won}),n.a.createElement(r.a,{title:"Drawn",value:s.draw}),n.a.createElement(r.a,{title:"Lost",value:s.lost}),n.a.createElement(r.a,{title:"For",value:s.goals}),n.a.createElement(r.a,{title:"Against",value:s.goal_allowed}),n.a.createElement(r.a,{title:"Players",value:s.players}),n.a.createElement(r.a,{title:"Mos",value:s.mos}),n.a.createElement(r.a,{title:"Mom",value:s.mom}),n.a.createElement(r.a,{title:"Assists",value:s.assists}),n.a.createElement(r.a,{title:"Yellow Cards",value:s.yellow_cards}),n.a.createElement(r.a,{title:"Red Cards",value:s.red_cards}))}}}]);
//# sourceMappingURL=component---src-pages-teams-msl-teams-json-team-name-js-9fd39eda0270cda0afbc.js.map