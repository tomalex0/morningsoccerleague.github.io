(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{X20h:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),m=t.n(l),n=t("Bl7J"),s=t("vrFN"),o=function MslScheduleCommon(){return m.a.createElement("div",{className:"grid grid-cols-6 gap-6"},m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"season",className:"block text-sm font-medium text-gray-700"},"Season"),m.a.createElement("select",{id:"season",name:"season",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Season 1"),m.a.createElement("option",null,"Season 2"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"scheduled_date",className:"block text-sm font-medium text-gray-700"},"Scheduled Date"),m.a.createElement("input",{type:"datetime-local",name:"scheduled_date",id:"scheduled_date",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"scheduled_time",className:"block text-sm font-medium text-gray-700"},"Scheduled Time"),m.a.createElement("input",{type:"time",name:"scheduled_time",id:"scheduled_time",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"ref_teams",className:"block text-sm font-medium text-gray-700"},"Teams"),m.a.createElement("select",{id:"ref_teams",name:"ref_team",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Team 1"),m.a.createElement("option",null,"Team 2"),m.a.createElement("option",null,"Team 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"ref_players",className:"block text-sm font-medium text-gray-700"},"Players"),m.a.createElement("select",{id:"ref_players",name:"ref_players",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Player 1"),m.a.createElement("option",null,"Player 2"),m.a.createElement("option",null,"Player 3"))),m.a.createElement("div",{className:"col-span-6 text-right"},m.a.createElement("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add Referee")))},r=function MslScheduleTeamInfo(e){var a=e.team_type,t=void 0===a?"away":a;return m.a.createElement("div",{className:"grid grid-cols-6 gap-6"},m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_team_"+t,className:"block text-sm font-medium text-gray-700"},"Teams"),m.a.createElement("select",{id:"game_team_"+t,name:"game_team_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Team 1"),m.a.createElement("option",null,"Team 2"),m.a.createElement("option",null,"Team 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_players_"+t,className:"block text-sm font-medium text-gray-700"},"Players"),m.a.createElement("select",{id:"game_players_"+t,name:"game_players_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Player 1"),m.a.createElement("option",null,"Player 2"),m.a.createElement("option",null,"Player 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_fouls_"+t,className:"block text-sm font-medium text-gray-700"},"Fouls"),m.a.createElement("input",{type:"number",name:"game_fouls_"+t,id:"game_fouls_"+t,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6"},m.a.createElement("h2",null,"Goals")),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"game_goal_scorer_"+t,className:"block text-sm font-medium text-gray-700"},"Players"),m.a.createElement("select",{id:"game_goal_scorer_"+t,name:"game_goal_scorer_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Player 1"),m.a.createElement("option",null,"Player 2"),m.a.createElement("option",null,"Player 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"game_goal_scorer_min_"+t,className:"block text-sm font-medium text-gray-700"},"Minute"),m.a.createElement("input",{type:"number",name:"game_goal_scorer_min_"+t,id:"game_goal_scorer_min_"+t,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6 text-right"},m.a.createElement("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add Goal")),m.a.createElement("div",{className:"col-span-6"},m.a.createElement("h2",null,"Keeper")),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"game_keeper_"+t,className:"block text-sm font-medium text-gray-700"},"Players"),m.a.createElement("select",{id:"game_keeper_"+t,name:"game_keeper_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Player 1"),m.a.createElement("option",null,"Player 2"),m.a.createElement("option",null,"Player 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-3"},m.a.createElement("label",{htmlFor:"game_saves_"+t,className:"block text-sm font-medium text-gray-700"},"Saves"),m.a.createElement("input",{type:"number",name:"game_saves_"+t,id:"game_saves_"+t,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6 text-right"},m.a.createElement("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add Keeper")),m.a.createElement("div",{className:"col-span-6"},m.a.createElement("h2",null,"Cautions")),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_caution_type_"+t,className:"block text-sm font-medium text-gray-700"},"Caution"),m.a.createElement("select",{id:"game_caution_type_"+t,name:"game_caution_type_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Yellow"),m.a.createElement("option",null,"Red"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_caution_player_"+t,className:"block text-sm font-medium text-gray-700"},"Players"),m.a.createElement("select",{id:"game_caution_player_"+t,name:"game_caution_player_"+t,className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},m.a.createElement("option",null,"Player 1"),m.a.createElement("option",null,"Player 2"),m.a.createElement("option",null,"Player 3"))),m.a.createElement("div",{className:"col-span-6 sm:col-span-2"},m.a.createElement("label",{htmlFor:"game_caution_min_"+t,className:"block text-sm font-medium text-gray-700"},"Minute"),m.a.createElement("input",{type:"number",name:"game_caution_min_"+t,id:"game_caution_min_"+t,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})),m.a.createElement("div",{className:"col-span-6 text-right"},m.a.createElement("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Add Caution")))};a.default=function ManageSchedule(e){var a=e.path;return m.a.createElement(n.a,null,m.a.createElement(s.a,{title:"Manage Schedule",path:a}),m.a.createElement("div",{className:"mx-auto justify-center items-center "},m.a.createElement("div",{className:"rounded-t-xl overflow-hidden bg-gradient-to-r gray-50 to-gray-100 p-10"},m.a.createElement("div",{className:"grid grid-rows-3 grid-flow-col gap-4"},m.a.createElement("div",{className:"col-span-4 bg-green-500 rounded-md md:flex justify-center items-start"},m.a.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-6 m-5"},m.a.createElement("div",{className:"mt-5 md:mt-0 md:col-span-2"},m.a.createElement("div",{className:"shadow overflow-hidden sm:rounded-md"},m.a.createElement("div",{className:"px-4 py-5 bg-white sm:p-6"},m.a.createElement(o,null)))))),m.a.createElement("div",{className:"row-span-0 col-span-4 md:row-span-2 md:col-span-2 bg-green-300 rounded-md md:flex justify-center items-start"},m.a.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-6 m-5"},m.a.createElement("div",{className:"mt-5 md:mt-0 md:col-span-2"},m.a.createElement("div",{className:"shadow overflow-hidden sm:rounded-md"},m.a.createElement("div",{className:"px-4 py-5 bg-white sm:p-6"},m.a.createElement(r,{team_type:"home"})))))),m.a.createElement("div",{className:"row-span-0 col-span-4 md:row-span-2 md:col-span-2 bg-green-500 rounded-md md:flex justify-center items-start"},m.a.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-6 m-5"},m.a.createElement("div",{className:"mt-5 md:mt-0 md:col-span-2"},m.a.createElement("div",{className:"shadow overflow-hidden sm:rounded-md"},m.a.createElement("div",{className:"px-4 py-5 bg-white sm:p-6"},m.a.createElement(r,{team_type:"away"}))))))))))}}}]);
//# sourceMappingURL=component---src-pages-manage-schedule-js-5b51b3bd81fe7de86f48.js.map