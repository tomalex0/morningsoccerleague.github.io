const admin = require("firebase-admin");
const fs = require('fs');

// Fetch the service account key JSON file contents
const serviceAccount = require("./serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://morningsoccerleague-b48bf.firebaseio.com"
});


let db = admin.firestore();

const group = (arr, k) => arr.reduce((r, c) => (r[c[k]] = [...r[c[k]] || [], c], r), {});

const groupBy = (arr, k, fn = () => true) =>
    arr.reduce((r, c) => (fn(c[k]) ? r[c[k]] = [...r[c[k]] || [], c] : null, r), {});

const cautions_collection = 'cautions_ref';
const players_collection = 'players_ref';
const teams_collection = 'teams_ref';
const seasons_collection = 'seasons_ref';



async function getSeason(){

    var seasons = await db.collection(seasons_collection).get();
    var seasonArr = await Promise.all(seasons.docs.map(async(seasonDoc) => {

        var season = seasonDoc.data();
        season.refId = seasonDoc.id;
        season.teams = [];

        console.log(season);

        var teams = await seasonDoc.ref.collection('teams').get();
        console.log(teams,teams_collection)
        var seasonTeamMapping =  await Promise.all(teams.docs.map(async (teamDoc) => {
            var teamsAwait = await teamDoc.data().ref.get();
            var team = teamsAwait.data();

            team.mapId =  teamDoc.id;
            team.refId =  teamsAwait.id;
            team.players = [];

            var players = await teamDoc.ref.collection('players').get();

            var teamPlayerMapping =  await Promise.all(players.docs.map(async (playerDoc) => {
                var playersAwait =  await playerDoc.data().ref.get();
                var player = playersAwait.data();
                player.mapId =  playerDoc.id;
                player.refId =  playersAwait.id;
                team.players.push(player);
                return team;
            }));

            season.teams.push(team);

            return season;

        }));

        return season;

    }));
    return seasonArr;
}

function generateDocJson (snapshot,key){
    var arr = [];
    snapshot.forEach((doc) => {
        var dataObj = doc.data();

        dataObj.refId = `${key}/${doc.id}`;
        arr.push(dataObj)
    });

    let data = JSON.stringify(arr, null, 2);
    fs.writeFileSync(`./data/${key}-fire.json`, data);
}






function deleteCollection(db, collectionPath, batchSize) {
    let collectionRef = db.collection(collectionPath);
    let query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, batchSize, resolve, reject);
    });
}

function deleteQueryBatch(db, query, batchSize, resolve, reject) {
    query.get()
        .then((snapshot) => {
            // When there are no documents left, we are done
            if (snapshot.size == 0) {
                return 0;
            }

            // Delete documents in a batch
            let batch = db.batch();
            snapshot.docs.forEach((doc) => {
                batch.delete(doc.ref);
            });

            return batch.commit().then(() => {
                return snapshot.size;
            });
        }).then((numDeleted) => {
        if (numDeleted === 0) {
            resolve(true);
            return;
        }

        // Recurse on the next process tick, to avoid
        // exploding the stack.
        process.nextTick(() => {
            deleteQueryBatch(db, query, batchSize, resolve, reject);
        });
    })
        .catch(reject);
}



async function addToCollection(collection,data) {
    return await db.collection(collection).add(data);
}

async function addData (item, collection){

    var data =  await addToCollection(collection,item);
    var doc = await data.get();
    var newdata = doc.data();
    newdata.refId = doc.id;

    return newdata;
}

async function importData(){

    var cautions  = require('./data/caution');
    var players  = require('./data/players');
    var seasons  = require('./data/season');
    var teams  = require('./data/teams');

    var  cstats = await deleteCollection(db,cautions_collection,1);
    var sstats = await deleteCollection(db,seasons_collection,1);
    var tstats = await deleteCollection(db,teams_collection,1);
    var pstats = await deleteCollection(db,players_collection,1);
    console.log(cstats,sstats,tstats,pstats)

    if(cstats == true && sstats == true && tstats == true && pstats ==true){

        var cautionArr = await Promise.all(cautions.map(async item => {
            return await addData(item, cautions_collection)
        }));

        //console.log(cautionArr,2)

        var playerArr = await Promise.all(players.map(async item => {
            return await addData(item, players_collection)
        }));
        //console.log(playerArr,4)
        var teamArr = await Promise.all(teams.map( async item => {
            return await addData(item, teams_collection)
        }));
        //console.log(teamArr,6)

        var seasonArr = await Promise.all(seasons.map( async item => {
            return await addData(item, seasons_collection)

        }));
        //console.log(seasonArr,8)
        importSeason();
    }


}

