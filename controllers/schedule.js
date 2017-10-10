'use strict';

const _  = require('lodash');
const Schedule = require('../data/schedule');

class ScheduleController {
    constructor() {

    }


    getList(listArr) {
        return Schedule;
    }

    getListBySeason(id) {
        return _.filter(Schedule, item => item.season == id);
    }


}

module.exports = ScheduleController;
