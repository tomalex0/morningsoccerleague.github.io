var datetime = Math.round(new Date().getTime() / 1000);




$(document).ready(function () {

    loadSeasonTeams(loadTeamsMembers)

});

function  loadSeasonTeams (callback){
    $.getJSON('./data/season_team.json?time='+datetime,function(json){
        callback(json)
    });
}

function  getTeamsDetails(teamIdArr,teamsObjArr, playersObjArr){


    _.each(teamIdArr,function(teamIditem){

        teamIditem.team = teamsObjArr[teamIditem.id][0];

        teamIditem.teamName = teamsObjArr[teamIditem.id][0].teamName;
        var playersArr =[];

        var ownersArr =[];

        _.each(teamIditem.players,function(playersItem){

            playersArr.push(playersObjArr[playersItem][0]);
        });

        _.each(teamIditem.owners,function(playersItem){

            ownersArr.push(playersObjArr[playersItem][0]);
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
var season = 1;
function  loadTeamsMembers(seasonsTeams){
    //console.log(seasonsTeams);

    var teamItem =_.find(seasonsTeams,function(item){
        return item.season == season;
    });

    console.log(teamItem)

    var teamIdArr = teamItem.teams;

    $.getJSON('./data/players.json?time='+datetime,function(playersArr){

        var playerObjsArr = _.groupBy(playersArr,'id');

        $.getJSON('./data/teams.json?time='+datetime,function(teamsArr){

            var teamsObjsArr = _.groupBy(teamsArr,'id');

            var teamMemberList = getTeamsDetails(teamIdArr,teamsObjsArr, playerObjsArr );
            console.log(teamMemberList,'===========');

            renderTable(teamMemberList)
        });

    });


}