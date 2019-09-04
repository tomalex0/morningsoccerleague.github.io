var players = `1	Geen George	28	3
`;



var result =  JSON.stringify(players.split("\n").map(item => {
    var arr = item.split("\t");
    if(!arr[2])  return false;
    var obj =  {
        "player": parseInt(arr[2]),
        "saves" :  parseInt(arr[3])
    };
    return  obj;
}).filter(Boolean));

console.log(result)
