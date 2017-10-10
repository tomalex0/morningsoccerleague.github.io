'use strict';

const _ = require('lodash');


const TeamType = require('./team-schema');
const PlayerType = require('./player-schema');
const CautionType = require('./caution-schema');
const SeasonType = require('./season-schema');
const ScheduleType = require('./schedule-schema');

const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

const TeamsController = require('../controllers/teams');
const teamsCtrl  = new TeamsController();

const SeasonsController = require('../controllers/seasons');
const seasonsCtrl  = new SeasonsController();

const CautionsController = require('../controllers/cautions');
const cautionsCtrl  = new CautionsController();

const ScheduleController = require('../controllers/schedule');
const scheduleCtrl  = new ScheduleController();




/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull,
    // This is the class we need to create the schema
    GraphQLSchema,
    } = require('graphql');


// This is the Root Query
const MorninigSoccerQueryRootType = new GraphQLObjectType({
        name: 'MorningSoccerAppSchema',
        description: "MorninigSoccer Application Schema Query Root",
        fields: () => ({
            teams: {
                type: new GraphQLList(TeamType),
                description: "List of all Teams",
                resolve: function() {
                    return teamsCtrl.getList();
                }
            },
            seasons: {
                type: new GraphQLList(SeasonType),
                description: "List of all Seasons",
                resolve: function(args) {
                    return seasonsCtrl.getList();
                }
            },
            players: {
                type: new GraphQLList(PlayerType),
                description: "List of all Players",
                resolve: function(args) {
                    return playersCtrl.getList();
                }
            },
            cautions: {
                type: new GraphQLList(CautionType),
                description: "List of all Cautions",
                resolve: function(args) {
                    return cautionsCtrl.getList();
                }
            },
            schedule: {
                type: new GraphQLList(ScheduleType),
                description: "List of all Schedule",
                resolve: function(args) {
                    return scheduleCtrl.getList();
                }
            }
        })
});

// This is the schema declaration
const MorningSoccerAppSchema = new GraphQLSchema({
    query: MorninigSoccerQueryRootType
    // If you need to create or updata a datasource,
    // you use mutations. Note:
    // mutations will not be explored in this post.
    // mutation: BlogMutationRootType
});

module.exports = MorningSoccerAppSchema;