var datetime = Math.round(new Date().getTime() / 1000);

var players = [];
var cautions = [];
var playerobj = {};
var cautionobj = {};

loadPlayers();
loadCautions();

$(document).ready(function () {
    $("#seasonSelector").trigger("change");
});

function  switchSeason(el) {

    loadTeams(loadSchedule,el.value)
}

function getTeamName (teamsArr, teamId) {
    return _.where(teamsArr,{id : teamId})[0];
}



function getPlayer (item){
    return playerobj[item['player']][0];
}

function getCautions (stats) {
    var cautions = []
    if(stats.cautions) {
        cautions = _.map(stats.cautions, function(item){
            return {
                player : getPlayer(item),
                card   : cautionobj[item['caution_id']][0],
                minute : item.minute
            }
        })
    }
    return cautions;
}

function getGoals (stats) {
    var goals = []
    if(stats.goals) {
        goals = _.map(stats.goals, function(item){
            return {
                player : getPlayer(item),
                minute : item.minute,
                owngoal : item.owngoal
            }
        })
    }
    return goals;
}

function  loadTeams (callback,season){
    $.getJSON('./data/teams.json?time='+datetime,function(json){
        callback(json,season)
    });
}
function  loadPlayers (){
    $.getJSON('./data/players.json?time='+datetime,function(json){
        players = json;
    });
}

function  loadCautions (){
    $.getJSON('./data/caution.json?time='+datetime,function(json){
        cautions = json;
    });
}

function buildTableData (teamsArr, scheduleArr){

    playerobj = _.groupBy(players,function (o) {
        return o.id;
    });
    cautionobj = _.groupBy(cautions,function (o) {
        return o.id;
    });
    var scheduleArrFormatted = [];
    _.each(scheduleArr,function(item, index){
        var newItem = JSON.parse(JSON.stringify(item));


        newItem.referees = _.map(item.referees,function(itemObj){

            return {
                team :  getTeamName(teamsArr, itemObj.team),
                player :  (itemObj.player) ? getPlayer(itemObj) : undefined
            };

        });


        newItem.home_team =  getTeamName(teamsArr, item.stats.home.team);
        newItem.away_team =  getTeamName(teamsArr, item.stats.away.team);

        newItem.home_mom = _.map(item.stats.home.mom,function(itemobj){
            return  getPlayer(itemobj)
        });
        newItem.away_mom =  _.map(item.stats.away.mom,function(itemobj){
            return  getPlayer(itemobj)
        });

        newItem.home_cautions = (item.stats) ? getCautions(item.stats.home) : [];
        newItem.away_cautions = (item.stats) ?  getCautions(item.stats.away) : [];

        newItem.home_goals = (item.stats) ? getGoals(item.stats.home) : undefined;
        newItem.away_goals = (item.stats) ?  getGoals(item.stats.away) : undefined;

        newItem.home_fouls = (item.stats) ? item.stats.home.fouls : 0;
        newItem.away_fouls = (item.stats) ?  item.stats.away.fouls : 0;


        scheduleArrFormatted.push(newItem)
    });

    return scheduleArrFormatted;

}

function  renderTable (scheduleData){

    var schedule_source   = $("#schedule-template").html();
    var schedule_template = Handlebars.compile(schedule_source);


    var schedule_html    = schedule_template(scheduleData);
    $('tbody').html(schedule_html);

}
var scheduleData
function  loadSchedule(teamsArr, season){

    $.getJSON('./data/schedule.json?time='+datetime,function(json){
        var seasonSchedule = json.filter(item => item.season == season);
        scheduleData = buildTableData(teamsArr, seasonSchedule);
        renderTable(scheduleData);
    });

}
