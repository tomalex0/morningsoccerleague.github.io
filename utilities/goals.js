var players = `1	Elwin Johny	Elwin Johny	0	60			7:46	0:01
2	Elwin Johny	Elwin Johny	0	60	Joseph Senay	100	8:37	0:48`;



function replacer( key, value ) {
    value.player = parseInt(value.player);
    value.assist = parseInt(value.assist);
    return value;

}

var result =  JSON.stringify(players.split("\n").map(item => {
    var arr = item.split("\t");
    var obj =  {
        "minute": parseFloat(arr[8].split(":")[1]).toString(),
        "player" :  parseInt(arr[4])
    };
    if(arr[6]) {
        obj.assist =  parseInt(arr[6])
    }
    return obj;
}));

console.log(result)
