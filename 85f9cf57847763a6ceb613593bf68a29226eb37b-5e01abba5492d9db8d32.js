(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/b8u":function(e,t,n){var a=n("STAE");e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(e,t,n){var a=n("yoRg"),r=n("eDl+");e.exports=Object.keys||function keys(e){return a(e,r)}},"3Rlc":function(e,t,n){"use strict";n("Wbzz");var a=n("q1tI"),r=n.n(a),o=r.a.createElement("svg",{className:"flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}));t.a=function MslTotalStatsItem(e){var t=e.title,n=e.value,a=e.children,s=void 0===a?o:a;return r.a.createElement("div",{className:"flex py-2 px-2 bg-white  dark:bg-gray-800  rounded-xl shadow-md items-center "},r.a.createElement("div",null,s),r.a.createElement("div",{className:"ml-2 md:ml-4"},r.a.createElement("p",{className:"text-base font-medium text-gray-900 dark:text-gray-300"},t),r.a.createElement("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400"},n)))}},"6LWA":function(e,t,n){var a=n("xrYK");e.exports=Array.isArray||function isArray(e){return"Array"==a(e)}},"7Zd8":function(e,t,n){var a=n("K8M1"),r=a.groupBy,o=a.getSum,s=n("q5+t").getAllGameStatsByType,l=n("kus5").getTotalCautionType;function groupPlayers(e){return r(e.map((function(e){return e.player_id=e.player.player_id,e})),"player_id")}function sortPlayers(e){return e.sort((function(e,t){return t.count-e.count||e.name.localeCompare(t.name)}))}t.grouByPlayerStats=function grouByPlayerStats(e){var t=groupPlayers(e);return sortPlayers(Object.keys(t).map((function(e){return Object.assign({},t[e][0].player,{count:t[e].length,team:t[e][0].team,value:t[e]})})))},t.grouByPlayerStatsSum=function grouByPlayerStatsSum(e,t){var n=groupPlayers(e);return sortPlayers(Object.keys(n).map((function(e){return Object.assign({},n[e][0].player,{count:o(n[e],t),matches:n[e].length,team:n[e][0].team,value:n[e]})})))},t.getPlayerGoals=function getPlayerGoals(e,t){return s(e,"goals").filter((function(e){return!e.owngoal&&e.player==t}))},t.getPlayerAssists=function getPlayerAssists(e,t){return s(e,"goals").filter((function(e){return e.assist==t}))},t.getPlayerCautions=function getPlayerCautions(e,t,n){return l(e,n).filter((function(e){return e.player==t}))},t.getPlayerMom=function getPlayerMom(e,t){return s(e,"mom").filter((function(e){return e.player==t}))},t.getPlayerSaves=function getPlayerSaves(e,t){return s(e,"keeper").filter((function(e){return e.player==t}))}},A2ZE:function(e,t,n){var a=n("HAuM");e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},BIHw:function(e,t,n){"use strict";var a=n("I+eb"),r=n("or9q"),o=n("ewvW"),s=n("UMSQ"),l=n("ppGB"),u=n("ZfDv");a({target:"Array",proto:!0},{flat:function flat(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=s(t.length),a=u(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:l(e)),a}})},Bnag:function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fn3e:function(e,t,n){var a=n("K8M1").predicate;t.getSeasonTeams=function getSeasonTeams(e){return e.teams.map((function(t){return t.teamName=t.team.teamName,t.players.map((function(n){return n.isOwner=+!!t.owners.find((function(e){return e.player_id==n.player_id})),n.isMos=+!!e.mos.find((function(e){return e.player_id==n.player_id})),n})),t.players=t.players.sort(a({name:"isOwner",reverse:!0},{name:"isMos",reverse:!0},{name:"name",reverse:!1})),t})).sort(a({name:"teamName",reverse:!1}))}},"G+Rx":function(e,t,n){var a=n("0GbY");e.exports=a("document","documentElement")},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return a(e)}},K8M1:function(e,t,n){n("E9XD"),t.predicate=function predicate(){for(var e,t,n,a=[],r=arguments.length,o=function default_cmp(e,t){return e===t?0:e<t?-1:1},s=function getCmpFunc(e,t){var n=o,a=o;return e&&(a=function cmp(t,a){return n(e(t),e(a))}),t?function(e,t){return-1*a(e,t)}:a},l=0;l<r;l++)"string"==typeof(e=arguments[l])?(t=e,n=o):(t=e.name,n=s(e.primer,e.reverse)),a.push({name:t,cmp:n});return function(t,n){for(var o,s,l=0;l<r&&(s=0,o=(e=a[l]).name,0===(s=e.cmp(t[o],n[o])));l++);return s}},t.propComparator=function propComparator(e){return function(t,n){for(var a=0,r=0;a<e.length&&0===r;)r=e[a].direction*(t[e[a].name].toString()<n[e[a].name].toString()?-1:t[e[a].name].toString()>n[e[a].name].toString()?1:0),a++;return r}},t.getTotalChildArr=function getTotalChildArr(e,t){var n=0;return e.map((function(e){n+=e[t].length})),n};function preapareDateString(e){return e.replace(/-/g,"/")}t.groupBy=function groupBy(e,t){return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},t.getSum=function getSum(e,t){return e.reduce((function(e,n){return e+n[t]}),0)},t.getDefaultScore=function getDefaultScore(){return{played:0,won:0,lost:0,draw:0,goal_allowed:0,goal_scored:0}},t.jsonArrayColumnSum=function jsonArrayColumnSum(e,t){return e.reduce((function(e,t){return Object.keys(t).reduce((function(e,n){return"id"===n||(e[n]=(e[n]||0)+ +t[n]),e}),e)}),{})},t.getInitials=function getInitials(e,t){var n,a,r;return void 0===t&&(t=2),null==e||null===(n=e.split(" "))||void 0===n||null===(a=n.map((function(e){return e[0]})))||void 0===a||null===(r=a.slice(0,t))||void 0===r?void 0:r.join("")},t.preapareDateString=preapareDateString,t.formatDateString=function formatDateString(e,t){void 0===t&&(t="en");var n=preapareDateString(e);return new Date(n).toLocaleDateString(t,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},"N+g0":function(e,t,n){var a=n("g6v/"),r=n("m/L8"),o=n("glrk"),s=n("33Wh");e.exports=a?Object.defineProperties:function defineProperties(e,t){o(e);for(var n,a=s(t),l=a.length,u=0;l>u;)r.f(e,n=a[u++],t[n]);return e}},"N1G+":function(e,t,n){n("E9XD");var a=n("RIqP"),r=n("K8M1").getTotalChildArr,o=n("7Zd8"),s=o.grouByPlayerStats,l=o.grouByPlayerStatsSum,u=n("kus5").getTotalCautionType,i=n("q5+t").getAllGameStatsByType,c=n("PxPf").getTeamSeasonFoulStats,m=n("UUj4").getTeamSeasonStats,g=n("vyb4").Cautions;t.getSeasonStats=function getSeasonStats(e){return e.map((function(e){var t=i(e.schedules,"goals"),n=i(e.schedules,"mom"),o=r(e.teams,"players"),f=t.filter((function(e){return e.assist})),d=t.filter((function(e){return e.owngoal})),p=t.filter((function(e){return!e.owngoal})),y=i(e.schedules,"fouls"),v=i(e.schedules,"keeper"),S=s(n),h=l(v,"saves"),T=a(new Set(p.map((function(e){return e.player.player_id})))),w=u(e.schedules,g.YELLOW),A=m(e.schedules,e.teams),_=c(e.schedules),b=y.reduce((function(e,t){return e+t}),0),P=u(e.schedules,g.RED),E=s(w),x=s(P),M=s(p);return e.seasonStats={games:e.schedules.length,teams:e.teams.length,goals:t.length,assists:f.length,players:o,owngoals:d.length,yellow_cards:w.length,red_cards:P.length,unique_players_goals:T.length,unique_players_goals_list:T,fouls:b,scorers:M,moms:S,goalkeepers:h,yellow_card_holders:E,red_card_holders:x,team_standing_stats:A,team_foul_stats:_},e}))}},PxPf:function(e,t,n){n("BIHw"),n("QGkA");var a=n("K8M1"),r=a.groupBy,o=a.predicate,s=a.getSum;t.getTeamSeasonFoulStats=function getTeamSeasonFoulStats(e){var t=e.map((function(e){return e.gamestats})).flat().map((function(e){return e.team_id=e.team.team_id,e})),n=r(t,"team_id"),a=Object.values(n).map((function(e){var t={},n=e[0].team,a=s(e,"fouls"),r=e.length;return t.team=n,t.teamName=n.teamName,t.fouls=a,t.foulAvg=(a/r).toFixed(2),t.matches=r,t.items=e,t}));return a.sort(o({name:"fouls",reverse:!1},{name:"teamName",reverse:!1})),a}},QGkA:function(e,t,n){n("RNIs")("flat")},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),s=n("Bnag");e.exports=function _toConsumableArray(e){return a(e)||r(e)||o(e)||s()}},RNIs:function(e,t,n){var a=n("tiKp"),r=n("fHMY"),o=n("m/L8"),s=a("unscopables"),l=Array.prototype;null==l[s]&&o.f(l,s,{configurable:!0,value:r(null)}),e.exports=function(e){l[s][e]=!0}},STAE:function(e,t,n){var a=n("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},UUj4:function(e,t,n){n("vyb4").DEFUAULT_SCORES;var a=n("K8M1"),r=a.predicate,o=a.getDefaultScore;t.getTeamSeasonStats=function getTeamSeasonStats(e,t){var n={};return t.forEach((function(e){n[e.team.team_id]=o(),n[e.team.team_id].team=e.team})),e.forEach((function(e){var t,a,r=e.home,o=e.away,s=null==r||null===(t=r.team)||void 0===t?void 0:t.team_id,l=null==o||null===(a=o.team)||void 0===a?void 0:a.team_id;e.completed&&(n[s].played+=1,n[l].played+=1,r.goals.length==o.goals.length?(n[s].draw+=1,n[l].draw+=1):r.goals.length>o.goals.length?(n[s].won+=1,n[l].lost+=1):o.goals.length>r.goals.length&&(n[l].won+=1,n[s].lost+=1),n[s].goal_allowed+=o.goals.length,n[l].goal_allowed+=r.goals.length,n[s].goal_scored+=r.goals.length,n[l].goal_scored+=o.goals.length)})),(n=(n=Object.values(n)).map((function(e){return e.goal_diff=e.goal_scored-e.goal_allowed,e.points=1*e.draw+3*e.won,e}))).sort(r({name:"points",reverse:!0},{name:"goal_diff",reverse:!0},{name:"goal_scored",reverse:!0},{name:"teamName",reverse:!1})),Object.values(n)}},WkPL:function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},ZfDv:function(e,t,n){var a=n("hh1v"),r=n("6LWA"),o=n("tiKp")("species");e.exports=function(e,t){var n;return r(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!r(n.prototype)?a(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},fHMY:function(e,t,n){var a,r=n("glrk"),o=n("N+g0"),s=n("eDl+"),l=n("0BK2"),u=n("G+Rx"),i=n("zBJ4"),c=n("93I0"),m=c("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return"<script>"+e+"<\/script>"},NullProtoObject=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;NullProtoObject=a?function(e){e.write(scriptTag("")),e.close();var t=e.parentWindow.Object;return e=null,t}(a):((t=i("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(scriptTag("document.F=Object")),e.close(),e.F);for(var n=s.length;n--;)delete NullProtoObject.prototype[s[n]];return NullProtoObject()};l[m]=!0,e.exports=Object.create||function create(e,t){var n;return null!==e?(EmptyConstructor.prototype=r(e),n=new EmptyConstructor,EmptyConstructor.prototype=null,n[m]=e):n=NullProtoObject(),void 0===t?n:o(n,t)}},kus5:function(e,t,n){var a=n("q5+t").getAllGameStatsByType;t.getTotalCautionType=function getTotalCautionType(e,t){return void 0===t&&(t=1),a(e,"cautions").filter((function(e){return e&&e.caution_id==t}))}},ntwW:function(e,t,n){var a=n("RIqP"),r=(n("kus5").getTotalCautionType,n("q5+t").getAllGameStatsByType,n("N1G+").getSeasonStats),o=n("Fn3e").getSeasonTeams,s=n("7Zd8"),l=s.getPlayerGoals,u=s.getPlayerAssists,i=s.getPlayerCautions,c=s.getPlayerMom,m=s.getPlayerSaves,g=n("rg5Q"),f=g.getTeamGoals,d=g.getTeamAssists,p=g.getTeamCautions,y=g.getTeamMom,v=g.getTeamSaves;t.getFile=function getFile(e,t){return e.nodeModel.getAllNodes({type:"File"}).find((function(e){return e.relativePath==t}))},t.getCurrentSeason=function getCurrentSeason(e){var t=e.nodeModel.nodeModel._trackedRootNodes,n=e.nodeModel.getAllNodes({type:"MslSeasonsJson"}).map((function(e){return e.id})),r=a(t).find((function(e){return n.includes(e)}));return e.nodeModel.getNodeById({id:r})},t.getPlayerGoals=l,t.getPlayerAssists=u,t.getPlayerCautions=i,t.getPlayerMom=c,t.getPlayerSaves=m,t.getSeasonStats=r,t.getSeasonTeams=o,t.getTeamGoals=f,t.getTeamAssists=d,t.getTeamCautions=p,t.getTeamMom=y,t.getTeamSaves=v},o5e5:function(e,t){},or9q:function(e,t,n){"use strict";var a=n("6LWA"),r=n("UMSQ"),o=n("A2ZE"),flattenIntoArray=function(e,t,n,s,l,u,i,c){for(var m,g=l,f=0,d=!!i&&o(i,c,3);f<s;){if(f in n){if(m=d?d(n[f],f,t):n[f],u>0&&a(m))g=flattenIntoArray(e,t,m,r(m.length),g,u-1)-1;else{if(g>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[g]=m}g++}f++}return g};e.exports=flattenIntoArray},"q5+t":function(e,t,n){n("BIHw"),n("QGkA"),t.getAllGameStatsByType=function getAllGameStatsByType(e,t){return e.map((function(e){return e.gamestats})).flat().map((function(e){return e[t]&&Array.isArray(e[t])?e[t].map((function(t){return t.team=e.team,t})):e[t]})).flat().filter((function(e){return e}))}},rg5Q:function(e,t,n){var a=n("q5+t").getAllGameStatsByType,r=n("kus5").getTotalCautionType;t.getTeamGoals=function getTeamGoals(e,t){return a(e,"goals").filter((function(e){return!e.owngoal&&e.team==t}))},t.getTeamAssists=function getTeamAssists(e,t){return a(e,"goals").filter((function(e){return e.assist&&e.team==t}))},t.getTeamCautions=function getTeamCautions(e,t,n){return r(e,n).filter((function(e){return e.team==t}))},t.getTeamMom=function getTeamMom(e,t){return a(e,"mom").filter((function(e){return e.team==t}))},t.getTeamSaves=function getTeamSaves(e,t){return a(e,"keeper").filter((function(e){return e.team==t}))}},tiKp:function(e,t,n){var a=n("2oRo"),r=n("VpIT"),o=n("UTVS"),s=n("kOOl"),l=n("STAE"),u=n("/b8u"),i=r("wks"),c=a.Symbol,m=u?c:c&&c.withoutSetter||s;e.exports=function(e){return o(i,e)||(l&&o(c,e)?i[e]=c[e]:i[e]=m("Symbol."+e)),i[e]}},v3Oj:function(e,t,n){"use strict";var a=n("Wbzz"),r=n("q1tI"),o=n.n(r),s=n("3Rlc");t.a=function MslSeasonStatsItem(e){var t=e.season;return o.a.createElement("div",{className:"lg:flex lg:items-center lg:justify-between px-5"},o.a.createElement("div",{className:"flex-1 min-w-0"},o.a.createElement("h1",{className:"text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate"},o.a.createElement(a.Link,{to:t.seasonPath},"Season ",t.season_id," (",t.season_year,") →")),o.a.createElement("div",{className:"mt-4"},o.a.createElement(a.Link,{to:t.fixturePath,className:"text-base font-medium  text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 "},"Fixtures →")),o.a.createElement("div",{className:"mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4"},o.a.createElement(s.a,{title:"Games",value:t.seasonStats.games}),o.a.createElement(s.a,{title:"Teams",value:t.seasonStats.teams}),o.a.createElement(s.a,{title:"Players",value:t.seasonStats.players}),o.a.createElement(s.a,{title:"Goals",value:t.seasonStats.goals}),o.a.createElement(s.a,{title:"Fouls",value:t.seasonStats.fouls}),o.a.createElement(s.a,{title:"Own Goals",value:t.seasonStats.owngoals}),o.a.createElement(s.a,{title:"Assists",value:t.seasonStats.assists}),o.a.createElement(s.a,{title:"Players Scored",value:t.seasonStats.unique_players_goals}),o.a.createElement(s.a,{title:"Yellow Cards",value:t.seasonStats.yellow_cards}),o.a.createElement(s.a,{title:"Red Cards",value:t.seasonStats.red_cards}))))}},vyb4:function(e,t){var n;t.MslImgKey={PLAYER:"players",TEAM:"teams"},t.Cautions={YELLOW:1,RED:2},t.SCHEMA_TYPE_NAME=((n={MslSeasonsJson:"MslSeasonsJson",MslSchedulesJson:"MslSchedulesJson"}).MslSeasonsJson="MslSeasonsJson",n.MslTeamsJson="MslTeamsJson",n.MslPlayersJson="MslPlayersJson",n),t.DEFUAULT_SCORES={played:0,won:0,lost:0,draw:0,goal_allowed:0,goal_scored:0},t.FIELD_NAMES={PLAYER_ID:"player_id",PLAYER_MOS:"isMos",PLAYER_OWNER:"isOwner"}}}]);
//# sourceMappingURL=85f9cf57847763a6ceb613593bf68a29226eb37b-5e01abba5492d9db8d32.js.map