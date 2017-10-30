'use strict';

const PlayerType = require('./player-schema');
const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLBoolean,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const GoalStatsType = new GraphQLObjectType({
    name: 'GoalStats',
    description: 'This represent caution stats',
    fields: () => ({
        player : {
            type: PlayerType,
            description: 'List of all Player',
            resolve:  playersCtrl.getDetails
        },
        minute: {
            type: GraphQLString
        },
        owngoal: {
            type: GraphQLBoolean
        }
    })
});

module.exports = GoalStatsType;