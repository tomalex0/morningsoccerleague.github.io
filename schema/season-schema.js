'use strict';

const SeasonTeamType = require('./season-team-schema');

const ScheduleController = require('../controllers/schedule');
const scheduleCtrl  = new ScheduleController();

const SeasonController= require('../controllers/seasons');
const seasonCtrl  = new SeasonController();

const TeamsController = require('../controllers/teams');
const teamsCtrl  = new TeamsController();


/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

const _ = require('lodash');
let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const SeasonType = new GraphQLObjectType({
        name: "Season",
        description: "This represent a season",
        fields: () => ({
            _id: {type: new GraphQLNonNull(GraphQLString)},
            season_no: {type: new GraphQLNonNull(GraphQLString)},
            description: {type: GraphQLString},
            teams: {
                type: new GraphQLList(SeasonTeamType),
                args:{
                    teams :{type:new GraphQLList(GraphQLString)}
                },
                resolve: function(root, args, db) {
                    return root.teams;
                }
            },
            schedule: {
                type : new GraphQLList(require('./schedule-schema')),
                resolve: scheduleCtrl.getListBySeason
            }
        })
});

module.exports = SeasonType;