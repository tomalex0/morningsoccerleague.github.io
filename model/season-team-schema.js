
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

const SeasonTeamType = new GraphQLObjectType({
        name: "SeasonTeam",
        description: "This represent a players and team belongs to the season",
        fields: () => ({
            team: {
                type: TeamType,
                resolve: function(root, team) {
                    let teamId = root.team;
                    return teamsCtrl.getDetails(teamId)
                }
            },
            players: {
                type: new GraphQLList(PlayerType),
                resolve: function(root, team) {
                    let playersList = root.players;
                    return playersCtrl.getList(playersList)
                }
            },
            owners: {
                type: new GraphQLList(PlayerType),
                resolve: function(root, team) {
                    let playersList = root.owners;
                    return playersCtrl.getList(playersList)
                }
            }
        })
});

module.exports = SeasonTeamType;