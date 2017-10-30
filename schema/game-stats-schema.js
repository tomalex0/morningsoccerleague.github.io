'use strict';

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */
const _ = require('lodash');
const TeamType = require('./team-schema');
const TeamsController = require('../controllers/teams');
const teamsCtrl  = new TeamsController();

const CautionStatsType = require('./caution-stats-shchema');

const GoalStatsType = require('./goal-stats-shcema');



const PlayerType = require('./player-schema');
const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();


let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const GameStatsType = new GraphQLObjectType({
        name: "GameStatsType",
        description: "This represent a game stats",
        fields: () => ({
            team: {
                type: TeamType,
                resolve : async function (root, args, db){
                    let teamId = root.team;
                    let teamData = await teamsCtrl.getDetails(root, args, db);
                    return  teamData;
                }
            },
            cautions: {
                type: new GraphQLList(CautionStatsType),
                description: "List of all Cautions",
                resolve: function(root, args) {
                    let cautions = root.cautions || [];
                    return cautions;
                }
            },
            goals: {
                type: new GraphQLList(GoalStatsType),
                description: "List of all Goals",
                resolve: function(root, args) {
                    let goals = root.goals || [];
                    return goals;
                }
            },
            mom: {
                type: new GraphQLList(PlayerType),
                description: "List of all mom players",
                resolve: async function(root, args, db) {
                    let momArr = root.mom || [];
                    let momPlayers = momArr.map(item => item.player);
                    root.players = momPlayers;

                    let playerArr = await playersCtrl.getList(root, args, db);
                    return playerArr;
                }
            }

        })
});

module.exports = GameStatsType;