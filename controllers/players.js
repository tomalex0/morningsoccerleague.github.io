'use strict';

const _  = require('lodash');
const Players = require('../data/players');

class PlayersController {
    constructor() {

    }


    getList(listArr) {
        return (listArr)
                ? _.filter(Players, item => listArr.indexOf(item.id) > -1 )
                : Players;
    }

    getDetails(id) {
        return _.find(Players, item => item.id == id);
    }


}

module.exports = PlayersController;
