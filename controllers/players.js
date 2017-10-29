'use strict';

const _  = require('lodash');
const Players = require('../data/players');
const utility = require('../lib/utility');


class PlayersController {

    constructor() {

    }

    async getList(root, args, db) {

        let playersArr  =  args.players;
        let queryCondition = {};

        if(playersArr) {
            let playerObjIds = utility.wrapObjectIdArr(playersArr);
            queryCondition = { "_id" : { $in : playerObjIds } };
        }


        let data =  await db.collection('players').find(queryCondition).toArray(); // 2

        return data;
    }

    async getDetails(id) {
        let data = await db.collection('players').findOne({_id : utility.wrapObjectId(id)});
        return data;
    }

    playerSchemaResolve (root, args){

        let playerId = root.player;
        let playerObj  = this.getDetails(playerId);
        return playerObj;
    }


}

module.exports = PlayersController;
