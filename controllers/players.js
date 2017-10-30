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


}

module.exports = PlayersController;
