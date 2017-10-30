'use strict';

const SeasonType = require('./season-schema');
const RefereeType = require('./referee-schema');
const GameStatsType = require('./game-stats-schema');

const SeasonsController = require('../controllers/seasons');
const seasonsCtrl  = new SeasonsController();

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLBoolean,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const ScheduleType = new GraphQLObjectType({
        name: 'Schedule',
        description: 'This represent a schedule',
        fields: () => ({
            scheduled_date: {type: new GraphQLNonNull(GraphQLString)},
            _id: {type: new GraphQLNonNull(GraphQLString)},
            completed : {type : GraphQLBoolean},
            season : {
                type : SeasonType,
                resolve : seasonsCtrl.getDetails
            },
            referees :{
                type : new GraphQLList(RefereeType),
                resolve : function (root, args){
                    let referees = root.referees;
                    return  referees;
                }
            },
            homestats : {
                type  : GameStatsType,
                resolve : function (root, args){
                    let stats = root.stats.home;
                    return  stats;
                }
            },
            awaystats : {
                type  : GameStatsType,
                resolve : function (root, args){
                    let stats = root.stats.away;
                    return  stats;
                }
            }
        })
});

module.exports = ScheduleType;