async function  importSeason() {


    var season_team  = require('./data/season_team');


    var seasonsArr = await db.collection(seasons_collection).get();
    var seasonsArrRef = seasonsArr.docs.map(item => {
        var newitem = item.data();
        newitem.refId = `${seasons_collection}/${item.id}`;
        return newitem;
    });
    var seasonGroup = groupBy(seasonsArrRef,'id');


    var playersArr = await db.collection(players_collection).get();
    var playersArrRef = playersArr.docs.map(item => {
        var newitem = item.data();
        newitem.refId = `${players_collection}/${item.id}`;
        return newitem;
    });
    var playerGroup = groupBy(playersArrRef,'id');

    var teamsArr = await db.collection(teams_collection).get();
    var teamsArrRef = teamsArr.docs.map(item => {
        var newitem = item.data();
        newitem.refId = `${teams_collection}/${item.id}`;
        return newitem;
    });
    var teamGroup = groupBy(teamsArrRef,'id');



    season_team.forEach( async (seasonitem) => {
        //console.log(item);
        var season  = await db.collection(seasons_collection).where("id","==",seasonitem.season).get();
        var mosArr = seasonitem.mos.map(item => {
            return db.doc(`${playerGroup[item][0].refId}`);
        });

        // db.collection(seasons_collection).doc(season.docs[0].id).set({
        //     mos : mosArr
        // },{merge: true})
        //console.log(seasonitem.season,mosArr);
        seasonitem.teams.forEach(teamitem =>{
            //console.log(seasonitem.season, teamitem.id,teamGroup[teamitem.id][0].refId);

            var teamplayers = teamitem.players.map(playerItem =>{
                return db.doc(`${playerGroup[playerItem][0].refId}`);
            })
            db.collection(seasons_collection).doc(season.docs[0].id).collection('teams').add({
                ref : db.doc(`${teamGroup[teamitem.id][0].refId}`)
            })
                .then(function (docRef) {
                    teamplayers.forEach(function(item) {
                        docRef.collection('players').add({
                            ref : item
                        })
                    })

                })

        })
    });

}

function downloadJsonFromDb(){
    db.collection(players_collection).orderBy('id', 'asc').get()
        .then((snapshot) => {
            generateDocJson(snapshot,'players')
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    db.collection(seasons_collection).orderBy('id', 'asc').get()
        .then((snapshot) => {
            generateDocJson(snapshot,'seasons')
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });


    db.collection(cautions_collection).orderBy('id', 'asc').get()
        .then((snapshot) => {
            generateDocJson(snapshot,'cautions')
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    db.collection(teams_collection).orderBy('id', 'asc').get()
        .then((snapshot) => {
            generateDocJson(snapshot,'teams')
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}


getSeason().then((val) => {
   //console.log(JSON.stringify(val));

    let data = JSON.stringify(val, null, 2);
    fs.writeFileSync(`./data/season-map.json`, data);
});

// As an admin, the app has access to read and write all data, regardless of Security Rules


//importData();
//importSeason();
//downloadJsonFromDb()







// db.collection('seasons').doc('v3yBGGwXKcfDk3wpktoV').collection('teams').get()
//     .then((snapshot) => {
//         snapshot.forEach((doc) => {
//             //console.log(doc)
//             var a = doc.data();
//              console.log(a)
//             // a.teamRef.get()
//             //     .then((tsnapshot) => {
//             //         console.log(tsnapshot.data());
//             //     })
//             //console.log(doc.id, '=>', doc.data());
//         });
//     })
//     .catch((err) => {
//         console.log('Error getting documents', err);
//     });



