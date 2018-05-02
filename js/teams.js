var datetime = Math.round(new Date().getTime() / 1000);




$(document).ready(function () {

    $("#seasonSelector").trigger("change");


});

function  switchSeason(el) {

    loadSeasonTeams(loadTeamsMembers,el.value)
}

function  loadSeasonTeams (callback, season){
    $.getJSON('./data/season_team.json?time='+datetime,function(json){
        callback(json, season)
    });
}

function  getTeamsDetails(teamIdArr,teamsObjArr, playersObjArr){


    _.each(teamIdArr,function(teamIditem){

        teamIditem.team = teamsObjArr[teamIditem.id][0];

        teamIditem.teamName = teamsObjArr[teamIditem.id][0].teamName;
        var playersArr =[];

        var ownersArr =[];

        _.each(teamIditem.players,function(playersItem){

            var playerObj = playersObjArr[playersItem][0];

            playerObj.isOwner = ((teamIditem.owners).indexOf(playersItem) >=0 )? true : false;


            playersArr.push(playerObj);
        });



        teamIditem.owners = ownersArr;
        teamIditem.players = playersArr;

        (teamIditem.players).sort(predicate({
            name : 'name',
            reverse : false
        }));


    });



    (teamIdArr).sort(predicate({
        name : 'teamName',
        reverse : false
    }));


    return teamIdArr;
}


function  renderTable (teamMembers){

    var teams_source   = $("#teams-template").html();
    var teams_template = Handlebars.compile(teams_source);


    var teams_html    = teams_template(teamMembers);
    $('#teams-members').html(teams_html);

}


var teamMembers;
//var season = 1;
function  loadTeamsMembers(seasonsTeams, season){
    //console.log(seasonsTeams);

    var teamItem =_.find(seasonsTeams,function(item){
        return item.season == season;
    }) || {};

    //console.log(teamItem)

    var teamIdArr = teamItem.teams || [];

    $.getJSON('./data/players.json?time='+datetime,function(playersArr){

        var playerObjsArr = _.groupBy(playersArr,'id');

        $.getJSON('./data/teams.json?time='+datetime,function(teamsArr){

            var teamsObjsArr = _.groupBy(teamsArr,'id');

            var teamMemberList = getTeamsDetails(teamIdArr,teamsObjsArr, playerObjsArr );
           // console.log(teamMemberList,'===========');

            renderTable(teamMemberList)
        });

    });


}
