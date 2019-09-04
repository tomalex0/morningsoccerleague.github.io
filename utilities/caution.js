var players = `1	Gursewak Gill	34	7:27	0:46`;



var result =  JSON.stringify(players.split("\n").map(item => {
    var arr = item.split("\t");
    if(!arr[2])  return false;
    var obj =  {
        
        "caution_id": 1,
        "player": parseInt(arr[2]),
        "minute": parseFloat(arr[4].split(":")[1]).toString()
    };
    return  obj;
}).filter(Boolean));

console.log(result)
