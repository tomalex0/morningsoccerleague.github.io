var datetime = Math.round(new Date().getTime() / 1000);



//var teamObj = {};


$(document).ready(function () {
    $("#seasonSelector").trigger("change");
});
var reducer = (accumulator, currentValue) => accumulator + currentValue;
function  switchSeason(el) {
    //teamObj = {}
    loadSeasonTeams(loadTeams,el.value)
}

function  loadSeasonTeams (callback, season){
    $.getJSON('./data/season_team.json?time='+datetime,function(json){
        var seasonObj = json.find(item => item.season == season) || {};
        var teams = _.pluck(seasonObj.teams,'id');
        var mos = seasonObj.mos;
        var season_team = json;

        callback(teams, mos, season, season_team)
    });
}

function  loadTeams (seasonTeam, mos, season, season_team){

    $.getJSON('./data/teams.json?time='+datetime,function(json){
        var teams = json.filter(item => seasonTeam.includes(item.id));

        loadPlayers(teams, mos, season, season_team)
    });
}
function  loadPlayers (teams, mos,season, season_team){

    $.getJSON('./data/players.json?time='+datetime,function(players){
        var moslist = [];
        for(i=0;i<mos.length;i++) {
            var playerdetails = getPlayerDetails(teams, season_team, mos[i], season, players)
            moslist.push(playerdetails);
        }

        var allPlayersDetails = [];

        for(i=0;i<players.length;i++) {
            var playerdetails = getPlayerDetails(teams, season_team, players[i].id, season, players)
            allPlayersDetails.push(playerdetails);
        }

        //console.log(JSON.stringify(allPlayersDetails))
        loadStats(teams, season, moslist,players, season_team, allPlayersDetails)
    });
}

function  getPlayerDetails(teams,season_team,player, season, players) {
    var seasonObj = season_team.find(item => item.season == season) || {};
    var teamSeasonObj = (seasonObj.teams).find(item => item.players.indexOf(player)>=0 ) || {};
    var teamObj = teams.find(item => item.id == teamSeasonObj.id) || {};
    var playerObj = players.find(item => item.id == player)


    var playerDetails = {
        player : playerObj,
        team : teamObj
    };
    return playerDetails;
}




function getDefaultScore(){
    var defaultScore = {
        played :  0,
        won :  0,
        lost : 0,
        draw : 0,
        goal_allowed : 0,
        goal_scored : 0
    };

    return defaultScore;
}

function  getFoulStats(teams,schedule) {
    var teamstatsArr = [];
    var groupedTeams = _.groupBy(teams,'id');
    schedule.forEach(item => {

        if(item.completed) {

            _.extend(item.stats.home,_.omit(groupedTeams[item.stats.home.team][0],'id'))
            _.extend(item.stats.away,_.omit(groupedTeams[item.stats.away.team][0],'id'))

            teamstatsArr.push(item.stats.home);
            teamstatsArr.push(item.stats.away);
         }
    });
    var foulsStatsArr = _
        .chain(teamstatsArr)
        .groupBy('team')
        .map(function(value, key) {
            var foulsData  = _.pluck(value, 'fouls');
            var totalFouls = foulsData.reduce(reducer);
            var foulAvg  = totalFouls/value.length;
            return {
                teamId: key,
                teamName : value[0].teamName,
                teamCls : value[0].teamCls,
                games : value.length,
                foulAvg : foulAvg.toFixed(2),
                fouls: foulsData.reduce(reducer),

            }
        })
        .value();
    var foulsStats = {};
    foulsStats.items = _.sortBy(foulsStatsArr, 'fouls').reverse();
    var totalFouls = _.pluck(foulsStats.items, 'fouls').reduce(reducer);
    var totalMatches = _.pluck(foulsStats.items, 'games').reduce(reducer);
    foulsStats.summary = {
        totalFouls : totalFouls,
        totalMatches : totalMatches,
        totalAvg  : (totalFouls/totalMatches).toFixed(2)
    };


    return foulsStats;
}

