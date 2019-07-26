var players = `6
85
56
99
49
60
100
101
63
90
31
25`;

function replacer( key, value ) {
    value.player = parseInt(value.player)

    return value;

}

var result =  JSON.stringify(players.split("\n").map(item => {
    return {"player": item}
}),replacer);

console.log(result)