'use strict';

const _  = require('lodash');
const Teams = require('../data/teams');

class TeamsController {
    constructor() {

    }

    getList(listArr) {
        return (listArr)
            ? _.filter(Teams, item => listArr.indexOf(item.id) > -1 )
            : Teams;
    }

    getDetails(id) {
        return _.find(Teams, item => item.id == id);
    }


}

module.exports = TeamsController;
