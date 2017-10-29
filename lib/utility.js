'use strict';

let  ObjectID = require('mongodb').ObjectID;


module.exports.wrapObjectId = function(objId){
    return new ObjectID(objId);
};


module.exports.wrapObjectIdArr = function(objIdArr){


    let objArr = objIdArr.map(item => this.wrapObjectId(item));

    return objArr;
};