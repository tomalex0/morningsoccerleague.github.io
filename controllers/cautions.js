'use strict';

const _  = require('lodash');

const utility = require('../lib/utility');

class CautionsController {
    constructor() {

    }


    async getList(root, args, db) {

        let queryCondition = {};


        let data =  await db.collection('cautions').find(queryCondition).toArray(); // 2

        return data;
    }

    async getDetails(root, args, db) {
        let cautionId = root.caution_id;
        let data = await db.collection('cautions').findOne({_id : utility.wrapObjectId(cautionId)});
        return data;
    }


}

module.exports = CautionsController;
