var schedule = require('./schedule.json');

function setSchedule(item){
    var refs = item.Referees.split("&");

    var dateval = item.Date.split("/");

    var schobj = {
        "scheduled_date": `${dateval[1]}/${dateval[0]}/${dateval[2]}`,
        "scheduled_time": `${item.Time}`,
        "season": 3,
        "referees": [{
            "team": parseInt(refs[0].trim())
        },{
            "team": parseInt(refs[1].trim())
        }],
        "completed": false,
        "stats": {
            "home": {
                "team": item.Home,
                "goals" : [],
                "fouls" : 0
            },
            "away": {
                "team": item.Away,
                "goals" : [],
                "fouls" : 0
            }
        }
    }
    return schobj;
}

var schedulearr = [];
schedule.forEach(function(item,index){
    var newobj = setSchedule(item);
    schedulearr.push(newobj);

});
console.log(JSON.stringify(schedulearr))