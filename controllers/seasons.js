'use strict';

const _  = require('lodash');
const Seasons = require('../data/season');

class SeasonsController {
    constructor() {

    }


    getList(listArr) {
        return (listArr)
                ? _.filter(Seasons, item => listArr.indexOf(item.id) > -1 )
                : Seasons;
    }

    getDetails(id) {
        return _.find(Seasons, item => item.id == id);
    }


}

module.exports = SeasonsController;
