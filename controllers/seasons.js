'use strict';

const _  = require('lodash');
const utility = require('../lib/utility');


class SeasonsController {
    constructor() {

    }


    async getList(root, args, db) {

        let seasonArr  =  args.seasons;

        let queryCondition = {};

        if(seasonArr) {
            let playerObjIds = utility.wrapObjectIdArr(seasonArr);
            queryCondition = { "_id" : { $in : playerObjIds } };
        }

        let data =  await db.collection('seasons').find(queryCondition).toArray();

        return data;
    }

    async getDetails(root, args, db) {

        let seasonId = utility.wrapObjectId(root.season);

        let data =  await db.collection('seasons').findOne({"_id" : seasonId});

        return data;
    }


}

module.exports = SeasonsController;
