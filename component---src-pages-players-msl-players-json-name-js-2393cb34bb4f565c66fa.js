(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+ujc":function(a,e,t){"use strict";t.r(e);var l=t("q1tI"),s=t.n(l),n=t("Wbzz"),r=t("Bl7J"),o=t("vrFN"),c=t("xicr");t("o5e5");e.default=function Player(a){var e=a.data,t=a.path,l=e.player;return s.a.createElement(r.a,null,s.a.createElement(o.a,{title:l.name,path:t}),s.a.createElement("h1",null,"Hi Player ",l.name," - ",l.player_id),s.a.createElement("div",null,s.a.createElement(c.a,{player:l})),s.a.createElement("ul",null,l.playerStats.seasonStats.map((function(a){return s.a.createElement("li",{key:a.season.season_id},s.a.createElement(n.Link,{to:a.season.seasonPath},a.season.season_id,"-",a.season.season_year),a.isOwner&&s.a.createElement("span",null,"---Owner"),s.a.createElement("span",null,"---",a.goals," Goals"),s.a.createElement("span",null,"---",a.team.teamName," Team"),s.a.createElement("span",null,"---",a.assists," Assist"),s.a.createElement("span",null,"---",a.yellow_cards," Yellow"),s.a.createElement("span",null,"---",a.red_cards," Red"),s.a.createElement("span",null,"---",a.mom," Mom"),s.a.createElement("span",null,"---",a.saves," Saves"),a.isMos&&s.a.createElement("span",null,"---Mos"))}))))}},o5e5:function(a,e){},xicr:function(a,e,t){"use strict";var l=t("Wbzz"),s=t("q1tI"),n=t.n(s);e.a=function MslPlayerStatsItem(a){var e=a.player;return n.a.createElement("li",{key:e.name},n.a.createElement(l.Link,{to:e.playerPath},e.player_id," - ",e.name),n.a.createElement("span",null,e.playerStats.allseasonStats.goals," Total Goals ---",e.playerStats.allseasonStats.assists," Total Assists---",e.playerStats.allseasonStats.mos," Total Mos---",e.playerStats.allseasonStats.yellow_cards," Total Yellow --",e.playerStats.allseasonStats.red_cards," Total Red --",e.playerStats.allseasonStats.mom," Total Mom --",e.playerStats.allseasonStats.saves," Total Saves --"))}}}]);
//# sourceMappingURL=component---src-pages-players-msl-players-json-name-js-2393cb34bb4f565c66fa.js.map