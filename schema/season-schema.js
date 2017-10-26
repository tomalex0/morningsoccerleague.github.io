'use strict';

const SeasonTeamType = require('./season-team-schema');

const ScheduleController = require('../controllers/schedule');
const scheduleCtrl  = new ScheduleController();

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
            id: {type: new GraphQLNonNull(GraphQLInt)},
            description: {type: GraphQLString},
            teams: {
                type: new GraphQLList(SeasonTeamType),
                args:{
                    teams :{type:new GraphQLList(GraphQLInt)}
                },
                resolve: function(root, args) {
                    let teamsArr = (args.teams)
                                    ? _.filter(root.teams, item => args.teams.indexOf(item.team) > -1 )
                                    : root.teams;
                    return teamsArr;
                }
            },
            schedule: {
                type : new GraphQLList(require('./schedule-schema')),
                resolve: function(root, args) {
                    let seasonId = root.id;
                    let scheduleData = scheduleCtrl.getListBySeason(seasonId);
                    return scheduleData;
                }
            }
        })
});

module.exports = SeasonType;