function  getGoalScorers(players, schedule, allPlayersDetails ) {
    var teamstatsArr = [];
    var groupedPlayers = _.groupBy(players,'id');
    schedule.forEach(item => {

        if(item.completed) {
            teamstatsArr.push(item.stats.home.goals);
            teamstatsArr.push(item.stats.away.goals);
        }
    });

    var scorersArr = _
        .chain(teamstatsArr)
        .flatten()
        .filter(function(item) { return !item.owngoal; })
        .groupBy('player')
        .map(function(value, key) {
            var teamDetails = allPlayersDetails.find(item =>{
                return item.player.id == key;
            });
            //console.log(teamDetails,key);
            return {
                playerid: key,
                playerName : groupedPlayers[key][0].name,
                goals: value.length,
                teamName : teamDetails.team.teamName,
                teamId : teamDetails.team.id,
                teamCls : teamDetails.team.teamCls
            }
        })
        .value();
    var scorerStats = {};
    scorerStats.items = _.sortBy(scorersArr,'goals').reverse();

    var totalGoals = _.pluck(scorerStats.items, 'goals').reduce(reducer);
    scorerStats.summary = {
        totalPlayers : scorerStats.items.length,
        totalGoals : totalGoals
    };

    return scorerStats;
}

function  getMomStats(players, schedule, allPlayersDetails ) {
    var teamstatsArr = [];
    var groupedPlayers = _.groupBy(players,'id');
    schedule.forEach(item => {

            if(item.completed) {
                if(item.stats.home.mom) {
                    teamstatsArr.push(item.stats.home.mom);
                }
                if(item.stats.away.mom) {
                    teamstatsArr.push(item.stats.away.mom);
                }

            }
    });

    var momArr = _
        .chain(teamstatsArr)
        .flatten()
        .groupBy('player')
        .map(function(value, key) {
            var teamDetails = allPlayersDetails.find(item =>{
                return item.player.id == key;
            });

            return {
                playerid: key,
                playerName : groupedPlayers[key][0].name,
                mom: value.length,
                teamName : teamDetails.team.teamName,
                teamId : teamDetails.team.id,
                teamCls : teamDetails.team.teamCls
            }
        })
        .value();
    var momStats = {};
    momStats.items = _.sortBy(momArr,'mom').reverse();

    var totalMom = _.pluck(momStats.items, 'mom').reduce(reducer);
    momStats.summary = {
        totalPlayers : momStats.items.length,
        totalMom : totalMom
    };

    return momStats;
}

function  getCautionStats(players, schedule, allPlayersDetails, cautionData ) {
    var teamstatsArr = [];
    var groupedPlayers = _.groupBy(players,'id');
    var groupedCaution = _.groupBy(cautionData,'id');
    schedule.forEach(item => {

        if(item.completed) {
            if(item.stats.home.cautions) {
                teamstatsArr.push(item.stats.home.cautions);
            }
            if(item.stats.away.cautions) {
                teamstatsArr.push(item.stats.away.cautions);
            }

        }
    });

    var cautionArr = _
        .chain(teamstatsArr)
        .flatten()
        .groupBy('caution_id')
        .map(function(value, key) {


            var groupCautionPlayers = _.groupBy(value,'player');
            var playerDataArr = _.map(groupCautionPlayers,(pl_val,pl_key) => {
                var teamDetails = allPlayersDetails.find(item =>{
                    return item.player.id == pl_key;
                });

                return {
                    playerid: pl_key,
                    playerName : groupedPlayers[pl_key][0].name,
                    cautions: pl_val.length,
                    teamName : teamDetails.team.teamName,
                    teamId : teamDetails.team.id,
                    teamCls : teamDetails.team.teamCls
                }
            });
            playerDataArr = _.sortBy(playerDataArr,'cautions').reverse();
            var totalCautions = _.pluck(playerDataArr, 'cautions').reduce(reducer);
            var summary = {
                totalPlayers : playerDataArr.length,
                playerLabel : (playerDataArr.length ==1) ? 'Player' : 'Players',
                totalCautions : totalCautions
            };
            return {
                cautionId : key,
                cautionName : groupedCaution[key][0].name,
                cautionCls : groupedCaution[key][0].cls,
                items :  playerDataArr,
                summary : summary
            };
        })
        .value();
    var cautionStats = {};
    cautionStats.items = cautionArr;


    return cautionStats;
}



