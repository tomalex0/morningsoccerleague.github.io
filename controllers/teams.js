'use strict';

const _  = require('lodash');
const utility = require('../lib/utility');

class TeamsController {

    constructor() {

    }


    async getList(root, args, db) {


        let queryCondition = {};

        if(args && args.teams) {
            let teamObjIds = utility.wrapObjectIdArr(teamsArr);
            queryCondition = { '_id' : { $in : teamObjIds } };
        }

        let data =  await db.collection('teams').find(queryCondition).toArray(); // 2

        return data;
    }

    async getDetails(root, args, db) {
        let teamId = root.team;
        let data = await db.collection('teams').findOne({_id : utility.wrapObjectId(teamId)});
        return data;
    }



}

module.exports = TeamsController;
