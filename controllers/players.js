'use strict';

const _  = require('lodash');
const utility = require('../lib/utility');


class PlayersController {

    constructor() {

    }

    async getList(root, args, db) {


        let playersArr  =  args.players;


        let queryCondition = {};

        if(root && root.players) {
            playersArr = root.players;

            let playerObjIds = utility.wrapObjectIdArr(playersArr);
            queryCondition = { '_id' : { $in : playerObjIds } };

        }


        let data =  await db.collection('players').find(queryCondition).toArray(); // 2



        return data;
    }

    async getDetails(root, args, db) {

        let playerId = root.player;
        let data = await db.collection('players').findOne({_id : utility.wrapObjectId(playerId)});
        return data;
    }

    async addPlayer (root, args, db){

        let name = args.name;
        let data = await db.collection('players').insertOne({
                name:  name
            })
            .then(function(result) {
               return result.ops[0];
            });

        return data;

    }

    async updatePlayer (root, args, db){

        let name = args.name;
        let _id = utility.wrapObjectId(args._id);

        let data = await db.collection('players').findOneAndUpdate(
            {
                _id:_id
            },
            {
                $set:{
                    name:name
                }
            },
            {
                returnOriginal : false
            }
            )
            .then(function(result, error) {
                return result.value;
            });

        return data;

    }


}

module.exports = PlayersController;
