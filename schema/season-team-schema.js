
const TeamType = require('./team-schema');
const PlayerType = require('./player-schema');


const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

const TeamsController = require('../controllers/teams');
const teamsCtrl  = new TeamsController();


const _ = require('lodash');

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const SeasonTeamObjType = new GraphQLObjectType({
        name: "SeasonTeam",
        description: "This represent a players and team belongs to the season",
        fields: () => ({
            info: {
                type: TeamType,
                resolve: teamsCtrl.getDetails
            },
            players: {
                type: new GraphQLList(PlayerType),
                resolve: playersCtrl.getList
            },
            owners: {
                type: new GraphQLList(PlayerType),
                resolve: async function(root, args, db) {
                    root.players = root.owners;
                    let players = await playersCtrl.getList(root, args, db);
                    return players;
                }
            }
        })
});


const SeasonTeamType = new GraphQLObjectType({
    name: "SeasonTeamList",
    description: "This represent a players and team belongs to the season",
    fields: () => ({
        team: {
            type: SeasonTeamObjType,
            resolve: function(root, args) {
                return root;
            }
        }
    })
});

module.exports = SeasonTeamType;