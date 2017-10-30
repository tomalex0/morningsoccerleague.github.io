'use strict';

const _  = require('lodash');
const utility = require('../lib/utility');


class ScheduleController {
    constructor() {

    }


    async getList(root, args, db) {
        let data = await db.collection('schedule').find().toArray();

        return data;
    }

    async getListBySeason(root, args, db) {
        let seasonId = root.season;
        let data = await db.collection('schedule').find({'season': `${seasonId}`}).toArray();
        return data;
    }


}

module.exports = ScheduleController;
