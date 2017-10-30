'use strict';

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
    GraphQLInt,
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
            args:{
                teams :{type:new GraphQLList(GraphQLString)}
            },
            resolve: teamsCtrl.getList
        },
        seasons: {
            type: new GraphQLList(SeasonType),
            args:{
                seasons :{type:new GraphQLList(GraphQLString)}
            },
            description: "List of all Seasons",
            resolve: seasonsCtrl.getList
        },
        players: {
            type: new GraphQLList(PlayerType),
            description: "List of Players",
            args:{
                players :{type:new GraphQLList(GraphQLString)}
            },
            resolve: async function(root, args, db){
                let data = await playersCtrl.getList(root, args, db);
                return data;
            }
        },
        cautions: {
            type: new GraphQLList(CautionType),
            description: "List of all Cautions",
            resolve: cautionsCtrl.getList
        },
        schedule: {
            type: new GraphQLList(ScheduleType),
            description: "List of all Schedule",
            resolve: scheduleCtrl.getList
        }
    })
});


module.exports = MorninigSoccerQueryRootType;