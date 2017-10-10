'use strict';

const _  = require('lodash');
const Cautions = require('../data/caution');

class CautionsController {
    constructor() {

    }


    getList(listArr) {
        return (listArr)
                ? _.filter(Cautions, item => listArr.indexOf(item.id) > -1 )
                : Cautions;
    }

    getDetails(id) {
        return _.find(Cautions, item => item.id == id);
    }


}

module.exports = CautionsController;
