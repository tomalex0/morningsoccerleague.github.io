'use strict';

const _  = require('lodash');
const Teams = require('../data/teams');
const utility = require('../lib/utility');

class TeamsController {
    constructor() {

    }


    async getList(root, args, db) {

        let teamsArr  =  args.teams;
        let queryCondition = {};

        if(teamsArr) {
            let teamObjIds = utility.wrapObjectIdArr(teamsArr);
            queryCondition = { "_id" : { $in : teamObjIds } };
        }

        let data =  await db.collection('teams').find(queryCondition).toArray(); // 2

        return data;
    }

    async getDetails(id) {
        let data = await db.collection('teams').findOne({_id : utility.wrapObjectId(id)});
        return data;
    }

    getDetails(id) {
        return _.find(Teams, item => item.id == id);
    }


}

module.exports = TeamsController;