function getTeamStats (teams, schedule){

    var teamObj = {};

    var groupedTeams = _.groupBy(teams,'id');


    _.each(schedule,function(itemobj, index){
        // console.log(itemobj);
        //var teamObj = {};


        var home = _.pick(itemobj.stats,'home').home;
        var away = _.pick(itemobj.stats,'away').away;


        if(home.goals && away.goals) {
            if(teamObj[home.team]){
                teamObj[home.team].played =  teamObj[home.team].played + 1;
            } else {
                teamObj[home.team] = getDefaultScore();
                teamObj[home.team].played = 1;
            }
            if(teamObj[away.team]){
                teamObj[away.team].played =  teamObj[away.team].played + 1;
            } else {
                teamObj[away.team] = getDefaultScore();
                teamObj[away.team].played = 1;
            }


            if(home.goals.length == away.goals.length) {

                if(home.team == 3 || away.team == 3){
                    //console.log(home,away,"if one");
                }

                teamObj[home.team].draw =  (teamObj[home.team].draw || 0 ) + 1;
                teamObj[away.team].draw =  (teamObj[away.team].draw || 0 ) + 1;

               // teamObj[away.team].goal_allowed =  teamObj[away.team].goal_allowed + home.goals.length;
               // teamObj[home.team].goal_allowed =  teamObj[home.team].goal_allowed + away.goals.length;



            } else if(home.goals.length > away.goals.length) {

                if(home.team == 3 || away.team == 3){
                    //console.log(home,away,"if two");
                }

                teamObj[home.team].won =  (teamObj[home.team].won || 0 ) + 1;
                teamObj[away.team].lost =  (teamObj[away.team].lost|| 0 ) + 1;

              //  teamObj[away.team].goal_allowed =  teamObj[away.team].goal_allowed + home.goals.length;
               // teamObj[home.team].goal_allowed =  teamObj[home.team].goal_allowed + away.goals.length;



            } else if(away.goals.length > home.goals.length) {

                if(home.team == 3 || away.team == 3){
                    //console.log(home,away,"if three");
                }

                teamObj[away.team].won =  (teamObj[away.team].won || 0 ) + 1;
                teamObj[home.team].lost =  (teamObj[home.team].lost || 0 ) + 1;

                //teamObj[home.team].goal_allowed =  teamObj[home.team].goal_allowed + away.goals.length;
                //teamObj[away.team].goal_allowed =  teamObj[away.team].goal_allowed + home.goals.length;
            }

            teamObj[home.team].goal_allowed =  teamObj[home.team].goal_allowed + away.goals.length;
            teamObj[away.team].goal_allowed =  teamObj[away.team].goal_allowed + home.goals.length;

            if(home.team == 3 || away.team == 3){
                //console.log(home,away,"if");
            }


            teamObj[home.team].goal_scored =  teamObj[home.team].goal_scored + home.goals.length;
            teamObj[away.team].goal_scored =  teamObj[away.team].goal_scored + away.goals.length;




        } else {
            //if(home.team == 2 || away.team == 2){
            //    console.log(home.team,away.team,"else");
            //}

            if(!teamObj[home.team]){

                teamObj[home.team] = getDefaultScore();
            }
            if(!teamObj[away.team]){

                teamObj[away.team] = getDefaultScore();
            }


        }


    });

    _.each(teamObj,function(itemobj, index){
        itemobj.goal_diff =  itemobj.goal_scored - itemobj.goal_allowed;

        itemobj.points =  (itemobj.draw * 1) +  (itemobj.won * 3);
        //console.log(groupedTeams[index]);

        itemobj.team = groupedTeams[index][0];


    });

    teamObj = _.values(teamObj)
    teamObj.sort(predicate({
        name : 'points',
        reverse : true
    },{
        name : 'goal_diff',
        reverse : true
    },{
        name : 'goal_scored',
        reverse : true
    }));

    return _.values(teamObj);
}

function  renderOverallStats(statsData) {
    var stats_source   = $("#stats-template").html();
    var stats_template = Handlebars.compile(stats_source);


    var stats_html    = stats_template(statsData);
    $('#overallStats').html(stats_html);
}
function  renderStats (statsData){

     renderOverallStats(statsData);


}



function  loadStats(teamsArr, season, moslist, players, season_team, allPlayersDetails){
    $.getJSON('./data/caution.json?time='+datetime,function(cautionData) {
        $.getJSON('./data/schedule.json?time=' + datetime, function (scheduleData) {
            var seasonSchedule = scheduleData.filter(item => item.season == season);
            var seasonTeam = season_team.filter(item => item.season == season);
            var teamStats = getTeamStats(teamsArr, seasonSchedule);
            var foulStats = getFoulStats(teamsArr, seasonSchedule);
            var goalScorerStats = getGoalScorers(players, seasonSchedule, allPlayersDetails);
            var momStats = getMomStats(players, seasonSchedule, allPlayersDetails);
            var cautionStats = getCautionStats(players, seasonSchedule, allPlayersDetails,cautionData);

            var details = {
                teamStats: teamStats,
                foulStats: foulStats,
                goalScorerStats: goalScorerStats,
                momStats: momStats,
                cautionStats : cautionStats,
                mos: moslist
            };

            renderStats(details);
        });
    });

}
