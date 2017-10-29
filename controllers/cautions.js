'use strict';

const _  = require('lodash');
const Cautions = require('../data/caution');
const utility = require('../lib/utility');

class CautionsController {
    constructor() {

    }


    async getList(root, args, db) {

        let queryCondition = {};


        let data =  await db.collection('cautions').find(queryCondition).toArray(); // 2

        return data;
    }

    async getDetails(id) {
        let data = await db.collection('cautions').findOne({_id : utility.wrapObjectId(id)});
        return data;
    }


}

module.exports = CautionsController;
